<script>
	import { sprinkles } from '$lib/styles/sprinkles.css';
	import Logo from '$lib/molecules/logo/Logo.svelte';
	import { listUnstyled } from '$lib/styles/styles.css';
	import Link from '$lib/atoms/link/Link.svelte';
	import ThemeSwitcher from '$lib/molecules/themeSwitcher/ThemeSwitcher.svelte';
</script>

<!-- svelte-ignore component-name-lowercase -->
<header
	class={sprinkles({
		paddingX: '5x',
		paddingY: '5x'
	})}
>
	<div
		class={sprinkles({
			display: 'flex',
			alignItems: 'center',
			width: 'full'
		})}
	>
		<Link href="/"><Logo /></Link>
		<div
			class={sprinkles({
				marginLeft: 'auto'
			})}
		>
			<div
				class={sprinkles({
					display: 'flex',
					alignItems: 'center'
				})}
			>
				<nav>
					<ol
						class="{listUnstyled} {sprinkles({
							display: 'flex',
							fontSize: 'fontSize1'
						})}"
					>
						<li>
							<Link href="/">Home</Link>
						</li>
						<li class={sprinkles({ marginLeft: '2x' })}>
							<Link href="/about">About</Link>
						</li>
					</ol>
				</nav>
				<ThemeSwitcher class={sprinkles({ marginLeft: '2x' })} />
			</div>
		</div>
	</div>
</header>
