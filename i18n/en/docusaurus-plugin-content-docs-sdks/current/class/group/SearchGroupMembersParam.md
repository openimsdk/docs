---
sidebar_position: 2
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# SearchGroupMembersParam

## Description

:::info

Search group members parameter

:::

<Tabs
groupId="sdks-language"
values={[
{ label: 'Unity', value: 'Unity', },
]
}>

<TabItem value="Unity">

### SearchGroupMembersParam

| Field Name                 | Field Type  | Description                                      |
| ----------------------  | ---------| ----------------------------------------- |
| GroupID                 | string   |  Group ID                                |
| KeywordList             | string[] |  Search keywords, currently only supports one keyword search, cannot be empty                  |
| IsSearchUserID          | bool     |  Whether to search by UserID using keyword                               |
| IsSearchMemberNickname  | bool     |  Whether to search by nickname using keyword, default false	                               |
| Offset                  | int      |  Offset            |
| Count                   | int      |  Count            |

</TabItem>

</Tabs>
