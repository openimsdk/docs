---
sidebar_position: 0
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# MessageInfo

## 功能介绍

:::info

消息结构体，具体类型参考[contentType](/enum/messageContentType.md)并解析对应 Elem 字段。

:::

:::caution 注意

:::

<Tabs
groupId="sdks-language"
values={[
{ label: 'iOS', value: 'iOS', },
{ label: 'Android', value: 'Android', },
{ label: 'Flutter', value: 'Flutter', },
{ label: 'uni-app', value: 'uni-app', },
{ label: 'Browser/Electron/MiniProgram', value: 'Web', },
{ label: 'React-Native', value: 'React-Native', },
{ label: 'Unity', value: 'Unity', },
]
}>

<TabItem value="Flutter">

### Message

| 字段名称             | 字段类型                                                         | 描述                            |
| -------------------- | ---------------------------------------------------------------- | ------------------------------- |
| clientMsgID          | String                                                           | 客户端消息唯一 ID，推荐使用     |
| serverMsgID          | String                                                           | 服务端消息唯一 ID，内部使用     |
| createTime           | int                                                              | 创建时间                        |
| sendTime             | int                                                              | 发送时间                        |
| sessionType          | [int](/enum/conversationType.md)                       | 会话类型                        |
| sendID               | String                                                           | 发送者 ID                       |
| recvID               | String                                                           | 接收者 ID，为群聊会话时无需关注 |
| msgFrom              | int                                                              | 内部字段                        |
| contentType          | [int](/enum/messageContentType.md)                     | 消息类型                        |
| platformID           | int                                                              | 平台号                            |
| senderNickname       | String                                                           | 发送者昵称                      |
| senderFaceUrl        | String                                                           | 发送者头像                      |
| groupID              | String                                                           | 群 ID                           |
| content              | String                                                           | 内部字段                        |
| seq                  | int                                                              | 消息的 seq                      |
| isRead               | bool                                                             | 是否已读                        |
| status               | [int](/enum/messageStatus.md)                          | 消息发送状态                    |
| attachedInfo         | String                                                           | 附加信息                        |
| ex                   | String                                                           | 扩展信息                        |
| offlinePush          | [OfflinePushInfo](/class/message/offlinePushInfo.md)   | 离线推送详情                    |
| pictureElem          | [PictureElem](/class/message/pictureElem.md)           | 图片                            |
| soundElem            | [SoundElem](/class/message/soundElem.md)               | 语音                            |
| videoElem            | [VideoElem](/class/message/videoElem.md)               | 视频                            |
| fileElem             | [FileElem](/class/message/fileElem.md)                 | 文件                            |
| mergeElem            | [MergeElem](/class/message/mergeElem.md)               | 合并                            |
| atElem               | [AtElem](/class/message/atElem.md)                     | @ 信息                          |
| locationElem         | [LocationElem](/class/message/locationElem.md)         | 位置                            |
| quoteElem            | [QuoteElem](/class/message/quoteElem.md)               | 引用                            |
| customElem           | [CustomElem](/class/message/customElem.md)             | 自定义                          |
| notificationElem     | [NotificationElem](/class/message/notificationElem.md) | 通知详情                            |
| faceElem             | [FaceElem](/class/message/faceElem.md)                 | 自定义表情                      |
| attachedInfoElem     | [AttachedInfoElem](/class/message/attachedInfoElem.md) | 附加信息                        |
| hasReadTime          | int                                                              | 单聊已读时间戳                        |
| isReact              | bool                                                             | 暂未使用                        |
| isExternalExtensions | bool                                                             | 暂未使用                        |
| textElem             | [TextElem](/class/message/textElem.md)                 | 文本内容                        |
| cardElem             | [CardElem](/class/message/cardElem.md)                 | 名片内容                        |
| advancedTextElem     | -                                                                | 暂未使用                        |
| typingElem           | [TypingElem](/class/message/typingElem.md)             | 正在输入详情                        |

</TabItem>

<TabItem value="iOS">

### OIMMessageInfo

| 字段名称             | 字段类型                                                         | 描述                            |
| -------------------- | ---------------------------------------------------------------- | ------------------------------- |
| clientMsgID          | NSString                                                         | 客户端消息唯一 ID，推荐使用     |
| serverMsgID          | NSString                                                         | 服务端消息唯一 ID，内部使用     |
| createTime           | NSInteger                                                        | 创建时间                        |
| sendTime             | NSInteger                                                        | 发送时间                        |
| sessionType          | [OIMConversationType](/enum/conversationType.md)       | 会话类型                        |
| sendID               | NSString                                                         | 发送者 ID                       |
| recvID               | NSString                                                         | 接收者 ID，为群聊会话时无需关注 |
| msgFrom              | NSInteger                                                        | 内部字段                        |
| contentType          | [OIMMessageContentType](/enum/messageContentType.md)   | 消息类型                        |
| platformID           | NSInteger                                                        | 平台号                            |
| senderNickname       | NSString                                                         | 发送者昵称                      |
| senderFaceUrl        | NSString                                                         | 发送者头像                      |
| groupID              | NSString                                                         | 群 ID                           |
| content              | NSString                                                         | 内部字段                        |
| seq                  | NSInteger                                                        | 消息的 seq                      |
| isRead               | BOOL                                                             | 是否已读                        |
| status               | [OIMMessageStatus](/enum/messageStatus.md)             | 消息发送状态                    |
| attachedInfo         | NSString                                                         | 附加信息                        |
| ex                   | NSString                                                         | 扩展信息                        |
| offlinePush          | [OfflinePushInfo](/class/message/offlinePushInfo.md)   | 离线推送详情                    |
| pictureElem          | [PictureElem](/class/message/pictureElem.md)           | 图片                            |
| soundElem            | [SoundElem](/class/message/soundElem.md)               | 语音                            |
| videoElem            | [VideoElem](/class/message/videoElem.md)               | 视频                            |
| fileElem             | [FileElem](/class/message/fileElem.md)                 | 文件                            |
| mergeElem            | [MergeElem](/class/message/mergeElem.md)               | 合并                            |
| atElem               | [AtElem](/class/message/atElem.md)                     | @ 信息                          |
| locationElem         | [LocationElem](/class/message/locationElem.md)         | 位置                            |
| quoteElem            | [QuoteElem](/class/message/quoteElem.md)               | 引用                            |
| customElem           | [CustomElem](/class/message/customElem.md)             | 自定义                          |
| notificationElem     | [NotificationElem](/class/message/notificationElem.md) | 通知详情                            |
| faceElem             | [FaceElem](/class/message/faceElem.md)                 | 自定义表情                      |
| attachedInfoElem     | [AttachedInfoElem](/class/message/attachedInfoElem.md) | 附加信息                        |
| textElem             | [TextElem](/class/message/textElem.md)                 | 文本内容                        |
| cardElem             | [CardElem](/class/message/cardElem.md)                 | 名片内容                        |
| advancedTextElem     | -                                                                | 暂未使用                        |
| typingElem           | [TypingElem](/class/message/typingElem.md)             | 正在输入详情                        |
| hasReadTime          | NSInteger                                                        | 单聊已读时间戳                        |
| isReact              | BOOL                                                             | 暂未使用                        |
| isExternalExtensions | BOOL                                                             | 暂未使用                        |

</TabItem>

<TabItem value="Android">

### Message

| 字段名称             | 字段类型                                                         | 描述                                                             |
| -------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| clientMsgID          | String                                                           | 客户端消息唯一 ID，推荐使用                                      |
| serverMsgID          | String                                                           | 服务端消息唯一 ID，内部使用                                      |
| createTime           | int                                                              | 创建时间                                                         |
| sendTime             | int                                                              | 发送时间                                                         |
| sessionType          | int                                                              | 会话类型 [ConversationType](/enum/conversationType.md) |
| sendID               | String                                                           | 发送者 ID                                                        |
| recvID               | String                                                           | 接收者 ID，为群聊会话时无需关注                                  |
| msgFrom              | int                                                              | 内部字段                                                         |
| contentType          | int                                                              | 消息类型 [MessageType](/enum/messageContentType.md)    |
| platformID           | int                                                              | 平台号                                                             |
| senderNickname       | String                                                           | 发送者昵称                                                       |
| senderFaceUrl        | String                                                           | 发送者头像                                                       |
| groupID              | String                                                           | 群 ID                                                            |
| content              | String                                                           | 内部字段                                                         |
| seq                  | int                                                              | 消息的 seq                                                       |
| isRead               | bool                                                             | 是否已读                                                         |
| status               | int                                                              | 消息发送状态 [MessageStatus](/enum/messageStatus.md)   |
| attachedInfo         | String                                                           | 内部字段                                                         |
| ex                   | String                                                           | 扩展信息                                                         |
| offlinePush          | [OfflinePushInfo](/class/message/offlinePushInfo.md)   | 离线推送详情                                                     |
| pictureElem          | [PictureElem](/class/message/pictureElem.md)           | 图片                                                             |
| soundElem            | [SoundElem](/class/message/soundElem.md)               | 语音                                                             |
| videoElem            | [VideoElem](/class/message/videoElem.md)               | 视频                                                             |
| fileElem             | [FileElem](/class/message/fileElem.md)                 | 文件                                                             |
| mergeElem            | [MergeElem](/class/message/mergeElem.md)               | 合并                                                             |
| atElem               | [AtElem](/class/message/atElem.md)                     | @ 信息                                                           |
| locationElem         | [LocationElem](/class/message/locationElem.md)         | 位置                                                             |
| quoteElem            | [QuoteElem](/class/message/quoteElem.md)               | 引用                                                             |
| customElem           | [CustomElem](/class/message/customElem.md)             | 自定义                                                           |
| notificationElem     | [NotificationElem](/class/message/notificationElem.md) | 通知详情                                                             |
| faceElem             | [FaceElem](/class/message/faceElem.md)                 | 自定义表情                                                       |
| attachedInfoElem     | [AttachedInfoElem](/class/message/attachedInfoElem.md) | 附加信息                                                         |
| hasReadTime          | int                                                              | 单聊已读时间戳                                                         |
| isReact              | boolean                                                          | 暂未使用                                                                 |
| isExternalExtensions | boolean                                                          | 暂未使用
| textElem             | [TextElem](/class/message/textElem.md)                 | 文本内容                                                         |
| cardElem             | [CardElem](/class/message/cardElem.md)                 | 名片内容                                                         |
| advancedTextElem     | -                                                                | 暂未使用                                                         |
| typingElem           | [TypingElem](/class/message/typingElem.md)             | 正在输入详情                                                         |
| ext                  | String                                                           | Android 扩展信息                                                 |

</TabItem>

<TabItem value="Web">

### MessageItem

| 字段名称             | 字段类型                                                         | 描述                            |
| -------------------- | ---------------------------------------------------------------- | ------------------------------- |
| clientMsgID          | string                                                           | 客户端消息唯一 ID，推荐使用     |
| serverMsgID          | string                                                           | 服务端消息唯一 ID，内部使用     |
| createTime           | number                                                           | 创建时间                        |
| sendTime             | number                                                           | 发送时间                        |
| sessionType          | [SessionType](/enum/conversationType.md)               | 会话类型                        |
| sendID               | string                                                           | 发送者 ID                       |
| recvID               | string                                                           | 接收者 ID，为群聊会话时无需关注 |
| msgFrom              | number                                                           | 内部字段                        |
| contentType          | [MessageType](/enum/messageContentType.md)             | 消息类型                        |
| platformID           | [Platform](/enum/platform.md)                         | 平台号                            |
| senderNickname       | string                                                           | 发送者昵称                      |
| senderFaceUrl        | string                                                           | 发送者头像                      |
| groupID              | string                                                           | 群 ID                           |
| content              | string                                                           | 内部字段                        |
| seq                  | number                                                           | 消息的 seq                      |
| isRead               | boolean                                                          | 是否已读                        |
| status               | [MessageStatus](/enum/messageStatus.md)                | 消息发送状态                    |
| attachedInfo         | string                                                           | 内部字段                        |
| ex                   | string                                                           | 扩展信息                        |
| offlinePush          | [OfflinePushInfo](/class/message/offlinePushInfo.md)   | 离线推送详情                    |
| pictureElem          | [PictureElem](/class/message/pictureElem.md)           | 图片消息详情                    |
| soundElem            | [SoundElem](/class/message/soundElem.md)               | 语音消息详情                    |
| videoElem            | [VideoElem](/class/message/videoElem.md)               | 视频消息详情                    |
| fileElem             | [FileElem](/class/message/fileElem.md)                 | 文件消息详情                    |
| mergeElem            | [MergeElem](/class/message/mergeElem.md)               | 合并消息详情                    |
| atTextElem           | [atTextElem](/class/message/atElem.md)                 | @消息详情                       |
| locationElem         | [LocationElem](/class/message/locationElem.md)         | 位置消息详情                    |
| quoteElem            | [QuoteElem](/class/message/quoteElem.md)               | 引用消息详情                    |
| customElem           | [CustomElem](/class/message/customElem.md)             | 自定义消息详情                  |
| notificationElem     | [NotificationElem](/class/message/notificationElem.md) | 通知消息详情                    |
| faceElem             | [FaceElem](/class/message/faceElem.md)                 | 自定义表情详情                  |
| attachedInfoElem     | [AttachedInfoElem](/class/message/attachedInfoElem.md) | 附加信息详情                    |
| textElem             | [TextElem](/class/message/textElem.md)                 | 文本内容详情                    |
| cardElem             | [CardElem](/class/message/cardElem.md)                 | 名片内容详情                    |
| advancedTextElem     | -                                                                | 暂未使用                        |
| typingElem           | [TypingElem](/class/message/typingElem.md)             | 正在输入详情                    |
| hasReadTime          | number                                                           | 单聊已读时间戳                        |
| isReact              | boolean                                                          | 暂未使用                        |
| isExternalExtensions | boolean                                                          | 暂未使用                        |

</TabItem>

<TabItem value="uni-app">

### MessageItem

| 字段名称             | 字段类型                                                         | 描述                            |
| -------------------- | ---------------------------------------------------------------- | ------------------------------- |
| clientMsgID          | string                                                           | 客户端消息唯一 ID，推荐使用     |
| serverMsgID          | string                                                           | 服务端消息唯一 ID，内部使用     |
| createTime           | number                                                           | 创建时间                        |
| sendTime             | number                                                           | 发送时间                        |
| sessionType          | [SessionType](/enum/conversationType.md)               | 会话类型                        |
| sendID               | string                                                           | 发送者 ID                       |
| recvID               | string                                                           | 接收者 ID，为群聊会话时无需关注 |
| msgFrom              | number                                                           | 内部字段                        |
| contentType          | [MessageType](/enum/messageContentType.md)             | 消息类型                        |
| platformID           | [Platform](/enum/platform.md)                         | 平台号                            |
| senderNickname       | string                                                           | 发送者昵称                      |
| senderFaceUrl        | string                                                           | 发送者头像                      |
| groupID              | string                                                           | 群 ID                           |
| content              | string                                                           | 内部字段                        |
| seq                  | number                                                           | 消息的 seq                      |
| isRead               | boolean                                                          | 是否已读                        |
| status               | [MessageStatus](/enum/messageStatus.md)                | 消息发送状态                    |
| attachedInfo         | string                                                           | 内部字段                        |
| ex                   | string                                                           | 扩展信息                        |
| offlinePush          | [OfflinePushInfo](/class/message/offlinePushInfo.md)   | 离线推送详情                    |
| pictureElem          | [PictureElem](/class/message/pictureElem.md)           | 图片消息详情                    |
| soundElem            | [SoundElem](/class/message/soundElem.md)               | 语音消息详情                    |
| videoElem            | [VideoElem](/class/message/videoElem.md)               | 视频消息详情                    |
| fileElem             | [FileElem](/class/message/fileElem.md)                 | 文件消息详情                    |
| mergeElem            | [MergeElem](/class/message/mergeElem.md)               | 合并消息详情                    |
| atTextElem           | [atTextElem](/class/message/atElem.md)                 | @消息详情                       |
| locationElem         | [LocationElem](/class/message/locationElem.md)         | 位置消息详情                    |
| quoteElem            | [QuoteElem](/class/message/quoteElem.md)               | 引用消息详情                    |
| customElem           | [CustomElem](/class/message/customElem.md)             | 自定义消息详情                  |
| notificationElem     | [NotificationElem](/class/message/notificationElem.md) | 通知消息详情                    |
| faceElem             | [FaceElem](/class/message/faceElem.md)                 | 自定义表情详情                  |
| attachedInfoElem     | [AttachedInfoElem](/class/message/attachedInfoElem.md) | 附加信息详情                    |
| textElem             | [TextElem](/class/message/textElem.md)                 | 文本内容详情                    |
| cardElem             | [CardElem](/class/message/cardElem.md)                 | 名片内容详情                    |
| advancedTextElem     | -                                                                | 暂未使用                        |
| typingElem           | [TypingElem](/class/message/typingElem.md)             | 正在输入详情                    |
| hasReadTime          | number                                                           | 单聊已读时间戳                        |
| isReact              | boolean                                                          | 暂未使用                        |
| isExternalExtensions | boolean                                                          | 暂未使用                        |

</TabItem>

<TabItem value="React-Native">

### MessageItem

| 字段名称             | 字段类型                                                         | 描述                            |
| -------------------- | ---------------------------------------------------------------- | ------------------------------- |
| clientMsgID          | string                                                           | 客户端消息唯一 ID，推荐使用     |
| serverMsgID          | string                                                           | 服务端消息唯一 ID，内部使用     |
| createTime           | number                                                           | 创建时间                        |
| sendTime             | number                                                           | 发送时间                        |
| sessionType          | [SessionType](/enum/conversationType.md)               | 会话类型                        |
| sendID               | string                                                           | 发送者 ID                       |
| recvID               | string                                                           | 接收者 ID，为群聊会话时无需关注 |
| msgFrom              | number                                                           | 内部字段                        |
| contentType          | [MessageType](/enum/messageContentType.md)             | 消息类型                        |
| platformID           | [Platform](/enum/platform.md)                         | 平台号                            |
| senderNickname       | string                                                           | 发送者昵称                      |
| senderFaceUrl        | string                                                           | 发送者头像                      |
| groupID              | string                                                           | 群 ID                           |
| content              | string                                                           | 内部字段                        |
| seq                  | number                                                           | 消息的 seq                      |
| isRead               | boolean                                                          | 是否已读                        |
| status               | [MessageStatus](/enum/messageStatus.md)                | 消息发送状态                    |
| attachedInfo         | string                                                           | 内部字段                        |
| ex                   | string                                                           | 扩展信息                        |
| offlinePush          | [OfflinePushInfo](/class/message/offlinePushInfo.md)   | 离线推送详情                    |
| pictureElem          | [PictureElem](/class/message/pictureElem.md)           | 图片消息详情                    |
| soundElem            | [SoundElem](/class/message/soundElem.md)               | 语音消息详情                    |
| videoElem            | [VideoElem](/class/message/videoElem.md)               | 视频消息详情                    |
| fileElem             | [FileElem](/class/message/fileElem.md)                 | 文件消息详情                    |
| mergeElem            | [MergeElem](/class/message/mergeElem.md)               | 合并消息详情                    |
| atTextElem           | [atTextElem](/class/message/atElem.md)                 | @消息详情                       |
| locationElem         | [LocationElem](/class/message/locationElem.md)         | 位置消息详情                    |
| quoteElem            | [QuoteElem](/class/message/quoteElem.md)               | 引用消息详情                    |
| customElem           | [CustomElem](/class/message/customElem.md)             | 自定义消息详情                  |
| notificationElem     | [NotificationElem](/class/message/notificationElem.md) | 通知消息详情                    |
| faceElem             | [FaceElem](/class/message/faceElem.md)                 | 自定义表情详情                  |
| attachedInfoElem     | [AttachedInfoElem](/class/message/attachedInfoElem.md) | 附加信息详情                    |
| textElem             | [TextElem](/class/message/textElem.md)                 | 文本内容详情                    |
| cardElem             | [CardElem](/class/message/cardElem.md)                 | 名片内容详情                    |
| advancedTextElem     | -                                                                | 暂未使用                        |
| typingElem           | [TypingElem](/class/message/typingElem.md)             | 正在输入详情                    |
| hasReadTime          | number                                                           | 单聊已读时间戳                        |
| isReact              | boolean                                                          | 暂未使用                        |
| isExternalExtensions | boolean                                                          | 暂未使用                        |

</TabItem>

<TabItem value="Unity">

### Message

| 字段名称             | 字段类型                                                         | 描述                            |
| -------------------- | ---------------------------------------------------------------- | ------------------------------- |
| ClientMsgID          | string                                                           | 客户端消息唯一 ID，推荐使用     |
| ServerMsgID          | string                                                           | 服务端消息唯一 ID，内部使用     |
| CreateTime           | int                                                              | 创建时间                        |
| SendTime             | int                                                              | 发送时间                        |
| SessionType          | [int](/enum/conversationType.md)                       | 会话类型                        |
| SendID               | string                                                           | 发送者 ID                       |
| RecvID               | string                                                           | 接收者 ID，为群聊会话时无需关注 |
| MsgFrom              | int                                                              | 内部字段                        |
| ContentType          | [int](/enum/messageContentType.md)                     | 消息类型                        |
| PlatformID           | int                                                              | 平台号                            |
| SenderNickname       | string                                                           | 发送者昵称                      |
| SenderFaceUrl        | string                                                           | 发送者头像                      |
| GroupID              | string                                                           | 群 ID                           |
| Content              | string                                                           | 内部字段                        |
| Seq                  | int                                                              | 消息的 seq                      |
| IsRead               | bool                                                             | 是否已读                        |
| Status               | [int](/enum/messageStatus.md)                          | 消息发送状态                    |
| AttachedInfo         | string                                                           | 附加信息                        |
| Ex                   | string                                                           | 扩展信息                        |
| OfflinePush          | [OfflinePushInfo](/class/message/offlinePushInfo.md)   | 离线推送详情                    |
| PictureElem          | [PictureElem](/class/message/pictureElem.md)           | 图片                            |
| SoundElem            | [SoundElem](/class/message/soundElem.md)               | 语音                            |
| VideoElem            | [VideoElem](/class/message/videoElem.md)               | 视频                            |
| FileElem             | [FileElem](/class/message/fileElem.md)                 | 文件                            |
| MergeElem            | [MergeElem](/class/message/mergeElem.md)               | 合并                            |
| AtElem               | [AtElem](/class/message/atElem.md)                     | @ 信息                          |
| LocationElem         | [LocationElem](/class/message/locationElem.md)         | 位置                            |
| QuoteElem            | [QuoteElem](/class/message/quoteElem.md)               | 引用                            |
| CustomElem           | [CustomElem](/class/message/customElem.md)             | 自定义                          |
| NotificationElem     | [NotificationElem](/class/message/notificationElem.md) | 通知详情                            |
| FaceElem             | [FaceElem](/class/message/faceElem.md)                 | 自定义表情                      |
| AttachedInfoElem     | [AttachedInfoElem](/class/message/attachedInfoElem.md) | 附加信息                        |
| HasReadTime          | int                                                              | 单聊已读时间戳                        |
| IsReact              | bool                                                             | 暂未使用                        |
| IsExternalExtensions | bool                                                             | 暂未使用                        |
| TextElem             | [TextElem](/class/message/textElem.md)                 | 文本内容                        |
| CardElem             | [CardElem](/class/message/cardElem.md)                 | 名片内容                        |
| AdvancedTextElem     | -                                                                | 暂未使用                        |
| TypingElem           | [TypingElem](/class/message/typingElem.md)             | 正在输入详情                        |

</TabItem>

</Tabs>
