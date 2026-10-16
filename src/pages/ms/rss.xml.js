import rss from '@astrojs/rss';
import { SITE } from '../../config/site';
import { getArticles, articleUrl } from '../../lib/articles';

export async function GET(context) {
  const list = await getArticles('ms');
  return rss({
    title: 'rbnetwork',
    description: SITE.description,
    site: context.site,
    items: list.map((a) => ({ title: a.data.title, description: a.data.description, pubDate: a.data.pubDate, link: articleUrl(a) })),
    customData: '<language>ms</language>',
  });
}
