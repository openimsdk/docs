---
sidebar_position: 5
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# SearchFriendsParam 

## Description

:::info

Search friends parameters

:::

<Tabs
groupId="sdks-language"
values={[
{ label: 'Unity', value: 'Unity', },
]
}>

<TabItem value="Unity">

### SearchFriendsParam

| Field Name       | Field Type | Description             |
| -------------- | -------- | ----------------------- |
| KeywordList    | string[] | Search keywords, currently only supports single keyword search, cannot be empty |
| IsSearchUserID | bool     | Whether to search user ID by keyword |
| IsSearchNickname| bool    | Whether to search nickname by keyword, default false |
| IsSearchRemark | bool     | Whether to search remark by keyword, default false |

</TabItem>

</Tabs>
