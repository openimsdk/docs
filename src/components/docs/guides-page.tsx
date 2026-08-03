import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import Link from 'next/link';
import { notFound, redirect } from 'next/navigation';
import { Fragment, type ReactNode } from 'react';
import { ArticleHeader } from '@/src/components/docs/article-header';
import type { ContextOption } from '@/src/components/docs/context-picker';
import { DocsShell } from '@/src/components/docs/docs-shell';
import { ChevronRightIcon } from '@/src/components/ui/icons';
import guidesContentData from '@/src/generated/guides-content.json';
import { extractMarkdownHeadings } from '@/src/lib/heading-ids';
import type { Locale } from '@/src/lib/i18n';
import { toLocalizedPath } from '@/src/lib/i18n';
import type { BreadcrumbItem, NavContext, NavNode, RouteRecord, TocItem } from '@/src/types/docs';

type GuideItem = {
  title: string;
  description: string;
  href: string;
  badge: string;
  slug?: string;
};

type GuideGroup = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  items: GuideItem[];
};

type GuidesCopy = {
  groups: GuideGroup[];
  heroDescription: string;
  heroEyebrow: string;
  heroTitle: string;
  referenceLabel: string;
  referenceTitle: string;
  referenceDescription: string;
  sectionTitle: string;
  sectionDescription: string;
};

type GuideSelection =
  | { kind: 'overview' }
  | { kind: 'group'; group: GuideGroup }
  | { kind: 'item'; group: GuideGroup; item: GuideItem };

type GuideContentRecord = {
  body: string;
  excerpt: string;
  headings: TocItem[];
  sourcePath: string;
  sourceUrl: string;
  title: string;
};

const guidesContent = guidesContentData as {
  records: Record<string, GuideContentRecord>;
};

const reviewedZhGuideFiles: Record<string, string> = {
  '/guides/introduction/features': 'getting-started/open-source-capabilities.mdx',
  '/guides/introduction/version': 'getting-started/versions.mdx',
  '/guides/gettingStarted/env-comp': 'deployment/components.mdx',
  '/guides/gettingStarted/dockerCompose': 'deployment/docker-compose.mdx',
  '/guides/gettingStarted/imSourceCodeDeployment': 'deployment/source.mdx',
  '/guides/gettingStarted/internalDeployment': 'deployment/offline.mdx',
  '/guides/gettingStarted/cluster': 'deployment/cluster.mdx',
  '/guides/gettingStarted/ports': 'deployment/network.mdx',
  '/guides/gettingStarted/nginxDomainConfig': 'deployment/domain.mdx',
  '/guides/gettingStarted/production': 'deployment/production.mdx',
  '/guides/gettingStarted/quickTestServer': 'deployment/verification.mdx',
  '/guides/gettingStarted/faq': 'operations/troubleshooting.mdx',
};

const reviewedZhGuides = new Map<string, GuideContentRecord>(
  Object.entries(reviewedZhGuideFiles).map(([sourcePath, file]) => {
    const body = readFileSync(
      resolve(process.cwd(), 'content/zh/docs/guides', file),
      'utf8',
    ).trim();
    const existing = guidesContent.records[sourcePath];

    return [
      sourcePath,
      {
        ...existing,
        body,
        excerpt: guideExcerpt(body),
        headings: extractMarkdownHeadings(body),
        sourceUrl: `https://github.com/openimsdk/docs/blob/a177b296f1abe53ba2cf7d897acf86467a45e7c6/docs${sourcePath}.md`,
      },
    ];
  }),
);

const reviewedEnGuideFiles: Record<string, string> = {
  '/guides/introduction/product': 'getting-started/overview.mdx',
  '/guides/introduction/termDefinition': 'getting-started/concepts.mdx',
  '/guides/introduction/features': 'getting-started/open-source-capabilities.mdx',
  '/guides/introduction/version': 'getting-started/versions.mdx',
  '/guides/gettingStarted/env-comp': 'deployment/components.mdx',
  '/guides/gettingStarted/dockerCompose': 'deployment/docker-compose.mdx',
  '/guides/gettingStarted/imSourceCodeDeployment': 'deployment/source.mdx',
  '/guides/gettingStarted/internalDeployment': 'deployment/offline.mdx',
  '/guides/gettingStarted/cluster': 'deployment/cluster.mdx',
  '/guides/gettingStarted/ports': 'deployment/network.mdx',
  '/guides/gettingStarted/nginxDomainConfig': 'deployment/domain.mdx',
  '/guides/gettingStarted/production': 'deployment/production.mdx',
  '/guides/gettingStarted/quickTestServer': 'deployment/verification.mdx',
  '/guides/solution/integrate': 'integration/business-system.mdx',
  '/guides/solution/offlinePush': 'integration/offline-push.mdx',
  '/guides/solution/migrate': 'integration/migration.mdx',
  '/guides/solution/developNewFeatures': 'extension/server-development.mdx',
  '/guides/solution/s3': 'extension/object-storage.mdx',
  '/guides/solution/s3convert': 'extension/storage-migration.mdx',
  '/guides/solution/openclaw': 'extension/ai-openclaw.mdx',
  '/guides/gettingStarted/admin': 'operations/monitoring.mdx',
  '/guides/solution/howToDebug': 'operations/debugging.mdx',
  '/guides/gettingStarted/faq': 'operations/troubleshooting.mdx',
  '/guides/benchmark/benchmark_test': 'operations/benchmark-results.mdx',
  '/guides/benchmark/benchmark_guide': 'operations/benchmark-tools.mdx',
};

const reviewedEnGuides = new Map<string, GuideContentRecord>(
  Object.entries(reviewedEnGuideFiles).map(([sourcePath, file]) => {
    const body = readFileSync(resolve(process.cwd(), 'content/en/docs/guides', file), 'utf8').trim();
    const existing = guidesContent.records[sourcePath];
    return [sourcePath, { ...existing, body, excerpt: guideExcerpt(body), headings: extractMarkdownHeadings(body) }];
  }),
);

const legacyBase = {
  en: 'https://docs.openim.io',
  zh: 'https://docs.openim.io/zh-Hans',
} satisfies Record<Locale, string>;

function legacy(locale: Locale, path: string) {
  return `${legacyBase[locale]}${path}`;
}

const legacyZhGuidePaths: Record<string, string[]> = {
  'quick-start': ['getting-started'],
  'quick-start/intro': ['getting-started', 'overview'],
  'quick-start/concept': ['getting-started', 'concepts'],
  'quick-start/feature': ['getting-started', 'open-source-capabilities'],
  'quick-start/version': ['getting-started', 'versions'],
  'quick-deployment': ['deployment'],
  'quick-deployment/env': ['deployment', 'components'],
  'quick-deployment/docker': ['deployment', 'docker-compose'],
  'quick-deployment/source': ['deployment', 'source'],
  'quick-deployment/offline': ['deployment', 'offline'],
  'quick-deployment/cluster': ['deployment', 'cluster'],
  'quick-deployment/ports': ['deployment', 'network'],
  'quick-deployment/domain': ['deployment', 'domain'],
  'quick-deployment/prod': ['deployment', 'production'],
  'quick-deployment/verify': ['deployment', 'verification'],
  'quick-deployment/faq': ['operations', 'troubleshooting'],
  'quick-deployment/ops': ['operations', 'monitoring'],
  solutions: ['integration'],
  'solutions/dev': ['extension', 'server-development'],
  'solutions/debug': ['operations', 'debugging'],
  'solutions/integrate': ['integration', 'business-system'],
  'solutions/migrate': ['integration', 'migration'],
  'solutions/push': ['integration', 'offline-push'],
  'solutions/s3': ['extension', 'object-storage'],
  'solutions/storage': ['extension', 'storage-migration'],
  'solutions/openclaw': ['extension', 'ai-openclaw'],
  reliability: ['operations'],
  'reliability/report': ['operations', 'benchmark-results'],
  'reliability/tooling': ['operations', 'benchmark-tools'],
};

function guidesCopy(locale: Locale): GuidesCopy {
  if (locale === 'zh') {
    return {
      groups: [
        {
          id: 'getting-started',
          eyebrow: 'Getting Started',
          title: '认识 OpenIM',
          description: '先理解 OpenIM 的产品定位、核心模型、开源能力边界和版本选择。',
          items: [
            {
              title: 'OpenIM 概述',
              description: '了解 OpenIM 的定位、生态组件、部署方式和典型使用场景。',
              href: legacy(locale, '/guides/introduction/product'),
              badge: 'Intro',
              slug: 'overview',
            },
            {
              title: '核心概念',
              description: '梳理普通用户、APP 管理员、通知号、群组等核心模型。',
              href: legacy(locale, '/guides/introduction/termDefinition'),
              badge: 'Concept',
              slug: 'concepts',
            },
            {
              title: '开源能力',
              description: '确认开源版包含的组件、消息能力、服务端开放能力和容量边界。',
              href: legacy(locale, '/guides/introduction/features'),
              badge: 'Feature',
              slug: 'open-source-capabilities',
            },
            {
              title: '版本选择',
              description: '生产环境使用稳定 tag，明确 Server、ChatServer 和 SDK 版本来源。',
              href: legacy(locale, '/guides/introduction/version'),
              badge: 'Version',
              slug: 'versions',
            },
          ],
        },
        {
          id: 'deployment',
          eyebrow: 'Deployment',
          title: '部署 OpenIM',
          description: '从环境规划到生产验证，覆盖单机、内网和集群部署路径。',
          items: [
            {
              title: '环境与组件',
              description: '确认服务器、操作系统和 MongoDB、Redis、Kafka、Etcd、MinIO 等依赖。',
              href: legacy(locale, '/guides/gettingStarted/env-comp'),
              badge: 'Env',
              slug: 'components',
            },
            {
              title: 'Docker Compose 部署',
              description: '使用 openim-docker 快速拉起 OpenIMServer、ChatServer 和依赖组件。',
              href: legacy(locale, '/guides/gettingStarted/dockerCompose'),
              badge: 'Docker',
              slug: 'docker-compose',
            },
            {
              title: '源码部署',
              description: '面向生产单机部署，按稳定 tag 编译并启动 OpenIMServer 与 ChatServer。',
              href: legacy(locale, '/guides/gettingStarted/imSourceCodeDeployment'),
              badge: 'Source',
              slug: 'source',
            },
            {
              title: '内网部署',
              description: '在联网构建机导出部署包，再复制到内网目标机运行。',
              href: legacy(locale, '/guides/gettingStarted/internalDeployment'),
              badge: 'Offline',
              slug: 'offline',
            },
            {
              title: '集群部署',
              description: '在多节点和 Nginx 反向代理场景中部署 OpenIMServer。',
              href: legacy(locale, '/guides/gettingStarted/cluster'),
              badge: 'Cluster',
              slug: 'cluster',
            },
            {
              title: '端口与网络',
              description: '配置防火墙、服务端口以及 SDK 访问地址。',
              href: legacy(locale, '/guides/gettingStarted/ports'),
              badge: 'Ports',
              slug: 'network',
            },
            {
              title: '域名配置',
              description: '通过域名、证书和 Nginx 将 API 与 WebSocket 统一到生产入口。',
              href: legacy(locale, '/guides/gettingStarted/nginxDomainConfig'),
              badge: 'Domain',
              slug: 'domain',
            },
            {
              title: '生产环境检查',
              description: '理解外部组件和服务故障的影响、恢复顺序与恢复后验证。',
              href: legacy(locale, '/guides/gettingStarted/production'),
              badge: 'Prod',
              slug: 'production',
            },
            {
              title: '部署验证',
              description: '验证 API、WebSocket、管理后台和基础消息链路是否可用。',
              href: legacy(locale, '/guides/gettingStarted/quickTestServer'),
              badge: 'Verify',
              slug: 'verification',
            },
          ],
        },
        {
          id: 'integration',
          eyebrow: 'Integration',
          title: '集成 OpenIM',
          description: '把业务账号、业务后端、客户端和 OpenIM 的服务端能力连接起来。',
          items: [
            {
              title: '业务系统集成',
              description: '将账号体系、业务后端和 OpenIM 的 API / Webhook 串起来。',
              href: legacy(locale, '/guides/solution/integrate'),
              badge: 'Integrate',
              slug: 'business-system',
            },
            {
              title: '离线推送',
              description: '对接移动端离线推送链路，补齐消息通知体验。',
              href: legacy(locale, '/guides/solution/offlinePush'),
              badge: 'Push',
              slug: 'offline-push',
            },
            {
              title: '数据迁移',
              description: '评估从现有云 IM 或自研系统迁移到 OpenIM 的接入路径。',
              href: legacy(locale, '/guides/solution/migrate'),
              badge: 'Migrate',
              slug: 'migration',
            },
          ],
        },
        {
          id: 'extension',
          eyebrow: 'Extension',
          title: '扩展 OpenIM',
          description: '围绕服务端能力、对象存储和 AI 场景扩展 OpenIM。',
          items: [
            {
              title: '服务端二次开发',
              description: '基于 OpenIMServer 的 API、RPC、Storage 层扩展新业务能力。',
              href: legacy(locale, '/guides/solution/developNewFeatures'),
              badge: 'Dev',
              slug: 'server-development',
            },
            {
              title: '对象存储配置',
              description: '接入 MinIO、OSS、COS、Kodo 或 AWS S3 保存文件与媒体资源。',
              href: legacy(locale, '/guides/solution/s3'),
              badge: 'S3',
              slug: 'object-storage',
            },
            {
              title: '对象存储迁移',
              description: '在对象存储切换时规划配置、数据迁移和访问验证。',
              href: legacy(locale, '/guides/solution/s3convert'),
              badge: 'Storage',
              slug: 'storage-migration',
            },
            {
              title: 'AI 与 OpenClaw',
              description: '通过 OpenClaw Gateway 接入 OpenIMServer 并验证第一条消息。',
              href: legacy(locale, '/guides/solution/openclaw'),
              badge: 'OpenClaw',
              slug: 'ai-openclaw',
            },
          ],
        },
        {
          id: 'operations',
          eyebrow: 'Operations & Reliability',
          title: '运维与可靠性',
          description: '覆盖监控、排障、常见问题、容量评估和消息链路可靠性验证。',
          items: [
            {
              title: '监控与告警',
              description: '启用 Prometheus、Alertmanager、Grafana 和 node-exporter。',
              href: legacy(locale, '/guides/gettingStarted/admin'),
              badge: 'Ops',
              slug: 'monitoring',
            },
            {
              title: '源码调试',
              description: '在源码部署场景下对 openim-api 等服务进行单步调试。',
              href: legacy(locale, '/guides/solution/howToDebug'),
              badge: 'Debug',
              slug: 'debugging',
            },
            {
              title: '常见问题',
              description: '排查部署过程中的健康检查、配置和容器冲突问题。',
              href: legacy(locale, '/guides/gettingStarted/faq'),
              badge: 'FAQ',
              slug: 'troubleshooting',
            },
            {
              title: '性能与可靠性报告',
              description: '使用测试程序模拟大量用户在线与消息收发，评估容量与链路稳定性。',
              href: legacy(locale, '/guides/benchmark/benchmark_test'),
              badge: 'Report',
              slug: 'benchmark-results',
            },
            {
              title: '压测工具',
              description: '了解压测程序的运行方式、参数和验证方法。',
              href: legacy(locale, '/guides/benchmark/benchmark_guide'),
              badge: 'Tooling',
              slug: 'benchmark-tools',
            },
          ],
        },
      ],
      heroDescription:
        '从产品认知、部署和业务集成，到扩展、运维与可靠性验证，按实施阶段组织 OpenIM 指南。',
      heroEyebrow: '指南',
      heroTitle: 'OpenIM Guides',
      referenceLabel: '指南目录',
      referenceTitle: '按实施阶段查阅',
      referenceDescription: '先理解 OpenIM，再完成部署与集成，最后进入扩展、运维和可靠性验证。',
      sectionTitle: '指南目录',
      sectionDescription:
        '每个目录对应一个实施阶段，目录页面给出本阶段的内容范围，具体接口与 SDK 方法链接到对应参考文档。',
    };
  }

  const legacyCopy: GuidesCopy = {
    groups: [
      {
        id: 'quick-start',
        eyebrow: 'Quick Start',
        title: 'Quick Start',
        description:
          'Build the baseline context for the product model, concepts, open source scope, and release strategy.',
        items: [
          {
            title: 'Introduction to OpenIMSDK',
            description: 'Product positioning, ecosystem components, self-hosting, and use cases.',
            href: legacy(locale, '/guides/introduction/product'),
            badge: 'Intro',
          },
          {
            title: 'Concepts & Terminology',
            description: 'Core user, administrator, notification account, and group concepts.',
            href: legacy(locale, '/guides/introduction/termDefinition'),
            badge: 'Concept',
          },
          {
            title: 'Open Source Feature Details',
            description:
              'Included components, messaging features, server APIs, and capacity notes.',
            href: legacy(locale, '/guides/introduction/features'),
            badge: 'Feature',
          },
          {
            title: 'Version Notes',
            description: 'How to choose stable tags for Server, ChatServer, and client SDKs.',
            href: legacy(locale, '/guides/introduction/version'),
            badge: 'Version',
          },
        ],
      },
      {
        id: 'quick-deployment',
        eyebrow: 'Deployment',
        title: 'Quick Deployment',
        description:
          'Deployment paths from requirements to production validation, including single-node, air-gapped, and cluster setups.',
        items: [
          {
            title: 'Platform & Components',
            description: 'Review server, operating system, and dependency requirements.',
            href: legacy(locale, '/guides/gettingStarted/env-comp'),
            badge: 'Env',
          },
          {
            title: 'Docker Deployment',
            description: 'Start OpenIMServer, ChatServer, and dependencies with openim-docker.',
            href: legacy(locale, '/guides/gettingStarted/dockerCompose'),
            badge: 'Docker',
          },
          {
            title: 'Source Code Deployment',
            description: 'Build and run OpenIMServer and ChatServer from stable release tags.',
            href: legacy(locale, '/guides/gettingStarted/imSourceCodeDeployment'),
            badge: 'Source',
          },
          {
            title: 'Air-Gapped Deployment',
            description: 'Export deployment artifacts on an online builder and run them offline.',
            href: legacy(locale, '/guides/gettingStarted/internalDeployment'),
            badge: 'Offline',
          },
          {
            title: 'Cluster Deployment',
            description: 'Deploy OpenIMServer across multiple nodes behind Nginx.',
            href: legacy(locale, '/guides/gettingStarted/cluster'),
            badge: 'Cluster',
          },
          {
            title: 'Ports',
            description: 'Configure firewall rules, exposed ports, and SDK access addresses.',
            href: legacy(locale, '/guides/gettingStarted/ports'),
            badge: 'Ports',
          },
          {
            title: 'Domain Configuration',
            description: 'Route API and WebSocket traffic through production domains and TLS.',
            href: legacy(locale, '/guides/gettingStarted/nginxDomainConfig'),
            badge: 'Domain',
          },
          {
            title: 'Production',
            description: 'Understand runtime failures, recovery order, and post-recovery checks.',
            href: legacy(locale, '/guides/gettingStarted/production'),
            badge: 'Prod',
          },
          {
            title: 'Quick Verification',
            description: 'Verify APIs, WebSocket, admin console, and basic message delivery.',
            href: legacy(locale, '/guides/gettingStarted/quickTestServer'),
            badge: 'Verify',
          },
          {
            title: 'FAQ',
            description:
              'Troubleshoot health checks, configuration changes, and container conflicts.',
            href: legacy(locale, '/guides/gettingStarted/faq'),
            badge: 'FAQ',
          },
          {
            title: 'Operations System',
            description: 'Enable Prometheus, Alertmanager, Grafana, and node-exporter.',
            href: legacy(locale, '/guides/gettingStarted/admin'),
            badge: 'Ops',
          },
        ],
      },
      {
        id: 'solutions',
        eyebrow: 'Solutions',
        title: 'Solutions',
        description:
          'Implementation topics for business integration, extension work, migration, push, and object storage.',
        items: [
          {
            title: 'Extension Development',
            description: 'Extend OpenIMServer through API, RPC, and storage layers.',
            href: legacy(locale, '/guides/solution/developNewFeatures'),
            badge: 'Dev',
          },
          {
            title: 'Debug with GoLand',
            description: 'Debug openim-api and related services in a source deployment.',
            href: legacy(locale, '/guides/solution/howToDebug'),
            badge: 'Debug',
          },
          {
            title: 'Business System Integration',
            description: 'Connect account systems, backend services, APIs, and webhooks.',
            href: legacy(locale, '/guides/solution/integrate'),
            badge: 'Integrate',
          },
          {
            title: 'Cloud Service Migration',
            description: 'Plan migration from existing cloud IM or self-built messaging systems.',
            href: legacy(locale, '/guides/solution/migrate'),
            badge: 'Migrate',
          },
          {
            title: 'Offline Push',
            description: 'Connect mobile offline push for a complete notification experience.',
            href: legacy(locale, '/guides/solution/offlinePush'),
            badge: 'Push',
          },
          {
            title: 'S3 Storage',
            description: 'Connect MinIO, OSS, COS, Kodo, or AWS S3 for file and media storage.',
            href: legacy(locale, '/guides/solution/s3'),
            badge: 'S3',
          },
          {
            title: 'S3 Migration',
            description:
              'Plan configuration, data migration, and access checks when changing storage.',
            href: legacy(locale, '/guides/solution/s3convert'),
            badge: 'Storage',
          },
          {
            title: 'OpenClaw Integration',
            description:
              'Connect OpenIMServer through OpenClaw Gateway and verify the first message.',
            href: legacy(locale, '/guides/solution/openclaw'),
            badge: 'OpenClaw',
          },
        ],
      },
      {
        id: 'reliability',
        eyebrow: 'Reliability',
        title: 'Message Reliability Testing',
        description:
          'Capacity, latency, reliability, and pressure-test tooling material for pre-production validation.',
        items: [
          {
            title: 'Stress and Reliability Report',
            description:
              'Simulate many online users and message flows to evaluate system capacity.',
            href: legacy(locale, '/guides/benchmark/benchmark_test'),
            badge: 'Report',
          },
          {
            title: 'Test Program Usage',
            description:
              'Understand how to run the test tools, tune parameters, and verify results.',
            href: legacy(locale, '/guides/benchmark/benchmark_guide'),
            badge: 'Tooling',
          },
        ],
      },
    ],
    heroDescription:
      'Guides for product concepts, deployment paths, integration, storage, and reliability testing, organized by implementation stage.',
    heroEyebrow: 'GUIDES',
    heroTitle: 'OpenIM Guides',
    referenceLabel: 'Guide directory',
    referenceTitle: 'Browse by implementation stage',
    referenceDescription:
      'Start with product scope and core concepts, then move into deployment, integration, storage, and reliability validation.',
    sectionTitle: 'Guide directory',
    sectionDescription:
      'Guides are organized by implementation stage. Each imported article keeps its official source link for verification.',
  };

  return currentEnglishGuidesCopy(legacyCopy);
}

function currentEnglishGuidesCopy(copy: GuidesCopy): GuidesCopy {
  const items = new Map(
    copy.groups.flatMap((group) => group.items).map((item) => [sourcePathFromHref(item.href), item]),
  );
  const item = (sourcePath: string, slug: string, title?: string): GuideItem => ({
    ...items.get(sourcePath)!,
    ...(title ? { title } : {}),
    slug,
  });

  return {
    ...copy,
    groups: [
      {
        id: 'getting-started',
        eyebrow: 'Getting Started',
        title: 'Get to Know OpenIM',
        description: 'Understand the product, core concepts, open-source scope, and release strategy.',
        items: [
          item('/guides/introduction/product', 'overview', 'OpenIM Overview'),
          item('/guides/introduction/termDefinition', 'concepts', 'Core Concepts'),
          item('/guides/introduction/features', 'open-source-capabilities', 'Open-Source Capabilities'),
          item('/guides/introduction/version', 'versions', 'Choosing Versions'),
        ],
      },
      {
        id: 'deployment',
        eyebrow: 'Deployment',
        title: 'Deploy OpenIM',
        description: 'From environment planning through production verification for single-node, air-gapped, and cluster deployments.',
        items: [
          item('/guides/gettingStarted/env-comp', 'components', 'Environment and Components'),
          item('/guides/gettingStarted/dockerCompose', 'docker-compose', 'Docker Compose Deployment'),
          item('/guides/gettingStarted/imSourceCodeDeployment', 'source', 'Source Deployment'),
          item('/guides/gettingStarted/internalDeployment', 'offline', 'Air-Gapped Deployment'),
          item('/guides/gettingStarted/cluster', 'cluster', 'Cluster Deployment'),
          item('/guides/gettingStarted/ports', 'network', 'Ports and Network'),
          item('/guides/gettingStarted/nginxDomainConfig', 'domain', 'Domain Configuration'),
          item('/guides/gettingStarted/production', 'production', 'Production Checks'),
          item('/guides/gettingStarted/quickTestServer', 'verification', 'Deployment Verification'),
        ],
      },
      {
        id: 'integration',
        eyebrow: 'Integration',
        title: 'Integrate OpenIM',
        description: 'Connect your accounts, backend, clients, and OpenIM server capabilities.',
        items: [
          item('/guides/solution/integrate', 'business-system'),
          item('/guides/solution/offlinePush', 'offline-push'),
          item('/guides/solution/migrate', 'migration', 'Data Migration'),
        ],
      },
      {
        id: 'extension',
        eyebrow: 'Extension',
        title: 'Extend OpenIM',
        description: 'Extend OpenIM with server development, object storage, and AI integrations.',
        items: [
          item('/guides/solution/developNewFeatures', 'server-development', 'Server Development'),
          item('/guides/solution/s3', 'object-storage', 'Object Storage'),
          item('/guides/solution/s3convert', 'storage-migration', 'Object Storage Migration'),
          item('/guides/solution/openclaw', 'ai-openclaw', 'AI and OpenClaw'),
        ],
      },
      {
        id: 'operations',
        eyebrow: 'Operations & Reliability',
        title: 'Operations and Reliability',
        description: 'Monitor, troubleshoot, and validate the capacity and reliability of your deployment.',
        items: [
          item('/guides/gettingStarted/admin', 'monitoring', 'Monitoring and Alerting'),
          item('/guides/solution/howToDebug', 'debugging', 'Source Debugging'),
          item('/guides/gettingStarted/faq', 'troubleshooting', 'Troubleshooting'),
          item('/guides/benchmark/benchmark_test', 'benchmark-results', 'Performance and Reliability Report'),
          item('/guides/benchmark/benchmark_guide', 'benchmark-tools', 'Benchmark Tools'),
        ],
      },
    ],
    heroDescription: 'OpenIM guides organized by implementation stage, from product concepts and deployment to integration, extension, operations, and reliability.',
    referenceDescription: 'Understand OpenIM first, complete deployment and integration, then move into extension, operations, and reliability validation.',
    sectionDescription: 'Each directory represents an implementation stage and links its APIs and SDK methods to the corresponding reference documentation.',
  };
}

export function GuidesPage({ locale = 'en' }: { locale?: Locale }) {
  const text = guidesCopy(locale);
  const currentPath = '/docs/guides';
  return <GuidesPageContent currentPath={currentPath} locale={locale} text={text} />;
}

export function GuidesSubPage({ locale = 'en', slug = [] }: { locale?: Locale; slug?: string[] }) {
  const replacement = legacyZhGuidePaths[slug.join('/')];
  if (replacement) redirect(toLocalizedPath(guidePath(...replacement), locale));

  const text = guidesCopy(locale);
  const currentPath = guidePath(...slug);
  return <GuidesPageContent currentPath={currentPath} locale={locale} slug={slug} text={text} />;
}

export function getGuidePagePaths(locale: Locale = 'en') {
  const text = guidesCopy(locale);
  return [
    guidePath(),
    ...text.groups.flatMap((group) => [
      guidePath(group.id),
      ...group.items.map((item) => guidePath(group.id, guideItemSlug(item))),
    ]),
  ];
}

function GuidesPageContent({
  currentPath,
  locale,
  slug = [],
  text,
}: {
  currentPath: string;
  locale: Locale;
  slug?: string[];
  text: GuidesCopy;
}) {
  const context = createGuidesContext(text);
  const selection = getGuideSelection(text, slug);
  if (!selection) notFound();

  const content = selection.kind === 'item' ? getGuideContent(selection.item, locale) : undefined;
  const route = createGuidesRoute(text, currentPath, selection, content);
  const breadcrumbs: BreadcrumbItem[] = [
    { title: locale === 'zh' ? '首页' : 'Home', href: toLocalizedPath('/', locale) },
    selection.kind === 'overview'
      ? { title: text.heroTitle }
      : { title: text.heroTitle, href: toLocalizedPath('/docs/guides', locale) },
    ...(selection.kind === 'group'
      ? [{ title: selection.group.title }]
      : selection.kind === 'item'
        ? [
            {
              title: selection.group.title,
              href: toLocalizedPath(guidePath(selection.group.id), locale),
            },
            { title: selection.item.title },
          ]
        : []),
  ];
  const contextOptions: ContextOption[] = [
    {
      key: context.key,
      product: context.product,
      href: toLocalizedPath(currentPath, locale),
      pageCount: context.pageCount,
    },
  ];

  return (
    <DocsShell
      context={context}
      contextOptions={contextOptions}
      currentPath={currentPath}
      locale={locale}
      sidebarIntro={
        <div className="sidebar-intro-card">
          <span>{text.heroEyebrow}</span>
          <strong>{text.heroTitle}</strong>
          <p>{text.heroDescription}</p>
        </div>
      }
      showVersion={false}
      toc={content?.headings ?? []}
    >
      <ArticleHeader breadcrumbs={breadcrumbs} locale={locale} route={route} showVersion={false} />

      <GuidesBody content={content} locale={locale} selection={selection} text={text} />
    </DocsShell>
  );
}

function GuidesBody({
  content,
  locale,
  selection,
  text,
}: {
  content?: GuideContentRecord;
  locale: Locale;
  selection: GuideSelection;
  text: GuidesCopy;
}) {
  if (selection.kind === 'item') {
    const sourceMap = createGuideSourceMap(text);

    return (
      <div className="guides-docs-content">
        {content ? (
          <GuideMarkdown
            body={content.body}
            locale={locale}
            sourceMap={sourceMap}
            sourcePath={content.sourcePath}
          />
        ) : (
          <section className="guides-intro-panel">
            <h2>{selection.item.title}</h2>
            <p>{selection.item.description}</p>
          </section>
        )}
      </div>
    );
  }

  const groups = selection.kind === 'group' ? [selection.group] : text.groups;

  return (
    <div className="guides-docs-content">
      {selection.kind === 'overview' ? (
        <section className="guides-intro-panel" aria-labelledby="guides-start">
          <h2 id="guides-start">{text.sectionTitle}</h2>
          <p>{text.sectionDescription}</p>
        </section>
      ) : null}

      <section className="guides-directory-section" aria-label={text.sectionTitle}>
        {groups.map((group) => (
          <GuideGroupCard group={group} key={group.id} locale={locale} />
        ))}
      </section>
    </div>
  );
}

function GuideMarkdown({
  body,
  locale,
  sourceMap,
  sourcePath,
}: {
  body: string;
  locale: Locale;
  sourceMap: Map<string, string>;
  sourcePath: string;
}) {
  return (
    <div className="guide-markdown">
      {parseGuideMarkdown(body).map((block, index) => (
        <GuideMarkdownBlock
          block={block}
          index={index}
          key={`${block.type}-${index}`}
          locale={locale}
          sourceMap={sourceMap}
          sourcePath={sourcePath}
        />
      ))}
    </div>
  );
}

type GuideMarkdownBlock =
  | { type: 'blockquote'; lines: string[] }
  | { type: 'code'; code: string; language: string }
  | { type: 'heading'; depth: number; title: string }
  | { type: 'hr' }
  | { type: 'list'; items: string[]; ordered: boolean }
  | { type: 'paragraph'; text: string }
  | { type: 'table'; rows: string[][] };

function GuideMarkdownBlock({
  block,
  index,
  locale,
  sourceMap,
  sourcePath,
}: {
  block: GuideMarkdownBlock;
  index: number;
  locale: Locale;
  sourceMap: Map<string, string>;
  sourcePath: string;
}) {
  if (block.type === 'heading') {
    const id = guideHeadingId(block.title);
    const level = Math.min(Math.max(block.depth, 2), 4);
    if (level === 2) {
      return <h2 id={id}>{renderInlineMarkdown(block.title, sourcePath, sourceMap, locale)}</h2>;
    }
    if (level === 3) {
      return <h3 id={id}>{renderInlineMarkdown(block.title, sourcePath, sourceMap, locale)}</h3>;
    }
    return <h4 id={id}>{renderInlineMarkdown(block.title, sourcePath, sourceMap, locale)}</h4>;
  }

  if (block.type === 'paragraph') {
    return <p>{renderInlineMarkdown(block.text, sourcePath, sourceMap, locale)}</p>;
  }

  if (block.type === 'blockquote') {
    return (
      <blockquote>
        {block.lines.map((line, lineIndex) => (
          <Fragment key={`${index}-${lineIndex}`}>
            {lineIndex > 0 ? <br /> : null}
            {renderInlineMarkdown(line, sourcePath, sourceMap, locale)}
          </Fragment>
        ))}
      </blockquote>
    );
  }

  if (block.type === 'code') {
    return (
      <pre>
        <code data-language={block.language}>{block.code}</code>
      </pre>
    );
  }

  if (block.type === 'list') {
    const Tag = block.ordered ? 'ol' : 'ul';
    return (
      <Tag>
        {block.items.map((item, itemIndex) => (
          <li key={`${index}-${itemIndex}`}>
            {renderInlineMarkdown(item, sourcePath, sourceMap, locale)}
          </li>
        ))}
      </Tag>
    );
  }

  if (block.type === 'table') {
    const [headings = [], ...rows] = block.rows;
    return (
      <div className="guide-table-wrap">
        <table>
          {headings.length > 0 ? (
            <thead>
              <tr>
                {headings.map((cell, cellIndex) => (
                  <th key={`${index}-head-${cellIndex}`}>
                    {renderInlineMarkdown(cell, sourcePath, sourceMap, locale)}
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
                    {renderInlineMarkdown(cell, sourcePath, sourceMap, locale)}
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

function parseGuideMarkdown(body: string): GuideMarkdownBlock[] {
  const lines = body.replace(/\r\n/g, '\n').split('\n');
  const blocks: GuideMarkdownBlock[] = [];
  let index = 0;

  while (index < lines.length) {
    const line = lines[index];
    const trimmed = line.trim();

    if (!trimmed) {
      index += 1;
      continue;
    }

    const fence = trimmed.match(/^```(\w+)?/);
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

    if (trimmed.startsWith(':::')) {
      const callout: string[] = [];
      index += 1;
      while (index < lines.length && !lines[index].trim().startsWith(':::')) {
        if (lines[index].trim()) callout.push(lines[index].trim());
        index += 1;
      }
      blocks.push({ type: 'blockquote', lines: callout });
      index += 1;
      continue;
    }

    if (/^<\/?\w+/.test(trimmed)) {
      index += 1;
      continue;
    }

    if (/^(-{3,}|\*{3,})$/.test(trimmed)) {
      blocks.push({ type: 'hr' });
      index += 1;
      continue;
    }

    const heading = trimmed.match(/^(#{1,6})\s+(.+)$/);
    if (heading) {
      blocks.push({
        type: 'heading',
        depth: Math.max(heading[1].length, 2),
        title: heading[2].trim(),
      });
      index += 1;
      continue;
    }

    if (isTableStart(lines, index)) {
      const rows: string[][] = [];
      rows.push(parseTableRow(lines[index]));
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
    !trimmed.startsWith(':::') &&
    !trimmed.startsWith('>') &&
    !trimmed.match(/^#{1,6}\s+/) &&
    !trimmed.match(/^(-{3,}|\*{3,})$/) &&
    !trimmed.match(/^(([-*+])|(\d+[.)]))\s+(.+)$/) &&
    !/^<\/?\w+/.test(trimmed)
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

function renderInlineMarkdown(
  value: string,
  sourcePath: string,
  sourceMap: Map<string, string>,
  locale: Locale,
): ReactNode[] {
  const nodes: ReactNode[] = [];
  const pattern = /!\[([^\]]*)]\(([^)]+)\)|\[([^\]]+)]\(([^)]+)\)|`([^`]+)`|\*\*([^*]+)\*\*/g;
  let cursor = 0;
  for (const match of value.matchAll(pattern)) {
    if (match.index > cursor) nodes.push(value.slice(cursor, match.index));
    if (match[1] !== undefined) {
      const src = resolveGuideImageSrc(match[2], sourcePath);
      nodes.push(
        // Guide assets are served from the documentation repository branch.
        // eslint-disable-next-line @next/next/no-img-element
        <img alt={match[1] || ''} key={`${match.index}-image`} src={src} />,
      );
    } else if (match[3] !== undefined) {
      const href = resolveGuideHref(match[4], sourcePath, sourceMap, locale);
      const external = isExternalHref(href);
      nodes.push(
        <a
          href={href}
          key={`${match.index}-link`}
          rel={external ? 'noreferrer' : undefined}
          target={external ? '_blank' : undefined}
        >
          {renderInlineMarkdown(match[3], sourcePath, sourceMap, locale)}
        </a>,
      );
    } else if (match[5] !== undefined) {
      nodes.push(<code key={`${match.index}-code`}>{match[5]}</code>);
    } else if (match[6] !== undefined) {
      nodes.push(
        <strong key={`${match.index}-strong`}>
          {renderInlineMarkdown(match[6], sourcePath, sourceMap, locale)}
        </strong>,
      );
    }
    cursor = match.index + match[0].length;
  }
  if (cursor < value.length) nodes.push(value.slice(cursor));
  return nodes;
}

function resolveGuideHref(
  href: string,
  sourcePath: string,
  sourceMap: Map<string, string>,
  locale: Locale,
) {
  if (href.startsWith('#')) return href;
  if (isExternalHref(href)) return href;

  const base = `https://docs.openim.io/zh-Hans${sourcePath.replace(/\/[^/]+$/, '/')}`;
  const resolved = new URL(href, base).pathname
    .replace(/^\/zh-Hans/, '')
    .replace(/\.(?:md|mdx)$/, '');
  const local = sourceMap.get(resolved);
  if (local) return toLocalizedPath(local, locale);
  return `https://docs.openim.io/zh-Hans${resolved}`;
}

function resolveGuideImageSrc(href: string, sourcePath: string) {
  if (isExternalHref(href) || href.startsWith('/')) return href;

  const base = `https://docs.openim.io/zh-Hans${sourcePath.replace(/\/[^/]+$/, '/')}`;
  const resolved = new URL(href, base).pathname.replace(/^\/zh-Hans/, '');
  return `/assets${resolved}`;
}

function guideHeadingId(value: string) {
  return value
    .replace(/[>#*_`]/g, '')
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, '-')
    .replace(/^-+|-+$/g, '');
}

function GuideGroupCard({ group, locale }: { group: GuideGroup; locale: Locale }) {
  return (
    <article className="guide-group-card" id={group.id}>
      <header>
        <span>{group.eyebrow}</span>
        <h2>{group.title}</h2>
        <p>{group.description}</p>
      </header>
      <div className="guide-item-grid">
        {group.items.map((item) => (
          <GuideLink
            className="guide-item-link"
            href={guidePath(group.id, guideItemSlug(item))}
            key={item.href}
            locale={locale}
          >
            <span>{item.badge}</span>
            <strong>{item.title}</strong>
            <p>{item.description}</p>
            <ChevronRightIcon />
          </GuideLink>
        ))}
      </div>
    </article>
  );
}

function GuideLink({
  children,
  className,
  href,
  id,
  locale,
}: {
  children: ReactNode;
  className: string;
  href: string;
  id?: string;
  locale: Locale;
}) {
  if (isExternalHref(href)) {
    return (
      <a className={className} href={href} id={id} rel="noreferrer" target="_blank">
        {children}
      </a>
    );
  }

  return (
    <Link className={className} href={toLocalizedPath(href, locale)} id={id}>
      {children}
    </Link>
  );
}

function isExternalHref(href: string) {
  return /^https?:\/\//.test(href);
}

function createGuidesContext(text: GuidesCopy): NavContext {
  const overviewPath = guidePath();

  return {
    key: 'guides',
    title: text.heroTitle,
    rootPath: overviewPath,
    overviewPath,
    product: 'guides',
    sidebarExpansion: 'active-path',
    nodes: [
      {
        id: 'guides-overview',
        segment: 'guides',
        title: text.sectionTitle,
        href: overviewPath,
        type: 'page',
        children: [],
        minIndex: 0,
      },
      ...text.groups.map<NavNode>((group, groupIndex) => ({
        id: group.id,
        segment: group.id,
        title: group.title,
        href: guidePath(group.id),
        type: 'folder',
        minIndex: groupIndex + 1,
        children: group.items.map<NavNode>((item, itemIndex) => ({
          id: guideItemNodeId(group, item),
          segment: guideItemSlug(item),
          title: item.title,
          href: guidePath(group.id, guideItemSlug(item)),
          type: 'page',
          children: [],
          minIndex: itemIndex,
        })),
      })),
    ],
    pageCount: countGuidePages(text),
  };
}

function createGuidesRoute(
  text: GuidesCopy,
  currentPath: string,
  selection: GuideSelection,
  content?: GuideContentRecord,
): RouteRecord {
  const title =
    selection.kind === 'item'
      ? selection.item.title
      : selection.kind === 'group'
        ? selection.group.title
        : text.heroTitle;
  const description =
    selection.kind === 'item'
      ? selection.item.description
      : selection.kind === 'group'
        ? selection.group.description
        : text.heroDescription;

  return {
    id: 0,
    path: currentPath,
    relativePath: currentPath.replace(/^\//, ''),
    sourcePath: content?.sourcePath ?? currentPath.replace(/^\//, ''),
    title,
    description,
    product: 'guides',
    contextKey: 'guides',
    contextTitle: text.heroTitle,
    template: 'guide',
    status: 'published',
    sourceIndex: 0,
    contentFile: 'guides',
    navOrder: 0,
  };
}

function getGuideContent(item: GuideItem, locale: Locale) {
  const sourcePath = sourcePathFromHref(item.href);
  if (locale === 'zh') return reviewedZhGuides.get(sourcePath) ?? guidesContent.records[sourcePath];
  return reviewedEnGuides.get(sourcePath) ?? guidesContent.records[sourcePath];
}

function guideExcerpt(body: string) {
  return body
    .replace(/^#{1,6}\s+/gm, '')
    .replace(/```[\s\S]*?```/g, '')
    .replace(/\|/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 180);
}

function createGuideSourceMap(text: GuidesCopy) {
  const map = new Map<string, string>();
  for (const group of text.groups) {
    for (const item of group.items) {
      map.set(sourcePathFromHref(item.href), guidePath(group.id, guideItemSlug(item)));
    }
  }
  return map;
}

function sourcePathFromHref(href: string) {
  return new URL(href).pathname.replace(/^\/zh-Hans/, '').replace(/\.md$/, '');
}

function countGuidePages(text: GuidesCopy) {
  return text.groups.reduce((sum, group) => sum + group.items.length + 1, 1);
}

function getGuideSelection(text: GuidesCopy, slug: string[]): GuideSelection | undefined {
  if (slug.length === 0) return { kind: 'overview' };
  if (slug.length > 2) return undefined;

  const group = text.groups.find((entry) => entry.id === slug[0]);
  if (!group) return undefined;
  if (slug.length === 1) return { kind: 'group', group };

  const item = group.items.find((entry) => guideItemSlug(entry) === slug[1]);
  if (!item) return undefined;

  return { kind: 'item', group, item };
}

function guidePath(...parts: string[]) {
  return ['/docs/guides', ...parts].join('/');
}

function guideItemNodeId(group: GuideGroup, item: GuideItem) {
  return `${group.id}-${slugify(item.badge || item.title)}`;
}

function guideItemSlug(item: GuideItem) {
  return item.slug ?? slugify(item.badge || item.title);
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}
