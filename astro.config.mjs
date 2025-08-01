// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Detect environment
const isDev = process.env.NODE_ENV === 'development' || process.env.NODE_ENV === undefined;
const basePath = isDev ? '' : '/tacito';

export default defineConfig({
  integrations: [tailwind()],
  devToolbar: {
    enabled: false,
  },
  site: 'https://pabl10.github.io',
  base: basePath,
  outDir: './dist',
  build: {
    assets: '_astro',
  },
  // Remove vite.base configuration to fix development issues
});
