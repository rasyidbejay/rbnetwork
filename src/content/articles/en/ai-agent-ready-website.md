---
title: Is your website ready for AI agents?
description: Browser agents read pages through screenshots, HTML and the accessibility tree. What helps today, what Lighthouse now checks, and what is still experimental.
topic: web-development
type: guide
pubDate: 2026-10-31T03:39:00.000Z
updatedDate: ''
draft: false
cover: /images/articles/ai-agent-ready-website.jpg
coverAlt: A white robotic hand holding a small white cup filled with black keyboard keys, seen from above.
coverCredit: Tara Winstead on Pexels
summary:
  - Google's web.dev guide says AI browser agents read a site through screenshots, the HTML and the accessibility tree, and that the same work also helps human visitors.
  - The basics that help most are real buttons and links, labelled form fields, no invisible overlays and a stable layout.
  - Lighthouse 13.3.0 added an Agentic Browsing category. In our run of 13.5.0 on a local build of this site, it scored 1 out of 1.
  - llms.txt does nothing for Google Search, and WebMCP is a proposed standard still in early preview.
sources:
  - title: Build agent-friendly websites (web.dev, updated 1 April 2026)
    url: https://web.dev/articles/ai-agent-site-ux
  - title: Optimizing your website for generative AI features on Google Search (Google Search Central, updated 10 July 2026)
    url: https://developers.google.com/search/docs/fundamentals/ai-optimization-guide
  - title: Lighthouse v13.3.0 release notes (GitHub)
    url: https://github.com/GoogleChrome/lighthouse/releases/tag/v13.3.0
  - title: Lighthouse v13.5.0 release notes (GitHub)
    url: https://github.com/GoogleChrome/lighthouse/releases/tag/v13.5.0
  - title: WebMCP is available for early preview (Chrome for Developers)
    url: https://developer.chrome.com/blog/webmcp-epp
faq:
  - question: What is an AI agent-ready website?
    answer: A site that an AI browser agent can read and operate without guessing. In practice that means real buttons and links, labelled form fields, a stable layout and a clean accessibility tree. Google's web.dev guide says this work also makes sites better for people.
  - question: What does the Lighthouse Agentic Browsing category check?
    answer: In our run of Lighthouse 13.5.0 it listed an accessibility tree check, layout shift, an llms.txt format check, three WebMCP checks and an Agent Resource Discovery file check. The file and WebMCP checks showed as not applicable on a site that has none of them.
  - question: Do I need llms.txt or an agent catalogue file for Google?
    answer: No. Google says Search does not use llms.txt files, and that creating one will neither help nor harm your visibility in Google Search. Other services may read such files, so it is optional.
  - question: What is WebMCP?
    answer: A proposed web standard that lets a site describe tools an agent can use, through HTML forms or JavaScript. Chrome describes it as early preview, and web.dev warns it is in active development and may change.
  - question: How do AI browser agents read a website?
    answer: Google says they can analyse screenshots, inspect the page structure in the DOM and interpret the accessibility tree. Modern agents combine all three, so a page should describe itself clearly in each.
---

AI browser agents try to finish tasks for people, such as comparing products or booking a table. Whether they succeed on your site depends less on new files than on ordinary build quality. Google's own guidance says so, and Lighthouse now has a category that checks part of it. This guide separates what helps today from what is still experimental.

## How an agent reads your page

Google's web.dev guide says agents see a site in three ways: a screenshot, the HTML and the accessibility tree, and that modern agents combine them. Google's guide to generative AI features says the same. A page that looks right but has unlabelled controls, shifting layouts or hidden overlays gives the three views different answers. The accessibility tree matters most for forms and buttons. It is the browser's summary of each control's role, name and state, and an agent can only act with confidence on a control that has a clear name.

<figure style="margin:32px 0">
<svg class="rbg" style="display:block;width:100%;max-width:560px;height:auto" viewBox="0 0 560 218" role="img" aria-labelledby="rbg-b1-title rbg-b1-desc" xmlns="http://www.w3.org/2000/svg">
<title id="rbg-b1-title">How a browser agent reads a page</title>
<desc id="rbg-b1-desc">Three inputs feed one agent. A screenshot, the HTML structure and the accessibility tree all point to a box that reads agent decides what to click or fill.</desc>
<style>
.rbg text { font-family: "Instrument Sans", system-ui, -apple-system, "Segoe UI", sans-serif; }
.rbg .lab { font-size: 18px; font-weight: 500; fill: var(--ink, #1B1B18); }
.rbg .sub { font-size: 16px; font-weight: 400; fill: var(--ink-muted, #5A5850); }
.rbg .box { fill: none; stroke: var(--ink, #1B1B18); stroke-width: 2; }
.rbg .base { fill: none; stroke: var(--terracotta, #B5562F); stroke-width: 2.5; }
.rbg .arr { fill: none; stroke: var(--ink, #1B1B18); stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }
</style>
<rect class="box" x="10" y="10" width="220" height="54" rx="12"/>
<text class="lab" x="28" y="42">Screenshot</text>
<rect class="box" x="10" y="82" width="220" height="54" rx="12"/>
<text class="lab" x="28" y="114">HTML structure</text>
<rect class="box" x="10" y="154" width="220" height="54" rx="12"/>
<text class="lab" x="28" y="186">Accessibility tree</text>
<path class="arr" d="M230 37 L318 100 M230 109 H318 M230 181 L318 118 M310 103 L320 109 L310 115"/>
<rect class="base" x="320" y="62" width="230" height="94" rx="12"/>
<text class="lab" x="340" y="102">Agent</text>
<text class="sub" x="340" y="128">decides what to click or fill</text>
</svg>
<figcaption style="margin-top:12px;font-size:12px;line-height:16px;font-weight:500;letter-spacing:0.02em;color:var(--ink-muted)">Figure 1. The three views, as described by web.dev. Our drawing.</figcaption>
</figure>

## Six checks that help today

From the web.dev guide:

1. Use real `<button>` and `<a>` elements, not styled `<div>` or `<span>`. If you cannot, add the right `role` and `tabindex`.
2. Link each `<label>` to its field with the `for` attribute.
3. Remove transparent overlays that cover buttons.
4. Keep key controls, such as Add to cart, in the same place on similar pages.
5. Make clickable elements visible, larger than 8 square pixels, and set `cursor: pointer`.
6. Open the accessibility tree in Chrome DevTools and fix what looks wrong.

<figure class="ph"><img src="/images/articles/ai-agent-ready-website-1.jpg" alt="Close-up of colourful code on a dark computer screen." width="1600" height="900" loading="lazy" decoding="async"><figcaption>Photo: Nemuel Sereti on Pexels</figcaption></figure>

## What Lighthouse checks

Lighthouse 13.3.0 added an Agentic Browsing category to its default setup, and 13.5.0 added an audit for an Agent Resource Discovery catalogue file. On 31 October 2026 we ran version 13.5.0 from the command line against a local build of this site, with `npx lighthouse <url> --only-categories=agentic-browsing`. The category scored 1 out of 1. The accessibility tree audit passed and layout shift was 0. The llms.txt, WebMCP and catalogue audits were not applicable, because the site has none of those files or tools.

In 13.5.0 the category lists seven audits: the accessibility tree, layout shift, the llms.txt format, three WebMCP checks and the catalogue check. The 13.3.0 notes say the category was expected in Chrome 150's DevTools and in PageSpeed Insights, so you may be able to run it without the command line.

That was a local run, not the live site, so your result may differ. We found nothing saying these scores affect Search rankings.

## The experimental extras

- **llms.txt.** Google says Search does not use it, and that a file neither helps nor harms visibility in Google Search. Other services may read it.
- **WebMCP.** A proposed standard that lets a site expose tools to agents through HTML forms or JavaScript. Chrome calls it early preview, and web.dev says it may change. Developers with transactional sites may want to watch it. Most businesses can wait.

## What we still do not know

We do not know which agents visit Malaysian sites, how often they complete a purchase, or how Lighthouse's agent scores relate to real task success. We also tested only one site, this one, on a local build, so our Lighthouse result is not a benchmark for other sites. Google frames this as something to explore if it is relevant to your business and you have spare time.

For the wider picture, read [SEO, AEO and GEO explained](/seo/seo-aeo-geo-explained/). If you built your site with an AI tool, the next piece covers [the SEO basics to check](/web-development/ai-built-website-seo/).
