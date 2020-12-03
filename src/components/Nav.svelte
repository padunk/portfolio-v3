<script lang="ts">
    import { fade } from "svelte/transition";
    import Logo from "./Icons/Logo.svelte";
    export let segment: string;
</script>

{#if segment}
    <nav transition:fade>
        <!-- <ul>
        <li>
            <a
                aria-current="{segment === undefined ? 'page' : undefined}"
                href="."
            >home</a>
        </li>
        <li>
            <a
                aria-current="{segment === 'about' ? 'page' : undefined}"
                href="about"
            >about</a>
        </li>

        for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen
        <li>
            <a
                rel="prefetch"
                aria-current="{segment === 'construction' ? 'page' : undefined}"
                href="construction"
            >construction</a>
        </li>
    </ul> -->

        <span>{segment === undefined ? 'home' : segment}</span>
        <Logo segment="{segment}" />
    </nav>
{/if}

<style>
    nav {
        padding: 0.5em 1em;
        height: 120px;
        box-sizing: border-box;
        display: flex;
        align-items: flex-end;
        position: absolute;
        z-index: 999;
        inset: 0;
    }

    span {
        text-transform: uppercase;
        writing-mode: vertical-rl;
        transform: rotate(180deg);
        padding-top: 16px;
        font-family: "Oswald", var(--default-text);
        font-size: 24px;
    }
</style>
