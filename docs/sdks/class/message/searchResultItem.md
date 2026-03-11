---
sidebar_position: 2
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# SearchResultItem

## 功能介绍

:::info

查找本地消息结果。

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

### SearchResultItems

| 字段名称         | 字段类型                                                 | 描述                                                             |
| ---------------- | -------------------------------------------------------- | ---------------------------------------------------------------- |
| conversationID   | String                                                   | 会话 ID                                                          |
| messageCount     | int                                                      | 会话下的消息数量                                             |
| conversationType | [int](/enum/conversationType.md)                                                      | 会话类型  |
| showName         | String                                                   | 会话名称                                                           |
| faceURL          | String                                                   | 会话头像                                                             |
| messageList      | List<[Message](/class/message/messageInfo.md)> |  会话下的消息列表                                                                |

</TabItem>

<TabItem value="iOS">

### OIMSearchResultItemInfo

| 字段名称         | 字段类型                                                                 | 描述                 |
| ---------------- | ------------------------------------------------------------------------ | -------------------- |
| conversationID   | NSString                                                                 | 会话 ID              |
| messageCount     | NSInteger                                                                | 这个会话下的消息数量 |
| conversationType | [OIMConversationType](/enum/conversationType.md)               | 会话类型                     |
| showName         | NSString                                                                 | 会话名称                     |
| faceURL          | NSString                                                                 |  会话头像                    |
| messageList      | NSArray < [OIMMessageInfo](/class/message/messageInfo.md) \* > | 会话下的消息列表                     |

</TabItem>

<TabItem value="Android">

### SearchResultItems

| 字段名称         | 字段类型                                                 | 描述                                                             |
| ---------------- | -------------------------------------------------------- | ---------------------------------------------------------------- |
| conversationID   | String                                                   | 会话 ID                                                          |
| messageCount     | int                                                      | 这个会话下的消息数量                                             |
| showName         | String                                                   | 显示名                                                           |
| faceURL          | String                                                   | 头像                                                             |
| messageList      | List<[Message](/class/message/messageInfo.md)> |

</TabItem>

<TabItem value="Web">

### SearchMessageResultItem

| 字段名称         | 字段类型                                                 | 描述             |
| ---------------- | -------------------------------------------------------- | ---------------- |
| conversationID   | string                                                   | 会话 ID          |
| messageCount     | number                                                   | 会话下的消息数量 |
| conversationType | [SessionType](/enum/conversationType.md)       | 会话类型         |
| showName         | string                                                   | 会话名称         |
| faceURL          | string                                                   | 会话头像         |
| messageList      | [MessageItem](/class/message/messageInfo.md)[] | 会话下的消息列表 |

</TabItem>

<TabItem value="uni-app">

### SearchMessageResultItem

| 字段名称         | 字段类型                                                 | 描述             |
| ---------------- | -------------------------------------------------------- | ---------------- |
| conversationID   | string                                                   | 会话 ID          |
| messageCount     | number                                                   | 会话下的消息数量 |
| conversationType | [SessionType](/enum/conversationType.md)       | 会话类型         |
| showName         | string                                                   | 会话名称         |
| faceURL          | string                                                   | 会话头像         |
| messageList      | [MessageItem](/class/message/messageInfo.md)[] | 会话下的消息列表 |

</TabItem>

<TabItem value="React-Native">

### SearchMessageResultItem

| 字段名称         | 字段类型                                                 | 描述             |
| ---------------- | -------------------------------------------------------- | ---------------- |
| conversationID   | string                                                   | 会话 ID          |
| messageCount     | number                                                   | 会话下的消息数量 |
| conversationType | [SessionType](/enum/conversationType.md)       | 会话类型         |
| showName         | string                                                   | 会话名称         |
| faceURL          | string                                                   | 会话头像         |
| messageList      | [MessageItem](/class/message/messageInfo.md)[] | 会话下的消息列表 |

</TabItem>

<TabItem value="Unity">

### SearchResultItem

| 字段名称         | 字段类型                                                 | 描述                                                             |
| ---------------- | -------------------------------------------------------- | ---------------------------------------------------------------- |
| ConversationID   | string                                                   | 会话 ID                                                          |
| MessageCount     | int                                                      | 会话下的消息数量                                             |
| ConversationType | [int](/enum/conversationType.md)                                                      | 会话类型  |
| ShowName         | string                                                   | 会话名称                                                           |
| FaceURL          | string                                                   | 会话头像                                                             |
| MessageList      | [Message](/class/message/messageInfo.md)[] |  会话下的消息列表                                                                |

</TabItem>
</Tabs>
