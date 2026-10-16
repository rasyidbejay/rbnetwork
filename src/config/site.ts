export const SITE = {
  name: 'rbnetwork',
  url: 'https://rbnetwork.my',
  description: 'News and analysis on SEO, AI search and web development.',
  defaultOg: '/og-default.png',
  perPage: 10,
  // Paste the ID from your Formspree form (the part after formspree.io/f/).
  formspreeId: 'YOUR_FORM_ID',
};

export const LANGS = ['en', 'ms'] as const;
export type Lang = (typeof LANGS)[number];

export const TOPICS = ['seo', 'ai-search', 'web-development'] as const;
export type Topic = (typeof TOPICS)[number];

/** Which generated visual each topic uses, and the seed for its hero. */
export const TOPIC_VIZ: Record<Topic, { kind: 'terrain' | 'network' | 'roots'; seed: number }> = {
  seo: { kind: 'terrain', seed: 312 },
  'ai-search': { kind: 'network', seed: 331 },
  'web-development': { kind: 'roots', seed: 305 },
};

export const ARTICLE_TYPES = ['news', 'analysis', 'explainer', 'guide'] as const;
export type ArticleType = (typeof ARTICLE_TYPES)[number];
