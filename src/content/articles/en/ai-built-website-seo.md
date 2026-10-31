---
title: "Building a website with AI? Check these SEO basics"
description: AI website builders can ship a site that looks finished but hides its text from Google. Seven checks you can run without code, using Google's own tools.
topic: web-development
type: guide
pubDate: 2026-10-31T03:40:00.000Z
updatedDate: ''
draft: false
cover: /images/articles/ai-built-website-seo.jpg
coverAlt: A spiral notebook with hand-drawn website wireframes, a pen and a phone on a wooden table.
coverCredit: picjumbo.com on Pexels
summary:
  - Many AI builders produce a page whose first HTML is an empty shell, and JavaScript fills in the text. Google can render that, but later and with more ways to go wrong.
  - Google's JavaScript SEO guide advises server-side or pre-rendering, unique titles, real links, one URL per page and real 404 status codes.
  - You can test most of this for free with View source, Search Console's URL Inspection and PageSpeed Insights.
  - We have not tested individual AI builders, so this guide does not say which tool does this well.
sources:
  - title: Understand the JavaScript SEO basics (Google Search Central)
    url: https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics
  - title: Optimizing your website for generative AI features on Google Search (Google Search Central, updated 10 July 2026)
    url: https://developers.google.com/search/docs/fundamentals/ai-optimization-guide
faq:
  - question: Are AI-built websites bad for SEO?
    answer: Not by default. Google says it can process JavaScript content as long as it is not blocked, but it also says SEO for JavaScript-heavy sites is generally more complex. The risk lies in how the pages are built, not in AI itself.
  - question: Can Google read a website built with an AI website builder?
    answer: Often yes, but you should confirm it. Use Search Console's URL Inspection to test the live page and check that your text appears in the rendered HTML.
  - question: How do I check whether Google can see my AI-built site?
    answer: View the page source and look for your main text. Then run URL Inspection on the live URL in Search Console and compare the rendered page with what visitors see. If text is missing, Google may not index it.
  - question: What should I ask an AI builder to add for SEO?
    answer: Ask for server-side or build-time rendering, a unique title and description on every page, real links with an href, one URL per page and a true 404 status for missing pages. Check each result with the tests above.
  - question: Will an AI-built website appear in AI Overviews?
    answer: Only if its pages are indexed and eligible to show a snippet, which are Google's stated requirements. Google also says AI-assisted content must meet its spam policies, and that mass-producing pages for every query variation can break its scaled content abuse policy.
---

AI website builders can produce a site in an afternoon. Whether Google can read it is a separate question, and the answer depends on how the pages are built. Google's documentation gives you ways to check without writing code. Here are seven checks, and prompts you can give your builder.

## Why AI-built sites can fail in search

Many builders output a single-page app. The first HTML the server sends is an empty shell, and JavaScript fills in the text afterwards. Google's JavaScript SEO guide says Google can render this, but pages wait in a queue for rendering, which can take longer than a few seconds. It also says that "server-side or pre-rendering is still a great idea", because it is faster for users and not every bot runs JavaScript.

<figure style="margin:32px 0">
<svg class="rbg" style="display:block;width:100%;max-width:560px;height:auto" viewBox="0 0 560 216" role="img" aria-labelledby="rbg-c1-title rbg-c1-desc" xmlns="http://www.w3.org/2000/svg">
<title id="rbg-c1-title">What a visitor sees compared with what the server sends first</title>
<desc id="rbg-c1-desc">Two boxes side by side. The visitor sees headline, text, prices and menu after JavaScript runs. The server's first response is an empty page shell. A bar below says Google renders the page later, in a queue.</desc>
<style>
.rbg text { font-family: "Instrument Sans", system-ui, -apple-system, "Segoe UI", sans-serif; }
.rbg .lab { font-size: 18px; font-weight: 500; fill: var(--ink, #1B1B18); }
.rbg .sub { font-size: 16px; font-weight: 400; fill: var(--ink-muted, #5A5850); }
.rbg .box { fill: none; stroke: var(--ink, #1B1B18); stroke-width: 2; }
.rbg .base { fill: none; stroke: var(--terracotta, #B5562F); stroke-width: 2.5; }
</style>
<rect class="box" x="10" y="10" width="260" height="110" rx="12"/>
<text class="lab" x="28" y="44">Visitor, after JavaScript</text>
<text class="sub" x="28" y="72">Headline, text, prices,</text>
<text class="sub" x="28" y="94">menu, buttons</text>
<rect class="base" x="290" y="10" width="260" height="110" rx="12"/>
<text class="lab" x="308" y="44">Server's first HTML</text>
<text class="sub" x="308" y="72">An empty page shell</text>
<text class="sub" x="308" y="94">and a script to load</text>
<rect class="box" x="10" y="142" width="540" height="62" rx="12"/>
<text class="lab" x="28" y="170">Google renders it later, in a queue</text>
<text class="sub" x="28" y="192">Whatever fails to render is not indexed</text>
</svg>
<figcaption style="margin-top:12px;font-size:12px;line-height:16px;font-weight:500;letter-spacing:0.02em;color:var(--ink-muted)">Figure 1. A client-rendered page, as described in Google's JavaScript SEO guide. Our drawing.</figcaption>
</figure>

## Seven checks, no code

1. **View the source.** Open your page, right-click and choose View page source. If you cannot find your main text there, it depends on JavaScript.
2. **Run URL Inspection.** In Search Console, test the live URL and look at the rendered page. Google says to use it, or the Rich Results Test, to confirm your content appears in the rendered HTML.
3. **Give every page its own title and description.** Google says unique, descriptive ones help people pick the right result.
4. **Use one real URL per page.** Links need to be `<a>` elements with an `href`. Google says it cannot reliably follow fragment URLs such as `#/products`.
5. **Return a true 404.** If a missing page shows "not found" but the server answers 200, Google may treat it as a soft 404.
6. **Do not block scripts.** Google does not render JavaScript from blocked files or pages, so check your robots.txt.
7. **Test speed on a phone.** Google's AI guide asks for a good page experience. PageSpeed Insights is free.

None of these checks needs code, but note each result with the date so you can compare after you make changes. Run checks 1 and 2 on three kinds of page: the home page, a typical inner page and a page that loads data, such as a product list. A builder can render some pages well and others badly, so one good result proves little.

<figure class="ph"><img src="/images/articles/ai-built-website-seo-1.jpg" alt="Close-up of a hand-drawn website wireframe with image boxes and lines of placeholder text." width="1600" height="900" loading="lazy" decoding="async"><figcaption>Photo: picjumbo.com on Pexels</figcaption></figure>

## Prompts to give your builder

Adapt these to your tool:

- "Render each page's main text on the server or at build time, so it is in the HTML response."
- "Give every page a unique title tag, meta description and canonical URL."
- "Use real links with href for navigation, one URL per page, and return a 404 status for pages that do not exist."

Some builders may not let you change how pages render, so ask the vendor before you commit. We have not tested any specific builder, so we cannot tell you which one does this well.

## When to call a developer

Bring in a developer if any of these apply:

- View source stays empty and your builder offers no server-side or static rendering option.
- Search Console's URL Inspection shows pages that Google could not render or index.
- You plan hundreds of pages. Our reading is that rendering and indexing problems multiply with scale, so fix the template first.

Google also says mass-producing pages for every query variation can break its scaled content abuse policy, and that AI-assisted content must meet its spam policies. For the bigger picture, read [SEO, AEO and GEO explained](/seo/seo-aeo-geo-explained/), and see [whether your site is ready for AI agents](/web-development/ai-agent-ready-website/).
