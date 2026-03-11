---
sidebar_position: 2
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# SearchResultItem

## Description

:::info

Local message search result.

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

| Field Name         | Field Type                                                 | Description                                                             |
| ---------------- | -------------------------------------------------------- | ---------------------------------------------------------------- |
| conversationID   | String                                                   | Conversation ID                                                          |
| messageCount     | int                                                      | Number of messages in the conversation                                             |
| conversationType | [int](/enum/conversationType.md)                                                      | Conversation type  |
| showName         | String                                                   | Conversation name                                                           |
| faceURL          | String                                                   | Conversation face URL                                                             |
| messageList      | List<[Message](/class/message/messageInfo.md)> |  Message list in the conversation                                                                |

</TabItem>

<TabItem value="iOS">

### OIMSearchResultItemInfo

| Field Name         | Field Type                                                                 | Description                 |
| ---------------- | ------------------------------------------------------------------------ | -------------------- |
| conversationID   | NSString                                                                 | Conversation ID              |
| messageCount     | NSInteger                                                                | Number of messages in the conversation |
| conversationType | [OIMConversationType](/enum/conversationType.md)               | Conversation type                     |
| showName         | NSString                                                                 | Conversation name                     |
| faceURL          | NSString                                                                 |  Conversation face URL                    |
| messageList      | NSArray < [OIMMessageInfo](/class/message/messageInfo.md) \* > | Message list in the conversation                     |

</TabItem>

<TabItem value="Android">

### SearchResultItems

| Field Name         | Field Type                                                 | Description                                                             |
| ---------------- | -------------------------------------------------------- | ---------------------------------------------------------------- |
| conversationID   | String                                                   | Conversation ID                                                          |
| messageCount     | int                                                      | Number of messages in the conversation                                             |
| showName         | String                                                   | Display name                                                           |
| faceURL          | String                                                   | Face URL                                                             |
| messageList      | List<[Message](/class/message/messageInfo.md)> | Message list |

</TabItem>

<TabItem value="Web">

### SearchMessageResultItem

| Field Name         | Field Type                                                 | Description             |
| ---------------- | -------------------------------------------------------- | ---------------- |
| conversationID   | string                                                   | Conversation ID          |
| messageCount     | number                                                   | Number of messages in the conversation |
| conversationType | [SessionType](/enum/conversationType.md)       | Conversation type         |
| showName         | string                                                   | Conversation name         |
| faceURL          | string                                                   | Conversation face URL         |
| messageList      | [MessageItem](/class/message/messageInfo.md)[] | Message list in the conversation |

</TabItem>

<TabItem value="uni-app">

### SearchMessageResultItem

| Field Name         | Field Type                                                 | Description             |
| ---------------- | -------------------------------------------------------- | ---------------- |
| conversationID   | string                                                   | Conversation ID          |
| messageCount     | number                                                   | Number of messages in the conversation |
| conversationType | [SessionType](/enum/conversationType.md)       | Conversation type         |
| showName         | string                                                   | Conversation name         |
| faceURL          | string                                                   | Conversation face URL         |
| messageList      | [MessageItem](/class/message/messageInfo.md)[] | Message list in the conversation |

</TabItem>

<TabItem value="React-Native">

### SearchMessageResultItem

| Field Name         | Field Type                                                 | Description             |
| ---------------- | -------------------------------------------------------- | ---------------- |
| conversationID   | string                                                   | Conversation ID          |
| messageCount     | number                                                   | Number of messages in the conversation |
| conversationType | [SessionType](/enum/conversationType.md)       | Conversation type         |
| showName         | string                                                   | Conversation name         |
| faceURL          | string                                                   | Conversation face URL         |
| messageList      | [MessageItem](/class/message/messageInfo.md)[] | Message list in the conversation |

</TabItem>

<TabItem value="Unity">

### SearchResultItem

| Field Name         | Field Type                                                 | Description                                                             |
| ---------------- | -------------------------------------------------------- | ---------------------------------------------------------------- |
| ConversationID   | string                                                   | Conversation ID                                                          |
| MessageCount     | int                                                      | Number of messages in the conversation                                             |
| ConversationType | [int](/enum/conversationType.md)                                                      | Conversation type  |
| ShowName         | string                                                   | Conversation name                                                           |
| FaceURL          | string                                                   | Conversation face URL                                                             |
| MessageList      | [Message](/class/message/messageInfo.md)[] |  Message list in the conversation                                                                |

</TabItem>
</Tabs>
