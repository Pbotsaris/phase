<script>
	import Keyboard from './Keyboard.svelte';
	import Recording from './Recording.svelte';

</script>

<main>
	Let's build this. Here is a keyboard.
	<div class="keyboard-container">
		<Keyboard />
	</div>

	<div class="recording-container">
	 <Recording />
	</div>
	 
</main>

<style>
	.keyboard-container {
		margin-top: 3rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.recording-container {
		margin-top: 3rem;
		display: flex;
		justify-content: center;
		align-items: center;
	}


	:global(body){
		background-color: darkgrey;
	}

</style>
