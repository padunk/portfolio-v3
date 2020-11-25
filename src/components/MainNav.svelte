<div class='hero'>
	<section class='hero-section'>
		<h2 class='hero-title'>Abraham</h2>
		<a class='hero-nav' href="."><h2>Projects</h2></a>
	</section>

	<section class='hero-section'>
		<h2 class='hero-title'>Anak</h2>
		<a class='hero-nav' href="blog"><h2>Blog</h2></a>
	</section>

	<section class='hero-section'>
		<h2 class='hero-title'>Agung</h2>
		<a class='hero-nav' href="about"><h2>About</h2></a>
	</section>
</div>

<style>
	h2 {
        margin: 0;
		text-transform: uppercase;
	}

	.hero {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        justify-items: center;
        row-gap: 8px;
		margin:0 auto;
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
		line-height: 60px;
	}

	.hero-section:hover .hero-title {
		transform: rotateX(90deg) translateY(-100%);
        opacity: 0;
	}

	.hero-section:hover .hero-nav{
		transform: rotateX(0deg) translateY(0);
        opacity: 1;
	}

    @media only screen and (min-width: 640px) {
        .hero-title {
            font-size: 60px;
        }
    }

</style>
