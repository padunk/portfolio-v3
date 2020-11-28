<script lang="ts">
    export let segment: string;
</script>

<div class="hero">
    <section class="hero-section">
        <h2 class="hero-title">Abraham</h2>
        <a
            aria-current="{segment === 'projects' ? 'page' : undefined}"
            class="hero-nav"
            href="projects"
        ><h2>Projects</h2></a>
    </section>

    <section class="hero-section">
        <h2 class="hero-title">Anak</h2>
        <a
            rel="prefetch"
            aria-current="{segment === 'blog' ? 'page' : undefined}"
            class="hero-nav"
            href="blog"
        ><h2>Blog</h2></a>
    </section>

    <section class="hero-section">
        <h2 class="hero-title">Agung</h2>
        <a
            aria-current="{segment === 'about' ? 'page' : undefined}"
            class="hero-nav"
            href="about"
        ><h2>About</h2></a>
    </section>
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
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        justify-items: center;
        row-gap: 8px;
        margin: 0 auto;
        width: 100vw;
    }

    .hero-section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        perspective: 1000px;
        perspective-origin: center;
        position: relative;
        width: 100%;
        min-width: 200px;
    }

    .hero-title {
        font-size: 48px;
        line-height: 60px;
        transform-origin: top;
        transition-property: transform, opacity;
        transition-duration: 500ms;
    }

    .hero-nav {
        color: hsl(247, 29%, 66%);
        opacity: 0;
        position: absolute;
        bottom: 0;
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
</style>
