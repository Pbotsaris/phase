<script>
	
import {fade} from 'svelte/transition'

export let visible;
</script>

{#if visible}
	<div class="outer" transition:fade={{delay: 900,  duration:100}}>
	<div class="inner"/>
	</div>
{/if}


<style>
		.outer{
			width: 100px;
			height: 100px;
			border: 1px solid black;
			border-radius: 100px;
			display: flex;
			justify-content: center;
			align-items: center;
		}

</style>
