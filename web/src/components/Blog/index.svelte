<script lang="ts">
    export let posts: {
        authorList: any[];
        body: any;
        categoryList: string[];
        cover: {
            alt: string;
            caption: string;
            src: string;
        };
        excerpt: any[];
        publishedAt: string;
        slug: any;
        title: string;
        _createdAt: string;
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

<ul class="post">
    {#each posts as post}
        <!-- we're using the non-standard `rel=prefetch` attribute to
            tell Sapper to load the data for the page as soon as
            the user hovers over the link or taps it, instead of
            waiting for the 'click' event -->
        <li class="post-li">
            <div>
                <a
                    rel="prefetch"
                    href="blog/{post.slug.current}"
                    class="blog-link"
                >
                    <h3>{post.title}</h3>
                </a>
            </div>
            <div class="author">
                <span>By:</span>
                <ul class="author-ul">
                    {#each post.authorList as author}
                        <li class="author-li">
                            <div class="author-avatar__wrapper">
                                <img
                                    class="author-avatar"
                                    src="{author.src}"
                                    alt="{author.alt}"
                                />
                            </div>
                            <p class="author-name">{author.name}</p>
                        </li>
                    {/each}
                </ul>
            </div>
            <div>
                <div class="date-category">
                    <p class="date">
                        <span>{formatDate(post._createdAt)}, </span>
                        <span class="date-updated">Updated:
                            {formatDate(post.publishedAt)}</span>
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
    .post {
        list-style-type: none;
        font-family: "Oswald", var(--default-text);
        margin: 0;
        padding: 16px;
    }

    .post-li {
        padding: 20px;
        max-width: 700px;
        margin: 0 auto;
        position: relative;
        border: 2px solid var(--tangerine);
        color: var(--tangerine);
        margin: 24px auto;
        /* clip-path: polygon(0 0, 100% 0, 100% 60%, 84% 100%, 0 100%); */
    }

    .post-li::before {
        content: "";
        position: absolute;
        right: 0;
        bottom: 0;
        background-color: var(--primary);
        height: 50px;
        width: 50px;
        transform: rotate(45deg) translate(72%, 0%);
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
        font-size: 24px;
        margin: 0;
        padding: 0;
        padding-bottom: 12px;
    }

    .date {
        color: var(--tangerine-light-alpha-7);
        letter-spacing: 1.3px;
    }

    .date-updated {
        font-weight: bold;
    }

    .stats {
        /* display: flex; */
        display: none;
        column-gap: 12px;
    }

    .author {
        display: flex;
        column-gap: 12px;
        margin: 12px 0;
    }

    .author-ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
        display: flex;
    }

    .author-li {
        display: flex;
        align-items: flex-end;
    }

    .author-avatar__wrapper {
        width: 40px;
        height: 40px;
        overflow: hidden;
        border-radius: 9999px;
        border: 2px solid transparent;
        box-shadow: 0 0 0 1px var(--white);
    }

    .author-avatar {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .author-name {
        color: var(--tertiary);
        font-size: 20px;
        padding-left: 8px;
    }

    @media only screen and (min-width: 720px) {
        h3 {
            font-size: 36px;
        }
    }
</style>
