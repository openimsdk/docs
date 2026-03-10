---
sidebar_position: 2
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# SetGroupMemberInfo

## Description

:::info

Set group member info

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

### SetGroupMemberInfo

| Field Name       | Field Type                             | Description                                               |
| -------------- | ------------------------------------ | -------------------------------------------------- |
| groupID        | String                               | Group ID                                              |
| userID         | String                               | Group member ID                                          |
| nickname       | String                               | Group member nickname                                         |
| faceURL        | String                               | Group member face URL                                         |
| roleLevel      | int                                  | Group member role: 1 for regular member; 2 for owner; 3 for administrator            |
| ex             | String                               | Extension info                                           |

</TabItem>

<TabItem value="iOS">

### OIMSetGroupMemberInfo

| Field Name       | Field Type                                           | Description              |
| -------------- | -------------------------------------------------- | ----------------- |
| groupID        | NSString                                           | Group ID             |
| userID         | NSString                                           | Group member ID         |
| nickname       | NSString                                           | Group member nickname        |
| faceURL        | NSString                                           | Group member face URL        |
| roleLevel      | [OIMGroupMemberRole](/enum/roleLevel.md) | Group member role        |
| ex             | NSString                                           |  Extension info                 |

</TabItem>

<TabItem value="Android">

### SetGroupMemberInfo

| Field Name       | Field Type                                           | Description              |
| -------------- | -------------------------------------------------- | ----------------- |
| groupID        | String                                           | Group ID             |
| userID         | String                                           | Group member ID         |
| nickname       | String                                           | Group member nickname        |
| faceURL        | String                                           | Group member face URL        |
| roleLevel      | Integer                                          | Group member role: 1 for regular member; 2 for owner; 3 for administrator      |
| ex             | String                                           |  Extension info                 |

</TabItem>

<TabItem value="Unity">

### SetGroupMemberInfo

| Field Name               | Field Type                                                  | Description                                      |
| ---------------------- | --------------------------------------------------------- | ----------------------------------------- |
| GroupID | string   | Group ID                                 |
| UserID | string   | User ID                                 |
| Nickname | string | Group member nickname                                 |
| FaceURL | string | Group member face URL                                 |
| RoleLevel | int | Group member role                                 |
| Ex | string | Group member extension info                              |

</TabItem>

</Tabs>
