import rss from '@astrojs/rss';
import globalConfig from '@/globalConfig';
import { getCollection } from 'astro:content';
const { brand } = globalConfig;

export const get = async () => {
  const posts = await getCollection('post');
  const avaliablePosts = posts.filter((post) => !post.data.isDraft);

  return rss({
    title: brand.nameTC,
    description: brand.description,
    site: import.meta.env.SITE,
    items: avaliablePosts.map((post) => ({
      title: post.data.titleTC,
      description: post.data.excerpt,
      pubDate: post.data.publishDate,
      link: `post/${post.slug}`,
    })),
  });
};
