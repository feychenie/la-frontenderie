<script context="module">
	export async function load({ page, fetch }) {
		const response = await fetch(`index.json`);

		if (response.ok) {
			const { articles } = await response.json();

			return {
				props: {
					articles
				},
				maxage: 0
			};
		}

		return {
			props: {}
		};
	}
</script>

<script type="ts">
	import Card from '$lib/card/index.svelte';
	export let articles = [];
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

{#each new Array(10) as truc}
	{#each articles as article}
		<Card {article} />
	{/each}
{/each}
