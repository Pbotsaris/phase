<script>
import styles from './styles.svelte'
import Logo from './Logo.svelte'
import Controls from './Controls.svelte'
</script>

<main>
	<div class="main-container">
		<div class="top">
		<Logo/>
		</div>
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

	.top{
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 0.75%;
		width: 98.5%;
		height: 50%;
		border: solid;
		background: rgb(255,171,199);
		background: linear-gradient(180deg, rgba(255,171,199,1) 7%, rgba(220,213,203,1) 100%);
	}


	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}

</style>
