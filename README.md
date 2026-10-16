# rbnetwork.my

News and analysis on SEO, AI search and web development, in English and Bahasa Melayu.

Built with [Astro](https://astro.build), hosted on Vercel, articles written in Sveltia CMS.

## Contents

1. [Run it on your computer](#run-it-on-your-computer)
2. [Write an article](#write-an-article)
3. [Settings to fill in](#settings-to-fill-in)
4. [Deploy](#deploy)
5. [How the project is organised](#how-the-project-is-organised)

## Run it on your computer

Needs Node.js 22.12 or newer.

```sh
npm install
npm run dev        # http://localhost:4321
npm run build      # builds the live site into dist/
npm run preview    # serves dist/ to check the build
```

While `npm run dev` is running, draft articles are visible. On the live site they are hidden.

## Write an article

**In the editor (recommended):** open `https://rbnetwork.my/admin/` and choose **Sign In with Token**.
Create a GitHub fine-grained token with access to this repository and **Contents: Read and write**.
Each save becomes a commit, and Vercel rebuilds the site in about a minute.

**By hand:** add a Markdown file to `src/content/articles/en/` (English) or `src/content/articles/ms/` (Malay).
The Malay version of an article uses the same file name as the English one.

```md
---
title: Article title
description: One or two sentences. Also used in search results.
topic: seo            # seo, ai-search or web-development
type: analysis        # news, analysis, explainer or guide
pubDate: 2026-10-20
updatedDate:          # optional
draft: false
summary:              # optional "In short" points
  - First key point
sources:              # optional
  - title: Source name
    url: https://example.com/
---

Article text in Markdown. Use ## for section headings; they build the "On this page" list.
```

Each article gets its own generated cover: terrain for SEO, a network for AI Search, roots for Web Development.

`src/content/articles/en/sample-layout-article.md` is a draft that shows the article layout. Delete it once real articles exist.

## Settings to fill in

| Setting | Where | What to do |
| --- | --- | --- |
| Formspree form ID | `src/config/site.ts`, `formspreeId` | Set to `xjygjlzn`. Change it here if you ever make a new form. |
| Articles per topic page | `src/config/site.ts`, `perPage` | Default 10. |

## Deploy

1. In Vercel, **Add New Project** and import `rasyidbejay/rbnetwork`. Vercel detects Astro; keep the defaults.
2. In the project's **Settings → Domains**, add `rbnetwork.my` and `www.rbnetwork.my`.
3. In Namecheap, **Domain List → Manage → Advanced DNS**, add the records Vercel shows.

Every push to `main` deploys automatically.

## How the project is organised

```text
public/                  Icons, share image, robots.txt, /admin (Sveltia CMS)
src/
  config/site.ts         Site name, URL, topics, Formspree ID
  i18n/ui.ts             Interface text in English and Malay
  content/articles/      Articles: en/ and ms/
  content.config.ts      Article fields and their rules
  layouts/               Page shell: head tags, header, Index menu, footer
  views/                 Page designs shared by both languages
  pages/                 Routes (ms/ holds the Malay routes)
  components/            Header, hero map, cards, explainer and more
  scripts/viz.ts         Generated pictures (terrain, networks, roots)
  scripts/site.ts        Menu, theme, explainer tabs, reading progress, contact form
  styles/global.css      Brand colours, type and layout
  assets/fonts/          Instrument Sans (SIL Open Font License)
```

**Theme:** follows the visitor's device setting. A choice made in the Index menu is remembered in that browser.

**Languages:** English at `/`, Malay at `/ms/`. Language tags (hreflang) only link pages that exist in both languages.
