---
sidebar_position: 2
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# GetAdvancedHistoryMessageListParams

## Description

:::info

Parameters for getting advanced history message list

:::

<Tabs
groupId="sdks-language"
values={[
{ label: 'Unity', value: 'Unity', },
]
}>

<TabItem value="Unity">

### GetAdvancedHistoryMessageListParams 

| Field Name       | Field Type | Description         |
| -------------- | -------- | ------------ |
| UserID | string   | User ID     |
| LastMinSeq | long   | Not required for the first page. Required from the second page onwards. Same as [startMsg] |
| GroupID | string | Group ID  |
| ConversationID | string      | Conversation ID         |
| StartClientMsgID | string      | Query [Count] messages starting from this message. The index==length-1 of the acquired list is the latest message, so to get the next page of history, use startMsg=list.first       |
| Count| int      | Count       |

</TabItem>
</Tabs>
