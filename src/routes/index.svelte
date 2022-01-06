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
	import Card from '$lib/molecules/card/Card.svelte';
import Container from '$lib/atoms/container/Container.svelte';
	export let articles = [];
	const items = [2, 2, 2];
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<main
	class={sprinkles({
		display: 'block',
		width: 'full',
		marginTop: '8x'
	})}
>
	<Container>
		{#each articles as article, i}
			<Card
				{article}
				depth={items[Math.floor(Math.random() * items.length)]}
				class={i > 0
					? sprinkles({
							marginTop: '8x'
					  })
					: ''}
			/>
		{/each}
	</Container>
</main>
