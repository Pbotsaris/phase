<script>
  import NoteSlider from "./NoteSlider.svelte";
  import {sliderIndexMapper} from '../../stores'
  export let currentScale;
  export let sequencer;

  let sequence = sequencer.notes.map((note) => setValue(note));

  /* Create mapper based on created sequence */
  sliderIndexMapper.set(sequence.map((_, i) => {return {seqPos: i, sliderPos: 0}}))

  function setValue(note) {
    return currentScale.findIndex((scaleNote) => scaleNote == note);
  }


  function debounce(func, _sequence, timeout = 500) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, timeout);
    };
  }

  function updateSequencer(sequence) {
    const newSeq = sequence.map((noteIndex) => currentScale[noteIndex]);
    sequencer.scheduleChange(newSeq);
  }

  //    <div class="slider-container">
  //      <input
  //        type="range"
  //        min="0"
  //        max={currentScale.length - 1}
  //        bind:value={sequence[index]}
  //        class="slider"
  //      />
  //      {currentScale[sequence[index]]}
  //    </div>

  const updateSequencerDebouced = debounce(
    () => updateSequencer(sequence),
    sequence
  );

  function handleSliderChange(event) {
    sequence = event.detail;
    console.log(sequence);
    updateSequencerDebouced(sequence);
  }

 // $: updateSequencerDebouced(sequence);
</script>

<section class="slider-area">
  {#each sequence as _, index}
    <NoteSlider
        sequence={sequence}
        seqIndex={index} 
        currentScale={currentScale}
        on:SliderChange={handleSliderChange}
        />
    {/each}
</section>

<style>
  .slider-area {
    width: 70%;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    z-index: 2;
  }


</style>
