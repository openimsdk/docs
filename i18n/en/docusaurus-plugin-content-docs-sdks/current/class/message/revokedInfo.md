---
sidebar_position: 2
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# RevokedInfo

## Description

:::info

Message revoked details.

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

### RevokedInfo

| Field Name                    | Field Type | Description           |
| --------------------------- | -------- | -------------- |
| revokerID                   | String   | Revoker ID      |
| revokerNickname             | String   | Revoker nickname     |
| revokerRole                 | [int](/enum/roleLevel.md)       | Revoker group role   |
| clientMsgID                 | String   | Message ID        |
| revokeTime                  | int      | Revoke time       |
| sourceMessageSendTime       | int      | Message send time   |
| sourceMessageSendID         | String   | Message sender ID     |
| sourceMessageSenderNickname | String   | Message sender nickname |
| sessionType                 | [int](/enum/conversationType.md)      | Session type       |

</TabItem>

<TabItem value="iOS">

### OIMMessageRevokedInfo

| Field Name                    | Field Type                                                   | Description           |
| --------------------------- | ---------------------------------------------------------- | -------------- |
| revokerID                   | NSString                                                   | Revoker ID      |
| revokerNickname             | NSString                                                   | Revoker nickname     |
| revokerRole                 | [OIMGroupMemberRole](/enum/roleLevel.md)         | Revoker group role   |
| clientMsgID                 | NSTimeInterval                                             | Message ID        |
| revokeTime                  | NSInteger                                                  | Revoke time       |
| sourceMessageSendTime       | NSTimeInterval                                             | Message send time   |
| sourceMessageSendID         | NSString                                                   | Message sender ID     |
| sourceMessageSenderNickname | NSString                                                   | Message sender nickname |
| sessionType                 | [OIMConversationType](/enum/conversationType.md) | Session type       |

</TabItem>

<TabItem value="Android">

### RevokedInfo

| Field Name                    | Field Type | Description           |
| --------------------------- | -------- | -------------- |
| revokerID                   | String   | Revoker ID      |
| revokerNickname             | String   | Revoker nickname     |
| revokerRole                 | int      | [RevokerRole](/enum/roleLevel.md) Revoker group role   |
| clientMsgID                 | String   | Message ID        |
| revokeTime                  | int      | Revoke time       |
| sourceMessageSendTime       | int      | Message send time   |
| sourceMessageSendID         | String   | Message sender ID     |
| sourceMessageSenderNickname | String   | Message sender nickname |
| sessionType                 | int      | [ConversationType](/enum/conversationType.md) Session type       |

</TabItem>

<TabItem value="Web">

### RevokedInfo

| Field Name                    | Field Type | Description           |
| --------------------------- | -------- | -------------- |
| revokerID                   | string   | Revoker ID      |
| revokerNickname             | string   | Revoker nickname     |
| revokerRole                 | number   | Revoker group role   |
| clientMsgID                 | string   | Message ID        |
| revokeTime                  | number   | Revoke time       |
| sourceMessageSendTime       | number   | Message send time   |
| sourceMessageSendID         | string   | Message sender ID     |
| sourceMessageSenderNickname | string   | Message sender nickname |
| sessionType                 | number   | Session type       |

</TabItem>

<TabItem value="uni-app">

### RevokedInfo

| Field Name                    | Field Type | Description           |
| --------------------------- | -------- | -------------- |
| revokerID                   | string   | Revoker ID      |
| revokerNickname             | string   | Revoker nickname     |
| revokerRole                 | number   | Revoker group role   |
| clientMsgID                 | string   | Message ID        |
| revokeTime                  | number   | Revoke time       |
| sourceMessageSendTime       | number   | Message send time   |
| sourceMessageSendID         | string   | Message sender ID     |
| sourceMessageSenderNickname | string   | Message sender nickname |
| sessionType                 | number   | Session type       |

</TabItem>

<TabItem value="React-Native">

### RevokedInfo

| Field Name                    | Field Type | Description           |
| --------------------------- | -------- | -------------- |
| revokerID                   | string   | Revoker ID      |
| revokerNickname             | string   | Revoker nickname     |
| revokerRole                 | number   | Revoker group role   |
| clientMsgID                 | string   | Message ID        |
| revokeTime                  | number   | Revoke time       |
| sourceMessageSendTime       | number   | Message send time   |
| sourceMessageSendID         | string   | Message sender ID     |
| sourceMessageSenderNickname | string   | Message sender nickname |
| sessionType                 | number   | Session type       |

</TabItem>

<TabItem value="Unity">

### MessageRevoked

| Field Name                    | Field Type | Description           |
| --------------------------- | -------- | -------------- |
| RevokerID                   | string   | Revoker ID      |
| RevokerNickname             | string   | Revoker nickname     |
| RevokerRole                 | [int](/enum/roleLevel.md)       | Revoker group role   |
| ClientMsgID                 | string   | Message ID        |
| RevokeTime                  | int      | Revoke time       |
| SourceMessageSendTime       | int      | Message send time   |
| SourceMessageSendID         | string   | Message sender ID     |
| SourceMessageSenderNickname | string   | Message sender nickname |
| SessionType                 | [int](/enum/conversationType.md)      | Session type       |

</TabItem>
</Tabs>
