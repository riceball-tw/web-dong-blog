import type { APIRoute } from 'astro';
import globalConfig from '@/globalConfig.ts';

// https://web.dev/articles/add-manifest
// eslint-disable-next-line import/prefer-default-export
export const GET: APIRoute = () =>
  new Response(
    JSON.stringify({
      name: `${globalConfig.brand.nameTC}`,
      icons: [
        { src: 'images/brand/favicon/icon-192.png', type: 'image/png', sizes: '192x192' },
        { src: 'images/brand/favicon/icon-512.png', type: 'image/png', sizes: '512x512' },
        { src: 'images/brand/favicon/maskable-icon-512.png', type: 'image/png', sizes: '512x512', purpose: 'maskable' },
      ],
      start_url: '/post',
      display: 'fullscreen',
      theme_color: globalConfig.brand.themeColor,
      background_color: globalConfig.brand.themeColor,
    }),
  );
