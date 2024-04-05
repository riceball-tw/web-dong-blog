import rss from '@astrojs/rss';
import globalConfig from '@/globalConfig.ts';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

const { brand } = globalConfig;

// eslint-disable-next-line import/prefer-default-export
export const GET = async (context: APIContext) => {
  const posts = await getCollection('post');
  const avaliablePosts = posts.filter((post) => !post.data.isDraft);
  const rssContent = await rss({
    title: brand.nameTC,
    description: brand.description,
    site: context.site || "",
    items: avaliablePosts.map((post) => ({
      title: post.data.titleTC,
      description: post.data.excerpt,
      pubDate: post.data.publishDate,
      link: `post/${post.slug}`,
    })),
  });

  return new Response(rssContent.body);
};
