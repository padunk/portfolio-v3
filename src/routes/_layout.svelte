<script lang="ts">
    import Nav from "../components/Nav.svelte";
    export let segment: string;
</script>

<Nav segment="{segment}" />

<main>
    <slot />
</main>

<style>
    main {
        position: relative;
    }
</style>
