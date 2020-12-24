<script lang="ts">
    import ErrorIcon from "../components/Icons/ErrorIcon.svelte";

    export let status: number;
    export let error: Error;

    const dev = process.env.NODE_ENV === "development";
</script>

<svelte:head>
    <title>Error: {status}</title>
</svelte:head>

<div class="wrapper">
    <h1>{status}</h1>

    <p>{error.message}</p>

    <ErrorIcon size="{200}" />

    {#if dev && error.stack}
        <pre>{error.stack}</pre>
    {/if}
    <p>
        <small>SVG picture from
            <a
                href="https://undraw.co"
                target="_blank"
                rel="noopener noreferrer"
            >undraw.co</a></small>
    </p>
</div>

<style>
    .wrapper {
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: white;
    }

    h1 {
        font-size: 2.8em;
        font-weight: 700;
    }

    p {
        margin: 1em auto;
    }

    a:link,
    a:visited {
        color: var(--secondary);
        transition: color 200ms ease-in-out;
    }

    a:hover,
    a:active {
        color: var(--tangerine);
    }

    @media (min-width: 480px) {
        h1 {
            font-size: 4em;
        }
    }
</style>
