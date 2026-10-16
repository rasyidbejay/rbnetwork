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
    updatedDate: z.coerce.date().optional(),
    draft: z.boolean().default(false),
    summary: z.array(z.string()).default([]),
    sources: z.array(z.object({ title: z.string(), url: z.string().url() })).default([]),
  }),
});

export const collections = { articles };
