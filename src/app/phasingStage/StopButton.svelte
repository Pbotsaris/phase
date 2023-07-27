<script>

  import Button from '../components/Button.svelte'
	import { recordingStack } from '../../stores'

  export let sequencer;
	export let sequenceReady;

	function stop(){
		sequencer.stop();
		sequenceReady = false;
		recordingStack.update((stack) => {
			stack.notes = stack.notes.map(note => ({...note, note: null}));
			stack.position = 0;
			return stack
		})
	}
</script>


<Button width="170px" recordingEnabled={false} on:click = {stop} > Stop </Button>

