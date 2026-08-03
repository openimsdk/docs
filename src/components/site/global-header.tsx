'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import rawRoutes from '@/src/generated/routes.json';
import { CheckIcon, ChevronDownIcon, GithubIcon, GlobeIcon } from '@/src/components/ui/icons';
import { SearchDialog } from '@/src/components/search/search-dialog';
import { Logo } from '@/src/components/site/logo';
import { ThemeToggle } from '@/src/components/site/theme-toggle';
import { sdkPlatformSections } from '@/src/config/docs';
import { siteConfig } from '@/src/config/site';
import type { Locale } from '@/src/lib/i18n';
import { localeFromPathname, stripLocaleFromPath, t, toLocalizedPath } from '@/src/lib/i18n';
import type { RouteRecord } from '@/src/types/docs';

const routeLocaleMap = new Map(
  (rawRoutes as RouteRecord[]).map((route) => [route.path, route.locales]),
);

const languageItems: {
  code: string;
  label: string;
  locale: Locale;
  secondary: string;
}[] = [
  { code: 'EN', label: 'English', locale: 'en', secondary: 'English docs' },
  { code: '简中', label: '简体中文', locale: 'zh', secondary: '中文文档' },
];

export function GlobalHeader({ locale: localeProp }: { locale?: Locale }) {
  const pathname = usePathname();
  const locale = localeProp ?? localeFromPathname(pathname);
  const text = t(locale);
  const plainPathname = stripLocaleFromPath(pathname);
  const [sdkMenuOpenPath, setSdkMenuOpenPath] = useState<string | null>(null);
  const [languageMenuOpenPath, setLanguageMenuOpenPath] = useState<string | null>(null);
  const sdkMenuRef = useRef<HTMLDetailsElement>(null);
  const isSdkMenuOpen = sdkMenuOpenPath === pathname;
  const isLanguageMenuOpen = languageMenuOpenPath === pathname;

  useEffect(() => {
    if (!isSdkMenuOpen) return;

    function closeOnOutsideClick(event: PointerEvent) {
      if (!sdkMenuRef.current?.contains(event.target as Node)) {
        setSdkMenuOpenPath(null);
      }
    }

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setSdkMenuOpenPath(null);
      }
    }

    document.addEventListener('pointerdown', closeOnOutsideClick);
    document.addEventListener('keydown', closeOnEscape);

    return () => {
      document.removeEventListener('pointerdown', closeOnOutsideClick);
      document.removeEventListener('keydown', closeOnEscape);
    };
  }, [isSdkMenuOpen]);

  function closeSdkMenu() {
    setSdkMenuOpenPath(null);
  }

  function toggleSdkMenu(open: boolean) {
    setSdkMenuOpenPath(open ? pathname : null);
    if (open) setLanguageMenuOpenPath(null);
  }

  function toggleLanguageMenu(open: boolean) {
    setLanguageMenuOpenPath(open ? pathname : null);
    if (open) setSdkMenuOpenPath(null);
  }

  return (
    <header className="global-header">
      <div className="global-header-inner">
        <Logo locale={locale} />
        <nav aria-label={text.chrome.primaryNav} className="primary-nav">
          <Link
            className={active(plainPathname, '/docs/guides', true)}
            href={toLocalizedPath('/docs/guides', locale)}
          >
            {text.chrome.guides}
          </Link>
          <details
            className={`primary-dropdown ${plainPathname.includes('/sdk/') ? 'is-active' : ''}`}
            onToggle={(event) => toggleSdkMenu(event.currentTarget.open)}
            open={isSdkMenuOpen}
            ref={sdkMenuRef}
          >
            <summary>
              {text.chrome.sdks}
              <ChevronDownIcon />
            </summary>
            <div className="primary-dropdown-menu">
              {sdkPlatformSections.map((section, index) => (
                <div
                  className={section.label ? 'sdk-menu-section is-grouped' : 'sdk-menu-section'}
                  key={section.label ?? `sdk-section-${index}`}
                >
                  {section.label ? (
                    <p className="sdk-menu-section-title">
                      <span>{locale === 'zh' ? section.labelZh : section.label}</span>
                      {section.description ? (
                        <small>
                          {locale === 'zh' ? section.descriptionZh : section.description}
                        </small>
                      ) : null}
                    </p>
                  ) : null}
                  <div className="sdk-menu-section-items">
                    {section.items.map((item) => (
                      <Link
                        className={active(plainPathname, item.href)}
                        href={toLocalizedPath(item.href, locale)}
                        key={item.href}
                        onClick={closeSdkMenu}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </details>
          <Link
            className={active(plainPathname, '/platform-api/')}
            href={toLocalizedPath('/platform-api/overview', locale)}
          >
            {text.chrome.platformApi}
          </Link>
        </nav>
        <div className="header-actions">
          <SearchDialog locale={locale} />
          <LanguageSwitcher
            locale={locale}
            onOpenChange={toggleLanguageMenu}
            open={isLanguageMenuOpen}
            pathname={pathname}
          />
          <a
            aria-label="OpenIM on GitHub"
            className="icon-button"
            href={siteConfig.githubUrl}
            rel="noreferrer"
            target="_blank"
          >
            <GithubIcon />
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

function LanguageSwitcher({
  locale,
  onOpenChange,
  open,
  pathname,
}: {
  locale: Locale;
  onOpenChange: (open: boolean) => void;
  open: boolean;
  pathname: string;
}) {
  const menuRef = useRef<HTMLDetailsElement>(null);
  const plainPathname = stripLocaleFromPath(pathname);
  const current = languageItems.find((item) => item.locale === locale) ?? languageItems[0];
  const menuLabel = locale === 'zh' ? '语言' : 'Language';

  useEffect(() => {
    if (!open) return;

    function closeOnOutsideClick(event: PointerEvent) {
      if (!menuRef.current?.contains(event.target as Node)) {
        onOpenChange(false);
      }
    }

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onOpenChange(false);
      }
    }

    document.addEventListener('pointerdown', closeOnOutsideClick);
    document.addEventListener('keydown', closeOnEscape);

    return () => {
      document.removeEventListener('pointerdown', closeOnOutsideClick);
      document.removeEventListener('keydown', closeOnEscape);
    };
  }, [onOpenChange, open]);

  function closeMenu() {
    onOpenChange(false);
  }

  return (
    <details
      className="language-dropdown"
      onToggle={(event) => onOpenChange(event.currentTarget.open)}
      open={open}
      ref={menuRef}
    >
      <summary
        aria-label={`${menuLabel}: ${current.label}`}
        title={`${menuLabel}: ${current.label}`}
      >
        <GlobeIcon />
        <span className="language-current">
          <span>{current.code}</span>
        </span>
        <ChevronDownIcon />
      </summary>
      <div className="language-dropdown-menu">
        <p>{menuLabel}</p>
        {languageItems.map((item) => {
          const activeLocale = item.locale === locale;
          return (
            <Link
              aria-current={activeLocale ? 'page' : undefined}
              className={activeLocale ? 'is-active' : ''}
              href={getLanguageHref(plainPathname, item.locale)}
              key={item.locale}
              onClick={closeMenu}
            >
              <span className="language-option-code">{item.code}</span>
              <span className="language-option-copy">
                <strong>{item.label}</strong>
                <small>{item.secondary}</small>
              </span>
              {activeLocale ? <CheckIcon /> : null}
            </Link>
          );
        })}
      </div>
    </details>
  );
}

function getLanguageHref(pathname: string, locale: Locale): string {
  const supportedLocales = routeLocaleMap.get(pathname);
  if (!supportedLocales || supportedLocales.includes(locale)) {
    return toLocalizedPath(pathname, locale);
  }

  if (pathname.startsWith('/platform-api/')) {
    return toLocalizedPath('/platform-api/overview', locale);
  }
  if (pathname.startsWith('/sdk/')) {
    return toLocalizedPath('/sdk', locale);
  }
  return toLocalizedPath('/docs/guides', locale);
}

function active(pathname: string, prefix: string, exact = false): string {
  const isActive = exact ? pathname === prefix : pathname.startsWith(prefix);
  return isActive ? 'is-active' : '';
}
