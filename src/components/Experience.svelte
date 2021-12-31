<script>
	/* components */
	import InteractionStage from './InteractionStage.svelte'
	import PhaseStage from './PhaseStage.svelte'

	/* classes */
	import Sequencer from '../tone/sequencer'
	import Scales from '../scales'

	/* store */
	import { recordingStack } from '../stores.js'

	export let synth
	export let phasedSynth

	/* The Scale object is factory that outputs a desired scale.
	 * It holds internal state but does not UI state.
	 */

	let scale = new Scales()
	let sequence
	let sequenceReady = false
	let sequencer = new Sequencer(synth, phasedSynth)

	recordingStack.subscribe((stack) => {
		sequence = stack.notes.map((note) => note.note)
		 setSequenceReady(stack.position >= stack.max);
	})

	/* add a small delay before unmounting PhaseStage module 
		 Gives time for RecordingButton within to update state before umount;
		*/
	  function setSequenceReady(bool){
		if(bool)
			 setTimeout(()=> sequenceReady = bool, 50);
	}

	function startSequence(sequenceReady) {
		if (sequenceReady) {
			sequencer.create(sequence)
			sequencer.start()
		}
	}

	$: startSequence(sequenceReady)
</script>

<section>
	{#if sequenceReady}
		<PhaseStage {sequencer} bind:sequenceReady />
	{:else}
		<InteractionStage {scale} {synth} />
	{/if}
</section>
