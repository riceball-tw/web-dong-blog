import { getEntry } from 'astro:content';

// eslint-disable-next-line import/prefer-default-export
export const currentLocaleWebsiteConfig = (currentLocale: string | undefined) => {
  const websiteConfig = getEntry('website', `${currentLocale}/config`);
  if (!websiteConfig) throw Error('Website config not found');
  return websiteConfig;
};
