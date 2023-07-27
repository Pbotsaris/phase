<script>

export let synth;
export let label;

let delayTime = synth.getDelayTime()

function handleClick(time) {
  synth.setDelayTime(time);
   delayTime = synth.getDelayTime()
	}

</script>

<div class="delay-time">
    <span class="label">{label}</span>
				<div
				   class:selected={delayTime == 0.5}
            class="selection" 
            on:click={()=> {handleClick(0.5)}}
            on:keyup={()=> {}}
            > 1/4 </div>
				<div

				  class:selected={delayTime == 0.375}
            class="selection"
            on:click={()=> {handleClick(0.375)}}
            on:keyup={()=> {}}
            > 1/8d </div>
				<div
				  class:selected={delayTime == 0.25}
            class="selection"
            on:click={()=> {handleClick(0.25)}}
            on:keyup={()=> {}}
            > 1/8 </div>
	</div>

<style>

.label{
  margin-bottom: 0.4rem;

}

.delay-time{
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
}

.selection{
display: flex;
justify-content: center;
align-items: center;
margin: 0.2rem;

width: 50px;
height: 30px;
cursor: pointer;

background-color: darkcyan;
color: white;
}

.selected{
background-color: lightgreen;


}

</style>
