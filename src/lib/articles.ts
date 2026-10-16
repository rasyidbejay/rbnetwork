import { getCollection, type CollectionEntry } from 'astro:content';
import { TOPICS, TOPIC_VIZ, type Lang, type Topic } from '../config/site';
import { localePath } from '../i18n/ui';

export type Article = CollectionEntry<'articles'>;

/** "en/my-slug" -> { lang: 'en', slug: 'my-slug' } */
export function splitId(id: string): { lang: Lang; slug: string } {
  const [lang, ...rest] = id.split('/');
  return { lang: lang as Lang, slug: rest.join('/') };
}

/** Published articles in one language, newest first. Drafts show only while developing locally. */
export async function getArticles(lang: Lang): Promise<Article[]> {
  const all = await getCollection('articles', ({ id, data }) => {
    if (splitId(id).lang !== lang) return false;
    return import.meta.env.PROD ? !data.draft : true;
  });
  return all.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export function articleUrl(a: Article): string {
  const { lang, slug } = splitId(a.id);
  return localePath(lang, `/${a.data.topic}/${slug}/`);
}

/** Does the same article exist in the other language? Returns its URL if so. */
export async function translationUrl(a: Article): Promise<string | undefined> {
  const { lang, slug } = splitId(a.id);
  const other: Lang = lang === 'en' ? 'ms' : 'en';
  const list = await getArticles(other);
  const match = list.find((x) => splitId(x.id).slug === slug);
  return match ? articleUrl(match) : undefined;
}

export function topicCounts(list: Article[]): Record<Topic, number> {
  const c = { seo: 0, 'ai-search': 0, 'web-development': 0 } as Record<Topic, number>;
  for (const a of list) c[a.data.topic]++;
  return c;
}

/** Stable number from a string, so each article always gets the same picture. */
export function seedOf(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
  return (h >>> 0) % 100000;
}

export function vizFor(a: Article) {
  return { kind: TOPIC_VIZ[a.data.topic].kind, seed: seedOf(splitId(a.id).slug) };
}

export function readingMinutes(body = ''): number {
  const words = body.replace(/```[\s\S]*?```/g, ' ').split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
}

export { TOPICS };
