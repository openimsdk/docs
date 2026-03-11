---
sidebar_position: 2
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# GroupApplicationInfo

## Description

:::info

Group application information.

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

### GroupApplicationInfo

| Field Name      | Field Type                               | Description                                           |
| ------------- | -------------------------------------- | ---------------------------------------------- |
| groupID       | String                                 | Group ID                                          |
| groupName     | String                                 | Group name                                         |
| notification  | String                                 | Group notice                                         |
| introduction  | String                                 | Group introduction                                         |
| groupFaceURL  | String                                 | Group face URL                                     |
| createTime    | int                                    | Application time                                   |
| status        | int                                    | Group status: 0 normal, 1 banned, 2 dismissed, 3 muted         |
| creatorUserID | String                                 | Creator ID                                      |
| groupType     | [int](/enum/groupType.md)    | Group type                                         |
| ownerUserID   | String                                 | Owner ID                                        |
| memberCount   | int                                    | Member count                                     |
| userID        | String                                 | Applicant ID                                  |
| nickname      | String                                 | Applicant nickname                                 |
| userFaceURL   | String                                 | Applicant face URL                                 |
| handleResult  | [int](/enum/handleResult.md) | Handle result                                       |
| reqMsg        | String                                 | Request message                             |
| handledMsg    | String                                 | Handled message                                   |
| reqTime       | int                                    | Application time                                   |
| handleUserID  | String                                 | Handler user ID                              |
| handledTime   | int                                    | Handled time                               |
| ex            | String                                 | Extension field                                       |
| joinSource    | [int](/enum/joinSource.md)   | Join source: 2: invited 3: search 4: QR code |
| inviterUserID | String                                 | Inviter ID                                |

</TabItem>

<TabItem value="iOS">

### OIMGroupApplicationInfo

| Field Name      | Field Type                                                | Description               |
| ------------- | ------------------------------------------------------- | ------------------ |
| groupID       | NSString                                                | Group ID              |
| groupName     | NSString                                                | Group name             |
| notification  | NSString                                                | Group notice             |
| introduction  | NSString                                                | Group introduction             |
| groupFaceURL  | NSString                                                | Group face URL         |
| createTime    | NSInteger                                               | Application time       |
| status        | [GroupStatus](/enum/groupStatus.md)           | Group status             |
| creatorUserID | NSString                                                | Creator ID          |
| groupType     | [GroupType](/enum/groupType.md)               | Group type             |
| ownerUserID   | NSString                                                | Owner ID            |
| memberCount   | NSInteger                                               | Member count         |
| userID        | NSString                                                | Applicant ID      |
| nickname      | NSString                                                | Applicant nickname     |
| userFaceURL   | NSString                                                | Applicant face URL     |
| handleResult  | [OIMApplicationStatus](/enum/handleResult.md) | Handle result           |
| reqMsg        | NSString                                                | Request message |
| handledMsg    | NSString                                                | Handled message       |
| reqTime       | NSInteger                                               | Application time       |
| handleUserID  | NSString                                                | Handler user ID  |
| handledTime   | NSInteger                                               | Handled time   |
| ex            | NSString                                                | Extension field           |
| joinSource    | [OIMJoinType](/enum/joinSource.md)            | Join source           |
| inviterUserID | NSString                                                | Inviter ID    |

</TabItem>

<TabItem value="Android">

### GroupApplicationInfo

| Field Name      | Field Type | Description                                                          |
| ------------- | -------- | ------------------------------------------------------------- |
| groupID       | String   | Group ID                                                         |
| groupName     | String   | Group name                                                        |
| notification  | String   | Group notice                                                        |
| introduction  | String   | Group introduction                                                        |
| groupFaceURL  | String   | Group face URL                                                    |
| createTime    | int      | Application time                                                  |
| status        | int      | [GroupStatus](/enum/groupStatus.md) Group status          |
| creatorUserID | String   | Creator ID                                                     |
| groupType     | int      | [GroupType](/enum/groupType.md) Group type              |
| ownerUserID   | String   | Owner ID                                                       |
| memberCount   | int      | Member count                                                    |
| userID        | String   | Applicant ID                                                 |
| nickname      | String   | Applicant nickname                                                |
| userFaceURL   | String   | Applicant face URL                                                |
| handleResult  | int      | [ApplyhandleResult](/enum/handleResult.md) Handle result |
| reqMsg        | String   | Request message                                            |
| handledMsg    | String   | Handled message                                                  |
| reqTime       | int      | Application time                                                  |
| handleUserID  | String   | Handler user ID                                             |
| handledTime   | int      | Handled time                                              |
| ex            | String   | Extension field                                                      |
| joinSource    | int      | [JoinSource](/enum/joinSource.md) Join source          |
| inviterUserID | String   | Inviter ID                                               |

</TabItem>

<TabItem value="Web">

### GroupApplicationItem

| Field Name      | Field Type                                                   | Description               |
| ------------- | ---------------------------------------------------------- | ------------------ |
| groupID       | string                                                     | Group ID              |
| groupName     | string                                                     | Group name             |
| notification  | string                                                     | Group notice             |
| introduction  | string                                                     | Group introduction             |
| groupFaceURL  | string                                                     | Group face URL         |
| createTime    | number                                                     | Application time       |
| status        | [GroupStatus](/enum/groupStatus.md)              | Group status             |
| creatorUserID | string                                                     | Creator ID          |
| groupType     | [GroupType](/enum/groupType.md)                  | Group type             |
| ownerUserID   | string                                                     | Owner ID            |
| memberCount   | number                                                     | Member count         |
| userID        | string                                                     | Applicant ID      |
| nickname      | string                                                     | Applicant nickname     |
| userFaceURL   | string                                                     | Applicant face URL     |
| handleResult  | [ApplicationHandleResult](/enum/handleResult.md) | Handle result           |
| reqMsg        | string                                                     | Request message |
| handledMsg    | string                                                     | Handled message       |
| reqTime       | number                                                     | Application time       |
| handleUserID  | string                                                     | Handler user ID  |
| handledTime   | number                                                     | Handled time   |
| ex            | string                                                     | Extension field           |
| joinSource    | [JoinSource](/enum/joinSource.md)                | Join source           |
| inviterUserID | string                                                     | Inviter ID    |

</TabItem>

<TabItem value="uni-app">

### GroupApplicationItem

| Field Name      | Field Type                                                   | Description               |
| ------------- | ---------------------------------------------------------- | ------------------ |
| groupID       | string                                                     | Group ID              |
| groupName     | string                                                     | Group name             |
| notification  | string                                                     | Group notice             |
| introduction  | string                                                     | Group introduction             |
| groupFaceURL  | string                                                     | Group face URL         |
| createTime    | number                                                     | Application time       |
| status        | [GroupStatus](/enum/groupStatus.md)              | Group status             |
| creatorUserID | string                                                     | Creator ID          |
| groupType     | [GroupType](/enum/groupType.md)                  | Group type             |
| ownerUserID   | string                                                     | Owner ID            |
| memberCount   | number                                                     | Member count         |
| userID        | string                                                     | Applicant ID      |
| nickname      | string                                                     | Applicant nickname     |
| userFaceURL   | string                                                     | Applicant face URL     |
| handleResult  | [ApplicationHandleResult](/enum/handleResult.md) | Handle result           |
| reqMsg        | string                                                     | Request message |
| handledMsg    | string                                                     | Handled message       |
| reqTime       | number                                                     | Application time       |
| handleUserID  | string                                                     | Handler user ID  |
| handledTime   | number                                                     | Handled time   |
| ex            | string                                                     | Extension field           |
| joinSource    | [JoinSource](/enum/joinSource.md)                | Join source           |
| inviterUserID | string                                                     | Inviter ID    |

</TabItem>



<TabItem value="React-Native">

### GroupApplicationItem

| Field Name      | Field Type                                                   | Description               |
| ------------- | ---------------------------------------------------------- | ------------------ |
| groupID       | string                                                     | Group ID              |
| groupName     | string                                                     | Group name             |
| notification  | string                                                     | Group notice             |
| introduction  | string                                                     | Group introduction             |
| groupFaceURL  | string                                                     | Group face URL         |
| createTime    | number                                                     | Application time       |
| status        | [GroupStatus](/enum/groupStatus.md)              | Group status             |
| creatorUserID | string                                                     | Creator ID          |
| groupType     | [GroupType](/enum/groupType.md)                  | Group type             |
| ownerUserID   | string                                                     | Owner ID            |
| memberCount   | number                                                     | Member count         |
| userID        | string                                                     | Applicant ID      |
| nickname      | string                                                     | Applicant nickname     |
| userFaceURL   | string                                                     | Applicant face URL     |
| handleResult  | [ApplicationHandleResult](/enum/handleResult.md) | Handle result           |
| reqMsg        | string                                                     | Request message |
| handledMsg    | string                                                     | Handled message       |
| reqTime       | number                                                     | Application time       |
| handleUserID  | string                                                     | Handler user ID  |
| handledTime   | number                                                     | Handled time   |
| ex            | string                                                     | Extension field           |
| joinSource    | [JoinSource](/enum/joinSource.md)                | Join source           |
| inviterUserID | string                                                     | Inviter ID    |

</TabItem>

<TabItem value="Unity">

### GroupApplicationInfo

| Field Name      | Field Type                               | Description                                           |
| ------------- | -------------------------------------- | ---------------------------------------------- |
| GroupID       | string                                 | Group ID                                          |
| GroupName     | string                                 | Group name                                         |
| Notification  | string                                 | Group notice                                         |
| Introduction  | string                                 | Group introduction                                         |
| GroupFaceURL  | string                                 | Group face URL                                     |
| CreateTime    | int                                    | Application time                                   |
| Status        | int                                    | Group status: 0 normal, 1 banned, 2 dismissed, 3 muted         |
| CreatorUserID | string                                 | Creator ID                                      |
| GroupType     | [int](/enum/groupType.md)    | Group type                                         |
| OwnerUserID   | string                                 | Owner ID                                        |
| MemberCount   | int                                    | Member count                                     |
| UserID        | string                                 | Applicant ID                                  |
| Nickname      | string                                 | Applicant nickname                                 |
| UserFaceURL   | string                                 | Applicant face URL                                 |
| HandleResult  | [int](/enum/handleResult.md) | Handle result                                       |
| ReqMsg        | string                                 | Request message                             |
| HandledMsg    | string                                 | Handled message                                   |
| ReqTime       | int                                    | Application time                                   |
| HandleUserID  | string                                 | Handler user ID                              |
| HandledTime   | int                                    | Handled time                               |
| Ex            | string                                 | Extension field                                       |
| JoinSource    | [int](/enum/joinSource.md)   | Join source 2: invited 3: search  4: QR code |
| InviterUserID | string                                 | Inviter ID                                |

</TabItem>
</Tabs>
