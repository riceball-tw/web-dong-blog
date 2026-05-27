import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import {
	postSchema,
	shortpostSchema,
	toolboxSchema,
	websiteSchema,
} from "@/types/content-collection-schemas.ts";

const legacySlug = ({ entry }: { entry: string }) =>
	entry.replace(/\.[^/.]+$/, "").replace(/\/index$/, "");

// eslint-disable-next-line import/prefer-default-export
export const collections = {
	post: defineCollection({
		loader: glob({
			pattern: "**/*.{md,mdx}",
			base: "./src/content/post",
			generateId: legacySlug,
		}),
		schema: postSchema,
	}),
	shortpost: defineCollection({
		loader: glob({
			pattern: "**/*.{md,mdx}",
			base: "./src/content/shortpost",
			generateId: legacySlug,
		}),
		schema: shortpostSchema,
	}),
	toolbox: defineCollection({
		loader: glob({
			pattern: "**/*.json",
			base: "./src/content/toolbox",
			generateId: legacySlug,
		}),
		schema: toolboxSchema,
	}),
	website: defineCollection({
		loader: glob({
			pattern: "**/*.json",
			base: "./src/content/website",
			generateId: legacySlug,
		}),
		schema: websiteSchema,
	}),
};
