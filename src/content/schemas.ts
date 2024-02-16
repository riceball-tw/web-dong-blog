import { reference, z } from 'astro:content';
import uniqolor from 'uniqolor';

function getDefaultColor() {
  return uniqolor.random({ saturation: 90, lightness: [70, 90] }).color;
}

export const toolboxSchema = z.object({
  featureIcon: z
    .object({
      width: z.number().default(64),
      height: z.number().default(64),
      alt: z.string(),
      url: z.string(),
    })
    .optional(),
  titleTC: z.string(),
  url: z.string(),
  excerpt: z.string(),
  category: z.string().default('unsorted'),
  tags: z.array(z.string()).default(['unsorted']),
  themeColor: z.string().min(4).max(9).regex(/^#/).default(getDefaultColor),
});

export const postSchema = z.object({
  isDraft: z.boolean().default(true),
  featureIcon: z.object({
    width: z.number().default(64),
    height: z.number().default(64),
    alt: z.string(),
    url: z.string(),
  }),
  featureImage: z
    .object({
      width: z.number().default(64),
      height: z.number().default(64),
      alt: z.string(),
      url: z.string(),
    })
    .optional(),
  author: reference('character').optional(),
  title: z.string(),
  titleTC: z.string(),
  excerpt: z.string(),
  category: z.string().default('unsorted'),
  tags: z.array(z.string()).default(['unsorted']),
  themeColor: z.string().min(4).max(9).regex(/^#/).default(getDefaultColor),
  publishDate: z.date(),
  permalink: z.string().optional(),
});

export const characterSchema = z.object({
  name: z.string(),
  social: z
    .object({
      url: z.string(),
    })
    .optional(),
});
