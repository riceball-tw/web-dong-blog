// og-image-generator-cloudflare-worker
// https://github.com/mohdlatif/og-image-generator-cloudflare-worker/tree/main
import { Hono } from 'hono';
import { handle } from 'hono/cloudflare-pages';
// import { logger } from 'hono/logger';
// import { cache } from 'hono/cache';
import og from './og';

const app = new Hono().basePath('/api/og');

app
  // .use('*', logger())
  // .use(
  //   '*',
  //   cache({
  //     cacheName: async (c) => {
  //       const url = new URL(c.req.url);
  //       const params = url.searchParams.toString();
  //       return `${c.req.method} ${url.pathname}${params}`;
  //     },
  //     cacheControl: 'max-age=86400', // 24 hours
  //   })
  // )
  .route('/', og);

export const onRequest = handle(app);
