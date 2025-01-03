import { getCollection } from 'astro:content';
import { type LanguageKey } from '@/utils/i18n.ts';
import { getLocaleCode } from '@/utils/i18n.ts';

const isProductionEnvironment = import.meta.env.MODE === 'production';

export const publishedPosts = await getCollection('post', (post) => {
  const isCurrentPostDraft = post.data.isDraft;
  const hasDisplayCurrentPost = !isCurrentPostDraft;
  return isProductionEnvironment ? hasDisplayCurrentPost : true;
});

export const dateSortedPublishedPosts = publishedPosts.sort(
  (a, b) => b.data.publishDate.getTime() - a.data.publishDate.getTime(),
);

export const dateSortedLocaleRelatedPosts = (currentLocale: LanguageKey) =>
  publishedPosts
    .sort((a, b) => b.data.publishDate.getTime() - a.data.publishDate.getTime())
    .filter((post) => getLocaleCode(post.slug) === currentLocale);

export const sortedPostCategoryies = [...new Set(publishedPosts.map((post) => post.data.category).flat())].sort(
  (a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' }),
);

export const sortedPostTags = [...new Set(publishedPosts.map((post) => post.data.tags).flat())].sort((a, b) =>
  a.localeCompare(b, 'en', { sensitivity: 'base' }),
);
