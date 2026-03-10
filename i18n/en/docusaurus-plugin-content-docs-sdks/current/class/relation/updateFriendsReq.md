---
sidebar_position: 6
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# UpdateFriendsReq

## Description

:::info

Update friend related attributes

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

### UpdateFriendsReq

| Field Name        | Field Type                                         | Description                                                           |
| ----------------- | -------------------------------------------------- | --------------------------------------------------------------------- |
| remark            | String                                             | Remark                                                                |
| isPinned          | bool                                               | Whether it is pinned                                                  |
| friendUserIDs     | List< String\>                                     | Friend User ID list                                                   |
| ex                | String                                             | Extension field                                                       |

</TabItem>

<TabItem value="iOS">

### OIMUpdateFriendsReq

| Field Name        | Field Type                                         | Description                                                           |
| ----------------- | -------------------------------------------------- | --------------------------------------------------------------------- |
| remark            | NSString                                           | Remark                                                                |
| isPinned          | BOOL                                               | Whether it is pinned                                                  |
| friendUserIDs     | NSArray< String\>                                  | Friend User ID list                                                   |
| ex                | NSString                                           | Extension field                                                       |

</TabItem>

<TabItem value="Android">

### UpdateFriendsReq

| Field Name        | Field Type                                         | Description                                                           |
| ----------------- | -------------------------------------------------- | --------------------------------------------------------------------- |
| remark            | String                                             | Remark                                                                |
| isPinned          | Boolean                                            | Whether it is pinned                                                  |
| friendUserIDs     | String[]                                           | Friend User ID list                                                   |
| ex                | String                                             | Extension field                                                       |


</TabItem>

<TabItem value="Unity">

### UpdateFriendsReq

| Field Name        | Field Type                                         | Description                                                           |
| ----------------- | -------------------------------------------------- | --------------------------------------------------------------------- |
| Remark            | StringValue                                        | Remark                                                                |
| IsPinned          | BoolValue                                          | Whether it is pinned                                                  |
| FriendUserIDs     | String[]                                           | Friend User ID list                                                   |
| Ex                | StringValue                                        | Extension field                                                       |

</TabItem>

</Tabs>
