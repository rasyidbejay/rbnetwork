---
# SAMPLE ONLY. This file shows the article layout while you develop locally (npm run dev).
# It has draft: true, so it never appears on the live site. Delete it once real articles exist.
title: How AI answers choose which pages to cite
description: What makes one source quotable and another invisible, and what you can change on your own pages this week.
topic: ai-search
type: analysis
pubDate: 2026-10-14
draft: true
summary:
  - Answer engines favour pages that answer the question plainly, near the top.
  - Clear structure makes a passage easy to lift and quote.
  - Normal search visibility still matters, because many answers draw on it.
sources:
  - title: Sample source title, Publisher name
    url: https://example.com/
---

When someone asks an AI assistant a question, the reply often names a handful of sources. Those few links now carry much of the attention that ten blue links used to share. This piece looks at what tends to separate a cited page from one that is passed over.

## Why citations matter now

A ranked results page lets a reader compare options. An answer does the comparing for them. If your page is not among the sources, the reader may never know it existed.

> A ranked list lets readers choose. *An answer chooses for them.*

## What quotable pages have in common

- **A direct answer first.** One or two sentences that answer the question before any background.
- **Headings that match real questions.** Phrase sub-headings the way people ask.
- **Facts with their sources.** Link the original data, not a summary of it.
- **Clear authorship and dates.** Show who maintains the page and when it changed.

### A quick comparison

| Discipline | Where it shows | What success looks like |
| --- | --- | --- |
| SEO | Ranked results pages | Higher positions and more clicks |
| AEO | Featured answers and voice assistants | Your passage is shown or read out as the answer |
| GEO | AI-generated answers | Your page is cited and your brand described accurately |

## Structure you can add today

Structured data does not guarantee a citation, but it removes guesswork about what a page contains:

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "What is GEO?",
    "acceptedAnswer": { "@type": "Answer", "text": "Making a page easy for AI tools to cite accurately." }
  }]
}
```

## What to do this week

1. Pick five pages that answer common customer questions.
2. Rewrite each opening so the answer comes in the first two sentences.
3. Turn vague headings into the questions people actually ask.
4. Add an author line and a last updated date.
