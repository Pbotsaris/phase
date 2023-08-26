<script>
  import { onMount, onDestroy } from "svelte";
  //  import StopButton from "./StopButton.svelte";
  //  import DelayTimeSelection from "./DelayTimeSelection.svelte";
  //  import Slider from "./Slider.svelte";
  import NoteSliders from "./NoteSliders.svelte";
  //
  export let sequencer;
  export let sequenceReady;
  export let currentScale;
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

  //  <img class="anim-1" src="images/anim-1.png" alt="anim" />
  //  <img class="anim-2" src="images/anim-2.png" alt="anim" />
  //  <img class="anim-3" src="images/anim-3.png" alt="anim" />

  const NB_CELLS = { rows: 6, cols: 10 };
  const BREAK_POINTS = {
    small: 867,
    medium: 1146,
    large: 1440,
  };

  const FPS = 12;
  const ANIM_TIMER = 10;
  let rotation = 0;
  let outerRingInterval;

  let currentAnim = 0;
  let animInterval;

  let gridDim = { width: 1000, height: 600, animWidth: 400 };
  let innerWidth = window.innerWidth;

  const animPos = [
    {
      star: { x: 0, y: 4, offset: true },
      anim1: { x: 0, y: 4 },
      anim2: { x: 2, y: 0 },
      anim3: { x: 6, y: 0 },
    },
    {
      star: { x: 5, y: 0, offset: false },
      anim1: { x: 4, y: 4 },
      anim2: { x: 0, y: 0 },
      anim3: { x: 6, y: 2 },
    },
    {
      star: { x: 4, y: 2, offset: true },
      anim1: { x: 0, y: 2 },
      anim2: { x: 6, y: 0 },
      anim3: { x: 4, y: 4 },
    },
  ];

  $: if (BREAK_POINTS.large < innerWidth) {
    gridDim = { width: 1000, height: 600, animWidth: 1000 - 600 };
  } else if (BREAK_POINTS.medium < innerWidth) {
    gridDim = { width: 800, height: 480, animWidth: 800 - 480 };
  } else {
    gridDim = { width: 600, height: 360, animWidth: 600 - 360 };
  }

  function gridAt(x, y) {
    const top = (gridDim.height / NB_CELLS.rows) * y;
    const left = (gridDim.width / NB_CELLS.cols) * x;
    return `top: ${top}px; left: ${left}px;`;
  }

  function randomTransitionTime() {
    const t = ANIM_TIMER - 1 - (Math.random() * ANIM_TIMER) / 2;
    return `transition: top ${t.toFixed(2)}s ease-in-out, 
                        left ${t.toFixed(2)}s ease-in-out, 
                        margin-top ${t.toFixed(2)}s ease-in-out,
                        margin-left ${t.toFixed(2)}s ease-in-out,
                        width 0.3s ease-in-out;`;
  }

  function animWidth(gridDim) {
    return `width: ${gridDim.animWidth}px;`;
  }

  onMount(() => {
    outerRingInterval = setInterval(() => {
      rotation++;
    }, 1000 / FPS);
  });

  animInterval = setInterval(() => {
    currentAnim++;
    if (currentAnim >= animPos.length) {
      currentAnim = 0;
    }
  }, 10000);

  onDestroy(() => {
    clearInterval(outerRingInterval);
    clearInterval(animInterval);
  });
</script>

<svelte:window bind:innerWidth />

<section class="bg">
  <img
    src="images/expi-cirlce-bg.svg"
    alt="circle"
    style="transform: rotate({rotation}deg)"
    class="bg-circle"
  />
</section>
<section class="content">
  <div
    class="anim"
    style="width: {gridDim.width}px; height: {gridDim.height}px"
  >
    <img
      src="images/SVG/star.svg"
      style="{gridAt(
        animPos[currentAnim].star.x,
        animPos[currentAnim].star.y
      )}{randomTransitionTime()}"
      class:start-offset={animPos[currentAnim].star.offset}
      class="star"
      alt="anim"
    />

    <img
      src="images/anim-12.png"
      style="{gridAt(
        animPos[currentAnim].anim1.x,
        animPos[currentAnim].anim1.y
      )}{randomTransitionTime()}{animWidth(gridDim)}"
      class="anim-item"
      alt="anim"
    />

    <img
      src="images/anim-2.png"
      style="{gridAt(
        animPos[currentAnim].anim2.x,
        animPos[currentAnim].anim2.y
      )}{randomTransitionTime()}{animWidth(gridDim)}"
      class="anim-item"
      alt="anim"
    />
    <img
      src="images/anim-3.png"
      style="{gridAt(
        animPos[currentAnim].anim3.x,
        animPos[currentAnim].anim3.y
      )}{randomTransitionTime()}{animWidth(gridDim)}"
      class="anim-item"
      alt="anim"
    />
  </div>
</section>
  <NoteSliders {sequencer} {currentScale}/>
<div class="unsupported-message">
  <span>
    This experience is not supported on screen sizes smaller than {BREAK_POINTS.small}
    pixels.
  </span>
</div>

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

  img {
    width: 100%;
  }

  .anim {
    position: relative;
  }

  .star {
    position: absolute;
    width: 70px;
    z-index: 1;
  }

  .start-offset {
    margin-left: -40px;
    margin-top: -40px;
  }

  .anim-item {
    position: absolute;
    transition: all 4s ease-in-out;
  }

  .content {
    width: 70%;
    height: 100%;
    margin: 0 auto;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .bg-circle {
    width: 100%;
    z-index: -1;
    transition: all 0.1s ease-in-out;
  }

  @media only screen and (min-width: 769px) {
    section {
      width: 120%;
    }
  }

  .unsupported-message {
    display: none;
    text-align: center;
    padding: 20px;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      0deg,
      rgba(240, 240, 240, 1) 0%,
      rgba(184, 196, 220, 1) 19%,
      rgba(242, 150, 180, 1) 80%
    );
  }

  /* Hide main content and show the unsupported message on small screens */
  @media only screen and (max-width: 867px) {
    .content,
    .bg,
    .slider-area {
      display: none;
    }
    .unsupported-message {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
</style>
