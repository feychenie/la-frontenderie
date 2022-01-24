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
	import Card from '$lib/molecules/card/Card.svelte';
	import Container from '$lib/atoms/container/Container.svelte';
	import { sprinkles } from '$lib/styles/sprinkles.css';
	import { stack, stacks } from '$lib/styles/stack.css';

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
		<div
			class={sprinkles({
				display: 'grid',
				gridTemplateColumns: 3,
				gap: '4x'
			})}
		>
			<div
				class={sprinkles({
					gridColumn: 3
				})}
			>
				Spoil: Ta carriere de développeur web commence ici.
			</div>
			<div
				class={sprinkles({
					gridColumn: 2
				})}
			>
				<h2>Articles</h2>
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
			</div>
			<div class="{stack} {stacks[2]}">
				<h2>Side content</h2>
				<ul class="{stack} {stacks[1]}">
					<li>CSS défensif</li>
					<li>complexité</li>
					<li>hold the door: reduire les métriques de la feuille de style -> systémiser</li>
					<li>stratégie: le jeu dont tu est le héros</li>
					<li>Collaborer: organiser / documenter</li>
				</ul>
			</div>
		</div>
	</Container>
</main>
