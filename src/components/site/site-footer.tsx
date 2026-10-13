'use client';

import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/src/config/site';
import type { Locale } from '@/src/lib/i18n';
import { toLocalizedPath } from '@/src/lib/i18n';
import {
  ArrowUpIcon,
  ExternalLinkIcon,
  GithubIcon,
  GlobeIcon,
} from '@/src/components/ui/icons';

interface FooterLinkItem {
  label: string;
  href: string;
  isExternal?: boolean;
  badge?: string;
}

interface FooterSection {
  title: string;
  links: FooterLinkItem[];
}

export function SiteFooter({ locale = 'en' }: { locale?: Locale }) {
  const isZh = locale === 'zh';
  const legacyDocsUrl = isZh
    ? `${siteConfig.legacyDocsUrl}/zh-Hans/`
    : `${siteConfig.legacyDocsUrl}/`;

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const sections: FooterSection[] = [
    {
      title: isZh ? '全平台 SDK' : 'Client SDKs',
      links: [
        { label: 'Web / WASM SDK', href: '/sdk/wasm/overview' },
        { label: 'Android SDK', href: '/sdk/android/overview' },
        { label: 'iOS SDK', href: '/sdk/ios/overview' },
        { label: 'Flutter SDK', href: '/sdk/flutter/overview' },
        { label: 'React Native SDK', href: '/sdk/react-native/overview' },
        { label: 'uni-app / uni-app x', href: '/sdk/uniapp/overview' },
        {
          label: isZh ? 'HarmonyOS SDK' : 'HarmonyOS SDK',
          href: '/sdk/harmony/overview',
          badge: isZh ? '商业版' : 'Enterprise',
        },
        { label: 'Electron SDK', href: '/sdk/electron/overview' },
      ],
    },
    {
      title: isZh ? '核心文档' : 'Documentation',
      links: [
        { label: isZh ? '平台 API (Platform API)' : 'Platform API', href: '/platform-api' },
        { label: isZh ? '实施指南 (Guides)' : 'Implementation Guides', href: '/docs/guides' },
        {
          label: isZh ? '快速开始 (Quickstart)' : 'Quickstart Guide',
          href: '/sdk/wasm/getting-started/environment-specific-implementation',
        },
        {
          label: isZh ? '客户端通用错误码' : 'Client Error Codes',
          href: '/docs/chat/sdk/error-codes',
        },
        {
          label: isZh ? '旧版文档归档' : 'Legacy Documentation',
          href: legacyDocsUrl,
          isExternal: true,
        },
      ],
    },
    {
      title: isZh ? '开源与生态' : 'Ecosystem & Support',
      links: [
        {
          label: isZh ? 'OpenIM 官方网站' : 'Official Website',
          href: siteConfig.websiteUrl,
          isExternal: true,
        },
        {
          label: isZh ? 'GitHub 开源组织' : 'GitHub Organization',
          href: siteConfig.githubUrl,
          isExternal: true,
        },
        {
          label: 'OpenIMServer 服务端',
          href: 'https://github.com/openimsdk/open-im-server',
          isExternal: true,
        },
        {
          label: isZh ? '商业版方案与企业咨询' : 'Enterprise Solutions',
          href: siteConfig.enterpriseUrl,
          isExternal: true,
        },
        {
          label: isZh ? '提交 Issue 与反馈' : 'Issues & Feedback',
          href: 'https://github.com/openimsdk/open-im-server/issues',
          isExternal: true,
        },
      ],
    },
  ];

  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        {/* Top: Brand info + Navigation Matrix */}
        <div className="site-footer-main">
          {/* Brand info */}
          <div className="footer-brand-column">
            <Link
              aria-label="OpenIM Docs Home"
              className="footer-brand-lockup"
              href={toLocalizedPath('/', locale)}
            >
              <span className="footer-brand-mark">
                <Image
                  alt="OpenIM Logo"
                  height={32}
                  src="/brand/logo-mark.png"
                  width={32}
                />
              </span>
              <span className="footer-brand-name">OpenIM</span>
              <span className="footer-brand-badge">{isZh ? '文档' : 'Docs'}</span>
            </Link>

            <p className="footer-brand-desc">
              {isZh
                ? '专注于高可用、高性能的开源即时通讯与实时音视频生态系统，提供全平台客户端 SDK、高并发服务端与全流程技术实施方案。'
                : 'High-performance, scalable open-source instant messaging and RTC ecosystem, providing full-platform client SDKs, robust server architecture, and end-to-end integration guides.'}
            </p>

            <div className="footer-brand-actions">
              <a
                className="footer-action-btn"
                href={siteConfig.githubUrl}
                rel="noreferrer"
                target="_blank"
              >
                <GithubIcon height={16} width={16} />
                <span>GitHub</span>
                <ExternalLinkIcon className="footer-ext-icon" height={12} width={12} />
              </a>

              <a
                className="footer-action-btn"
                href={siteConfig.websiteUrl}
                rel="noreferrer"
                target="_blank"
              >
                <GlobeIcon height={16} width={16} />
                <span>{isZh ? '官方网站' : 'Website'}</span>
                <ExternalLinkIcon className="footer-ext-icon" height={12} width={12} />
              </a>

              <a
                className="footer-action-btn footer-action-btn-highlight"
                href={siteConfig.enterpriseUrl}
                rel="noreferrer"
                target="_blank"
              >
                <span>{isZh ? '商业版支持' : 'Enterprise'}</span>
                <ExternalLinkIcon className="footer-ext-icon" height={12} width={12} />
              </a>
            </div>
          </div>

          {/* Navigation Links Columns */}
          <div className="footer-nav-matrix">
            {sections.map((section) => (
              <div className="footer-nav-col" key={section.title}>
                <h4 className="footer-col-title">{section.title}</h4>
                <ul className="footer-col-links">
                  {section.links.map((link) => {
                    const isExt = link.isExternal;
                    const href = isExt ? link.href : toLocalizedPath(link.href, locale);

                    return (
                      <li key={link.label}>
                        {isExt ? (
                          <a
                            className="footer-link-item"
                            href={href}
                            rel="noreferrer"
                            target="_blank"
                          >
                            <span>{link.label}</span>
                            <ExternalLinkIcon
                              className="footer-link-ext-icon"
                              height={11}
                              width={11}
                            />
                            {link.badge && (
                              <span className="footer-link-badge">{link.badge}</span>
                            )}
                          </a>
                        ) : (
                          <Link className="footer-link-item" href={href}>
                            <span>{link.label}</span>
                            {link.badge && (
                              <span className="footer-link-badge">{link.badge}</span>
                            )}
                          </Link>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom: Copyright & Legal + Back to Top */}
        <div className="site-footer-bottom">
          <div className="footer-bottom-left">
            <span className="footer-copyright">
              © {new Date().getFullYear()} OpenIM. {isZh ? '保留所有权利。' : 'All rights reserved.'}
            </span>
            <span className="footer-bottom-divider">·</span>
            <span className="footer-license">
              {isZh ? '基于 Apache 2.0 协议开源构建' : 'Open source under Apache-2.0 license'}
            </span>
          </div>

          <div className="footer-bottom-right">
            <button
              className="footer-back-to-top-btn"
              onClick={scrollToTop}
              title={isZh ? '返回页面顶部' : 'Back to top'}
              type="button"
            >
              <span>{isZh ? '返回顶部' : 'Back to top'}</span>
              <ArrowUpIcon height={14} width={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
