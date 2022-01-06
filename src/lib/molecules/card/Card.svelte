<script>
	import {
		card,
		cardHeaderLink,
		cardBody,
		cardFooter,
		cardHeader,
		cardContent,
		cardEcho,
		cardOutline,
		cardEcho1,
		cardEcho2,
		cardEcho3,
		cardEcho4,
		cardEcho5
	} from './Card.css';
	import { sprinkles } from '$lib/styles/sprinkles.css';
	import Link from '$lib/atoms/link/Link.svelte';
	export let depth = 2;
	export let article = {
		title: '',
		content: '',
		author: {
			name: '',
			avatar: ''
		},
		publishedAt: ''
	};

	const cardEchos = [cardEcho1, cardEcho2, cardEcho3, cardEcho4, cardEcho5];

	const { class: classProps = '', ...restProps } = $$restProps;
	const { title, summary, author, publishedAt, slug = 'n-o-p-e' } = article;
</script>

<section class="{card} {classProps}" {...restProps}>
	<header class={cardHeader}>
		<Link href="/posts/{slug}" bleed class={cardHeaderLink}>{title}</Link>
	</header>
	<div
		class={sprinkles({
			marginTop: '0x',
			position: 'relative'
		})}
	>
		<div class="{cardContent} {cardOutline}">
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
				<time
					datetime={publishedAt}
					class={sprinkles({
						marginLeft: 'auto'
					})}
				>
					{new Date(publishedAt).toLocaleDateString('fr-FR')}
				</time>
			</footer>
		</div>
		{#each Array(depth) as depth, i}
			<div class="{cardOutline} {cardEcho} {cardEchos[i]}" />
		{/each}
	</div>
</section>
