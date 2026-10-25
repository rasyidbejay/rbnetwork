---
title: "GEO vs SEO in 2026: what Google and the data say"
description: Google says optimising for AI search is still SEO. Studies show AI citations and clicks drifting from rankings. We weigh both and say what to do about it.
topic: ai-search
type: analysis
pubDate: 2026-10-25T09:30:00.000Z
draft: false
cover: /images/articles/geo-vs-seo-2026.jpg
coverAlt: A laptop on a wooden desk in low light, its screen showing an AI search box that asks "What can I help with?"
coverCredit: Aerps.com on Unsplash
summary:
  - Google's guide, last updated in July 2026, says optimising for AI features in Google Search is still SEO, because those features draw on its core ranking systems.
  - The same guide says llms.txt files, content chunking, rewriting for AI and special markup are not needed for Google Search.
  - Third-party data points the other way at the edges. Ahrefs found 38% of AI Overview citations ranked in Google's top 10 in early 2026, down from 76% in a 2025 study using a different method.
  - Clicks per search fall when AI summaries appear, according to Pew Research and Ahrefs. Google says total clicks are relatively stable.
  - Our reading is that GEO is not a separate discipline for Google. It is SEO with a second scoreboard, being cited and described accurately.
sources:
  - title: Optimizing your website for generative AI features on Google Search (Google Search Central, updated 10 July 2026)
    url: https://developers.google.com/search/docs/fundamentals/ai-optimization-guide
  - title: "GEO: Generative Engine Optimization (Aggarwal et al., KDD 2024)"
    url: https://arxiv.org/abs/2311.09735
  - title: Google AI Overview Citations From Top-Ranking Pages Drop Sharply (Search Engine Journal, 2 March 2026)
    url: https://www.searchenginejournal.com/google-ai-overview-citations-from-top-ranking-pages-drop-sharply/568637/
  - title: ChatGPT May Scrape Google, but the Results Don't Match (Ahrefs, 3 September 2025)
    url: https://ahrefs.com/blog/chatgpt-google-citations
  - title: Google users are less likely to click on links when an AI summary appears in the results (Pew Research Center, 22 July 2025)
    url: https://www.pewresearch.org/short-reads/2025/07/22/google-users-are-less-likely-to-click-on-links-when-an-ai-summary-appears-in-the-results/
  - title: "Update: AI Overviews Reduce Clicks by 58% (Ahrefs, 4 February 2026)"
    url: https://ahrefs.com/blog/ai-overviews-reduce-clicks-update
  - title: AI in Search is driving more queries and higher quality clicks (Google, 6 August 2025)
    url: https://blog.google/products/search/ai-search-driving-more-queries-higher-quality-clicks/
faq:
  - question: What is the difference between GEO and SEO?
    answer: SEO aims to rank pages in search results and win clicks. GEO, generative engine optimisation, aims to have your content cited and described accurately in AI-generated answers. For Google Search, Google says the two are the same work, because its AI features use its core ranking systems. The main difference is how you measure success.
  - question: Does Google say GEO or AEO is separate from SEO?
    answer: No. Google's guide to generative AI features says that, from Google Search's perspective, optimising for generative AI search is optimising for the search experience, and so still SEO. It also asks site owners to review third-party AEO and GEO advice carefully.
  - question: Do I need an llms.txt file to appear in AI Overviews?
    answer: No. Google says Google Search does not use llms.txt files or other special AI text files, and that creating one neither helps nor harms visibility in Google Search. Other AI services may use such files.
  - question: Do pages that rank in Google's top 10 get cited in AI Overviews?
    answer: Often, but less reliably than before. An Ahrefs study reported by Search Engine Journal in March 2026 found that 38% of AI Overview citations ranked in the top 10 for the same query. Ahrefs says its method changed from an earlier 2025 study that reported 76%, so the two figures are not directly comparable.
  - question: Do AI Overviews reduce clicks to websites?
    answer: Independent studies say clicks per search fall. Pew Research found users clicked a normal result on 8% of visits when an AI summary appeared, against 15% without one. Ahrefs linked AI Overviews with a 58% lower click-through rate for the top result. Google disputes the methods and says total organic clicks are relatively stable.
  - question: What is the GEO research paper?
    answer: The term comes from a 2023 research paper, GEO, Generative Engine Optimization, by Pranjal Aggarwal and colleagues, published at the KDD conference in 2024. It tested content changes on a research benchmark and reported visibility gains of up to 40% in generative engine responses. It was a benchmark study, not a test on Google's live AI features.
---

Ask ten marketers whether GEO replaces SEO and you will get eleven answers. The question matters because it decides where a small team spends its next month. So we went to the two kinds of evidence that should settle it: what Google itself says, and what independent studies measure.

The short answer: for Google Search, GEO is not a separate discipline. Google says so in writing, and its explanation holds up. But the data shows the scoreboard changing, and that part of the GEO argument is right. Where we are reading between the lines, we say so.

## What the terms mean

- **SEO**, search engine optimisation: helping pages get found, ranked and clicked in search results.
- **AEO**, answer engine optimisation: helping a page become the direct answer to a question, in a featured snippet, a voice reply or an AI answer.
- **GEO**, generative engine optimisation: helping content get cited, and described accurately, inside answers that an AI writes.

The term GEO comes from a 2023 paper by Pranjal Aggarwal and colleagues, published at the KDD conference in 2024. It reported that rewriting content could raise visibility in generative engine responses by up to 40%. That figure came from a research benchmark built by the authors, not from Google's live AI features, so it is a useful idea rather than a forecast for your site.

## What Google says

Google's guide to generative AI features in Search, last updated on 10 July 2026, is unusually direct. Its key claims:

- **It is still SEO.** Google says its AI features are rooted in its core ranking and quality systems. From Google Search's perspective, optimising for generative AI search is optimising for search, and "thus still SEO".
- **Retrieval comes from the index.** AI Overviews and AI Mode use grounding: they retrieve pages through Google's ranking systems and cite them. They also use query fan-out, running related searches to gather more sources.
- **Eligibility is the same as Search.** A page must be indexed and eligible to show with a snippet, and the site must be included in the Search generative AI setting in Search Console.
- **Some popular tactics are unnecessary.** Google says Search does not use llms.txt files, that you do not need to chunk content or rewrite it for AI, that inauthentic mentions are less useful than they seem, and that no special schema is required. Structured data is still worth using for rich results.
- **Fan-out is not a content plan.** Creating pages for every variation of a query mainly to manipulate AI answers breaks its scaled content abuse policy.

The guide's emphasis falls on what it calls non-commodity content: first-hand experience, original data or expert judgement that a summary of other pages cannot reproduce.

## What the data shows

Google's explanation predicts that ranking well and being cited by AI should go together. Independent studies partly agree. Treat the vendor figures below as directional: each uses its own sample and method, and most come from companies that sell SEO tools.

**Rankings and AI Overview citations are drifting apart.** In July 2025, Ahrefs found that 76% of pages cited in AI Overviews also ranked in Google's top 10 for the same query. An updated study of 863,000 keywords, reported in March 2026, put the figure at 38%. Ahrefs says its detection improved, so the two numbers are not like for like. A separate BrightEdge analysis found lower overlap again with a different method. The direction is consistent; the size is uncertain.

<figure style="margin:32px 0">
<svg class="rbg" style="display:block;width:100%;max-width:560px;height:auto" viewBox="0 0 560 226" role="img" aria-labelledby="rbg-e-title rbg-e-desc" xmlns="http://www.w3.org/2000/svg">
<title id="rbg-e-title">Where pages cited in AI Overviews rank in Google</title>
<desc id="rbg-e-desc">A bar chart from an Ahrefs study of 863,000 keywords reported in March 2026. 38% of pages cited in AI Overviews ranked in Google's top 10 for the same query, 31.2% ranked between 11 and 100, and 31.0% ranked beyond position 100.</desc>
<style>
.rbg text { font-family: "Instrument Sans", system-ui, -apple-system, "Segoe UI", sans-serif; }
.rbg .lab { font-size: 18px; font-weight: 500; fill: var(--ink, #1B1B18); }
.rbg .sub { font-size: 16px; font-weight: 400; fill: var(--ink-muted, #5A5850); }
.rbg .solid { fill: var(--ink, #1B1B18); }
.rbg .accent { fill: var(--terracotta, #B5562F); }
</style>
<text class="lab" x="20" y="26">Ranked 1 to 10</text>
<rect class="accent" x="20" y="36" width="304" height="26" rx="6"/>
<text class="lab" x="334" y="55">38%</text>
<text class="lab" x="20" y="100">Ranked 11 to 100</text>
<rect class="solid" x="20" y="110" width="249.6" height="26" rx="6"/>
<text class="lab" x="279.6" y="129">31.2%</text>
<text class="lab" x="20" y="174">Ranked beyond 100</text>
<rect class="solid" x="20" y="184" width="248" height="26" rx="6"/>
<text class="lab" x="278" y="203">31.0%</text>
</svg>
<figcaption style="margin-top:12px;font-size:12px;line-height:16px;font-weight:500;letter-spacing:0.02em;color:var(--ink-muted)">Figure 1. Google ranking of pages cited in AI Overviews, from Ahrefs' study of 863,000 keywords as reported by Search Engine Journal on 2 March 2026. A July 2025 Ahrefs study put the top 10 share at 76%, using a method Ahrefs says is not directly comparable.</figcaption>
</figure>

**Other AI engines diverge further.** Ahrefs' September 2025 test of 3,311 short queries found only 10% of the URLs ChatGPT cited were in Google's top 10. At the level of whole domains, overlap rose to 31.8% for the top 10 and 53.5% for the top 100. Ahrefs suggests ChatGPT applies its own re-ranking, which is a hypothesis rather than a confirmed mechanism. Our reading: a site's overall reputation travels between engines better than any single page does.

**Clicks per search fall when AI summaries appear.** Pew Research tracked the browsing of 900 US adults in March 2025. Users clicked a normal result on 8% of visits to pages with an AI summary, against 15% without one, and clicked a link inside the summary on just 1% of visits. Google called the method flawed. Ahrefs' February 2026 update linked AI Overviews with a 58% lower click-through rate for the top-ranking page, on desktop, comparing December 2023 with December 2025. Ahrefs presents this as a correlation, not proof of cause.

<figure style="margin:32px 0">
<svg class="rbg" style="display:block;width:100%;max-width:560px;height:auto" viewBox="0 0 560 226" role="img" aria-labelledby="rbg-f-title rbg-f-desc" xmlns="http://www.w3.org/2000/svg">
<title id="rbg-f-title">How often Google users clicked a link, with and without an AI summary</title>
<desc id="rbg-f-desc">A bar chart from Pew Research Center's study of 900 US adults in March 2025. Users clicked a normal search result on 15% of visits to results pages without an AI summary and on 8% of visits to pages with one. They clicked a link inside the AI summary on 1% of visits.</desc>
<style>
.rbg text { font-family: "Instrument Sans", system-ui, -apple-system, "Segoe UI", sans-serif; }
.rbg .lab { font-size: 18px; font-weight: 500; fill: var(--ink, #1B1B18); }
.rbg .sub { font-size: 16px; font-weight: 400; fill: var(--ink-muted, #5A5850); }
.rbg .solid { fill: var(--ink, #1B1B18); }
.rbg .accent { fill: var(--terracotta, #B5562F); }
</style>
<text class="lab" x="20" y="26">Normal result, no AI summary</text>
<rect class="solid" x="20" y="36" width="400" height="26" rx="6"/>
<text class="lab" x="430" y="55">15%</text>
<text class="lab" x="20" y="100">Normal result, AI summary shown</text>
<rect class="accent" x="20" y="110" width="213.33" height="26" rx="6"/>
<text class="lab" x="243.33" y="129">8%</text>
<text class="lab" x="20" y="174">Link inside the AI summary</text>
<rect class="solid" x="20" y="184" width="26.67" height="26" rx="6"/>
<text class="lab" x="56.67" y="203">1%</text>
</svg>
<figcaption style="margin-top:12px;font-size:12px;line-height:16px;font-weight:500;letter-spacing:0.02em;color:var(--ink-muted)">Figure 2. Share of visits to a Google results page that ended in a click, from Pew Research Center's browsing study of 900 US adults (March 2025). Google disputes the study's method.</figcaption>
</figure>

**Google's counterpoint.** In August 2025, Google's head of Search, Liz Reid, wrote that total organic clicks from Search are relatively stable year on year, and that slightly more clicks are now "quality clicks", where people do not quickly return. The post gave no figures, so it is hard to test. Both things can be true at once: fewer clicks per search, more searches overall.

## Where SEO and GEO really differ

Putting the two kinds of evidence together, here is our reading of what is the same and what is new.

| | SEO | GEO |
| --- | --- | --- |
| Goal | Rank and earn the click | Be cited and described accurately |
| Foundation | Indexable, useful, original pages | The same, according to Google |
| Unit that wins | A page for a query | A passage or fact, often gathered by fan-out across several queries |
| Measured by | Rankings, clicks, click-through rate | AI impressions, citations, brand mentions |
| Google's tool | Performance report | Generative AI performance report (impressions only) |
| Beyond Google | Bing and other search engines | ChatGPT, Perplexity and others, each with its own selection |

The foundation is shared. The difference is the scoreboard, and the fact that other AI engines do not simply copy Google's rankings. A team that already does careful SEO is most of the way to GEO. A team that buys "GEO hacks" while neglecting the basics is building on sand.

<figure style="margin:32px 0">
<svg class="rbg" style="display:block;width:100%;max-width:560px;height:auto" viewBox="0 0 560 290" role="img" aria-labelledby="rbg-g-title rbg-g-desc" xmlns="http://www.w3.org/2000/svg">
<title id="rbg-g-title">SEO and GEO share one foundation and keep two scoreboards</title>
<desc id="rbg-g-desc">A diagram with one wide foundation block at the bottom labelled shared foundation: indexable pages, original content, clear structure, accurate business data. Two blocks sit on top of it. The left block is the SEO scoreboard: rankings, clicks and click-through rate. The right block is the GEO scoreboard: citations, AI impressions and how accurately your brand is described.</desc>
<style>
.rbg text { font-family: "Instrument Sans", system-ui, -apple-system, "Segoe UI", sans-serif; }
.rbg .lab { font-size: 18px; font-weight: 500; fill: var(--ink, #1B1B18); }
.rbg .sub { font-size: 16px; font-weight: 400; fill: var(--ink-muted, #5A5850); }
.rbg .box { fill: none; stroke: var(--ink, #1B1B18); stroke-width: 2; }
.rbg .base { fill: none; stroke: var(--terracotta, #B5562F); stroke-width: 2.5; }
.rbg .seed { fill: var(--terracotta, #B5562F); }
</style>
<rect class="box" x="10" y="10" width="262" height="140" rx="16"/>
<text class="lab" x="32" y="46">SEO scoreboard</text>
<text class="sub" x="32" y="78">Rankings</text>
<text class="sub" x="32" y="104">Clicks</text>
<text class="sub" x="32" y="130">Click-through rate</text>
<rect class="box" x="288" y="10" width="262" height="140" rx="16"/>
<text class="lab" x="310" y="46">GEO scoreboard</text>
<text class="sub" x="310" y="78">Citations</text>
<text class="sub" x="310" y="104">AI impressions</text>
<text class="sub" x="310" y="130">Accurate description</text>
<rect class="base" x="10" y="166" width="540" height="114" rx="16"/>
<circle class="seed" cx="40" cy="198" r="7"/>
<text class="lab" x="58" y="204">Shared foundation</text>
<text class="sub" x="32" y="238">Indexable pages, original content, clear structure,</text>
<text class="sub" x="32" y="264">accurate business data</text>
</svg>
<figcaption style="margin-top:12px;font-size:12px;line-height:16px;font-weight:500;letter-spacing:0.02em;color:var(--ink-muted)">Figure 3. Our model of how SEO and GEO relate, based on Google's guide to generative AI features and the studies above. An editorial summary, not a Google diagram.</figcaption>
</figure>

## What to do about it

1. **Keep the foundation solid.** Make sure important pages are indexed, show a snippet and are not excluded in the Search generative AI setting. This is the entry ticket for both scoreboards.
2. **Publish what others cannot copy.** Original data, first-hand testing and clear expert judgement are what Google's guide asks for, and they are the easiest things for an AI answer to cite by name.
3. **Answer the question early and plainly.** A direct answer near the top, with the facts and their sources, serves readers and makes a passage easy to quote. Google says you do not need to chunk content, and you do not; this is simply clear writing.
4. **Cover the topic, not every phrasing.** Fan-out rewards pages that handle the related questions a reader will have. Separate thin pages for each variation risk a spam policy breach.
5. **Measure both scoreboards.** Track clicks in the Performance report and AI impressions in [the generative AI report](/ai-search/search-console-generative-ai-report/). For other engines, test a fixed set of questions by hand each month and note who is cited.

## Does it apply in Malaysia?

Google's guide applies worldwide. None of the studies above used Malaysian data: Pew surveyed US adults, and the Ahrefs datasets are not broken down by country in the reports we read. So the direction is likely similar here, but the size is unknown. Press reports say AI Mode has supported Malay since late 2025, as we covered in [our analysis of Google's new search](/ai-search/google-ai-search-redesign-malaysia/).

## What we still do not know

We do not know how Google chooses which of several eligible pages to cite in an AI Overview, beyond its general description of grounding and fan-out. We do not know whether the drop in ranking overlap reflects a real change in Google's selection or mostly better measurement. Nobody outside Google can verify the claim that clicks are stable and of higher quality. And there is no public study of how Malay-language content is cited compared with English. We will update this piece as better evidence appears.
