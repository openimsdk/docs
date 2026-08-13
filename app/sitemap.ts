import type { MetadataRoute } from 'next';
import { getAllRoutes } from '@/src/lib/routes';
import { isSdkPlatformVisible } from '@/src/config/docs';
import { siteConfig } from '@/src/config/site';
import { toLocalizedPath } from '@/src/lib/i18n';
import {
  getPublishedClientSdkLocales,
  isClientSdkRoute,
} from '@/src/lib/client-sdk-publication';
import { getGuidePagePaths } from '@/src/components/docs/guides-page';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date('2026-08-04T00:00:00.000Z');
  const homeEntries: MetadataRoute.Sitemap = (['en', 'zh'] as const).map((locale) => ({
    url: new URL(toLocalizedPath('/', locale), siteConfig.siteUrl).toString(),
    lastModified,
    changeFrequency: 'weekly' as const,
    priority: 1,
  }));
  const routeEntries: MetadataRoute.Sitemap = getAllRoutes()
    .filter(
      (route) =>
        route.status === 'published' &&
        (route.product !== 'sdk' || isSdkPlatformVisible(route.platform)),
    )
    .flatMap((route) => {
      const changeFrequency = 'monthly' as const;
      const locales = isClientSdkRoute(route.path)
        ? getPublishedClientSdkLocales(route.path)
        : (['en', 'zh'] as const);
      return locales.map((locale) => ({
        url: new URL(toLocalizedPath(route.path, locale), siteConfig.siteUrl).toString(),
        lastModified,
        changeFrequency,
        priority: route.template === 'overview' ? 0.8 : 0.6,
      }));
    });

  const guideEntries = (['en', 'zh'] as const).flatMap((locale) =>
    getGuidePagePaths(locale).map((path) => ({
      url: new URL(toLocalizedPath(path, locale), siteConfig.siteUrl).toString(),
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: path === '/docs/guides' ? 0.8 : 0.6,
    })),
  );

  return [...homeEntries, ...routeEntries, ...guideEntries];
}
