<script context="module">
	export async function load({ fetch }) {
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
	import { sprinkles } from '$lib/styles/sprinkles.css';
	import Card from '$lib/molecules/card/index.svelte';
	export let articles = [];
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<main
	class={sprinkles({
		display: 'block',
		width: 'full'
	})}
>
	{#each articles as article}
		<Card
			{article}
			class={sprinkles({
				marginTop: '2x'
			})}
		/>
	{/each}
</main>
