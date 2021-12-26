<script>

import {fade} from 'svelte/transition'

let keys = [ 
    {label:  'a',  keydown: false},
    { label: 's', keydown: false},
    { label: 'd', keydown: false},
    { label: 'f', keydown: false}, 
    { label: 'g', keydown: false},
    { label: 'h', keydown: false},
    { label: 'j', keydown: false},
    { label: 'k', keydown: false},
    { label: 'l', keydown: false}
  ];  

function updateKeys(key){
  const index = keys.findIndex( k => k.label === key.label)
  keys[index].keydown = true;
  return index;
}

/*
 * Mouse click 
 */

function handleClick(key){
   const index  = updateKeys(key)
  setTimeout(()=> keys[index].keydown = false, 150)
}

/*
 *  Keyboard
 */

function handleKeydown(event){
  const index = updateKeys({label: event.key})
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

<style>
.key-container{
 position: relative;
 display: flex;
 justify-content: center;
 align-items: center;

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
