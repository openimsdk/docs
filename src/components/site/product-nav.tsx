'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDownIcon } from '@/src/components/ui/icons';
import { sdkPlatformSections, type SdkPlatformSection } from '@/src/config/docs';

export function ProductNav() {
  const pathname = usePathname();

  return (
    <div className="product-nav-shell">
      <nav aria-label="OpenIMSDK documentation products" className="product-nav">
        <Link className={active(pathname, '/', true)} href="/">
          Overview
        </Link>
        <Dropdown active={pathname.includes('/sdk/')} sections={sdkPlatformSections} label="SDKs" />
        <Link className={active(pathname, '/platform-api/')} href="/platform-api/overview">
          Server API
        </Link>
        <Link
          className={active(pathname, '/sdk/wasm/getting-started/')}
          href="/sdk/wasm/getting-started/send-first-message"
        >
          SDK Tour
        </Link>
      </nav>
    </div>
  );
}

function Dropdown({
  active: isActive,
  sections,
  label,
}: {
  active: boolean;
  sections: SdkPlatformSection[];
  label: string;
}) {
  return (
    <details className={`product-dropdown ${isActive ? 'is-active' : ''}`}>
      <summary>
        {label}
        <ChevronDownIcon />
      </summary>
      <div className="product-dropdown-menu">
        {sections.map((section, index) => (
          <div
            className={section.label ? 'sdk-menu-section is-grouped' : 'sdk-menu-section'}
            key={section.label ?? `sdk-section-${index}`}
          >
            {section.label ? (
              <p className="sdk-menu-section-title">
                <span>{section.label}</span>
                {section.description ? <small>{section.description}</small> : null}
              </p>
            ) : null}
            <div className="sdk-menu-section-items">
              {section.items.map((item) => (
                <Link href={item.href} key={item.href}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </details>
  );
}

function active(pathname: string, prefix: string, exact = false): string {
  const isActive = exact ? pathname === prefix : pathname.startsWith(prefix);
  return isActive ? 'is-active' : '';
}
