<script>
  import { keyboard } from '../stores'
  import Button from './Button.svelte'

  export let label
  export let scale

  function updateKeyboard() {
    keyboard.update((keys) => {
      return keys.map((key, i) => {
        return { ...key, note: scale.current[i] }
      })
    })
  }

  function handleClick() {
    let octave = scale.octave * 1

    octave = label == '+' ? ++octave : --octave
    scale.setOctave(octave.toString())

    updateKeyboard()
  }
</script>

<Button
  width="50px"
  recordingEnabled={false}
  on:click={handleClick}
  >
  {label}
</Button >
