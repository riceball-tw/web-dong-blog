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
    items: publishedPosts.map((post) => {
      const { slug } = post;
      const { titleTC, excerpt, publishDate, category, tags } = post.data;
      return {
        title: titleTC,
        description: excerpt,
        pubDate: publishDate,
        link: `post/${slug}`,
        categories: [category, ...tags],
      };
    }),
  });

  return new Response(rssContent.body);
};
