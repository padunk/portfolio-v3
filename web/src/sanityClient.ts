import sanityClient from "@sanity/client";
import { api } from "../../portfolioblog/sanity.json";

const { projectId, dataset } = api;

const client = sanityClient({
    projectId: projectId || "cfbg3m9j",
    dataset: dataset || "production",
    useCdn: true,
    // token: process.env.SANITY_TOKEN,
});

export default client;
