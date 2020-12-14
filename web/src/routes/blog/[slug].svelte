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
        max-width: 70ch;
        overflow: hidden;
    }

    h2 {
        font-size: 56px;
        font-family: "AlienLeague Bold", var(--default-text);
        padding: 0;
        text-align: center;
    }

    .article {
        padding: 12px;
        font-family: "Laila", var(--default-text);
    }

    .article :global(h1, h2, h3, h4, h5, h6) {
        font-family: "Oswald", var(--default-text);
    }

    .article :global(p) {
        font-size: 18px;
        line-height: 1.6;
    }

    .article :global(p:first-child::first-letter) {
        font-size: 32px;
    }

    @media only screen and (min-width: 600px) {
        .content {
            margin-top: 0;
        }

        h2 {
            margin: 0.83em 0;
        }
    }
</style>
