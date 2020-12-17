<script context="module" lang="ts">
    import client from "../../sanityClient";

    export function preload() {
        // TODO: pagination?

        return client
            .fetch(
                `*[_type == "post" && defined(slug.current) && publishedAt < now()] | order(publishedAt desc) {
                    body,
                    publishedAt,
                    slug,
                    title,
                    excerpt,
                    _createdAt,
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
    import Blog from "../../components/Blog/index.svelte";

    export let posts: any;
</script>

<svelte:head>
    <title>Blog</title>
</svelte:head>

<section class="blog">
    <h2>Recent BLOGS</h2>
    <Blog posts="{posts}" />
</section>

<style>
    h2 {
        font-family: "AlienLeague Bold", var(--default-text);
        font-size: 56px;
        text-align: center;
        padding: 0;
    }

    @media only screen and (min-width: 600px) {
        h2 {
            padding: 0.83em 0;
        }
    }
</style>
