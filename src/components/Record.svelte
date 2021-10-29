<script>
	
import {fade} from 'svelte/transition'
import { cubicInOut, expoOut } from 'svelte/easing';

export let visible;

let delayedVisible = false;

$: setTimeout(()=> delayedVisible = visible, 200);

	function move(node, { duration }) {
		return {
			duration,
			delay: 100,
			easing: cubicInOut,
			css: t => `
				 transform: translate(0, ${100 - (t * 100)}%); width: ${270 - (t * 200)}px; height: ${270 - (t * 200)}px;
			`
			}
	}

 function shrink(node, {duration}) {
	return {
			duration,
			delay: 100,
			easing: cubicInOut,
		css: t => ` 
					width: ${100 - (t * 67)}%; height: ${100 - (t * 67)}%
		`
		};

 }

</script>

{#if delayedVisible}
	<div class="container" transition:fade={{duration:200}}>
		<div
		   transition:move={{duration: 2600}}
		class="outer" >
		<div
			class="inner"
			transition:shrink={{duration: 2600}} 
			/>
  	</div>
	</div>
{/if}


<style>

.container{
	position:relative;
	display: flex;
	justify-content: center;
	width: 270px;
	height: 100%;
}
		.outer{
			position:absolute;
			top: 140px;
			transform: translate(0, 0);
			z-index: 2;
 			width: 70px;
			height: 70px; 
			border: 1px solid black;
			border-radius: 270px;
			display: flex;
			justify-content: center;
			align-items: center;
			
		}

		.inner{
			width: 33%;
			height: 33%;
			border-radius: 270px;
			border: 1px solid black;
			background-color: var(--red);
		}

</style>
