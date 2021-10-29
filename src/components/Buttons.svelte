<script charset="utf-8">
import {hasStarted} from '../stores'
import {fade} from 'svelte/transition'

export let type;

let has_started;

hasStarted.subscribe(value => {
		has_started = value;
	}); 


function onClick(){
hasStarted.set(true)
}

</script>


<div>
	{#if type == 'phase-bt'}
		<img src="images/phase-bt.svg"
				 alt="start button"
		     class="button"
			   on:click={onClick}
		>
	{/if}
		</div>

<style type="text/css" media="screen">

.button{
	width: 80px;
	cursor: pointer;
}


</style>
