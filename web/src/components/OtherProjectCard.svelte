<script>
import LinkGradient from "./LinkGradient.svelte";

    export let otherProject;
</script>

<div class="other-project-card">
    <div class="other-project-image">
        <img src="{otherProject.imgSrc}" alt="twitter 2077 Theme UI">
    </div>
    <div class="other-project-header">
       <h2>{otherProject.title}</h2>
    </div>
    <div class="other-project-body">
        <p>{otherProject.story}</p>
        <p>Tech:</p>
        <ul>
            {#each otherProject.tech as tech}
                <li>{tech}</li>
            {/each}
        </ul>
    </div>
    <div class="other-project-footer">
        <LinkGradient href="{otherProject.url}" text="Demo" />
        <LinkGradient href="{otherProject.githubPath}" text="Source code" />
    </div>
</div>

<style>
    .other-project-card {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: var(--primary);
        background: var(--tangerine);
        border-radius: 10px;
        max-width: 800px;
    }

    .other-project-image {
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        border-radius: 8px;
    }

    .other-project-image img {
        object-fit: cover;
        width: 100%;
    }

    h2 {
        text-transform: uppercase;
        font-family: 'Oswald', sans-serif;
    }

    .other-project-body {
        padding: 16px 24px;

    }

    .other-project-footer {
        display: flex;
        justify-content: space-around;
        width: 100%;
        padding: 12px;
    }

    li {
        text-transform: capitalize;
    }
</style>