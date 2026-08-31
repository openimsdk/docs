import Link from 'next/link';
import type { ComponentPropsWithoutRef } from 'react';
import type { MDXComponents } from 'mdx/types';
import defaultMdxComponents from 'fumadocs-ui/mdx';
import { CodeBlock } from '@/src/components/docs/code-block';
import {
  ChatHero,
  FeaturedSamplesSection,
  FeaturesSection,
  LandingCard,
  LandingSection,
  PlatformApiSection,
  SampleAppsSection,
  SDKsSection,
  StatCard,
} from '@/src/components/mdx/landing';
import { ApiScaffold, DocScaffold, OverviewScaffold } from '@/src/components/mdx/scaffolds';
import type { Locale } from '@/src/lib/i18n';
import { toLocalizedPath } from '@/src/lib/i18n';

function SmartLink({
  href = '',
  locale = 'en',
  ...props
}: ComponentPropsWithoutRef<'a'> & { locale?: Locale }) {
  if (href.startsWith('/')) return <Link href={toLocalizedPath(href, locale)} {...props} />;
  return <a href={href} rel={href.startsWith('http') ? 'noreferrer' : undefined} {...props} />;
}

export function getMDXComponents(locale: Locale = 'en', components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    pre: (props) => <CodeBlock {...props} />,
    a: (props) => <SmartLink {...props} locale={locale} />,
    ChatHero: (props) => <ChatHero {...props} locale={locale} />,
    FeaturedSamplesSection: () => <FeaturedSamplesSection locale={locale} />,
    FeaturesSection: () => <FeaturesSection locale={locale} />,
    LandingCard: (props) => <LandingCard {...props} locale={locale} />,
    LandingSection,
    PlatformApiSection: () => <PlatformApiSection locale={locale} />,
    SampleAppsSection: () => <SampleAppsSection locale={locale} />,
    SDKsSection: () => <SDKsSection locale={locale} />,
    StatCard,
    ApiScaffold: (props) => <ApiScaffold {...props} locale={locale} />,
    DocScaffold: (props) => <DocScaffold {...props} locale={locale} />,
    OverviewScaffold: (props) => <OverviewScaffold {...props} locale={locale} />,
    ...components,
  };
}

export const useMDXComponents = getMDXComponents;

declare global {
  type MDXProvidedComponents = ReturnType<typeof getMDXComponents>;
}
