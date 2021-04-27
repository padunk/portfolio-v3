<script lang="ts">
    import { gsap } from "gsap";
    import { onMount } from "svelte";
    import { OTHER_STACKS, STACKS } from "../utils/constants";
    import Socmed from "./Socmed.svelte";

    let hide: boolean = true;
    const tl = gsap.timeline();

    const virtualShakeHand = () => {
        hide = !hide;

        if (!hide) {
            tl.to(".shake-hand", {
                opacity: 1,
                visibility: "visible",
                display: "flex",
                duration: 1,
                scale: 1,
                ease: "slow",
            });
        }

        setTimeout(() => {
            hide = !hide;
            tl.to(".shake-hand", {
                duration: 2,
                opacity: 0,
                scale: 5,
            }).to(
                ".shake-hand",
                {
                    visibility: "hidden",
                    display: "none",
                },
                "-=0.8"
            );
        }, 2000);
    };

    let aboutPage: HTMLDivElement;
    const aboutTL = gsap.timeline();
    onMount(() => {
        aboutTL.from(aboutPage, {
            x: 2000,
            duration: 2,
            autoAlpha: 0,
        });
    });
</script>

<svelte:head>
    <title>Abraham Anak Agung: About Me</title>
    <link rel="canonical" href="https://anakagung.com/about" />
</svelte:head>

<section bind:this="{aboutPage}">
    <div>
        <h2 class="title">ABOUT <span class="title-name">ABRAHAM</span></h2>
    </div>
    <div class="shake-hand" class:hide>&#x1F91D;</div>
    <article class="about-me">
        <div class="about-me__content">
            <div class="flex-horizontal">
                <span
                    class="waving-hand"
                    on:click="{virtualShakeHand}"
                >👋</span>
                <div class="image-wrapper">
                    <img
                        src="/images/profile_picture.jpg"
                        alt="a handsome man name abraham with white shirt"
                    />
                </div>
            </div>
            <p class="text">
                I'm a
                <em>Web wrench</em>
                (yeah... that's what I called myself). I'm not graduated from a
                fancy Bootcamp, I don't have a CS degree, and I'm a community &
                self-taught person.
            </p>
            <p class="text">
                So what's good? Honestly I still don't know much about this vast
                technology industry.
            </p>
            <ul>
                <li>
                    I graduated with a Master degree in Management (majoring in
                    Finance)
                </li>
                <li>
                    I was a Project Manager in the manufacturing and poultry
                    industry for 11 years.
                </li>
                <li>
                    Built my own travel company and got shut down by COVID-19.
                </li>
                <li>I know React, Svelte, and React Native.</li>
                <li>I love Twin Macro and ChakraUI for styling.</li>
                <li>
                    I'm on GMT+7, so I can code while others were asleep (if you
                    are in other side of the 🌎).
                </li>
            </ul>
            <p class="text">
                And not to mention that I also love 🍜, 🍻, 🏊‍♂️, and 🚵‍♂️.
            </p>
            <!-- <p class="text">My current tools is:</p>
            <ul>
                {#each STACKS as stack}
                    <li>
                        <a
                            class="stack-link"
                            href="{stack.url}"
                            target="_blank"
                            rel="noopener noreferrer"
                        >{stack.name}</a>
                    </li>
                {/each}
            </ul>
            <p class="text">
                Beside that I'm also work with other tech such as:
            </p>
            <ul>
                {#each OTHER_STACKS as otherStack}
                    <li>
                        <a
                            class="stack-link"
                            href="{otherStack.url}"
                            target="_blank"
                            rel="noopener noreferrer"
                        >{otherStack.name}</a>
                    </li>
                {/each}
            </ul>
            <p class="text">
                Currently I'm expanding my skill with
                <a
                    href="https://aws.amazon.com/id/amplify/"
                    class="link-gradient"
                    target="_blank"
                    rel="noopener noreferrer"
                >AWS - Amplify</a>
                to get better understanding about serverless.
            </p> -->
            <!-- <p class="text">
                My 2020 Accomplishment:
                <a
                    class="link-gradient"
                    href="https://freecodecamp.org/news/2020-top-contributors"
                >freeCodeCamp Codebase Top Contributors</a>
            </p>
            <div class="fcc-img">
                <img
                    src="/images/fcc_top_contributors.png"
                    alt="freecodecamp codebase top contributors"
                />
            </div> -->
        </div>
    </article>
    <h3 class="social-media__title">
        If you on Twitter, say
        <a
            href="https://twitter.com/intent/tweet?screen_name=anakagungcorp&ref_src=twsrc%5Etfw"
            class="link-gradient"
            data-show-count="false"
        >
            hi to me
        </a>
        or stalk me &#x1F609;
    </h3>
    <Socmed />
</section>

<style>
    section {
        visibility: hidden;
    }

    .title {
        font-family: "AlienLeague Bold", var(--default-text);
        font-size: 56px;
        text-align: center;
    }

    .title-name {
        color: var(--tertiary);
    }

    .flex-horizontal {
        display: flex;
        align-items: center;
        column-gap: 24px;
    }

    .image-wrapper {
        width: 48px;
        height: 48px;
        border-radius: 9999px;
        border: 1px solid transparent;
        box-shadow: 0 0 0 2px var(--tangerine);
        overflow: hidden;
    }

    .image-wrapper > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .shake-hand {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 10em;
        background: linear-gradient(
            90deg,
            var(--shadow-black-4),
            transparent,
            var(--shadow-black-4)
        );
        backdrop-filter: blur(15px);
        transform: scale(5);
        z-index: 1;
    }

    .about-me {
        padding: 12px 16px;
        font-family: "Oswald", var(--default-text);
        letter-spacing: 0.7px;
    }

    .about-me__content {
        max-width: 620px;
        margin-left: auto;
        margin-right: auto;
    }

    .waving-hand {
        font-size: 48px;
        transform-origin: right;
        display: inline-block;
        cursor: pointer;
        animation: waveHand 3s ease-in-out infinite alternate;
    }

    .text {
        line-height: 1.344;
        font-size: 24px;
        margin-bottom: 0;
        letter-spacing: 0.33px;
    }

    li {
        line-height: 1.5;
        font-size: 20px;
    }

    /* ul {
        list-style-type: none;
        margin-top: 0.5em;
    }

    li {
        margin-bottom: 8px;
    }

    .stack-link {
        line-height: 1.3;
        letter-spacing: 0.5px;
        text-decoration: none;
        padding-left: 4px;
        position: relative;
    }

    .stack-link::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 1px;
        background: linear-gradient(90deg, var(--grayish), transparent 75%);
    }

    .stack-link:link,
    .stack-link:visited {
        color: var(--primary-light);
        border-left: 1px solid var(--grayish);
        transition-property: color, border;
        transition-duration: 1200ms;
        transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
    }

    .stack-link:hover,
    .stack-link:active {
        color: var(--tangerine);
        border-left: 1px solid var(--tangerine-light-alpha-8);
    }

    .stack-link:hover.stack-link::after,
    .stack-link:active.stack-link::after {
        background: linear-gradient(
            90deg,
            var(--tangerine-light-alpha-8),
            transparent 75%
        );
    }

    .fcc-img {
        width: clamp(200px, 100%, 100%);
        clip-path: polygon(0 0, 100% 0, 100% 87%, 90% 100%, 0 100%);
        overflow: hidden;
    }

    .fcc-img img {
        object-fit: cover;
        width: 98%;
        height: 98%;
    } */

    .social-media__title {
        text-align: center;
        font-family: "Oswald", var(--default-text);
    }

    .link-gradient:link,
    .link-gradient:visited {
        color: var(--secondary);
        transition: all 200ms ease-in-out;
        text-decoration: none;
    }

    .link-gradient:hover,
    .link-gradient:active {
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

    .hide {
        display: none;
        opacity: 0;
        visibility: hidden;
    }

    @keyframes waveHand {
        0% {
            transform: rotateZ(15deg);
        }
        100% {
            transform: rotateZ(-15deg);
        }
    }

    @media only screen and (min-width: 640px) {
        .text {
            font-size: 20px;
            line-height: 1.86667;
        }
    }
</style>
