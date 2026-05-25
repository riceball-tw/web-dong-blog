import type { CollectionEntry } from "astro:content";
import { getLocale } from "@/i18n/i18n";
import { dateSortedLocaleRelatedPosts } from "@/utils/getPosts.ts";
import { languages, stripLanguageCode } from "@/utils/i18n.ts";
import { generateOgImage } from "@/utils/ogImage.ts";

interface Props {
	params: { slug: string; language: string };
	props: { post: CollectionEntry<"post"> };
}

export async function GET({ props }: Props) {
	const { headline, excerpt } = props.post.data;
	return await generateOgImage(headline, excerpt);
}

export async function getStaticPaths() {
	return Object.keys(languages).flatMap((language) =>
		dateSortedLocaleRelatedPosts(getLocale(language)).map((post) => ({
			params: { slug: stripLanguageCode(post.id), language },
			props: { post },
		})),
	);
}
