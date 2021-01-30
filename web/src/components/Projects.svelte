<script lang="ts">
    import { fade, fly } from "svelte/transition";
    import ProjectCard from "./ProjectCard.svelte";
    import projects from "../../src/projects.json";
    import otherProjects from '../otherProjects.json';
    import { onMount } from "svelte";
    import gsap from "gsap";
    import OtherProjectCard from "./OtherProjectCard.svelte";

    const tl = gsap.timeline();
    let projectEl: HTMLDivElement;
    onMount(() => {
        tl.from(projectEl, {
            y: 2000,
            duration: 2,
            autoAlpha: 0,
        });
    });
</script>

<svelte:head>
    <title>Abraham Anak Agung: Amazing Projects</title>
    <link rel="canonical" href="https://anakagung.com/projects">
</svelte:head>

<div bind:this="{projectEl}" class="wrapper">
    <div in:fly|local="{{ y: 2000, duration: 2000 }}" out:fade|local>
        <h2 class="title">My Projects</h2>
    </div>

    <section class="projects" in:fly|local="{{ y: 2000, duration: 2000 }}">
        {#each projects as project, i}
            <ProjectCard project="{project}" index="{i}" />
        {/each}
    </section>

    <section class="other-project">
        <h2>Other Projects:</h2>
        {#each otherProjects as otherProject}
            <OtherProjectCard {otherProject} />
        {/each}
    </section>
</div>

<style>
    .wrapper {
        visibility: hidden;
        padding-bottom: 32px;
    }

    .title {
        font-family: "AlienLeague Bold", var(--default-text);
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

    .other-project {
        display: flex;
        flex-direction: column;
        row-gap: 24px;
        justify-content: flex-start;
        align-items: center;
        font-family: "Laila", sans-serif;
        padding: 0 12px;
    }

    @media only screen and (min-width: 720px) {
        .projects {
            row-gap: 32px;
        }
    }
</style>
