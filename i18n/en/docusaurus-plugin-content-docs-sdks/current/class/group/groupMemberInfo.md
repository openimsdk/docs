---
sidebar_position: 2
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# GroupMemberInfo

## Description

:::info

Group member information.

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

### GroupMembersInfo

| Field Name       | Field Type                             | Description                                               |
| -------------- | ------------------------------------ | -------------------------------------------------- |
| groupID        | String                               | Group ID                                              |
| userID         | String                               | Member user ID                                          |
| nickname       | String                               | Member nickname                                         |
| faceURL        | String                               | Member face URL                                         |
| roleLevel      | int                                  | Member role: 1 for regular member; 2 for owner; 3 for administrator            |
| joinTime       | int                                  | Join time                                     |
| joinSource     | [int](/enum/joinSource.md) | Join source: 2: invited 3: search 4: QR code |
| inviterUserID  | String                               | Inviter user ID                                          |
| muteEndTime    | int                                  | Mute end time                                       |
| operatorUserID | String                               | Operator user ID                                  |
| ex             | String                               | Extension information                                           |

</TabItem>

<TabItem value="iOS">

### OIMGroupMemberBaseInfo

| Field Name  | Field Type                                           | Description |
| --------- | -------------------------------------------------- | ---- |
| userID    | NSString                                           | User ID     |
| roleLevel | [OIMGroupMemberRole](/enum/roleLevel.md) | Member role     |

### OIMGroupMemberInfo

| Field Name       | Field Type                                           | Description              |
| -------------- | -------------------------------------------------- | ----------------- |
| groupID        | NSString                                           | Group ID             |
| userID         | NSString                                           | Member user ID         |
| nickname       | NSString                                           | Member nickname        |
| faceURL        | NSString                                           | Member face URL        |
| roleLevel      | [OIMGroupMemberRole](/enum/roleLevel.md) | Member role        |
| joinTime       | NSInteger                                          | Join time    |
| joinSource     | [OIMJoinType](/enum/joinSource.md)       | Join source    |
| inviterUserID  | NSString                                           | Inviter user ID         |
| muteEndTime    | NSTimeInterval                                     | Mute end time      |
| operatorUserID | NSString                                           | Operator user ID |
| ex             | NSString                                           | Extension information                  |

</TabItem>

<TabItem value="Android">

### GroupMembersInfo

| Field Name       | Field Type | Description                                                       |
| -------------- | -------- | ---------------------------------------------------------- |
| groupID        | String   | Group ID                                                      |
| userID         | String   | Member user ID                                                  |
| nickname       | String   | Member nickname                                                 |
| faceURL        | String   | Member face URL                                                 |
| roleLevel      | int      | [GroupMemberRole](/enum/roleLevel.md) Member role |
| joinTime       | long      | Join time                                             |
| joinSource     | int      | [JoinSource](/enum/joinSource.md) Join source       |
| inviterUserID  | String   | Inviter user ID                                                  |
| muteEndTime    | long      | Mute end time                                               |
| operatorUserID | String   | Operator user ID                                          |
| ex             | String   | Extension information                                                   |

</TabItem>

<TabItem value="Web">

### GroupMemberItem

| Field Name       | Field Type                                         | Description              |
| -------------- | ------------------------------------------------ | ----------------- |
| groupID        | string                                           | Group ID             |
| userID         | string                                           | Member user ID         |
| nickname       | string                                           | Member nickname        |
| faceURL        | string                                           | Member face URL        |
| roleLevel      | [GroupMemberRole](/enum/roleLevel.md)  | Member role        |
| joinTime       | number                                           | Join time    |
| joinSource     | [GroupJoinSource](/enum/joinSource.md) | Join source    |
| inviterUserID  | string                                           | Inviter user ID         |
| muteEndTime    | number                                           | Mute end time      |
| operatorUserID | string                                           | Operator user ID |
| ex             | string                                           | Extension information                  |

</TabItem>

<TabItem value="uni-app">

### GroupMemberItem

| Field Name       | Field Type                                         | Description              |
| -------------- | ------------------------------------------------ | ----------------- |
| groupID        | string                                           | Group ID             |
| userID         | string                                           | Member user ID         |
| nickname       | string                                           | Member nickname        |
| faceURL        | string                                           | Member face URL        |
| roleLevel      | [GroupMemberRole](/enum/roleLevel.md)  | Member role        |
| joinTime       | number                                           | Join time    |
| joinSource     | [GroupJoinSource](/enum/joinSource.md) | Join source    |
| inviterUserID  | string                                           | Inviter user ID         |
| muteEndTime    | number                                           | Mute end time      |
| operatorUserID | string                                           | Operator user ID |
| ex             | string                                           | Extension information                  |

</TabItem>


<TabItem value="React-Native">

### GroupMemberItem

| Field Name       | Field Type                                         | Description              |
| -------------- | ------------------------------------------------ | ----------------- |
| groupID        | string                                           | Group ID             |
| userID         | string                                           | Member user ID         |
| nickname       | string                                           | Member nickname        |
| faceURL        | string                                           | Member face URL        |
| roleLevel      | [GroupMemberRole](/enum/roleLevel.md)  | Member role        |
| joinTime       | number                                           | Join time    |
| joinSource     | [GroupJoinSource](/enum/joinSource.md) | Join source    |
| inviterUserID  | string                                           | Inviter user ID         |
| muteEndTime    | number                                           | Mute end time      |
| operatorUserID | string                                           | Operator user ID |
| ex             | string                                           | Extension information                  |

</TabItem>
<TabItem value="Unity">

### GroupMemberInfo

| Field Name       | Field Type                             | Description                                               |
| -------------- | ------------------------------------ | -------------------------------------------------- |
| GroupID        | string                               | Group ID                                              |
| UserID         | string                               | Member user ID                                          |
| Nickname       | string                               | Member nickname                                         |
| FaceURL        | string                               | Member face URL                                         |
| RoleLevel      | int                                  | Member role: 1 for regular member; 2 for owner; 3 for administrator            |
| JoinTime       | int                                  | Join time                                     |
| JoinSource     | [int](/enum/joinSource.md) | Join source: 2: invited 3: search 4: QR code |
| InviterUserID  | string                               | Inviter user ID                                          |
| MuteEndTime    | int                                  | Mute end time                                       |
| OperatorUserID | string                               | Operator user ID                                  |
| Ex             | string                               | Extension information                                           |

</TabItem>
</Tabs>
