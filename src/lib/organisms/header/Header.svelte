<script>
	import Container from '$lib/atoms/container/Container.svelte';
	import { sprinkles } from '$lib/styles/sprinkles.css';
	import Logo from '$lib/molecules/logo/Logo.svelte';
	import { listUnstyled } from '$lib/styles/styles.css';
	import { header } from '$lib/organisms/header/Header.css';
	import Link from '$lib/atoms/link/Link.svelte';
</script>

<!-- svelte-ignore component-name-lowercase -->
<header class={header}>
	<Container>
		<div
			class={sprinkles({
				display: 'flex',
				alignItems: 'center',
				width: 'full'
			})}
		>
			<Logo />
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
								display: 'flex'
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
				</div>
			</div>
		</div>
	</Container>
</header>
