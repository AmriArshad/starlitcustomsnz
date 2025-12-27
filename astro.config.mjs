import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'starlitcustoms.co.nz', // Your actual domain
  // If using username.github.io/repo-name, add:
  // base: '/repo-name',
});