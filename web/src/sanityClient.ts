import sanityClient from "@sanity/client";
import { api } from "../../portfolioblog/sanity.json";

const { projectId, dataset } = api;

const client = sanityClient({
    projectId,
    dataset,
    useCdn: true,
    // token: process.env.SANITY_TOKEN,
});

export default client;
