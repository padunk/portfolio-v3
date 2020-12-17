export default {
    name: "author",
    title: "Author",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string",
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "name",
                maxLength: 96,
            },
        },
        {
            name: "image",
            title: "Image",
            type: "mainImage",
            options: {
                hotspot: true,
            },
        },
        {
            name: "bio",
            title: "Bio",
            type: "bioPortableText",
        },
    ],
    preview: {
        select: {
            title: "name",
            media: "image",
            subtitle: "slug.current",
        },
    },
};
