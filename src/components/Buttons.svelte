<script charset="utf-8">
import {hasStarted} from '../stores'
export let type;

function onClick(){
hasStarted.set(true)
	console.log("hello")
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
}


</style>
