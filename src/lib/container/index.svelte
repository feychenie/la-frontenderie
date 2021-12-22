<script>
	import { container, centered } from './index.css';
	export let center = true;
</script>

<div class="{container} {center ? centered : ''}">
	<slot />
</div>
