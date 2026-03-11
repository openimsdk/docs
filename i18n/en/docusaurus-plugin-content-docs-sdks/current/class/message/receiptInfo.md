---
sidebar_position: 2
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# ReceiptInfo

## Description

:::info

Single chat message read receipt.

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

### ReadReceiptInfo

| Field Name    | Field Type      | Description        |
| ----------- | ------------- | ----------- |
| userID      | String        | Valid for single chat |
| groupID     | String        | Valid for group chat  |
| msgIDList   | List<String\> | Read message ID list |
| readTime    | int           | Read time    |
| msgFrom     | int           | Message source    |
| contentType | [int](/enum/messageContentType.md)           | Message type    |
| sessionType | [int](/enum/conversationType.md)           | Session type    |

</TabItem>

<TabItem value="iOS">

### OIMReceiptInfo

| Field Name    | Field Type                                                       | Description        |
| ----------- | -------------------------------------------------------------- | ----------- |
| userID      | NSString                                                       | Valid for single chat |
| groupID     | NSString                                                       | Valid for group chat  |
| msgIDList   | NSArray<NSString \*>                                           | Read message ID list |
| readTime    | NSInteger                                                      | Read time    |
| msgFrom     | NSInteger                                                      | Message source    |
| contentType | [OIMMessageContentType](/enum/messageContentType.md) | Message type            |
| sessionType | [OIMConversationType](/enum/conversationType.md)     | Session type            |

</TabItem>

<TabItem value="Android">

### ReadReceiptInfo

| Field Name    | Field Type      | Description        |
| ----------- | ------------- | ----------- |
| userID      | String        | Valid for single chat |
| groupID     | String        | Valid for group chat  |
| msgIDList   | List<String\> | Read message ID list |
| readTime    | int           | Read time    |
| msgFrom     | int           | Message source    |
| contentType | int           | Message type    |
| sessionType | int           | Session type    |

</TabItem>

<TabItem value="Web">

### ReceiptInfo

| Field Name    | Field Type                                             | Description                  |
| ----------- | ---------------------------------------------------- | --------------------- |
| userID      | string                                               | Read user ID |
| groupID     | string                                               | Currently unused |
| msgIDList   | string[]                                             | Read message ID list      |
| readTime    | number                                               | Read time              |
| msgFrom     | number                                               | Message source              |
| contentType | [MessageType](/enum/messageContentType.md) | Message type              |
| sessionType | [SessionType](/enum/conversationType.md)   | Session type              |

</TabItem>

<TabItem value="uni-app">

### ReceiptInfo

| Field Name    | Field Type                                             | Description                  |
| ----------- | ---------------------------------------------------- | --------------------- |
| userID      | string                                               | Read user ID, valid for single chat |
| groupID     | string                                               | Read group ID, valid for group chat |
| msgIDList   | string[]                                             | Read message ID list      |
| readTime    | number                                               | Read time              |
| msgFrom     | number                                               | Message source              |
| contentType | [MessageType](/enum/messageContentType.md) | Message type              |
| sessionType | [SessionType](/enum/conversationType.md)   | Session type              |

</TabItem>

<TabItem value="React-Native">

### ReceiptInfo

| Field Name    | Field Type                                             | Description                  |
| ----------- | ---------------------------------------------------- | --------------------- |
| userID      | string                                               | Read user ID, valid for single chat |
| groupID     | string                                               | Read group ID, valid for group chat |
| msgIDList   | string[]                                             | Read message ID list      |
| readTime    | number                                               | Read time              |
| msgFrom     | number                                               | Message source              |
| contentType | [MessageType](/enum/messageContentType.md) | Message type              |
| sessionType | [SessionType](/enum/conversationType.md)   | Session type              |

</TabItem>

<TabItem value="Unity">

### MessageReceipt

| Field Name    | Field Type      | Description        |
| ----------- | ------------- | ----------- |
| UserID      | string        | Valid for single chat |
| GroupID     | string        | Valid for group chat  |
| MsgIDList   | string[] | Read message ID list |
| ReadTime    | int           | Read time    |
| MsgFrom     | int           | Message source    |
| ContentType | [int](/enum/messageContentType.md)           | Message type    |
| SessionType | [int](/enum/conversationType.md)           | Session type    |

</TabItem>
</Tabs>
