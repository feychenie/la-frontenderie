<script>
	import { header } from '$lib/Header.css';
	import Container from '$lib/container/index.svelte';
	import { sprinkles } from './styles/sprinkles.css';
	import ThemeSwitcher from './ThemeSwitcher.svelte';
</script>

<!-- svelte-ignore component-name-lowercase -->
<header class={header}>
	<Container>
		<div
			class={sprinkles({
				display: 'flex',
				width: 'full'
			})}
		>
			<div>logo</div>
			<div
				class={sprinkles({
					marginLeft: 'auto'
				})}
			>
				<div>nav</div>
				<div>
					<ThemeSwitcher />
				</div>
			</div>
		</div>
	</Container>
</header>
