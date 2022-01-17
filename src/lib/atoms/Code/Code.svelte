<script>
	import Prism from 'prismjs';
	import { onMount } from 'svelte';

	export let language = 'javascript';
	export let code;

	onMount(() => {
		Prism.highlightAll();
	});
</script>

<div class="w3-container">
	<pre><code class="language-{language}">{code}</code></pre>
</div>
