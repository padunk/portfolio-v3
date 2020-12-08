<script lang="ts">
    import { onMount } from "svelte";
    import { gsap } from "gsap";

    let title: HTMLHeadingElement;
    let color: HTMLAnchorElement;
    let bw: HTMLAnchorElement;
    const tl = gsap.timeline();

    onMount(() => {
        tl.from(title, {
            yPercent: -200,
            opacity: 0,
            duration: 1,
        });
        tl.from(color, {
            xPercent: -100,
            opacity: 0,
            duration: 1,
        });
        tl.from(
            bw,
            {
                xPercent: 100,
                opacity: 0,
                duration: 1,
            },
            "-=1"
        );
    });
</script>

<section>
    <h2 bind:this="{title}">Photo Gallery</h2>
    <div class="wrapper">
        <a bind:this="{color}" class="static-link" href="photo/color">Color</a>
        <a bind:this="{bw}" class="static-link" href="photo/bw">Black / White</a>
    </div>
</section>

<style>
    section {
        padding-top: 120px;
    }

    h2 {
        font-family: "AlienLeague Bold", var(--default-text);
        font-size: 56px;
        text-align: center;
    }

    .wrapper {
        display: flex;
        max-width: 700px;
        justify-content: center;
        column-gap: 24px;
        font-family: "Oswald";
        line-height: 2;
        margin: auto;
    }

    .static-link:link,
    .static-link:visited {
        display: block;
        font-size: 24px;
        flex-basis: 150px;
        text-align: center;
        box-shadow: 0px 0px 0px 2px black;
        color: var(--primary-light);
        transition: all 200ms;
        transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
    }

    .static-link:hover,
    .static-link:active {
        color: var(--tangerine);
        background-color: hsla(265, 21%, 53%, 0.6);
    }
</style>
