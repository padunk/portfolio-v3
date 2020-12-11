<script lang="ts">
    import { gsap } from "gsap";
    import Codepen from "./Icons/Codepen.svelte";
    import Github from "./Icons/Github.svelte";
    import Instagram from "./Icons/Instagram.svelte";
    import Linkedin from "./Icons/Linkedin.svelte";
    import Mail from "./Icons/Mail.svelte";
    import Twitter from "./Icons/Twitter.svelte";
    import Whatsapp from "./Icons/Whatsapp.svelte";
    import type { SocialMediaAccount } from "../utils/types";
    import { onDestroy, onMount } from "svelte";

    const socMedAccounts: SocialMediaAccount[] = [
        {
            name: "Github",
            href: "https://github.com/padunk",
            size: 24,
            className: "svg-icon",
        },
        {
            name: "Codepen",
            href: "https://codepen.io/padunk",
            size: 24,
            className: "svg-icon",
        },
        {
            name: "Linkedin",
            href: "https://linkedin.com/in/abrahamanakagung",
            size: 24,
            className: "svg-icon",
        },
        {
            name: "Twitter",
            href: "https://twitter.com/anakagungcorp",
            size: 24,
            className: "svg-icon",
        },
        {
            name: "Instagram",
            href: "https://instagram.com/gocodecourse",
            size: 24,
            className: "svg-icon",
        },
        {
            name: "Whatsapp",
            href:
                "https://wa.me/6282169879998/?text=Hi,%20I%20like%20to%20hire%20you.",
            size: 24,
            className: "svg-icon",
        },
        {
            name: "Email",
            href: "mailto:abraham.anak.agung@gmail.com",
            size: 24,
            className: "svg-icon",
        },
    ];

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

    const stacks = [
        { name: "ReactJS", url: "https://reactjs.org/" },
        { name: "ReactNative", url: "https://reactnative.dev/" },
        { name: "Redux", url: "https://redux.js.org/" },
        { name: "TypeScript", url: "https://www.typescriptlang.org/" },
        { name: "Firebase", url: "https://firebase.google.com" },
        { name: "TailwindCSS", url: "https://tailwindcss.com" },
        { name: "Styled Components", url: "https://styled-components.com" },
        { name: "NodeJS", url: "https://nodejs.org/en/" },
    ];

    const otherStacks = [
        { name: "Svelte", url: "https://svelte.dev" },
        { name: "PostgreSQL", url: "https://www.postgresql.org/" },
        { name: "MongoDB", url: "https://mongodb.com" },
        { name: "SASS", url: "https://sass-lang.com/" },
        { name: "Go", url: "https://golang.org" },
    ];

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
    <title>About</title>
</svelte:head>

<section bind:this="{aboutPage}">
    <div>
        <h2 class="title">ABOUT <span class="title-name">ABRAHAM</span></h2>
    </div>
    <div class="shake-hand" class:hide>&#x1F91D;</div>
    <article class="about-me">
        <div class="about-me__content">
            <span class="waving-hand" on:click="{virtualShakeHand}">👋</span>
            <p class="text">
                I'm a web developer, photographer, and teacher based in
                Indonesia (GMT +7). I love creating beautiful application and
                solving complex tasks.
            </p>
            <p class="text">My current tools is:</p>
            <ul>
                {#each stacks as stack}
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
                {#each otherStacks as otherStack}
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
            </p>
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
    <div class="social-media">
        <ul class="social-media__lists">
            {#each socMedAccounts as account}
                <li>
                    <a
                        href="{account.href}"
                        rel="noopener noreferrer"
                        target="_blank"
                        class="social-media__link"
                    >
                        {#if account.name === 'Github'}
                            <Github
                                size="{account.size}"
                                className="{account.className}"
                            />
                        {:else if account.name === 'Codepen'}
                            <Codepen
                                size="{account.size}"
                                className="{account.className}"
                            />
                        {:else if account.name === 'Linkedin'}
                            <Linkedin
                                size="{account.size}"
                                className="{account.className}"
                            />
                        {:else if account.name === 'Twitter'}
                            <Twitter
                                size="{account.size}"
                                className="{account.className}"
                            />
                        {:else if account.name === 'Instagram'}
                            <Instagram
                                size="{account.size}"
                                className="{account.className}"
                            />
                        {:else if account.name === 'Email'}
                            <Mail
                                size="{account.size}"
                                className="{account.className}"
                            />
                        {:else}
                            <Whatsapp
                                size="{account.size}"
                                className="{account.className}"
                            />
                        {/if}
                    </a>
                </li>
            {/each}
        </ul>
    </div>
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
        backdrop-filter: blur(45px);
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
        margin-bottom: 0;
    }

    ul {
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

    .social-media {
        margin-bottom: 4em;
    }

    .social-media__title {
        text-align: center;
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

    .social-media__lists {
        display: flex;
        column-gap: 16px;
        list-style-type: none;
        padding: 0;
        justify-content: center;
    }

    .social-media__link {
        color: var(--primary-light);
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