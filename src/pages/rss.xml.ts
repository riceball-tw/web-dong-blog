import rss from '@astrojs/rss';
import globalConfig from '@/globalConfig.ts';
import type { APIContext } from 'astro';
import { publishedPosts } from '@/utils/getPosts.ts';

const { brand } = globalConfig;

// eslint-disable-next-line import/prefer-default-export
export const GET = async (context: APIContext) => {
  const rssContent = await rss({
    title: brand.nameTC,
    description: brand.description,
    site: context.site || '',
    items: publishedPosts.map((post) => ({
      title: post.data.titleTC,
      description: post.data.excerpt,
      pubDate: post.data.publishDate,
      link: `post/${post.slug}`,
    })),
  });

  return new Response(rssContent.body);
};
