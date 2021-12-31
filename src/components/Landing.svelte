<script>
	export let synth
	export let phasedSynth
	export let masterOut
	export let hasLoaded;

	let isLoading = false;

	async function handleClick() {
		isLoading = true;

		await masterOut.loadTone()
		await masterOut.loadReverb()

		synth.start()
		phasedSynth.start()
		hasLoaded = true;
	}

</script>

<div class="button-container">

{#if isLoading}
	<span class="message"> Loading audio. Please wait... </span>

{:else}
	<button on:click = {handleClick} class="button"> start </button>

{/if}

</div>

<style>

	.button-container {
		width: 100%;
		display: flex;
		justify-content: center;
	}

	.button{
		cursor: pointer;
		height: 40px;
	}

	.message{
   font-size: 16px;

	}

</style>
