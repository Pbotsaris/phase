<script>

import SynthVoice from '../tone/synth_voice'
import Scales from '../scales'

/*
 *  Init
 */

const synth = new SynthVoice();
let scale = new Scales();
let selectedTonality;
let selectedKey;

let keys = [ 
    { label: 's', keydown: false},
    { label: 'd', keydown: false},
    { label: 'f', keydown: false}, 
    { label: 'g', keydown: false},
    { label: 'h', keydown: false},
    { label: 'j', keydown: false},
    { label: 'k', keydown: false},
    { label: 'l', keydown: false}
  ];  

/*
 *  Helpers
 */

function addScaleToKeys(scale){
 keys = keys.map((key, i) =>{
   return {...key, note: scale[i]}
   })
}

/*
 *  Updated State 
 */

function updateKeys (key) {
  const index = keys.findIndex( k => k.label === key.label)
  if(index >= 0)
    keys[index].keydown = true;
  return index;
}

function updateTonality() {
  scale.setTonality(selectedTonality);
  addScaleToKeys(scale.current);
}

function updateKey() {
  scale.setKey(selectedKey);
  addScaleToKeys(scale.current);
}

/*
 *  Mouse callback 
 */

function handleClick(key){
   const index  = updateKeys(key)
    console.log(key.note)
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

addScaleToKeys(scale.current);
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

<select bind:value={selectedTonality} on:change={updateTonality}>
  {#each scale.tonalities as tonality}
    <option value={tonality}> {tonality} </option>
{/each}
</select>

<select bind:value={selectedKey} on:change={updateKey}>
  {#each scale.keys as key}
    <option value={key}> {key} </option>
{/each}
</select>

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
