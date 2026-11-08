---
title: 301, 302, 307 or 308, which redirect for SEO
description: Which redirect to use when a page moves. What Google's documentation says about 301, 302, 307 and 308, where a recent summary goes further, and common mistakes.
topic: web-development
type: guide
pubDate: 2026-11-06T22:00:00.000Z
updatedDate: ''
draft: false
cover: /images/articles/redirect-types-301-302-307-308.jpg
coverAlt: Aerial view of a multi-level road interchange with roads crossing in an X.
coverCredit: Deva Darshan on Pexels
summary:
  - Use a 301 or 308 when a move is permanent and a 302 or 307 when it is temporary. Google's documentation treats 308 like 301 and 307 like 302.
  - Permanent redirects tell Google the target should be the canonical URL. Temporary ones do not, though the target can still be indexed.
  - 307 and 308 matter when a form or API request must keep its method and body. For ordinary page views the difference is small.
  - A recent summary of a Google discussion says a 302 does not pass ranking signals. That is stronger than Google's written wording, so we rely on the documentation.
sources:
  - title: Redirects and Google Search (Google Search Central, updated 14 April 2026)
    url: https://developers.google.com/search/docs/crawling-indexing/301-redirects
  - title: How HTTP status codes, and network and DNS errors affect Google Search (Google Search Console Help)
    url: https://support.google.com/webmasters/answer/93641
  - title: Google explains how redirects affect ranking signals (Search Engine Journal, 5 November 2026)
    url: https://www.searchenginejournal.com/google-explains-how-redirects-affect-ranking-signals/595967/
  - title: Google treats 308 redirects as 301 redirects (Search Engine Roundtable, 12 July 2021)
    url: https://seroundtable.com/google-308-redirects-as-301-redirects-31732.html
  - title: Google says there is no PageRank dilution with 30x redirects (Search Engine Land, 2016)
    url: https://searchengineland.com/google-no-pagerank-dilution-using-301-302-30x-redirects-anymore-254608
  - title: 301 Moved Permanently (MDN Web Docs)
    url: https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/301
  - title: RFC 7538, the 308 Permanent Redirect status code (IETF)
    url: https://datatracker.ietf.org/doc/html/rfc7538
faq:
  - question: Does a 301 redirect lose ranking?
    answer: Google's Gary Illyes said in 2016 that 30x redirects no longer lose PageRank. Google's documentation says a permanent redirect signals that the target should be the canonical URL. Old URLs can still appear for a while after a move.
  - question: Does Google treat 308 like 301?
    answer: Yes. Google's status code documentation lists 308 as equivalent to 301, and Gary Illyes said in 2021 that Google merges the two.
  - question: Is a 302 bad for SEO?
    answer: Not if the move really is temporary. Google keeps the original page in results for a temporary redirect. It is a poor choice for a permanent move, because you are telling Google the original may come back.
  - question: When do I need 307 or 308?
    answer: When a request must keep its method and body, such as a form POST or an API call. For ordinary page views, 301 and 308 behave alike, and so do 302 and 307.
  - question: Can I use a meta refresh or JavaScript redirect?
    answer: Google prefers server-side redirects. An instant meta refresh counts as permanent and a delayed one as temporary. JavaScript redirects are a last resort because rendering can fail and Google may never see them.
  - question: How many redirects in a row is too many?
    answer: Googlebot follows up to 10 hops, but each hop adds delay for users. Point the old URL straight at the final page.
---

When a page moves, the status code you choose tells Google, and browsers, what kind of move it is. This guide answers which one to use. It is built on Google's own documentation, with a note on where a recent summary goes further.

## The short answer

- **Moved for good:** 301, or 308.
- **Moved for now and coming back:** 302, or 307.
- **The request must keep its method and body, such as a form or an API:** 308 if permanent, 307 if temporary.

| Code | Type | What Google does | Method kept? |
| --- | --- | --- | --- |
| 301 | Permanent | Shows the new URL and treats it as the canonical | May change POST to GET |
| 308 | Permanent | Same as 301 | Yes |
| 302 | Temporary | Keeps the original in results | May change POST to GET |
| 307 | Temporary | Same as 302 | Yes |

## What Google's documentation says

Google's redirect page, last updated on 14 April 2026, makes these points:

- **Permanent redirects** show the new target in results. Use them only when you are sure the move will not be reversed.
- **Temporary redirects** keep the original page in results. They do not signal that the target is canonical, though the target may still be indexed if other signals point to it.
- **Server-side redirects** are recommended. A meta refresh of zero seconds counts as permanent and a longer delay as temporary. A JavaScript redirect is a last resort, because rendering can fail and Google may never see it.
- **After a move,** the old URL may keep appearing for a while. The page says this fades over time.

Google's status code page lists 308 as equivalent to 301 and 307 as equivalent to 302, and says Googlebot follows up to 10 redirect hops. Gary Illyes said in 2016 that 30x redirects do not lose PageRank.

## When 307 and 308 matter

When a browser receives a 301 or 302 in reply to a POST request, it may switch to GET for the next request. MDN notes that this is allowed, and that a 308 prohibits changing the method. RFC 7538 introduced 308 to fill that gap, and 307 does the same for temporary moves. So a checkout, a login form or an API endpoint should use 308 or 307. For a normal page that people simply open, the pairs behave alike.

<figure style="margin:32px 0">
<svg class="rbg" style="display:block;width:100%;max-width:600px;height:auto" viewBox="0 0 600 250" role="img" aria-labelledby="rbg-c6-title rbg-c6-desc" xmlns="http://www.w3.org/2000/svg">
<title id="rbg-c6-title">Which redirect to use</title>
<desc id="rbg-c6-desc">Decision flow. Will the old URL come back? If yes, use 302, or 307 if the method must be kept. If no, ask whether the method must be kept. If yes, use 308. If no, use 301.</desc>
<style>
.rbg text { font-family: "Instrument Sans", system-ui, -apple-system, "Segoe UI", sans-serif; text-anchor: middle; }
.rbg .lab { font-size: 16px; font-weight: 500; fill: var(--ink, #1B1B18); }
.rbg .sub { font-size: 14px; font-weight: 400; fill: var(--ink-muted, #5A5850); }
.rbg .box { fill: none; stroke: var(--ink, #1B1B18); stroke-width: 2; }
.rbg .hotbox { fill: var(--terracotta, #B5562F); }
.rbg .hotlab { font-size: 16px; font-weight: 500; fill: #fff; }
.rbg .arr { stroke: var(--ink, #1B1B18); stroke-width: 2; fill: none; }
</style>
<rect class="box" x="200" y="10" width="200" height="50" rx="8"/>
<text class="lab" x="300" y="40">Will the old URL return?</text>
<path class="arr" d="M200 35 H110 V90 M104 80 L110 90 L116 80"/>
<path class="arr" d="M400 35 H490 V90 M484 80 L490 90 L496 80"/>
<text class="sub" x="150" y="28">Yes</text>
<text class="sub" x="450" y="28">No</text>
<rect class="box" x="10" y="95" width="200" height="50" rx="8"/>
<text class="lab" x="110" y="125">Method must survive?</text>
<rect class="box" x="390" y="95" width="200" height="50" rx="8"/>
<text class="lab" x="490" y="125">Method must survive?</text>
<path class="arr" d="M60 145 V190 M54 180 L60 190 L66 180"/>
<path class="arr" d="M160 145 V190 M154 180 L160 190 L166 180"/>
<path class="arr" d="M440 145 V190 M434 180 L440 190 L446 180"/>
<path class="arr" d="M540 145 V190 M534 180 L540 190 L546 180"/>
<text class="sub" x="40" y="168">No</text>
<text class="sub" x="182" y="168">Yes</text>
<text class="sub" x="420" y="168">Yes</text>
<text class="sub" x="562" y="168">No</text>
<rect class="box" x="20" y="195" width="80" height="40" rx="8"/>
<text class="lab" x="60" y="221">302</text>
<rect class="box" x="120" y="195" width="80" height="40" rx="8"/>
<text class="lab" x="160" y="221">307</text>
<rect class="box" x="400" y="195" width="80" height="40" rx="8"/>
<text class="lab" x="440" y="221">308</text>
<rect class="hotbox" x="500" y="195" width="80" height="40" rx="8"/>
<text class="hotlab" x="540" y="221">301</text>
</svg>
<figcaption style="margin-top:12px;font-size:12px;line-height:16px;font-weight:500;letter-spacing:0.02em;color:var(--ink-muted)">Figure 1. Choosing a redirect. Our reading of Google's documentation, MDN and RFC 7538.</figcaption>
</figure>

## Common cases

These are our reading of the rules above, not a Google list:

- **HTTP to HTTPS, or one host name to another:** 301.
- **A renamed or merged page:** 301 to the closest matching page.
- **A short maintenance page or a seasonal offer:** 302.
- **A moved domain:** 301 for each old URL to its new equivalent. Expect old URLs to linger in results for a while.

<figure class="ph"><img src="/images/articles/redirect-types-301-302-307-308-1.jpg" alt="A signpost with several arrow signs pointing in different directions against a pale blue sky." width="1600" height="900" loading="lazy" decoding="async"><figcaption>Photo: Jonathan Cooper on Pexels</figcaption></figure>

## Mistakes to avoid

- **Leaving a 302 on a permanent move.** You are telling Google the original may come back.
- **Chains and loops.** Googlebot follows up to 10 hops, and each one slows people down. Point the old URL straight at the final page.
- **Redirecting everything to the homepage.** Google's advice for a removed page with no similar replacement is a 404 or 410.
- **Using JavaScript when a server-side redirect is possible.**

## Where a recent summary goes further

Search Engine Journal summarised a Google discussion between Gary Illyes and Cherry Prommawin on 5 November. It says a 302 does not pass ranking signals and the new URL is largely ignored. Google's written page says less: a temporary redirect does not signal the target as canonical, though the target may still be indexed. Illyes said in 2016 that 30x redirects do not lose PageRank. These are not the same claim.

The article does not name the video, and we could not find it, so we do not repeat the stronger version. Its section on content cannibalisation is the author's opinion, not Google's.

## How to check a redirect

```
curl -sI https://example.com/old-page | head -n 5
```

Read the status line and the Location header. In a browser, the Network tab shows the same. Search Console's URL inspection shows which URL Google chose as canonical. Settings differ by host and framework, so check which status code yours returns and do not assume it is permanent.

For related checks, see [what a 4xx status does to your URLs](/web-development/http-4xx-status-google-search/) and our [SEO checklist for AI-built websites](/web-development/ai-built-website-seo/).
