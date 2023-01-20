import rss from '@astrojs/rss';
import { brand } from '@/config';
import { getCollection } from 'astro:content';

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
