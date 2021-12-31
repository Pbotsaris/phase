<script>
	import Keyboard from './Keyboard.svelte'
	import Recording from './Recording.svelte'
	import RecordingButton from './RecordingButton.svelte'
	import ResetButton from './ResetButton.svelte'
	import Controls from './Controls.svelte'

	export let synth
	export let scale
</script>

<Keyboard {synth} {scale} />

<Controls {scale} />

<div class="buttons">
	<RecordingButton />
	<ResetButton />
</div>

<Recording />

<style>
	.buttons {
		margin-top: 3rem;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
