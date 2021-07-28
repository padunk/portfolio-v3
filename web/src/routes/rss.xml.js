import client from "../sanityClient";

let posts;

client
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
    .then((_posts) => {
        posts = _posts;
    })
    .catch((err) => this.error(500, err));

const render = (posts) => `<?xml version="1.0" encoding="UTF-8" ?>
<rss xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">
    <channel>
        <title>
            <![CDATA[ Abraham Anak Agung ]]>
        </title>
        <description>
            <![CDATA[ Web and mobile developer specialized in serverless and have keen interest in blockchain. ]]>
        </description>
        <link>https://anakagung.com</link>
        <generator>RSS for Node</generator>
        <lastBuildDate>${new Date().toLocaleDateString()}</lastBuildDate>
        <atom:link href="https://anakagung.com/rss.xml" rel="self" type="application/rss+xml"/>
        <language><![CDATA[ en ]]></language>
        ${posts
            .map(
                (post) => `
        <item>
            <title>
                <![CDATA[ ${post.title} ]]>
            </title>
            ${post.excerpt
                .map(
                    (exc) =>
                        `<description>
                <![CDATA[ ${exc.children[0].text} ]]>
            </description>`
                )
                .join("\n")}
            <link>https://anakagung.com/blog/${post.slug.current}</link>
            <guid isPermaLink="true">https://anakagung.com/blog/${
                post.slug.current
            }</guid>
            ${post.categoryList
                .map(
                    (category) =>
                        `<category>
                <![CDATA[ ${category} ]]>
            </category>`
                )
                .join("\n")}
            ${post.authorList
                .map(
                    (author) =>
                        `<dc:creator>
                <![CDATA [ ${author.name} ]]>
            </dc:creator>`
                )
                .join("\n")}
            <pubDate>${post.publishedAt}</pubDate>
        </item>`
            )
            .join("\n")}
    </channel>
</rss>
`;

export function get(_, res) {
    res.setHeader("Cache-Control", `max-age=0, s-max-age=${600}`); // 10 minutes
    res.setHeader("Content-Type", "application/rss+xml");

    const feed = render(posts);
    res.end(feed);
}
