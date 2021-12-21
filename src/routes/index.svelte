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
	export let articles = [];
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<h1>Frontenderie !</h1>

{#each articles as article}
	<article>
		<h2>{article.title}</h2>
		<p>{article.summary}</p>
		<div>{article.author.name}</div>
	</article>
{/each}
