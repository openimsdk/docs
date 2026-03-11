---
sidebar_position: 2
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# AtElem

## Description

:::info

@ information.

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

### AtTextElem

| Field Name   | Field Type                                             | Description            |
| ------------ | ------------------------------------------------------ | ---------------------- |
| text         | String                                                 | Message content        |
| atUserList   | List<String\>                                          | List of @ user IDs     |
| atUsersInfo  | List<[AtUserInfo](/class/message/atInfo.md)> | List of @ users        |
| quoteMessage | [Message](/class/message/messageInfo.md)     | Quoted message         |
| isAtSelf     | bool                                                   | Whether oneself is @'d |

</TabItem>

<TabItem value="iOS">

### OIMAtTextElem

| Field Name   | Field Type                                                    | Description            |
| ------------ | ------------------------------------------------------------- | ---------------------- |
| text         | NSString                                                      | Message content        |
| atUserList   | NSArray<NSString \*>                                          | List of @ user IDs     |
| atUsersInfo  | NSArray< [OIMAtInfo](/class/message/atInfo.md) \* > | List of @ users        |
| quoteMessage | [OIMMessageInfo](/class/message/messageInfo.md)                                                  | Quoted message         |
| isAtSelf     | BOOL                                                          | Whether oneself is @'d |
| isAtAll      | BOOL                                                          | Whether @ all members  |

</TabItem>

<TabItem value="Android">

### AtTextElem

| Field Name   | Field Type                                             | Description            |
| ------------ | ------------------------------------------------------ | ---------------------- |
| text         | String                                                 | Message content        |
| atUserList   | List<String\>                                          | List of @ user IDs     |
| atUsersInfo  | List<[AtUserInfo](/class/message/atInfo.md)> | List of @ users        |
| quoteMessage | [Message](/class/message/messageInfo.md)     | Quoted message         |
| isAtSelf     | boolean                                                | Whether oneself is @'d |

</TabItem>

<TabItem value="Web">

### AtTextElem

| Field Name   | Field Type                                             | Description                |
| ------------ | ------------------------------------------------------ | -------------------------- |
| text         | string                                                 | Message content            |
| atUserList   | string[]                                               | List of @ user userID list |
| atUsersInfo  | [AtUserInfo](/class/message/atInfo.md)[]     | List of @ user info        |
| quoteMessage | [MessageItem](/class/message/messageInfo.md) | Quoted message             |
| isAtSelf     | boolean                                                | Whether oneself is @'d     |

</TabItem>

<TabItem value="uni-app">

### AtTextElem

| Field Name   | Field Type                                             | Description                |
| ------------ | ------------------------------------------------------ | -------------------------- |
| text         | string                                                 | Message content            |
| atUserList   | string[]                                               | List of @ user userID list |
| atUsersInfo  | [AtUserInfo](/class/message/atInfo.md)[]     | List of @ user info        |
| quoteMessage | [MessageItem](/class/message/messageInfo.md) | Quoted message             |
| isAtSelf     | boolean                                                | Whether oneself is @'d     |

</TabItem>



<TabItem value="React-Native">

### AtTextElem

| Field Name   | Field Type                                             | Description                |
| ------------ | ------------------------------------------------------ | -------------------------- |
| text         | string                                                 | Message content            |
| atUserList   | string[]                                               | List of @ user userID list |
| atUsersInfo  | [AtUserInfo](/class/message/atInfo.md)[]     | List of @ user info        |
| quoteMessage | [MessageItem](/class/message/messageInfo.md) | Quoted message             |
| isAtSelf     | boolean                                                | Whether oneself is @'d     |

</TabItem>

<TabItem value="Unity">

### AtTextElem

| Field Name   | Field Type                                             | Description            |
| ------------ | ------------------------------------------------------ | ---------------------- |
| Text         | string                                                 | Message content        |
| AtUserList   | string[]                                         | List of @ user IDs     |
| AtUsersInfo  | [AtUserInfo](/class/message/atInfo.md)[] | List of @ users        |
| QuoteMessage | [Message](/class/message/messageInfo.md)     | Quoted message         |
| IsAtSelf     | bool                                                   | Whether oneself is @'d |

</TabItem>
</Tabs>
