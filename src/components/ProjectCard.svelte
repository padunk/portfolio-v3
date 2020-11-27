<script lang="ts">
    import { gsap } from "gsap";
    import { onMount } from "svelte";
    import ChevronDown from "./ChevronDown.svelte";
    import ChevronUp from "./ChevronUp.svelte";

    let projectCardElement: HTMLDivElement;
    let projectBodyElement: HTMLDivElement;
    let projectStoryElement: HTMLParagraphElement;

    let show: boolean = false;
    let noEllipsis: boolean = false;

    const isMobile = () => window && window.innerWidth < 720;

    let cardHeight: number;
    let bodyHeight: number;
    let storyHeightBefore: number;
    let storyHeightCurrent: number;

    const tl = gsap.timeline();

    const toggleStory = () => {
        show = !show;
        cardHeight = projectCardElement.getBoundingClientRect().height;
        bodyHeight = projectBodyElement.getBoundingClientRect().height;

        if (show) {
            if (isMobile()) {
                tl.to(projectCardElement, {
                    height: cardHeight + bodyHeight,
                    duration: 1,
                    ease: "back.out(1)",
                }).to(
                    projectBodyElement,
                    {
                        top: 300,
                        opacity: 1,
                    },
                    "-=0.9"
                );
            }
        } else {
            if (isMobile()) {
                tl.to(projectCardElement, {
                    height: 312.5,
                    duration: 1,
                    ease: "back.out(1)",
                }).to(
                    projectBodyElement,
                    {
                        top: 0,
                        opacity: 0,
                    },
                    "-=0.9"
                );
            }
        }
    };

    const handleResize = (e: any) => {};
</script>

<svelte:window on:resize="{handleResize}" />

<article class="project-card" bind:this="{projectCardElement}">
    <div class="project-body" bind:this="{projectBodyElement}">
        <p
            class="project-body__story"
            class:noEllipsis
            bind:this="{projectStoryElement}"
        >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Pulvinar
            etiam non quam lacus. Enim lobortis scelerisque fermentum dui
            faucibus in ornare. Pellentesque dignissim enim sit amet venenatis
            urna. Scelerisque viverra mauris in aliquam sem fringilla ut morbi.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Pulvinar
            etiam non quam lacus. Enim lobortis scelerisque fermentum dui
            faucibus in ornare. Pellentesque dignissim enim sit amet venenatis
            urna. Scelerisque viverra mauris in aliquam sem fringilla ut morbi.
        </p>
    </div>
    <div class="project-header">
        <h3>Talons</h3>
        <div class="expand-button" on:click="{toggleStory}">
            {#if show}
                <ChevronUp size="{24}" />
            {:else}
                <ChevronDown size="{24}" />
            {/if}
        </div>
    </div>
    <div class="project-image__container">
        <img
            src="https://images.unsplash.com/photo-1567892320421-1c657571ea4a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8c2V4eXxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="project"
            class="project-image"
        />
    </div>
</article>

<style>
    .project-card {
        box-sizing: border-box;
        position: relative;
        width: 100%;
        height: 312.5px;
        overflow: hidden;
    }

    .project-body {
        background-color: orange;
        box-sizing: border-box;
        position: absolute;
        width: 250px;
        border-radius: 8px;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        padding: 0 16px;
        /* display: none; */
        opacity: 0;
    }

    .project-body__story {
        text-align: justify;
        font-size: 20px;
        font-family: "Dancing Script", cursive;
    }

    .noEllipsis {
        -webkit-line-clamp: unset;
    }

    .project-header {
        background-color: burlywood;
        position: absolute;
        left: 50%;
        top: 60px;
        text-align: center;
        width: 250px;
        height: 250px;
        display: flex;
        align-items: flex-end;
        justify-content: center;
        transform: translateX(-50%);
        background: linear-gradient(to bottom, transparent, rebeccapurple 90%);
        border-radius: 8px;
    }

    .expand-button {
        position: absolute;
        bottom: 0;
        right: 0;
        margin-right: 8px;
        cursor: pointer;
    }

    .project-image__container {
        background-color: aqua;
        position: absolute;
        width: 250px;
        height: 250px;
        top: 0;
        left: 50%;
        overflow: hidden;
        border-radius: 56px 8px 56px 8px;
        transform: translateX(-50%);
        box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.4);
    }

    .project-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    @media only screen and (min-width: 720px) {
        .project-card {
            overflow: hidden;
            padding-left: 24px;
            padding-right: 24px;
            border-radius: 8px;
            width: 660px;
        }

        .project-header {
            left: 25%;
        }

        .project-body {
            display: block;
            opacity: 1;
            width: 100%;
            height: 100%;
            top: 60px;
            padding-left: 50%;
            padding-right: 24px;
        }

        .project-body__story {
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 8;
            -webkit-box-orient: vertical;
        }

        .project-image__container {
            left: 25%;
        }
    }
</style>
