<script>
	
</script>

<style>
	h2 {
		text-transform: uppercase;
	}

	.hero {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		place-items: center;
		margin:0 auto;
	}

	.hero-section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.hero-section:hover .hero-nav{
		transform: rotateX(0deg);
	}

	.hero-nav {
		color: hsl(247, 29%, 66%);
		transform: rotateX(-90deg);
		transform-origin: bottom;
		transition: transform;
		transition-duration: 500ms;
	}
</style>

<svelte:head>
	<title>Sapper project template</title>
</svelte:head>

<h1 hidden>Abraham Anak Agung</h1>

<div class='hero'>
	<section class='hero-section'>
		<h2>Abraham</h2>
		<a class='hero-nav' href=".">Projects</a>
	</section>

	<section class='hero-section'>
		<h2>Anak</h2>
		<a class='hero-nav' href="blog">Blog</a>
	</section>

	<section class='hero-section'>
		<h2>Agung</h2>
		<a class='hero-nav' href="about">About</a>
	</section>
</div>
<section>
	<ul>
		<li>Mail</li>
		<li>Github</li>
		<li>Codepen</li>
		<li>Twitter</li>
	</ul>
</section>

