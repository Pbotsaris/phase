<script>

import SynthVoice from '../tone/synth_voice'

export let keys;
export let synth;
//const synth = new SynthVoice();



function updateKeys (key) {
  const index = keys.findIndex( k => k.label === key.label)
  if(index >= 0)
    keys[index].keydown = true;
  return index;
}

/*
 *  Mouse callback 
 */

function handleClick(key){
   const index  = updateKeys(key)
    synth.noteOn(key.note , '8n');

  setTimeout(()=> keys[index].keydown = false, 150)
}

/*
 *  Keyboard callback
 */

function handleKeydown(event){
  const index = updateKeys({label: event.key})
  if(index >= 0)
      setTimeout(()=> keys[index].keydown = false, 150)
}

</script>

<svelte:window on:keydown={handleKeydown}/>

{#each keys as key}
  <div
    on:click = {()=> handleClick(key)}
    class="key-container">
    {#if key.keydown}
       <img src="images/keydown.svg" alt="" class="key">
    {:else}
       <img src="images/key.svg" alt="" class="key">
     {/if}
     <span class="label {key.keydown ? 'down' : 'up'}">
       {key.label}
    </span>
  </div>
{/each}

<div class="controls" >

<button on:click = {()=> synth.start() }> start sound </button>


</div>

<style>
.key-container{
 position: relative;
 display: flex;
 justify-content: center;
 align-items: center;
}

.controls{
   display: flex;
   justify-content: center;
}

.key{
width: 50px;
margin: 0 0.5rem;
cursor: pointer;
} 

.label{
  font-size: 1.3em;
  color: black;
  position: absolute;
  cursor: pointer;
}

  .up{
  bottom: 20px;
    }

   .down{
    bottom: 17px;
    }

</style>
