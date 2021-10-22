<script> 
import Buttons from "./Buttons.svelte"
</script>


<div class="container">
	<div class="divider">
		<Buttons type="phase-bt"/>
	</div>
	<div class="divider">
	</div>
</div>



<style>
	
	.container{
		display: flex;
		flex-direction: column;
		width: 98.5%;
		height: 50%;
		border-left: solid;
		border-right: solid;
		border-bottom: solid;
		background-color: var(--main-blue);
		margin-bottom: 0.75%;
	}

</style>
