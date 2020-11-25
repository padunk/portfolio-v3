<script lang="ts">
	import Nav from '../components/Nav.svelte';

	export let segment: string;
</script>

<style>
	main {
		position: relative;
	}
</style>

<Nav {segment}/>

<main>
	<slot></slot>
</main>