import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/static';

export default defineConfig({
  site: 'https://lessirenes-gb.com',
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),
});
