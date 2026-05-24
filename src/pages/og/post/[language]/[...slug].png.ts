import type { CollectionEntry } from "astro:content";
import { dateSortedLocaleRelatedPosts } from "@/utils/getPosts.ts";
import {
	type LanguageKey,
	languages,
	stripLanguageCode,
} from "@/utils/i18n.ts";
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
		dateSortedLocaleRelatedPosts(language as LanguageKey).map((post) => ({
			params: { slug: stripLanguageCode(post.id), language },
			props: { post },
		})),
	);
}
