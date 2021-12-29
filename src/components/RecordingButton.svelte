<script>
	import { recordingStack } from '../stores'

	let recordingEnabled
	let recStackMaxSize;
	let recStackPosition;

	recordingStack.subscribe((stack) => {
		recordingEnabled = stack.recordingEnabled
		recStackMaxSize = stack.max;
		recStackPosition = stack.position;
		
	})

	function toggleRecording() {
		recordingStack.update((stack) => {
			stack.recordingEnabled = !stack.recordingEnabled
			return stack
		})
	}

	/* toggle recording off if recording stack is full */
  $: recStackPosition >= recStackMaxSize  && recordingEnabled && toggleRecording();

	function handleKeydown(event) {
    if(event.key == 'r')
			toggleRecording()
	}

</script>

<svelte:window on:keydown={handleKeydown} />

<div
	class="button"
	on:click={toggleRecording}
	class:is-recording={recordingEnabled}
 >
	<span>
		{recordingEnabled ? 'Recording...' : 'Click to record'}
	</span>
</div>

<style>
	.button {
		height: 60px;
		width: 180px;
		display:flex;
		justify-content: center;
		align-items: center;
		background-color: darkcyan;
		color: white;
		transition: all 0.2s;
	}

	.is-recording{
		background-color: darkred;
		transition: all 0.2s;
	}
</style>
