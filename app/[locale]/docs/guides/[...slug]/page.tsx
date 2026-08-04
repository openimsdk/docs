import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { GuidesSubPage } from '@/src/components/docs/guides-page';
import type { Locale } from '@/src/lib/i18n';
import { isLocale } from '@/src/lib/i18n';

type PageProps = {
  params: Promise<{ locale: string; slug: string[] }>;
};

export const metadata: Metadata = {
  title: '指南',
  description: 'OpenIMSDK 产品、部署和运维指南。',
};

export default async function LocalizedGuidesSubRoute({ params }: PageProps) {
  const { locale, slug } = await params;
  if (!isLocale(locale) || locale === 'en') notFound();

  return <GuidesSubPage locale={locale as Locale} slug={slug} />;
}
