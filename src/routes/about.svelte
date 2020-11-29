<script lang="ts">
    import { gsap } from "gsap";
    import Codepen from "../components/Icons/Codepen.svelte";
    import Github from "../components/Icons/Github.svelte";
    import Instagram from "../components/Icons/Instagram.svelte";
    import Linkedin from "../components/Icons/Linkedin.svelte";
    import Mail from "../components/Icons/Mail.svelte";
    import Twitter from "../components/Icons/Twitter.svelte";
    import Whatsapp from "../components/Icons/Whatsapp.svelte";
    import type { SocialMediaAccount } from "../utils/types";

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
</script>

<svelte:head>
    <title>About</title>
</svelte:head>

<div>
    <h2 class="title">ABOUT <span class="title-name">ABRAHAM</span></h2>
</div>
<div class="shake-hand" class:hide>&#x1F91D;</div>
<section>
    <article class="about-me">
        <div class="about-me__content">
            <span class="waving-hand" on:click="{virtualShakeHand}">👋</span>
            <p>I'm a web developer based in Indonesia (GMT +7).</p>
            <p>
                I learn how to make a website since 2017, and have been fall in
                love since then.
            </p>
        </div>
    </article>
    <h3 class="social-media__title">
        If you on Twitter, say
        <a
            href="https://twitter.com/intent/tweet?screen_name=anakagungcorp&ref_src=twsrc%5Etfw"
            class="twitter-mention-button"
            data-show-count="false"
        >
            hi to me.
        </a>
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
            rgba(0, 0, 0, 0.4),
            transparent,
            rgba(0, 0, 0, 0.4)
        );
        backdrop-filter: blur(45px);
        transform: scale(5);
        z-index: 1;
    }

    .about-me {
        padding: 12px 16px;
        font-family: "Martel", serif;
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

    .social-media__title {
        text-align: center;
    }

    .twitter-mention-button {
        position: relative;
        color: var(--secondary);
        background: var(--primary);
        mix-blend-mode: lighten;
    }

    .twitter-mention-button:before {
        content: "";
        background: linear-gradient(
            125deg,
            var(--primary-light),
            var(--secondary),
            var(--tangerine)
        );
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        mix-blend-mode: darken;
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
    }
</style>
