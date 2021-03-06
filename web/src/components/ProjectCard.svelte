<script lang="ts">
    import { fly } from "svelte/transition";
    import { gsap } from "gsap";
    import debounce from "lodash.debounce";
    import ChevronDown from "./Icons/ChevronDown.svelte";
    import ChevronUp from "./Icons/ChevronUp.svelte";
    import type { ProjectDetail } from "../utils/types";
    import LinkGradient from "./LinkGradient.svelte";

    export let project: ProjectDetail;
    export let index: number;

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
        storyHeightBefore = projectStoryElement.getBoundingClientRect().height;

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
            } else {
                projectStoryElement.style.display = "block";
                storyHeightCurrent = projectStoryElement.getBoundingClientRect()
                    .height;

                tl.to(projectCardElement, {
                    height: cardHeight + storyHeightCurrent - storyHeightBefore,
                    duration: 1,
                    ease: "back.out(1)",
                });
            }
        } else {
            tl.to(projectCardElement, {
                height: 312.5,
                duration: 1,
                ease: "back.out(1)",
            });
            if (isMobile()) {
                tl.to(
                    projectBodyElement,
                    {
                        top: 0,
                        opacity: 0,
                    },
                    "-=0.9"
                );
            } else {
                tl.to(
                    projectStoryElement,
                    {
                        display: "-webkit-box",
                    },
                    "-=0.8"
                );
            }
        }
    };

    const handleResize = (e: any) => {
        projectBodyElement.removeAttribute("style");
        projectStoryElement.removeAttribute("style");

        if (show && isMobile()) {
            bodyHeight = projectBodyElement.getBoundingClientRect().height;
            projectBodyElement.style.opacity = "1";
            projectBodyElement.style.top = "300px";
            projectCardElement.style.height = 312.5 + bodyHeight + "px";
        } else if (show && !isMobile()) {
            // hacky way to get the story height
            projectStoryElement.style.display = "-webkit-box";
            storyHeightBefore = projectStoryElement.getBoundingClientRect()
                .height;
            projectStoryElement.style.display = "block";
            storyHeightCurrent = projectStoryElement.getBoundingClientRect()
                .height;
            projectCardElement.style.height =
                312.5 + storyHeightCurrent - storyHeightBefore + "px";
        }
    };

    let showingVideo: boolean = false;
    let cursorNone: boolean = false;
    let timeout: number;

    const controlCursorDisplay = () => {
        if (timeout) {
            window.clearTimeout(timeout);
        }
        cursorNone = false;

        timeout = window.setTimeout(() => {
            cursorNone = true;
        }, 1600);
    };
</script>

<svelte:window on:resize="{debounce(handleResize, 250, { maxWait: 1000 })}" />

<article
    class="project-card"
    bind:this="{projectCardElement}"
    in:fly="{{ x: index % 2 === 0 ? 1000 : -1000, duration: 1000, delay: 1400 }}"
>
    <div class="project-body" bind:this="{projectBodyElement}">
        <div
            class="project-body__story"
            class:noEllipsis
            bind:this="{projectStoryElement}"
        >
            <p class="project-body__description right-column">
                {project.description}
            </p>
            <p class="right-column">{project.story}</p>
            <p class="right-column">{project.challenge}</p>
            <div class="project-body__sub">
                <p class="sub-title">Feats:</p>
                <ul class="ul-list">
                    {#each project.feature as feat}
                        <li>{feat}</li>
                    {/each}
                </ul>
            </div>
            <div class="project-body__sub">
                <p class="sub-title">Todo:</p>
                <ul class="ul-list">
                    {#each project.todo as todo}
                        <li>{todo}</li>
                    {/each}
                </ul>
            </div>
            <div class="project-body__sub">
                <p class="sub-title">Stacks:</p>
                <ul class="ul-list">
                    {#each project.tech as tech}
                        <li>{tech}</li>
                    {/each}
                </ul>
                <LinkGradient href="{project.githubPath}" text="CODE SOURCE" />
            </div>
        </div>
    </div>
    <div class="project-header">
        <h3 class="project-title">
            <a href="{project.url}" target="_blank" rel="noopener noreferrer">
                {project.title}
            </a>
        </h3>
        <div class="expand-button" on:click="{toggleStory}">
            {#if show}
                <ChevronUp size="{24}" styles="fill: currentColor;" />
            {:else}
                <ChevronDown size="{24}" styles="fill: currentColor;" />
            {/if}
        </div>
    </div>
    <div
        class="project-media__container"
        class:cursorNone
        on:mouseenter="{() => (showingVideo = true)}"
        on:mouseleave="{() => (showingVideo = false)}"
        on:mousemove="{controlCursorDisplay}"
    >
        {#if showingVideo && project.videoPath}
            <video autoplay loop muted controls class="project-media">
                <source src="{project.videoPath}" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        {:else if showingVideo && !project.videoPath}
            <div class="video-not-available">
                <p>Video not available.</p>
            </div>
        {:else}
            <img
                src="{project.imgPath}.{project.imgType}"
                alt="{project.alt}"
                class="project-media"
            />
        {/if}
    </div>
</article>

<style>
    .project-card {
        box-sizing: border-box;
        position: relative;
        width: 100%;
        height: 312.5px;
        overflow: hidden;
        color: var(--primary);
    }

    .project-body {
        background-color: var(--tangerine);
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
        /* text-align: justify; */
        line-height: 1.48;
        font-size: 16px;
        font-family: "Laila", var(--default-text);
        grid-template-columns: repeat(2, 1fr);
    }

    .noEllipsis {
        -webkit-line-clamp: unset;
    }

    .project-body__description {
        color: var(--primary);
        text-transform: uppercase;
        font-family: "Oswald", var(--default-text);
        font-weight: bold;
        letter-spacing: 0.7px;
    }

    .right-column {
        grid-column: 2 / -1;
    }

    .project-body__sub {
        border-top: 1px solid var(--primary-light-alpha-6);
    }

    .sub-title {
        color: var(--primary);
    }

    .ul-list {
        list-style-position: inside;
        text-transform: capitalize;
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 8px;
        padding: 0;
        font-size: 12px;
    }

    .project-header {
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
        background: linear-gradient(
            to bottom,
            transparent 70%,
            var(--primary-lightest)
        );
        border-radius: 8px;
    }

    .project-title a:link,
    .project-title a:visited {
        color: var(--tangerine-light-alpha-8);
        font-family: "AlienLeague Bold", var(--default-text);
        font-size: 24px;
    }

    .project-title a:hover,
    .project-title a:active {
        background: linear-gradient(
            90deg,
            var(--tangerine),
            var(--secondary-bright)
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        -webkit-box-decoration-break: clone;
        background-clip: text;
        box-decoration-break: clone;
        text-shadow: none;
    }

    .expand-button {
        position: absolute;
        bottom: 0;
        right: 0;
        margin-right: 8px;
        cursor: pointer;
        color: var(--secondary-bright);
    }

    .project-media__container {
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

    .project-media {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .video-not-available {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        background-color: var(--primary-light);
        color: var(--primary-lightest);
    }

    .cursorNone {
        cursor: none;
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
            background: linear-gradient(
                to bottom,
                transparent,
                var(--primary) 90%
            );
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

        .project-media__container {
            left: 25%;
        }

        .ul-list {
            font-size: 16px;
        }
    }
</style>
