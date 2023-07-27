<script>
  import Keys from './Keys.svelte'
  import { keyboard } from '../../../stores'
  import OctaveButton from './OctaveButton.svelte'

  export let scale
  export let synth

  keyboard.update((keys) => {
    return keys.map((key, i) => {
      return { ...key, note: scale.current[i] }
    })
  })
</script>

<div class="keyboard-container">
  <div class="keys">
    <OctaveButton label="-" {scale} />
    <Keys {synth} />
    <OctaveButton label="+" {scale} />
  </div>
</div>

<style>
  .keys {
    display: flex;
  }

  .keyboard-container {
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
