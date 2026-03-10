---
sidebar_position: 6
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# BlackInfo

## Description

:::info

Blocklist information

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

### BlacklistInfo

| Field Name     | Field Type | Description             |
| -------------- | -------- | ----------------------- |
| ownerUserID    | String   | Current login user ID   |
| blockUserID    | String   | Blocked user ID         |
| nickname       | String   | User nickname           |
| faceURL        | String   | User face URL           |
| createTime     | int      | Block time              |
| addSource      | int      | Add source              |
| operatorUserID | String   | User ID who performed block |
| attachedInfo   | String   | Currently not used      |
| ex             | String   | Extension field         |

</TabItem>

<TabItem value="iOS">

### OIMBlackInfo

| Field Name     | Field Type | Description             |
| -------------- | --------- | ----------------------- |
| ownerUserID    | NSString  | Current login user ID   |
| blockUserID    | NSString  | Blocked user ID         |
| nickname       | NSString  | User nickname           |
| faceURL        | NSString  | User face URL           |
| createTime     | NSInteger | Block time              |
| addSource      | addSource | Add source              |
| operatorUserID | NSString  | User ID who performed block |
| attachedInfo   | NSString  | Currently not used      |
| ex             | NSString  | Extension field         |

</TabItem>

<TabItem value="Android">

### BlacklistInfo

| Field Name     | Field Type | Description             |
| -------------- | -------- | ----------------------- |
| userID         | String   | Blocked user ID         |
| nickname       | String   | User nickname           |
| faceURL        | String   | User face URL           |
| createTime     | String   | Block time              |
| addSource      | String   | Add source              |
| operatorUserID | String   | User ID who performed block |
| attachedInfo   | String   | Currently not used      |
| ex             | String   | Extension field         |

</TabItem>

<TabItem value="Web">

### BlackUserItem

| Field Name     | Field Type | Description             |
| -------------- | -------- | ----------------------- |
| ownerUserID    | string   | Current login user ID   |
| blockUserID    | string   | Blocked user ID         |
| nickname       | string   | User nickname           |
| faceURL        | string   | User face URL           |
| createTime     | number   | Block time              |
| addSource      | number   | Add source              |
| operatorUserID | string   | User ID who performed block |
| attachedInfo   | string   | Currently not used      |
| ex             | string   | Extension field         |

</TabItem>

<TabItem value="uni-app">

### BlackUserItem

| Field Name     | Field Type | Description             |
| -------------- | -------- | ----------------------- |
| ownerUserID    | string   | Current login user ID   |
| blockUserID    | string   | Blocked user ID         |
| nickname       | string   | User nickname           |
| faceURL        | string   | User face URL           |
| createTime     | number   | Block time              |
| addSource      | number   | Add source              |
| operatorUserID | string   | User ID who performed block |
| attachedInfo   | string   | Currently not used      |
| ex             | string   | Extension field         |

</TabItem>

<TabItem value="React-Native">

### BlackUserItem

| Field Name     | Field Type | Description             |
| -------------- | -------- | ----------------------- |
| ownerUserID    | string   | Current login user ID   |
| blockUserID    | string   | Blocked user ID         |
| nickname       | string   | User nickname           |
| faceURL        | string   | User face URL           |
| createTime     | number   | Block time              |
| addSource      | number   | Add source              |
| operatorUserID | string   | User ID who performed block |
| attachedInfo   | string   | Currently not used      |
| ex             | string   | Extension field         |

</TabItem>

<TabItem value="Unity">

### BlackInfo

| Field Name     | Field Type | Description             |
| -------------- | -------- | ----------------------- |
| OwnerUserID    | string   | Current login user ID   |
| BlockUserID    | string   | Blocked user ID         |
| Nickname       | string   | User nickname           |
| FaceURL        | string   | User face URL           |
| CreateTime     | int      | Block time              |
| AddSource      | int      | Add source              |
| OperatorUserID | string   | User ID who performed block |
| AttachedInfo   | string   | Currently not used      |
| Ex             | string   | Extension field         |

</TabItem>

</Tabs>
