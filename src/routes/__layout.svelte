<script lang="ts">
	import '../app.css';
	import '$lib/styles/reset.css';
	import '$lib/styles/styles.css';
	import { themeClass } from '$lib/styles/theme-default.css';
	import { darkTheme } from '$lib/styles/theme-dark.css';

	import Header from '$lib/Header.svelte';
	import Container from '$lib/container/index.svelte';
	import { sprinkles } from '$lib/styles/sprinkles.css';
	import { currentTheme } from '$lib/store.js';

	$: themeIsDark = $currentTheme === 'dark';
</script>

<div id="root" class="{themeClass} {themeIsDark ? darkTheme : ''}">
	<Header>
		<Container>Frontenderie !</Container>
	</Header>

	<Container>
		<main
			class={sprinkles({
				display: 'grid',
				width: 'full',
				gap: '6x',
				gridTemplateColumns: 3
			})}
		>
			<slot />
		</main>
	</Container>
</div>
