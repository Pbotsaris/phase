<script>
  import { onMount, onDestroy } from "svelte";
  //  import StopButton from "./StopButton.svelte";
  //  import DelayTimeSelection from "./DelayTimeSelection.svelte";
  //  import Slider from "./Slider.svelte";
  //  import NoteSliders from "./NoteSliders.svelte";
  //
  //  export let sequencer;
  //  export let sequenceReady;
  //  export let currentScale;
  //
  //  <StopButton {sequencer} bind:sequenceReady />
  //
  //  <Slider {sequencer} type="filter" />
  //  <Slider {sequencer} type="delay mix" />
  //
  //  <Slider {sequencer} type="envelope" />
  //
  //  <div class="phase__delaytime-selection">
  //    <DelayTimeSelection synth={sequencer.synth} label="Synth" />
  //    <DelayTimeSelection synth={sequencer.phasedSynth} label="Phased synth" />
  //  </div>
  //
  //  <NoteSliders {sequencer} {currentScale} />

  const FPS = 12;
  let rotation = 0;
  let interval;

  onMount(() => {
    interval = setInterval(() => {
      rotation++;
    }, 1000 / FPS);
  });

  onDestroy(() => {
    clearInterval(interval);
  });
</script>

<section class="bg">
  <img
    src="images/expi-cirlce-bg.svg"
    alt="circle"
    style="transform: rotate({rotation}deg)"
    class="bg-circle"
  />
</section>
<section class="content">
  <div> content will go here </div>
</section>

<style>
  .bg {
    position: absolute;
    z-index: -1;
    width: 140%;
    height: auto;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(
      0deg,
      rgba(240, 240, 240, 1) 0%,
      rgba(184, 196, 220, 1) 19%,
      rgba(242, 150, 180, 1) 80%
    );
  }

  img{
    width: 100%;
  }

  .content {
    width: 70%;
    margin: 0 auto;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .bg-circle{
    width: 100%;
    z-index: -1;
  }

  @media only screen and (min-width: 769px) {
    section {
      width: 120%;
    }
  }

  </style>
