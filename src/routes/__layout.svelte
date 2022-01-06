<script lang="ts">
	import '../app.css';
	import '$lib/styles/reset.css';
	import '$lib/styles/styles.css';
	import { themeClass } from '$lib/styles/theme-default.css';
	import { darkTheme } from '$lib/styles/theme-dark.css';

	import Header from '$lib/organisms/header/Header.svelte';
	import Footer from '$lib/organisms/footer/Footer.svelte';
	import Container from '$lib/atoms/container/Container.svelte';

	import { currentTheme } from '$lib/store.js';
	import { sprinkles } from '$lib/styles/sprinkles.css';
	import ThemeSwitcher from '$lib/molecules/themeSwitcher/ThemeSwitcher.svelte';

	$: themeIsDark = $currentTheme === 'dark';
</script>

<div
	id="root"
	class="{sprinkles({
		display: 'flex',
		flexDirection: 'column'
	})} {themeClass} {themeIsDark ? darkTheme : ''}"
>
	<Header>
		<Container>Frontenderie !</Container>
	</Header>

	<slot />
	<Footer>
	</Footer>
</div>
