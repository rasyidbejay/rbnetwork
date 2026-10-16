import seo from '../assets/photos/topic-seo.jpg';
import aiSearch from '../assets/photos/topic-ai-search.jpg';
import webDev from '../assets/photos/topic-web-development.jpg';
import empty from '../assets/photos/empty.jpg';
import about from '../assets/photos/about.jpg';
import contact from '../assets/photos/contact.jpg';
import type { Topic } from '../config/site';

/**
 * Site photos. All from Unsplash (free licence, no attribution required; credited anyway).
 * Alt text is written for the page, not copied from Unsplash.
 */
export const PHOTOS = {
  'topic-seo': { src: seo, alt: { en: 'Performance graphs on a laptop screen', ms: 'Graf prestasi pada skrin komputer riba' }, credit: 'Luke Chesser' },
  'topic-ai-search': { src: aiSearch, alt: { en: 'A phone screen asking “What can I help with?”', ms: 'Skrin telefon bertanya “What can I help with?”' }, credit: 'Tim Witzdam' },
  'topic-web-development': { src: webDev, alt: { en: 'Code on a monitor, close up', ms: 'Kod pada skrin monitor, dekat' }, credit: 'Chris Ried' },
  empty: { src: empty, alt: { en: 'A blank notepad resting on a laptop', ms: 'Buku nota kosong di atas komputer riba' }, credit: 'Fiona Murray-deGraaff' },
  about: { src: about, alt: { en: 'Hands typing on a laptop in low light', ms: 'Tangan menaip pada komputer riba dalam cahaya malap' }, credit: 'charlesdeluvio' },
  contact: { src: contact, alt: { en: 'A pen resting on a blank sheet of paper', ms: 'Pen di atas sehelai kertas kosong' }, credit: 'Omar Al-Ghosson' },
} as const;

export const TOPIC_PHOTO: Record<Topic, keyof typeof PHOTOS> = {
  seo: 'topic-seo',
  'ai-search': 'topic-ai-search',
  'web-development': 'topic-web-development',
};
