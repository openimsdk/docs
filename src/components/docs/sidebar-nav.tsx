import Link from 'next/link';
import type { CSSProperties } from 'react';
import type { NavContext, NavNode } from '@/src/types/docs';
import { getPageCommercialInfo } from '@/src/lib/client-sdk-commercial';
import { nodeContainsPath } from '@/src/lib/navigation';
import type { Locale } from '@/src/lib/i18n';
import { toLocalizedPath } from '@/src/lib/i18n';
import { localizeNavNodeTitle } from '@/src/lib/localized-docs';
import { SidebarDisclosure } from '@/src/components/docs/sidebar-disclosure';

export function SidebarNav({
  nodes,
  currentPath,
  locale = 'en',
  sidebarExpansion = 'top-level',
  stateScope = 'docs',
}: {
  nodes: NavNode[];
  currentPath: string;
  locale?: Locale;
  sidebarExpansion?: NavContext['sidebarExpansion'];
  stateScope?: string;
}) {
  return (
    <nav aria-label="Documentation navigation" className="sidebar-tree">
      {nodes.map((node) => (
        <SidebarNode
          currentPath={currentPath}
          depth={0}
          inheritedEnterprise={false}
          key={node.id}
          locale={locale}
          node={node}
          sidebarExpansion={sidebarExpansion}
          stateScope={stateScope}
        />
      ))}
    </nav>
  );
}

function SidebarNode({
  node,
  currentPath,
  depth,
  inheritedEnterprise,
  locale,
  sidebarExpansion,
  stateScope,
}: {
  node: NavNode;
  currentPath: string;
  depth: number;
  inheritedEnterprise: boolean;
  locale: Locale;
  sidebarExpansion: NavContext['sidebarExpansion'];
  stateScope: string;
}) {
  if (!nodeSupportsLocale(node, locale)) return null;

  const active = node.href === currentPath;
  const containsActive = nodeContainsPath(node, currentPath);
  const enterprise = isEnterpriseNode(node);
  const title = localizeNavNodeTitle(node, locale);

  if (node.children.length === 0) {
    if (!node.href) return null;
    return (
      <Link
        aria-current={active ? 'page' : undefined}
        className={`sidebar-link ${active ? 'is-active' : ''}`}
        href={toLocalizedPath(node.href, locale)}
        style={{ '--nav-depth': depth } as CSSProperties}
      >
        <SidebarNodeLabel
          inheritedEnterprise={inheritedEnterprise}
          enterprise={enterprise}
          locale={locale}
          title={title}
        />
      </Link>
    );
  }

  return (
    <SidebarDisclosure
      className="sidebar-group"
      initiallyOpen={containsActive || (sidebarExpansion === 'top-level' && depth === 0)}
      stateKey={`${stateScope}:${node.id}`}
    >
      <summary style={{ '--nav-depth': depth } as CSSProperties}>
        {node.href ? (
          <Link
            aria-current={active ? 'page' : undefined}
            href={toLocalizedPath(node.href, locale)}
          >
            <SidebarNodeLabel
              inheritedEnterprise={inheritedEnterprise}
              enterprise={enterprise}
              locale={locale}
              title={title}
            />
          </Link>
        ) : (
          <SidebarNodeLabel
            inheritedEnterprise={inheritedEnterprise}
            enterprise={enterprise}
            locale={locale}
            title={title}
          />
        )}
      </summary>
      <div>
        {node.children.map((child) => (
          <SidebarNode
            currentPath={currentPath}
            depth={depth + 1}
            inheritedEnterprise={inheritedEnterprise || enterprise}
            key={child.id}
            locale={locale}
            node={child}
            sidebarExpansion={sidebarExpansion}
            stateScope={stateScope}
          />
        ))}
      </div>
    </SidebarDisclosure>
  );
}

function nodeSupportsLocale(node: NavNode, locale: Locale): boolean {
  if (node.locales && !node.locales.includes(locale)) return false;
  if (node.href) return true;
  return node.children.some((child) => nodeSupportsLocale(child, locale));
}

function SidebarNodeLabel({
  enterprise,
  inheritedEnterprise,
  locale,
  title,
}: {
  enterprise: boolean;
  inheritedEnterprise: boolean;
  locale: Locale;
  title: string;
}) {
  return (
    <span className="sidebar-label-row">
      <span className="sidebar-label-text">{title}</span>
      {enterprise && !inheritedEnterprise ? (
        <span className="sidebar-enterprise-badge">
          {locale === 'zh' ? '商业版' : 'Enterprise'}
        </span>
      ) : null}
    </span>
  );
}

function isEnterpriseNode(node: NavNode): boolean {
  if (node.edition === 'enterprise') return true;

  if (node.children.length === 0) {
    return node.href ? getPageCommercialInfo(node.href).kind === 'full' : false;
  }

  const taskPages = getTaskPagePaths(node);
  return (
    taskPages.length > 0 && taskPages.every((path) => getPageCommercialInfo(path).kind === 'full')
  );
}

function getTaskPagePaths(node: NavNode): string[] {
  if (node.children.length === 0) {
    if (!node.href || /\/overview(?:-|$)/.test(node.href)) return [];
    return [node.href];
  }

  return node.children.flatMap(getTaskPagePaths);
}
