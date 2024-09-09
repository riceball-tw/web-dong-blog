import { getCollection } from 'astro:content';

export const shortposts = await getCollection('shortpost');

// eslint-disable-next-line import/prefer-default-export
export const dateSortedPublishedShortposts = shortposts.sort(
  (a, b) => b.data.publishDate.getTime() - a.data.publishDate.getTime(),
);
