import sanityClient from "@sanity/client";
import { api } from "../../portfolioblog/sanity.json";

const { projectId, dataset } = api;
console.log(process.env.TESTING);
const client = sanityClient({
    projectId: process.env.SANITY_ID || projectId,
    dataset: process.env.SANITY_DATASET || dataset,
    useCdn: true,
    token: process.env.SANITY_TOKEN,
});

export default client;
