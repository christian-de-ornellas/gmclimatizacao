// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://christian-de-ornellas.github.io',
  base: process.env.CI ? '/gmclimatizacao/' : '/',
  vite: {
    plugins: [tailwindcss()],
  },
});
