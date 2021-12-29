<script>
	import { createEventDispatcher } from 'svelte'

	export let recordingEnabled
	export let width

	const dispatch = createEventDispatcher()

	function handleClick() {
		/* will dispatch the click event to the parent compoment */
		dispatch('click', {})
	}
</script>

<div
	class="button"
	style={`width: ${width};`}
	on:click={handleClick}
	class:is-recording={recordingEnabled}
>
	<span>
		<slot />
	</span>
</div>

<style>
	.button {
		height: 60px;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: darkcyan;
		color: white;
		transition: all 0.2s;
		margin: 0.5rem;
		cursor: pointer;
	}

	.is-recording {
		background-color: darkred;
		transition: all 0.2s;
	}
</style>
