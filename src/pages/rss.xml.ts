import rss from '@astrojs/rss';
import globalConfig from '@/globalConfig.ts';
import type { APIContext } from 'astro';
import { publishedPosts } from '@/utils/getPosts.ts';
import { shorts } from '@/utils/getShortposts.ts';
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';

const parser = new MarkdownIt();

const { brand } = globalConfig;

// eslint-disable-next-line import/prefer-default-export
export const GET = async (context: APIContext) => {
  const rssContent = await rss({
    title: brand.nameTC,
    description: brand.description,
    site: context.site || '',
    items: [...publishedPosts, ...shorts].map((collectionItem) => {
      const { slug } = collectionItem;
      if (collectionItem.collection === 'shortPost') {
        const { body } = collectionItem;
        const { titleTC, publishDate, category } = collectionItem.data;
        return {
          title: titleTC,
          content: sanitizeHtml(parser.render(body)),
          pubDate: publishDate,
          link: `shortpost/${slug}/#${slug}`,
          categories: [category],
        };
      }

      if (collectionItem.collection === 'post') {
        const { titleTC, excerpt, publishDate, category, tags } = collectionItem.data;
        return {
          title: titleTC,
          description: excerpt,
          pubDate: publishDate,
          link: `post/${slug}`,
          categories: [category, ...tags],
        };
      }

      return {};
    }),
  });

  return new Response(rssContent.body);
};
