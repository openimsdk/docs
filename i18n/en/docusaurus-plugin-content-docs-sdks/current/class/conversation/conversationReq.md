---
sidebar_position: 6
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# ConversationReq

## Description

:::info

Change conversation related attributes

:::

<Tabs
groupId="sdks-language"
values={[
{ label: 'iOS', value: 'iOS', },
{ label: 'Android', value: 'Android', },
{ label: 'Flutter', value: 'Flutter', },
{ label: 'Unity', value: 'Unity', },
]
}>

<TabItem value="Flutter">

### ConversationReq

| Field Name          | Field Type                                           | Description                                                                  |
| ----------------- | -------------------------------------------------- | --------------------------------------------------------------------- |
| recvMsgOpt        | [int](/enum/recvMsgOpt.md)               | Receive message opt 0: Normal; 1: Do not accept messages; 2: Accept online messages but not offline messages |
| groupAtType       | [int](/enum/groupAtType.md)              | @ type                                                                 |
| isPinned          | bool                                               | Pinned or not                                                              |
| isPrivateChat     | bool                                               | Whether burn after reading is turned on                                                    |
| burnDuration      | int                                                | Burn after reading duration (seconds)                                                    |
| ex                | String                                             | Extension field                                                        |

</TabItem>

<TabItem value="iOS">

### OIMConversationReq

| Field Name          | Field Type                                                   | Description                     |
| ----------------- | ---------------------------------------------------------- | ------------------------ |
| recvMsgOpt        | [OIMReceiveMessageOpt](/enum/recvMsgOpt.md)      | Message receive opt           |
| groupAtType       | [OIMGroupAtType](/enum/groupAtType.md)           | @ type                    |
| isPinned          | BOOL                                                       | Pinned or not                 |
| isPrivateChat     | BOOL                                                       | Whether burn after reading is turned on       |
| burnDuration      | NSTimeInterval                                             | Burn after reading duration (seconds)       |
| ex                | NSString                                                   | Extension field           |

</TabItem>

<TabItem value="Android">

### ConversationReq

| Field Name          | Field Type                                           | Description                                                                  |
| ----------------- | -------------------------------------------------- | --------------------------------------------------------------------- |
| recvMsgOpt        | int                                                | Receive message opt 0: Normal; 1: Do not accept messages; 2: Accept online messages but not offline messages |
| groupAtType       | int                                                | @ type                                                                 |
| isPinned          | boolean                                            | Pinned or not                                                              |
| isPrivateChat     | boolean                                            | Whether burn after reading is turned on                                                    |
| burnDuration      | int                                                | Burn after reading duration (seconds)                                                    |
| ex                | String                                             | Extension field                                                        |

</TabItem>

<TabItem value="Unity">

### ConversationReq

| Field Name          | Field Type                                           | Description                                                                  |
| ----------------- | -------------------------------------------------- | --------------------------------------------------------------------- |
| RecvMsgOpt        | int                                                | Receive message opt 0: Normal; 1: Do not accept messages; 2: Accept online messages but not offline messages |
| GroupAtType       | int                                                | @ type                                                                 |
| IsPinned          | bool                                               | Pinned or not                                                              |
| IsPrivateChat     | bool                                               | Whether burn after reading is turned on                                                    |
| BurnDuration      | int                                                | Burn after reading duration (seconds)                                                    |
| Ex                | String                                             | Extension field                                                        |

</TabItem>

</Tabs>
