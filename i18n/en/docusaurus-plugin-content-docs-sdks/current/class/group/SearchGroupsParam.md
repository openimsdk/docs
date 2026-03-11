---
sidebar_position: 2
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# SearchGroupsParam

## Description

:::info

Search groups parameter

:::

<Tabs
groupId="sdks-language"
values={[
{ label: 'Unity', value: 'Unity', },
]
}>

<TabItem value="Unity">

### SearchGroupsParam

| Field Name               | Field Type                                                  | Description                                      |
| ---------------------- | --------------------------------------------------------- | ----------------------------------------- |
| KeywordList | string[]   |     	Search keywords, currently only supports one keyword search, cannot be empty                        |
| IsSearchGroupID | bool  |      	Whether to search group ID by keyword (Note: IsSearchGroupID and IsSearchGroupName cannot both be false), default false                 |
| IsSearchGroupName|bool  | 	Whether to search group name by keyword, default false|

</TabItem>

</Tabs>
