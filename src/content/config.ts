import { defineCollection } from 'astro:content';
import {
  toolboxSchema,
  postSchema,
  shortpostSchema,
  characterSchema,
  websiteSchema,
} from '@/types/content-collection-schemas.ts';

// eslint-disable-next-line import/prefer-default-export
export const collections = {
  post: defineCollection({
    schema: postSchema,
  }),
  shortpost: defineCollection({
    schema: shortpostSchema,
  }),
  toolbox: defineCollection({
    type: 'data',
    schema: toolboxSchema,
  }),
  website: defineCollection({
    type: 'data',
    schema: websiteSchema,
  }),
  character: defineCollection({
    type: 'data',
    schema: characterSchema,
  }),
};
