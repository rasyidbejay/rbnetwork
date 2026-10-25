import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Articles live in src/content/articles/<lang>/<slug>.md
 * The English and Malay versions of one article share the same slug.
 */
const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    topic: z.enum(['seo', 'ai-search', 'web-development']),
    type: z.enum(['news', 'analysis', 'explainer', 'guide']).default('analysis'),
    pubDate: z.coerce.date(),
    /** The CMS saves an empty "Last updated" as '', so treat empty values as "no date". */
    updatedDate: z.preprocess((v) => (v === '' || v === null ? undefined : v), z.coerce.date().optional()),
    draft: z.boolean().default(false),
    /** Optional cover photo, e.g. /images/articles/my-photo.jpg. Without one, the article gets a generated drawing. */
    cover: z.string().optional(),
    coverAlt: z.string().optional(),
    coverCredit: z.string().optional(),
    summary: z.array(z.string()).default([]),
    sources: z.array(z.object({ title: z.string(), url: z.string().url() })).default([]),
    /** Optional questions and answers shown at the end of the article and published as FAQPage structured data. */
    faq: z.array(z.object({ question: z.string(), answer: z.string() })).default([]),
  }),
});

export const collections = { articles };
