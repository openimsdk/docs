import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { DocsLayoutShell } from '@/src/components/site/docs-layout-shell';
import { getMDXComponents } from '@/src/components/mdx-components';
import { siteConfig } from '@/src/config/site';
import type { Locale } from '@/src/lib/i18n';
import { toLocalizedPath } from '@/src/lib/i18n';
import { source } from '@/src/lib/source';

const zhHomeMetadata = {
  title: 'OpenIMSDK 文档',
  description:
    'OpenIMSDK 中文文档入口，包含 OpenIMClientSDK、OpenIMServer、ChatServer、Platform API、示例应用和核心接入流程。',
};

export async function generateHomeMetadata(locale: Locale): Promise<Metadata> {
  const page = source.getPage(['chat']);
  if (!page) return {};

  const title = locale === 'zh' ? zhHomeMetadata.title : page.data.title;
  const description = locale === 'zh' ? zhHomeMetadata.description : page.data.description;
  const url = toLocalizedPath('/', locale);

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        en: '/',
        zh: '/zh',
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      type: 'website',
    },
  };
}

export async function HomeLanding({ locale }: { locale: Locale }) {
  const page = source.getPage(['chat']);
  if (!page) notFound();

  const loaded = await page.data.load();
  const MdxContent = loaded.body;

  return (
    <DocsLayoutShell locale={locale}>
      <div className="chat-landing">
        <MdxContent components={getMDXComponents(locale)} />
      </div>
    </DocsLayoutShell>
  );
}
