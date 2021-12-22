<script lang="ts">
	import '../app.css';
	import '$lib/styles/reset.css';
	import '$lib/styles/styles.css';
	import { themeClass } from '$lib/styles/theme-default.css';
	import { darkTheme } from '$lib/styles/theme-dark.css';

	import Container from '$lib/container/index.svelte';

	let theme = 'default';

	$: themeIsDark = theme === 'dark';

	const toggleTheme = () => {
		theme = theme === 'default' ? 'dark' : 'default';
	};
</script>

<div id="root" class="{themeClass} {themeIsDark ? darkTheme : ''}">
	<header>
		<Container>Frontenderie !</Container>
	</header>

	<button on:click={toggleTheme} >Toggle theme</button>

	<Container>
		<main>
			<slot />
		</main>
	</Container>
</div>
