<script charset="utf-8">
import {hasStarted} from '../stores'
import {fade} from 'svelte/transition'

export let type;

let has_started;

function onClick(){
hasStarted.set(true)
}
hasStarted.subscribe(value => {
		has_started = value;
	}); 


</script>


<div>
	{#if type == 'phase-bt' && !has_started}
		<img src="images/phase-bt.svg"
				 alt="start button"
		     class="button"
			   trasition:fade={{duration: 200}}
			   on:click={onClick}
		>
	{/if}
		</div>

<style type="text/css" media="screen">

.button{
	width: 80px;
}


</style>
