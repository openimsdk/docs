---
sidebar_position: 2
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# AdvancedHistoryInfo

## Description

:::info

Returned results for getting historical message records.

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

### AdvancedMessage

| Field Name  | Field Type                                               | Description             |
| ----------- | -------------------------------------------------------- | ----------------------- |
| isEnd       | bool                                                     | Whether the last message has been fetched |
| lastMinSeq  | int                                                      | Used for the next request's parameter |
| errCode     | int                                                      | Error code, 0 means normal |
| errMsg      | String                                                   | Error message           |
| messageList | List<[Message](/class/message/messageInfo.md)> | Message list            |

</TabItem>

<TabItem value="iOS">

### OIMGetAdvancedHistoryMessageListInfo

| Field Name  | Field Type                                                               | Description             |
| ----------- | ------------------------------------------------------------------------ | ----------------------- |
| isEnd       | BOOL                                                                     | Whether the last message has been fetched |
| lastMinSeq  | NSInteger                                                                | Used for the next request's parameter |
| errCode     | NSInteger                                                                | Error code, 0 means normal |
| errMsg      | NSString                                                                 | Error message           |
| messageList | NSArray < [OIMMessageInfo](/class/message/messageInfo.md) \* > | Message list            |

</TabItem>

<TabItem value="Android">

### AdvancedMessage

| Field Name  | Field Type                                               | Description |
| ----------- | -------------------------------------------------------- | ----------- |
| isEnd       | boolean                                                  | Whether the last message has been fetched |
| lastMinSeq  | int                                                      | Used for the next request's parameter |
| errCode     | int                                                      | Error code, 0 means normal |
| errMsg      | String                                                   | Error message |
| messageList | List<[Message](/class/message/messageInfo.md)> | Message list |

</TabItem>

<TabItem value="Web">

### AdvancedGetMessageResult

| Field Name  | Field Type                                               | Description             |
| ----------- | -------------------------------------------------------- | ----------------------- |
| isEnd       | boolean                                                  | Whether the last message has been fetched |
| lastMinSeq  | number                                                   | Used for the next request's parameter |
| errCode     | number                                                   | Error code, 0 means normal |
| errMsg      | string                                                   | Error message           |
| messageList | [MessageItem](/class/message/messageInfo.md)[] | Message list            |

</TabItem>

<TabItem value="uni-app">

### AdvancedGetMessageResult

| Field Name  | Field Type                                               | Description             |
| ----------- | -------------------------------------------------------- | ----------------------- |
| isEnd       | boolean                                                  | Whether the last message has been fetched |
| lastMinSeq  | number                                                   | Used for the next request's parameter |
| errCode     | number                                                   | Error code, 0 means normal |
| errMsg      | string                                                   | Error message           |
| messageList | [MessageItem](/class/message/messageInfo.md)[] | Message list            |

</TabItem>


<TabItem value="React-Native">

### AdvancedGetMessageResult

| Field Name  | Field Type                                               | Description             |
| ----------- | -------------------------------------------------------- | ----------------------- |
| isEnd       | boolean                                                  | Whether the last message has been fetched |
| lastMinSeq  | number                                                   | Used for the next request's parameter |
| errCode     | number                                                   | Error code, 0 means normal |
| errMsg      | string                                                   | Error message           |
| messageList | [MessageItem](/class/message/messageInfo.md)[] | Message list            |

</TabItem>

<TabItem value="Unity">

### AdvancedHistoryMessageData

| Field Name  | Field Type                                               | Description             |
| ----------- | -------------------------------------------------------- | ----------------------- |
| IsEnd       | bool                                                     | Whether the last message has been fetched |
| LastMinSeq  | int                                                      | Used for the next request's parameter |
| ErrCode     | int                                                      | Error code, 0 means normal |
| ErrMsg      | string                                                   | Error message           |
| MessageList | [Message](/class/message/messageInfo.md)[] | Message list            |

</TabItem>
</Tabs>
