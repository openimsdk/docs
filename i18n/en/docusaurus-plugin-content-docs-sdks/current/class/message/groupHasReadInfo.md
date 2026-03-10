---
sidebar_position: 2
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# GroupHasReadInfo

## Description

:::info

Group message read info, only supported by commercial advanced edition.

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

### OIMGroupHasReadInfo

| Field Name        | Field Type      | Description            |
| ----------------- | ------------- | ---------------------- |
| hasReadUserIDList | List<String\> | List of user IDs who have read |
| hasReadCount      | int           | Total number of reads  |
| groupMemberCount  | int           | Number of group members when sending this message |

</TabItem>

<TabItem value="iOS">

### OIMGroupHasReadInfo

| Field Name        | Field Type              | Description            |
| ----------------- | --------------------- | ---------------------- |
| hasReadUserIDList | NSArray <NSString \*> | List of user IDs who have read |
| hasReadCount      | NSInteger             | Total number of reads  |
| groupMemberCount  | NSInteger             | Number of group members when sending this message |

</TabItem>

<TabItem value="Android">

### GroupHasReadInfo

| Field Name        | Field Type      | Description            |
| ----------------- | ------------- | ---------------------- |
| hasReadUserIDList | List<String\> | List of user IDs who have read |
| hasReadCount      | int           | Total number of reads  |
| groupMemberCount  | int           | Number of group members when sending this message |

</TabItem>

<TabItem value="Web">

### GroupHasReadInfo

| Field Name        | Field Type | Description              |
| ----------------- | -------- | ------------------------ |
| hasReadUserIDList | string[] | List of user IDs who have read |
| hasReadCount      | number   | Total number of reads    |
| groupMemberCount  | number   | Number of group members when sending this message |

</TabItem>

<TabItem value="uni-app">

### GroupHasReadInfo

| Field Name        | Field Type | Description              |
| ----------------- | -------- | ------------------------ |
| hasReadUserIDList | string[] | List of user IDs who have read |
| hasReadCount      | number   | Total number of reads    |
| groupMemberCount  | number   | Number of group members when sending this message |

</TabItem>


<TabItem value="React-Native">

### GroupHasReadInfo

| Field Name        | Field Type | Description              |
| ----------------- | -------- | ------------------------ |
| hasReadUserIDList | string[] | List of user IDs who have read |
| hasReadCount      | number   | Total number of reads    |
| groupMemberCount  | number   | Number of group members when sending this message |

</TabItem>

<TabItem value="Unity">

### GroupHasReadInfo 

| Field Name        | Field Type      | Description            |
| ----------------- | ------------- | ---------------------- |
| HasReadUserIDList | string[] | List of user IDs who have read |
| HasReadCount      | int           | Total number of reads  |
| GroupMemberCount  | int           | Number of group members when sending this message |

</TabItem>
</Tabs>
