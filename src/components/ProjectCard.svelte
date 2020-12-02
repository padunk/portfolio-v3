<script lang="ts">
    import { fly } from "svelte/transition";
    import { gsap } from "gsap";
    import ChevronDown from "./Icons/ChevronDown.svelte";
    import ChevronUp from "./Icons/ChevronUp.svelte";
    export let project: any;
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
        }, 2000);
    };
</script>

<svelte:window on:resize="{handleResize}" />

<article
    class="project-card"
    bind:this="{projectCardElement}"
    in:fly="{{ x: index % 2 === 0 ? 1000 : -1000, duration: 1000, delay: 1400 }}"
>
    <div class="project-body" bind:this="{projectBodyElement}">
        <p
            class="project-body__story"
            class:noEllipsis
            bind:this="{projectStoryElement}"
        >
            {project.description}
        </p>
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
        {#if showingVideo}
            <!-- content here -->
            <video autoplay loop muted class="project-media">
                <source src="{project.videoPath}" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        {:else}
            <!-- else content here -->
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
        font-family: "Domine", var(--default-text);
    }

    .noEllipsis {
        -webkit-line-clamp: unset;
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
            var(--primary-light)
        );
        border-radius: 8px;
    }

    .project-title a:link,
    .project-title a:visited {
        color: var(--tangerine-light-alpha-8);
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
            -webkit-line-clamp: 9;
            -webkit-box-orient: vertical;
        }

        .project-media__container {
            left: 25%;
        }
    }
</style>
