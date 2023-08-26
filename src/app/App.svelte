<script>
  import Experience from "./Experience.svelte";
  import Landing from "./Landing.svelte";

  import SynthVoice from "../tone/synth_voice";
  import MasterOut from "../tone/MasterOut";

  let synth = new SynthVoice();
  let phasedSynth = new SynthVoice();
  let masterOut = new MasterOut();
  let hasLoaded = false;
</script>

<main>
  {#if hasLoaded}
    <Experience {synth} {phasedSynth} />
  {:else}
    <Landing {synth} {phasedSynth} {masterOut} bind:hasLoaded />
  {/if}
</main>

<style>
  main {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    /* overflow hidden and position relative are necessary for 
      the Experience/PhaseStage background animation to work
     */

    position: relative;
    overflow: hidden;
  }
</style>
