
<script>

import {fade} from 'svelte/transition'
 const keys = ['a', 's' , 'd', 'f', 'g', 'h', 'j', 'k', 'l'];  

</script>

{#each keys as key, i}
  <div
    in:fade={{duration: 150, delay: 2500 + (i * 150)}}
    class="key-container">
    <img src="images/key.svg" alt="" class="key">
    <span class="label">{key}</span>
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
} 

.label{
  font-size: 1.3em;
  color: black;
  position: absolute;
  


}

</style>
