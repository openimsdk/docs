import type { ReactNode } from 'react';
import { GlobalHeader } from '@/src/components/site/global-header';
import { SiteFooter } from '@/src/components/site/site-footer';
import type { Locale } from '@/src/lib/i18n';

export function DocsLayoutShell({
  children,
  locale = 'en',
}: {
  children: ReactNode;
  locale?: Locale;
}) {
  return (
    <div className="site-shell">
      <GlobalHeader locale={locale} />
      <main className="site-main">{children}</main>
      <SiteFooter locale={locale} />
    </div>
  );
}

