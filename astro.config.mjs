import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import partytown from '@astrojs/partytown';
import rehypeExternalLinks from 'rehype-external-links';

export default defineConfig({
  site: 'https://www.webdong.dev',
  markdown: {
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          content: {
            type: 'element',
            tagName: 'span',
            properties: {
              class: 'external-link-icon',
            },
            children: [{ type: 'text', value: '🡕' }],
          },
        },
      ],
    ],
    shikiConfig: {
      theme: 'monokai',
    },
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
