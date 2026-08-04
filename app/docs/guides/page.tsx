import type { Metadata } from 'next';
import { GuidesPage } from '@/src/components/docs/guides-page';

export const metadata: Metadata = {
  title: 'Guides',
  description: 'Product, deployment, and operations guides for OpenIMSDK.',
};

export default function GuidesRoute() {
  return <GuidesPage />;
}
