import Link from 'next/link';
import { Fragment, type ReactNode } from 'react';
import { CodeBlock, CodeTabs, type CodeTab } from '@/src/components/docs/code-block';
import { createHeadingIdGenerator } from '@/src/lib/heading-ids';
import type { Locale } from '@/src/lib/i18n';
import { t, toLocalizedPath } from '@/src/lib/i18n';
import { matchCommercialSymbol } from '@/src/lib/client-sdk-commercial';

type MarkdownBlock =
  | { type: 'blockquote'; lines: string[] }
  | { type: 'code'; code: string; language: string }
  | { type: 'codeTabs'; tabs: CodeTab[] }
  | { type: 'heading'; depth: number; id: string; title: string }
  | { type: 'hr' }
  | { type: 'list'; items: string[]; ordered: boolean }
  | { type: 'paragraph'; text: string }
  | { type: 'table'; rows: string[][] };

type InlineRenderOptions = {
  commercialNames?: ReadonlySet<string>;
  locale: Locale;
};

export function MarkdownContent({
  body,
  locale,
  commercialNames,
}: {
  body: string;
  locale: Locale;
  commercialNames?: ReadonlySet<string>;
}) {
  const inlineOptions: InlineRenderOptions = { commercialNames, locale };

  return (
    <>
      {parseMarkdown(body).map((block, index) => (
        <MarkdownBlockView
          block={block}
          index={index}
          inlineOptions={inlineOptions}
          key={`${block.type}-${index}`}
        />
      ))}
    </>
  );
}

function MarkdownBlockView({
  block,
  index,
  inlineOptions,
}: {
  block: MarkdownBlock;
  index: number;
  inlineOptions: InlineRenderOptions;
}) {
  if (block.type === 'heading') {
    const level = Math.min(Math.max(block.depth, 2), 4);
    const content = renderInlineMarkdown(block.title, inlineOptions);
    if (level === 2) return <h2 id={block.id}>{content}</h2>;
    if (level === 3) return <h3 id={block.id}>{content}</h3>;
    return <h4 id={block.id}>{content}</h4>;
  }

  if (block.type === 'paragraph') {
    return <p>{renderInlineMarkdown(block.text, inlineOptions)}</p>;
  }

  if (block.type === 'blockquote') {
    return (
      <blockquote>
        {block.lines.map((line, lineIndex) => (
          <Fragment key={`${index}-${lineIndex}`}>
            {lineIndex > 0 ? <br /> : null}
            {renderInlineMarkdown(line, inlineOptions)}
          </Fragment>
        ))}
      </blockquote>
    );
  }

  if (block.type === 'code') {
    return <CodeBlock code={block.code} language={block.language} locale={inlineOptions.locale} />;
  }

  if (block.type === 'codeTabs') {
    return <CodeTabs locale={inlineOptions.locale} tabs={block.tabs} />;
  }

  if (block.type === 'list') {
    const Tag = block.ordered ? 'ol' : 'ul';
    return (
      <Tag>
        {block.items.map((item, itemIndex) => (
          <li key={`${index}-${itemIndex}`}>{renderInlineMarkdown(item, inlineOptions)}</li>
        ))}
      </Tag>
    );
  }

  if (block.type === 'table') {
    const [headings = [], ...rows] = block.rows;
    return (
      <div className="markdown-table-scroll">
        <table>
          {headings.length > 0 ? (
            <thead>
              <tr>
                {headings.map((cell, cellIndex) => (
                  <th key={`${index}-head-${cellIndex}`}>
                    {renderInlineMarkdown(cell, inlineOptions)}
                  </th>
                ))}
              </tr>
            </thead>
          ) : null}
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={`${index}-row-${rowIndex}`}>
                {row.map((cell, cellIndex) => (
                  <td key={`${index}-${rowIndex}-${cellIndex}`}>
                    {renderInlineMarkdown(cell, inlineOptions)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  return <hr />;
}

function parseMarkdown(body: string): MarkdownBlock[] {
  const lines = body.replace(/\r\n/g, '\n').split('\n');
  const blocks: MarkdownBlock[] = [];
  const nextHeadingId = createHeadingIdGenerator();
  let index = 0;

  while (index < lines.length) {
    const line = lines[index];
    const trimmed = line.trim();

    if (!trimmed) {
      index += 1;
      continue;
    }

    if (trimmed === ':::code-tabs') {
      const tabs: CodeTab[] = [];
      index += 1;

      while (index < lines.length && lines[index].trim() !== ':::') {
        const tabFence = lines[index].trim().match(/^```([\w-]+)?(?:\s+(.+))?$/);
        if (!tabFence) {
          index += 1;
          continue;
        }

        const code: string[] = [];
        const language = tabFence[1] ?? 'text';
        const title = parseCodeTabTitle(tabFence[2], language);
        index += 1;
        while (index < lines.length && !lines[index].trim().startsWith('```')) {
          code.push(lines[index]);
          index += 1;
        }
        tabs.push({ code: code.join('\n'), language, title });
        index += 1;
      }

      if (lines[index]?.trim() === ':::') index += 1;
      if (tabs.length > 0) blocks.push({ type: 'codeTabs', tabs });
      continue;
    }

    const fence = trimmed.match(/^```([\w-]+)?/);
    if (fence) {
      const code: string[] = [];
      index += 1;
      while (index < lines.length && !lines[index].trim().startsWith('```')) {
        code.push(lines[index]);
        index += 1;
      }
      blocks.push({ type: 'code', code: code.join('\n'), language: fence[1] ?? 'text' });
      index += 1;
      continue;
    }

    const heading = trimmed.match(/^(#{1,6})\s+(.+)$/);
    if (heading) {
      blocks.push({
        type: 'heading',
        depth: Math.max(heading[1].length, 2),
        id: nextHeadingId(heading[2].trim()),
        title: heading[2].trim(),
      });
      index += 1;
      continue;
    }

    if (isTableStart(lines, index)) {
      const rows: string[][] = [parseTableRow(lines[index])];
      index += 2;
      while (index < lines.length && lines[index].includes('|') && lines[index].trim()) {
        rows.push(parseTableRow(lines[index]));
        index += 1;
      }
      blocks.push({ type: 'table', rows });
      continue;
    }

    const listMatch = trimmed.match(/^(([-*+])|(\d+[.)]))\s+(.+)$/);
    if (listMatch) {
      const ordered = Boolean(listMatch[3]);
      const items: string[] = [];
      while (index < lines.length) {
        const item = lines[index].trim().match(/^(([-*+])|(\d+[.)]))\s+(.+)$/);
        if (!item) break;
        items.push(item[4]);
        index += 1;
      }
      blocks.push({ type: 'list', items, ordered });
      continue;
    }

    if (trimmed.startsWith('>')) {
      const quote: string[] = [];
      while (index < lines.length && lines[index].trim().startsWith('>')) {
        quote.push(lines[index].replace(/^\s*>\s?/, '').trim());
        index += 1;
      }
      blocks.push({ type: 'blockquote', lines: quote });
      continue;
    }

    if (/^(-{3,}|\*{3,})$/.test(trimmed)) {
      blocks.push({ type: 'hr' });
      index += 1;
      continue;
    }

    const paragraph: string[] = [];
    while (index < lines.length && isParagraphLine(lines[index])) {
      paragraph.push(lines[index].trim());
      index += 1;
    }
    blocks.push({ type: 'paragraph', text: paragraph.join(' ') });
  }

  return blocks;
}

function isParagraphLine(line: string) {
  const trimmed = line.trim();
  return (
    Boolean(trimmed) &&
    !trimmed.startsWith('```') &&
    !trimmed.startsWith('>') &&
    !trimmed.match(/^#{1,6}\s+/) &&
    !trimmed.match(/^(-{3,}|\*{3,})$/) &&
    !trimmed.match(/^(([-*+])|(\d+[.)]))\s+(.+)$/) &&
    !isTableStart([line, ''], 0)
  );
}

function isTableStart(lines: string[], index: number) {
  return (
    lines[index]?.includes('|') &&
    Boolean(lines[index + 1]?.match(/^\s*\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?\s*$/))
  );
}

function parseTableRow(line: string) {
  return line
    .trim()
    .replace(/^\|/, '')
    .replace(/\|$/, '')
    .split('|')
    .map((cell) => cell.trim());
}

function parseCodeTabTitle(meta: string | undefined, language: string) {
  const title = meta?.match(/title="([^"]+)"/)?.[1] ?? meta?.trim();
  if (title) return title;
  const labels: Record<string, string> = {
    bash: 'cURL',
    curl: 'cURL',
    go: 'Go',
    javascript: 'Node.js',
    js: 'Node.js',
    json: 'JSON',
    typescript: 'TypeScript',
  };
  return labels[language] ?? language;
}

function renderInlineMarkdown(value: string, options: InlineRenderOptions): ReactNode[] {
  const nodes: ReactNode[] = [];
  const pattern =
    /!\[([^\]]*)]\(([^)]+)\)|\[([^\]]+)]\(([^)]+)\)|`([^`]+)`|\*\*([^*]+)\*\*|(<span className="enterprise-field-badge">(?:商业版|Enterprise)<\/span>)/g;
  let cursor = 0;
  const badgeLabel = t(options.locale).article.commercialBadge;

  for (const match of value.matchAll(pattern)) {
    if (match.index > cursor) nodes.push(value.slice(cursor, match.index));
    if (match[1] !== undefined) {
      nodes.push(
        <a href={match[2]} key={`${match.index}-image`} rel="noreferrer" target="_blank">
          {match[1] || match[2]}
        </a>,
      );
    } else if (match[3] !== undefined) {
      const href = match[4];
      const localizedHref = toLocalizedPath(href, options.locale);
      if (isExternalHref(localizedHref)) {
        nodes.push(
          <a href={localizedHref} key={`${match.index}-link`} rel="noreferrer" target="_blank">
            {renderInlineMarkdown(match[3], options)}
          </a>,
        );
      } else {
        nodes.push(
          <Link href={localizedHref} key={`${match.index}-link`}>
            {renderInlineMarkdown(match[3], options)}
          </Link>,
        );
      }
    } else if (match[5] !== undefined) {
      const codeText = match[5];
      const commercial = matchCommercialSymbol(codeText, options.commercialNames ?? new Set());
      if (commercial) {
        nodes.push(
          <span className="commercial-api-ref" key={`${match.index}-code`}>
            <code>{codeText}</code>
            <span className="enterprise-field-badge">{badgeLabel}</span>
          </span>,
        );
      } else {
        nodes.push(<code key={`${match.index}-code`}>{codeText}</code>);
      }
    } else if (match[6] !== undefined) {
      nodes.push(
        <strong key={`${match.index}-strong`}>{renderInlineMarkdown(match[6], options)}</strong>,
      );
    } else if (match[7] !== undefined) {
      nodes.push(
        <span className="enterprise-field-badge" key={`${match.index}-enterprise`}>
          {badgeLabel}
        </span>,
      );
    }
    cursor = match.index + match[0].length;
  }

  if (cursor < value.length) nodes.push(value.slice(cursor));
  return nodes;
}

function isExternalHref(href: string) {
  return /^(https?:)?\/\//.test(href) || href.startsWith('mailto:');
}
