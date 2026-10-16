// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://rbnetwork.my',
  trailingSlash: 'always',
  i18n: {
    locales: ['en', 'ms'],
    defaultLocale: 'en',
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'en', locales: { en: 'en', ms: 'ms' } },
      filter: (page) => !page.includes('/admin/'),
    }),
  ],
  fonts: [
    {
      // Font files ship in the repo (SIL Open Font License), so builds never depend on Google being reachable.
      provider: fontProviders.local(),
      name: 'Instrument Sans',
      cssVariable: '--font-instrument-sans',
      fallbacks: ['system-ui', 'sans-serif'],
      options: {
        variants: [
          { src: ['./src/assets/fonts/instrument-sans-latin-400-normal.woff2'], weight: 400, style: 'normal' },
          { src: ['./src/assets/fonts/instrument-sans-latin-500-normal.woff2'], weight: 500, style: 'normal' },
          { src: ['./src/assets/fonts/instrument-sans-latin-600-normal.woff2'], weight: 600, style: 'normal' },
        ],
      },
    },
  ],
});
