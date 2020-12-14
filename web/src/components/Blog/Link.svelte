<script>
    export let href;
</script>

<a href="{href}" target="_blank" rel="noopener noreferrer">
    <slot />
</a>

<style>
    a:link,
    a:visited {
        color: var(--secondary);
        transition: color 250ms ease-in-out;
    }

    a:hover,
    a:active {
        color: var(--tangerine);
    }
</style>
