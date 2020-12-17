// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// We import object and document schemas
// document schemas
// import blockContent from "./blockContent";
import category from "./documents/category";
import post from "./documents/post";
import author from "./documents/author";
import siteSettings from "./documents/siteSettings";

// object schemas
import mainImage from "./objects/mainImage";
import authorReference from "./objects/authorReference";
import bodyPortableText from "./objects/bodyPortableText";
import bioPortableText from "./objects/bioPortableText";
import excerptPortableText from "./objects/excerptPortableText";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
    // We name our schema
    name: "blog",
    // Then proceed to concatenate our document type
    // to the ones provided by any plugins that are installed
    types: schemaTypes.concat([
        // The following are document types which will appear
        // in the studio.
        siteSettings,
        post,
        author,
        category,
        // When added to this list, object types can be used as
        // { type: 'typename' } in other document schemas
        // blockContent,
        mainImage,
        authorReference,
        bodyPortableText,
        bioPortableText,
        excerptPortableText,
    ]),
});
