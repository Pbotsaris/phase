<script>
  import StopButton from './StopButton.svelte'

  export let sequencer
  export let sequenceReady

  let cutoffFreq = 300;
  let delayTime =  sequencer.getSynthsDelayTime('synth')

  function setCutoff(cutoffFreq){
    sequencer.setSynthsCutoff(cutoffFreq)
  }

	function handleClick(whichSynth, time) {
	sequencer.setSynthsDelayTime(whichSynth, time)
	delayTime =  sequencer.getSynthsDelayTime('synth');
	}

  $: setCutoff(cutoffFreq);

</script>

<div class="phase-container">
  <StopButton {sequencer} bind:sequenceReady />

  <div>
    <input type="range" min="50" max="1000" bind:value={cutoffFreq} class="slider" >
    {cutoffFreq}
  </div>

		<div class="delay-time">
  	<div class="selection" on:click={()=> {handleClick('synth', 0.5)}}> 4 </div>
		<div class="selection"on:click={()=> {handleClick('synth', 0.25)}}> 8 </div>
		<div class="selection"on:click={()=> {handleClick('synth', 0.125)}}> 16 </div>
	</div>

   {delayTime}
</div>

<style>

.phase-container{
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
}

.delay-time{
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
}

.selection{
display: flex;
justify-content: center;
align-items: center;
margin: 0.2rem;

width: 35px;
height: 30px;
cursor: pointer;

background-color: darkcyan;
color: white;
}

</style>
