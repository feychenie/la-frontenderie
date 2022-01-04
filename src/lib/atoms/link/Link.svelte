<script>
	import { link } from './Link.css';
	export let href = '';
	export let type = '';
	export let userBlock = false;
	const { class: classProps = '', ...restProps } = $$restProps;
</script>

<a {type} {href} class="{link} {classProps}" {...restProps}>
	<slot name="before" />
	<slot />
	<slot name="after" />
</a>
