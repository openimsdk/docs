import Image from 'next/image';
import Link from 'next/link';
import { Breadcrumbs } from '@/src/components/docs/breadcrumbs';
import { ChevronRightIcon } from '@/src/components/ui/icons';
import type { Locale } from '@/src/lib/i18n';
import { toLocalizedPath } from '@/src/lib/i18n';
import type { BreadcrumbItem, RouteRecord } from '@/src/types/docs';

type OverviewCard = {
  description: string;
  href: string;
  title: string;
  visual: 'setup' | 'user-list' | 'create-user' | 'group' | 'message' | 'migration';
};

type FeatureCard = {
  description: string;
  href: string;
  title: string;
};

type ResourceLink = {
  description: string;
  href: string;
  iconSrc: string;
  title: string;
};

const copy = {
  en: {
    intro:
      'OpenIM Platform API is organized for trusted backend services. Use these REST endpoints to manage users, groups, messages, session tokens, moderation, and operational workflows that are already covered by OpenIM REST documentation.',
    mostPopular: 'Most popular',
    recommended: 'Recommended features',
    resources: 'Resources',
    popular: [
      {
        title: 'Prepare to use API',
        description:
          'Confirm the base API address, JSON headers, administrator token, and request body conventions.',
        href: '/platform-api/prepare-to-use-api',
        visual: 'setup',
      },
      {
        title: 'List users',
        description: 'Retrieve registered OpenIM users from a trusted backend service.',
        href: '/platform-api/user/listing-users/list-users',
        visual: 'user-list',
      },
      {
        title: 'Create a user',
        description: 'Register OpenIM users and keep business identity rules in your own system.',
        href: '/platform-api/user/creating-users/create-a-user',
        visual: 'create-user',
      },
      {
        title: 'Create a group channel',
        description:
          'Provision an OpenIM group for channel-style conversations and member management.',
        href: '/platform-api/channel/creating-a-channel/create-a-group-channel',
        visual: 'group',
      },
      {
        title: 'Send a message',
        description:
          'Send server-side text, custom, and notification messages through OpenIM message APIs.',
        href: '/platform-api/message/messaging-basics/send-a-message',
        visual: 'message',
      },
      {
        title: 'Migrate messages',
        description:
          'Import historical messages into OpenIM while preserving sender and conversation context.',
        href: '/platform-api/migration/migrate-messages',
        visual: 'migration',
      },
    ],
    features: [
      {
        title: 'User lifecycle',
        description: 'Create users, update profiles, query user records, and issue session tokens.',
        href: '/platform-api/user/listing-users/list-users',
      },
      {
        title: 'Group channels',
        description:
          'Create groups, update group information, invite members, and manage membership changes.',
        href: '/platform-api/channel/creating-a-channel/create-a-group-channel',
      },
      {
        title: 'Moderation',
        description: 'Block users, list block relationships, and mute or unmute group members.',
        href: '/platform-api/moderation/blocking-users/block-users',
      },
    ],
    links: [
      {
        title: 'Postman',
        description: 'Explore and run OpenIM API requests in the OpenIM Postman workspace.',
        href: 'https://www.postman.com/openimio/openim',
        iconSrc: '/brand/postman.svg',
      },
      {
        title: 'Apifox',
        description: 'Browse and debug OpenIM API definitions in the OpenIM Apifox project.',
        href: 'https://app.apifox.com/project/8615422',
        iconSrc: '/brand/apifox.svg',
      },
    ],
  },
  zh: {
    intro:
      'OpenIM Platform API 面向可信后端服务组织，当前只保留 OpenIM REST 已覆盖的服务端能力，用于管理用户、群组、消息、会话 Token、内容治理和运营工作流。',
    mostPopular: '最常用',
    recommended: '推荐功能',
    resources: '资源',
    popular: [
      {
        title: '接入准备',
        description: '确认 API 基础地址、JSON 请求头、管理员 Token 和请求体约定。',
        href: '/platform-api/prepare-to-use-api',
        visual: 'setup',
      },
      {
        title: '查询用户列表',
        description: '从可信后端查询已注册的 OpenIM 用户。',
        href: '/platform-api/user/listing-users/list-users',
        visual: 'user-list',
      },
      {
        title: '创建用户',
        description: '注册 OpenIM 用户，并把业务身份、权限和风控逻辑保留在业务系统中。',
        href: '/platform-api/user/creating-users/create-a-user',
        visual: 'create-user',
      },
      {
        title: '创建群组频道',
        description: '创建 OpenIM 群组，用于承载频道式会话和成员管理。',
        href: '/platform-api/channel/creating-a-channel/create-a-group-channel',
        visual: 'group',
      },
      {
        title: '发送消息',
        description: '通过 OpenIM 消息接口从服务端发送文本、自定义或通知类消息。',
        href: '/platform-api/message/messaging-basics/send-a-message',
        visual: 'message',
      },
      {
        title: '迁移消息',
        description: '把历史消息导入 OpenIM，并保留发送者、会话和消息上下文。',
        href: '/platform-api/migration/migrate-messages',
        visual: 'migration',
      },
    ],
    features: [
      {
        title: '用户生命周期',
        description: '创建用户、更新资料、查询用户记录，并为客户端签发会话 Token。',
        href: '/platform-api/user/listing-users/list-users',
      },
      {
        title: '群组频道',
        description: '创建群组、更新群资料、邀请成员，并处理入群、退群和解散流程。',
        href: '/platform-api/channel/creating-a-channel/create-a-group-channel',
      },
      {
        title: '内容治理',
        description: '屏蔽用户、查询屏蔽关系，并对群组或群成员执行禁言与解除禁言。',
        href: '/platform-api/moderation/blocking-users/block-users',
      },
    ],
    links: [
      {
        title: 'Postman',
        description: '在 Postman 中查看并运行 OpenIM API。',
        href: 'https://www.postman.com/openimio/openim',
        iconSrc: '/brand/postman.svg',
      },
      {
        title: 'Apifox',
        description: '在 Apifox 中查看并调试 OpenIM API。',
        href: 'https://app.apifox.com/project/8615422',
        iconSrc: '/brand/apifox.svg',
      },
    ],
  },
} satisfies Record<
  Locale,
  {
    features: FeatureCard[];
    intro: string;
    links: ResourceLink[];
    mostPopular: string;
    popular: OverviewCard[];
    recommended: string;
    resources: string;
  }
>;

export function PlatformApiOverviewPage({
  breadcrumbs,
  locale = 'en',
  route,
}: {
  breadcrumbs: BreadcrumbItem[];
  locale?: Locale;
  route: RouteRecord;
}) {
  const text = copy[locale];

  return (
    <div className="sdk-overview-page platform-api-overview-page">
      <header className="sdk-overview-header">
        <Breadcrumbs items={breadcrumbs} />
        <h1>{route.title}</h1>
        <p>{text.intro}</p>
      </header>

      <section className="sdk-overview-section" aria-labelledby="platform-api-overview-popular">
        <h2 id="platform-api-overview-popular">{text.mostPopular}</h2>
        <div className="sdk-overview-popular-grid">
          {text.popular.map((item) => (
            <PopularCard item={item} key={item.href} locale={locale} />
          ))}
        </div>
      </section>

      <section className="sdk-overview-section" aria-labelledby="platform-api-overview-recommended">
        <h2 id="platform-api-overview-recommended">{text.recommended}</h2>
        <div className="sdk-overview-feature-grid">
          {text.features.map((item) => (
            <FeatureCardView item={item} key={item.href} locale={locale} />
          ))}
        </div>
      </section>

      <section className="sdk-overview-section" aria-labelledby="platform-api-overview-resources">
        <h2 id="platform-api-overview-resources">{text.resources}</h2>
        <div className="sdk-overview-resource-list">
          {text.links.map((item) => (
            <ResourceLinkView item={item} key={item.href} locale={locale} />
          ))}
        </div>
      </section>
    </div>
  );
}

function PopularCard({ item, locale }: { item: OverviewCard; locale: Locale }) {
  return (
    <Link className="sdk-overview-popular-card" href={toLocalizedPath(item.href, locale)}>
      <span className="platform-api-card-visual" data-visual={item.visual} aria-hidden="true">
        <span />
        <span />
        <span />
      </span>
      <strong>{item.title}</strong>
      <span>{item.description}</span>
    </Link>
  );
}

function FeatureCardView({ item, locale }: { item: FeatureCard; locale: Locale }) {
  return (
    <Link className="sdk-overview-feature-card" href={toLocalizedPath(item.href, locale)}>
      <strong>{item.title}</strong>
      <span>{item.description}</span>
    </Link>
  );
}

function ResourceLinkView({ item, locale }: { item: ResourceLink; locale: Locale }) {
  const content = (
    <>
      <Image
        alt=""
        aria-hidden="true"
        className="sdk-overview-resource-brand-icon"
        height={28}
        src={item.iconSrc}
        width={28}
      />
      <span>
        <strong>{item.title}</strong>
        <small>{item.description}</small>
      </span>
      <ChevronRightIcon />
    </>
  );

  if (item.href.startsWith('http')) {
    return (
      <a className="sdk-overview-resource-link" href={item.href} rel="noreferrer" target="_blank">
        {content}
      </a>
    );
  }

  return (
    <Link className="sdk-overview-resource-link" href={toLocalizedPath(item.href, locale)}>
      {content}
    </Link>
  );
}
