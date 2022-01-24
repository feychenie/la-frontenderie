<script>
	import { container, centered } from './Container.css';
	const { class: classProps = '', ...restProps } = $$restProps;
	export let center = true;
</script>

<div class="{container} {center ? centered : ''} {classProps}">
	<slot />
</div>
