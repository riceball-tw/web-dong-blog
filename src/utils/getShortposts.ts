import { getCollection } from 'astro:content';
import { type LanguageKey } from '@/utils/i18n';

export const shortposts = await getCollection('shortpost');

// eslint-disable-next-line import/prefer-default-export
export const dateSortedPublishedShortposts = shortposts.sort(
  (a, b) => b.data.publishDate.getTime() - a.data.publishDate.getTime(),
);

// Get Language code from slug
function getLanguageCode(str: string) {
  const match = str.match(/^[a-z]{2}(-[a-z]{2})?/i);
  return match ? match[0] : null;
}

// eslint-disable-next-line import/prefer-default-export
export const dateSortedLocaleRelatedShortposts = (currentLocale: LanguageKey) =>
  shortposts
    .sort((a, b) => b.data.publishDate.getTime() - a.data.publishDate.getTime())
    .filter((post) => getLanguageCode(post.slug) === currentLocale);
