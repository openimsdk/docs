import { mkdir, rm, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';

const root = process.cwd();
const today = new Date().toLocaleDateString('en-CA', { timeZone: 'Asia/Shanghai' });
const localRoot = '/docs/chat/platform-api/v3';
const contentRoot = 'content/docs/chat/platform-api/v3';
const zhContentRoot = 'content/zh/docs/chat/platform-api/v3';
const contextKey = 'chat/platform-api/v3';
const contextTitle = 'Platform API';
const sendbirdOverviewUrl = 'https://sendbird.com/docs/chat/platform-api/v3/overview';
const openimRawBase = 'https://raw.githubusercontent.com/openimsdk/docs/main';
const openimDocsBase = 'https://docs.openim.io';
const platformApiZhDataPath = 'src/generated/platform-api-zh-content.json';

const platformApiZhNavigationLabels = {
  'advanced-analytics': '高级分析',
  announcements: '公告',
  application: '应用',
  'assigning-a-user-role': '分配用户角色',
  'banning-a-user': '封禁用户',
  'blocking-users': '屏蔽用户',
  bot: '机器人',
  channel: '频道',
  'concurrent-connections': '并发连接',
  'configuring-notification-preferences': '配置通知偏好',
  'creating-a-bot': '创建机器人',
  'creating-a-channel': '创建频道',
  'creating-a-gdpr-request': '创建 GDPR 请求',
  'creating-a-report': '创建举报',
  'creating-users': '创建用户',
  'data-export': '数据导出',
  'daus-and-maus': 'DAU 和 MAU',
  'delivery-receipts': '送达回执',
  events: '事件',
  'freezing-a-channel': '冻结频道',
  'getting-failed-webhooks': '获取失败 Webhook',
  'getting-group-channel-count': '获取群组频道数量',
  'inviting-a-user': '邀请用户',
  'listing-banned-users': '查询封禁用户',
  'listing-blocked-and-blocking-users': '查询屏蔽与被屏蔽用户',
  'listing-bots': '查询机器人',
  'listing-channels-in-an-application': '查询应用内频道',
  'listing-data-exports': '查询数据导出',
  'listing-gdpr-requests': '查询 GDPR 请求',
  'listing-muted-users': '查询禁言用户',
  'listing-reports': '查询举报',
  'listing-users': '查询用户',
  'managing-a-bot': '管理机器人',
  'managing-a-channel': '管理频道',
  'managing-api-tokens': '管理 API Token',
  'managing-apns-configurations': '管理 APNs 配置',
  'managing-application': '管理应用',
  'managing-audit-logs': '管理审计日志',
  'managing-auto-event-messages': '管理自动事件消息',
  'managing-device-tokens': '管理设备 Token',
  'managing-fcm-configurations': '管理 FCM 配置',
  'managing-features': '管理功能',
  'managing-gdpr-requests': '管理 GDPR 请求',
  'managing-hms-configurations': '管理 HMS 配置',
  'managing-ip-whitelist': '管理 IP 白名单',
  'managing-joined-group-channels': '管理已加入群组频道',
  'managing-members': '管理成员',
  'managing-metacounter': '管理元计数器',
  'managing-metadata': '管理元数据',
  'managing-notifications': '管理通知',
  'managing-roles': '管理角色',
  'managing-session-tokens': '管理会话 Token',
  'managing-subscribed-events': '管理订阅事件',
  'managing-typing-indicators': '管理输入状态',
  'managing-unread-count': '管理未读数',
  'managing-users': '管理用户',
  'marking-messages-as-read': '标记消息已读',
  message: '消息',
  'message-search': '消息搜索',
  'message-threading': '消息线程',
  'messaging-basics': '消息基础',
  migration: '迁移其他项目到 OpenIM',
  'moderating-messages': '审核消息',
  moderation: '内容审核',
  'muting-a-user': '禁言用户',
  organization: '组织',
  'peak-connections': '峰值连接',
  'pinned-messages': '置顶消息',
  polls: '投票',
  privacy: '隐私',
  'push-notifications': '推送通知',
  'reactions-and-emojis': '表情回应',
  'read-receipts': '已读回执',
  report: '举报',
  'scheduled-messages': '定时消息',
  'scheduling-data-exports': '调度数据导出',
  'sending-a-bot-message': '发送机器人消息',
  'setting-up-an-application': '配置应用',
  'setting-up-channels': '配置频道',
  statistics: '统计',
  translations: '翻译',
  'understanding-rate-limits': '理解速率限制',
  user: '用户',
  webhook: 'Webhook',
};

const openimSources = {
  apiIntro: 'docs/restapi/apis/introduction.md',
  adminToken: 'docs/restapi/apis/authenticationManagement/getAdminToken.md',
  userToken: 'docs/restapi/apis/authenticationManagement/getUserToken.md',
  forceLogout: 'docs/restapi/apis/authenticationManagement/forceLogout.md',
  userRegister: 'docs/restapi/apis/userManagement/userRegister.md',
  getUserList: 'docs/restapi/apis/userManagement/getUserList.md',
  getUserIDList: 'docs/restapi/apis/userManagement/getUserIDList.md',
  getSpecifiedUser: 'docs/restapi/apis/userManagement/getSpecifiedUser.md',
  updateUserInfo: 'docs/restapi/apis/userManagement/updateUserInfo.md',
  checkUserRegistered: 'docs/restapi/apis/userManagement/checkUserRegistered.md',
  getUserOnlineStatus: 'docs/restapi/apis/userManagement/getUserOnlineStatus.md',
  addNotificationAccount: 'docs/restapi/apis/userManagement/addNotificationAccount.md',
  updateNotificationAccount: 'docs/restapi/apis/userManagement/updateNotificationAccount.md',
  searchNotificationAccount: 'docs/restapi/apis/userManagement/searchNotificationAccount.md',
  updateGlobalRemind: 'docs/restapi/apis/userManagement/updateGlobalRemind.md',
  getOwnerConversation: 'docs/restapi/apis/conversationManagement/getOwnerConversation.md',
  getSortedConversationList:
    'docs/restapi/apis/conversationManagement/getSortedConversationList.md',
  setConversations: 'docs/restapi/apis/conversationManagement/setConversations.md',
  addBlackList: 'docs/restapi/apis/friendsManagement/addBlackList.md',
  deleteBlackList: 'docs/restapi/apis/friendsManagement/deleteBlackList.md',
  getBlackList: 'docs/restapi/apis/friendsManagement/getBlackList.md',
  checkFriend: 'docs/restapi/apis/friendsManagement/checkFriend.md',
  getFriendList: 'docs/restapi/apis/friendsManagement/getFriendList.md',
  sendApplication: 'docs/restapi/apis/friendsManagement/sendApplication.md',
  processApplication: 'docs/restapi/apis/friendsManagement/processApplication.md',
  getRecvApplication: 'docs/restapi/apis/friendsManagement/getRecvApplication.md',
  getSentApplication: 'docs/restapi/apis/friendsManagement/getSentApplication.md',
  importFriend: 'docs/restapi/apis/friendsManagement/importFriend.md',
  updateFriends: 'docs/restapi/apis/friendsManagement/updateFriends.md',
  deleteFriend: 'docs/restapi/apis/friendsManagement/deleteFriend.md',
  createGroup: 'docs/restapi/apis/groupManagement/createGroup.md',
  getGroupsInfo: 'docs/restapi/apis/groupManagement/getGroupsInfo.md',
  getJoinedGroupList: 'docs/restapi/apis/groupManagement/getJoinedGroupList.md',
  getGroupMemberList: 'docs/restapi/apis/groupManagement/getGroupMemberList.md',
  getGroupMembersInfo: 'docs/restapi/apis/groupManagement/getGroupMembersInfo.md',
  inviteUserToGroup: 'docs/restapi/apis/groupManagement/inviteUserToGroup.md',
  joinGroup: 'docs/restapi/apis/groupManagement/joinGroup.md',
  quitGroup: 'docs/restapi/apis/groupManagement/quitGroup.md',
  kickGroup: 'docs/restapi/apis/groupManagement/kickGroup.md',
  dismissGroup: 'docs/restapi/apis/groupManagement/dismissGroup.md',
  setGroupInfo: 'docs/restapi/apis/groupManagement/setGroupInfo.md',
  setGroupMemberInfo: 'docs/restapi/apis/groupManagement/setGroupMemberInfo.md',
  transferGroup: 'docs/restapi/apis/groupManagement/transferGroup.md',
  muteGroup: 'docs/restapi/apis/groupManagement/muteGroup.md',
  cancelMuteGroup: 'docs/restapi/apis/groupManagement/cancelMuteGroup.md',
  muteGroupMember: 'docs/restapi/apis/groupManagement/muteGroupMember.md',
  cancelMuteGroupMember: 'docs/restapi/apis/groupManagement/cancelMuteGroupMember.md',
  getRecvGroupApplicationList: 'docs/restapi/apis/groupManagement/getRecvGroupApplicationList.md',
  getUserReqGroupApplicationList:
    'docs/restapi/apis/groupManagement/getUserReqGroupApplicationList.md',
  getGroupApplicationListByUserID:
    'docs/restapi/apis/groupManagement/getGroupApplicationListByUserID.md',
  groupApplicationResponse: 'docs/restapi/apis/groupManagement/groupApplicationResponse.md',
  sendMessage: 'docs/restapi/apis/messageManagement/sendMessage.md',
  revokeMessage: 'docs/restapi/apis/messageManagement/revokeMessage.md',
  deleteUserAllMessage: 'docs/restapi/apis/messageManagement/deleteUserAllMessage.md',
  sendBusinessNotification: 'docs/restapi/apis/messageManagement/send_business_notification.md',
  initUpload: 'docs/restapi/apis/uploadManagement/initUpload.md',
  confirmUpload: 'docs/restapi/apis/uploadManagement/confirmUpload.md',
  commonConfigs: 'docs/restapi/commonConfigs.md',
  commonFields: 'docs/restapi/commonFields.md',
  contentDescription: 'docs/restapi/contentDescription.md',
  errCode: 'docs/restapi/errCode.md',
  webhookIntro: 'docs/restapi/webhooks/introduction.md',
  webhookExample: 'docs/restapi/webhooks/example.md',
  beforeSendSingleMsg: 'docs/restapi/webhooks/msg/sendSingleMsgBefore.md',
  afterSendSingleMsg: 'docs/restapi/webhooks/msg/sendSingleMsgAfter.md',
  beforeSendGroupMsg: 'docs/restapi/webhooks/msg/sendGroupMsgBefore.md',
  afterSendGroupMsg: 'docs/restapi/webhooks/msg/sendGroupMsgAfter.md',
  msgModify: 'docs/restapi/webhooks/msg/msgModify.md',
  singleMsgRevokeAfter: 'docs/restapi/webhooks/msg/singleMsgRevokeAfter.md',
  groupMsgReadAfter: 'docs/restapi/webhooks/group/groupMsgReadAfter.md',
  createGroupBefore: 'docs/restapi/webhooks/group/createBefore.md',
  createGroupAfter: 'docs/restapi/webhooks/group/createAfter.md',
  joinGroupAfter: 'docs/restapi/webhooks/group/joinGroupAfter.md',
  quitGroupAfter: 'docs/restapi/webhooks/group/quitGroupAfter.md',
  kickGroupMemberAfter: 'docs/restapi/webhooks/group/kickGroupMemberAfter.md',
  transferGroupOwnerAfter: 'docs/restapi/webhooks/group/transferGroupOwnerAfter.md',
  addFriendAfter: 'docs/restapi/webhooks/relationship/addFriendAfter.md',
  addBlack: 'docs/restapi/webhooks/relationship/addBlack.md',
  userRegisterAfter: 'docs/restapi/webhooks/user/userRegisterAfter.md',
  userOnline: 'docs/restapi/webhooks/user/userOnline.md',
  userOffline: 'docs/restapi/webhooks/user/userOffline.md',
  offlinePushBefore: 'docs/restapi/webhooks/push/offlinePushBefore.md',
  onlinePushBefore: 'docs/restapi/webhooks/push/onlinePushBefore.md',
};

const sourceCache = new Map();
const routeRecords = [];
const pages = [];

const sendbirdHtml = await fetchText(sendbirdOverviewUrl);
const sendbirdRoutes = extractSendbirdRoutes(sendbirdHtml);
await rm(resolve(root, contentRoot), { force: true, recursive: true });
await rm(resolve(root, zhContentRoot), { force: true, recursive: true });

let order = 0;
for (const route of sendbirdRoutes) {
  const mapping = mapOpenIM(route);
  const template = inferTemplate(route.path, route.title);
  if (!isOpenIMDocumented(route, mapping, template)) continue;
  const body =
    template === 'overview'
      ? await renderZhOverviewPage(route, mapping, sendbirdRoutes)
      : await renderZhApiPage(route, mapping);

  await addPage({
    route,
    template,
    status: 'published',
    body,
    order: order++,
  });
}

await writeGeneratedData();
console.log(
  `Imported OpenIM Platform API content for ${routeRecords.length.toLocaleString()} routes.`,
);

function isOpenIMDocumented(route, mapping, template) {
  if (mapping.status !== 'direct') return false;
  if (
    [
      `${localRoot}/overview`,
      `${localRoot}/prepare-to-use-api`,
      `${localRoot}/error-codes`,
    ].includes(route.path)
  ) {
    return true;
  }
  return template === 'api';
}

function extractSendbirdRoutes(html) {
  const results = [];
  const seen = new Set();
  const linkPattern =
    /<a\b[^>]*href="([^"]*\/docs\/chat\/platform-api\/v3[^"#?]*)"[^>]*>([\s\S]*?)<\/a>/g;
  for (const match of html.matchAll(linkPattern)) {
    let path = match[1].replace(/^https?:\/\/[^/]+/, '');
    let title = decodeHtml(
      match[2]
        .replace(/<[^>]+>/g, ' ')
        .replace(/\s+/g, ' ')
        .trim(),
    );
    if (!path.startsWith(localRoot)) continue;
    if (path === `${localRoot}/migrating-to-sendbird`) {
      path = `${localRoot}/migrating-to-openim`;
      title = 'Migrating to OpenIM';
    }
    if (path === `${localRoot}/message/migration/migrate-messages`) {
      path = `${localRoot}/migration/migrate-messages`;
    }
    if (seen.has(path)) continue;
    seen.add(path);
    if (path === `${localRoot}/overview`) title = 'OpenIM Platform API';
    results.push({ path, title: title || titleFromSlug(path.split('/').at(-1) ?? '') });
  }
  return results;
}

async function addPage({ route, template, status, body, order }) {
  const relativePath = route.path.replace(/^\/docs\//, '');
  const contentFile = `${contentRoot}/${route.path.slice(localRoot.length + 1)}.mdx`;
  const localizedContentFile = `${zhContentRoot}/${route.path.slice(localRoot.length + 1)}.mdx`;
  const record = {
    id: 0,
    path: route.path,
    relativePath,
    sourcePath: route.path,
    title: translateTitle(route),
    description: describeRouteZh(route),
    product: 'platform-api',
    version: 'v3',
    platform: null,
    contextKey,
    contextTitle,
    template,
    status,
    sourceIndex: order,
    contentFile,
    navOrder: order,
  };
  routeRecords.push(record);
  pages.push({ record, body });

  const mdx = `---\n${renderFrontmatter(record)}\n---\n\n${body.trim()}\n`;
  await mkdir(dirname(resolve(root, contentFile)), { recursive: true });
  await writeFile(resolve(root, contentFile), mdx, 'utf8');

  const localizedMdx = `---\n${renderLocalizedFrontmatter(route, record)}\n---\n\n${body.trim()}\n`;
  await mkdir(dirname(resolve(root, localizedContentFile)), { recursive: true });
  await writeFile(resolve(root, localizedContentFile), localizedMdx, 'utf8');
}

async function renderZhOverviewPage(route, mapping, allRoutes) {
  const sectionChildren = relatedSectionChildren(route, allRoutes).slice(0, 12);
  const childRows = renderZhChildRows(sectionChildren);

  if (route.title === 'OpenIM Platform API') {
    return `OpenIM Platform API 面向可信后端服务，提供认证、用户、关系、群组、会话、消息、第三方服务、迁移和错误码相关的 REST 接口参考。中文文档保留 Platform API 的导航方式，具体能力、接口路径和请求字段以 OpenIM REST 已覆盖的文档为准。

## 最常用

### 认证

在调用管理端 REST API 前，后端服务需要确认 API 地址、请求头和管理员 Token 的使用方式。客户端登录所需的用户 Token 也应由可信后端签发。

- [接入准备](/docs/chat/platform-api/v3/prepare-to-use-api)
- [获取用户 Token](/docs/chat/platform-api/v3/auth/tokens/get-user-token)

### 用户管理

通过 OpenIM 用户管理接口创建、更新、查询用户资料，并把注册、注销、权限等业务规则保留在业务系统中。

- [创建用户](/docs/chat/platform-api/v3/user/creating-users/create-a-user)
- [查询用户列表](/docs/chat/platform-api/v3/user/listing-users/list-users)
- [获取用户信息](/docs/chat/platform-api/v3/user/listing-users/get-a-user)

### 消息

使用 OpenIM 消息接口从后端发送消息，并结合 Webhook 或业务后端处理审核、通知和扩展行为。

- [发送消息](/docs/chat/platform-api/v3/message/sending-messages/send-msg)

### 迁移其他项目到 OpenIM

将历史消息或其他 IM 项目中的消息数据导入 OpenIM 时，后端可以使用 OpenIM 消息接口写入带原始发送时间的消息记录。

- [迁移到 OpenIM](/docs/chat/platform-api/v3/migration-to-openim)

## 推荐功能

### 群组

OpenIM 使用群组能力承载群聊场景。服务端可通过群组接口创建群组、邀请成员和处理入群流程。

- [创建群组](/docs/chat/platform-api/v3/group/managing-groups/create-group)
- [邀请成员](/docs/chat/platform-api/v3/group/group-members/invite-users-to-group)

### 关系与群组治理

OpenIM 将好友关系和黑名单归入关系模块，将群禁言归入群组模块，适合由可信后端按业务规则执行。

- [加入黑名单](/docs/chat/platform-api/v3/relation/blacklist/add-black)
- [移出黑名单](/docs/chat/platform-api/v3/relation/blacklist/remove-black)
- [禁言群成员](/docs/chat/platform-api/v3/group/group-moderation/mute-group-member)
- [取消禁言群成员](/docs/chat/platform-api/v3/group/group-moderation/cancel-mute-group-member)

## 资源

| 字段 | 值 |
| ---- | -- |
| 支持情况 | ${zhAvailabilityLabel(mapping)} |
| 产品区域 | ${zhArea(mapping.area)} |
| 请求模型 | 后端到后端的 HTTP JSON 请求，使用 \`operationID\` 串联日志 |
| 鉴权方式 | 管理端 REST API 使用 APP 管理员 Token |

- [OpenIM REST API 介绍](${sourceUrl(openimSources.apiIntro)})
- [OpenIM 错误码](${sourceUrl(openimSources.errCode)})`;
  }

  if (route.path === `${localRoot}/error-codes`) {
    return renderZhErrorCodesPage(mapping);
  }

  if (route.path === `${localRoot}/prepare-to-use-api`) {
    return `在调用 OpenIM Platform API 前，先确认基础地址、公共请求头、鉴权 Token 和请求体约定。本文按照 Platform API 的接入准备结构组织，参数和认证方式以 OpenIM REST 文档为准。

## 基础地址

OpenIM REST 接口使用部署环境中的 API 地址作为基础地址。文档中的 \`{API_ADDRESS}\` 需要替换为你的 OpenIM API 网关或服务端地址。

\`\`\`bash
{API_ADDRESS}
\`\`\`

例如，接口页中的 \`POST {API_ADDRESS}/user/get_users\` 表示向当前环境的 \`/user/get_users\` 端点发起请求。生产环境建议只允许可信后端访问管理端接口，不要把管理员 Token 暴露给客户端。

## 请求头

OpenIM 管理端 REST API 以 JSON 请求为主。除具体接口另有说明外，请求通常需要携带以下请求头。

| 请求头 | 必填 | 说明 |
| ------ | ---- | ---- |
| Content-Type | 是 | JSON 请求使用 \`application/json; charset=utf-8\`。 |
| operationID | 是 | 全局链路追踪 ID。建议每次请求生成独立值，便于串联服务端日志。 |
| token | 管理端接口必填 | APP 管理员 Token。创建用户等少数初始化接口可能不需要，具体以接口页为准。 |

## 鉴权

后端服务需要先通过 OpenIM 管理端认证能力获取 APP 管理员 Token，再把该 Token 放入后续管理端接口的 \`token\` 请求头。Token 应在服务端保存、刷新和轮换，客户端只应拿到为当前用户签发的登录 Token。

常见接入顺序如下：

1. 在服务端配置 OpenIM API 地址和管理员凭据。
2. 调用 OpenIM 管理端认证接口获取 APP 管理员 Token。
3. 使用管理员 Token 调用用户、群组、消息等管理端接口。
4. 当客户端需要登录 OpenIM 时，由服务端调用用户 Token 接口签发会话 Token。

- [获取用户 Token](/docs/chat/platform-api/v3/auth/tokens/get-user-token)
- [OpenIM 管理员 Token 文档](${sourceUrl(openimSources.adminToken)})

## 请求体

当前保留的 OpenIM Platform API 页面均为 \`POST\` 到固定路径，业务参数放在 JSON 请求体中。不要把分页、用户 ID、群组 ID 或消息字段拼接到 URL query。

如果字段值本身是 URL，例如头像地址、文件地址或对象存储地址，作为 JSON 字段提交时保留原始字符串即可。`;
  }

  return `本节按照 Platform API 参考文档的目录方式组织 **${translateSectionLabel(route)}** 相关能力，并说明这些能力在 OpenIM REST API 中的对应关系、可直接调用的接口，以及需要业务后端补齐的编排逻辑。

## 常用功能

${childRows ? `| 页面 | 支持情况 |\n| ---- | -------- |\n${childRows}` : '当前页面是本节的入口页。'}

## 资源

| 字段 | 值 |
| ---- | -- |
| 支持情况 | ${zhAvailabilityLabel(mapping)} |
| 产品区域 | ${zhArea(mapping.area)} |
| 实现方式 | ${zhSummary(mapping)} |

- [Platform API 概览](/docs/chat/platform-api/v3/overview)
- [接入准备](/docs/chat/platform-api/v3/prepare-to-use-api)
- [错误码](/docs/chat/platform-api/v3/error-codes)`;
}

async function renderZhErrorCodesPage() {
  const source = await loadSource(openimSources.errCode);
  const rows = parseOpenIMErrorCodeRows(source?.body ?? '');
  const serverRows = rows.length > 0 ? rows : fallbackOpenIMErrorCodeRows();

  return `OpenIM REST API 使用统一的错误响应结构。HTTP 请求被网关和服务端正常处理时，仍需要读取响应体中的 \`errCode\` 判断业务是否成功；\`errCode === 0\` 表示成功，非 0 表示业务错误。

## 响应结构

\`\`\`json
{
  "errCode": 1001,
  "errMsg": "ArgsError",
  "errDlt": "request body or header is invalid"
}
\`\`\`

| 字段 | 类型 | 说明 |
| ---- | ---- | ---- |
| errCode | int | OpenIM 业务错误码。成功时为 \`0\`，失败时为非 0。 |
| errMsg | string | 错误简要信息，适合写入服务端日志，不建议直接展示给最终用户。 |
| errDlt | string | 错误详细信息，通常用于排查具体参数、权限或服务端状态。 |
| data | object | 成功响应可能包含接口数据；错误响应通常不依赖该字段。 |

## 错误码范围

| 范围 | 来源 | 说明 |
| ---- | ---- | ---- |
| 0 | 通用成功码 | 表示请求业务处理成功。 |
| 1~9999 | OpenIM 服务端错误码 | REST API 和服务端内部能力返回的主要错误码范围。 |
| 10000~20000 | OpenIM 客户端错误码 | SDK 或客户端运行时使用的错误码范围，不作为 Platform API 服务端错误码表展开。 |
| 20001~29999 | 业务服务端自定义 Webhooks 错误码 | 业务后端在 Webhook 回调或自定义逻辑中返回的扩展错误码范围。 |

## 处理流程

1. 先检查 HTTP 状态码。网络失败、网关拒绝或 5xx 响应应按基础设施问题处理。
2. HTTP 请求完成后解析 JSON 响应，并以 \`errCode\` 作为业务成功与失败的判断依据。
3. 当 \`errCode !== 0\` 时，在日志中记录 \`operationID\`、接口路径、请求体摘要、\`errCode\`、\`errMsg\` 和 \`errDlt\`。
4. 对鉴权、权限、参数错误优先修正请求；对服务器内部错误、数据库错误或连接限制，优先检查 OpenIM 服务状态和部署配置。
5. 返回给最终用户的文案应由业务系统统一转换，不要直接暴露内部错误详情。

## 服务端错误码

| 错误码 | 分类 | 含义 | 处理建议 |
| ------ | ---- | ---- | -------- |
${serverRows
  .map((row) => `| ${row.code} | ${row.category} | ${row.message} | ${row.action} |`)
  .join('\n')}

## 排查建议

| 场景 | 建议 |
| ---- | ---- |
| 无法复现错误 | 使用同一个 \`operationID\` 在业务日志、OpenIM API 日志和网关日志中串联请求链路。 |
| 大量出现 \`1001\` | 对照接口页检查 JSON 字段类型、必填字段、分页参数和请求头。 |
| 大量出现 \`1002\` 或 \`1501~1507\` | 检查管理员 Token 获取、刷新和服务端保存逻辑，确认没有把用户 Token 用在管理端接口上。 |
| 群组或成员相关错误 | 先确认 \`groupID\`、成员身份、群状态和当前操作者角色，再重试管理操作。 |
| 文件上传错误 | 重新初始化上传流程，并确认上传凭证、对象名和过期时间仍然有效。 |`;
}

function parseOpenIMErrorCodeRows(body) {
  const rows = [];
  for (const line of body.split(/\r?\n/)) {
    if (!line.trim().startsWith('|')) continue;
    if (/^\s*\|?\s*:?-{3,}/.test(line)) continue;
    const [rawCode, rawMessage] = parseMarkdownTableLine(line);
    const code = rawCode?.replace(/\D/g, '') ?? '';
    if (!/^\d+$/.test(code)) continue;
    const message = normalizeErrorCodeText(rawMessage);
    rows.push({
      action: openIMErrorAction(Number(code), message),
      category: openIMErrorCategory(Number(code)),
      code,
      message,
    });
  }
  return rows;
}

function parseMarkdownTableLine(line) {
  return line
    .trim()
    .replace(/^\|/, '')
    .replace(/\|$/, '')
    .split('|')
    .map((cell) => cell.trim());
}

function normalizeErrorCodeText(value = '') {
  return value
    .replace(/\*\*/g, '')
    .replace(/\p{Extended_Pictographic}/gu, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function openIMErrorCategory(code) {
  if (code === 0) return '成功';
  if (code === 500) return '服务端';
  if (code >= 1001 && code <= 1004) return '通用请求';
  if (code >= 1100 && code <= 1199) return '用户';
  if (code >= 1200 && code <= 1299) return '群组';
  if (code >= 1300 && code <= 1399) return '好友关系';
  if (code >= 1400 && code <= 1499) return '消息';
  if (code >= 1500 && code <= 1599) return 'Token';
  if (code >= 1600 && code <= 1699) return '连接';
  if (code >= 1700 && code <= 1799) return '文件';
  return '服务端';
}

function openIMErrorAction(code, message) {
  const exact = {
    0: '按成功响应处理，并继续读取接口特定的 `data` 字段。',
    500: '检查 OpenIM 服务、依赖组件和内部网络，保留 `operationID` 交给运维排查。',
    1001: '对照接口页检查请求头、JSON 字段类型、必填字段和枚举值。',
    1002: '确认 `token` 是有效管理员 Token，并检查当前操作是否越权。',
    1003: '检查用户、群组或业务唯一 ID 是否重复提交，必要时改为幂等处理。',
    1004: '确认目标用户、群组、消息或关系记录存在后再重试。',
    1101: '确认 `userID` 已在 OpenIM 注册，并避免使用业务系统中尚未导入的用户。',
    1102: '注册前先查询用户是否存在；重复注册时按幂等成功或业务冲突处理。',
    1201: '确认 `groupID` 存在且群组未被删除或解散。',
    1202: '创建群组时更换 `groupID`，或先查询是否已经创建成功。',
    1203: '先确认用户已加入该群，再执行成员相关操作。',
    1204: '群已解散，停止后续群管理操作并同步业务侧群状态。',
    1205: '检查 `groupType` 是否符合 OpenIM 当前支持范围。',
    1206: '把群申请处理流程做成幂等，避免重复同意或拒绝。',
    1301: '阻止用户把自己作为好友目标提交。',
    1302: '提示存在黑名单关系，或先解除拉黑再继续好友流程。',
    1303: '先建立好友关系，再执行依赖好友关系的操作。',
    1304: '按已建立好友关系处理，不需要重复申请。',
    1401: '检查已读功能配置，关闭时不要继续调用依赖已读能力的流程。',
    1402: '检查成员禁言结束时间，或由管理员解除禁言后再发送。',
    1403: '检查群禁言状态，解除群禁言后再发送。',
    1404: '消息已撤回，业务侧应同步更新消息状态。',
    1405: '重新完成授权或刷新相关凭证后再重试。',
    1501: '刷新 Token 后重试，并检查服务端 Token 续期任务。',
    1502: '重新签发 Token，确认签名密钥、用户 ID 和平台参数一致。',
    1503: '检查 Token 字符串是否被截断、拼接或错误编码。',
    1504: '检查服务端时间和 Token 生效时间，避免时钟偏差。',
    1505: '记录完整错误详情并重新签发 Token；仍失败时检查认证服务配置。',
    1506: '该 Token 已被踢下线，要求客户端重新登录。',
    1507: '确认请求头或登录参数中已携带 Token。',
    1601: '检查网关连接数限制，必要时扩容或清理异常连接。',
    1602: '检查连接握手参数、平台 ID、用户 ID、Token 和客户端版本。',
    1701: '重新初始化上传流程，获取新的上传凭证后再上传。',
  };
  if (exact[code]) return exact[code];
  if (/token/i.test(message)) return '重新签发或刷新 Token，并检查认证服务配置。';
  return '记录 `operationID`、请求参数和错误详情，按所属分类排查。';
}

function fallbackOpenIMErrorCodeRows() {
  return [
    { code: '0', category: '成功', message: '正常', action: openIMErrorAction(0, '') },
    { code: '500', category: '服务端', message: '服务器内部错误', action: openIMErrorAction(500, '') },
    { code: '1001', category: '通用请求', message: '参数错误', action: openIMErrorAction(1001, '') },
    { code: '1002', category: '通用请求', message: '权限不足', action: openIMErrorAction(1002, '') },
  ];
}

async function renderZhApiPage(route, mapping) {
  const sources = await loadSources(mapping.sources);
  const primary = sources[0];
  const method = primary ? firstCodeOrWord(section(primary.body, ['请求方式'])) : undefined;
  const endpoint = primary
    ? firstCodeOrUrl(section(primary.body, ['请求URL', '请求 URL']))
    : undefined;
  const headers = primary ? section(primary.body, ['Header', 'Headers']) : '';
  const request = primary ? section(primary.body, ['请求参数示例', '请求包示例']) : '';
  const success = primary ? section(primary.body, ['成功返回示例']) : '';
  const successFields = primary ? section(primary.body, ['成功返回示例的参数说明']) : '';
  const failure = primary ? section(primary.body, ['失败返回示例']) : '';
  const failureFields = primary ? section(primary.body, ['失败返回示例的参数说明']) : '';
  const title = translateTitle(route);
  const plan = sendbirdApiSectionPlan(route.path);
  const context = {
    endpoint,
    failure,
    failureFields,
    headers,
    mapping,
    method,
    request,
    route,
    success,
    successFields,
    title,
  };

  return [
    zhApiIntro(route, title, mapping),
    ...plan
      .map((sectionName) => renderSendbirdStyleZhSection(sectionName, context))
      .filter(Boolean),
  ].join('\n\n');
}

function sendbirdApiSectionPlan(path) {
  if (path.includes('/listing-users/list-users')) {
    return [
      'http',
      'parameters-with-body',
      'responses',
      'response-properties',
      'pagination',
      'error',
    ];
  }
  if (path.includes('/listing-users/get-a-user')) {
    return ['http', 'parameters-with-body', 'responses', 'response-properties', 'error'];
  }
  if (path.includes('/creating-users/create-a-user')) {
    return ['token-comparison', 'http', 'request-body', 'responses', 'error'];
  }
  if (path.includes('/managing-users/update-a-user')) {
    return ['http', 'parameters', 'request-body', 'responses', 'error'];
  }
  if (path.includes('/managing-session-tokens/issue-a-session-token')) {
    return ['http', 'parameters', 'request-body', 'responses', 'response-properties', 'error'];
  }
  if (path.includes('/managing-session-tokens/revoke-all-session-tokens')) {
    return ['http', 'parameters-with-body', 'responses', 'error'];
  }
  if (path.includes('/creating-a-channel/create-a-group-channel')) {
    return ['http', 'request-body', 'responses', 'response-properties', 'error', 'supergroup'];
  }
  if (
    path.includes('/managing-a-channel/update-a-group-channel') ||
    path.includes('/managing-a-channel/join-a-channel') ||
    path.includes('/managing-a-channel/leave-a-channel') ||
    path.includes('/inviting-a-user/invite-as-members') ||
    path.includes('/inviting-a-user/accept') ||
    path.includes('/inviting-a-user/decline') ||
    path.includes('/muting-a-user/mute-a-member-in-a-group-channel')
  ) {
    return ['http', 'parameters', 'request-body', 'responses', 'error'];
  }
  if (
    path.includes('/managing-a-channel/delete-a-group-channel') ||
    path.includes('/unmute-a-member-in-a-group-channel')
  ) {
    return ['http', 'parameters-with-body', 'responses', 'error'];
  }
  if (path.includes('/listing-users/list-members-of-a-group-channel')) {
    return ['http', 'parameters-with-body', 'responses', 'response-properties'];
  }
  if (path.includes('/messaging-basics/send-a-message')) {
    return ['http', 'parameters', 'request-body-message', 'responses', 'response-properties', 'error'];
  }
  if (isMigrationRoute(path)) {
    return ['http', 'parameters', 'request-body-message', 'responses', 'response-properties'];
  }
  if (path.includes('/listing-blocked-and-blocking-users')) {
    return ['http', 'parameters-with-body', 'responses', 'response-properties', 'error'];
  }
  if (path.includes('/blocking-users/block-users')) {
    return ['block-modes', 'http', 'parameters', 'request-body', 'responses', 'error'];
  }
  if (path.includes('/blocking-users/unblock-a-user')) {
    return ['http', 'parameters-with-body', 'responses'];
  }
  return ['http', 'parameters', 'request-body', 'responses', 'error'];
}

function renderSendbirdStyleZhSection(sectionName, context) {
  switch (sectionName) {
    case 'token-comparison':
      return `---\n\n## 访问 Token 与会话 Token\n\nOpenIM 管理端 REST API 使用管理员 Token 调用，客户端 SDK 登录使用用户 Token。业务后端应负责签发和保管 Token，客户端不应直接持有管理员凭证。`;
    case 'block-modes':
      return `---\n\n## 屏蔽模式\n\nOpenIM 通过黑名单关系阻止被屏蔽用户继续向目标用户发送消息。业务系统可以在此基础上决定是否同步处理会话展示、通知和关系链状态。\n\n#### 一对一群组频道\n\n一对一会话中，屏蔽关系通常由业务后端在用户维度维护，并通过 OpenIM 黑名单接口写入服务端。\n\n#### 一对多群组频道\n\n群组场景下，黑名单不等同于群成员禁言或封禁；如需限制群内发言，请使用群组禁言或群成员禁言接口。`;
    case 'http':
      return renderZhHttpRequestSection(context);
    case 'parameters':
      return renderZhParametersSection(context, { includeRequestBody: false });
    case 'parameters-with-body':
      return renderZhParametersSection(context, { includeRequestBody: true });
    case 'request-body':
      return renderZhRequestBodySection(context, { messageVariants: false });
    case 'request-body-message':
      return renderZhRequestBodySection(context, { messageVariants: true });
    case 'responses':
      return renderZhResponsesSection(context);
    case 'response-properties':
      return renderZhResponsePropertiesSection(context);
    case 'pagination':
      return renderZhPaginationSection(context);
    case 'error':
      return renderZhErrorSection(context);
    case 'supergroup':
      return renderZhSupergroupSection(context);
    default:
      return '';
  }
}

function renderZhHttpRequestSection({ endpoint, headers, mapping, method, request }) {
  const codeTabs = renderZhCodeTabs({ endpoint, headers, mapping, method, request });
  return [
    '---',
    '## HTTP 请求',
    `\`\`\`bash\n${zhEndpointMethod(mapping, method, endpoint)} ${zhEndpointPathForCode(
      mapping,
      endpoint,
    )}\n\`\`\``,
    codeTabs ? `### 请求示例\n\n${codeTabs}` : '',
    headers.includes('token')
      ? '> 安全提示：管理员 Token 只能保存在可信后端服务中，不能下发到客户端或写入前端代码。客户端登录应使用服务端签发的用户 Token。'
      : '',
  ]
    .filter(Boolean)
    .join('\n\n');
}

function zhEndpointPathForCode(mapping, endpoint) {
  if (mapping.status === 'direct') return endpoint ?? '见 OpenIM 原始文档';
  if (mapping.status === 'partial') return endpoint ?? '组合参考接口';
  return '不适用';
}

function renderZhCodeTabs({ endpoint, headers, mapping, method, request }) {
  if (mapping.status !== 'direct' || !endpoint) return '';
  const requestMethod = zhEndpointMethod(mapping, method, endpoint);
  if (!/^(GET|POST|PUT|PATCH|DELETE)$/i.test(requestMethod)) return '';

  const requestBody = firstJsonCodeBlock(request);
  const tabs = [
    { code: renderCurlExample({ endpoint, headers, requestBody, requestMethod }), language: 'bash', title: 'cURL' },
    {
      code: renderNodeExample({ endpoint, headers, requestBody, requestMethod }),
      language: 'javascript',
      title: 'Node.js',
    },
    { code: renderGoExample({ endpoint, headers, requestBody, requestMethod }), language: 'go', title: 'Go' },
  ];

  return `:::code-tabs\n${tabs
    .map(
      (tab) => `\`\`\`${tab.language} title="${tab.title}"\n${tab.code}\n\`\`\``,
    )
    .join('\n\n')}\n:::`;
}

function renderCurlExample({ endpoint, headers, requestBody, requestMethod }) {
  const headerLines = [
    '  --header "Content-Type: application/json; charset=utf-8"',
    headers.includes('operationID') ? '  --header "operationID: 1646445464564"' : '',
    headers.includes('token') ? '  --header "token: ${ADMIN_TOKEN}"' : '',
  ].filter(Boolean);
  const bodyLines = requestBody ? [`  --data-raw '${sanitizeExampleJson(requestBody)}'`] : [];

  return `curl --request ${requestMethod.toUpperCase()} "${endpointForCurl(endpoint)}" \\\n${headerLines.join(
    ' \\\n',
  )}${bodyLines.length > 0 ? ` \\\n${bodyLines.join('\n')}` : ''}`;
}

function renderNodeExample({ endpoint, headers, requestBody, requestMethod }) {
  const headerEntries = [
    "'Content-Type': 'application/json; charset=utf-8'",
    headers.includes('operationID') ? "operationID: '1646445464564'" : '',
    headers.includes('token') ? 'token: ADMIN_TOKEN' : '',
  ].filter(Boolean);
  const bodyLine = requestBody
    ? `,\n  body: JSON.stringify(${indentBlock(sanitizeImportedExamples(requestBody), 2)})`
    : '';

  return `const API_ADDRESS = process.env.OPENIM_API_ADDRESS;\nconst ADMIN_TOKEN = process.env.OPENIM_ADMIN_TOKEN;\n\nconst response = await fetch(\`${endpointForJavaScript(endpoint)}\`, {\n  method: '${requestMethod.toUpperCase()}',\n  headers: {\n    ${headerEntries.join(',\n    ')}\n  }${bodyLine}\n});\n\nconst result = await response.json();\nif (result.errCode !== 0) {\n  throw new Error(result.errMsg || result.errDlt || 'OpenIM request failed');\n}`;
}

function renderGoExample({ endpoint, headers, requestBody, requestMethod }) {
  const bodyExpression = requestBody
    ? `strings.NewReader(\`${sanitizeImportedExamples(requestBody)}\`)`
    : 'nil';
  const headerLines = [
    'req.Header.Set("Content-Type", "application/json; charset=utf-8")',
    headers.includes('operationID') ? 'req.Header.Set("operationID", "1646445464564")' : '',
    headers.includes('token') ? 'req.Header.Set("token", os.Getenv("OPENIM_ADMIN_TOKEN"))' : '',
  ].filter(Boolean);

  return `package main\n\nimport (\n\t\"fmt\"\n\t\"io\"\n\t\"net/http\"\n\t\"os\"\n\t\"strings\"\n)\n\nfunc main() {\n\tpayload := ${bodyExpression}\n\turl := os.Getenv(\"OPENIM_API_ADDRESS\") + \"${endpointPathOnly(endpoint)}\"\n\treq, err := http.NewRequest(http.Method${titleCase(requestMethod.toLowerCase())}, url, payload)\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\t${headerLines.join('\n\t')}\n\n\tresp, err := http.DefaultClient.Do(req)\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tdefer resp.Body.Close()\n\n\tbody, err := io.ReadAll(resp.Body)\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(string(body))\n}`;
}

function endpointForCurl(endpoint) {
  return endpoint.replaceAll('{API_ADDRESS}', '${API_ADDRESS}');
}

function endpointForJavaScript(endpoint) {
  return endpoint.replaceAll('{API_ADDRESS}', '${API_ADDRESS}');
}

function endpointPathOnly(endpoint) {
  return endpoint.replace('{API_ADDRESS}', '');
}

function titleCase(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function indentBlock(value, spaces) {
  const padding = ' '.repeat(spaces);
  return value
    .split('\n')
    .map((line, index) => (index === 0 ? line : `${padding}${line}`))
    .join('\n');
}

function firstJsonCodeBlock(value) {
  if (!value) return '';
  const codeBlock = value.match(/```(?:json)?\s*([\s\S]*?)```/i);
  if (codeBlock) return codeBlock[1].trim();
  const inlineJson = value.match(/(\{[\s\S]*\})/);
  return inlineJson?.[1]?.trim() ?? '';
}

function sanitizeExampleJson(value) {
  return sanitizeImportedExamples(value).replace(/'/g, "'\"'\"'");
}

function renderZhParametersSection({ headers, mapping, request }, { includeRequestBody }) {
  const parts = [
    '---',
    '## 参数',
    '此接口通过请求头传入链路追踪信息和鉴权凭证，通过 JSON 请求体传递业务参数。',
  ];
  if (headers) {
    parts.push('### 请求头');
    parts.push(normalizeImportedMarkdown(headers));
  }
  if (includeRequestBody) {
    parts.push('### 请求体参数');
    parts.push(request ? normalizeImportedMarkdown(request) : zhRequestFallback(mapping));
  }
  return parts.join('\n\n');
}

function renderZhRequestBodySection({ mapping, request }, { messageVariants }) {
  const parts = [
    '---',
    '## 请求体',
    messageVariants
      ? '根据消息类型构造请求体。OpenIM 使用 `contentType` 和 `sessionType` 区分消息内容与会话类型。'
      : '下表列出请求体支持的字段。',
  ];
  if (messageVariants) {
    parts.push('#### 文本消息属性');
  }
  parts.push(request ? normalizeImportedMarkdown(request) : zhRequestFallback(mapping));
  return parts.join('\n\n');
}

function renderZhResponsesSection({ mapping, success }) {
  return `---\n\n## 响应\n\n请求被 OpenIM 正常处理时通常返回 \`200 OK\`。业务是否成功以响应体中的 \`errCode\` 为准；\`errCode === 0\` 表示成功，非 0 表示业务错误。\n\n${success ? normalizeImportedMarkdown(success) : zhResponseFallback(mapping)}`;
}

function renderZhResponsePropertiesSection({ route, successFields }) {
  return [
    '#### 响应属性列表',
    successFields
      ? normalizeImportedMarkdown(successFields)
      : '响应通常包含 `errCode`、`errMsg`、`errDlt`，以及接口特定的 `data` 字段。',
    zhNestedResponseProperties(route.path),
  ]
    .filter(Boolean)
    .join('\n\n');
}

function renderZhErrorSection({ failure, failureFields, route }) {
  const parts = [
    '### 错误',
    '如果请求失败，OpenIM 返回错误对象。更多错误码说明见[错误码](/docs/chat/platform-api/v3/error-codes)。',
    failure
      ? normalizeImportedMarkdown(failure)
      : '```json\n{\n  "errCode": 1004,\n  "errMsg": "RecordNotFoundError",\n  "errDlt": ": [1004]RecordNotFoundError"\n}\n```',
  ];
  if (failureFields) parts.push(normalizeImportedMarkdown(failureFields));
  parts.push(zhCommonErrorTable(route.path));
  return parts.join('\n\n');
}

function renderZhPaginationSection({ route }) {
  if (!route.path.includes('/listing-users/list-users')) return '';
  return `### 分页读取建议

从 \`pagination.pageNumber = 1\` 开始请求，并用 \`pagination.showNumber\` 控制每页数量。响应中的 \`data.total\` 表示总用户数，业务后端可以用 \`Math.ceil(data.total / pagination.showNumber)\` 计算总页数，并在当前页码小于总页数时继续请求下一页。`;
}

function zhNestedResponseProperties(path) {
  if (path.includes('/listing-users/list-users')) {
    return `#### users[] 属性

| 参数名 | 类型 | 说明 |
| ------ | ---- | ---- |
| users[].userID | string | OpenIM 用户 ID。 |
| users[].nickname | string | 用户昵称。 |
| users[].faceURL | string | 用户头像地址。 |
| users[].ex | string | 业务扩展字段，通常由业务系统写入和解析。 |
| users[].createTime | int64 | 用户创建时间，通常为毫秒时间戳。 |
| users[].appMangerLevel | int | OpenIM 返回的应用管理级别字段，字段名以服务端响应为准。 |
| users[].globalRecvMsgOpt | int | 全局消息接收设置。 |`;
  }
  if (path.includes('/listing-users/get-a-user')) {
    return `#### usersInfo[] 属性

| 参数名 | 类型 | 说明 |
| ------ | ---- | ---- |
| usersInfo[].userID | string | OpenIM 用户 ID。 |
| usersInfo[].nickname | string | 用户昵称。 |
| usersInfo[].faceURL | string | 用户头像地址。 |
| usersInfo[].ex | string | 业务扩展字段，通常由业务系统写入和解析。 |
| usersInfo[].createTime | int64 | 用户创建时间，通常为毫秒时间戳。 |
| usersInfo[].appMangerLevel | int | OpenIM 返回的应用管理级别字段，字段名以服务端响应为准。 |
| usersInfo[].globalRecvMsgOpt | int | 全局消息接收设置。 |`;
  }
  if (path.includes('/listing-users/list-members-of-a-group-channel')) {
    return `#### members[] 属性

| 参数名 | 类型 | 说明 |
| ------ | ---- | ---- |
| members[].groupID | string | 群组 ID。 |
| members[].userID | string | 群成员用户 ID。 |
| members[].roleLevel | int | 群成员角色级别，例如普通成员、管理员或群主。 |
| members[].joinTime | int64 | 加入群组时间，通常为毫秒时间戳。 |
| members[].nickname | string | 群成员昵称。 |
| members[].faceURL | string | 群成员头像地址。 |
| members[].appMangerLevel | int | 应用管理级别字段，字段名以服务端响应为准。 |
| members[].joinSource | int | 加群来源。 |
| members[].operatorUserID | string | 执行加群操作的用户 ID。 |
| members[].ex | string | 群成员扩展字段。 |
| members[].muteEndTime | int64 | 禁言结束时间；为 0 时通常表示未禁言。 |
| members[].inviterUserID | string | 邀请人用户 ID。 |`;
  }
  if (path.includes('/creating-a-channel/create-a-group-channel')) {
    return `#### groupInfo 属性

| 参数名 | 类型 | 说明 |
| ------ | ---- | ---- |
| groupInfo.groupID | string | 群组 ID。 |
| groupInfo.groupName | string | 群名称。 |
| groupInfo.notification | string | 群公告。 |
| groupInfo.introduction | string | 群介绍。 |
| groupInfo.faceURL | string | 群头像地址。 |
| groupInfo.ownerUserID | string | 群主用户 ID。 |
| groupInfo.createTime | int64 | 群创建时间，通常为毫秒时间戳。 |
| groupInfo.memberCount | int | 当前群成员数量。 |
| groupInfo.ex | string | 群扩展字段。 |
| groupInfo.status | int | 群状态。 |
| groupInfo.creatorUserID | string | 创建人用户 ID。 |
| groupInfo.groupType | int | 群类型。 |
| groupInfo.needVerification | int | 进群是否需要验证。 |
| groupInfo.lookMemberInfo | int | 是否允许查看群成员信息。 |
| groupInfo.applyMemberFriend | int | 是否允许群成员互相添加好友。 |
| groupInfo.notificationUpdateTime | int64 | 群公告更新时间。 |
| groupInfo.notificationUserID | string | 最近更新群公告的用户 ID。 |`;
  }
  if (
    path.includes('/messaging-basics/send-a-message') ||
    isMigrationRoute(path)
  ) {
    return `#### data 属性

| 参数名 | 类型 | 说明 |
| ------ | ---- | ---- |
| data.serverMsgID | string | OpenIM 服务端生成的消息 ID。 |
| data.clientMsgID | string | OpenIM 为该消息返回的客户端消息 ID。 |
| data.sendTime | int64 | 服务端记录的消息发送时间，通常为毫秒时间戳。 |`;
  }
  return '';
}

function zhCommonErrorTable(path) {
  const rows = [
    ['鉴权失败', '`token` 缺失、过期，或不是可调用管理端接口的管理员 Token。', '重新获取 APP 管理员 Token，并只在可信后端保存。'],
    ['链路追踪困难', '`operationID` 缺失或在大量请求中重复使用。', '为每次请求生成独立 `operationID`，并在服务端日志中保留。'],
    ['参数校验失败', '请求体字段类型、必填字段或枚举值不符合接口要求。', '对照请求体参数表检查字段类型和必填项。'],
  ];
  if (path.includes('/listing-users/list-users')) {
    rows.push([
      '分页参数错误',
      '`pagination.pageNumber` 小于 1，或 `pagination.showNumber` 超出服务端允许范围。',
      '从第 1 页开始读取，并把每页数量限制在服务端允许范围内。',
    ]);
  }
  return `**常见错误场景**

| 错误场景 | 可能原因 | 处理方式 |
| -------- | -------- | -------- |
${rows.map((row) => `| ${row.join(' | ')} |`).join('\n')}`;
}

function renderZhSupergroupSection(context) {
  return `---\n\n## 超级群组频道\n\nOpenIM 当前保留的 Platform API 页面只映射已有 REST 文档覆盖的群组能力。若业务需要超级群或大群能力，请以 OpenIM 部署配置和群组能力边界为准，不要复用未覆盖的第三方专有接口。\n\n### 请求体\n\n${context.request ? normalizeImportedMarkdown(context.request) : zhRequestFallback(context.mapping)}\n\n### 响应\n\n${context.success ? normalizeImportedMarkdown(context.success) : zhResponseFallback(context.mapping)}\n\n### 错误\n\n${context.failure ? normalizeImportedMarkdown(context.failure) : '错误响应遵循 OpenIM 通用错误结构。'}`;
}

function mapOpenIM(route) {
  const path = route.path;
  const sources = [];
  let status = 'partial';
  let area = 'OpenIM Server REST API';
  let summary =
    'Use the closest OpenIM REST API and keep product-specific behavior in your backend.';
  const notes = [];

  const direct = (items, nextSummary, nextArea = area) => {
    sources.push(...items);
    status = 'direct';
    summary = nextSummary;
    area = nextArea;
  };
  const partial = (items, nextSummary, nextArea = area) => {
    sources.push(...items);
    summary = nextSummary;
    area = nextArea;
  };
  const none = (items, nextSummary, nextArea = area) => {
    sources.push(...items);
    status = 'none';
    summary = nextSummary;
    area = nextArea;
  };

  if (path.endsWith('/overview'))
    direct(
      [openimSources.apiIntro],
      'Use OpenIM REST API conventions as the Platform API foundation.',
    );
  else if (path.endsWith('/prepare-to-use-api'))
    direct(
      [openimSources.apiIntro, openimSources.adminToken],
      'Obtain an APP administrator token and use `operationID` plus `token` headers.',
      'Authentication',
    );
  else if (path.endsWith('/error-codes'))
    direct(
      [openimSources.errCode],
      'Use OpenIM global `errCode`, `errMsg`, and `errDlt` responses.',
      'Reference',
    );
  else if (path.endsWith('/migrating-to-openim'))
    partial(
      [openimSources.apiIntro, openimSources.commonFields, openimSources.contentDescription],
      'Map legacy Platform API concepts to OpenIM users, friends, groups, conversations, messages, uploads, and webhooks.',
      'Migration',
    );
  else if (path.endsWith('/deprecated'))
    none(
      [openimSources.apiIntro],
      'Use current OpenIM REST API guidance; no separate deprecation endpoint is required.',
      'Migration',
    );
  else if (path.includes('/creating-users/create-a-user'))
    direct(
      [openimSources.userRegister],
      'Import users into OpenIM after your business system handles registration.',
      'Users',
    );
  else if (path.includes('/listing-users/list-users'))
    direct(
      [openimSources.getUserList, openimSources.getUserIDList],
      'List registered OpenIM users with pagination.',
      'Users',
    );
  else if (path.includes('/listing-users/get-a-user'))
    direct(
      [openimSources.getSpecifiedUser],
      'Fetch specified OpenIM user profiles by user ID.',
      'Users',
    );
  else if (path.includes('/managing-users/update-a-user'))
    direct([openimSources.updateUserInfo], 'Update OpenIM user profile fields.', 'Users');
  else if (path.includes('/managing-users/delete-a-user'))
    none(
      [openimSources.updateUserInfo],
      'OpenIM docs do not expose a direct delete-user REST endpoint; disable or delete in the business user system.',
      'Users',
    );
  else if (path.includes('/managing-session-tokens/issue-a-session-token'))
    direct(
      [openimSources.userToken],
      'Issue an OpenIM user token for SDK login.',
      'Authentication',
    );
  else if (path.includes('/managing-session-tokens/revoke-all-session-tokens'))
    direct(
      [openimSources.forceLogout],
      'Force logout a user session with OpenIM auth management.',
      'Authentication',
    );
  else if (path.includes('/managing-device-tokens'))
    partial(
      [
        openimSources.addNotificationAccount,
        openimSources.updateNotificationAccount,
        openimSources.searchNotificationAccount,
      ],
      'Use notification-account APIs and push configuration in your deployment.',
      'Users and push',
    );
  else if (
    path.includes('/configuring-notification-preferences') ||
    path.includes('/push-notifications')
  )
    partial(
      [
        openimSources.addNotificationAccount,
        openimSources.updateNotificationAccount,
        openimSources.updateGlobalRemind,
        openimSources.commonConfigs,
      ],
      'Map notification preferences to OpenIM notification accounts, global reminders, and push service configuration.',
      'Push',
    );
  else if (path.includes('/managing-metadata'))
    partial(
      [
        openimSources.updateUserInfo,
        openimSources.setGroupInfo,
        openimSources.setGroupMemberInfo,
        openimSources.setConversations,
      ],
      'Store metadata in OpenIM extension fields or your backend data model.',
      'Metadata',
    );
  else if (path.includes('/assigning-a-user-role'))
    partial(
      [openimSources.setGroupMemberInfo, openimSources.transferGroup],
      'Map operators and roles to OpenIM group member role fields where supported.',
      'Groups',
    );
  else if (path.includes('/managing-unread-count') || path.includes('/marking-messages-as-read'))
    partial(
      [
        openimSources.getSortedConversationList,
        openimSources.setConversations,
        openimSources.groupMsgReadAfter,
      ],
      'Use OpenIM conversations, SDK unread state, and read callbacks; not every unread-count workflow is exposed through server REST.',
      'Conversations',
    );
  else if (
    path.includes('/getting-group-channel-count') ||
    path.includes('/managing-joined-group-channels')
  )
    partial(
      [openimSources.getJoinedGroupList, openimSources.quitGroup],
      'Use group membership APIs to list or leave joined OpenIM groups.',
      'Groups',
    );
  else if (path.includes('/creating-a-channel/create-a-group-channel'))
    direct([openimSources.createGroup], 'Create an OpenIM group.', 'Groups');
  else if (path.includes('/creating-a-channel/create-an-open-channel'))
    partial(
      [openimSources.createGroup],
      'Use OpenIM groups for managed chat spaces, or model unrestricted rooms in your backend depending on product needs.',
      'Groups',
    );
  else if (path.includes('/listing-channels-in-an-application'))
    partial(
      [openimSources.getGroupsInfo, openimSources.getJoinedGroupList],
      'List or fetch OpenIM groups; open-channel concepts require product-specific modeling.',
      'Groups',
    );
  else if (path.includes('/managing-a-channel/update-a-group-channel'))
    direct([openimSources.setGroupInfo], 'Update OpenIM group information.', 'Groups');
  else if (path.includes('/managing-a-channel/delete-a-group-channel'))
    direct([openimSources.dismissGroup], 'Dismiss an OpenIM group.', 'Groups');
  else if (path.includes('/managing-a-channel/join-a-channel'))
    direct([openimSources.joinGroup], 'Join an OpenIM group.', 'Groups');
  else if (path.includes('/managing-a-channel/leave-a-channel'))
    direct([openimSources.quitGroup], 'Quit an OpenIM group.', 'Groups');
  else if (path.includes('/listing-users/list-members-of-a-group-channel'))
    direct(
      [openimSources.getGroupMemberList, openimSources.getGroupMembersInfo],
      'List OpenIM group members.',
      'Groups',
    );
  else if (path.includes('/listing-users/check-if-user-is-a-member'))
    partial(
      [openimSources.getGroupMembersInfo],
      'Check membership by fetching group member information.',
      'Groups',
    );
  else if (path.includes('/inviting-a-user/invite-as-members'))
    direct([openimSources.inviteUserToGroup], 'Invite users to an OpenIM group.', 'Groups');
  else if (path.includes('/inviting-a-user/accept') || path.includes('/inviting-a-user/decline'))
    direct(
      [openimSources.groupApplicationResponse],
      'Process OpenIM group applications.',
      'Groups',
    );
  else if (path.includes('/managing-typing-indicators'))
    none(
      [openimSources.webhookIntro],
      'OpenIM typing indicators are client/SDK workflow, not a documented Server REST endpoint.',
      'SDK event flow',
    );
  else if (path.includes('/messaging-basics/send-a-message'))
    direct(
      [openimSources.sendMessage, openimSources.contentDescription],
      'Send a message as a user or system account.',
      'Messages',
    );
  else if (path.includes('/messaging-basics/delete-a-message'))
    partial(
      [openimSources.deleteUserAllMessage, openimSources.revokeMessage],
      'Use OpenIM message revocation or user-message deletion according to the product retention model.',
      'Messages',
    );
  else if (
    path.includes('/messaging-basics/update-a-message') ||
    path.includes('/message-add-metadata') ||
    path.includes('/message-update-metadata') ||
    path.includes('/message-remove-metadata')
  )
    partial(
      [openimSources.msgModify, openimSources.contentDescription],
      'Use custom message content or backend records for editable metadata; webhook payloads can observe modifications.',
      'Messages',
    );
  else if (
    path.includes('/messaging-basics/list-messages') ||
    path.includes('/messaging-basics/get-a-message') ||
    path.includes('/get-total-number-of-messages')
  )
    partial(
      [openimSources.getSortedConversationList, openimSources.contentDescription],
      'Use SDK conversation history for message reads; current OpenIM REST docs focus on send/revoke/delete operations.',
      'Messages',
    );
  else if (isMigrationRoute(path))
    direct(
      [openimSources.sendMessage, openimSources.contentDescription],
      'Use `send_msg` with `sendTime` for historical import workflows.',
      'Migration',
    );
  else if (path.includes('/announcements'))
    partial(
      [openimSources.sendBusinessNotification, openimSources.sendMessage],
      'Map announcements to business notifications or backend fan-out over OpenIM messages.',
      'Messages',
    );
  else if (path.includes('/delivery-receipts') || path.includes('/read-receipts'))
    partial(
      [openimSources.groupMsgReadAfter, openimSources.getSortedConversationList],
      'Use SDK receipt state and OpenIM read callbacks; server REST exposes related primitives rather than a single receipt workflow.',
      'Messages and webhooks',
    );
  else if (path.includes('/message-search'))
    none(
      [openimSources.contentDescription],
      'Message search is not exposed in the current OpenIM REST docs; index messages in your backend if product search is required.',
      'Messages',
    );
  else if (
    path.includes('/message-threading') ||
    path.includes('/pinned-messages') ||
    path.includes('/polls') ||
    path.includes('/reactions-and-emojis') ||
    path.includes('/scheduled-messages') ||
    path.includes('/translations')
  )
    none(
      [openimSources.contentDescription],
      'This message feature is not exposed as a standalone Platform API endpoint in the current OpenIM REST docs.',
      'Messages',
    );
  else if (path.includes('/moderation/muting-a-user/mute-a-member-in-a-group-channel'))
    direct([openimSources.muteGroupMember], 'Mute an OpenIM group member.', 'Moderation');
  else if (path.includes('/moderation/muting-a-user/unmute-a-member-in-a-group-channel'))
    direct(
      [openimSources.cancelMuteGroupMember],
      'Cancel mute for an OpenIM group member.',
      'Moderation',
    );
  else if (path.includes('/moderation/muting-a-user'))
    partial(
      [
        openimSources.muteGroupMember,
        openimSources.cancelMuteGroupMember,
        openimSources.muteGroup,
        openimSources.cancelMuteGroup,
      ],
      'OpenIM documents group and group-member mute APIs, but not open-channel or custom-channel-type moderation endpoints.',
      'Moderation',
    );
  else if (path.includes('/moderation/blocking-users/block-users'))
    direct([openimSources.addBlackList], 'Add a user to an OpenIM blacklist.', 'Moderation');
  else if (path.includes('/moderation/blocking-users/unblock-a-user'))
    direct(
      [openimSources.deleteBlackList],
      'Remove a user from an OpenIM blacklist.',
      'Moderation',
    );
  else if (
    path.includes('/moderation/listing-blocked-and-blocking-users/list-blocked-and-blocking-users')
  )
    direct([openimSources.getBlackList], 'List users in an OpenIM blacklist.', 'Moderation');
  else if (path.includes('/moderation/blocking-users'))
    partial(
      [openimSources.addBlackList, openimSources.deleteBlackList, openimSources.getBlackList],
      'Map user blocking to OpenIM blacklist APIs.',
      'Friends and moderation',
    );
  else if (
    path.includes('/moderation/banning-a-user') ||
    path.includes('/listing-banned-users') ||
    path.includes('/freezing-a-channel')
  )
    partial(
      [openimSources.kickGroup, openimSources.muteGroup, openimSources.setGroupMemberInfo],
      'Use OpenIM group member management and mute controls; keep ban and freeze policy in backend moderation records.',
      'Moderation',
    );
  else if (path.includes('/moderation/listing-muted-users'))
    partial(
      [openimSources.getGroupMemberList, openimSources.getGroupMembersInfo],
      'Read group member state and backend moderation records to list muted users.',
      'Moderation',
    );
  else if (path.includes('/moderation/moderating-messages'))
    partial(
      [
        openimSources.beforeSendSingleMsg,
        openimSources.beforeSendGroupMsg,
        openimSources.webhookIntro,
      ],
      'Use before-send webhooks for message moderation and business-side filtering.',
      'Webhooks',
    );
  else if (path.includes('/bot'))
    partial(
      [openimSources.userRegister, openimSources.sendMessage, openimSources.webhookExample],
      'Represent bots as OpenIM users plus backend webhook or message automation.',
      'Bots',
    );
  else if (path.includes('/data-export'))
    none(
      [openimSources.commonConfigs],
      'Data export scheduling is not exposed as a Platform API endpoint in the current OpenIM REST docs.',
      'Operations',
    );
  else if (path.includes('/privacy'))
    none(
      [openimSources.commonConfigs],
      'Handle GDPR and privacy workflows in the business backend and storage layer; no standalone OpenIM REST endpoint is documented.',
      'Operations',
    );
  else if (path.includes('/report'))
    partial(
      [openimSources.webhookIntro, openimSources.beforeSendSingleMsg],
      'Build report intake and moderation in the backend, using OpenIM message/user/group context.',
      'Moderation',
    );
  else if (path.includes('/statistics'))
    none(
      [openimSources.commonConfigs],
      'Statistics endpoints are not exposed in the current OpenIM REST docs; build analytics from backend events and storage.',
      'Operations',
    );
  else if (path.includes('/organization') || path.includes('/application'))
    partial(
      [openimSources.commonConfigs, openimSources.adminToken, openimSources.webhookIntro],
      'Map application and organization settings to OpenIM deployment configuration and backend admin tooling.',
      'Operations',
    );
  else {
    partial(
      [openimSources.apiIntro],
      'Use OpenIM REST API conventions and choose the closest source endpoint for the workflow.',
    );
  }

  if (path.includes('/overview'))
    notes.push('This is a section overview; keep task-specific endpoint details on child pages.');
  if (status === 'none')
    notes.push(
      'Do not invent a synthetic endpoint. State the support status and backend responsibility clearly.',
    );
  if (status === 'partial')
    notes.push(
      'Use the documented OpenIM primitives and keep product-specific orchestration in the backend.',
    );
  if (status === 'direct')
    notes.push(
      'The primary OpenIM source page documents the endpoint signature and payload fields.',
    );

  return {
    area,
    exampleFallback:
      status === 'direct'
        ? '```bash\n# Use the concrete OpenIM endpoint listed in the Official OpenIM references section.\n```'
        : status === 'partial'
          ? '```bash\n# Compose the referenced OpenIM primitives inside your backend workflow.\n```'
          : '```bash\n# No standalone OpenIM REST endpoint is documented for this capability.\n```',
    label:
      status === 'direct'
        ? 'Available as an OpenIM REST endpoint'
        : status === 'none'
          ? 'Not exposed as a Platform API endpoint'
          : 'Available through OpenIM primitives',
    notes,
    requestFallback:
      'Use the request bodies documented by the referenced OpenIM endpoints. Store product-specific fields in your backend schema or supported OpenIM extension fields.',
    responseFallback:
      'OpenIM responses use `errCode`, `errMsg`, `errDlt`, and endpoint-specific `data` when present.',
    sideEffects:
      status === 'direct'
        ? 'Follow the idempotency and side-effect behavior of the referenced OpenIM endpoint. Retry reads freely; retry writes only after checking resource state.'
        : 'Define idempotency in your backend workflow and avoid retrying writes blindly when several OpenIM operations or external stores are involved.',
    sources: unique(sources.length > 0 ? sources : [openimSources.apiIntro]),
    status,
    summary,
  };
}

function relatedSectionChildren(route, allRoutes) {
  const sectionRoot = route.path.split('/').slice(0, 6).join('/');
  return allRoutes
    .filter((item) => item.path.startsWith(`${sectionRoot}/`))
    .filter((item) => item.path !== route.path)
    .filter((item) =>
      isOpenIMDocumented(item, mapOpenIM(item), inferTemplate(item.path, item.title)),
    );
}

function translateSectionLabel(route) {
  const segment = route.path.split('/')[5];
  if (!segment) return translateTitle(route);
  return platformApiZhNavigationLabels[segment] ?? translateTitle(route);
}

function renderZhChildRows(children) {
  return children
    .map(
      (child) =>
        `| [${translateTitle(child)}](${child.path}) | ${zhAvailabilityLabel(mapOpenIM(child))} |`,
    )
    .join('\n');
}

function zhApiIntro(route, title, mapping) {
  if (mapping.status === 'direct') {
    const routeSpecificIntro = zhDirectApiIntro(route.path, title);
    if (routeSpecificIntro) return routeSpecificIntro;
    return `使用 **${title}** 从可信后端调用 OpenIM REST 接口。请先在[接入准备](/docs/chat/platform-api/v3/prepare-to-use-api)中配置 API 地址和管理员 Token；接口参数通过请求头和 JSON 请求体传递。`;
  }
  if (mapping.status === 'partial') {
    return `使用 **${title}** 规划一个由业务后端编排的能力。OpenIM 提供相关 REST 基础能力，但完整产品流程、策略和持久化需要由业务系统负责。`;
  }
  return `使用 **${title}** 明确该能力在 OpenIM 中的实现边界。当前 OpenIM REST 文档没有提供独立 Platform API 接口，需要由业务后端或客户端 SDK 流程承接。`;
}

function zhDirectApiIntro(path, title) {
  if (path.includes('/listing-users/list-users')) {
    return `使用 **${title}** 从可信后端分页读取 OpenIM 已注册用户。请求体中的 \`pagination.pageNumber\` 表示页码，从 1 开始；\`pagination.showNumber\` 表示每页数量；响应中的 \`data.total\` 是用户总数，\`data.users\` 是当前页用户列表。`;
  }
  return '';
}

function zhEndpointMethod(mapping, method, endpoint) {
  if (mapping.status === 'direct') return method ? method.toUpperCase() : '见原始文档';
  if (mapping.status === 'partial') {
    return endpoint && method ? `可参考原始接口：${method.toUpperCase()}` : '组合参考接口';
  }
  return '未提供独立接口';
}

function zhAvailabilityLabel(mapping) {
  if (mapping.status === 'direct') return 'OpenIM REST 已提供直接接口';
  if (mapping.status === 'partial') return '可通过 OpenIM 基础能力组合实现';
  return '当前 OpenIM REST 未提供独立接口';
}

function zhArea(area) {
  const areas = {
    Authentication: '认证',
    Bots: '机器人',
    Groups: '群组',
    Metadata: '元数据',
    Messages: '消息',
    'Messages and webhooks': '消息与 Webhook',
    Migration: '迁移其他项目到 OpenIM',
    Moderation: '内容审核',
    Operations: '运维',
    Push: '推送',
    Reference: '参考',
    Users: '用户',
    'Users and push': '用户与推送',
    Webhooks: 'Webhook',
    'OpenIM Server REST API': 'OpenIM 服务端 REST API',
    'SDK event flow': 'SDK 事件流程',
  };
  return areas[area] ?? area;
}

function zhSummary(mapping) {
  if (mapping.status === 'direct') {
    return '后端可以直接调用对应 OpenIM REST 接口，并以原始文档中的请求和响应字段作为契约。';
  }
  if (mapping.status === 'partial') {
    return '使用 OpenIM 已有用户、群组、消息、会话或 Webhook 基础能力，在业务后端补齐策略、编排和持久化。';
  }
  return '不要虚构 OpenIM 接口。仅在产品确实需要时，在业务后端、客户端 SDK 流程或部署工具中实现。';
}

function zhRequestFallback(mapping) {
  if (mapping.status === 'direct') {
    return '请以参考资源中 OpenIM 原始接口的请求体字段为准。';
  }
  if (mapping.status === 'partial') {
    return '组合型能力没有单一请求体。业务后端应分别构造每个 OpenIM 原始接口的请求体，并在自有数据模型中保存 OpenIM 未提供的产品字段。';
  }
  return '当前 OpenIM REST 文档没有该能力的请求体定义。';
}

function zhResponseFallback(mapping) {
  if (mapping.status === 'none') {
    return '当前 OpenIM REST 文档没有该能力的响应结构。业务后端应定义自己的响应契约。';
  }
  return 'OpenIM 响应使用 `errCode`、`errMsg`、`errDlt`，并在成功时返回接口特定的 `data`。';
}

async function loadSources(paths) {
  const result = [];
  for (const path of unique(paths)) {
    const parsed = await loadSource(path);
    if (parsed) result.push(parsed);
  }
  return result;
}

async function loadSource(path) {
  if (!path) return undefined;
  if (sourceCache.has(path)) return sourceCache.get(path);
  const raw = await fetchText(`${openimRawBase}/${path}`);
  const parsed = parseMarkdown(raw, path);
  sourceCache.set(path, parsed);
  return parsed;
}

function inferTemplate(path, title) {
  const last = path.split('/').at(-1);
  if (
    title === 'OpenIM Platform API' ||
    title === 'Overview' ||
    last === 'overview' ||
    last?.endsWith('-overview') ||
    ['prepare-to-use-api', 'migrating-to-openim', 'deprecated', 'error-codes'].includes(last ?? '')
  ) {
    return 'overview';
  }
  return 'api';
}

function isMigrationRoute(path) {
  return path.includes('/message/migration') || path.includes('/migration/migrate-messages');
}

function describeRouteZh(route) {
  const title = translateTitle(route);
  if (route.title === 'OpenIM Platform API') {
    return 'OpenIM Platform API 中文概览，覆盖服务端 REST API、Webhook 和后端运营能力。';
  }
  if (route.path === `${localRoot}/error-codes`) {
    return 'OpenIM Platform API 错误码参考，说明响应结构、错误码范围、处理流程和服务端错误码。';
  }
  return `OpenIM Platform API 中文参考：${title}。说明 OpenIM REST 支持情况、接口结构和后端实现边界。`;
}

function translateTitle(route) {
  const pathOverrides = {
    [`${localRoot}/overview`]: 'OpenIM Platform API',
    [`${localRoot}/migrating-to-openim`]: '迁移到 OpenIM',
    [`${localRoot}/prepare-to-use-api`]: '接入准备',
    [`${localRoot}/deprecated`]: '废弃接口',
    [`${localRoot}/error-codes`]: '错误码',
  };
  if (pathOverrides[route.path]) return pathOverrides[route.path];
  return translateTitleText(route.title);
}

function translateTitleText(title) {
  const exact = {
    Overview: '概览',
    'OpenIM Platform API': 'OpenIM Platform API',
    'Issue a session token': '签发会话 Token',
    'Revoke all session tokens': '注销全部会话 Token',
    'Send a message': '发送消息',
    'Migrate messages': '迁移消息',
    'Update a group channel': '更新群组频道',
    'Delete a group channel': '删除群组频道',
    'Join a channel': '加入群组频道',
    'Leave a channel': '退出群组频道',
    'List members of a group channel': '查询群组频道成员',
    'Invite as members': '邀请成员',
    'Mute a member in a group channel': '禁言群组频道成员',
    'Unmute a member in a group channel': '解除群组频道成员禁言',
    'Mute a participant in an open channel': '禁言开放频道参与者',
    'Mute a user in channels by custom channel types': '按自定义频道类型禁言用户',
    'Mute users in channels by a custom channel type': '按自定义频道类型批量禁言用户',
    'Unmute a participant in an open channel': '解除开放频道参与者禁言',
    'Unmute users in channels by a custom channel type': '按自定义频道类型批量解除用户禁言',
    'Mark all messages as read': '标记全部消息为已读',
    'Mark all messages as delivered': '标记全部消息为已送达',
    'Use default emojis': '使用默认表情',
    'Rate limits': '速率限制',
    'Configure auto event message settings': '配置自动事件消息设置',
    'Add an IP to a whitelist': '添加 IP 到白名单',
    'Delete IPs from a whitelist': '从白名单删除 IP',
    'Accept an invitation': '接受邀请',
    'Decline an invitation': '拒绝邀请',
    'Check if user is a member': '检查用户是否为成员',
    'Start typing indicators': '开始输入状态',
    'Stop typing indicators': '停止输入状态',
    'List channel settings for all custom channel types': '查询全部自定义频道类型的频道设置',
    'List data exports by message, channel, or user': '按消息、频道或用户查询数据导出列表',
    'Register and schedule a data export': '注册并调度数据导出',
    'Get announcement statistics': '获取公告统计',
    'Get detailed open rate of an announcement group': '获取公告组详细打开率',
    'Get detailed open rate of an announcement': '获取公告详细打开率',
    'Get detailed open status of an announcement': '获取公告详细打开状态',
    'Reply to a message': '回复消息',
    'List pinned messages for all open channels': '查询全部开放频道的置顶消息列表',
    'List pinned messages for an open channel': '查询开放频道的置顶消息列表',
    'Pin a sending message': '置顶发送中的消息',
    'Pin an existing message': '置顶已有消息',
    'Unpin a message': '取消置顶消息',
    'Cast or cancel a vote': '投票或取消投票',
    'List voters of a poll option': '查询投票选项的投票用户列表',
    'Get number of unread messages per member': '获取每个成员的未读消息数',
    'Send a scheduled message immediately': '立即发送定时消息',
    'View number of scheduled messages': '查看定时消息数量',
    'Translate a message into other languages': '将消息翻译为其他语言',
    'Ban a member from a group channel': '封禁群组频道成员',
    'Ban a participant from an open channel': '封禁开放频道参与者',
    'Ban a user from channels by custom channel types': '按自定义频道类型封禁用户',
    'Ban users from channels by a custom channel type': '按自定义频道类型批量封禁用户',
    'Unban a member from a group channel': '解除群组频道成员封禁',
    'Unban a participant from an open channel': '解除开放频道参与者封禁',
    'Unban users from channels by a custom channel type': '按自定义频道类型批量解除用户封禁',
    'Update status of a banned member of a group channel': '更新群组频道封禁成员状态',
    'Update status of a banned participant of an open channel': '更新开放频道封禁参与者状态',
    'Block users': '屏蔽用户',
    'Unblock a user': '取消屏蔽用户',
    'Get a banned member of a group channel': '获取群组频道封禁成员',
    'Get a banned participant of an open channel': '获取开放频道封禁参与者',
    'List banned members in a group channel': '查询群组频道封禁成员列表',
    'List banned participants in an open channel': '查询开放频道封禁参与者列表',
    'List banned users in channels by a custom channel type': '按自定义频道类型查询封禁用户列表',
    'List channels where a user is banned': '查询用户被封禁的频道列表',
    'List blocked and blocking users': '查询屏蔽与被屏蔽用户列表',
    'Get a muted member in a group channel': '获取群组频道禁言成员',
    'Get a muted participant in an open channel': '获取开放频道禁言参与者',
    'List channels where a user is muted': '查询用户被禁言的频道列表',
    'List muted members in a group channel': '查询群组频道禁言成员列表',
    'List muted participants in an open channel': '查询开放频道禁言参与者列表',
    'List muted users in channels by a custom channel type': '按自定义频道类型查询禁言用户列表',
    'Domain filter': '域名过滤',
    'Image moderation': '图片审核',
    'Profanity filter': '敏感词过滤',
    'Profanity-triggered moderation': '敏感词触发审核',
    'Deactivate a member': '停用成员',
    'Cancel the registration of a GDPR request': '取消 GDPR 请求注册',
    'FCM migration guide': 'FCM 迁移指南',
    'Check push notifications': '检查推送通知',
    'Turn on push notifications': '开启推送通知',
    'Get number of concurrent connections': '获取并发连接数',
    'Get number of daily active users': '获取日活跃用户数',
    'Get number of monthly active users': '获取月活跃用户数',
    'Get number of peak connections': '获取峰值连接数',
    'Register a user as an operator to channels by custom channel types':
      '按自定义频道类型将用户注册为操作员',
    'Register operators to a group channel': '为群组频道注册操作员',
    'Register operators to an open channel': '为开放频道注册操作员',
    'Register users as operators to a channel by a custom channel type':
      '按自定义频道类型为频道注册操作员',
    'Unregister operators from a channel by a custom channel type':
      '按自定义频道类型移除频道操作员',
    'Unregister operators from a group channel': '移除群组频道操作员',
    'Unregister operators from an open channel': '移除开放频道操作员',
    'Choose a push notification content template': '选择推送通知内容模板',
    'Get push notification preferences for a channel': '获取频道推送通知偏好',
    'Update push notification preferences for a channel': '更新频道推送通知偏好',
    'Remove a registration or device token from an owner': '从所有者移除注册或设备 Token',
    'Get number of channels with unread messages': '获取有未读消息的频道数量',
    'Get number of unread items': '获取未读项目数',
    'Get number of unread messages': '获取未读消息数',
    "Mark all of a user's messages as read": '将用户的全部消息标记为已读',
    Alert: '告警',
    'Choose events to subscribe': '选择订阅事件',
    'Get a list of subscribed events': '获取订阅事件列表',
  };
  if (exact[title]) return exact[title];

  const actionPatterns = [
    [/^List (.+)$/i, (target) => `查询${translateNounPhrase(target)}列表`],
    [/^Get (.+)$/i, (target) => `获取${translateNounPhrase(target)}`],
    [/^Create (.+)$/i, (target) => `创建${translateNounPhrase(target)}`],
    [/^Update (.+)$/i, (target) => `更新${translateNounPhrase(target)}`],
    [/^Delete (.+)$/i, (target) => `删除${translateNounPhrase(target)}`],
    [/^Add (.+)$/i, (target) => `添加${translateNounPhrase(target)}`],
    [/^Remove (.+)$/i, (target) => `移除${translateNounPhrase(target)}`],
    [/^Register (.+)$/i, (target) => `注册${translateNounPhrase(target)}`],
    [/^Unregister (.+)$/i, (target) => `取消注册${translateNounPhrase(target)}`],
    [/^Invite (.+)$/i, (target) => `邀请${translateNounPhrase(target)}`],
    [/^Accept (.+)$/i, (target) => `接受${translateNounPhrase(target)}`],
    [/^Decline (.+)$/i, (target) => `拒绝${translateNounPhrase(target)}`],
    [/^Join (.+)$/i, (target) => `加入${translateNounPhrase(target)}`],
    [/^Leave (.+)$/i, (target) => `离开${translateNounPhrase(target)}`],
    [/^Hide (.+)$/i, (target) => `隐藏${translateNounPhrase(target)}`],
    [/^Unhide (.+)$/i, (target) => `取消隐藏${translateNounPhrase(target)}`],
    [/^Reset (.+)$/i, (target) => `重置${translateNounPhrase(target)}`],
    [/^Enable (.+)$/i, (target) => `启用${translateNounPhrase(target)}`],
    [/^Close (.+)$/i, (target) => `关闭${translateNounPhrase(target)}`],
    [/^Cancel (.+)$/i, (target) => `取消${translateNounPhrase(target)}`],
    [/^Copy (.+)$/i, (target) => `复制${translateNounPhrase(target)}`],
    [/^Generate (.+)$/i, (target) => `生成${translateNounPhrase(target)}`],
    [/^Revoke (.+)$/i, (target) => `吊销${translateNounPhrase(target)}`],
    [/^Turn on (.+)$/i, (target) => `开启${translateNounPhrase(target)}`],
    [/^View (.+)$/i, (target) => `查看${translateNounPhrase(target)}`],
    [/^Search (.+)$/i, (target) => `搜索${translateNounPhrase(target)}`],
    [/^Send (.+)$/i, (target) => `发送${translateNounPhrase(target)}`],
    [/^Cast or cancel (.+)$/i, (target) => `投票或取消${translateNounPhrase(target)}`],
    [/^Ban (.+)$/i, (target) => `封禁${translateNounPhrase(target)}`],
    [/^Unban (.+)$/i, (target) => `解除封禁${translateNounPhrase(target)}`],
    [/^Mute (.+)$/i, (target) => `禁言${translateNounPhrase(target)}`],
    [/^Unmute (.+)$/i, (target) => `解除禁言${translateNounPhrase(target)}`],
    [/^Freeze (.+)$/i, (target) => `冻结${translateNounPhrase(target)}`],
    [/^Report (.+)$/i, (target) => `举报${translateNounPhrase(target)}`],
    [/^Configure (.+)$/i, (target) => `配置${translateNounPhrase(target)}`],
  ];
  for (const [pattern, render] of actionPatterns) {
    const match = title.match(pattern);
    if (match) return render(match[1]);
  }

  return translateNounPhrase(title);
}

function translateNounPhrase(phrase) {
  const exact = {
    'a user': '用户',
    user: '用户',
    users: '用户',
    'a group channel': '群组频道',
    'group channel': '群组频道',
    'group channels': '群组频道',
    'an open channel': '开放频道',
    'open channel': '开放频道',
    'open channels': '开放频道',
    channel: '频道',
    channels: '频道',
    'a message': '消息',
    message: '消息',
    messages: '消息',
    'a member': '成员',
    member: '成员',
    members: '成员',
    participant: '参与者',
    participants: '参与者',
    operator: '操作员',
    operators: '操作员',
    metadata: '元数据',
    metacounter: '元计数器',
    'a bot': '机器人',
    bot: '机器人',
    bots: '机器人',
    'a report': '举报',
    report: '举报',
    reports: '举报',
    'a poll': '投票',
    poll: '投票',
    polls: '投票',
    'a poll option': '投票选项',
    'poll option': '投票选项',
    'poll options': '投票选项',
    reaction: '表情回应',
    reactions: '表情回应',
    emoji: '表情',
    emojis: '表情',
    'an emoji': '表情',
    'emoji category': '表情分类',
    'emoji categories': '表情分类',
    announcement: '公告',
    announcements: '公告',
    'announcement groups': '公告组',
    'announcement group': '公告组',
    'session token': '会话 Token',
    'secondary api token': '辅助 API Token',
    'secondary api tokens': '辅助 API Token',
    'registration or device token': '注册或设备 Token',
    'registration or device tokens': '注册或设备 Token',
    'push configuration': '推送配置',
    'push configurations': '推送配置',
    'push notification preferences': '推送通知偏好',
    'push notification content template': '推送通知内容模板',
    'push notification content templates': '推送通知内容模板',
    'apns push configuration': 'APNs 推送配置',
    'fcm push configuration': 'FCM 推送配置',
    'hms push configuration': 'HMS 推送配置',
    'apns certificate': 'APNs 证书',
    'gdpr request': 'GDPR 请求',
    'gdpr requests': 'GDPR 请求',
    'data export': '数据导出',
    'data exports': '数据导出',
    'audit logs': '审计日志',
    feature: '功能',
    features: '功能',
    role: '角色',
    roles: '角色',
    member: '成员',
    members: '成员',
    application: '应用',
    applications: '应用',
    settings: '设置',
    'global application settings': '全局应用设置',
    'channel settings': '频道设置',
    'default invitation preference': '默认邀请偏好',
    'channel invitation preference': '频道邀请偏好',
    'chat history': '聊天记录',
    'typing indicators': '输入状态',
    'unread messages': '未读消息数',
    'unread items': '未读项目数',
    'channels with unread messages': '有未读消息的频道数',
    'count preference of a channel': '频道计数偏好',
    'number of channels by join status': '按加入状态统计的频道数',
    'total number of messages in a channel': '频道消息总数',
    'thread information': '线程信息',
    'threaded replies of a parent message': '父消息的线程回复',
    reply: '回复',
    replies: '回复',
    'read receipts': '已读回执',
    translations: '翻译',
    'translation engine': '翻译引擎',
    'scheduled message': '定时消息',
    'scheduled messages': '定时消息',
    'streaming message': '流式消息',
    'bot message': '机器人消息',
    'failed webhooks': '失败 Webhook',
    'ip whitelist': 'IP 白名单',
    'ips from whitelist': '白名单中的 IP',
    'auto event messages': '自动事件消息',
    'rate limits': '速率限制',
    'monthly active users': '月活跃用户数',
    'daily active users': '日活跃用户数',
    'peak connections': '峰值连接数',
    'concurrent connections': '并发连接数',
    'advanced analytics metrics': '高级分析指标',
    'moderated message': '已审核消息',
    'moderated messages': '已审核消息',
  };
  const normalized = phrase
    .toLowerCase()
    .replace(/^(a|an|the)\s+/, '')
    .trim();
  if (exact[normalized]) return exact[normalized];

  const replacements = Object.entries(exact).sort((a, b) => b[0].length - a[0].length);
  let value = normalized;
  for (const [source, target] of replacements) {
    value = value.replaceAll(source, target);
  }
  const wordMap = {
    a: '',
    an: '',
    all: '全部',
    and: '和',
    as: '作为',
    by: '按',
    custom: '自定义',
    detailed: '详细',
    in: '在',
    into: '为',
    of: '的',
    on: '关于',
    owner: '所有者',
    predefined: '预定义',
    status: '状态',
    type: '类型',
    types: '类型',
    url: 'URL',
    user: '用户',
    users: '用户',
    with: '包含',
    without: '不包含',
  };
  return value
    .split(/\s+/)
    .map((word) => wordMap[word] ?? word)
    .filter(Boolean)
    .join('')
    .replace(/\s+/g, '');
}

async function writeGeneratedData() {
  const routesPath = resolve(root, 'src/generated/routes.json');
  const navigationPath = resolve(root, 'src/generated/navigation.json');
  const searchIndexPath = resolve(root, 'src/generated/search-index.json');
  const structurePath = resolve(root, 'data/structure/chat-pages.json');
  const platformApiZhPath = resolve(root, platformApiZhDataPath);
  const existingRoutes = await readJson(routesPath);
  const existingNavigation = await readJson(navigationPath);
  const nonPlatformRoutes = existingRoutes.filter((route) => route.product !== 'platform-api');
  const nextRoutes = [...nonPlatformRoutes, ...routeRecords].map((route, index) => ({
    ...route,
    id: index + 1,
    sourceIndex: index,
    navOrder: index,
  }));

  const platformContext = {
    key: contextKey,
    title: contextTitle,
    rootPath: localRoot,
    overviewPath: `${localRoot}/overview`,
    product: 'platform-api',
    version: 'v3',
    platform: null,
    nodes: buildNavigationNodes(routeRecords, localRoot),
    pageCount: routeRecords.length,
    sidebarExpansion: 'active-path',
  };
  const nextNavigation = {
    generatedAt: today,
    contexts: [
      platformContext,
      ...existingNavigation.contexts.filter((context) => context.product !== 'platform-api'),
    ],
  };

  const searchRecords = [];
  for (const route of nextRoutes) {
    let mdx = '';
    try {
      mdx = await readTextLocal(resolve(root, route.contentFile));
    } catch {
      mdx = '';
    }
    searchRecords.push({
      path: route.path,
      title: route.title,
      description: route.description,
      context: route.contextTitle,
      keywords: [route.product, route.platform, route.version, ...route.relativePath.split('/')]
        .filter(Boolean)
        .join(' '),
      content: normalizeBody(mdx.replace(/^---\r?\n[\s\S]*?\r?\n---/, '')).slice(0, 12000),
    });
  }

  const structureRecords = nextRoutes.map((route) => ({
    sourcePath: route.sourcePath,
    openimPath: route.path,
    title: route.title,
    context: route.contextKey,
    template: route.template,
    contentFile: route.contentFile,
  }));

  await Promise.all([
    writeFile(routesPath, `${JSON.stringify(nextRoutes, null, 2)}\n`, 'utf8'),
    writeFile(navigationPath, `${JSON.stringify(nextNavigation, null, 2)}\n`, 'utf8'),
    writeFile(searchIndexPath, `${JSON.stringify(searchRecords, null, 2)}\n`, 'utf8'),
    writeFile(structurePath, `${JSON.stringify(structureRecords, null, 2)}\n`, 'utf8'),
    writeFile(
      platformApiZhPath,
      `${JSON.stringify(
        {
          generatedAt: today,
          navigationLabels: platformApiZhNavigationLabels,
        },
        null,
        2,
      )}\n`,
      'utf8',
    ),
  ]);
}

function buildNavigationNodes(routes, rootPath) {
  const rootNode = {
    id: '',
    segment: '',
    title: '',
    href: null,
    type: 'folder',
    children: [],
    minIndex: Number.POSITIVE_INFINITY,
  };
  const routeByPath = new Map(routes.map((route) => [route.path, route]));
  for (const route of routes) {
    const rest = route.path.slice(rootPath.length).replace(/^\//, '');
    if (!rest) continue;
    const segments = rest.split('/');
    let cursor = rootNode;
    let currentPath = rootPath;
    segments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      let node = cursor.children.find((item) => item.segment === segment);
      if (!node) {
        const record = routeByPath.get(currentPath);
        node = {
          id: currentPath.slice(rootPath.length + 1),
          segment,
          title: record?.title ?? platformApiZhNavigationLabels[segment] ?? titleFromSlug(segment),
          href: record?.path ?? null,
          type: 'page',
          children: [],
          minIndex: route.navOrder,
        };
        cursor.children.push(node);
      }
      node.minIndex = Math.min(node.minIndex, route.navOrder);
      const record = routeByPath.get(currentPath);
      if (record) {
        node.href = record.path;
        node.title = record.title;
      }
      if (index < segments.length - 1) node.type = 'folder';
      cursor = node;
    });
  }
  sortNodes(rootNode.children);
  return rootNode.children;
}

function sortNodes(nodes) {
  nodes.sort((a, b) => a.minIndex - b.minIndex || a.title.localeCompare(b.title));
  for (const node of nodes) {
    if (node.children.length > 0) node.type = 'folder';
    sortNodes(node.children);
  }
}

function parseMarkdown(raw, path) {
  const frontmatterMatch = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  const frontmatter = {};
  let body = raw;
  if (frontmatterMatch) {
    body = raw.slice(frontmatterMatch[0].length);
    for (const line of frontmatterMatch[1].split(/\r?\n/)) {
      const separator = line.indexOf(':');
      if (separator === -1) continue;
      frontmatter[line.slice(0, separator).trim()] = line
        .slice(separator + 1)
        .trim()
        .replace(/^['"]|['"]$/g, '');
    }
  }
  return {
    body: body.trim(),
    path,
    title: frontmatter.title,
  };
}

function section(body, names) {
  const lines = body.split(/\r?\n/);
  const headings = [];
  for (let index = 0; index < lines.length; index += 1) {
    const match = lines[index].match(/^(#{2,4})\s+(.+?)\s*$/);
    if (!match) continue;
    headings.push({ index, depth: match[1].length, title: cleanHeading(match[2]) });
  }
  for (const name of names) {
    const heading = headings.find((item) => item.title === cleanHeading(name));
    if (!heading) continue;
    const next = headings.find((item) => item.index > heading.index && item.depth <= heading.depth);
    return lines
      .slice(heading.index + 1, next?.index)
      .join('\n')
      .trim();
  }
  return '';
}

function normalizeImportedMarkdown(value) {
  const normalized = demoteHeadings(
    value
      .replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/, '')
      .replace(/<\/?center>/gi, '')
      .replace(/\[([^\]]+)\]\(([^)]+)\.md\)/g, '[$1]($2)')
      .replace(
        /\]\((?:\.\.?\/|\/)*(?:(?:restapi\/)?apis\/)?authenticationManagement\/getAdminToken(?:\.md)?\)/g,
        '](/docs/chat/platform-api/v3/prepare-to-use-api)',
      )
      .replace(
        /\]\((?:\.\.?\/|\/)*(?:restapi\/)?commonFields(?:\.md)?(#[^)]+)?\)/g,
        (_match, hash = '') => `](https://docs.openim.io/restapi/commonFields${hash})`,
      )
      .replace(
        /\]\((?:\.\.?\/|\/)*(?:restapi\/)?contentDescription(?:\.md)?\)/g,
        '](https://docs.openim.io/restapi/contentDescription)',
      )
      .replace(/\n{3,}/g, '\n\n')
      .trim(),
  );
  return normalizeImportedTableHeaders(sanitizeImportedExamples(normalized));
}

function normalizeImportedTableHeaders(value) {
  const lines = value.split(/\r?\n/);
  return lines
    .map((line, index) => {
      if (!line.includes('|')) return line;
      if (!isMarkdownTableSeparatorLine(lines[index + 1] ?? '')) return line;
      return line
        .replace(/\|\s*选填\s*(?=\|)/g, '| 是否必填 ')
        .replace(/\|\s*header 名\s*(?=\|)/gi, '| 请求头 ')
        .replace(/\|\s*字段名\s*(?=\|)/g, '| 参数名 ');
    })
    .join('\n');
}

function isMarkdownTableSeparatorLine(line) {
  return /^\s*\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?\s*$/.test(line);
}

function sanitizeImportedExamples(value) {
  return value
    .replace(
      /https?:\/\/(?:123\.321\.1\.1|203\.56\.175\.233):10002\/third\/object\?name=[^"',\s)]+/g,
      'https://cdn.example.com/avatar/u_001.png',
    )
    .replace(/"userID":\s*"1154602570"/g, '"userID": "user_001"')
    .replace(/"userID":\s*"1192927498"/g, '"userID": "user_002"')
    .replace(/"nickname":\s*"Gordon"/g, '"nickname": "Alice"')
    .replace(/"nickname":\s*"Blooming"/g, '"nickname": "Bob"');
}

function demoteHeadings(value) {
  return value
    .split(/\r?\n/)
    .map((line) => {
      const match = line.match(/^(#{1,5})\s+(.+)$/);
      if (!match) return line;
      return `${'#'.repeat(Math.min(match[1].length + 1, 6))} ${match[2]}`;
    })
    .join('\n');
}

function cleanHeading(value) {
  return value
    .replace(/[：:]\s*$/, '')
    .replace(/[📞📑⚙️🔄🚀🚫⚠️📱🖥️🌐]/g, '')
    .trim();
}

function firstCodeOrWord(value) {
  const code = value.match(/`([^`]+)`/);
  if (code) return code[1];
  return value.match(/\b(get|post|put|patch|delete)\b/i)?.[1];
}

function firstCodeOrUrl(value) {
  const code = value.match(/`([^`]+)`/);
  if (code) return code[1];
  const line = value
    .split(/\r?\n/)
    .find((item) => item.includes('{API_ADDRESS}') || item.includes('{WEBHOOK_ADDRESS}'));
  return line?.replace(/^[-*\s]+/, '').trim();
}

function renderFrontmatter(route) {
  const fields = [
    ['title', route.title],
    ['description', route.description],
    ['product', route.product],
    ['context', route.contextKey],
    ['template', route.template],
    ['status', route.status],
    ['lastUpdated', today],
    ['version', route.version],
    ['sourcePath', route.sourcePath],
  ];
  return fields.map(([key, value]) => `${key}: ${JSON.stringify(value)}`).join('\n');
}

function renderLocalizedFrontmatter(route, record) {
  const fields = [
    ['title', translateTitle(route)],
    ['description', describeRouteZh(route)],
    ['sourcePath', record.path],
  ];
  return fields.map(([key, value]) => `${key}: ${JSON.stringify(value)}`).join('\n');
}

function sourceUrl(path) {
  return `${openimDocsBase}/${path.replace(/^docs\//, '').replace(/\.md$/, '')}`;
}

function titleFromSlug(value) {
  const title = value
    .replace(/IDList/g, 'ID List')
    .replace(/UserID/g, 'User ID')
    .replace(/GroupID/g, 'Group ID')
    .replace(/MsgID/g, 'Message ID')
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    .replace(/[_-]+/g, ' ')
    .replace(/\bId\b/g, 'ID')
    .replace(/\bUrl\b/g, 'URL')
    .replace(/\bApi\b/g, 'API');
  return title ? `${title[0].toUpperCase()}${title.slice(1)}` : title;
}

function decodeHtml(value) {
  return value
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#x27;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');
}

function normalizeBody(value) {
  return value
    .replace(/```[\s\S]*?```/g, (block) => block.replace(/```\w*/g, ' '))
    .replace(/<[^>]+>/g, ' ')
    .replace(/[#{}`*_>[\]()!-]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function unique(values) {
  return [...new Set(values.filter(Boolean))];
}

async function fetchText(url) {
  const response = await fetch(url, { headers: { 'User-Agent': 'openim-chat-docs-next' } });
  if (!response.ok) throw new Error(`Failed to fetch ${url}: ${response.status}`);
  return response.text();
}

async function readJson(path) {
  return JSON.parse(await readTextLocal(path));
}

async function readTextLocal(path) {
  const { readFile } = await import('node:fs/promises');
  return readFile(path, 'utf8');
}
