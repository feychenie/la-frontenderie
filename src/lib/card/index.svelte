<script>
	import { card, cardBody, cardFooter, cardHeader } from './index.css';
	import { sprinkles } from '$lib/styles/sprinkles.css';
	export let article = {
		title: '',
		content: '',
		author: {
			name: '',
			avatar: ''
		},
		publishedAt: ''
	};

	const { title, summary, author, publishedAt } = article;
</script>

<section class={card}>
	<header class={cardHeader}>
		<div>{title}</div>
	</header>
	<div
		class="{cardBody} {sprinkles({
			marginTop: '2x'
		})}"
	>
		<div>{summary}</div>
	</div>
	<footer
		class="{cardFooter} {sprinkles({
			marginTop: '2x'
		})}"
	>
		<div>{author.name}</div>
		<time datetime={publishedAt}
			class={sprinkles({
				marginLeft: 'auto'
			})}
			>
			{new Date(publishedAt).toLocaleDateString('fr-FR')}
		</time>
	</footer>
</section>
