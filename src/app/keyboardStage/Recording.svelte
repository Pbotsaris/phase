<script>
	import { recordingStack } from '../../stores'

	let noteSlots

	recordingStack.subscribe((stack) => {
		noteSlots = stack.notes
	})

	function deleteNote(index) {
		recordingStack.update((stack) => {
			if (stack.position == 0) return stack

			stack.delete(index)
			stack.position--
			return stack
		})
	}
</script>

<div class="recording-container">
	{#each noteSlots as noteSlot}
		<button
			class="recording-slot"
			class:filled={noteSlot.note}
			on:click={() => deleteNote(noteSlot.index)}
		>
			<span>
				{noteSlot.note ? noteSlot.note : ''}
			</span>
		</button>
	{/each}
</div>

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
		transition: all 0.2s;
	}

	.filled {
		background-color: darkcyan;
		transition: all 0.2s;
	}

	.recording-container {
		margin-top: 3rem;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
