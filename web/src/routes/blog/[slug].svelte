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
		},
        "authorList": authors[].author->name,
        "coverImage": {
            "alt": mainImage.alt,
            "caption": mainImage.caption,
            "url": mainImage.asset->url
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
    import Image from "../../components/Blog/Image.svelte";

    export let post: any;
</script>

<svelte:head>
    <title>{post.title}</title>
    <!-- <meta
            name="twitter:description"
            content={post.excerpt}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />

        <meta
            property="og:image"
            content={post.coverImage.url}
        />
        <meta
            name="twitter:image"
            content={post.coverImage.url}
        />
        <meta
            name="twitter:image:src"
            content={post.coverImage.url}
        />

        <meta property="og:locale" content="en_US" />
        <meta property="og:title" content={post.title} />
        <meta
            property="og:description"
            content={post.excerpt}
        /> -->
</svelte:head>

<div class="content">
    <div class="title-author">
        <h2>{post.title}</h2>
        <p>By: {post.authorList.join(', ')}</p>
    </div>
    <article class="article">
        <figure class="image-wrapper">
            <Image url="{post.coverImage.url}" alt="{post.coverImage.alt}" />
            <figcaption>{post.coverImage.caption}</figcaption>
        </figure>
        <BlockContent blocks="{post.body}" serializers="{serializers}" />
    </article>
</div>

<style>
    :global(body::-webkit-scrollbar) {
        display: block;    
    }

    .content {
        position: relative;
        margin: 0 auto;
        /* max-width: 70ch; */
        overflow: hidden;
    }

    .title-author {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        max-width: 70ch;
        margin: auto;
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
        display: grid;
        grid-template-columns: 1fr minmax(27ch, 70ch) 1fr;
    }

    .article :global(h1, h2, h3, h4, h5, h6) {
        font-family: "Oswald", var(--default-text);
    }

    .article :global(*) {
        grid-column: 2 / 3;
    }

    .article :global(figure) {
        grid-column: 1 / -1;
        margin: 0;
    }

    .article :global(figcaption) {
        padding: 8px 0;
        font-style: italic;
    }

    .article :global(p) {
        font-size: 18px;
        line-height: 1.6;
    }

    .article :global(p:first-child::first-letter) {
        font-size: 32px;
    }

    @media only screen and (min-width: 600px) {
        h2 {
            margin-top: 0.83em;
        }
    }
</style>
