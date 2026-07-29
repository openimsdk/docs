# WASM Conversation 与 Group 信息架构设计

## 决策

WASM SDK 文档不再使用 Sendbird `Channel` 作为领域模型。现有 `/channel/` 活跃路由拆分为 `/conversation/` 与 `/group/` 两个一级能力节，正文和导航以固定版本 `@openim/wasm-client-sdk@3.8.5-hotfix.0` 的公开方法、事件和类型为准。

Sendbird 只提供可参考的任务组织方式，不再决定 OpenIM 的能力页面。不存在直接 WASM SDK 能力的开放频道、超级群组、Channel Metadata、Channel Metacounters、Channel Custom Type 和 Sendbird Channel Filter 页面从活跃路由、导航、搜索与 Sitemap 中删除。

中文是当前交付语言，英文审核状态继续为 `deferred`。WASM 包只用于核对声明，不加入站点依赖。

### 2026-07-23 结构修订

WASM 公开方法改为“一方法一正文页”。领域与能力分类继续作为导航文件夹，概念、数据模型和事件监听由对应概览页统一承载。旧设计中“按任务聚合多个方法”的页面组织决策自本修订起不再适用于 WASM。

会话分组作为首个样板，在 Conversation 下建立 `Conversation groups` 二级菜单，包含一个概览与事件页以及九个独立方法页。WASM、iOS 与 Flutter 共用这套信息架构和路由后缀，但正文、页面标题、方法名、参数、返回模型与 listener 必须分别采用对应 SDK 的真实声明。原 `manage-conversation-groups` 聚合路由直接移除，不建立旧地址重定向。

## Conversation 页面树

1. `conversation/overview-conversation`
2. `conversation/retrieving-conversations/retrieve-conversations`
3. `conversation/retrieving-conversations/retrieve-conversation-list`
4. `conversation/managing-conversations/set-conversation`
5. `conversation/managing-conversations/set-conversation-draft`
6. `conversation/managing-conversations/manage-read-status`
7. `conversation/managing-conversations/hide-or-archive-conversation`
8. `conversation/managing-conversations/delete-or-clear-conversation`
9. `conversation/synchronizing-conversations/synchronize-conversation-data`

`setConversationDraft()` 独立成页。固定包把它标记为由 `setConversation()` 替代，但同一版本的 `SetConversationParams` 不包含 `draftText`；文档将该废弃标记记录为声明错误，不声称 `setConversation()` 已覆盖草稿。

Conversation 需要覆盖 32 个公开方法，包括 9 个会话分组方法：

- 查询：`getOneConversation`、`getConversationListSplit`、`getConversationIDBySessionType`、`getMultipleConversation`、`getConversationRecvMessageOpt`；会话列表必须使用 `getConversationListSplit` 分页获取，非分页列表声明只在内部清单中标记为 `excluded-non-paginated`；
- 设置：`setConversation`、`setConversationDraft`、`setConversationIsMsgDestruct`、`setConversationMsgDestructTime`，并通过 `setConversation` 的字段说明接收选项、置顶、私聊、阅后即焚和扩展数据；
- 已读和未读：`markConversationMessageAsRead`、`getTotalUnreadMsgCount`，并通过 `setConversation.groupAtType` 说明群聊 @ 状态清理；
- 隐藏和删除：`hideConversation`、`deleteConversation`、`deleteConversationAndDeleteAllMsg`、`clearConversationAndDeleteAllMsg`、`deleteAllConversationFromLocal`。

Conversation 事件至少覆盖 `OnNewConversation`、`OnConversationChanged`、`OnTotalUnreadMessageCountChanged` 和 `OnConversationUserInputStatusChanged`。输入状态的写入方法仍归 Message 的输入状态工作流，Conversation 页面只说明事件和状态归属。

## Group 页面树

1. `group/overview-group`
2. `group/creating-and-updating-groups/create-or-update-a-group`
3. `group/retrieving-groups/retrieve-and-search-groups`
4. `group/joining-and-leaving-groups/join-leave-or-dismiss-a-group`
5. `group/managing-group-applications/manage-group-applications`
6. `group/retrieving-group-members/retrieve-group-members`
7. `group/managing-group-members/invite-or-remove-group-members`
8. `group/managing-group-members/update-group-member-info`
9. `group/managing-group-members/transfer-group-owner`
10. `group/moderating-groups/mute-a-group-or-member`
11. `group/synchronizing-groups/synchronize-group-data`

Group 需要覆盖 35 个公开方法，包括申请角标和申请记录清理方法：

- 群资料：`createGroup`、`setGroupInfo`、`getSpecifiedGroupsInfo`、`getJoinedGroupList`、`getJoinedGroupListPage`、`searchGroups`、`isJoinGroup`；
- 生命周期：`joinGroup`、`quitGroup`、`dismissGroup`；
- 成员：`getGroupMemberList`、`getGroupMemberListByJoinTimeFilter`、`getSpecifiedGroupMembersInfo`、`getUsersInGroup`、`searchGroupMembers`、`inviteUserToGroup`、`kickGroupMember`；
- 成员资料和角色：`setGroupMemberInfo`、`getGroupMemberOwnerAndAdmin`、`transferGroupOwner`；
- 申请：`getGroupApplicationListAsApplicant`、`getGroupApplicationListAsRecipient`、`getGroupApplicationUnhandledCount`、`acceptGroupApplication`、`refuseGroupApplication`；
- 禁言：`changeGroupMute`、`changeGroupMemberMute`；
- 群权限和成员资料能力直接通过 `setGroupInfo` 与 `setGroupMemberInfo` 的字段说明，不在正文列出旧方法名。

Group 事件覆盖群申请、群资料、群成员、当前用户已加入群组和群解散相关的 11 个事件。

群消息插入、群消息读回执、群消息已读成员和群内 signaling 方法继续归 Message 或 Calling，不为凑 Group 覆盖率重复建立页面，但覆盖清单必须记录跨模块归属。

## API 覆盖门禁

新增结构化覆盖清单，逐项记录方法或事件的主页面、状态和说明。状态只允许：

- `documented`：由 Conversation 或 Group 页面直接说明；
- `excluded-deprecated`：内部保留旧声明与当前能力页面的映射，正文不出现旧方法名；
- `cross-domain`：由 Message、Calling 等其他能力节负责，并记录目标页或理由。

覆盖项可附带 `declarationIssue`。`setConversationDraft()` 的状态使用 `documented`，同时记录固定声明中的错误废弃标记；它不计入 `excluded-deprecated`，也不填写不存在的替代方法。

测试从 `wasm-sdk-api.json` 读取固定声明，确保 23 个 Conversation 方法、32 个 Group 方法和对应事件全部有唯一主归属。覆盖清单引用不存在的方法、遗漏固定方法、重复主归属或缺少废弃说明时失败。

## 路由迁移

- 有真实 OpenIM 能力的旧 `/channel/` 页面标记为 `merge`，并通过永久重定向指向新的 Conversation 或 Group 页面。
- 同时包含会话和群组职责的旧页面拆分后，重定向到最接近原主要任务的新页面，审核记录备注其余内容的目标页。
- 不存在直接能力的旧页面标记为 `unsupported + remove`，删除 MDX，不设置误导性重定向，访问返回 404。
- 新页面使用 `openim-specific` 来源类型；旧 Sendbird 来源只保留在迁移记录和备注中，新页面固定 OpenIM 官方文档提交、SDK 方法和事件证据。
- `content/zh` 人工正文、结构清单、路由、导航、搜索、Sitemap 和逐页审核记录必须同步更新。

## 内容规则

- WASM 每个未废弃的公开方法建立一个独立正文页；方法页只归属一个公开方法。
- 领域概览页集中说明共享概念、数据模型和该领域事件的完整监听，不混入多个方法的参数与返回结果。
- 参数、返回值、事件和权限边界以固定 WASM 声明、OpenIM 文档和 SDK Core 为证据。
- `ConversationItem.ex` 与 `GroupItem.ex` 只作为真实对象的扩展字段说明，不包装成 Channel Metadata。
- 不提供 Deprecated 页面；废弃方法名不进入正文，当前能力直接写在替代 API 工作流中。`setConversationDraft()` 是已确认的声明标记例外，继续作为独立能力页。
- 生成器不得改写人工中文正文、标题或描述。

## 验收

- WASM 导航和活跃路由中不存在 `channel` 一级节或已删除能力页面。
- Conversation 23 个方法、Group 32 个方法及对应事件覆盖检查通过。
- 新增 20 个 Conversation/Group 中文页面都有逐页审核记录；英文均为 `deferred`。
- 迁移旧 URL 返回永久重定向，不支持旧 URL 返回 404。
- 搜索、Sitemap 和中文打包只包含新活跃路径。
- `pnpm check`、`pnpm build`、结构测试和浏览器冒烟通过。
