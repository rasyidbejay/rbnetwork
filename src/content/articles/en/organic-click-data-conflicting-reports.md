---
title: Do AI answers cost clicks? Why the data disagrees
description: One report says organic click share hit a 15-month high, another says Google clicks fell 15%. Why both can be true, and how to read click data for your site.
topic: seo
type: analysis
pubDate: 2026-11-06T21:53:00.000Z
updatedDate: ''
draft: false
summary:
  - Semrush reported US desktop organic click share rising to 46.11% in September 2026. SEOcrawl AI reports Google organic clicks down 15% year on year across 16,661 sites.
  - The studies count different things. One counts the share of searches that end in an organic click, one counts clicks to a fixed set of sites, and others count click-through rate on chosen queries.
  - A rising click share can sit alongside a falling click count for a typical site if clicks concentrate on larger sites. That is one possible explanation, not a finding.
  - None of the studies we found measures Malaysia, so check your own Search Console data.
sources:
  - title: Google organic click share reaches a 15-month high (Search Engine Land, 4 November 2026)
    url: https://searchengineland.com/google-organic-click-share-15-month-high-report-500595
  - title: The State of AI vs. Organic Traffic 2026 (SEOcrawl AI)
    url: https://seocrawl.ai/reports/seocrawl-ai-traffic-vs-organic-study-2026.pdf
  - title: Datos State of Search Q1 2026 report coverage (MediaPost)
    url: https://www.mediapost.com/publications/article/414839/
  - title: Google AI Overviews drive a drop in organic and paid CTR (Search Engine Land, Seer Interactive study)
    url: https://searchengineland.com/google-ai-overviews-drive-drop-organic-paid-ctr-464212
  - title: Paid search click share doubles as organic clicks fall (Search Engine Land, Similarweb data, Aleyda Solis)
    url: https://searchengineland.com/paid-search-clicks-double-organic-clicks-fall-study-469519
  - title: Google performance reports show a weird spike in clicks for some sites (Search Engine Roundtable, 3 November 2026)
    url: https://seroundtable.com/google-performance-reports-spike-clicks-42448.html
faq:
  - question: Do AI answers reduce clicks to websites?
    answer: Some studies say so and some do not, because they measure different things. Seer found organic click-through rate on queries with an AI Overview fell from 1.76% to 0.61%, while Semrush reports a higher share of US desktop searches ending in an organic click. Neither covers Malaysia.
  - question: Why do these reports contradict each other?
    answer: They differ in unit, population, device and period. A share of searches, a count of clicks to a fixed group of sites and a click-through rate on chosen queries can all move in different directions at once.
  - question: Can click share rise while my traffic falls?
    answer: Yes. Click share is a share of all searches, not a count for your site. SEOcrawl reports that the top 1% of sites in its group produce about 70% of clicks, so a typical site can lose clicks while the total holds up. That is one possible explanation.
  - question: Who funds these studies?
    answer: Mostly search and SEO vendors, who publish from their own tools. Search Engine Land, which reported the Semrush figures, says on its pages that it is owned by Semrush. Treat vendor numbers as directional.
  - question: How do I measure the effect on my own site?
    answer: In Search Console, compare equal periods and look at clicks and impressions separately. Flat impressions with falling clicks suggests searches are being answered on the results page. Treat the days around 3 November with care, because Search Console showed unexplained click spikes for some sites.
  - question: Is there data for Malaysia?
    answer: We found none in these studies. Semrush's report covers the US and 32 European countries on desktop, so use your own Search Console data for Malaysian searches.
---

Recent reports point in opposite directions on whether AI answers cost websites clicks. One says organic click share has reached a 15-month high. Another says Google sent 15% fewer clicks than a year earlier. Both can be right, and the reason is worth understanding before you quote either.

## What each report measured

| Report | What it counts | Population and period | Headline |
| --- | --- | --- | --- |
| Semrush State of Search Q3 2026 (via Search Engine Land) | Share of Google searches that end in an organic click | Desktop users in the US and 32 European countries, July 2025 to September 2026 | US organic click share rose from 39.74% in July to 46.11% in September, a 15-month high. Zero-click searches fell from 24.97% to 22.99%. |
| SEOcrawl AI | Google organic clicks to a fixed group of sites | 16,661 sites, September 2025 to August 2026 against the 12 months before | Clicks down 15%, median site down 20.1%, impressions up 0.4% |
| Datos State of Search Q1 2026 (via MediaPost) | Share of searches that end in an organic click | Desktop clickstream, US, December 2025 to March 2026 | US organic click share rose from 42.0% to 44.9%. Zero-click searches fell from 24.5% to 22.4%. |
| Seer Interactive (via Search Engine Land) | Organic click-through rate on chosen queries | 3,119 informational queries, 42 organisations, June 2024 to September 2025 | Organic click-through rate on queries with an AI Overview fell from 1.76% to 0.61% |
| Similarweb data, analysed by Aleyda Solis | Click share by result type | Four US verticals, January 2025 against January 2026 | Classic organic click share down 11 to 23 percentage points |

We read the Semrush figures as reported by Search Engine Land and did not open the full report. For Europe, the same coverage gives an organic click share of 49.56% and zero-click searches of 20.99% in September.

## Why they can all be true

1. **A share is not a count.** Click share says what fraction of searches end in an organic click somewhere. It does not say your site received more of them. SEOcrawl counts actual clicks to its group of sites.
2. **Clicks may concentrate.** SEOcrawl reports that the top 1% of sites in its group produce about 70% of clicks, and that the total is held up by the largest sites while the typical site lost about one click in five. That would let a share rise while a typical site falls. It is a possible explanation, not something any of these studies proves.
3. **Device and place differ.** Semrush's report is desktop only, and covers the US and Europe. Mobile and Malaysia are outside it.
4. **Queries differ.** Seer looked at informational queries. Solis looked at four verticals. Neither tells you about your own queries.
5. **Vendors publish what their tools see.** Search Engine Land says on its pages that it is owned by Semrush. That is not a reason to doubt the figures, but it is a reason to label them directional.

## A checklist for any click statistic

Before you repeat a number, ask five things. What is the unit, a share, a count or a rate? Which people, sites or queries does it cover? Which device and country? Which period? Who produced it, and what do they sell? If a headline does not answer these, hold back.

## Measure your own site instead

Your own data answers the only question that matters for you: what happened to the clicks on your pages. It also shows which of the studies above looks most like your situation, if any does.

In Search Console, open the Performance report and compare two equal periods. Then:

- **Split clicks from impressions.** SEOcrawl suggests checking which queries lost clicks while keeping impressions, because those may be answered on the results page.
- **Look at absolute clicks lost,** not only percentages, and separate branded from non-branded queries. A small percentage on a page that carries most of your traffic can matter more than a large one on a page nobody visits.
- **Compare by page type.** Guides, news and product pages may behave differently, and one blended number hides that.
- **Be careful around 3 November.** Search Engine Roundtable reported unexplained click spikes in Search Console for some sites over a couple of days, and in one case the interface and the API disagreed. Google's cause is not confirmed in the coverage we read.

Our guides to [Search Console's generative AI report](/ai-search/search-console-generative-ai-report/) and [tracking AI traffic in GA4](/ai-search/track-ai-search-traffic-ga4/) show what each tool can and cannot see. For the buying-search angle, see [how AI Overviews reach commercial searches](/seo/ai-overviews-commercial-searches/).

## What we do not know

We found no verified click data for Malaysia in any of these studies. We also did not open the full Semrush report. If your own data and a headline disagree, trust your data and find out why.
