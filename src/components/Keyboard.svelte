<script>
  import Keys from './Keys.svelte'
  import SynthVoice from '../tone/synth_voice'
  import Scales from '../scales'
  import Controls from './Controls.svelte'
  import { keyboard } from '../stores'


  /* The Scale object is factory that outputs a desired scale.
   * I does not hold any UI state.
   */

  let scale = new Scales()
  let synth = new SynthVoice()

  /* Initialize the keyboard store to the current scale
   * from the scale factory.
   */

  keyboard.update((keys) => {
     return keys.map((key, i) => {
      return { ...key, note: scale.current[i] }
    })
  })

</script>

<div class="keys">
  <Keys {synth} />
</div>

<div class="controls">
  <Controls {scale} />
</div>

<style>

  .keys {
    display: flex;
  }
  .controls {
    display: flex;
    margin-top: 1rem;
    justify-content: center;
  }
</style>
