<script>
import style from './styles.svelte'
</script>

<main>
	<div class="main-container">

	</div>
</main>

<style>
 
	main {
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: var(--outer-gray);
		padding: 0;
		width: 100%;
		height: 100%;
		min-height: 100%;
		margin: 0 auto;
	}

	.main-container
	{
		border: solid;
		width: 98%;
		height: 95%;
		min-height: 70%;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}

</style>
