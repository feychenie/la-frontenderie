<script>
	import Container from '$lib/atoms/container/Container.svelte';
	import { sprinkles } from '$lib/styles/sprinkles.css';
	import { stack, stacks } from '$lib/styles/stack.css';
</script>

<Container>
	<div
		class="{stack} {stacks[3]} {sprinkles({
			marginTop: '8x'
		})}"
	>
		<slot />
	</div>
</Container>
