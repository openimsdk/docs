---
sidebar_position: 2
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# QuoteElem

## Description

:::info

Quote information.

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

### QuoteElem

| Field Name     | Field Type                                           | Description           |
| ------------ | -------------------------------------------------- | -------------- |
| text         | String                                             | Replied message content |
| quoteMessage | [Message](/class/message/messageInfo.md) | Quoted message   |

</TabItem>

<TabItem value="iOS">

### OIMQuoteElem

| Field Name          | Field Type                                                                    | Description           |
| ----------------- | --------------------------------------------------------------------------- | -------------- |
| text              | NSString                                                                    | Replied message content |
| quoteMessage      | [OIMMessageInfo](/class/message/messageInfo.md)                   | Quoted message   |
| messageEntityList | - | Currently unused               |

</TabItem>

<TabItem value="Android">

### QuoteElem

| Field Name     | Field Type                                           | Description           |
| ------------ | -------------------------------------------------- | -------------- |
| text         | String                                             | Replied message content |
| quoteMessage | [Message](/class/message/messageInfo.md) | Quoted message   |

</TabItem>

<TabItem value="Web">

### QuoteElem

| Field Name          | Field Type                                                     | Description           |
| ----------------- | ------------------------------------------------------------ | -------------- |
| text              | string                                                       | Replied message content |
| quoteMessage      | [MessageItem](/class/message/messageInfo.md)       | Quoted message   |
| messageEntityList | - | Currently unused               |

</TabItem>

<TabItem value="uni-app">

### QuoteElem

| Field Name          | Field Type                                                     | Description           |
| ----------------- | ------------------------------------------------------------ | -------------- |
| text              | string                                                       | Replied message content |
| quoteMessage      | [MessageItem](/class/message/messageInfo.md)       | Quoted message   |
| messageEntityList | - | Currently unused               |

</TabItem>

<TabItem value="React-Native">

### QuoteElem

| Field Name          | Field Type                                                     | Description           |
| ----------------- | ------------------------------------------------------------ | -------------- |
| text              | string                                                       | Replied message content |
| quoteMessage      | [MessageItem](/class/message/messageInfo.md)       | Quoted message   |
| messageEntityList | - | Currently unused               |

</TabItem>

<TabItem value="Unity">

### QuoteElem

| Field Name     | Field Type                                           | Description           |
| ------------ | -------------------------------------------------- | -------------- |
| Text         | string                                             | Replied message content |
| QuoteMessage | [Message](/class/message/messageInfo.md) | Quoted message   |

</TabItem>
</Tabs>
