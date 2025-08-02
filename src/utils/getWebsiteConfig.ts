import { getEntry } from "astro:content";

// Astro.currentLocale Type: https://docs.astro.build/en/reference/api-reference/#currentlocale
// getEntry() Type: https://docs.astro.build/en/reference/modules/astro-content/#getentry

// eslint-disable-next-line import/prefer-default-export
export const currentLocaleWebsiteConfig = (
	currentLocale: string | undefined,
) => {
	const websiteConfig = getEntry("website", `${currentLocale}/config`);
	if (!websiteConfig) throw Error("Website config not found");
	return websiteConfig;
};
