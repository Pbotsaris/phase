<script>

export let sequencer;
export let type;

let value = setInitValue(type)

const minMax = setMinMax(type);

function setSynthValue(value){
    console.log(value/100)
   if(type == 'filter')
			 sequencer.setSynthsCutoff(value)
   if(type == 'delay mix')
       sequencer.setSythsDelayMix(value/100)
 }

function setMinMax(type){
   if(type == 'filter')   
				return {min: 50, max: 1000}
   if(type == 'delay mix')
				return {min: 0, max: 60}
}

function setInitValue(type){
   if(type == 'filter')   
				return 300;
   if(type == 'delay mix')
				return  50;
}

$: setSynthValue(value)

</script>

 <div class="slider">
		<span class = "title"> {type} <span>
		<input type="range" min={minMax.min} max={minMax.max} bind:value={value} class="slider" >
		<span class = "value"> {value} <span>
 </div>


<style>

.slider{
  margin: 0.6rem;
  display: flex;
  flex-direction: column;
	justify-content: center;
	align-items: center;
}

.title{
  margin-bottom: 0.4rem;
  text-align: center;
}

.value{
  margin-top: 0.2rem;
  text-align: center;
}

</style>

