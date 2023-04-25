import rss from '@astrojs/rss';
import siteConfig from 'astro.config';
import { getCollection } from 'astro:content';
const { brand } = siteConfig;

export const get = async () => {
  const posts = await getCollection('post');

  return rss({
    title: brand.nameTC,
    description: brand.description,
    site: import.meta.env.SITE,
    items: posts.map((post) => ({
      title: post.data.titleTC,
      description: post.data.excerpt,
      pubDate: post.data.publishDate,
      link: `post/${post.slug}`,
    })),
  });
};
