<script>

import Experience from "./Experience.svelte";
import Landing from './Landing.svelte';

import SynthVoice from '../tone/synth_voice'
import MasterOut from '../tone/MasterOut'

	let synth = new SynthVoice()
	let phasedSynth = new SynthVoice()
  let masterOut = new MasterOut();
  let hasLoaded = false;

</script>

{#if hasLoaded}
<Experience {synth} {phasedSynth} />
{:else}
  <Landing {synth} {phasedSynth} {masterOut} bind:hasLoaded />
{/if}


