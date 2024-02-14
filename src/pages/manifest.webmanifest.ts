import type { APIRoute } from 'astro';
import globalConfig from '@/globalConfig';

export const GET: APIRoute = () =>
  new Response(
    JSON.stringify({
      name: `${globalConfig.brand.nameTC}`,
      icons: [
        { src: '/icon-192.png', type: 'image/png', sizes: '192x192' },
        { src: '/icon-512.png', type: 'image/png', sizes: '512x512' },
      ],
    }),
  );
