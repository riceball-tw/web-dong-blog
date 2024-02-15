import { defineCollection } from 'astro:content';
import { toolboxSchema, postSchema } from '@/content/schemas.ts';

export const collections = {
  post: defineCollection({
    slug: ({ data, defaultSlug }) => data.permalink || defaultSlug,
    schema: postSchema,
  }),
  toolbox: defineCollection({
    type: 'data',
    schema: toolboxSchema,
  }),
};
