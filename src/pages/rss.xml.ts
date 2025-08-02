import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import MarkdownIt from "markdown-it";
import sanitizeHtml from "sanitize-html";
import { publishedPosts } from "@/utils/getPosts.ts";
import { shortposts } from "@/utils/getShortposts.ts";
import { currentLocaleWebsiteConfig } from "@/utils/getWebsiteConfig.ts";
import {
	defaultLocale,
	getLocaleCode,
	stripLanguageCode,
} from "@/utils/i18n.ts";

const parser = new MarkdownIt();
const { name, description } = (await currentLocaleWebsiteConfig(defaultLocale))
	.data.brand;

// eslint-disable-next-line import/prefer-default-export
export const GET = async (context: APIContext) => {
	const rssContent = await rss({
		title: name,
		description,
		site: context.site || "",
		items: [...publishedPosts, ...shortposts].map((collectionItem) => {
			const { slug } = collectionItem;
			const slugWithoutLocaleCode = stripLanguageCode(slug);
			const LocaleCode = getLocaleCode(slug);

			if (collectionItem.collection === "shortpost") {
				const { body } = collectionItem;
				const { headline, publishDate, category } = collectionItem.data;
				return {
					title: headline,
					content: sanitizeHtml(parser.render(body)),
					pubDate: publishDate,
					link: `${LocaleCode}/shortpost/${slugWithoutLocaleCode}/#${slugWithoutLocaleCode}`,
					categories: [category],
				};
			}

			if (collectionItem.collection === "post") {
				const { headline, excerpt, publishDate, category, tags } =
					collectionItem.data;
				return {
					title: headline,
					description: excerpt,
					pubDate: publishDate,
					link: `${LocaleCode}/post/${slugWithoutLocaleCode}`,
					categories: [category, ...tags],
				};
			}

			return {};
		}),
	});

	return new Response(rssContent.body);
};
