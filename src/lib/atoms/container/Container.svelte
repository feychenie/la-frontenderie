<script>
	import { container, centered } from './Container.css';
	export let center = true;
</script>

<div class="{container} {center ? centered : ''}">
	<slot />
</div>
