import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { publishedPosts } from '@/utils/getPosts.ts';
import { shortposts } from '@/utils/getShortposts.ts';
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';
import { currentLocaleWebsiteConfig } from '@/utils/getWebsiteConfig.ts';
import { defaultLocale } from '@/utils/i18n.ts';

const parser = new MarkdownIt();
const { name, description } = (await currentLocaleWebsiteConfig(defaultLocale)).data.brand;

// eslint-disable-next-line import/prefer-default-export
export const GET = async (context: APIContext) => {
  const rssContent = await rss({
    title: name,
    description,
    site: context.site || '',
    items: [...publishedPosts, ...shortposts].map((collectionItem) => {
      const { slug } = collectionItem;
      if (collectionItem.collection === 'shortpost') {
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
