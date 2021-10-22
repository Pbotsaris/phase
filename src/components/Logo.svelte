<script>
import styles from './styles.svelte'
</script>
<div class="logo-container">
	
<img src="images/logo.svg" alt="logo" class="logo">
<span class="logo-copy">A hypinotically wonderful journey into infinty.</span>
</div>

<style>

  .logo-container{
		width: 100%;
		display:flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}

	.logo{
		width: 50%;

	}
	.logo-copy{
		margin-top: 0.7rem;
		color:var(--main-blue);
		font-weight: 600;
	letter-spacing: 1px;

	}

</style>
