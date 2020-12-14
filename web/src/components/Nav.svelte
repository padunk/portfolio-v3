<script lang="ts">
    import Logo from "./Icons/Logo.svelte";
    export let segment: string;

    let hoverPath: string = "";

    const handleMouseEnter = (event) => {
        hoverPath =
            event.target.getAttribute("href") === "."
                ? "home"
                : event.target.getAttribute("href");
    };

    const handleMouseLeave = () => {
        hoverPath = "";
    };
</script>

{#if segment}
    <nav>
        <span>{segment === undefined ? 'home' : segment}</span>
        <Logo
            segment="{segment}"
            handleMouseEnter="{handleMouseEnter}"
            handleMouseLeave="{handleMouseLeave}"
        />
        <span class="hover-path">{hoverPath}</span>
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

    .hover-path {
        transform: rotate(0);
        writing-mode: horizontal-tb;
        padding: 0;
        padding-bottom: 13px;
        margin-left: -25px;
        color: var(--secondary);
        font-size: 16px;
    }
</style>
