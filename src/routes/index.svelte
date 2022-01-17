<script context="module">
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ fetch }) {
		const posts = await fetch('articles.json').then((res) => res.json());

		return {
			props: {
				posts
			}
		};
	}
</script>

<script type="ts">
	import { sprinkles } from '$lib/styles/sprinkles.css';
	import Card from '$lib/molecules/card/Card.svelte';
	import Container from '$lib/atoms/container/Container.svelte';
	import Link from '$lib/atoms/link/Link.svelte';

	export let posts;
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
		{#each posts as post, i}
			<Card
				article={post}
				class={i > 0
					? sprinkles({
							marginTop: '8x'
					  })
					: ''}
			/>
		{/each}
	</Container>
</main>
