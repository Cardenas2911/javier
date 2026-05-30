// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://Cardenas2911.github.io',
  base: '/javier',
  integrations: [react()],

  vite: {
    plugins: [tailwindcss()]
  }
});