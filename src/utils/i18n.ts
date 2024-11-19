export const baseUrl = 'https://www.webdong.dev';

export const languages = {
  en: 'English',
  'zh-cn': '简体中文',
  'zh-tw': '繁體中文',
} as const;

export const languageFallback = {
  'zh-cn': 'zh-tw',
  en: 'zh-tw',
} as const;

// https://en.wikipedia.org/wiki/IETF_language_tag
// IETF language tag
export const languageTags = {
  en: 'en',
  'zh-cn': 'zh-Hans',
  'zh-tw': 'zh-Hant-TW',
} as const;

// To address Missing region-independant link for that language Problem, Here's a table storing existing region data
export const regionTags = {
  zh: 'zh-Hant-TW',
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

export function stripLanguageCode(str: string) {
  return str.replace(/^[a-z]{2}(-[a-z]{2})?\//i, '');
}

export function getLanguageCode(str: string): string | null {
  const match = str.match(/^[a-z]{2}(-[a-z]{2})?\//i);
  return match ? match[0].slice(0, -1) : null;
}

export function removeLanguagePrefix(path: string, languagePrefixes: string[]): string {
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

export function translateCategory(categoryKey: string, currentLocale?: LanguageKey) {
  const categoryTranslationMap: Record<string, Record<string, string>> = {
    'zh-cn': {
      Share: '分享',
      Team: '团队',
      Implementation: '实作',
      'Technical Discussion': '技术讨论',
      Pattern: '模式',
      'Software Testing': '软件测试',
      'Web Performance': '网站性能',
      Cybersecurity: '网络安全',
      'Non-Technical Discussion': '非技术讨论',
      Frontend: '前端',
      Accessibility: '无障碍',
    },
    'zh-tw': {
      Share: '分享',
      Team: '團隊',
      Implementation: '實作',
      'Technical Discussion': '技術討論',
      Pattern: '模式',
      'Software Testing': '軟體測試',
      'Web Performance': '網站效能',
      Cybersecurity: '網路安全',
      'Non-Technical Discussion': '非技術討論',
      Frontend: '前端',
      Accessibility: '無障礙',
    },
  };
  return (currentLocale && categoryTranslationMap[currentLocale]?.[categoryKey]) || categoryKey;
}

// Get Locale code from slug
export function getLocaleCode(str: string) {
  const match = str.match(/^[a-z]{2}(-[a-z]{2})?/i);
  return match ? match[0] : null;
}
