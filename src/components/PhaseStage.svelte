<script>

 import StopButton from "./StopButton.svelte";

 export let sequencer;
 export let sequenceReady;

</script>


<StopButton {sequencer} bind:sequenceReady />
