'use client';

import { useRef, useState, type ComponentPropsWithoutRef, type ReactNode } from 'react';
import { CheckIcon, CopyIcon } from '@/src/components/ui/icons';
import { writeClipboardText } from '@/src/lib/clipboard';
import type { Locale } from '@/src/lib/i18n';

export type CodeTab = {
  code: string;
  highlightedHtml?: string;
  language: string;
  title: string;
};

export function CodeBlock({
  code,
  insideTabs = false,
  highlightedHtml,
  children,
  language,
  locale = 'en',
  ...preProps
}: {
  code?: string;
  insideTabs?: boolean;
  highlightedHtml?: string;
  language?: string;
  locale?: Locale;
  children?: ReactNode;
} & Omit<ComponentPropsWithoutRef<'pre'>, 'children'>) {
  const codeBlockRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);
  const copyLabel = locale === 'zh' ? '复制代码' : 'Copy code';
  const copiedLabel = locale === 'zh' ? '已复制' : 'Copied';

  async function copyCode() {
    try {
      const renderedCode = codeBlockRef.current?.querySelector('pre')?.textContent;
      await writeClipboardText(renderedCode ?? code ?? '');
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1400);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className={`code-block-shell ${insideTabs ? 'is-inside-tabs' : ''}`} ref={codeBlockRef}>
      <button
        aria-label={copied ? copiedLabel : copyLabel}
        className="code-copy-button"
        onClick={() => void copyCode()}
        title={copied ? copiedLabel : copyLabel}
        type="button"
      >
        {copied ? <CheckIcon /> : <CopyIcon />}
      </button>
      {highlightedHtml ? (
        <div className="code-highlight" dangerouslySetInnerHTML={{ __html: highlightedHtml }} />
      ) : children !== undefined ? (
        <div className="code-highlight">
          <pre {...preProps}>{children}</pre>
        </div>
      ) : (
        <pre>
          <code data-language={language}>{code ?? ''}</code>
        </pre>
      )}
    </div>
  );
}

export function CodeTabs({ locale = 'en', tabs }: { locale?: Locale; tabs: CodeTab[] }) {
  const [active, setActive] = useState(0);
  const current = tabs[active] ?? tabs[0];
  if (!current) return null;

  return (
    <div className="code-tabs">
      <div aria-label={locale === 'zh' ? '代码示例语言' : 'Code example language'} role="tablist">
        {tabs.map((tab, index) => (
          <button
            aria-selected={index === active}
            key={`${tab.title}-${index}`}
            onClick={() => setActive(index)}
            role="tab"
            type="button"
          >
            {tab.title}
          </button>
        ))}
      </div>
      <CodeBlock
        code={current.code}
        highlightedHtml={current.highlightedHtml}
        insideTabs
        language={current.language}
        locale={locale}
      />
    </div>
  );
}
