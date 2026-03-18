import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://ERC-IONIAN.github.io',
  integrations: [tailwind()],
});
