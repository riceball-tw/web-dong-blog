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
  brand: {
    name: 'WebDong',
    nameTC: '網頁東東',
    short: 'WD',
    slogan: '把網頁開發知識一桿進洞',
    description: '用簡白親切的方式來描述如何設計與架構網頁。撰寫教學文章，為你捕捉並提煉入口即化的好知識。',
    thumbnail: {
      width: 1200,
      height: 630,
      src: '/images/brand/default-og.jpg',
      alt: '網頁東東橫幅',
    },
    copyright: {
      title: 'CC BY-NC 4.0',
      url: 'https://creativecommons.org/licenses/by-nc/4.0/deed.zh_TW',
    },
    socials: [
      {
        name: 'CodePen',
        imgUrl: '/images/social/codepen.svg',
        url: 'https://codepen.io/riecball',
        themeColor: '#000000',
      },
      {
        name: 'YouTube',
        imgUrl: '/images/social/youtube.svg',
        url: 'https://www.youtube.com/@w3dong',
        themeColor: '#ff0000',
      },
      {
        name: 'Instagram',
        imgUrl: '/images/social/instagram.svg',
        url: 'https://www.instagram.com/webdong.dev',
        themeColor: '#c32aa3',
      },
      {
        name: 'GitHub',
        imgUrl: '/images/social/github.svg',
        url: 'https://github.com/riceball-tw',
        themeColor: '#424242',
      },
      {
        name: 'Medium',
        imgUrl: '/images/social/medium.svg',
        url: 'https://medium.com/@webdong',
        themeColor: '#000000',
      },
    ],
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
