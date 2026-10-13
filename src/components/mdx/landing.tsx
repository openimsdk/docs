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
      'Browse demos and integration examples maintained by the OpenIMSDK GitHub organization to see how each platform integrates OpenIMClientSDK.',
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
      '通过服务端 Platform API，在业务后台管理用户与群组、安全签发登录 Token、发送业务消息并平滑导入历史数据。',
    apiEyebrow: '服务端',
    apiHeroCta: '从 API 概览开始',
    apiHeroDescription:
      'Platform API 按用户、群组和消息等核心资源组织。先完成服务地址配置与统一鉴权，再快速接入各项后台能力。',
    apiHeroKicker: 'REST API',
    apiHeroTitle: '从业务后端管理 OpenIMServer',
    apiTitle: 'Platform API',
    featureDescription:
      '按用户、会话、群组和消息等核心功能分类浏览，快速查阅对应的客户端 SDK 或服务端 API 开发指南。',
    featureEyebrow: '功能导航',
    featureTitle: '功能特性',
    featuredDescription:
      '跟随快速上手指引，依次完成环境准备、用户登录、首条消息收发与群组创建。',
    featuredEyebrow: '接入指南',
    featuredTitle: '核心接入流程',
    heroDescription:
      '提供多端客户端 SDK、服务端 API、完整示例应用与核心集成指南，助你快速构建支持单聊、群聊、会话管理与音视频通话的现代化即时通讯产品。',
    heroEyebrow: 'OPENIMSDK',
    heroPrimary: '查看 SDK',
    heroSecondary: '查看 Platform API',
    heroTitle: '使用 OpenIMSDK 构建即时通讯应用',
    sampleDescription:
      '查看官方开源的 Demo 与工程示例，快速参考各平台真实的集成与调用方式。',
    sampleEyebrow: '开源 Demo',
    sampleTitle: '示例应用',
    sdkAction: '查看 WASM SDK',
    sdkDescription:
      '选择适配你业务场景的客户端 SDK。各平台均提供一致的用户、会话、群组和消息核心能力，并针对各端运行环境进行了深度优化。',
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
    title: 'Android',
    href: '/sdk/android/overview',
    description:
      'Integrate login, users, conversations, groups, and messages in native Android apps.',
    meta: 'Kotlin / Java',
  },
  {
    title: 'Flutter',
    href: '/sdk/flutter/overview',
    description:
      'Use one OpenIMClientSDK integration path across mobile and supported desktop targets.',
    meta: 'Dart',
  },
  {
    title: 'React Native',
    href: '/sdk/react-native/overview',
    description:
      'Integrate OpenIMClientSDK into React Native apps for Android and iOS, including Expo development builds.',
    meta: 'TypeScript / RN',
  },
  {
    title: 'HarmonyOS',
    href: '/sdk/harmony/overview',
    description:
      'Build native HarmonyOS apps with typed ArkTS APIs for phones, tablets, and 2in1 devices.',
    meta: 'ArkTS / Enterprise',
  },
  {
    title: 'uni-app / uni-app x',
    href: '/sdk/uniapp/overview',
    description:
      'Use one UTS plugin integration across native Android, iOS, and HarmonyOS app targets.',
    meta: 'UTS / HBuilderX',
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
  {
    title: 'Android demo',
    href: 'https://github.com/openimsdk/open-im-android-demo',
    description: 'Native Android demo for login, conversations, messaging, and offline push.',
    meta: 'GitHub / Android',
  },
  {
    title: 'React Native demo',
    href: 'https://github.com/openimsdk/openim-reactnative-demo',
    description: 'React Native demo for running OpenIMClientSDK on Android and iOS.',
    meta: 'GitHub / RN',
  },
  {
    title: 'uni-app / uni-app x example',
    href: 'https://github.com/openimsdk/openim-sdk-unix',
    description:
      'UTS plugin repository with an integration example for uni-app and uni-app x projects.',
    meta: 'GitHub / UTS',
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
    description: '一套代码覆盖 iOS、Android 及多端桌面应用，开箱即用。',
    meta: 'Dart',
  },
  iOS: {
    title: 'iOS',
    description: '在 iOS 原生应用中接入登录、用户、会话、群组和消息。',
    meta: 'Swift',
  },
  'Issue a session token': {
    title: '签发会话 Token',
    description: '在业务后台验证用户身份后，为该用户签发用于登录 OpenIM 的 Token。',
    meta: '认证',
  },
  'Block a user': {
    title: '屏蔽用户',
    description: '将指定用户加入黑名单，阻止其发起单聊消息与好友申请。',
    meta: '管控',
  },
  Electron: {
    title: 'Electron',
    description: '专为 Electron 桌面端打造，支持在渲染进程通过 WASM 轻量接入，或在主进程直接集成原生能力。',
    meta: 'Desktop',
  },
  Messages: {
    title: '消息',
    description: '从业务后台直接发送消息，或平滑导入历史会话记录。',
  },
  'Read receipts': {
    title: '已读回执',
    description: '上报单聊或群聊消息已读状态，实时同步已读回执。',
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
    description: '部署或连接 OpenIM 服务端，获取应用凭证与测试 Token。',
    meta: 'SDK',
  },
  'Authenticate a client': {
    title: '初始化并登录客户端',
    description: '初始化 SDK 并完成登录，监听连接状态、Token 过期和多端互踢事件。',
    meta: 'SDK',
  },
  'Typing indicators': {
    title: '输入状态',
    description: '在会话中实时呈现对方正在输入的状态与提示。',
    meta: '输入中',
  },
  'JavaScript SDK': {
    title: 'JavaScript SDK',
    description:
      '采用纯 JavaScript 编写，体积小巧、无需本地数据库依赖，特别适合微信/各类小程序及轻量 Web 场景。',
    meta: '纯 JavaScript',
  },
  'JavaScript SDK (WASM)': {
    title: 'JavaScript SDK (WASM)',
    description:
      '基于 WebAssembly 与本地 SQLite 存储，具备离线消息缓存与毫秒级本地搜索，打造桌面级的 Web 完整 IM 体验。',
    meta: 'WebAssembly',
  },
  'React Native': {
    title: 'React Native',
    description: '在 Android 与 iOS React Native 应用中接入 OpenIMClientSDK，支持 Expo 开发构建。',
    meta: 'TypeScript / RN',
  },
  HarmonyOS: {
    title: 'HarmonyOS',
    description: '基于原生 ArkTS 深度封装，全面适配鸿蒙手机、平板及 2in1 设备。',
    meta: 'ArkTS / 商业版',
  },
  'Unread counts': {
    title: '未读数',
    description: '获取当前用户的总未读消息数，用于更新桌面图标角标或底部导航红点。',
    meta: '未读',
  },
  'User profiles': {
    title: '用户资料',
    description: '在业务服务端更新用户昵称、头像和扩展字段。',
    meta: '资料',
  },
  Users: {
    title: '用户',
    description: '创建和查询用户、更新资料，并在业务后台安全签发 Token。',
  },
  'uni-app / uni-app x': {
    title: 'uni-app / uni-app x',
    description: '基于官方 UTS 原生插件，一套代码无缝打包 Android、iOS 和 HarmonyOS 原生应用。',
    meta: 'UTS / HBuilderX',
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
    description: '从业务后台直接将用户加入群组，或代为发起加群请求。',
    meta: '成员',
  },
  'List blocked users': {
    title: '查询屏蔽关系',
    description: '查询指定用户的黑名单列表，用于后台管控与客服排查。',
    meta: '审计',
  },
  'List group members': {
    title: '查询群组成员',
    description: '从服务端查询群成员列表，用于后台管理和数据同步。',
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
    description: '查看 React Native Demo 在 Android 与 iOS 上的运行环境和 SDK 接入方式。',
    meta: 'GitHub / RN',
  },
  'Send messages': {
    title: '发送消息',
    description: '从可信服务端向单聊用户或群组发送消息。',
    meta: '消息',
  },
  'uni-app / uni-app x example': {
    title: 'uni-app / uni-app x 示例',
    description: '查看 UTS 插件仓库中的集成示例，在 uni-app 与 uni-app x 工程中验证 SDK。',
    meta: 'GitHub / UTS',
  },
  'User directory': {
    title: '查询用户',
    description: '从服务端查询已导入 OpenIMServer 的用户资料。',
    meta: '用户',
  },
  'User provisioning': {
    title: '创建用户',
    description: '在业务用户注册或同步时，将其快速导入或创建为 OpenIM 用户。',
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
    description: '支持将会话整理归类到自定义分组，并实时同步分组状态与列表变化。',
    meta: '分组',
  },
  'Pinned messages': {
    title: '置顶消息',
    description: '将群组或单聊中的关键消息置顶，方便所有会话成员快速查阅。',
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
    description: '一套代码覆盖 iOS、Android 及多端桌面应用，开箱即用。',
    meta: 'Flutter',
  },
};

const zhFeatureGroupText: Record<string, Pick<FeatureGroup, 'title' | 'description'>> = {
  'User identity and access': {
    title: '用户与登录',
    description: '管理用户注册与资料更新，安全签发凭证并完成客户端登录。',
  },
  'Conversations and groups': {
    title: '会话与群组',
    description: '维护会话列表与未读数，支持群组创建、成员管理及权限控制。',
  },
  'Messaging and history': {
    title: '消息与历史',
    description: '支持多种消息类型的收发、云端与本地历史消息同步及全文字符串搜索。',
  },
  'Message state and UX': {
    title: '消息状态与交互体验',
    description: '支持未读数同步、消息已读回执、正在输入状态提示以及灵活的自定义扩展消息。',
  },
  'Advanced messaging': {
    title: '高级功能',
    description: '提供消息撤回、群消息已读成员列表、重要消息置顶及会话分组管理。',
  },
  'Moderation and governance': {
    title: '关系与群组管控',
    description: '提供黑名单管理、全群禁言及指定成员禁言等安全治理能力。',
  },
  'Cross-platform SDKs and operations': {
    title: '跨平台 SDK 与服务端接入',
    description: '选择适合应用技术栈的客户端 SDK，并完成服务端 Platform API 接入。',
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
