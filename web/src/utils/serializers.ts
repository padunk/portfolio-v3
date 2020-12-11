// https://www.sanity.io/docs/what-you-need-to-know-about-block-text/presenting-block-text
// https://github.com/movingbrands/svelte-portable-text
import BlockContent from "@movingbrands/svelte-portable-text";
// https://www.npmjs.com/package/@sanity/image-url
import urlBuilder from "@sanity/image-url";
import client from "../sanityClient";
import Image from "../../src/components/Blog/Image.svelte";
import Code from "../../src/components/Blog/Code.svelte";
import Author from "../../src/components/Blog/Author.svelte";
import Link from "../../src/components/Blog/Link.svelte";

const urlFor = (source: string) => urlBuilder(client).image(source);

export default {
    marks: {
        link: ({ children, mark }) => ({
            component: Link,
            childNodes: children,
            props: mark,
        }),
    },
    types: {
        mainImage: ({ node, children }) => ({
            component: Image,
            childNodes: children,
            props: {
                url: urlFor(node).width(800).auto("format").url(),
                alt: node.alt,
            },
        }),
        code: ({ node: { code, language } }) => ({
            component: Code,
            childNodes: [],
            props: {
                code,
                language,
            },
        }),
        authorReference: ({ children, node: { author } }) => ({
            component: Author,
            childNodes: children,
            props: {
                author,
            },
        }),
    },
};
