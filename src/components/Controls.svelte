<script> 
import {hasStarted} from '../stores'
import Buttons from "./Buttons.svelte"
import Keyboard from "../Keyboard.svelte"; 

let has_started;

hasStarted.subscribe(value => {
		has_started = value;
	}); 


</script>
<div class="container">
	<div class="divider-top">
		{#if has_started}
			<div class = "keyboard-container">
	 		 <Keyboard/>
			</div>
		{:else}
		<Buttons type="phase-bt" />
		{/if}
	</div>
	<div class="divider-mid">
		<Buttons type="phase-bt"/>
	</div>
</div>

<style>
	
	.container{
		z-index: 3;
		display: flex;
		flex-direction: column;
		width: 98.5%;
		height: 50%;
		border-left: 2px solid;
		border-right: 2px solid;
		border-bottom:2px solid;
		border-color: black;
		background-color: var(--main-blue);
		margin-bottom: 0.75%;
	}

	.divider-top{
		display:flex;
		justify-content: center;
		align-items: center;
		height:60%;

	}

	.divider-mid{
		display:flex;
		justify-content: flex-end;
		margin-right: 1.5rem;
		margin-top: 2rem;
			

	}

	.keyboard-container{
		display: flex;



	}

</style>
