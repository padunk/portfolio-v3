<script context="module" lang="ts">
    import client from "../../sanityClient";
    import BlockContent from "@movingbrands/svelte-portable-text";
    import serializers from "../../utils/serializers";

    export async function preload({ params }) {
        // the `slug` parameter is available because
        // this file is called [slug].html
        const { slug } = params;
        const filter = '*[_type == "post" && slug.current == $slug][0]';
        const projection = `{
		...,
		body[]{
		  ...,
		  children[]{
			...,
			_type == 'authorReference' => {
			  _type,
			  author->
			}
		  }
		}
	  }`;

        const query = filter + projection;
        const post = await client
            .fetch(query, { slug })
            .catch((err) => this.error(500, err));
        console.log(post);
        return { post };
    }
</script>

<script lang="ts">
    export let post: any;
</script>

<svelte:head>
    <title>{post.title}</title>
</svelte:head>

<div class="content">
    <h2>{post.title}</h2>
    <article class="article">
        <BlockContent blocks="{post.body}" serializers="{serializers}" />
    </article>
</div>

<style>
    .content {
        position: relative;
        margin: 0 auto;
        margin-top: 120px;
        max-width: 80ch;
        overflow: hidden;
    }

    h2 {
        font-size: 56px;
        font-family: "AlienLeague Bold", var(--default-text);
        padding: 0;
        text-align: center;
    }

    .article :global(p) {
        font-family: "Domine", var(--default-text);
        font-size: 18px;
    }

    .article :global(a:link, a:visited) {
        color: var(--secondary);
        transition: color 250ms ease-in-out;
    }

    .article :global(a:hover, a:active) {
        color: var(--tangerine);
    }

    .article :global(p:first-child::first-letter) {
        font-size: 32px;
    }

    .article {
        padding: 12px;
    }

    .article :global(img) {
        display: block;
        max-width: 100%;
        object-fit: cover;
    }
</style>
