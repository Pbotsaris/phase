<script>
  export let currentScale
  export let sequencer

  const notes = sequencer.notes

  let sequence = notes.map((note) => setValue(note))

  function setValue(note) {
    return currentScale.findIndex((scaleNote) => scaleNote == note)
  }

  function debounce(func, _sequence, timeout = 500) {
    let timer
    return (...args) => {
      clearTimeout(timer)
      timer = setTimeout(() => {
        func.apply(this, args)
      }, timeout)
    }
  }

  function updateSequencer(sequence) {
    const newSeq = sequence.map((noteIndex) => currentScale[noteIndex])
    sequencer.scheduleChange(newSeq)
  }

  const updateSequencerDebouced = debounce(
    () => updateSequencer(sequence),
    sequence
  )
  $: updateSequencerDebouced(sequence)
</script>

<div class="container">
  {#each sequence as _, index}
    <div class="slider-container">
      <input
        type="range"
        min="0"
        max={currentScale.length - 1}
        bind:value={sequence[index]}
        class="slider"
      />
      {currentScale[sequence[index]]}
    </div>
  {/each}
</div>

<style>
  .container {
    margin: 5rem;
    display: flex;
  }

  .slider-container {
    display: flex;
    align-items: center;
  flex-direction: column;
  }

  .slider {
    height: 200px;
    outline: none;
    -webkit-transform: rotate(270deg);
       -moz-transform: rotate(270deg);
            transform: rotate(270deg)

  }
</style>
