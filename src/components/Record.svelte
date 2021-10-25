<script>
	
import {fade} from 'svelte/transition'

export let visible;

let delayedVisible = false;

$: setTimeout(()=> delayedVisible = visible, 400);


</script>

{#if delayedVisible}
	<div class="container" transition:fade={{delay: 200,  duration:300}}>
  	<div class="outer" >
    	<div class="inner"/>
  	</div>
	</div>
{/if}


<style>

.container{
	position:relative;
	width: 100px;
	height: 100%;
}
		.outer{
			position:absolute;
			top: 280px;
			z-index: 2;
			width: 100px;
			height: 100px;
			border: 1px solid black;
			border-radius: 100px;
			display: flex;
			justify-content: center;
			align-items: center;
		}

</style>
