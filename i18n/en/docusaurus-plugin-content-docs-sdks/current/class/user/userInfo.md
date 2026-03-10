---
sidebar_position: 1
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# UserInfo

## Description

:::info

User information attributes

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

### UserInfo

| Field Name       | Field Type                                            | Description                                                        |
| ---------------- | ----------------------------------------------------- | ------------------------------------------------------------------ |
| userID           | String                                                | User ID                                                            |
| nickName         | String                                                | User nickname                                                      |
| faceURL          | String                                                | User face URL                                                      |
| ex               | String                                                | Extension field                                                    |
| createTime       | int                                                   | User registration time (milliseconds)                              |
| appMangerLevel   | int                                                   | Internal field, can be ignored                                     |
| attachedInfo     | String                                                | SDK internal extension field, application layer does not need to care |
| globalRecvMsgOpt | int                                                   | Global Do Not Disturb 0: Normal; 1: Do not receive messages; 2: Receive online messages, do not receive offline messages; |

</TabItem>

<TabItem value="iOS">

### OIMUserInfo

| Field Name       | Field Type                                            | Description                        |
| ---------------- | ----------------------------------------------------- | ---------------------------------- |
| userID           | NSString                                              | User ID                            |
| nickName         | NSString                                              | User nickname                      |
| faceURL          | NSString                                              | User face URL                      |
| createTime       | NSInteger                                             | User registration time (milliseconds) |
| appMangerLevel   | NSInteger                                             | Internal field, can be ignored     |
| ex               | NSString                                              | Extension field                    |
| attachedInfo     | NSString                                              | SDK internal extension field, application layer does not need to care |
| globalRecvMsgOpt | [OIMReceiveMessageOpt](/enum/recvMsgOpt.md) | Global message receiving settings  |

</TabItem>

<TabItem value="Android">

### UserInfo

| Field Name       | Field Type                                            | Description                                                        |
| ---------------- | ----------------------------------------------------- | ------------------------------------------------------------------ |
| userID           | String                                                | User ID                                                            |
| nickName         | String                                                | User nickname                                                      |
| faceURL          | String                                                | User face URL                                                      |
| ex               | String                                                | Extension field                                                    |
| remark           | String                                                | Remark                                                             |
| createTime       | int                                                   | User registration time (milliseconds)                              |
| appMangerLevel   | int                                                   | Internal field, can be ignored                                     |
| attachedInfo     | String                                                | SDK internal extension field, application layer does not need to care |
| publicInfo       | [PublicUserInfo](/class/user/publicInfo.md) | Publicly available user data                                       |
| friendInfo       | [FriendInfo](/class/relation/friendInfo.md)   | Data visible only to friends                                       |
| blackInfo        | [BlacklistInfo](/class/relation/blackInfo.md) | Blocklist data                                                     |
| isFriendship     | boolean                                               | Is friend relation                                                 |
| isBlacklist      | boolean                                               | Is blocklisted                                                     |
| globalRecvMsgOpt | int                                                   | Global Do Not Disturb 0: Normal; 1: Do not receive messages; 2: Receive online messages, do not receive offline messages; |
| allowAddFriend   | int                                                   | Allow adding as friend 1: Allow, 2: Disallow                       |
| allowBeep        | int                                                   | New message sound 1: Allow, 2: Disallow                            |
| allowVibration   | int                                                   | New message vibration 1: Allow, 2: Disallow                        |

</TabItem>

<TabItem value="Web">

### SelfUserInfo

| Field Name       | Field Type                                             | Description                      |
| ---------------- | ------------------------------------------------------ | -------------------------------- |
| userID           | string                                                 | User ID                          |
| nickName         | string                                                 | User nickname                    |
| faceURL          | string                                                 | User face URL                    |
| createTime       | number                                                 | User registration time (milliseconds) |
| appMangerLevel   | number                                                 | Internal field, can be ignored   |
| ex               | string                                                 | Extension field                  |
| attachedInfo     | string                                                 | SDK internal extension field, application layer does not need to care |
| globalRecvMsgOpt | [MessageReceiveOptType](/enum/recvMsgOpt.md) | Global message receiving settings |

</TabItem>

<TabItem value="uni-app">

### SelfUserInfo

| Field Name       | Field Type                                             | Description                      |
| ---------------- | ------------------------------------------------------ | -------------------------------- |
| userID           | string                                                 | User ID                          |
| nickName         | string                                                 | User nickname                    |
| faceURL          | string                                                 | User face URL                    |
| createTime       | number                                                 | User registration time (milliseconds) |
| appMangerLevel   | number                                                 | Internal field, can be ignored   |
| ex               | string                                                 | Extension field                  |
| attachedInfo     | string                                                 | SDK internal extension field, application layer does not need to care |
| globalRecvMsgOpt | [MessageReceiveOptType](/enum/recvMsgOpt.md) | Global message receiving settings |

</TabItem>

<TabItem value="React-Native">

### SelfUserInfo

| Field Name       | Field Type                                             | Description                      |
| ---------------- | ------------------------------------------------------ | -------------------------------- |
| userID           | string                                                 | User ID                          |
| nickName         | string                                                 | User nickname                    |
| faceURL          | string                                                 | User face URL                    |
| createTime       | number                                                 | User registration time (milliseconds) |
| appMangerLevel   | number                                                 | Internal field, can be ignored   |
| ex               | string                                                 | Extension field                  |
| attachedInfo     | string                                                 | SDK internal extension field, application layer does not need to care |
| globalRecvMsgOpt | [MessageReceiveOptType](/enum/recvMsgOpt.md) | Global message receiving settings |

</TabItem>

<TabItem value="Unity">

### UserInfo

| Field Name       | Field Type                                            | Description                                                        |
| ---------------- | ----------------------------------------------------- | ------------------------------------------------------------------ |
| UserID           | string                                                | User ID                                                            |
| NickName         | string                                                | User nickname                                                      |
| FaceURL          | string                                                | User face URL                                                      |
| Ex               | string                                                | Extension field                                                    |
| CreateTime       | long                                                  | User registration time (milliseconds)                              |
| AppMangerLevel   | int                                                   | Internal field, can be ignored                                     |
| GlobalRecvMsgOpt | int                                                   | Global Do Not Disturb 0: Normal; 1: Do not receive messages; 2: Receive online messages, do not receive offline messages; |

</TabItem>
</Tabs>
