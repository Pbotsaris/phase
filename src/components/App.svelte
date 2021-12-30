<script>
	import Keyboard from './Keyboard.svelte';
	import Recording from './Recording.svelte';
	import RecordingButton from './RecordingButton.svelte'
	import ResetButton from './ResetButton.svelte'
	import Controls from './Controls.svelte'
  import Sequencer from '../tone/sequencer'
  import SynthVoice from '../tone/synth_voice'
  import Scales from '../scales'
	import { recordingStack } from '../stores.js'

  /* The Scale object is factory that outputs a desired scale.
   * I does not hold any UI state.
   */

	let scale = new Scales()
  let synth = new SynthVoice()
	let sequence;
	let sequenceReady = false;
	let sequencer = new Sequencer(synth);


	recordingStack.subscribe((stack) => {
	 sequence = stack.notes.map(note => note.note );
	sequenceReady = stack.position >= stack.max;
	})

	function startSequence(sequenceReady){

		if(sequenceReady){
			sequencer.create(sequence);
			sequencer.createPhased(sequence);
			sequencer.start();
		}
	}

	$: startSequence(sequenceReady);

</script>

<main>

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

  .controls {
    display: flex;
    margin-top: 1rem;
    justify-content: center;
  }

	:global(body){
		background-color: darkgrey;
	}

</style>
