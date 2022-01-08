<script>
  export let sequencer
  export let type

  let value = setInitValue(type)
  const minMax = setMinMax(type)

  function setSynthValue(value) {
    if (type == 'filter') sequencer.setSynthsCutoff(value)
    if (type == 'delay mix') sequencer.setSythsDelayMix(value / 100)
    if (type == 'envelope') sequencer.setSynthsEvelope(value/10000, value/100, value/100 + ((value/100)/2));
  }

  function setMinMax(type) {
    if (type == 'filter') return { min: 50, max: 1000 }
    if (type == 'delay mix') return { min: 0, max: 60 }
    if (type == 'envelope') return { min: 10, max: 400 } // max time 2 seconds
  }

  function setInitValue(type) {
    if (type == 'filter') return 300
    if (type == 'delay mix') return 30
    if (type == 'envelope') return 100;
  }

  $: setSynthValue(value)
</script>

<span class="title"> {type} </span>
<input
  type="range"
  min={minMax.min}
  max={minMax.max}
  bind:value
  class="slider"
/>
<div class="slider">
  <span class="value"> {value} </span>
</div>

<style>
  .slider {
    margin: 0.6rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  .title {
    margin-bottom: 0.4rem;
    text-align: center;
  }

  .value {
    margin-top: 0.2rem;
    text-align: center;
  }
</style>
