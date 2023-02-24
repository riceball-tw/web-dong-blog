import { defineConfig } from 'astro/config';

// https://astro.build/config
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
import mdx from '@astrojs/mdx';

// https://astro.build/config
import sitemap from '@astrojs/sitemap';
import rehypeSlug from 'rehype-slug';
import rehypeToc from 'rehype-toc';

// https://astro.build/config
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.webdong.dev',
  experimental: {
    contentCollections: true,
  },
  markdown: {
    rehypePlugins: [
      [rehypeSlug, {}],
      [
        rehypeToc,
        {
          headings: ['h2', 'h3'],
        },
      ],
    ],
  },
  integrations: [
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    mdx(),
    sitemap(),
    react(),
  ],
});
