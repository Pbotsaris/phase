<script>
  import { keyboard } from '../stores'

  export let scale
  let selectedTonality
  let selectedKey

  /*
   *  Updates the state of `keyboard` in the global store with a new scale.
   * @param {Array} scale an array with the new scale.
   *
   */

  function updateKeyboardScale(scale) {
    keyboard.update((keys) => {
      return keys.map((key, i) => {
        return { ...key, note: scale[i] }
      })
    })
  }

  /*
   *  Handle a change o tonality e.g: minor, major, mixolydian.
   *  The scale factory produces a scale based on the `selectedTonality`
   * @param {Oject} scale the scale factory object.
   *
   */

  function handleTonalityChange(scale) {
    scale.setTonality(selectedTonality)
    updateKeyboardScale(scale.current)
  }

  /*
   *  Handle a music key change : C, D, Fsharp etc.
   * @param {Oject} scale the scale factory object.
   *
   */

  function handleKeyChange(scale) {
    scale.setKey(selectedKey)
    updateKeyboardScale(scale.current)
  }
</script>

<div class="controls">
  <select
    class="select"
    bind:value={selectedTonality}
    on:change={() => handleTonalityChange(scale)}
  >
    {#each scale.tonalities as tonality}
      <option value={tonality}> {tonality} </option>
    {/each}
  </select>

  <select
    class="select"
    bind:value={selectedKey}
    on:change={() => handleKeyChange(scale)}
  >
    {#each scale.keys as key}
      <option value={key}> {key} </option>
    {/each}
  </select>
</div>

<style>
  .select {
    margin: 0.8rem;
    cursor: pointer;
  }

  .controls {
    display: flex;
    margin-top: 1rem;
    justify-content: center;
  }
</style>
