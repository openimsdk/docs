---
sidebar_position: 3
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# PublicInfo

## Description

:::info

User public basic information.

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

### PublicUserInfo

| Field Name | Field Type | Description                 |
| -------- | -------- | --------------------------- |
| userID   | String   | User ID                     |
| nickname | String   | Nickname                    |
| faceURL  | String   | Face URL                    |
| ex       | String   | Extension field             |

</TabItem>

<TabItem value="iOS">

### OIMPublicInfo

| Field Name | Field Type | Description                 |
| -------- | -------- | --------------------------- |
| userID   | NSString | User ID                     |
| nickname | NSString | Nickname                    |
| faceURL  | NSString | Face URL                    |
| ex       | NSString | Extension field             |

</TabItem>

<TabItem value="Android">

### PublicUserInfo

| Field Name | Field Type | Description                 |
| -------- | -------- | --------------------------- |
| userID   | String   | User ID                     |
| nickname | String   | Nickname                    |
| faceURL  | String   | Face URL                    |
| ex       | String   | Extension field             |

</TabItem>

<TabItem value="Web">

### PublicUserInfo

| Field Name | Field Type | Description                 |
| -------- | -------- | --------------------------- |
| userID   | string   | User ID                     |
| nickname | string   | Nickname                    |
| faceURL  | string   | Face URL                    |
| ex       | string   | Extension field             |

</TabItem>

<TabItem value="uni-app">

### PublicUserInfo

| Field Name | Field Type | Description                 |
| -------- | -------- | --------------------------- |
| userID   | string   | User ID                     |
| nickname | string   | Nickname                    |
| faceURL  | string   | Face URL                    |
| ex       | string   | Extension field             |

</TabItem>

<TabItem value="React-Native">

### PublicUserInfo

| Field Name | Field Type | Description                 |
| -------- | -------- | --------------------------- |
| userID   | string   | User ID                     |
| nickname | string   | Nickname                    |
| faceURL  | string   | Face URL                    |
| ex       | string   | Extension field             |

</TabItem>

<TabItem value="Unity">

### PublicUserInfo

| Field Name | Field Type | Description                 |
| -------- | -------- | --------------------------- |
| UserID   | string   | User ID                     |
| Nickname | string   | Nickname                    |
| FaceURL  | string   | Face URL                    |
| Ex       | string   | Extension field             |
| CreateTime| string  | Creation time               |

</TabItem>
</Tabs>
