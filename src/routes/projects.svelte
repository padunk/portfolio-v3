<script lang="ts">
    import { fly } from "svelte/transition";
    import ProjectCard from "../components/ProjectCard.svelte";
    import projects from "../../src/projects.json";
    const testArray = [1, 2, 3, 4, 5];
</script>

<svelte:head>
    <title>Abraham Anak Agung - Projects</title>
</svelte:head>

<div in:fly="{{ y: 2000, duration: 2000 }}">
    <h2 class="title">My Projects</h2>
</div>

<section class="projects" in:fly="{{ y: 2000, duration: 2000 }}">
    {#each projects as project, i}
        <ProjectCard project="{project}" index="{i}" />
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
