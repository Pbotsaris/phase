<script>
import {fade} from 'svelte/transition'
export let visible;
</script>

{#if !visible}
	<div class="logo-container"
		transition:fade={{duration: 150}}>
	
		<img src="images/logo.svg" alt="logo" class="logo">
		<span class="logo-copy">A hypinotically wonderful journey into infinty.</span>
	</div>
{/if}

<style>

.logo{
	width: 50%;

}
	.logo-copy{
		margin-top: 0.7rem;
		color:var(--main-blue);
		font-weight: 600;
		letter-spacing: 1px;
	}

	.logo-container{
		width: 100%;
		display:flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}


</style>
