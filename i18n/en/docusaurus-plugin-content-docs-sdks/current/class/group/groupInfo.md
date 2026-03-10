---
sidebar_position: 2
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# GroupInfo

## Description

:::info

Group information.

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

### GroupInfo

| Field Name               | Field Type                                                  | Description                                      |
| ---------------------- | --------------------------------------------------------- | ----------------------------------------- |
| groupID                | String                                                    | Group ID                                 |
| groupName              | String                                                    | Group name                                    |
| notification           | String                                                    | Group notice                                    |
| introduction           | String                                                    | Group introduction                                    |
| faceURL                | String                                                    | Group face URL                                |
| createTime             | int                                                       | Group creation time                                |
| status                 | [int](/enum/groupStatus.md)                                                       | Group status: 0 normal, 1 banned, 2 dismissed, 3 muted     |
| creatorUserID          | String                                                    | Creator ID                             |
| groupType              | [int](/enum/groupType.md)                 | Group type                                    |
| ownerUserID            | String                                                    | Owner ID                               |
| memberCount            | int                                                       | Member count                                |
| ex                     | String                                                    | Extension field                            |
| needVerification       | [int](/enum/groupVerification.md) | Join group verification                              |
| lookMemberInfo         | [int](/enum/allowType.md)                 | Whether viewing member info is allowed |
| applyMemberFriend      | [int](/enum/allowType.md)                                                     | Whether adding friends via group is allowed     |
| notificationUpdateTime | int                                                       | Group notice update time                            |
| notificationUserID     | String                                                    | Group notice publisher ID                       |

</TabItem>

<TabItem value="iOS">

### OIMGroupBaseInfo

| Field Name     | Field Type  | Description       |
| ------------ | --------- | ---------- |
| groupName    | NSString  | Group name     |
| notification | NSString  | Group notice     |
| introduction | NSString  | Group introduction     |
| faceURL      | NSString | Group face URL |
| ex           | NSString  |  Extension field          |

### OIMGroupCreateInfo

| Field Name      | Field Type              | Description             |
| ------------- | --------------------- | ---------------- |
| groupInfo     | OIMGroupBaseInfo      | Group base info                 |
| memberUserIDs | NSArray <NSString \*> | Group member user IDs   |
| adminUserIDs  | NSArray <NSString \*> | Admin user IDs   |
| ownerUserID   | NSString              | Owner user ID |

### OIMGroupInfo

| Field Name               | Field Type                                                         | Description                     |
| ---------------------- | ---------------------------------------------------------------- | ------------------------ |
| groupID                | NSString                                                         | Group ID                |
| groupName              | NSString                                                         | Group name                   |
| notification           | NSString                                                         | Group notice                   |
| introduction           | NSString                                                         | Group introduction                   |
| faceURL                | NSString                                                        | Group face URL               |
| createTime             | NSInteger                                                        | Group creation time               |
| status                 | [OIMGroupStatus](/enum/groupStatus.md)                 | Group status                   |
| creatorUserID          | NSString                                                         | Creator ID            |
| groupType              | [OIMGroupType](/enum/groupType.md)                     | Group type                   |
| ownerUserID            | NSString                                                         | Owner user ID            |
| memberCount            | NSInteger                                                        | Member count               |
| ex                     | NSString                                                         | Extension field           |
| needVerification       | [OIMGroupVerificationType](/enum/groupVerification.md) | Join verification             |
| lookMemberInfo         | [OIMAllowType](/enum/allowType.md)                 | Whether viewing member info is allowed |
| applyMemberFriend      | [OIMAllowType](/enum/allowType.md)                                                        | Whether adding friends via group is allowed |
| notificationUpdateTime | NSInteger                                                        | Group notice update time           |
| notificationUserID     | NSString                                                         | Group notice publisher ID      |

</TabItem>

<TabItem value="Android">

### GroupInfo

| Field Name               | Field Type                                                         | Description                     |
| ---------------------- | ---------------------------------------------------------------- | ------------------------ |
| groupID                | String                                                           | Group ID                |
| groupName              | String                                                           | Group name                   |
| notification           | String                                                           | Group notice                   |
| introduction           | String                                                           | Group introduction                   |
| faceURL                | String                                                           | Group face URL               |
| createTime             | long                                                           | Group creation time               |
| status                 | [GroupStatus](/enum/groupStatus.md)                 | Group status                   |
| creatorUserID          | String                                                           | Creator ID            |
| groupType              | [GroupType](/enum/groupType.md)                     | Group type                   |
| ownerUserID            | String                                                           | Owner ID              |
| memberCount            | Integer                                                          | Member count               |
| ex                     | String                                                           | Extension field           |
| needVerification       | [GroupVerification](/enum/groupVerification.md) | Join verification             |
| lookMemberInfo         | Integer                                                          | Whether viewing member info is allowed   |
| applyMemberFriend      | Integer                                                          | Whether adding friends via group is allowed |
| notificationUpdateTime | long                                                          | Group notice update time           |
| notificationUserID     | String                                                           | Group notice publisher ID                   |

</TabItem>

<TabItem value="Web">

### GroupItem

| Field Name               | Field Type                                                  | Description                 |
| ---------------------- | --------------------------------------------------------- | -------------------- |
| groupID                | string                                                    | Group ID                |
| groupName              | string                                                    | Group name               |
| notification           | string                                                    | Group notice               |
| introduction           | string                                                    | Group introduction               |
| faceURL                | string                                                    | Group face URL               |
| createTime             | number                                                    | Group creation time           |
| status                 | [GroupStatus](/enum/groupStatus.md)             | Group status               |
| creatorUserID          | string                                                    | Creator ID        |
| groupType              | [GroupType](/enum/groupType.md)                 | Group type               |
| ownerUserID            | string                                                    | Owner ID          |
| memberCount            | number                                                    | Member count           |
| ex                     | string                                                    | Extension field       |
| needVerification       | [GroupVerification](/enum/groupVerification.md) | Join verification         |
| lookMemberInfo         | [AllowType](/enum/allowType.md)                 | Whether viewing member info is allowed（client limit） |
| applyMemberFriend      | [AllowType](/enum/allowType.md)                 | Whether adding friends via group is allowed（client limit） |
| notificationUpdateTime | number                                                    | Group notice update time       |
| notificationUserID     | string                                                    | Group notice publisher ID  |

</TabItem>

<TabItem value="uni-app">

### GroupItem

| Field Name               | Field Type                                                  | Description                 |
| ---------------------- | --------------------------------------------------------- | -------------------- |
| groupID                | string                                                    | Group ID                |
| groupName              | string                                                    | Group name               |
| notification           | string                                                    | Group notice               |
| introduction           | string                                                    | Group introduction               |
| faceURL                | string                                                    | Group face URL               |
| createTime             | number                                                    | Group creation time           |
| status                 | [GroupStatus](/enum/groupStatus.md)             | Group status               |
| creatorUserID          | string                                                    | Creator ID        |
| groupType              | [GroupType](/enum/groupType.md)                 | Group type               |
| ownerUserID            | string                                                    | Owner ID          |
| memberCount            | number                                                    | Member count           |
| ex                     | string                                                    | Extension field       |
| needVerification       | [GroupVerification](/enum/groupVerification.md) | Join verification         |
| lookMemberInfo         | [AllowType](/enum/allowType.md)                 | Whether viewing member info is allowed |
| applyMemberFriend      | [AllowType](/enum/allowType.md)                 | Whether adding friends via group is allowed |
| notificationUpdateTime | number                                                    | Group notice update time       |
| notificationUserID     | string                                                    | Group notice publisher ID  |

</TabItem>


<TabItem value="React-Native">

### GroupItem

| Field Name               | Field Type                                                  | Description                 |
| ---------------------- | --------------------------------------------------------- | -------------------- |
| groupID                | string                                                    | Group ID                |
| groupName              | string                                                    | Group name               |
| notification           | string                                                    | Group notice               |
| introduction           | string                                                    | Group introduction               |
| faceURL                | string                                                    | Group face URL               |
| createTime             | number                                                    | Group creation time           |
| status                 | [GroupStatus](/enum/groupStatus.md)             | Group status               |
| creatorUserID          | string                                                    | Creator ID        |
| groupType              | [GroupType](/enum/groupType.md)                 | Group type               |
| ownerUserID            | string                                                    | Owner ID          |
| memberCount            | number                                                    | Member count           |
| ex                     | string                                                    | Extension field       |
| needVerification       | [GroupVerification](/enum/groupVerification.md) | Join verification         |
| lookMemberInfo         | [AllowType](/enum/allowType.md)                 | Whether viewing member info is allowed |
| applyMemberFriend      | [AllowType](/enum/allowType.md)                 | Whether adding friends via group is allowed |
| notificationUpdateTime | number                                                    | Group notice update time       |
| notificationUserID     | string                                                    | Group notice publisher ID  |

</TabItem>

<TabItem value="Unity">

### GroupInfo 

| Field Name               | Field Type                                                  | Description                                      |
| ---------------------- | --------------------------------------------------------- | ----------------------------------------- |
| GroupID                | string                                                    | Group ID                                 |
| GroupName              | string                                                    | Group name                                    |
| Notification           | string                                                    | Group notice                                    |
| Introduction           | string                                                    | Group introduction                                    |
| FaceURL                | string                                                    | Group face URL                                |
| CreateTime             | int                                                       | Group creation time                                |
| Status                 | [int](/enum/groupStatus.md)                                                       | Group status: 0 normal, 1 banned, 2 dismissed, 3 muted     |
| CreatorUserID          | string                                                    | Creator ID                             |
| GroupType              | [int](/enum/groupType.md)                 | Group type                                    |
| OwnerUserID            | string                                                    | Owner ID                               |
| MemberCount            | int                                                       | Member count                                |
| Ex                     | string                                                    | Extension field                            |
| NeedVerification       | [int](/enum/groupVerification.md) | Join verification                              |
| LookMemberInfo         | [int](/enum/allowType.md)                 | Whether viewing member info is allowed |
| ApplyMemberFriend      | [int](/enum/allowType.md)                                                     | Whether adding friends via group is allowed     |
| NotificationUpdateTime | int                                                       | Group notice update time                            |
| NotificationUserID     | string                                                    | Group notice publisher ID                       |

</TabItem>
</Tabs>
