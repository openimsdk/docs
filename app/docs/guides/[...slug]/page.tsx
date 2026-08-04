import type { Metadata } from 'next';
import { GuidesSubPage } from '@/src/components/docs/guides-page';

type PageProps = {
  params: Promise<{ slug: string[] }>;
};

export const metadata: Metadata = {
  title: 'Guides',
  description: 'Product, deployment, and operations guides for OpenIMSDK.',
};

export default async function GuidesSubRoute({ params }: PageProps) {
  const { slug } = await params;
  return <GuidesSubPage slug={slug} />;
}
