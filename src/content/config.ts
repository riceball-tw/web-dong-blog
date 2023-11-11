import { z, defineCollection } from 'astro:content';
import uniqolor from 'uniqolor';

const toolbox = defineCollection({
  type: 'data',
  schema: z.object({
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
  }),
});

const snippet = defineCollection({
  type: 'data',
  schema: z.object({
    html: z.string(),
    css: z.string(),
    js: z.string(),
  }),
});

const post = defineCollection({
  slug: ({ data, defaultSlug }) => data.permalink || defaultSlug,

  schema: z.object({
    isDraft: z.boolean().default(true),
    featureIcon: z
      .object({
        width: z.number().default(64),
        height: z.number().default(64),
        alt: z.string(),
        url: z.string(),
      })
      .optional(),
    featureImage: z
      .object({
        width: z.number().default(64),
        height: z.number().default(64),
        alt: z.string(),
        url: z.string(),
      })
      .optional(),
    title: z.string(),
    titleTC: z.string(),
    excerpt: z.string(),
    category: z.string().default('unsorted'),
    tags: z.array(z.string()).default(['unsorted']),
    themeColor: z.string().min(4).max(9).regex(/^#/).default(getDefaultColor),
    publishDate: z.date(),
    permalink: z.string().optional(),
  }),
});

function getDefaultColor() {
  return uniqolor.random({ saturation: 90, lightness: [70, 90] }).color;
}

export const collections = {
  post,
  snippet,
  toolbox,
};
