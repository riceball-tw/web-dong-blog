import { defineCollection } from 'astro:content';
import { toolboxSchema, postSchema } from '@/content/schemas.ts';

const toolbox = defineCollection({
  type: 'data',
  schema: toolboxSchema,
});

const post = defineCollection({
  slug: ({ data, defaultSlug }) => data.permalink || defaultSlug,
  schema: postSchema,
});

export const collections = {
  post,
  toolbox,
};
