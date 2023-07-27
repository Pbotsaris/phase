<script>

  import Keyboard from './keyboard/Keyboard.svelte'
	import Recording from './Recording.svelte'
	import RecordingButton from './RecordingButton.svelte'
	import ResetButton from './ResetButton.svelte'
	import Controls from './Controls.svelte'

export let synth;
export let scale;

</script>

	<div class="keyboard-container">
		<Keyboard {synth} {scale} />
	</div>

	<div class="controls">
		<Controls {scale} />
	</div>

	<div class="recording-container">
		<RecordingButton />
		<ResetButton />
	</div>

	<div class="recording-container">
		<Recording />
	</div>

	<div class="recording-container">
  <span>you can delete notes by clicking on them.</span>
	</div>

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

	.controls {
		display: flex;
		margin-top: 1rem;
		justify-content: center;
	}

</style>

