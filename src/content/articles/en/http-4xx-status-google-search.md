---
title: What a 4xx status does to your URLs in Google
description: A Google engineer explained why VLC stayed indexed while serving a 418 error. What Google's documentation says about 4xx codes, and how to check your own site.
topic: web-development
type: guide
pubDate: 2026-11-06T21:58:00.000Z
updatedDate: ''
draft: false
summary:
  - Google's documentation says URLs returning 4xx errors, apart from 429, are treated as not existing, and those already indexed are removed from the index.
  - Gary Illyes said VLC's site, which served a 418 status, was temporarily protected from dropping out because it is an important page. It lost its snippet and favicon.
  - That is one case on one site. Nothing says an ordinary site would be protected, and the documentation says the opposite.
  - Check what your error pages return, fix soft 404s, and do not rely on being kept in the index.
sources:
  - title: VLC stays indexed despite a 418 error, Google explains (Search Engine Roundtable, 5 November 2026)
    url: https://www.seroundtable.com/google-protected-important-urls-index-42464.html
  - title: How HTTP status codes, and network and DNS errors affect Google Search (Google Search Central)
    url: https://developers.google.com/search/docs/crawling-indexing/http-network-errors
  - title: How HTTP status codes, and network and DNS errors affect Google Search (Google Search Console Help)
    url: https://support.google.com/webmasters/answer/93641
faq:
  - question: Will Google keep a page in its index if it returns a 404?
    answer: According to Google's documentation, no. URLs that return a 4xx status are not considered for indexing, and those already indexed are removed. The VLC case was described as a temporary exception for a very important page.
  - question: Is a 410 removed faster than a 404?
    answer: Google's documentation treats all 4xx codes except 429 the same way, so we cannot promise a difference. Some third-party sites claim 410 is faster, and we could not confirm that from Google.
  - question: What does a 418 status do?
    answer: Google's documentation says exotic codes such as 418 are not covered. In the VLC case, Gary Illyes said it was treated like other 4xx errors, essentially as not found.
  - question: What happens with 429 and 5xx errors?
    answer: Google's crawlers slow down. Already indexed URLs are kept for a time, but they are eventually dropped if the errors persist.
  - question: What is a soft 404?
    answer: A page that returns a 200 status but is really an error page, such as an empty template. Search Console flags these. If a page is gone with no replacement, return a real 404 or 410.
  - question: Why did VLC lose its favicon?
    answer: With the page unreadable, Google no longer knew its content, so it showed only the link and the last good title, with no snippet and no favicon. VLC now returns 200, and Gary Illyes expected the favicon to return.
---

A comment from Google this week is easy to misread as "4xx errors are safe". They are not. Here is what happened with VLC, what Google's documentation says, and what to check on your own site.

## What happened with VLC

Search Engine Roundtable reported on 5 November that VLC's website had lost its favicon in Google results. Gary Illyes of Google commented on LinkedIn. VLC's site was serving HTTP 418, the "I'm a teapot" code, and Google treated it like other 4xx errors, essentially as not found.

Because VLC is one of the most important pages on the internet, Illyes said, Search temporarily protected the URL from falling out of the index right away. The side effect was that Google no longer knew what the page contained, so it showed only the link and the last good title, with no snippet and no favicon. VLC now returns 200 with content, and he expected the favicon to come back.

Barry Schwartz offers another reading: the site still appears when you search for it by name, which may simply reflect its importance. That is his interpretation.

Three things are not known. What "important" means to Google. How long "temporarily" lasts. And whether anything like this applies to ordinary sites. Nothing in the report says it does.

## What Google's documentation says

| Status | What Google does |
| --- | --- |
| 200 | The content may be considered for indexing. |
| 301, 308 | A permanent move. Google follows up to 10 redirect hops. |
| 302, 307 | A temporary move. Google follows it. |
| 404, 410, and other 4xx except 429 | Treated alike. The content does not exist. Indexed URLs are removed, new 404 pages are not processed, and crawling gradually slows. |
| 429 | Treated as a server error. Crawling slows. |
| 5xx | Crawling slows. Indexed URLs are kept for a time, then dropped if the error persists. |

The documentation says exotic codes such as 418 are not covered. That makes the VLC case a statement about one site, not a rule.

## Soft 404s and custom error pages

A soft 404 is a page that returns 200 but is really an error page. Search Console reports these in the Page indexing report. Google's advice is to return a real 404 or 410 when a page has gone and nothing similar replaces it.

Custom 404 pages deserve a check. Google notes they are made for users, so the server must still return a 404 status. Otherwise the error page may itself be indexed.

## Where accidental 4xx errors come from

Google's table groups 401 and 403 with 404 and 410, so a page that is blocked for crawlers is treated like a page that does not exist. Typical causes to look for:

- **Login walls and expired sessions** that answer a crawler with 401 or 403.
- **Bot protection or a firewall** that blocks some visitors with 403.
- **Deleted or renamed pages** in a content system, with no redirect.
- **URL variants** such as a different capital letter or a missing trailing slash.

## How to check your own site

1. **Request a URL that does not exist** and read the status line, not the page:

```
curl -sI https://example.com/this-page-does-not-exist | head -n 1
```

2. **Open Search Console's Page indexing report** and look for reasons such as "Not found (404)" and "Soft 404". Google says every issue in its status code guide generates a matching error or warning there.
3. **Search your server logs** for repeated 4xx responses on URLs that should work.
4. **Fix the cause.** If the page moved, redirect it to the closest match (see [which redirect to use](/web-development/redirect-types-301-302-307-308/)). If it is gone, return 404 or 410.

Then sort what you find into four groups. Pages that should work need fixing first. Pages that moved need a redirect. Pages that are gone should return 404 or 410. URLs that never existed, such as typos from other sites, can usually be left alone.

We have not tested a live site for this piece, so the command above is a method, not a result.

## After you fix a page

Once a URL returns 200 again with real content, Google has to crawl it again before the snippet and favicon can return, and the documentation gives no timescale. Search Console's URL inspection tool lets you request a fresh crawl of a single page, but it is not a guarantee. VLC's own case shows the pattern: the fix came first, and the favicon was only expected to follow.

If a page is gone on purpose, do not fix it. A clean 404 or 410 is the correct answer, and the documentation says crawling of such URLs slows gradually.

## What not to take from the VLC case

- **Do not serve unusual codes on purpose.** The documentation does not cover them.
- **Do not count on protection.** The documentation says 4xx URLs already indexed are removed.
- **Remember the cost.** Even when a URL stays listed, a page Google cannot read has no snippet and no favicon.

For the wider checklist on technical basics, see [is your website ready for AI agents](/web-development/ai-agent-ready-website/).
