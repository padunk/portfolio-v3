<script lang="ts">
    import ProjectCard from "../components/ProjectCard.svelte";

    const testArray = [1, 2, 3, 4, 5];
</script>

<svelte:head>
    <title>Abraham Anak Agung - Projects</title>
</svelte:head>

<div>
    <h2 class="title">My Projects</h2>
</div>

<section class="projects">
    {#each testArray as item}
        <ProjectCard />
    {/each}
</section>

<style>
    @font-face {
        font-family: "AlienLeague Bold";
        src: local("AlienLeagueBold"),
            url("/fonts/AlienLeagueBold.otf") format("opentype");
    }

    .title {
        font-family: "AlienLeague Bold", -apple-system, BlinkMacSystemFont,
            "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
            "Helvetica Neue", sans-serif;
        font-size: 56px;
        text-align: center;
    }

    .projects {
        padding-left: 8px;
        padding-right: 8px;
        padding-bottom: 24px;
        display: flex;
        align-items: center;
        flex-direction: column;
        row-gap: 16px;
    }

    @media only screen and (min-width: 720px) {
        .projects {
            row-gap: 32px;
        }
    }
</style>
