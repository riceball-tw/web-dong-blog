import { reference, z } from 'astro:content';
import uniqolor from 'uniqolor';

function getDefaultColor() {
  return uniqolor.random({ saturation: 90, lightness: [70, 90] }).color;
}

export const toolboxSchema = z.object({
  icon: z
    .object({
      title: z.string(),
      name: z.string(),
    })
    .default({
      name: 'material-symbols:web-traffic-rounded',
      title: '鼠標點擊圖示',
    }),
  headline: z.string(),
  url: z.string(),
  excerpt: z.string(),
  category: z.string().default('unsorted'),
  tags: z.array(z.string()).default(['unsorted']),
  themeColor: z.string().min(4).max(9).regex(/^#/).default(getDefaultColor),
});

export const postSchema = z.object({
  isDraft: z.boolean().default(true),
  icon: z
    .object({
      title: z.string(),
      name: z.string(),
    })
    .default({
      name: 'material-symbols:article-outline-rounded',
      title: '文章圖示',
    }),
  author: reference('character').optional(),
  headline: z.string().max(60),
  subHeadline: z.string(),
  excerpt: z.string().min(110).max(160),
  series: z.string().optional(),
  category: z.string().default('unsorted'),
  tags: z.array(z.string()).default(['unsorted']),
  themeColor: z.string().min(4).max(9).regex(/^#/).default(getDefaultColor),
  publishDate: z.date(),
  lastModifiedDate: z.date().optional(),
  permalink: z.string().optional(),
});

export const shortpostSchema = z.object({
  headline: z.string(),
  publishDate: z.date(),
  category: z.string().default('unsorted'),
  social: z
    .object({
      threads: z.string().optional(),
    })
    .optional(),
  themeColor: z.string().min(4).max(9).regex(/^#/).default(getDefaultColor),
});

// Website Global Configurations
export const websiteSchema = z.object({
  setting: z.object({
    projectUpdateBadgeUrl: z.string(),
    postLastModifiedDateUrl: z.string(),
  }),
  brand: z.object({
    name: z.string(),
    slogan: z.string(),
    description: z.string(),
    themeColor: z.string(),
    thumbnail: z.object({
      width: z.number(),
      height: z.number(),
      src: z.string(),
      alt: z.string(),
    }),
    copyright: z.object({
      title: z.string(),
      url: z.string(),
    }),
    socials: z.array(
      z.object({
        name: z.string(),
        iconName: z.string(),
        url: z.string(),
        imgUrl: z.string().optional(),
      }),
    ),
  }),
  navigation: z.array(
    z.object({
      iconName: z.string(),
      name: z.string(),
      url: z.string(),
    }),
  ),
});

export const characterSchema = z.object({
  name: z.string(),
  nameTC: z.string(),
  social: z
    .object({
      url: z.string(),
    })
    .optional(),
});
