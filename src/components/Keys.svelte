<script>
  import { keyboard, recordingStack } from '../stores'

  let keyboardState
  export let synth

  keyboard.subscribe((keys) => (keyboardState = keys))

 /*
   *  records/ adds the played note to the recordingStack store. 
   * @param {string} note the note to be added to the stack. e.g. C1
   */

  function addToRecordingStack(note){
    recordingStack.update( stack => {
      if(stack.position == stack.max)
        return stack;

      stack.notes[stack.position].note = note; 
      stack.position++;
      return stack;
    })
  }

  /*
   *  Updates the state of `keyboard` in the global store.
   * @param {number} index the index of the key to be updated
   * @param {boolean} value the value to update key.keydown
   */

  function updateState(index, value) {
    keyboard.update((keys) => {
      keys[index].keydown = value
      return keys
    })
  }

  /*
   *  Sets a key from the virtual keyboard to keydown = true
   * @param {Object} key the key in the virtual keyboard that was clicked on.
   * @param {string} key.label 
   * @param {boolean} key.keydown wether the key state is set to down.
   * @param {string} key.note the note that this particular key corresponds to.
   */

  function setToKeydown(key) {
    const index = keyboardState.findIndex((k) => k.label === key.label)
    if (index >= 0) updateState(index, true)
    return index
  }

  /*
   *  Handles Mouse clicks in the virtual keyboard
   * @param {Object} key the key in the virtual keyboard that was clicked on.
   */

  function handleClick(key) {
    const index = setToKeydown(key)
    synth.noteOn(key.note, '8n')
     addToRecordingStack(key.note);

    setTimeout(() => updateState(index, false), 150)
  }

  /*
   *  Handle physical keyboard key down
   * @param {Object} event the keydown event object. 
   */

  function handleKeydown(event) {
    const index = setToKeydown({ label: event.key })
    const note = keyboardState[index].note;

    synth.noteOn(note, '8n')

     addToRecordingStack(note);

    if (index >= 0) setTimeout(() => updateState(index, false), 150)
  }
</script>

<svelte:window on:keydown={handleKeydown} />

{#each keyboardState as key}
  <div on:click={() => handleClick(key)} class="key-container">
    {#if key.keydown}
      <img src="images/keydown.svg" alt="" class="key" />
    {:else}
      <img src="images/key.svg" alt="" class="key" />
    {/if}
    <span class="label {key.keydown ? 'down' : 'up'}">
      {key.label}
    </span>
  </div>
{/each}

<div class="controls">
  <button on:click={() => synth.start()}> start sound </button>
</div>

<style>
  .key-container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .controls {
    display: flex;
    justify-content: center;
  }

  .key {
    width: 50px;
    margin: 0 0.5rem;
    cursor: pointer;
  }

  .label {
    font-size: 1.3em;
    color: black;
    position: absolute;
    cursor: pointer;
  }

  .up {
    bottom: 20px;
  }

  .down {
    bottom: 17px;
  }
</style>
