<script>
  import StopButton from './StopButton.svelte'
	import DelayTimeSelection from './DelayTimeSelection.svelte';
	import Slider from './Slider.svelte';
	import NoteSliders from './NoteSliders.svelte';

  export let sequencer
  export let sequenceReady
  export let currentScale;

</script>

<section class="phase">
  <StopButton {sequencer} bind:sequenceReady />

	<Slider {sequencer} type="filter" />
	<Slider {sequencer} type="delay mix" />

	<Slider {sequencer} type="envelope" />

		<div class="phase__delaytime-selection">
		<DelayTimeSelection synth={sequencer.synth} label="Synth" />
		<DelayTimeSelection synth={sequencer.phasedSynth} label="Phased synth" />
  </div>

  	<NoteSliders  {sequencer} {currentScale} />

</section>

<style>

.phase{
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.phase__delaytime-selection{
  width: 60%;
  display: flex;
  justify-content: space-around;  

}

</style>
