export default {
    name: "post",
    title: "Post",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "title",
                maxLength: 96,
            },
        },
        {
            name: "publishedAt",
            type: "datetime",
            title: "Published at",
            description: "This can be used to schedule post for publishing",
        },
        {
            name: "excerpt",
            type: "excerptPortableText",
            title: "Excerpt",
            description:
                "This ends up on summary pages, on Google, when people share your post in social media.",
        },
        {
            name: "authors",
            title: "Authors",
            type: "array",
            of: [
                {
                    type: "authorReference",
                },
            ],
        },
        {
            name: "mainImage",
            title: "Main image",
            type: "mainImage",
        },
        {
            name: "categories",
            title: "Categories",
            type: "array",
            of: [{ type: "reference", to: { type: "category" } }],
        },
        {
            name: "body",
            title: "Body",
            type: "bodyPortableText",
        },
    ],
    orderings: [
        {
            name: "publishingDateAsc",
            title: "Publishing date new–>old",
            by: [
                {
                    field: "publishedAt",
                    direction: "asc",
                },
                {
                    field: "title",
                    direction: "asc",
                },
            ],
        },
        {
            name: "publishingDateDesc",
            title: "Publishing date old->new",
            by: [
                {
                    field: "publishedAt",
                    direction: "desc",
                },
                {
                    field: "title",
                    direction: "asc",
                },
            ],
        },
    ],

    preview: {
        select: {
            title: "title",
            publishedAt: "publishedAt",
            slug: "slug",
            media: "mainImage",
        },
        prepare({ title = "No title", publishedAt, slug, media }) {
            const dateSegment = format(publishedAt, "YYYY/MM");
            const path = `/${dateSegment}/${slug.current}/`;
            return {
                title,
                media,
                subtitle: publishedAt ? path : "Missing publishing date",
            };
        },
    },
};
