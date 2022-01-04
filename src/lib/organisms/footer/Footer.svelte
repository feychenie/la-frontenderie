<script>
	import { footer } from './Footer.css';
	import Container from '$lib/atoms/container/Container.svelte';
	const { class: classProps = '', ...restProps } = $$restProps;
</script>

<!-- svelte-ignore component-name-lowercase -->
<footer class="{footer} {classProps}" {...restProps}>
	<Container>
		<slot />
	</Container>
</footer>
