<script context="module">
	/** @type {import('@sveltejs/kit').ErrorLoad} */
	export function load({ error, status }) {
		return {
			props: {
				title: `${status}: ${error.message}`
			}
		};
	}
</script>

<script>
	import Container from '$lib/atoms/container/Container.svelte';

	export let title;
</script>

<Container>
	<h1>{title}</h1>
</Container>
