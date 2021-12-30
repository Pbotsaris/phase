<script>
  import Keys from './Keys.svelte'
  import OctaveButton from './OctaveButton.svelte'
  import { keyboard } from '../stores'
 
  export let scale
  export let synth

  keyboard.update((keys) => {
    return keys.map((key, i) => {
      return { ...key, note: scale.current[i] }
    })
  })
</script>

<div class="keys">
  <OctaveButton label="-" {scale} />
  <Keys {synth} />
  <OctaveButton label="+" {scale} />
</div>

<style>
  .keys {
    display: flex;
  }

</style>
