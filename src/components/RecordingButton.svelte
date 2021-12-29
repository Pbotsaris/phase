<script>
	import { recordingStack } from '../stores'
	import Button from '../components/Button.svelte'

	let recordingEnabled
	let recStackMaxSize
	let recStackPosition

	recordingStack.subscribe((stack) => {
		recordingEnabled = stack.recordingEnabled
		recStackMaxSize = stack.max
		recStackPosition = stack.position
	})

	function toggleRecording() {
		recordingStack.update((stack) => {
			stack.recordingEnabled = !stack.recordingEnabled
			return stack
		})
	}

	/* toggles recording off if recording stack is full */
	$: recStackPosition >= recStackMaxSize &&
		recordingEnabled &&
		toggleRecording()

	function handleKeydown(event) {
		if (event.key == 'r') toggleRecording()
	}
</script>

<svelte:window on:keydown={handleKeydown} />

<Button {recordingEnabled} on:click={toggleRecording} width = "170px">
	{recordingEnabled ? 'Recording...' : 'Click to record'}
</Button>
