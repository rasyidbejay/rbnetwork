---
title: Track ChatGPT and AI search traffic in GA4
description: How to see ChatGPT and other AI assistant visits in GA4 with a custom channel group, why many ChatGPT visits showed as Direct in October, and what stays hidden.
topic: ai-search
type: guide
pubDate: 2026-10-31T03:37:00.000Z
updatedDate: ''
draft: false
cover: /images/articles/track-ai-search-traffic-ga4.jpg
coverAlt: A tablet on a wooden desk showing a traffic sources chart and a line graph of visitors.
coverCredit: AS Photography on Pexels
summary:
  - GA4 can group AI assistant visits into one channel. Google's help page gives an AI assistants example, and the setup takes about ten minutes.
  - The new channel must sit above Referral in the channel order, because GA4 puts each visit in the first channel it matches.
  - From about 8 to 15 October 2026, ChatGPT links reportedly lost their utm_source tag, so many visits showed as Direct.
  - We found nothing that labels clicks from Google's AI Overviews or AI Mode separately in GA4, and Search Console's AI report shows no clicks.
  - Report AI assistant traffic as a minimum, never as a total.
sources:
  - title: Custom channel groups (Google Analytics Help)
    url: https://support.google.com/analytics/answer/13051316
  - title: ChatGPT traffic drop appears to be a tracking problem (Search Engine Journal, 15 October 2026)
    url: https://www.searchenginejournal.com/chatgpt-traffic-drop-appears-to-be-a-tracking-problem/
  - title: ChatGPT UTM tag loss was a bug, says Adobe's Huesler (Relevant Audience, October 2026)
    url: https://www.relevantaudience.com/analytics/chatgpt-utm-tag-bug-fixed-openai-confirmed-adobe/
  - title: Optimizing your website for generative AI features on Google Search (Google Search Central, updated 10 July 2026)
    url: https://developers.google.com/search/docs/fundamentals/ai-optimization-guide
faq:
  - question: How do I see ChatGPT traffic in GA4?
    answer: Create a custom channel group with a channel called AI assistants, add a Source condition that matches a regex such as the one in this guide, and move the channel above Referral. Then choose the group as the primary dimension in the Traffic acquisition report.
  - question: Why does ChatGPT traffic show as Direct?
    answer: GA4 can only label a visit if it arrives with a referrer or a UTM tag. In October 2026 ChatGPT's inline links reportedly lost their utm_source tag and most clicks carry no referrer, so many visits had nothing to label and fell into Direct.
  - question: Can I track Google AI Overviews traffic separately?
    answer: Not that we found. Search Console's generative AI report shows impressions and no clicks, and we found no Google documentation that labels AI Overview clicks in GA4. Assume they sit with Google organic traffic.
  - question: Will the ChatGPT tagging fix recover the lost data?
    answer: No backfill has been announced, so visits from 8 to 15 October that landed in Direct will stay there. Annotate the dates and compare ChatGPT and Direct together for that week.
  - question: Do I need a separate setup for Perplexity, Copilot or Claude?
    answer: No. Add their source names to the same regex. Check the exact values in your own Traffic acquisition report first, because sources can change name, and review the pattern every few months.
---

GA4 can show you the ChatGPT, Perplexity, Copilot, Gemini and Claude visits that arrive with a referrer or a UTM tag. It cannot show visits that arrive with neither, and we found nothing that separates clicks from Google's AI Overviews or AI Mode. The fix is a custom channel group that takes about ten minutes. Treat the number it gives you as a floor, not a total.

## Build an AI assistants channel group

1. In GA4 open Admin, then Data display, then Channel groups. You need the Editor role on the property.
2. Click Create new channel group, name it, then click Add new channel and call it AI assistants.
3. Add a condition: Source, matches regex.
4. Paste a pattern for the assistants you care about, for example:

```
.*chatgpt.*|.*openai.*|.*perplexity.*|.*gemini.*|.*copilot.*|.*claude.*
```

5. Click Reorder, drag AI assistants above Referral, click Apply, then Save group. GA4 puts each visit in the first channel it matches, so order decides the result.
6. Open Reports, Acquisition, Traffic acquisition and choose your new group as the primary dimension.

Google's help page has its own AI assistants example and says custom channel groups apply to past data, so you can compare earlier months straight away. A standard property can hold two custom groups. Test your pattern against the source values in your own report, and review it when assistants change domains.

<figure style="margin:32px 0">
<svg class="rbg" style="display:block;width:100%;max-width:560px;height:auto" viewBox="0 0 560 248" role="img" aria-labelledby="rbg-g1-title rbg-g1-desc" xmlns="http://www.w3.org/2000/svg">
<title id="rbg-g1-title">Where three kinds of AI-related visit land in GA4</title>
<desc id="rbg-g1-desc">Three rows. A ChatGPT link with a UTM tag lands in your AI assistants channel. A ChatGPT link with the tag missing, from 8 to 15 October, lands in Direct. A click from a Google AI answer lands with Google organic, with no separate label that we found.</desc>
<style>
.rbg text { font-family: "Instrument Sans", system-ui, -apple-system, "Segoe UI", sans-serif; }
.rbg .lab { font-size: 18px; font-weight: 500; fill: var(--ink, #1B1B18); }
.rbg .sub { font-size: 16px; font-weight: 400; fill: var(--ink-muted, #5A5850); }
.rbg .box { fill: none; stroke: var(--ink, #1B1B18); stroke-width: 2; }
.rbg .base { fill: none; stroke: var(--terracotta, #B5562F); stroke-width: 2.5; }
.rbg .arr { fill: none; stroke: var(--ink, #1B1B18); stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }
</style>
<rect class="box" x="10" y="10" width="250" height="64" rx="12"/>
<text class="lab" x="28" y="38">ChatGPT link</text>
<text class="sub" x="28" y="60">with a UTM tag</text>
<path class="arr" d="M268 42 H300 M294 36 L302 42 L294 48"/>
<rect class="base" x="310" y="10" width="240" height="64" rx="12"/>
<text class="lab" x="328" y="38">AI assistants</text>
<text class="sub" x="328" y="60">your custom channel</text>
<rect class="box" x="10" y="92" width="250" height="64" rx="12"/>
<text class="lab" x="28" y="120">ChatGPT link</text>
<text class="sub" x="28" y="142">tag missing, 8 to 15 Oct</text>
<path class="arr" d="M268 124 H300 M294 118 L302 124 L294 130"/>
<rect class="box" x="310" y="92" width="240" height="64" rx="12"/>
<text class="lab" x="328" y="120">Direct</text>
<text class="sub" x="328" y="142">nothing to label</text>
<rect class="box" x="10" y="174" width="250" height="64" rx="12"/>
<text class="lab" x="28" y="202">Google AI answer</text>
<text class="sub" x="28" y="224">click to your site</text>
<path class="arr" d="M268 206 H300 M294 200 L302 206 L294 212"/>
<rect class="box" x="310" y="174" width="240" height="64" rx="12"/>
<text class="lab" x="328" y="202">Google organic</text>
<text class="sub" x="328" y="224">no separate label found</text>
</svg>
<figcaption style="margin-top:12px;font-size:12px;line-height:16px;font-weight:500;letter-spacing:0.02em;color:var(--ink-muted)">Figure 1. Where each kind of visit lands. Our summary of the sources below, not a Google diagram.</figcaption>
</figure>

## The October ChatGPT tagging gap

From about 8 October, ChatGPT's inline links reportedly stopped carrying the `utm_source=chatgpt.com` tag, and most clicks carry no referrer either, so many visits fell into Direct. Search Engine Journal and Relevant Audience report that Adobe's Cedric Huesler was told by OpenAI that it was a bug, and that a fix began rolling out early on 15 October. We found no public statement from OpenAI, so the confirmation is secondhand. Links in the Sources panel and shopping links kept their tags.

What to do:

- **Annotate 8 to 15 October** in GA4, in your property's time zone. The break began at about 2pm Pacific on 8 October, which is early on 9 October in Malaysia (our conversion).
- **Read ChatGPT and Direct together** for the affected pages and your homepage, instead of treating the dip as lost traffic.
- **Do not rebuild your reports around one week.** No backfill has been announced, so those Direct visits stay in Direct.

<figure class="ph"><img src="/images/articles/track-ai-search-traffic-ga4-1.jpg" alt="A laptop on a grey sofa showing an analytics dashboard with charts and a world map." width="1600" height="900" loading="lazy" decoding="async"><figcaption>Photo: Lukas Blazek on Pexels</figcaption></figure>

## Report it honestly

Present AI assistant traffic as a minimum. Say which assistants the pattern covers, which dates are affected and that Google's AI features are not broken out. Do not claim this traffic converts better unless your own data shows it.

ChatGPT Ads are separate. If you tag ad links with your own UTM parameters they are reportedly unaffected, and they belong in paid reporting, as we explain in [ChatGPT Ads in Malaysia and Singapore](/ai-search/chatgpt-ads-malaysia-singapore/). For the Google side, read [our guide to Search Console's generative AI report](/ai-search/search-console-generative-ai-report/), which shows impressions only. The wider picture is in [GEO vs SEO in 2026](/ai-search/geo-vs-seo-2026/).
