<script lang="ts">
    import { gsap } from "gsap";
    import { onMount } from "svelte";
    import { isMobile } from "../utils/helpers";
    export let segment: string;

    onMount(() => {
        const tl = gsap.timeline({
            defaults: {
                opacity: 0,
                ease: "expo.out",
                backgroundColor: "white",
            },
        });
        const init = () => {
            tl.from(".hero", {
                autoAlpha: 0,
            });

            if (isMobile()) {
                tl.from(".bg-left", {
                    translateX: "100%",
                    duration: 1.5,
                })
                    .from(
                        ".bg-center",
                        {
                            translateX: "-100%",
                            duration: 1.5,
                        },
                        "-=0.8"
                    )
                    .from(
                        ".bg-right",
                        {
                            translateX: "100%",
                            duration: 1.5,
                        },
                        "-=0.8"
                    );
            } else {
                tl.from(".bg-left", {
                    translateY: "100%",
                    duration: 1.5,
                })
                    .from(
                        ".bg-center",
                        {
                            translateY: "-100%",
                            duration: 1.5,
                        },
                        "-=0.8"
                    )
                    .from(
                        ".bg-right",
                        {
                            translateY: "100%",
                            duration: 1.5,
                        },
                        "-=0.8"
                    );
            }
        };

        init();
    });
</script>

<div class="hero">
    <div class="moving-background">
        <section class="bg-left">
            <div class="hero-section section-left">
                <h2 class="hero-title">Abraham</h2>
                <a
                    aria-current="{segment === 'projects' ? 'page' : undefined}"
                    class="hero-nav"
                    href="projects"
                ><h2>Projects</h2></a>
            </div>
        </section>

        <section class="bg-center">
            <div class="hero-section section-center">
                <h2 class="hero-title">Anak</h2>
                <a
                    rel="prefetch"
                    aria-current="{segment === 'blog' ? 'page' : undefined}"
                    class="hero-nav"
                    href="blog"
                ><h2>Blog</h2></a>
            </div>
        </section>

        <section class="bg-right">
            <div class="hero-section section-right">
                <h2 class="hero-title">Agung</h2>
                <a
                    aria-current="{segment === 'about' ? 'page' : undefined}"
                    class="hero-nav"
                    href="about"
                ><h2>About</h2></a>
            </div>
        </section>
    </div>
</div>

<style>
    @font-face {
        font-family: "AlienLeague Expanded";
        src: local("AlienLeagueExpanded"),
            url("/fonts/AlienLeagueExpanded.otf") format("opentype");
    }

    @font-face {
        font-family: "Monument Valley";
        src: local("MonumentValley"),
            url("/fonts/MonumentValley.otf") format("opentype");
    }

    h2 {
        font-family: "AlienLeague Expanded", -apple-system, BlinkMacSystemFont,
            "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
            "Helvetica Neue", sans-serif;
        margin: 0;
        text-transform: uppercase;
    }

    .hero {
        /* display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        justify-items: center;
        row-gap: 8px;
        margin: 0 auto;
        width: 100vw; */
        visibility: hidden;
    }

    .moving-background {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        flex-direction: column;
        background-color: white;
    }

    .bg-left,
    .bg-center,
    .bg-right {
        height: 33.3333%;
        width: 100%;
        display: flex;
        background-image: url("/images/hero-portrait.jpg");
        background-color: var(--primary);
        background-attachment: fixed;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: 0% 80%;
    }

    .bg-left::after,
    .bg-center::after,
    .bg-right::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: hsla(260, 47%, 27%, 0.8);
    }

    .hero-section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        perspective: 1000px;
        perspective-origin: center;
        position: relative;
        z-index: 10;
        width: 100%;
        min-width: 200px;
    }

    .hero-title {
        color: var(--tertiary);
        font-size: 48px;
        line-height: 60px;
        transform-origin: top;
        transition-property: transform, opacity;
        transition-duration: 500ms;
    }

    .hero-nav {
        color: var(--secondary);
        opacity: 0;
        position: absolute;
        transform: rotateX(-90deg) translateY(100%);
        transform-origin: bottom;
        transition-property: transform, opacity;
        transition-duration: 500ms;
    }

    .hero-nav h2 {
        font-size: 32px;
        font-family: "Monument Valley";
        line-height: 60px;
    }

    .hero-section:hover .hero-title {
        transform: rotateX(90deg) translateY(-100%);
        opacity: 0;
    }

    .hero-section:hover .hero-nav {
        transform: rotateX(0deg) translateY(0);
        opacity: 1;
    }

    @media only screen and (min-width: 640px) {
        .hero-title {
            font-size: 60px;
        }
    }

    @media only screen and (min-width: 720px) {
        .moving-background {
            flex-direction: row;
        }

        .bg-left,
        .bg-center,
        .bg-right {
            width: 33.3333%;
            height: 100%;
            background-image: url("/images/hero-landscape.jpg");
        }
    }
</style>
