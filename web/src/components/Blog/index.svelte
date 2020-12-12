<script lang="ts">
    export let posts: {
        authorList: any;
        body: any;
        categoryList: string[];
        cover: {
            alt: string;
            caption: string;
            src: string;
        };
        excerpt: any;
        publishedAt: string;
        slug: any;
        title: string;
    }[];

    function formatDate(date: string): string {
        const options = {
            month: "short",
            day: "numeric",
            year: "numeric",
        };
        return new Intl.DateTimeFormat("default", options).format(
            new Date(date)
        );
    }
</script>

<ul>
    {#each posts as post}
        <!-- we're using the non-standard `rel=prefetch` attribute to
            tell Sapper to load the data for the page as soon as
            the user hovers over the link or taps it, instead of
            waiting for the 'click' event -->
        <li>
            <div>
                <a
                    rel="prefetch"
                    href="blog/{post.slug.current}"
                    class="blog-link"
                >
                    <h3>{post.title}</h3>
                </a>
            </div>

            <div>
                <div class="date-category">
                    <p>
                        <span class="date">{formatDate(post.publishedAt)}</span>
                        -
                        <span class="category">
                            {'#' + post.categoryList.join(', #')}
                        </span>
                    </p>
                </div>
                <div class="stats">
                    <p><span>58000</span> <span>views</span></p>
                    <p><span>465</span> <span>likes</span></p>
                </div>
            </div>
        </li>
    {/each}
</ul>

<style>
    ul {
        list-style-type: none;
        font-family: "Oswald", var(--default-text);
        margin: 0;
        padding: 16px;
    }

    li {
        padding: 20px;
        max-width: 700px;
        margin: 0 auto;
        position: relative;
        border: 2px solid var(--tangerine);
        color: var(--tangerine);
        /* clip-path: polygon(0 0, 100% 0, 100% 60%, 84% 100%, 0 100%); */
    }

    li::before {
        content: "";
        position: absolute;
        right: 0;
        bottom: 0;
        background-color: var(--primary);
        height: 50px;
        width: 50px;
        transform: rotate(45deg) translate(71%, 0%);
        border-left: 2px solid var(--tangerine);
    }

    p {
        margin: 0;
        line-height: 1.8;
    }

    .blog-link:link,
    .blog-link:visited {
        color: var(--tangerine);
        transition: color 250ms ease-in-out;
    }

    .blog-link:hover,
    .blog-link:active {
        color: var(--secondary-bright);
    }

    h3 {
        font-size: 36px;
        margin: 0;
        padding: 0;
        padding-bottom: 12px;
    }

    .date {
        font-weight: bold;
    }

    .stats {
        /* display: flex; */
        display: none;
        column-gap: 12px;
    }
</style>
