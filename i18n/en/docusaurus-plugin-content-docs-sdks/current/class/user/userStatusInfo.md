---
sidebar_position: 1
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# UserStatusInfo

## Description

:::info

User online status details

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

### UserStatusInfo

| Field Name  | Field Type | Description |
| ----------- | -------- | ----------- |
| userID      | String   | User ID     |
| status      | Int      | 0 means offline, 1 means online        |
| platformIDs | List\<[int](/enum/platform.md)\>     | List of platform IDs where the user is online    |

</TabItem>

<TabItem value="iOS">

### OIMUserStatusInfo

| Field Name  | Field Type | Description |
| ----------- | --------- | ----------- |
| userID      | NSString  | User ID     |
| status      | NSInteger | 0 means offline, 1 means online        |
| platformIDs | NSArray\<[OIMPlatform](/enum/platform.md)\>   | List of platform IDs where the user is online     |

</TabItem>

<TabItem value="Android">

### UsersOnlineStatus

| Field Name  | Field Type | Description |
| ----------- | -------- | ----------- |
| userID      | String   | User ID     |
| status      | Int      | 0 means offline, 1 means online        |
| platformIDs | List     | Platform IDs |

</TabItem>

<TabItem value="Web">

### UserOnlineState

| Field Name  | Field Type | Description |
| ----------- | ---------- | ---------------------- |
| platformIDs | Platform[] | List of platforms where the user is online     |
| status      | number     | 0 means offline, 1 means online |
| userID      | string     | User ID                |

</TabItem>

<TabItem value="uni-app">

### UserOnlineState

| Field Name  | Field Type | Description |
| ----------- | ---------- | ---------------------- |
| platformIDs | Platform[] | List of platforms where the user is online     |
| status      | number     | 0 means offline, 1 means online |
| userID      | string     | User ID                |

</TabItem>


<TabItem value="React-Native">

### UserOnlineState

| Field Name  | Field Type | Description |
| ----------- | ---------- | ---------------------- |
| platformIDs | Platform[] | List of platforms where the user is online     |
| status      | number     | 0 means offline, 1 means online |
| userID      | string     | User ID                |

</TabItem>

<TabItem value="Unity">

### OnlineStatus 

| Field Name  | Field Type | Description |
| ----------- | --------- | ----------- |
| UserID      | string    | User ID     |
| Status      | int       | 0 means offline, 1 means online        |
| PlatformIDs | int[]     | List of platform IDs where the user is online     |

</TabItem>
</Tabs>
