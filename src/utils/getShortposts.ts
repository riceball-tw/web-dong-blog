import { getCollection } from "astro:content";
import { getLocaleCode, type LanguageKey } from "@/utils/i18n.ts";

export const shortposts = await getCollection("shortpost");

// eslint-disable-next-line import/prefer-default-export
export const dateSortedPublishedShortposts = shortposts.sort(
	(a, b) => b.data.publishDate.getTime() - a.data.publishDate.getTime(),
);

// eslint-disable-next-line import/prefer-default-export
export const dateSortedLocaleRelatedShortposts = (currentLocale: LanguageKey) =>
	shortposts
		.sort((a, b) => b.data.publishDate.getTime() - a.data.publishDate.getTime())
		.filter((post) => getLocaleCode(post.slug) === currentLocale);
