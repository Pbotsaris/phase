<script>
  import { recordingStack } from '../../stores'
  import Button from '../components/Button.svelte'

  let recordingEnabled
  let recStackMaxSize
  let recStackPosition

  recordingStack.subscribe((stack) => {
    recordingEnabled = stack.recordingEnabled
    recStackMaxSize = stack.max
    recStackPosition = stack.position
  })

  function toggleRecording() {
    recordingStack.update((stack) => {
      stack.recordingEnabled = !stack.recordingEnabled
      return stack
    })
  }

  /* toggles recording off if recording stack is full */
  $: recStackPosition >= recStackMaxSize &&
    recordingEnabled &&
    toggleRecording()

  function handleKeydown(event) {
    if (event.key == 'r') toggleRecording()
  }
</script>

<svelte:window on:keydown={handleKeydown} />

<div class="container">
  <Button {recordingEnabled} on:click={toggleRecording} width="170px">
    {recordingEnabled ? 'Recording...' : 'Click to record'}
  </Button>
  <span> or use the 'r' key </span>
</div>

<style>
  .container {
    margin-top: 1.2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
