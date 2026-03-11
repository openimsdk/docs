---
sidebar_position: 2
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# SearchMessagesParams

## Description

:::info

Parameters for searching messages

:::

<Tabs
groupId="sdks-language"
values={[
{ label: 'Unity', value: 'Unity', },
]
}>

<TabItem value="Unity">

###  SearchMessagesParams

| Field Name       | Field Type | Description         |
| -------------- | -------- | ------------ |
| ConversationID| string   | Conversation ID. If empty, performs a global search |
| KeywordList | string[]   | Search keyword list. Currently only supports single keyword search |
| KeywordListMatchType | int | Keyword matching mode: 1 represents AND, 2 represents OR. Currently unused |
| SenderUserIDList | string[]      | Specifies the list of sender UIDs. Currently unused |
| MessageTypeList| int[]      | Message type list |
| SearchTimePosition | long | Search start time point. Default is 0 which means search from now. UTC timestamp in seconds |
| SearchTimePeriod | long | Past time range from the start time point, in seconds. Default 0 means unlimited range, pass 24x60x60 for past day |
| PageIndex | int   | Current page number, starting at 1. Invalid when conversationID is empty (global search) |
| Count | int      | Count per page. Invalid when conversationID is empty (global search) |

</TabItem>
</Tabs>
