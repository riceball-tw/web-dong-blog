import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import rehypeSlug from 'rehype-slug';
import rehypeToc from 'rehype-toc';
import react from '@astrojs/react';
import partytown from '@astrojs/partytown';

export default defineConfig({
  site: 'https://www.webdong.dev',
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
    mdx({
      drafts: false,
    }),
    sitemap(),
    react(),
    partytown({
      // Adds dataLayer.push as a forwarding-event.
      config: {
        forward: ['dataLayer.push'],
      },
    }),
  ],
});
