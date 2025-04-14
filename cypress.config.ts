import { defineConfig } from 'cypress';

export default defineConfig({
  env: {
    defaultLocale: 'zh-tw',
  },
  e2e: {
    baseUrl: 'http://localhost:4321/', // Astro default dev server
  },
});
