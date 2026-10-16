import { SITE, TOPICS, type Lang } from '../config/site';
import { getArticles, splitId } from './articles';

/** Page 1 of each topic. */
export async function topicFirstPaths(lang: Lang) {
  const list = await getArticles(lang);
  return TOPICS.map((topic) => {
    const all = list.filter((a) => a.data.topic === topic);
    return { params: { topic }, props: { topic, items: all.slice(0, SITE.perPage), page: 1, totalPages: Math.max(1, Math.ceil(all.length / SITE.perPage)) } };
  });
}

/** Pages 2 and up of each topic (only created when there are enough articles). */
export async function topicMorePaths(lang: Lang) {
  const list = await getArticles(lang);
  return TOPICS.flatMap((topic) => {
    const all = list.filter((a) => a.data.topic === topic);
    const totalPages = Math.max(1, Math.ceil(all.length / SITE.perPage));
    return Array.from({ length: totalPages - 1 }, (_, i) => {
      const page = i + 2;
      return { params: { topic, page: String(page) }, props: { topic, items: all.slice((page - 1) * SITE.perPage, page * SITE.perPage), page, totalPages } };
    });
  });
}

export async function articlePaths(lang: Lang) {
  const list = await getArticles(lang);
  return list.map((entry) => ({ params: { topic: entry.data.topic, slug: splitId(entry.id).slug }, props: { entry } }));
}
