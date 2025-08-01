// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  devToolbar: {
    enabled: false,
  },
  site: 'https://pabl10.github.io',
  base: '/tacito',
  outDir: './dist',
  build: {
    assets: '_astro',
  },
  vite: {
    base: '/tacito/',
  },
});
