import { getEntry } from 'astro:content';
import type { LanguageKey } from '@/utils/i18n.ts';

// eslint-disable-next-line import/prefer-default-export
export const currentLocaleWebsiteConfig = (currentLocale: LanguageKey) =>
  getEntry('website', `${currentLocale}/config`);
