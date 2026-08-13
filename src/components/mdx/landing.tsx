import Link from 'next/link';
import type { ReactNode } from 'react';
import { HeroProductImage } from '@/src/components/mdx/hero-product-image';
import { CodeIcon, LayoutIcon, ServerIcon } from '@/src/components/ui/icons';
import type { Locale } from '@/src/lib/i18n';
import { toLocalizedPath } from '@/src/lib/i18n';

type HomeCard = {
  title: string;
  href: string;
  description: string;
  meta?: string;
};

type FeatureGroup = {
  title: string;
  description: string;
  links: HomeCard[];
};

const landingCopy = {
  en: {
    apiAction: 'Open API overview',
    apiDescription:
      'Call Platform API from trusted backends to create users, issue login tokens, manage groups and members, and send or migrate messages.',
    apiEyebrow: 'SERVER',
    apiHeroCta: 'Start with the API overview',
    apiHeroDescription:
      'Platform API is organized by users, groups, and messages. Configure the base URL, auth, and request conventions first, then wire each server capability.',
    apiHeroKicker: 'REST API',
    apiHeroTitle: 'Manage OpenIMServer from your backend',
    apiTitle: 'Platform API',
    featureDescription:
      'Browse capabilities by users, conversations, groups, and messages, then open the matching SDK or Platform API guide.',
    featureEyebrow: 'CAPABILITIES',
    featureTitle: 'Features',
    featuredDescription:
      'Follow prepare, client login, first message, and group creation guides to complete the core integration path.',
    featuredEyebrow: 'GETTING STARTED',
    featuredTitle: 'Core integration flow',
    heroDescription:
      'Start from OpenIMClientSDK, the OpenIMServer Platform API, sample apps, or the core integration flow to add users, conversations, groups, messages, and calling.',
    heroEyebrow: 'OPENIMSDK',
    heroPrimary: 'Explore SDKs',
    heroSecondary: 'Open Platform API',
    heroTitle: 'Build instant messaging with OpenIMSDK',
    sampleDescription:
      'Browse demos maintained by the OpenIMSDK GitHub organization to see how each platform integrates OpenIMClientSDK.',
    sampleEyebrow: 'OPEN SOURCE',
    sampleTitle: 'Sample apps',
    sdkAction: 'Browse WASM SDK',
    sdkDescription:
      'Pick the client SDK for your runtime. Each entry covers users, conversations, groups, and messages, and documents platform-specific setup.',
    sdkEyebrow: 'CLIENT',
    sdkTitle: 'SDKs',
  },
  zh: {
    apiAction: '查看 API 概览',
    apiDescription:
      '通过 Platform API，在可信服务端创建用户、签发登录 Token、管理群组和成员，并发送或迁移消息。',
    apiEyebrow: '服务端',
    apiHeroCta: '从 API 概览开始',
    apiHeroDescription:
      'Platform API 按用户、群组和消息等资源组织。先完成地址、鉴权和请求约定配置，再接入具体服务端能力。',
    apiHeroKicker: 'REST API',
    apiHeroTitle: '从业务后端管理 OpenIMServer',
    apiTitle: 'Platform API',
    featureDescription:
      '按用户、会话、群组和消息等领域查找能力，并进入对应的 SDK 或 Platform API 文档。',
    featureEyebrow: '能力导航',
    featureTitle: '功能特性',
    featuredDescription:
      '按接入准备、客户端登录、发送第一条消息和创建群组的顺序，进入对应操作指南。',
    featuredEyebrow: '接入指南',
    featuredTitle: '核心接入流程',
    heroDescription:
      '从 OpenIMClientSDK、OpenIMServer Platform API、示例应用和核心接入流程开始，接入用户、会话、群组、消息与音视频通话。',
    heroEyebrow: 'OPENIMSDK',
    heroPrimary: '查看 SDK',
    heroSecondary: '查看 Platform API',
    heroTitle: '使用 OpenIMSDK 构建即时通讯应用',
    sampleDescription:
      '查看 OpenIMSDK GitHub 组织维护的 Demo，对照各平台接入 OpenIMClientSDK 的实际方式。',
    sampleEyebrow: '开源 Demo',
    sampleTitle: '示例应用',
    sdkAction: '查看 WASM SDK',
    sdkDescription:
      '按应用运行平台选择客户端 SDK。各平台文档覆盖同一套用户、会话、群组和消息能力，并说明各自的运行环境与集成差异。',
    sdkEyebrow: '客户端',
    sdkTitle: 'SDK',
  },
} satisfies Record<Locale, Record<string, string>>;

const sdkCards: HomeCard[] = [
  {
    title: 'iOS',
    href: '/sdk/ios/overview',
    description: 'Integrate login, users, conversations, groups, and messages in native iOS apps.',
    meta: 'Swift',
  },
  {
    title: 'Flutter',
    href: '/sdk/flutter/overview',
    description:
      'Use one OpenIMClientSDK integration path across mobile and supported desktop targets.',
    meta: 'Dart',
  },
  {
    title: 'uni-app / uni-app x',
    href: '/sdk/uniapp/overview',
    description:
      'Integrate the native UTS SDK into Android, iOS, and commercial HarmonyOS Apps.',
    meta: 'UTS',
  },
  {
    title: 'Electron',
    href: '/sdk/electron/overview',
    description:
      'Build Electron desktop apps with WASM in the renderer or FFI in the native runtime.',
    meta: 'Desktop',
  },
  {
    title: 'JavaScript SDK',
    href: '/sdk/miniprogram/overview',
    description:
      'Use the pure JavaScript SDK for mini apps and lightweight web experiences that do not need local message storage.',
    meta: 'Pure JavaScript',
  },
  {
    title: 'JavaScript SDK (WASM)',
    href: '/sdk/wasm/overview',
    description:
      'Build full-featured web messaging apps with local message storage, conversation caching, and local search.',
    meta: 'WebAssembly',
  },
];

const apiTopics: HomeCard[] = [
  {
    title: 'API setup',
    href: '/platform-api/prepare-to-use-api',
    description: 'Configure the API address, headers, admin token, and request conventions.',
  },
  {
    title: 'Users',
    href: '/platform-api/user/creating-users/create-a-user',
    description: 'Create and query users, update profiles, and issue login tokens.',
  },
  {
    title: 'Groups',
    href: '/platform-api/group/managing-groups/create-group',
    description: 'Create or update groups, manage members, and handle invitations.',
  },
  {
    title: 'Messages',
    href: '/platform-api/message/sending-messages/send-msg',
    description: 'Send messages from trusted services, or migrate historical message data.',
  },
];

const sampleApps: HomeCard[] = [
  {
    title: 'H5 demo',
    href: 'https://github.com/openimsdk/openim-h5-demo',
    description: 'Browser demo for OpenIMClientSDK login, conversations, and messaging.',
    meta: 'GitHub / H5',
  },
  {
    title: 'Electron demo',
    href: 'https://github.com/openimsdk/openim-electron-demo',
    description: 'Desktop demo for Electron packaging and runtime setup.',
    meta: 'GitHub / Electron',
  },
  {
    title: 'iOS demo',
    href: 'https://github.com/openimsdk/openim-ios-demo',
    description: 'Native iOS demo and its OpenIMClientSDK integration path.',
    meta: 'GitHub / iOS',
  },
  {
    title: 'Flutter demo',
    href: 'https://github.com/openimsdk/openim-flutter-demo',
    description: 'Flutter demo for a single codebase covering mobile targets.',
    meta: 'GitHub / Flutter',
  },
];

const featuredSamples: HomeCard[] = [
  {
    title: 'Prepare SDK integration',
    href: '/sdk/wasm/getting-started/before-you-start',
    description: 'Prepare OpenIMServer, app credentials, a user account, and a login token.',
    meta: 'SDK',
  },
  {
    title: 'Authenticate a client',
    href: '/sdk/wasm/getting-started/authenticate-and-manage-session',
    description: 'Initialize the SDK, log in, and handle token expiry and kick-off events.',
    meta: 'SDK',
  },
  {
    title: 'Send your first message',
    href: '/sdk/wasm/getting-started/send-first-message',
    description: 'After prepare and login, create and send the first message from the client SDK.',
    meta: 'SDK',
  },
  {
    title: 'Create a group',
    href: '/platform-api/group/managing-groups/create-group',
    description: 'Create a group from a trusted service and set the owner and initial members.',
    meta: 'API',
  },
];

const featureGroups: FeatureGroup[] = [
  {
    title: 'User identity and access',
    description: 'Create OpenIMServer users, keep profiles up to date, and complete client login.',
    links: [
      {
        title: 'User provisioning',
        href: '/platform-api/user/creating-users/create-a-user',
        description: 'Create OpenIMServer users from a trusted backend before clients log in.',
        meta: 'Users',
      },
      {
        title: 'User directory',
        href: '/platform-api/user/listing-users/list-users',
        description: 'Query users already imported into OpenIMServer from the backend.',
        meta: 'Users',
      },
      {
        title: 'User profiles',
        href: '/platform-api/user/managing-users/update-a-user',
        description: 'Update nicknames, avatars, and extension fields from the backend.',
        meta: 'Profile',
      },
      {
        title: 'Client authentication',
        href: '/sdk/wasm/getting-started/authenticate-and-manage-session',
        description: 'Initialize and log in the SDK, then handle connection and token events.',
        meta: 'SDK',
      },
    ],
  },
  {
    title: 'Conversations and groups',
    description: 'Manage client conversation state, create groups, and handle membership changes.',
    links: [
      {
        title: 'Manage conversations',
        href: '/sdk/wasm/conversation/overview-conversation',
        description: 'Retrieve conversations and maintain draft, unread, and other client state.',
        meta: 'Conversations',
      },
      {
        title: 'Create a group',
        href: '/platform-api/group/managing-groups/create-group',
        description: 'Create a group with Platform API and set the owner, admins, and members.',
        meta: 'Groups',
      },
      {
        title: 'List group members',
        href: '/platform-api/group/group-members/get-group-member-list',
        description: 'Read group members from the backend for admin tools and sync jobs.',
        meta: 'Members',
      },
      {
        title: 'Join a group',
        href: '/platform-api/group/group-applications/join-group',
        description: 'Submit a group join request from a trusted backend service.',
        meta: 'Members',
      },
    ],
  },
  {
    title: 'Messaging and history',
    description: 'Send and receive messages, load history, and search conversation records.',
    links: [
      {
        title: 'Send messages',
        href: '/platform-api/message/sending-messages/send-msg',
        description: 'Send messages from a trusted service to one-to-one or group sessions.',
        meta: 'Message',
      },
      {
        title: 'Message history',
        href: '/sdk/wasm/message/retrieving-messages/load-older-messages',
        description: 'Page through conversation history from the client SDK.',
        meta: 'History',
      },
      {
        title: 'Receive realtime messages',
        href: '/sdk/wasm/message/receiving-messages/receive-messages',
        description: 'Listen for new and offline message events and merge them by message ID.',
        meta: 'Realtime',
      },
      {
        title: 'Search message history',
        href: '/sdk/wasm/message/searching-messages/search-messages',
        description: 'Search locally synced messages by keyword and filters.',
        meta: 'Search',
      },
    ],
  },
  {
    title: 'Message state and UX',
    description:
      'Keep unread counts, read receipts, typing indicators, and custom message payloads in sync.',
    links: [
      {
        title: 'Unread counts',
        href: '/sdk/wasm/conversation/managing-conversations/get-total-unread-count',
        description: 'Read the account total unread count for navigation and app badges.',
        meta: 'Unread',
      },
      {
        title: 'Read receipts',
        href: '/sdk/wasm/message/managing-read-status/send-group-read-receipts',
        description: 'Report selected group messages as read from the current client.',
        meta: 'Read',
      },
      {
        title: 'Typing indicators',
        href: '/sdk/wasm/message/composing-messages/update-typing-status',
        description: 'Show realtime typing state in the active conversation.',
        meta: 'Typing',
      },
      {
        title: 'Custom messages',
        href: '/sdk/wasm/message/creating-messages/create-custom-message',
        description: 'Create an application-defined message with a custom payload and description.',
        meta: 'Custom',
      },
    ],
  },
  {
    title: 'Moderation and governance',
    description: 'Manage user block lists and mute groups or members when policy requires it.',
    links: [
      {
        title: 'Block users',
        href: '/platform-api/relation/blacklist/add-black',
        description: 'Create or remove block relationships that control one-to-one messaging.',
        meta: 'Block',
      },
      {
        title: 'Mute group members',
        href: '/platform-api/group/group-moderation/mute-group-member',
        description: 'Mute or unmute a member inside a group from the backend.',
        meta: 'Mute',
      },
      {
        title: 'List blocked users',
        href: '/platform-api/relation/blacklist/list-blacks',
        description: 'Query block relationships for admin tools and troubleshooting.',
        meta: 'Audit',
      },
      {
        title: 'Mute a group',
        href: '/sdk/wasm/group/change-group-mute',
        description: 'Enable or disable group-wide mute from the client SDK.',
        meta: 'Mute',
      },
    ],
  },
  {
    title: 'Advanced messaging',
    description:
      'Inspect group message readers, revoke messages, organize conversations, and pin important messages.',
    links: [
      {
        title: 'Group message readers',
        href: '/sdk/wasm/message/managing-read-status/get-group-message-readers',
        description: 'Query which group members have or have not read a message.',
        meta: 'Read',
      },
      {
        title: 'Revoke a message',
        href: '/sdk/wasm/message/managing-messages/revoke-a-message',
        description: 'Revoke a sent message for participants in the conversation.',
        meta: 'Revoke',
      },
      {
        title: 'Conversation groups',
        href: '/sdk/wasm/conversation/managing-conversation-groups/overview-conversation-groups',
        description: 'Organize conversations into user-defined groups and keep changes in sync.',
        meta: 'Group',
      },
      {
        title: 'Pinned messages',
        href: '/sdk/wasm/message/managing-messages/set-message-pinned',
        description: 'Pin important messages in a conversation and sync pin changes.',
        meta: 'Pin',
      },
    ],
  },
  {
    title: 'Cross-platform SDKs and operations',
    description: 'Choose a client SDK for your stack and prepare the Platform API foundation.',
    links: [
      {
        title: 'WASM SDK',
        href: '/sdk/wasm/overview',
        description: 'Integrate OpenIMClientSDK into browser apps through WebAssembly.',
        meta: 'WASM',
      },
      {
        title: 'iOS SDK',
        href: '/sdk/ios/overview',
        description: 'Integrate OpenIMClientSDK into native iOS apps.',
        meta: 'iOS',
      },
      {
        title: 'Flutter SDK',
        href: '/sdk/flutter/overview',
        description:
          'Use one OpenIMClientSDK integration path across mobile and supported desktop targets.',
        meta: 'Flutter',
      },
      {
        title: 'uni-app / uni-app x SDK',
        href: '/sdk/uniapp/overview',
        description: 'Use the native UTS plugin in uni-app and uni-app x mobile Apps.',
        meta: 'UTS',
      },
      {
        title: 'API setup',
        href: '/platform-api/prepare-to-use-api',
        description: 'Configure the API address, headers, admin token, and request conventions.',
        meta: 'API',
      },
      {
        title: 'Error codes',
        href: '/platform-api/error-codes',
        description: 'Look up Platform API response structure and server error codes.',
        meta: 'Errors',
      },
    ],
  },
];

const zhCardText: Record<string, Pick<HomeCard, 'title' | 'description'> & { meta?: string }> = {
  Android: {
    title: 'Android',
    description: '在 Android 原生应用中接入登录、用户、会话、群组和消息。',
    meta: 'Kotlin / Java',
  },
  'Error codes': {
    title: '错误码',
    description: '查询 Platform API 的响应结构和服务端错误码。',
    meta: '错误',
  },
  Flutter: {
    title: 'Flutter',
    description: '用同一套 OpenIMClientSDK 接入路径覆盖移动端和支持的桌面平台。',
    meta: 'Dart',
  },
  iOS: {
    title: 'iOS',
    description: '在 iOS 原生应用中接入登录、用户、会话、群组和消息。',
    meta: 'Swift',
  },
  'Issue a session token': {
    title: '签发会话 Token',
    description: '由可信业务服务端为 OpenIMServer 用户签发登录 Token。',
    meta: '认证',
  },
  'Block a user': {
    title: '屏蔽用户',
    description: '从可信服务端建立用户黑名单关系，阻止对方向当前用户发送消息。',
    meta: '管控',
  },
  Electron: {
    title: 'Electron',
    description: '面向 Electron 桌面应用，渲染层可复用 WASM，原生运行层可通过 FFI 接入。',
    meta: 'Desktop',
  },
  Messages: {
    title: '消息',
    description: '从可信服务端发送消息，或导入其他系统的历史消息。',
  },
  'Read receipts': {
    title: '已读回执',
    description: '从当前客户端上报指定群消息已读。',
    meta: '已读',
  },
  'Search message history': {
    title: '搜索消息历史',
    description: '按关键词和筛选条件搜索 SDK 已同步到本地的消息。',
    meta: '搜索',
  },
  'Send your first message': {
    title: '发送第一条消息',
    description: '完成接入准备和登录后，创建并发送第一条消息。',
    meta: 'SDK',
  },
  'Prepare SDK integration': {
    title: '完成接入准备',
    description: '准备 OpenIMServer、应用凭证、用户账号和登录 Token。',
    meta: 'SDK',
  },
  'Authenticate a client': {
    title: '初始化并登录客户端',
    description: '初始化 SDK、完成登录，并处理 Token 过期和被踢下线等事件。',
    meta: 'SDK',
  },
  'Typing indicators': {
    title: '输入状态',
    description: '在当前活跃会话中显示实时输入状态。',
    meta: '输入中',
  },
  'JavaScript SDK': {
    title: 'JavaScript SDK',
    description:
      '纯 JavaScript 实现，适用于小程序、客服入口、活动页和无需本地消息存储的轻量 Web 场景。',
    meta: '纯 JavaScript',
  },
  'JavaScript SDK (WASM)': {
    title: 'JavaScript SDK (WASM)',
    description:
      '基于 WebAssembly，提供本地消息存储、会话缓存和本地搜索，适用于完整 Web IM 和 Electron 渲染层。',
    meta: 'WebAssembly',
  },
  'React Native': {
    title: 'React Native',
    description: '在 React Native 应用中接入 OpenIMClientSDK，并处理移动端运行时差异。',
    meta: 'RN',
  },
  'Unread counts': {
    title: '未读数',
    description: '读取账号总未读数，更新导航和应用角标。',
    meta: '未读',
  },
  'User profiles': {
    title: '用户资料',
    description: '从服务端更新用户昵称、头像和扩展字段。',
    meta: '资料',
  },
  Users: {
    title: '用户',
    description: '创建和查询用户、更新资料，并为客户端登录签发 Token。',
  },
  'uni-app': {
    title: 'uni-app',
    description: '在 uni-app 工程中一次接入，覆盖 App、H5 和支持的小程序目标。',
    meta: 'Vue / uni-app',
  },
  'Android demo': {
    title: 'Android Demo',
    description: '查看 Android 原生 Demo 的登录、会话和消息接入方式。',
    meta: 'GitHub / Android',
  },
  'API setup': {
    title: 'API 接入准备',
    description: '配置 API 地址、公共请求头、管理员 Token 和请求体约定。',
    meta: 'API',
  },
  'Block users': {
    title: '屏蔽用户',
    description: '建立或解除用户黑名单关系，控制单聊消息发送。',
    meta: '屏蔽',
  },
  'Client authentication': {
    title: '登录与会话管理',
    description: '初始化并登录 OpenIMClientSDK，处理连接、Token 过期和被踢下线事件。',
    meta: 'SDK',
  },
  'Electron demo': {
    title: 'Electron Demo',
    description: '查看 Electron 桌面端 Demo 的打包和运行环境配置。',
    meta: 'GitHub / Electron',
  },
  'Flutter demo': {
    title: 'Flutter Demo',
    description: '查看 Flutter Demo，用同一工程覆盖移动端接入。',
    meta: 'GitHub / Flutter',
  },
  'H5 demo': {
    title: 'H5 Demo',
    description: '查看浏览器端 Demo 的登录、会话和消息接入方式。',
    meta: 'GitHub / H5',
  },
  'iOS demo': {
    title: 'iOS Demo',
    description: '查看 iOS 原生 Demo 及其 OpenIMClientSDK 接入路径。',
    meta: 'GitHub / iOS',
  },
  'Join a group': {
    title: '加入群组',
    description: '从可信服务端提交用户入群请求。',
    meta: '成员',
  },
  'List blocked users': {
    title: '查询屏蔽关系',
    description: '查询指定用户的黑名单关系，用于后台管理和问题排查。',
    meta: '审计',
  },
  'List group members': {
    title: '查询群组成员',
    description: '从服务端读取群成员列表，用于后台管理和数据同步。',
    meta: '成员',
  },
  'Message history': {
    title: '历史消息',
    description: '通过 SDK 分页读取会话历史消息。',
    meta: '历史',
  },
  'Mute group members': {
    title: '禁言群组成员',
    description: '从服务端禁言或解除禁言指定群成员。',
    meta: '禁言',
  },
  'Receive realtime messages': {
    title: '接收实时消息',
    description: '监听新消息和离线消息事件，并按消息 ID 合并到消息列表。',
    meta: '实时',
  },
  'React Native demo': {
    title: 'React Native Demo',
    description: '查看 React Native Demo 的移动端运行环境与 SDK 接入方式。',
    meta: 'GitHub / RN',
  },
  'Send messages': {
    title: '发送消息',
    description: '从可信服务端向单聊用户或群组发送消息。',
    meta: '消息',
  },
  'uni-app demo': {
    title: 'uni-app Demo',
    description: '查看 uni-app Demo，覆盖 App、H5 和支持的小程序目标。',
    meta: 'GitHub / uni-app',
  },
  'User directory': {
    title: '查询用户',
    description: '从服务端查询已导入 OpenIMServer 的用户资料。',
    meta: '用户',
  },
  'User provisioning': {
    title: '创建用户',
    description: '在客户端登录前，由可信业务服务端创建 OpenIMServer 用户。',
    meta: '用户',
  },
  Groups: {
    title: '群组',
    description: '创建或更新群组、管理群成员，并处理邀请和加入流程。',
  },
  'Create a group': {
    title: '创建群组',
    description: '通过 Platform API 创建群组，并设置群主和初始成员。',
    meta: 'API',
  },
  'Manage conversations': {
    title: '管理会话',
    description: '通过 SDK 获取会话，并维护草稿、未读数和其他客户端会话状态。',
    meta: '会话',
  },
  'Custom messages': {
    title: '自定义消息',
    description: '创建包含自定义载荷和描述的业务消息。',
    meta: '自定义',
  },
  'Group message readers': {
    title: '群消息已读成员',
    description: '查询已读或未读指定群消息的成员。',
    meta: '已读',
  },
  'Revoke a message': {
    title: '撤回消息',
    description: '撤回已经发送的消息，并同步给会话参与者。',
    meta: '撤回',
  },
  'Conversation groups': {
    title: '会话分组',
    description: '创建和管理当前用户的会话分组，并同步分组及成员会话的变化。',
    meta: '分组',
  },
  'Pinned messages': {
    title: '置顶消息',
    description: '置顶会话中的重要消息，并通过事件同步变更。',
    meta: '置顶',
  },
  'Mute a group': {
    title: '群组全员禁言',
    description: '通过客户端开启或关闭群组全员禁言。',
    meta: '禁言',
  },
  'WASM SDK': {
    title: 'WASM SDK',
    description: '通过 WebAssembly 在浏览器应用中接入 OpenIMClientSDK。',
    meta: 'WASM',
  },
  'iOS SDK': {
    title: 'iOS SDK',
    description: '在 iOS 原生应用中接入 OpenIMClientSDK。',
    meta: 'iOS',
  },
  'Flutter SDK': {
    title: 'Flutter SDK',
    description: '用同一套 OpenIMClientSDK 接入路径覆盖移动端和支持的桌面平台。',
    meta: 'Flutter',
  },
};

const zhFeatureGroupText: Record<string, Pick<FeatureGroup, 'title' | 'description'>> = {
  'User identity and access': {
    title: '用户与登录',
    description: '创建 OpenIMServer 用户、维护用户资料，并完成 OpenIMClientSDK 登录。',
  },
  'Conversations and groups': {
    title: '会话与群组',
    description: '管理客户端会话状态，并创建群组、查询成员和处理成员进退群。',
  },
  'Messaging and history': {
    title: '消息与历史',
    description: '发送和接收消息、读取历史消息，并按关键词搜索会话记录。',
  },
  'Message state and UX': {
    title: '消息状态与体验',
    description: '同步未读数、已读回执和输入状态，并承载自定义消息载荷。',
  },
  'Advanced messaging': {
    title: '高级功能',
    description: '查询群消息已读成员、撤回消息、管理会话分组，并置顶重要消息。',
  },
  'Moderation and governance': {
    title: '关系与群组管控',
    description: '管理用户黑名单，并对群组或群成员设置禁言。',
  },
  'Cross-platform SDKs and operations': {
    title: '跨平台 SDK 与服务端接入',
    description: '选择适合应用技术栈的客户端 SDK，并完成 Platform API 接入准备。',
  },
};

function localizeCards(cards: HomeCard[], locale: Locale): HomeCard[] {
  if (locale === 'en') return cards;
  return cards.map((card) => ({
    ...card,
    ...(zhCardText[card.title] ?? {}),
  }));
}

function localizeFeatureGroups(groups: FeatureGroup[], locale: Locale): FeatureGroup[] {
  if (locale === 'en') return groups;
  return groups.map((group) => ({
    ...group,
    ...(zhFeatureGroupText[group.title] ?? {}),
    links: localizeCards(group.links, locale),
  }));
}

function homeCopy(value: string): string {
  return value.replace(/[。.]+$/, '');
}

function SectionIntro({
  eyebrow,
  title,
  description,
  actionLabel,
  actionHref,
}: {
  eyebrow: string;
  title: string;
  description: string;
  actionLabel?: string;
  actionHref?: string;
}) {
  return (
    <header className="docs-home-section-header">
      <div>
        <span>{eyebrow}</span>
        <h2>{homeCopy(title)}</h2>
        <p>{homeCopy(description)}</p>
      </div>
      {actionLabel && actionHref ? (
        <Link className="docs-home-section-link" href={actionHref}>
          {actionLabel}
          <b aria-hidden="true">→</b>
        </Link>
      ) : null}
    </header>
  );
}

function CardLink({
  card,
  className,
  cta = 'Open docs',
  locale = 'en',
}: {
  card: HomeCard;
  className: string;
  cta?: string;
  locale?: Locale;
}) {
  const href = toLocalizedPath(card.href, locale);
  const external = isExternalHref(href);

  return (
    <Link
      className={className}
      href={href}
      rel={external ? 'noreferrer' : undefined}
      target={external ? '_blank' : undefined}
    >
      {card.meta ? <span>{card.meta}</span> : null}
      <h3>{homeCopy(card.title)}</h3>
      <p>{homeCopy(card.description)}</p>
      <strong>
        {cta}
        <b aria-hidden="true">→</b>
      </strong>
    </Link>
  );
}

function isExternalHref(href: string): boolean {
  return /^(https?:)?\/\//.test(href);
}

export function ChatHero({
  eyebrow,
  title,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  locale = 'en',
}: {
  eyebrow: string;
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
  locale?: Locale;
}) {
  const copy = landingCopy[locale];
  const hero =
    locale === 'zh'
      ? {
          eyebrow: copy.heroEyebrow,
          title: copy.heroTitle,
          description: copy.heroDescription,
          primaryLabel: copy.heroPrimary,
          primaryHref,
          secondaryLabel: copy.heroSecondary,
          secondaryHref,
        }
      : { eyebrow, title, description, primaryLabel, primaryHref, secondaryLabel, secondaryHref };
  return (
    <section className="chat-hero">
      <div aria-hidden="true" className="chat-hero-backdrop">
        <span className="chat-hero-grid" />
        <span className="chat-hero-glow chat-hero-glow-a" />
        <span className="chat-hero-glow chat-hero-glow-b" />
        <span className="chat-hero-fade" />
      </div>
      <div className="chat-hero-copy">
        <span className="chat-eyebrow">{hero.eyebrow}</span>
        <h1>{homeCopy(hero.title)}</h1>
        <p>{homeCopy(hero.description)}</p>
        <div className="chat-hero-actions">
          <Link className="button-primary" href={toLocalizedPath(hero.primaryHref, locale)}>
            {hero.primaryLabel}
          </Link>
          <Link className="button-secondary" href={toLocalizedPath(hero.secondaryHref, locale)}>
            {hero.secondaryLabel}
          </Link>
        </div>
      </div>
      <div aria-hidden="true" className="chat-hero-visual">
        <HeroProductImage />
      </div>
    </section>
  );
}

export function LandingSection({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <section className="landing-section">
      <header>
        <h2>{homeCopy(title)}</h2>
        <p>{homeCopy(description)}</p>
      </header>
      <div className="landing-card-grid">{children}</div>
    </section>
  );
}

export function LandingCard({
  title,
  href,
  description,
  icon,
  locale = 'en',
}: {
  title: string;
  href: string;
  description: string;
  icon: 'code' | 'layout' | 'server';
  locale?: Locale;
}) {
  const Icon = icon === 'layout' ? LayoutIcon : icon === 'server' ? ServerIcon : CodeIcon;
  return (
    <Link className="landing-card" href={toLocalizedPath(href, locale)}>
      <span className="landing-card-icon">
        <Icon />
      </span>
      <h3>{homeCopy(title)}</h3>
      <p>{homeCopy(description)}</p>
      <span className="landing-card-link">
        Explore documentation <b aria-hidden="true">→</b>
      </span>
    </Link>
  );
}

export function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="stat-card">
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  );
}

export function SDKsSection({ locale = 'en' }: { locale?: Locale }) {
  const copy = landingCopy[locale];
  const cards = localizeCards(sdkCards, locale);

  return (
    <section className="docs-home-section" id="sdks">
      <SectionIntro
        eyebrow={copy.sdkEyebrow}
        title={copy.sdkTitle}
        description={copy.sdkDescription}
        actionLabel={copy.sdkAction}
        actionHref={toLocalizedPath('/sdk/wasm/overview', locale)}
      />
      <div className="sdk-card-grid">
        {cards.map((card) => (
          <CardLink
            card={card}
            className="sdk-card"
            cta={locale === 'zh' ? '查看 SDK' : 'View SDK'}
            key={card.href}
            locale={locale}
          />
        ))}
      </div>
    </section>
  );
}

export function PlatformApiSection({ locale = 'en' }: { locale?: Locale }) {
  const copy = landingCopy[locale];
  const topics = localizeCards(apiTopics, locale);

  return (
    <section className="docs-home-section" id="platform-api">
      <SectionIntro
        eyebrow={copy.apiEyebrow}
        title={copy.apiTitle}
        description={copy.apiDescription}
        actionLabel={copy.apiAction}
        actionHref={toLocalizedPath('/platform-api/overview', locale)}
      />
      <div className="platform-api-panel">
        <Link
          className="platform-api-hero-card"
          href={toLocalizedPath('/platform-api/overview', locale)}
        >
          <span>{copy.apiHeroKicker}</span>
          <h3>{homeCopy(copy.apiHeroTitle)}</h3>
          <p>{homeCopy(copy.apiHeroDescription)}</p>
          <strong>
            {copy.apiHeroCta}
            <b aria-hidden="true">→</b>
          </strong>
        </Link>
        <div className="api-topic-list">
          {topics.map((topic) => (
            <CardLink
              card={topic}
              className="api-topic-card"
              cta={locale === 'zh' ? '打开文档' : 'Open docs'}
              key={topic.href}
              locale={locale}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export function SampleAppsSection({ locale = 'en' }: { locale?: Locale }) {
  const copy = landingCopy[locale];
  const cards = localizeCards(sampleApps, locale);

  return (
    <section className="docs-home-section" id="sample-apps">
      <SectionIntro
        eyebrow={copy.sampleEyebrow}
        title={copy.sampleTitle}
        description={copy.sampleDescription}
      />
      <div className="sample-app-grid">
        {cards.map((card) => (
          <CardLink
            card={card}
            className="sample-app-card"
            cta={locale === 'zh' ? '打开 GitHub' : 'Open GitHub'}
            key={card.href}
            locale={locale}
          />
        ))}
      </div>
    </section>
  );
}

export function FeaturedSamplesSection({ locale = 'en' }: { locale?: Locale }) {
  const copy = landingCopy[locale];
  const cards = localizeCards(featuredSamples, locale);

  return (
    <section className="docs-home-section" id="featured-samples">
      <SectionIntro
        eyebrow={copy.featuredEyebrow}
        title={copy.featuredTitle}
        description={copy.featuredDescription}
      />
      <div className="featured-sample-grid">
        {cards.map((card, index) => (
          <Link
            className="featured-sample-card"
            href={toLocalizedPath(card.href, locale)}
            key={card.href}
          >
            <span>{String(index + 1).padStart(2, '0')}</span>
            <div>
              <small>{card.meta}</small>
              <h3>{homeCopy(card.title)}</h3>
              <p>{homeCopy(card.description)}</p>
            </div>
            <b aria-hidden="true">→</b>
          </Link>
        ))}
      </div>
    </section>
  );
}

export function FeaturesSection({ locale = 'en' }: { locale?: Locale }) {
  const copy = landingCopy[locale];
  const groups = localizeFeatureGroups(featureGroups, locale);

  return (
    <section className="docs-home-section docs-home-section-last" id="features">
      <SectionIntro
        eyebrow={copy.featureEyebrow}
        title={copy.featureTitle}
        description={copy.featureDescription}
      />
      <div className="feature-group-grid">
        {groups.map((group) => (
          <article className="feature-group-card" key={group.title}>
            <header>
              <h3>{homeCopy(group.title)}</h3>
              <p>{homeCopy(group.description)}</p>
            </header>
            <div className="feature-mini-list">
              {group.links.map((feature) => (
                <Link
                  className="feature-mini-link"
                  href={toLocalizedPath(feature.href, locale)}
                  key={feature.href}
                >
                  <span>{feature.meta}</span>
                  <strong>{homeCopy(feature.title)}</strong>
                  <p>{homeCopy(feature.description)}</p>
                </Link>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
