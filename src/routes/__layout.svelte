<script lang="ts">
	import '../app.css';
	import '$lib/styles/styles.css';
</script>

<main>
	<div style="background-color: hsl(140, 36%, 55%);" />
	<div style="background-color: hsl(140, 36%, 50%);" />
	<div style="background-color: hsl(140, 36%, 40%);" />
	<div style="background-color: hsl(140, 36%, 30%);" />
	<div style="background-color: hsl(140, 36%, 10%);" />
	<div style="background-color: hsl(140, 36%, 6%);" />

	<slot />
</main>

<style>
	div {
		width: 5rem;
		height: 5rem;
	}
</style>
