<script>
import styles from './styles.svelte'
import Controls from './Controls.svelte'
import Display from './Display.svelte'
</script>

<main>
	<div class="main-container">
			<Display/>
			<Controls/>
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
		background-color: var(--main-blue);
		display: flex;
		flex-direction: column;
		align-items: center;
		border: solid;
		width: 98%;
		height: 97%;
		min-height: 70%;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}

</style>
