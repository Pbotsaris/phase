<script>
  import Button from './Button.svelte'
  import { recordingStack } from '../stores'

  function resetRecordingStack() {
    recordingStack.update((stack) => {
      stack.notes = stack.notes.map((note) => ({ ...note, note: null }))
      stack.position = 0
      return stack
    })
  }
</script>

  <Button width="170px" recordingEnabled={false} on:click={resetRecordingStack}> Reset </Button>

