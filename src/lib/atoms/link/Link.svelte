<script>
	import { link, bleedClass, userBlockClass } from './Link.css';
	export let href = '';
	export let type = '';
	export let userBlock = false;
	export let bleed = false;
	const { class: classProps = '', ...restProps } = $$restProps;
</script>

<a
	{type}
	{href}
	class="{link} {classProps} {userBlock ? userBlockClass : ''} {bleed ? bleedClass : ''}"
	{...restProps}
>
	<slot name="before" />
	<slot />
	<slot name="after" />
</a>
