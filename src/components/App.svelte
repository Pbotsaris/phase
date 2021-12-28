<script>
	import Keyboard from './Keyboard.svelte';

</script>

<main>
	Let's build this. Here is a keyboard.
	<div class="keyboard-container">
		<Keyboard />
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
</style>
