<script>
	import { recordingStack } from '../stores'

	let noteSlots

	recordingStack.subscribe((stack) => (noteSlots = stack.notes))

	function deleteNote(index) {
		recordingStack.update((stack) => {
			stack.delete(index)
			stack.position--
			return stack
		})
	}
</script>

{#each noteSlots as noteSlot}
	<div
		class="recording-slot"
		class:filled={noteSlot.note}
		on:click={() => deleteNote(noteSlot.index)}
	>
		<span>
			{noteSlot.note ? noteSlot.note : ''}
		</span>
	</div>
{/each}

<style>
	.recording-slot {
		width: 40px;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 40px;
		border: 1px solid darkcyan;
		margin: 0.5rem;
		/* needs a better custom cursor for delete */
		cursor: url('../images/icons/delete02.svg'), auto;
	}

	.filled {
		background-color: darkcyan;
	}
</style>
