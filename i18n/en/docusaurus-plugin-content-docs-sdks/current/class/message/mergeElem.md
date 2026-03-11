---
sidebar_position: 2
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# MergeElem

## Description

:::info

Message merge information.

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

### MergeElem

| Field Name     | Field Type                                                 | Description                   |
| ------------ | -------------------------------------------------------- | ---------------------- |
| title        | String                                                   | Title                   |
| abstractList | List<String\>                                            | Abstract text                   |
| multiMessage | List<[Message](/class/message/messageInfo.md)> | Specific selected message list for merging |

</TabItem>

<TabItem value="iOS">

### OIMMergeElem

| Field Name          | Field Type                                                                    | Description               |
| ----------------- | --------------------------------------------------------------------------- | ------------------ |
| title             | NSString                                                                    | Title               |
| abstractList      | NSArray<NSString \*>                                                        | Abstract text               |
| multiMessage      | NSArray< [OIMMessageInfo](/class/message/messageInfo.md) \* >     | Specific selected message list for merging |

</TabItem>

<TabItem value="Android">

### MergeElem

| Field Name     | Field Type                                                 | Description                   |
| ------------ | -------------------------------------------------------- | ---------------------- |
| title        | String                                                   | Title                   |
| abstractList | List<String\>                                            | Abstract text                   |
| multiMessage | List<[Message](/class/message/messageInfo.md)> | Specific selected message list for merging |

</TabItem>

<TabItem value="Web">

### MergeElem

| Field Name     | Field Type                                                 | Description                   |
| ------------ | -------------------------------------------------------- | ---------------------- |
| title        | string                                                   | Title                   |
| abstractList | string[]                                                 | Abstract list               |
| multiMessage | [MessageItem](/class/message/messageInfo.md)[] | Specific selected message list for merging |

</TabItem>

<TabItem value="uni-app">

### MergeElem

| Field Name     | Field Type                                                 | Description                   |
| ------------ | -------------------------------------------------------- | ---------------------- |
| title        | string                                                   | Title                   |
| abstractList | string[]                                                 | Abstract list               |
| multiMessage | [MessageItem](/class/message/messageInfo.md)[] | Specific selected message list for merging |

</TabItem>

<TabItem value="React-Native">

### MergeElem

| Field Name     | Field Type                                                 | Description                   |
| ------------ | -------------------------------------------------------- | ---------------------- |
| Title        | string                                                   | Title                   |
| AbstractList | string[]                                            | Abstract text                   |
| MultiMessage | [Message](/class/message/messageInfo.md)[] | Specific selected message list for merging |

</TabItem>

<TabItem value="Unity">

### MergeElem

| Field Name     | Field Type                                                 | Description                   |
| ------------ | -------------------------------------------------------- | ---------------------- |
| title        | string                                                   | Title                   |
| abstractList | string[]                                                 | Abstract list               |
| multiMessage | [MessageItem](/class/message/messageInfo.md)[] | Specific selected message list for merging |

</TabItem>


</Tabs>
