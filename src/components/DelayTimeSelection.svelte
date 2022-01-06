<script>

export let synth;
export let label;

function handleClick(time) {
  synth.setDelayTime(time);
	}
</script>

<div class="delay-time">
    <span class="label">{label}</span>
  	<div class="selection" on:click={()=> {handleClick(0.5)}}> 1/4 </div>
		<div class="selection"on:click={()=> {handleClick(0.375)}}> 1/8d </div>
		<div class="selection"on:click={()=> {handleClick(0.25)}}> 1/8 </div>
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

</style>
