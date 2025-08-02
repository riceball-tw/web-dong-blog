import { getCollection } from "astro:content";

// eslint-disable-next-line import/prefer-default-export
export const toolboxs = await getCollection("toolbox");
