<script>
	export let type = 'button';

	import { createEventDispatcher } from 'svelte';

	const { class: classProps = '', ...restProps } = $$restProps;
	export let blockLevel = false;
	export let selected = false;
	const dispatch = createEventDispatcher();
	const dispatchClick = () => {
		dispatch('click');
	};
</script>

<button {type} class:blockLevel class:selected on:blur on:click={dispatchClick} class="btn {classProps}" {...restProps}>
	<slot name="before" />
	<slot />
	<slot name="after" />
</button>

<style lang="postcss">
	.btn {
		@apply rounded border border-indigo-500 px-2 py-1 text-sm leading-4;
	}

	.selected {
		@apply border-indigo-400 bg-indigo-500;
	}

	.blockLevel {
		@apply w-full;
	}
</style>
