import Image from 'next/image';
import Link from 'next/link';
import type { Locale } from '@/src/lib/i18n';
import { t, toLocalizedPath } from '@/src/lib/i18n';

export function Logo({ locale = 'en' }: { locale?: Locale }) {
  const text = t(locale);

  return (
    <Link
      aria-label="OpenIMSDK Docs home"
      className="brand-lockup"
      href={toLocalizedPath('/', locale)}
    >
      <span aria-hidden="true" className="brand-mark">
        <Image alt="" height={32} priority src="/brand/logo-mark.png" width={32} />
      </span>
      <span className="brand-name">OpenIMSDK</span>
      <span className="brand-divider" />
      <span className="brand-docs">{text.chrome.docs}</span>
    </Link>
  );
}
