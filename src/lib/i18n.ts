export const locales = ['en', 'zh'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export function isLocale(value: string | undefined): value is Locale {
  return locales.includes(value as Locale);
}

export function localeFromPathname(pathname: string): Locale {
  const segment = pathname.split('/').filter(Boolean)[0];
  return isLocale(segment) ? segment : defaultLocale;
}

export function localePrefix(locale: Locale): string {
  return locale === defaultLocale ? '' : `/${locale}`;
}

export function stripLocaleFromPath(path: string): string {
  const normalized = normalizePath(path);
  const [first, ...rest] = normalized.split('/').filter(Boolean);
  if (isLocale(first)) return normalizePath(`/${rest.join('/')}`);
  return normalized;
}

export function toLocalizedPath(href: string | null | undefined, locale: Locale): string {
  if (!href) return '#';
  if (href.startsWith('#')) return href;
  if (/^(https?:)?\/\//.test(href) || href.startsWith('mailto:')) return href;

  const [pathPart, suffix = ''] = href.split(/(?=[?#])/, 2);
  const path = stripLocaleFromPath(pathPart)
    .replace(/^\/docs\/chat\/platform-api\/v3(?=\/|$)/, '/platform-api')
    .replace(/^\/docs\/chat\/sdk\/v4(?=\/|$)/, '/sdk');
  return `${localePrefix(locale)}${path}${suffix}`;
}

export const i18nText = {
  en: {
    article: {
      copied: 'Copied',
      copiedLink: 'Link copied',
      copiedMarkdown: 'Markdown copied',
      copy: 'Copy',
      copyFailed: 'Copy failed',
      copyLink: 'Copy link',
      copyLinkHint: 'Copy this page URL',
      copyMarkdown: 'Copy as Markdown',
      copyMarkdownHint: 'Copy this page source',
      editPage: 'Edit page',
      scaffold: 'Scaffold',
      commercialBadge: 'Enterprise',
    },
    chrome: {
      docs: 'Docs',
      footerLabel: 'OpenIM documentation',
      footerText: 'Client SDK integration, Platform API, and implementation guides for OpenIM.',
      guides: 'Guides',
      language: 'Language',
      platformApi: 'Platform API',
      primaryNav: 'Primary navigation',
      sdks: 'SDKs',
    },
    docs: {
      browse: 'Browse',
      next: 'Next',
      onThisPage: 'On this page',
      previous: 'Previous',
    },
    feedback: {
      helpful: 'Was this page helpful?',
      no: 'No',
      stored: (answer: 'yes' | 'no') =>
        `Thanks — your “${answer}” response was stored locally for the feedback adapter.`,
      yes: 'Yes',
    },
    search: {
      aria: 'Search documentation',
      empty: 'No matching pages.',
      hint: 'Type at least two characters to search titles and routes.',
      input: 'Search query',
      loading: 'Searching…',
      placeholder: 'Search documentation…',
      trigger: 'Search docs',
    },
  },
  zh: {
    article: {
      copied: '已复制',
      copiedLink: '链接已复制',
      copiedMarkdown: 'Markdown 已复制',
      copy: '复制',
      copyFailed: '复制失败',
      copyLink: '复制链接',
      copyLinkHint: '复制当前页面 URL',
      copyMarkdown: '复制为 Markdown',
      copyMarkdownHint: '复制当前页面源码',
      editPage: '编辑页面',
      scaffold: '占位页',
      commercialBadge: '商业版',
    },
    chrome: {
      docs: '文档',
      footerLabel: 'OpenIM 文档',
      footerText: '提供 OpenIM 客户端 SDK、Platform API 与实现指南。',
      guides: '指南',
      language: '语言',
      platformApi: '平台 API',
      primaryNav: '主导航',
      sdks: 'SDKs',
    },
    docs: {
      browse: '浏览',
      next: '下一篇',
      onThisPage: '本页内容',
      previous: '上一篇',
    },
    feedback: {
      helpful: '这个页面有帮助吗？',
      no: '否',
      stored: (answer: 'yes' | 'no') =>
        `已在本地保存你的反馈：${answer === 'yes' ? '有帮助' : '无帮助'}。`,
      yes: '是',
    },
    search: {
      aria: '搜索文档',
      empty: '没有匹配的页面。',
      hint: '输入至少两个字符来搜索标题和路径。',
      input: '搜索关键词',
      loading: '搜索中…',
      placeholder: '搜索文档…',
      trigger: '搜索文档',
    },
  },
} satisfies Record<Locale, Record<string, unknown>>;

export function t(locale: Locale): (typeof i18nText)[Locale] {
  return i18nText[locale];
}

function normalizePath(path: string): string {
  const normalized = `/${path}`.replace(/\/{2,}/g, '/').replace(/\/$/, '');
  return normalized || '/';
}
