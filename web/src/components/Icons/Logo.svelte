<script lang="ts">
    import { gsap } from "gsap";

    export let segment: string;
    export let handleMouseEnter: any;
    export let handleMouseLeave: any;
    let showMenu: boolean = false;
    let cursorPointer: boolean = false;

    const toggleMenu = () => {
        showMenu = !showMenu;

        if (showMenu) {
            cursorPointer = true;
            gsap.to("#triangle-2", {
                yPercent: -50,
            });
            gsap.to("#triangle-1", {
                yPercent: 50,
                xPercent: -50,
            });
            gsap.to("#triangle-3", {
                yPercent: 50,
                xPercent: 50,
            });
            gsap.to("#triangle-4", {
                fillOpacity: 1,
                strokeWidth: 0.1,
            });
        } else {
            cursorPointer = false;
            gsap.to("#triangle-2", {
                yPercent: 0,
            });
            gsap.to("#triangle-1", {
                yPercent: 0,
                xPercent: 0,
            });
            gsap.to("#triangle-3", {
                yPercent: 0,
                xPercent: 0,
            });
            gsap.to("#triangle-4", {
                fillOpacity: 0,
                strokeWidth: 0.05,
            });
        }
    };

    // change 'construction' to 'photo' when photo page finished
    const useSegment = (location?: string) =>
        segment === location ? "construction" : location;
</script>

<svg
    class="logo"
    class:showMenu
    xmlns="http://www.w3.org/2000/svg"
    id="logo"
    viewBox="0 0 26.458334 26.458334"
    height="80"
    width="100"
    on:click="{toggleMenu}"
>
    <g transform="translate(0,-275.83331)" id="layer1">
        <a
            href="{useSegment('projects')}"
            class:cursorPointer
            on:mouseenter="{handleMouseEnter}"
            on:mouseleave="{handleMouseLeave}"
        >
            <path
                class="triangle"
                id="triangle-1"
                d="m 9.796013,287.87857 1.716577,2.9732 1.716577,2.9732 -3.4331541,0 -3.4331544,0 1.7165772,-2.9732 z"
            ></path>
        </a>
        <a
            href="{useSegment('about')}"
            class:cursorPointer
            on:mouseenter="{handleMouseEnter}"
            on:mouseleave="{handleMouseLeave}"
        >
            <path
                class="triangle"
                id="triangle-3"
                d="m 16.67518,287.87858 1.716577,2.9732 1.716577,2.9732 -3.433154,0 -3.433155,0 1.716577,-2.9732 z"
            ></path>
        </a>
        <a
            href="{useSegment('blog')}"
            class:cursorPointer
            on:mouseenter="{handleMouseEnter}"
            on:mouseleave="{handleMouseLeave}"
        >
            <path
                class="triangle"
                id="triangle-2"
                d="m 13.216364,281.93219 1.716577,2.9732 1.716577,2.9732 -3.433154,0 -3.4331544,0 1.7165774,-2.9732 z"
            ></path>
        </a>
        <a
            href="{useSegment('.')}"
            class:cursorPointer
            on:mouseenter="{handleMouseEnter}"
            on:mouseleave="{handleMouseLeave}"
        >
            <path
                class="triangle triangle-center"
                id="triangle-4"
                d="m -13.229167,-293.82498 1.716577,2.9732 1.7165772,2.97319 -3.4331542,0 -3.433154,0 1.716577,-2.97319 z"
                transform="scale(-1)"
            ></path>
        </a>
    </g>
</svg>

<style>
    a {
        pointer-events: none;
    }

    .logo {
        opacity: 0.7;
        transform: translateX(-12px);
        transition: all 300ms ease-in-out;
    }

    .triangle {
        opacity: 1;
        fill: var(--tangerine);
        fill-opacity: 1;
        stroke: var(--primary-light);
        stroke-width: 0.1;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-miterlimit: 4;
        stroke-dasharray: none;
        stroke-dashoffset: 0;
        stroke-opacity: 1;
        paint-order: normal;
    }

    .triangle-center {
        fill-opacity: 0;
        stroke-width: 0.05;
    }

    .showMenu {
        opacity: 1;
    }

    .cursorPointer {
        pointer-events: all;
    }
</style>
