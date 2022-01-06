<script>
	import { footer, pattern } from './Footer.css';
	import Container from '$lib/atoms/container/Container.svelte';
	import Illustration from './Illustration.svelte';
	const { class: classProps = '', ...restProps } = $$restProps;
</script>

<!-- svelte-ignore component-name-lowercase -->
<footer class="{footer} {classProps}" {...restProps}>
	<Illustration />
	<Container>
		<slot />
	</Container>
</footer>
