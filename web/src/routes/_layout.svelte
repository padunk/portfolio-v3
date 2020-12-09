<script lang="ts">
    import Nav from "../components/Nav.svelte";
    export let segment: string;
</script>

<Nav segment="{segment}" />

<main>
    <slot />
</main>

<style>
    @font-face {
        font-family: "AlienLeague Bold";
        src: local("AlienLeagueBold"),
            url("/fonts/AlienLeagueBold.otf") format("opentype");
    }

    @font-face {
        font-family: "AlienLeague Expanded";
        src: local("AlienLeagueExpanded"),
            url("/fonts/AlienLeagueExpanded.otf") format("opentype");
    }

    @font-face {
        font-family: "Monument Valley";
        src: local("MonumentValley"),
            url("/fonts/MonumentValley.otf") format("opentype");
    }

    main {
        position: relative;
    }
</style>
