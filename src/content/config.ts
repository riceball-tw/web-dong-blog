import { z, defineCollection } from 'astro:content';
import uniqolor from 'uniqolor';

function toReadableDate(time: string, seperator: string) {
  const formattedDate = new Date(time).toLocaleDateString('zh-TW', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
  return seperator ? formattedDate.replace(/\//g, seperator) : formattedDate;
}

const post = defineCollection({
  slug: ({ data, defaultSlug }) => {
    return data.permalink || defaultSlug;
  },

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
    themeColor: z.z.string().min(4).max(9).regex(/^#/).default(getDefaultColor),
    publishDate: z.string().transform((str) => toReadableDate(str, '-')),
    permalink: z.string().optional(),
  }),
});

function getDefaultColor() {
  return uniqolor.random({ saturation: 90, lightness: [70, 90] }).color;
}

export const collections = {
  post: post,
};
