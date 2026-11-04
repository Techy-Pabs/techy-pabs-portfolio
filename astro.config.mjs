// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // The live address. When moving to a custom domain, change this and `url` in src/site.ts.
  site: 'https://techy-pabs-portfolio.vercel.app',
  integrations: [
    // Writes sitemap-index.xml at build time, listing every page except the 404 page.
    sitemap({ filter: (page) => !/\/404\/?$/.test(new URL(page).pathname) }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
