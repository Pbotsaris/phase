<script>
import Keys from "./Keys.svelte";
import SynthVoice from '../tone/synth_voice'
import Scales from '../scales'

let keys = [ 
    { label: 's', keydown: false},
    { label: 'd', keydown: false},
    { label: 'f', keydown: false}, 
    { label: 'g', keydown: false},
    { label: 'h', keydown: false},
    { label: 'j', keydown: false},
    { label: 'k', keydown: false},
    { label: 'l', keydown: false}
  ];  

  let scale = new Scales();
  let synth = new SynthVoice();
  let selectedTonality;
  let selectedKey;

function addScaleToKeys(scale){
 keys = keys.map((key, i) => {
   return {...key, note: scale[i]}
   })
}

function updateTonality() {
  scale.setTonality(selectedTonality);
  addScaleToKeys(scale.current);
}

function updateKey() {
  scale.setKey(selectedKey);
  addScaleToKeys(scale.current);
}


addScaleToKeys(scale.current);


</script>

<div class="keys">
    <Keys keys={keys} synth={synth} />
</div>


<div class="controls">
    <select class="select" bind:value={selectedTonality} on:change={updateTonality}>
        {#each scale.tonalities as tonality}
            <option value={tonality}> {tonality} </option>
        {/each}
    </select>

    <select class="select" bind:value={selectedKey} on:change={updateKey}>
        {#each scale.keys as key}
            <option value={key}> {key} </option>
        {/each}
    </select>
</div>


<style>
.keys{
  display:flex; 

}
.controls{
  display:flex; 
      margin-top: 1rem;
      justify-content: center;

}

.select{

  margin: .8rem;

}

</style>


