import { defineCollection } from 'astro:content';
import { toolboxSchema, postSchema } from '@/content/schemas.ts';

export const collections = {
  post: defineCollection({
    schema: postSchema,
  }),
  toolbox: defineCollection({
    type: 'data',
    schema: toolboxSchema,
  }),
};
