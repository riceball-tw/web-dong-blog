export const languages = {
  en: 'English',
  'zh-cn': '简体中文',
  'zh-tw': '繁體中文',
} as const;

// https://en.wikipedia.org/wiki/IETF_language_tag
// IETF language tag
export const languageTags = {
  en: 'en',
  'zh-cn': 'zh-Hans',
  'zh-tw': 'zh-Hant-TW',
} as const;

export const defaultLocale = 'zh-tw';
export const prefixDefaultLocale = false;

export type LanguageKey = keyof typeof languages;
export type LanguageValue = (typeof languages)[LanguageKey];

/**
 * Get locale parms for Astro's `getStaticPaths` function
 * @returns - The list of locale params
 * @see https://docs.astro.build/en/guides/routing/#dynamic-routes
 */
export const localeParams = Object.keys(languages).map((language) => ({
  params: { language },
}));

function removeLanguagePrefix(path: string, languagePrefixes: string[]): string {
  const prefixRegex = new RegExp(`^/(${languagePrefixes.join('|')})`);
  return path.replace(prefixRegex, '').replace(/^\/+/, '');
}

function constructNewPath(targetLocale: LanguageKey, path: string, isDefaultLocalePrefixed: boolean): string {
  const cleanPath = path.replace(/^\/+/, '').replace(/\/+$/, '');
  if (!isDefaultLocalePrefixed && targetLocale === defaultLocale) {
    return cleanPath ? `/${cleanPath}` : '/';
  }
  return cleanPath ? `/${targetLocale}/${cleanPath}` : `/${targetLocale}`;
}

/**
 * Switch locale based on the current path
 * @param targetLocale The target language to switch to
 * @param path The current path
 * @param isDefaultLocalePrefixed Whether the default locale should be prefixed in the URL
 * @returns The new path with the target locale
 * @example changeLanguage('en', '/zh-tw/about') => '/en/about'
 * @example changeLanguage('zh-tw', '/about') => '/about'
 * @example changeLanguage('zh-tw', '/about', true) => '/zh-tw/about'
 */
export function changeLanguage(
  targetLocale: LanguageKey,
  path: string,
  isDefaultLocalePrefixed = prefixDefaultLocale,
): string {
  const languagePrefixes = Object.keys(languages);
  const cleanedPath = removeLanguagePrefix(path, languagePrefixes);
  return constructNewPath(targetLocale, cleanedPath, isDefaultLocalePrefixed);
}
