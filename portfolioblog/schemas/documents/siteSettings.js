export default {
    name: "siteSettings",
    type: "document",
    title: "Site Settings",
    __experimental_actions: ["update", /* 'create', 'delete', */ "publish"],
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
        },
        {
            name: "description",
            title: "Description",
            type: "text",
            description:
                "Describe your blog for search engines and social media.",
        },
        {
            name: "keywords",
            title: "Keywords",
            type: "array",
            description: "Add keywords that describes your blog.",
            of: [{ type: "string" }],
            options: {
                layout: "tags",
            },
        },
        {
            name: "author",
            title: "Author",
            type: "reference",
            description: "Publish an author and set a reference to them here.",
            to: [{ type: "author" }],
        },
    ],
};
