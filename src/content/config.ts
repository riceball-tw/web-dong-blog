import { defineCollection } from 'astro:content';
import { toolboxSchema, postSchema, characterSchema } from '@/content/schemas.ts';

export const collections = {
  post: defineCollection({
    schema: postSchema,
  }),
  toolbox: defineCollection({
    type: 'data',
    schema: toolboxSchema,
  }),
  author: defineCollection({
    type: 'data',
    schema: characterSchema,
  }),
};
