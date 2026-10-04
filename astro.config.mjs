// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://ahmedmansour.vercel.app',
  trailingSlash: 'never',
  integrations: [sitemap()],
  build: { inlineStylesheets: 'always' },
});
