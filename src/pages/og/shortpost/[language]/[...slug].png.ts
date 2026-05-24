import type { CollectionEntry } from "astro:content";
import MarkdownIt from "markdown-it";
import { dateSortedLocaleRelatedShortposts } from "@/utils/getShortposts.ts";
import {
	type LanguageKey,
	languages,
	stripLanguageCode,
} from "@/utils/i18n.ts";
import { generateOgImage } from "@/utils/ogImage.ts";

interface Props {
	params: { slug: string; language: string };
	props: { shortpost: CollectionEntry<"shortpost"> };
}

const markdownParser = new MarkdownIt();
const createExcerpt = (body: string, maxLength = 160) =>
	markdownParser
		.render(body)
		.split("\n")
		.slice(0, 6)
		.flatMap((str: string) => str.replace(/<\/?[^>]+(>|$)/g, "").split("\n"))
		.join(" ")
		.substring(0, maxLength);

export async function GET({ props }: Props) {
	const { headline } = props.shortpost.data;
	const excerpt = createExcerpt(props.shortpost.body || "");
	return await generateOgImage(headline, excerpt);
}

export async function getStaticPaths() {
	return Object.keys(languages).flatMap((language) =>
		dateSortedLocaleRelatedShortposts(language as LanguageKey).map(
			(shortpost) => ({
				params: { slug: stripLanguageCode(shortpost.id), language },
				props: { shortpost },
			}),
		),
	);
}
