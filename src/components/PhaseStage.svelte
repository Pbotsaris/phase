<script>
  import StopButton from './StopButton.svelte'

  export let sequencer
  export let sequenceReady

  let cutoffFreq = 300;

  function setCutoff(cutoffFreq){
    sequencer.setSynthsCutoff(cutoffFreq)
  }

  $: setCutoff(cutoffFreq);

</script>

<div class="phase-container">
  <StopButton {sequencer} bind:sequenceReady />

  <input type="range" min="50" max="1000" bind:value={cutoffFreq} class="slider" >
  {cutoffFreq}

</div>

<style>

.phase-container{
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
}

</style>
