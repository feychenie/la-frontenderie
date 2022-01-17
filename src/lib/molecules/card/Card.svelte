<script type="ts">
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

	interface Article {
		title: string;
		description: string;
		author: string;
		date: string;
		slug: string;
		published: boolean;
	}

	export let article: Article;

	const cardEchos = [cardEcho1, cardEcho2, cardEcho3, cardEcho4, cardEcho5];

	const { class: classProps = '', ...restProps } = $$restProps;
	const { title, description, author, date, slug = 'n-o-p-e' } = article;
</script>

<section class="{card} {classProps}" {...restProps}>
	<header class={cardHeader}>
		<Link href="/articles/{slug}" bleed class={cardHeaderLink}>{title}</Link>
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
				<div>{description}</div>
			</div>
			<footer
				class="{cardFooter} {sprinkles({
					marginTop: '2x'
				})}"
			>
				<div>{author}</div>
				<time
					datetime={date}
					class={sprinkles({
						marginLeft: 'auto'
					})}
				>
					{new Date(date).toLocaleDateString('fr-FR')}
				</time>
			</footer>
		</div>
		{#each Array(depth) as depth, i}
			<div class="{cardOutline} {cardEcho} {cardEchos[i]}" />
		{/each}
	</div>
</section>
