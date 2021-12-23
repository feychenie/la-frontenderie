<script>
	import { currentTheme } from '$lib/store.js';
	const toggleTheme = () => {
		$currentTheme = $currentTheme === 'default' ? 'dark' : 'default';
	};
</script>

<button on:click={toggleTheme}>Toggle theme {$currentTheme}</button>
