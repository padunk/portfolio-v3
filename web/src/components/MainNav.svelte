<script lang="ts">
    import { gsap } from "gsap";
    import { onMount } from "svelte";
    import { isMobile } from "../utils/helpers";
    import { fade } from "svelte/transition";

    onMount(() => {
        const tl = gsap.timeline({
            defaults: {
                opacity: 0,
                ease: "expo.out",
                backgroundColor: "white",
            },
            onComplete: () => {
                const mainBackground = document.querySelector('.moving-background')
                mainBackground.classList.add('add-bg')
                
                // const subTL = gsap.timeline({})
                // subTL.to(`[class~=bg-left-image]`, {
                //     opacity: 0
                // })
                // .to(`[class~=bg-center-image]`, {
                //     opacity: 0
                // })
                // .to(`[class~=bg-right-image]`, {
                //     opacity: 0
                // })

                // const bg = ['bg-left', 'bg-center','bg-right']
                // bg.forEach(b => {
                //    document.querySelector(`[class^=${b}]`).classList.remove(`${b}-image`)
                // })
            }
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

<div class="hero" out:fade|local>
    <div class="moving-background">
        <section class="bg-left bg-left-image">
            <div class="hero-section section-left">
                <h2 class="hero-title">Abraham</h2>
                <a aria-current="projects" class="hero-nav" href="projects"><h2>
                        Projects
                    </h2></a>
            </div>
        </section>

        <section class="bg-center bg-center-image">
            <div class="hero-section section-center">
                <h2 class="hero-title">Anak</h2>
                <span class="hero-nav">
                    <a
                        class="hero-nav__link"
                        rel="prefetch"
                        aria-current="blog"
                        href="blog"
                    ><h2>Blog</h2></a>
                    <!-- change BELOW href to photo when photo site finished -->
                    <a
                        class="hero-nav__link"
                        rel="prefetch"
                        aria-current="photo"
                        href="construction"
                    ><h2>Photo</h2></a>
                </span>
            </div>
        </section>

        <section class="bg-right bg-right-image">
            <div class="hero-section section-right">
                <h2 class="hero-title">Agung</h2>
                <a aria-current="about" class="hero-nav" href="about"><h2>
                        About
                    </h2></a>
            </div>
        </section>
    </div>
</div>

<style>
    h2 {
        font-family: "AlienLeague Expanded", -apple-system, BlinkMacSystemFont,
            "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
            "Helvetica Neue", sans-serif;
        margin: 0;
        padding: 0;
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
    :global(.add-bg) {
        background-image: url("/images/hero-portrait.jpg");
        background-size: cover;
        background-position: 0% 70%;
        background-repeat: no-repeat;
    }

    .bg-left,
    .bg-center,
    .bg-right {
        height: 33.3333%;
        width: 100%;
        display: flex;
        /* background-color: var(--primary); */
        background-repeat: no-repeat;
        background-size: cover;
        background-position-y: bottom;
        background-origin: content-box;
        transition: all 100ms;
    }

    .bg-left-image {
        background-image: url("/images/hero-portrait-left.jpg");
    }
    .bg-center-image {
        background-image: url("/images/hero-portrait-center.jpg");
    }
    .bg-right-image {
        background-image: url("/images/hero-portrait-right.jpg");
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

    .hero-nav__link {
        color: var(--secondary);
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
        :global(.add-bg) {
            background-image: url("/images/hero-landscape.jpg");
            background-size: cover;
            background-position: 0% 70%;
            background-repeat: no-repeat;
        }

        .bg-left,
        .bg-center,
        .bg-right {
            width: 33.3333%;
            height: 100%;
            background-position-y: 70%;
        }
        .bg-left-image {
            background-image: url("/images/hero-landscape-left.jpg");
        }
        .bg-center-image {
            background-image: url("/images/hero-landscape-center.jpg");
        }
        .bg-right-image {
            background-image: url("/images/hero-landscape-right.jpg");
        }
    }
</style>
