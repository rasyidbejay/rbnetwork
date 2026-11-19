---
title: "AI visibility tools: what they measure and what to ask before you pay"
description: Tools now claim to show whether ChatGPT, Gemini and Google's AI name your brand. What they count, why one answer proves little, and which free checks to try first.
topic: ai-search
type: guide
pubDate: 2026-11-19T19:45:00.000Z
updatedDate: ''
draft: false
cover: /images/articles/ai-visibility-tools-guide.jpg
coverAlt: Close-up of a laptop screen showing a web analytics dashboard with a page views chart
coverCredit: Atlantic Ambience on Pexels
summary:
  - AI visibility tools run a set of prompts on AI platforms and count how often your brand is named (a mention) or linked (a citation).
  - A SparkToro and Gumshoe.ai study of 2,961 runs found the same brand list came back less than 1% of the time, so one answer, or one "rank", proves little.
  - The steadier signal is how often a brand appears across many runs. That study is not peer reviewed, and one of its authors sells a tracking tool.
  - Start free. Ahrefs' checker needs no signup, Search Console counts impressions in Google's AI features, and GA4 shows visits from AI assistants.
  - Before paying, ask which prompts, how many runs, which countries and languages, and whether you can export your data.
sources:
  - title: Free AI Visibility Checker by Ahrefs
    url: https://ahrefs.com/ai-visibility-checker
  - title: AI Recommendations Change With Nearly Every Query (Search Engine Journal, 30 January 2026)
    url: https://www.searchenginejournal.com/ai-recommendations-change-with-nearly-every-query-sparktoro/566242
  - title: AI features and your website (Google Search Central)
    url: https://developers.google.com/search/docs/appearance/ai-features
  - title: Introducing Search Generative AI performance reports in Search Console (Google Search Central Blog, 3 June 2026)
    url: https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports
  - title: A Reflection on SEO and AI Search in 2025 (Lily Ray)
    url: https://lilyraynyc.substack.com/p/a-reflection-on-seo-and-ai-search
  - title: Best AI Brand Monitoring Tools in 2026 (Dupple, prices as of June 2026)
    url: https://dupple.com/learn/best-ai-brand-monitoring-tools
faq:
  - question: What is an AI visibility tool?
    answer: Software that sends a list of questions to AI platforms such as ChatGPT, Gemini, Perplexity and Google's AI features, then records whether the answers name or link to your brand. Most also show which sites the AI cited alongside you.
  - question: What is the difference between a mention and a citation?
    answer: A mention means the AI named your brand in its answer. A citation means it linked to your website as a source. Ahrefs says both matter but need different strategies, and its Brand Radar tracks them separately.
  - question: Can I check my AI visibility for free?
    answer: Yes, in three ways. Ahrefs offers a free checker with no signup that shows a limited preview. Search Console has a generative AI report with impressions in AI Overviews and AI Mode. GA4 can show visits that arrive from AI assistants.
  - question: Why do AI tools give a different answer each time?
    answer: Generative systems do not return a fixed list. In the SparkToro and Gumshoe.ai study, ChatGPT and Google's AI features gave the same brand list less than 1% of the time for the same prompt. Order and list length also changed.
  - question: Do I need a paid tool for a small business?
    answer: Probably not at first. Google says there are no additional requirements to appear in AI Overviews or AI Mode, and the free checks show a baseline. This is our view. A paid plan may suit an agency with many clients or a brand in a crowded category.
  - question: Does Google want special optimisation for AI features?
    answer: No. Google says no special optimisation or new markup is needed. A page must be indexed and eligible to appear in Search with a snippet, and Google recommends standard SEO fundamentals.
---

A new kind of software promises to tell you whether ChatGPT, Gemini, Perplexity and Google's AI features name your business when someone asks a question. Plans range from a few dozen dollars a month to enterprise contracts. Before you pay, it helps to know what these tools count, how far one reading can be trusted, and what you can check for nothing.

## What an AI visibility tool does

The method is simple. You, or the vendor, choose a list of prompts such as "best accounting software for a small business". The tool sends each prompt to several AI platforms, reads the answers and records two things. A **mention** is when the answer names your brand. A **citation** is when it links to your site as a source. Ahrefs, which sells one of these tools, draws the same line and says the two need different strategies.

<figure style="margin:32px 0">
<svg class="rbg" style="display:block;width:100%;max-width:560px;height:auto" viewBox="0 0 560 150" role="img" aria-labelledby="rbg-a1-title rbg-a1-desc" xmlns="http://www.w3.org/2000/svg">
<title id="rbg-a1-title">How an AI visibility tool produces its numbers</title>
<desc id="rbg-a1-desc">A four-step flow. A list of prompts is sent to AI platforms, repeatedly. The answers are read for mentions of your brand and links to your site. The result is reported as the share of answers in which your brand appears.</desc>
<style>
.rbg text { font-family: "Instrument Sans", system-ui, -apple-system, "Segoe UI", sans-serif; }
.rbg .lab { font-size: 16px; font-weight: 500; fill: var(--ink, #1B1B18); }
.rbg .sub { font-size: 14px; font-weight: 400; fill: var(--ink-muted, #5A5850); }
.rbg .box { fill: none; stroke: var(--ink, #1B1B18); stroke-width: 2; }
.rbg .base { fill: none; stroke: var(--terracotta, #B5562F); stroke-width: 2.5; }
.rbg .arr { fill: none; stroke: var(--ink, #1B1B18); stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }
</style>
<rect class="box" x="10" y="30" width="118" height="90" rx="12"/>
<text class="lab" x="24" y="62">Prompt</text>
<text class="lab" x="24" y="82">list</text>
<text class="sub" x="24" y="106">your choice</text>
<path class="arr" d="M134 75 H148 M142 69 L150 75 L142 81"/>
<rect class="box" x="154" y="30" width="118" height="90" rx="12"/>
<text class="lab" x="168" y="62">AI</text>
<text class="lab" x="168" y="82">platforms</text>
<text class="sub" x="168" y="106">run many times</text>
<path class="arr" d="M278 75 H292 M286 69 L294 75 L286 81"/>
<rect class="box" x="298" y="30" width="118" height="90" rx="12"/>
<text class="lab" x="312" y="62">Mentions</text>
<text class="lab" x="312" y="82">and links</text>
<text class="sub" x="312" y="106">counted</text>
<path class="arr" d="M422 75 H436 M430 69 L438 75 L430 81"/>
<rect class="base" x="442" y="30" width="108" height="90" rx="12"/>
<text class="lab" x="456" y="62">Share of</text>
<text class="lab" x="456" y="82">answers</text>
<text class="sub" x="456" y="106">reported</text>
</svg>
<figcaption style="margin-top:12px;font-size:12px;line-height:16px;font-weight:500;letter-spacing:0.02em;color:var(--ink-muted)">Figure 1. The basic design of most AI visibility tools. Vendors differ in who writes the prompts and how many times each one runs.</figcaption>
</figure>

## Why one answer proves little

SparkToro and Gumshoe.ai ran 12 brand-recommendation prompts, covering things like headphones and chef's knives, 60 to 100 times each. They used ChatGPT, Claude and Google's AI features, for 2,961 runs in all. As Search Engine Journal reported, ChatGPT and Google matched the same brand list less than 1% of the time. The order and the length of the list varied too.

What held steadier was frequency. Bose, Sony, Sennheiser and Apple appeared in 55% to 77% of headphone responses. The authors' conclusion was that how often a brand appears across many runs is a better signal than a single position, and that tools reporting an "AI ranking position" can mislead.

Read that with care. Gumshoe.ai sells AI tracking tools, and Rand Fishkin disclosed the partnership. The study is not peer reviewed. Its authors say open questions remain about how many runs are enough, and whether API calls vary the way typed prompts do. It is the best public evidence we found, not a settled result.

<figure class="ph"><img src="/images/articles/ai-visibility-tools-guide-1.jpg" alt="Hands at a laptop and a notebook beside a printed sheet of charts on a dark desk" width="1600" height="900" loading="lazy" decoding="async"><figcaption>Photo: Lukas Blazek on Pexels</figcaption></figure>

## Free checks to try first

| Check | What it shows | Cost | Blind spot |
| --- | --- | --- | --- |
| Ahrefs AI Visibility Checker | Mentions across ChatGPT, Gemini, Perplexity, Copilot and Google's AI features, plus top five topics, domains and pages | Free, no signup, according to Ahrefs | One snapshot, top five only, and Ahrefs' own prompt set |
| Search Console generative AI report | Impressions in AI Overviews and AI Mode by page, country, device and date | Free | Google only, and impressions rather than clicks |
| GA4 | Visits that arrive from ChatGPT and other assistants | Free | Only people who click, and some visits show as Direct |

Our guides cover the [Search Console report](/ai-search/search-console-generative-ai-report/) and [tracking AI traffic in GA4](/ai-search/track-ai-search-traffic-ga4/). A simple test of your own: run the Ahrefs checker for your brand and a competitor, then run it again a week later. If the two runs disagree, you have seen the variability above first-hand.

## Five questions before you pay

1. **Which prompts, and who chose them?** Ahrefs says its prompts come from real Google searches, not invented ones. If you supply the list, the result is only as good as the list, and it may not resemble what your buyers ask.
2. **How many runs per prompt?** You want a share across many runs, not one answer with a rank beside it.
3. **Which platforms are included?** Ahrefs, for example, sells plans by platform, so check which ones your tier covers.
4. **Which countries and languages?** Ahrefs' checker page does not say which countries or languages its prompts cover. Ask any vendor whether Malay prompts and Malaysian locations are included.
5. **Can you export the data and leave?** A trend line is only useful if you keep it.

## Is it worth the money?

Ahrefs lists Brand Radar plans from about US$199 to US$699 a month, depending on the platforms. Comparison sites list entry plans from around US$29 a month, but prices change often and those sites may use affiliate links. SEO consultant Lily Ray has argued that there are now far more AI search tools than paying users, and that the big SEO suites have added their own versions.

Google, for its part, says no additional requirements or special optimisation apply to AI Overviews and AI Mode. Our view: for a small site, the free checks give you a baseline, and a monthly plan adds little until you have a reason to track many prompts or competitors. For the wider argument, see [GEO vs SEO in 2026](/ai-search/geo-vs-seo-2026/).

## What we do not know

We did not buy or test any paid tool, so we cannot say how accurate their sampling is. We do not know how many runs make a reading reliable, and the SparkToro authors say the same. The vendor pages we read do not say whether Malay-language or Malaysia-specific prompts are covered. And we found no independent evidence that paying for tracking raises your visibility. Tracking measures. It does not improve anything by itself.
