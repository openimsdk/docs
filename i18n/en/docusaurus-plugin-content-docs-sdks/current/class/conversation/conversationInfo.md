---
sidebar_position: 6
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# ConversationInfo

## Description

:::info

Conversation information

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

### ConversationInfo

| Field Name          | Field Type                                           | Description                                                                  |
| ----------------- | -------------------------------------------------- | --------------------------------------------------------------------- |
| conversationID    | String                                             | Conversation ID                                                               |
| conversationType  | [int](/enum/conversationType.md)         | Conversation type                                                              |
| userID            | String                                             | User ID                                                               |
| groupID           | String                                             | Group ID                                                                 |
| showName          | String                                             | Display name                                                              |
| faceURL           | String                                             | Face URL                                                                  |
| recvMsgOpt        | [int](/enum/recvMsgOpt.md)               | Receive message opt 0: Normal; 1: Do not accept messages; 2: Accept online messages but not offline messages |
| unreadCount       | int                                                | Unread count                                                                |
| groupAtType       | [int](/enum/groupAtType.md)              | @ type                                                                 |
| latestMsgSendTime | int                                                | Latest message send time (milliseconds)                                              |
| draftText         | String                                             | Draft                                                                  |
| draftTextTime     | int                                                | Draft creation time                                                          |
| isPinned          | bool                                               | Pinned or not                                                              |
| isPrivateChat     | bool                                               | Whether burn after reading is turned on                                                    |
| burnDuration      | int                                                | Burn after reading duration (seconds)                                                    |
| isNotInGroup      | bool                                               | Currently unused                                                              |
| attachedInfo      | String                                             | Currently unused                                                              |
| latestMsg         | [Message](/class/message/messageInfo.md) | Latest message                                                            |
| ex                | String                                             | Extension field                                                        |

</TabItem>

<TabItem value="iOS">

### OIMConversationInfo

| Field Name          | Field Type                                                   | Description                     |
| ----------------- | ---------------------------------------------------------- | ------------------------ |
| conversationID    | NSString                                                   | Conversation ID                  |
| conversationType  | [OIMConversationType](/enum/conversationType.md) | Conversation type                 |
| userID            | NSString                                                   | User ID                  |
| groupID           | NSString                                                   | Group ID                    |
| showName          | NSString                                                   | Display name                 |
| faceURL           | NSString                                                   | Face URL                     |
| recvMsgOpt        | [OIMReceiveMessageOpt](/enum/recvMsgOpt.md)      | Message receive opt           |
| unreadCount       | NSInteger                                                  | Unread count                   |
| groupAtType       | [OIMGroupAtType](/enum/groupAtType.md)           | @ type                    |
| latestMsgSendTime | NSInteger                                                  | Latest message send time (milliseconds) |
| draftText         | NSString                                                   | Draft                     |
| draftTextTime     | NSInteger                                                  | Draft creation time             |
| isPinned          | BOOL                                                       | Pinned or not                 |
| isPrivateChat     | BOOL                                                       | Whether burn after reading is turned on       |
| burnDuration      | NSTimeInterval                                             | Burn after reading duration (seconds)       |
| isNotInGroup      | BOOL                                                       | Currently unused                 |
| attachedInfo      | NSString                                                   | Currently unused                 |
| latestMsg         | [OIMMessageInfo](/class/message/messageInfo.md)  | Latest message               |
| ex                | NSString                                                   | Extension field           |

</TabItem>

<TabItem value="Android">

### ConversationInfo

| Field Name          | Field Type                                           | Description                                                                        |
| ----------------- | -------------------------------------------------- | --------------------------------------------------------------------------- | --- |
| conversationID    | String                                             | Conversation ID                                                                     |
| conversationType  | int                                                | Conversation type [ConversationType](/enum/conversationType.md)            |
| userID            | String                                             | User ID                                                                     |
| groupID           | String                                             | Group ID                                                                       |
| showName          | String                                             | Display name                                                                    |
| faceURL           | String                                             | Face URL                                                                        |
| recvMsgOpt        | int                                                | Message receive opt 0: Normal; 1: Do not accept messages; 2: Accept online messages but not offline messages |
| unreadCount       | int                                                | Unread count                                                                      |
| groupAtType       | int                                                | @ type [GroupAtType](/enum/groupAtType.md)                         |
| latestMsgSendTime | int                                                | Latest message send time (milliseconds)                                                    |     |
| isPinned          | boolean                                            | Pinned or not                                                                    |
| isPrivateChat     | boolean                                            | Whether burn after reading is turned on                                                          |
| burnDuration      | int                                                | Burn after reading duration (seconds)                                                          |
| isNotInGroup      | boolean                                            | Currently unused                                                                    |
| attachedInfo      | String                                             | Currently unused                                                                    |
| latestMsg         | [Message](/class/message/messageInfo.md) | Latest message                                                                  |
| ex                | String                                             | Extension field                                                              |

</TabItem>

<TabItem value="Web">

### ConversationItem

| Field Name          | Field Type                                               | Description                       |
| ----------------- | ------------------------------------------------------ | -------------------------- |
| conversationID    | string                                                 | Conversation ID                    |
| conversationType  | [SessionType](/enum/conversationType.md)     | Conversation type                   |
| userID            | string                                                 | User ID                    |
| groupID           | string                                                 | Group ID                      |
| showName          | string                                                 | Conversation name                   |
| faceURL           | string                                                 | Conversation face URL                   |
| recvMsgOpt        | [MessageReceiveOptType](/enum/recvMsgOpt.md) | Message receive opt             |
| unreadCount       | number                                                 | Unread count                     |
| groupAtType       | [GroupAtType](/enum/groupAtType.md)          | Strong reminder type                 |
| latestMsgSendTime | number                                                 | Latest message send time (milliseconds)   |
| draftText         | string                                                 | Draft                       |
| draftTextTime     | number                                                 | Draft creation time               |
| isPinned          | boolean                                                | Pinned or not                   |
| isPrivateChat     | boolean                                                | Whether burn after reading is turned on         |
| burnDuration      | number                                                 | Burn after reading duration (seconds)         |
| isNotInGroup      | boolean                                                | Currently unused                   |
| attachedInfo      | string                                                 | Currently unused                   |
| latestMsg         | string                                                 | Latest message |
| ex                | string                                                 | Conversation extension field             |

</TabItem>

<TabItem value="uni-app">

### ConversationItem

| Field Name          | Field Type                                               | Description                       |
| ----------------- | ------------------------------------------------------ | -------------------------- |
| conversationID    | string                                                 | Conversation ID                    |
| conversationType  | [SessionType](/enum/conversationType.md)     | Conversation type                   |
| userID            | string                                                 | User ID                    |
| groupID           | string                                                 | Group ID                      |
| showName          | string                                                 | Conversation name                   |
| faceURL           | string                                                 | Conversation face URL                   |
| recvMsgOpt        | [MessageReceiveOptType](/enum/recvMsgOpt.md) | Message receive opt             |
| unreadCount       | number                                                 | Unread count                     |
| groupAtType       | [GroupAtType](/enum/groupAtType.md)          | Strong reminder type                 |
| latestMsgSendTime | number                                                 | Latest message send time (milliseconds)   |
| draftText         | string                                                 | Draft                       |
| draftTextTime     | number                                                 | Draft creation time               |
| isPinned          | boolean                                                | Pinned or not                   |
| isPrivateChat     | boolean                                                | Whether burn after reading is turned on         |
| burnDuration      | number                                                 | Burn after reading duration (seconds)         |
| isNotInGroup      | boolean                                                | Currently unused                   |
| attachedInfo      | string                                                 | Currently unused                   |
| latestMsg         | string                                                 | Latest message |
| ex                | string                                                 | Extension field             |

</TabItem>

<TabItem value="React-Native">

### ConversationItem

| Field Name          | Field Type                                               | Description                       |
| ----------------- | ------------------------------------------------------ | -------------------------- |
| conversationID    | string                                                 | Conversation ID                    |
| conversationType  | [SessionType](/enum/conversationType.md)     | Conversation type                   |
| userID            | string                                                 | User ID                    |
| groupID           | string                                                 | Group ID                      |
| showName          | string                                                 | Conversation name                   |
| faceURL           | string                                                 | Conversation face URL                   |
| recvMsgOpt        | [MessageReceiveOptType](/enum/recvMsgOpt.md) | Message receive opt             |
| unreadCount       | number                                                 | Unread count                     |
| groupAtType       | [GroupAtType](/enum/groupAtType.md)          | Strong reminder type                 |
| latestMsgSendTime | number                                                 | Latest message send time (milliseconds)   |
| draftText         | string                                                 | Draft                       |
| draftTextTime     | number                                                 | Draft creation time               |
| isPinned          | boolean                                                | Pinned or not                   |
| isPrivateChat     | boolean                                                | Whether burn after reading is turned on         |
| burnDuration      | number                                                 | Burn after reading duration (seconds)         |
| isNotInGroup      | boolean                                                | Currently unused                   |
| attachedInfo      | string                                                 | Currently unused                   |
| latestMsg         | string                                                 | Latest message |
| ex                | string                                                 | Extension field             |

</TabItem>

<TabItem value="Unity">

### Conversation

| Field Name          | Field Type                                                   | Description                     |
| ----------------- | ---------------------------------------------------------- | ------------------------ |
| ConversationID    | string                                                   | Conversation ID                  |
| ConversationType  | [ConversationType](/enum/conversationType.md) | Conversation type                 |
| UserID            | string                                                   | User ID                  |
| GroupID           | string                                                   | Group ID                    |
| ShowName          | string                                                   | Display name                 |
| FaceURL           | string                                                   | Face URL                     |
| RecvMsgOpt        | [ReceiveMessageOpt](/enum/recvMsgOpt.md)      | Message receive opt           |
| UnreadCount       | int                                                 | Unread count                   |
| GroupAtType       | [GroupAtType](/enum/groupAtType.md)           | @ type                    |
| LatestMsgSendTime | int                                                  | Latest message send time (milliseconds) |
| DraftText         | string                                                   | Draft                     |
| DraftTextTime     | integer                                                  | Draft creation time             |
| IsPinned          | bool                                                       | Pinned or not                 |
| IsPrivateChat     | bool                                                       | Whether burn after reading is turned on       |
| BurnDuration      | int                                             | Burn after reading duration (seconds)       |
| IsNotInGroup      | bool                                                       | Currently unused                 |
| AttachedInfo      | string                                                   | Currently unused                 |
| LatestMsg         | [MessageInfo](/class/message/messageInfo.md)  | Latest message               |
| Ex                | string                                                   | Extension field           |

</TabItem>

</Tabs>
