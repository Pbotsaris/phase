<script>
import Logo from './Logo.svelte'
import Record from './Record.svelte'
import {hasStarted} from '../stores'

let has_started;

hasStarted.subscribe(value => {
		has_started = value;
	}); 

</script>

<section class="container">
			<Logo visible={has_started}/>
			<Record visible={has_started}/>
</section>

<style type="text/css">
	
.container{
		display: flex;
		z-index: 1;
		justify-content: center;
		align-items: center;
		margin-top: 0.75%;
		width: 98.5%;
		height: 50%;
		border: 2px solid black;
		background: rgb(255,171,199);
		background: linear-gradient(180deg, rgba(255,171,199,1) 7%, rgba(220,213,203,1) 100%);
	}

 
</style>
