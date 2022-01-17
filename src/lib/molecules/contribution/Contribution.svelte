<script>
	import Prism from 'prismjs';
	import { onMount } from 'svelte';
	import { marked } from 'marked';
	import { contribution } from './Contribution.css';
	const { class: classProps = '', ...restProps } = $$restProps;
	export let content = 'no content';

	onMount(() => {
		Prism.highlightAll();
		console.log('mounted');
	});
</script>

{#if content}
	<div class="{contribution} {classProps}" {...restProps}>
		{@html marked(content)}
	</div>
{/if}
