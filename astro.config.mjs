// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import githubPages from '@astrojs/github-pages';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  integrations: [tailwind(), githubPages()],
  base: '/icn-website/',
});