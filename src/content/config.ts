import { defineCollection } from 'astro:content';
import { toolboxSchema, postSchema, characterSchema } from '@/content/schemas.ts';

// eslint-disable-next-line import/prefer-default-export
export const collections = {
  post: defineCollection({
    schema: postSchema,
  }),
  toolbox: defineCollection({
    type: 'data',
    schema: toolboxSchema,
  }),
  character: defineCollection({
    type: 'data',
    schema: characterSchema,
  }),
};
