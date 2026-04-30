import type { MetadataRoute } from 'next';
import { portfolioData } from '@/data/portfolio';

const baseUrl = 'https://andrea0x.me';
const locales = ['it', 'en'] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ['', '/about', '/services', '/work'] as const;
  const caseStudySlugs = portfolioData.caseStudies.map((cs) => cs.slug);

  const lastModified = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const route of staticRoutes) {
      entries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified,
        changeFrequency: route === '' ? 'monthly' : 'weekly',
        priority: route === '' ? 1 : 0.8,
        alternates: {
          languages: {
            it: `${baseUrl}/it${route}`,
            en: `${baseUrl}/en${route}`,
          },
        },
      });
    }

    for (const slug of caseStudySlugs) {
      entries.push({
        url: `${baseUrl}/${locale}/work/${slug}`,
        lastModified,
        changeFrequency: 'monthly',
        priority: 0.7,
        alternates: {
          languages: {
            it: `${baseUrl}/it/work/${slug}`,
            en: `${baseUrl}/en/work/${slug}`,
          },
        },
      });
    }
  }

  return entries;
}
