<script context="module" lang="ts">
    import client from "../../sanityClient";

    export function preload({ params, query }) {
        // TODO: pagination?

        return client
            .fetch(
                `*[_type == "post" && defined(slug.current) && publishedAt < now()] | order(publishedAt desc) {
                    body,
                    publishedAt,
                    slug,
                    title,
                    excerpt,
                    "categoryList": categories[]->title,
                    "cover": {
                        "src": mainImage.asset->url,
                        "alt": mainImage.alt,
                        "caption": mainImage.caption
                    },
                    "authorList": authors[]{
                        "name": author->name,
                        "src": author->image.asset->url,
                        "alt": author->image.alt
                    }
                }[0...20]`
            )
            .then((posts) => {
                return { posts };
            })
            .catch((err) => this.error(500, err));
    }
</script>

<script lang="ts">
    import Blogs from "../../components/Blogs.svelte";

    export let posts: {
        authors: any;
        body: any;
        categories: any;
        excerpt: any;
        mainImage: any;
        publishedAt: string;
        slug: any;
        title: string;
    }[];
</script>

<svelte:head>
    <title>Blog</title>
</svelte:head>

<section class="blog">
    <h2>Recent BLOGS</h2>
    <Blogs posts="{posts}" />
</section>

<style>
    .blog {
        margin-top: 120px;
    }

    h2 {
        font-family: "AlienLeague Bold", var(--default-text);
        font-size: 56px;
        text-align: center;
        padding: 0;
    }

    @media only screen and (min-width: 600px) {
        .blog {
            margin-top: 0;
        }

        h2 {
            padding: 0.83em 0;
        }
    }
</style>
