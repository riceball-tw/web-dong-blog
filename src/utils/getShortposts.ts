import { getCollection } from 'astro:content';

export const shorts = await getCollection('shortPost');

// eslint-disable-next-line import/prefer-default-export
export const dateSortedPublishedShorts = shorts.sort(
  (a, b) => b.data.publishDate.getTime() - a.data.publishDate.getTime(),
);
