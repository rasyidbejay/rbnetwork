---
title: How to read Search Console's generative AI report
description: Search Console now shows how often your pages appear in AI Overviews and AI Mode. Here is what the report counts, what it leaves out and how to read it.
topic: ai-search
type: guide
pubDate: 2026-10-25T09:00:00.000Z
draft: false
cover: /images/articles/search-console-generative-ai-report.jpg
coverAlt: A close-up of an analytics dashboard on a laptop screen, with tiles for click-through rate, cost per conversion and quality score
coverCredit: Stephen Dawson on Unsplash
summary:
  - Google announced the generative AI performance report on 3 June 2026 and says it reached all websites worldwide on 31 August.
  - It covers AI Overviews and AI Mode, and its only metric is impressions. It shows no clicks, click-through rate or position.
  - Its data is part of the Web results in the main Performance report, so never add the two totals together.
  - Inside an AI Overview every link gets the position of the whole block, so position says little about AI visibility.
  - The Search generative AI control in Settings can exclude a site from these features. Google says it is not used as a ranking signal elsewhere in Search.
sources:
  - title: Generative AI performance report (Search) (Search Console Help)
    url: https://support.google.com/webmasters/answer/16984139
  - title: Introducing Search Generative AI performance reports in Search Console (Google Search Central Blog, 3 June 2026)
    url: https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports
  - title: Search generative AI control (Search Console Help)
    url: https://support.google.com/webmasters/answer/16908024
  - title: What are impressions, position, and clicks? (Search Console Help)
    url: https://support.google.com/webmasters/answer/7042828
  - title: Announcing web multimodal Search performance reporting in Search Console (Google Search Central Blog, 24 September 2026)
    url: https://developers.google.com/search/blog/2026/09/web-multimodal-in-sc
  - title: Google Admits Search Console Reporting For AI Search Is Inadequate (Search Engine Journal, 13 September 2026)
    url: https://www.searchenginejournal.com/google-admits-search-console-reporting-for-ai-search-is-inadequate/
faq:
  - question: What does the Search Console generative AI report show?
    answer: It shows how many times links to your site appeared in Google's generative AI features on Search, currently AI Overviews and AI Mode. You can break those impressions down by page, country, device and date, and filter by text or image-based (multimodal) searches.
  - question: Does the generative AI report show clicks?
    answer: No. Google's help page describes impressions only. Clicks on links inside AI Overviews and AI Mode are counted in the main Performance report, but Search Console does not currently separate them from other web clicks.
  - question: Why can't I see the generative AI report in Search Console?
    answer: Google says the report appears only when a site has received enough impressions in generative AI features. If it is missing, the site may not have enough data yet, or it may be excluded from these features in Settings.
  - question: Should I add generative AI impressions to my normal Search impressions?
    answer: No. The generative AI report draws on the same Web data as the main Performance report, so AI impressions are already included there. Adding the two totals counts them twice.
  - question: Does excluding my site from AI Overviews hurt my normal rankings?
    answer: Google says the Search generative AI control is not used as a ranking or inclusion signal for other parts of Search. Excluding the site removes it from AI Overviews, AI Mode and generative AI features in Discover, and you lose any traffic and impressions from them.
  - question: How is position counted for AI Overviews?
    answer: An AI Overview occupies one position on the results page, and every link inside it is given that same position. AI Mode uses the same method as a normal results page, and a follow-up question counts as a new query.
---

Since 31 August every website can see a new view in Search Console: how often its pages appear in Google's AI answers. That sounds like the measurement many site owners have been waiting for. In practice the report answers one narrow question well and leaves several others open.

This guide explains what the report counts, what it leaves out, and how to read it without fooling yourself. We covered the report briefly in [our piece on Google's new AI search](/ai-search/google-ai-search-redesign-malaysia/). Here we go deeper. Where we are reading between the lines, we say so.

## What the report is

Google announced the Search generative AI performance report on 3 June 2026 and first released it to a subset of websites. A note on the announcement now says it reached all websites worldwide on 31 August. Some trade press gave earlier dates for the wider rollout, so we use Google's own wording.

The report covers two features today:

- **AI Overviews**, the AI summary that can appear at the top of a normal results page.
- **AI Mode**, Google's conversational search.

Google says the list may change over time. Data from Search Labs experiments is excluded, and Discover has a separate generative AI report that this guide does not cover.

## What it measures, and what it leaves out

The report has one metric: **impressions**, defined as the number of times links to your site were shown to a user in a generative AI feature. You can group that number in four ways:

- **Pages**, by the final URL after redirects. Most data is credited to the canonical URL.
- **Countries**, by where the search came from.
- **Devices**, desktop, tablet or mobile.
- **Dates**, by day, week or month, in Pacific time.

There is also a search type filter. **Web: text-based** covers searches typed into the normal search box. **Web: multimodal**, added on 24 September, covers searches made with images: Google Lens, Circle to Search on Android, image uploads to Search and Chrome's "Search this image".

What is missing matters as much. The help page lists no clicks, no click-through rate and no average position for these features. Google's launch post says it may add metrics over time, but it gives no dates.

<figure style="margin:32px 0">
<svg class="rbg" style="display:block;width:100%;max-width:560px;height:auto" viewBox="0 0 560 300" role="img" aria-labelledby="rbg-c-title rbg-c-desc" xmlns="http://www.w3.org/2000/svg">
<title id="rbg-c-title">Where the generative AI report sits inside Search Console data</title>
<desc id="rbg-c-desc">A diagram of two nested boxes. The outer box is the Web search type of the Search performance report, which counts impressions, clicks, click-through rate and position for all web results. Inside it, a smaller box marks impressions from generative AI features, AI Overviews and AI Mode. The generative AI performance report shows only that inner part, and only impressions, so its total is already included in the outer report.</desc>
<style>
.rbg text { font-family: "Instrument Sans", system-ui, -apple-system, "Segoe UI", sans-serif; }
.rbg .lab { font-size: 18px; font-weight: 500; fill: var(--ink, #1B1B18); }
.rbg .sub { font-size: 16px; font-weight: 400; fill: var(--ink-muted, #5A5850); }
.rbg .box { fill: none; stroke: var(--ink, #1B1B18); stroke-width: 2; }
.rbg .inner { fill: none; stroke: var(--terracotta, #B5562F); stroke-width: 2.5; }
.rbg .seed { fill: var(--terracotta, #B5562F); }
</style>
<rect class="box" x="10" y="10" width="540" height="280" rx="16"/>
<text class="lab" x="34" y="46">Search performance report, Web</text>
<text class="sub" x="34" y="72">All web results: impressions, clicks, CTR, position</text>
<rect class="inner" x="34" y="100" width="492" height="166" rx="12"/>
<circle class="seed" cx="64" cy="134" r="7"/>
<text class="lab" x="82" y="140">Generative AI features</text>
<text class="sub" x="82" y="166">AI Overviews and AI Mode</text>
<text class="sub" x="58" y="210">The generative AI report shows this part only,</text>
<text class="sub" x="58" y="236">and only impressions. Its total is already</text>
<text class="sub" x="58" y="262">counted in the outer report.</text>
</svg>
<figcaption style="margin-top:12px;font-size:12px;line-height:16px;font-weight:500;letter-spacing:0.02em;color:var(--ink-muted)">Figure 1. The generative AI report is a filtered view of data that already sits in the Web search type of the Performance report. Based on Google's Search Console Help pages. The box sizes are illustrative, not to scale.</figcaption>
</figure>

## How Google counts impressions and position

Three counting rules explain most of the confusion we see.

- **One site, one impression per feature.** In the chart, several links from the same site inside one AI feature count as a single impression. Table totals are aggregated by property, or by page when you group by page, so the chart and table totals can differ. That is expected, not a bug.
- **An AI Overview is one position.** Google's definitions page says an AI Overview occupies a single position on the results page, and every link inside it gets that same position. Being the first or the fifth source in the summary looks identical.
- **AI Mode works like a results page.** Position follows the normal method, and a follow-up question is treated as a new query with its own impressions, positions and clicks.

Google's John Mueller acknowledged the limit in September, saying position for these features is "hard to do in a way that makes it useful", according to Search Engine Journal. The same report noted that an impression can count when the AI Overview loads even if the reader never scrolls to your link. Our reading: treat AI impressions as a measure of eligibility and reach, not attention.

<figure style="margin:32px 0">
<svg class="rbg" style="display:block;width:100%;max-width:560px;height:auto" viewBox="0 0 560 330" role="img" aria-labelledby="rbg-d-title rbg-d-desc" xmlns="http://www.w3.org/2000/svg">
<title id="rbg-d-title">How position is counted for links inside an AI Overview</title>
<desc id="rbg-d-desc">A simplified results page. At the top, an AI Overview block contains three source links: your page, site B and site C. All three are reported at position 1, the position of the whole block. Below it, two normal results are reported at positions 2 and 3.</desc>
<style>
.rbg text { font-family: "Instrument Sans", system-ui, -apple-system, "Segoe UI", sans-serif; }
.rbg .lab { font-size: 18px; font-weight: 500; fill: var(--ink, #1B1B18); }
.rbg .sub { font-size: 16px; font-weight: 400; fill: var(--ink-muted, #5A5850); }
.rbg .box { fill: none; stroke: var(--ink, #1B1B18); stroke-width: 2; }
.rbg .chip { fill: none; stroke: var(--ink-muted, #5A5850); stroke-width: 1.5; }
.rbg .mine { fill: none; stroke: var(--terracotta, #B5562F); stroke-width: 2.5; }
.rbg .seed { fill: var(--terracotta, #B5562F); }
.rbg .end { text-anchor: end; }
</style>
<rect class="box" x="10" y="10" width="540" height="190" rx="16"/>
<text class="lab" x="34" y="44">AI Overview</text>
<text class="sub end" x="526" y="44">one block, position 1</text>
<rect class="mine" x="34" y="62" width="492" height="36" rx="10"/>
<circle class="seed" cx="56" cy="80" r="6"/>
<text class="lab" x="72" y="86">Your page</text>
<text class="sub end" x="512" y="86">position 1</text>
<rect class="chip" x="34" y="106" width="492" height="36" rx="10"/>
<text class="lab" x="56" y="130">Site B</text>
<text class="sub end" x="512" y="130">position 1</text>
<rect class="chip" x="34" y="150" width="492" height="36" rx="10"/>
<text class="lab" x="56" y="174">Site C</text>
<text class="sub end" x="512" y="174">position 1</text>
<rect class="box" x="10" y="216" width="540" height="48" rx="12"/>
<text class="lab" x="34" y="246">Normal result</text>
<text class="sub end" x="526" y="246">position 2</text>
<rect class="box" x="10" y="274" width="540" height="48" rx="12"/>
<text class="lab" x="34" y="304">Normal result</text>
<text class="sub end" x="526" y="304">position 3</text>
</svg>
<figcaption style="margin-top:12px;font-size:12px;line-height:16px;font-weight:500;letter-spacing:0.02em;color:var(--ink-muted)">Figure 2. Every link inside an AI Overview takes the block's position, whatever its order in the summary. Simplified from Google's "What are impressions, position, and clicks?" help page.</figcaption>
</figure>

## Reading the report, step by step

1. **Check it exists.** Google says the report appears only once a site has enough impressions in AI features. On our own site, which is a few weeks old, it has not appeared yet. If yours is missing on an established site, open **Settings**, then **Search generative AI**, and confirm the site is not excluded.
2. **Set a long date range.** The newest data can be preliminary, shown as a dotted line, and may change within hours. Ignore the last day or two when you judge a trend.
3. **Start with Pages.** Sort by impressions to see which URLs AI features draw on, then sort the other way to find important pages that never appear. Both lists are useful.
4. **Read Countries and Devices.** This shows where your AI visibility comes from. A Malaysian site may find much of it comes from elsewhere, or the reverse.
5. **Switch the search type.** Compare text-based with multimodal. If you sell physical products, image searches may matter more than you expect.
6. **Compare with the main report, never add.** Open the Web results in the Performance report for the same pages and dates. The AI figure is a slice of that total, which gives you a rough share of visibility that came through AI features.
7. **Export with care.** Google notes that values shown as "~" or "-" become zeros in an export, and that the usual 1,000-row table limit applies.

## Where clicks fit

Clicks on external links in AI Overviews and AI Mode do count, but in the main Performance report, mixed in with every other web click. Search Console has no view that isolates them. For now the honest way to judge whether AI visibility brings visitors is indirect: compare AI impressions for a page with that page's clicks and conversions over time, and treat the link as a correlation, not proof. That is our suggestion, not Google's.

## The opt-out control

The same release added a setting at **Settings**, then **Search generative AI**. It has three options:

- **Include**, the default for every property. Your content can appear in and help ground AI responses.
- **Exclude.** Your links and content are kept out of AI Overviews, AI Mode and generative AI features in Discover, and you get no traffic or impressions from them.
- **Inherit from parent**, the default for child properties, which follows the nearest configured parent.

Google says the control is not used as a ranking or inclusion signal for other parts of Search, and changes usually apply within one to two days. Two limits are worth knowing. Excluded content may still help Google understand queries and languages. And the control does not cover AI model training, which Google-Extended handles. Use **noindex** only if you want a page out of Search entirely. Our view: for most sites the report is a reason to stay included and measure, not to leave.

## Does it apply in Malaysia?

Yes. Google's wording is "all websites worldwide", and the Countries view lets you see Malaysia on its own. We found no Malaysia-specific data on AI impressions, so any local benchmark you read is somebody's estimate. Your own report is the better evidence. For how Google's wider AI changes reach Malaysian searchers, see [our earlier analysis](/ai-search/google-ai-search-redesign-malaysia/). If your traffic moved around late September, rule out [the September spam update](/seo/google-september-2026-spam-update/) before blaming AI features.

## What we still do not know

We do not know when, or whether, Google will add clicks or a more useful position to this report. Google says it is working with site owners on what to add, without dates. We do not know how much of an AI impression is real attention, since the feature can load without the reader scrolling to your link. And we have no public data on how Malay-language pages perform in AI Overviews compared with English ones. We will update this guide when Google changes the report.
