<script> 
import Buttons from "./Buttons.svelte"

</script>
<div class="container">
	<div class="divider-top">
		<Buttons type="phase-bt" />
	</div>
	<div class="divider-mid">
		<Buttons type="phase-bt"/>
	</div>
</div>

<style>
	
	.container{
		display: flex;
		flex-direction: column;
		width: 98.5%;
		height: 50%;
		border-left: 2px solid;
		border-right: 2px solid;
		border-bottom:2px solid;
		border-color: black;
		background-color: var(--main-blue);
		margin-bottom: 0.75%;
	}

	.divider-top{
		display:flex;
		justify-content: center;
		align-items: center;
		height:60%;

	}

	.divider-mid{
		display:flex;
		justify-content: flex-end;
		margin-right: 1.5rem;
		margin-top: 2rem;
			

	}

</style>
