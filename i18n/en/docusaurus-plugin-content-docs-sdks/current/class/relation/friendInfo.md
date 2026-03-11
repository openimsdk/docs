---
sidebar_position: 5
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# FriendInfo

## Description

:::info

Friend information

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

### FriendInfo

| Field Name     | Field Type | Description             |
| -------------- | -------- | ----------------------- |
| ownerUserID    | String   | Current login user ID   |
| friendUserID   | String   | Friend ID               |
| nickname       | String   | Friend nickname         |
| faceURL        | String   | Face URL                |
| remark         | String   | Friend remark           |
| createTime     | int      | Becoming friend time    |
| addSource      | int      | Way of becoming friend  |
| operatorUserID | String   | Operation user ID       |
| attachedInfo   | String   | Currently unused        |
| ex             | String   | Extension field         |

</TabItem>

<TabItem value="iOS">

### OIMFriendInfo

| Field Name     | Field Type | Description             |
| -------------- | --------- | ----------------------- |
| ownerUserID    | NSString  | Current login user ID   |
| friendUserID   | NSString  | Friend ID               |
| nickname       | NSString  | Friend nickname         |
| faceURL        | NSString  | Face URL                |
| remark         | NSString  | Friend remark           |
| createTime     | NSInteger | Becoming friend time    |
| addSource      | NSInteger | Way of becoming friend  |
| operatorUserID | NSString  | Operation user ID       |
| attachedInfo   | NSString  | Currently unused        |
| ex             | NSString  | Extension field         |

</TabItem>

<TabItem value="Android">

### FriendInfo

| Field Name     | Field Type | Description             |
| -------------- | -------- | ----------------------- |
| ownerUserID    | String   | Current login user ID   |
| friendUserID   | String   | Friend ID               |
| nickname       | String   | Friend nickname         |
| faceURL        | String   | Face URL                |
| remark         | String   | Friend remark           |
| createTime     | String   | Becoming friend time    |
| addSource      | String   | Way of becoming friend  |
| operatorUserID | String   | Operation user ID       |
| attachedInfo   | String   | Currently unused        |
| ex             | String   | Extension field         |

</TabItem>

<TabItem value="Web">

### FriendUserItem

| Field Name     | Field Type | Description             |
| -------------- | -------- | ----------------------- |
| ownerUserID    | string   | Current login user ID   |
| friendUserID   | string   | Friend ID               |
| nickname       | string   | Friend nickname         |
| faceURL        | string   | Face URL                |
| remark         | string   | Friend remark           |
| isPinned       | boolean  | Is pinned friend        |
| createTime     | number   | Becoming friend time    |
| addSource      | number   | Way of becoming friend  |
| operatorUserID | string   | Operation user ID       |
| attachedInfo   | string   | Currently unused        |
| ex             | string   | Extension field         |

</TabItem>

<TabItem value="uni-app">

### FriendUserItem

| Field Name     | Field Type | Description             |
| -------------- | -------- | ----------------------- |
| ownerUserID    | string   | Current login user ID   |
| friendUserID   | string   | Friend ID               |
| nickname       | string   | Friend nickname         |
| faceURL        | string   | Face URL                |
| remark         | string   | Friend remark           |
| isPinned       | boolean  | Is pinned friend        |
| createTime     | number   | Becoming friend time    |
| addSource      | number   | Way of becoming friend  |
| operatorUserID | string   | Operation user ID       |
| attachedInfo   | string   | Currently unused        |
| ex             | string   | Extension field         |

</TabItem>

<TabItem value="React-Native">

### FriendUserItem

| Field Name     | Field Type | Description             |
| -------------- | -------- | ----------------------- |
| ownerUserID    | string   | Current login user ID   |
| friendUserID   | string   | Friend ID               |
| nickname       | string   | Friend nickname         |
| faceURL        | string   | Face URL                |
| remark         | string   | Friend remark           |
| isPinned       | boolean  | Is pinned friend        |
| createTime     | number   | Becoming friend time    |
| addSource      | number   | Way of becoming friend  |
| operatorUserID | string   | Operation user ID       |
| attachedInfo   | string   | Currently unused        |
| ex             | string   | Extension field         |

</TabItem>

<TabItem value="Unity">

### FriendInfo

| Field Name     | Field Type | Description             |
| -------------- | -------- | ----------------------- |
| OwnerUserID    | string   | Current login user ID   |
| FriendUserID   | string   | Friend ID               |
| Nickname       | string   | Friend nickname         |
| FaceURL        | string   | Face URL                |
| Remark         | string   | Friend remark           |
| CreateTime     | int      | Becoming friend time    |
| AddSource      | int      | Way of becoming friend  |
| OperatorUserID | string   | Operation user ID       |
| AttachedInfo   | string   | Currently unused        |
| Ex             | string   | Extension field         |

</TabItem>

</Tabs>
