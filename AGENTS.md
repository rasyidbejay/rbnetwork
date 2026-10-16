## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

## Project notes

- Design: "Living field". Brand tokens are in `src/styles/global.css`; do not add gradients, shadows, a second accent colour or font weight 700.
- Interface text lives in `src/i18n/ui.ts` (English and Malay). Page designs live in `src/views/` and are shared by `src/pages/` and `src/pages/ms/`.
- Articles: `src/content/articles/<en|ms>/<slug>.md`, same slug in both languages. Schema in `src/content.config.ts`.
- The CMS config is `public/admin/config.yml`; keep its fields in step with the schema.
