---
sidebar_position: 0
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# MessageInfo

## Description

:::info

Message structure, specific type refers to [contentType](/enum/messageContentType.md) and parse corresponding Elem fields.

:::

:::caution Note

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

### Message

| Field Name           | Field Type                                                       | Description                     |
| -------------------- | ---------------------------------------------------------------- | ------------------------------- |
| clientMsgID          | String                                                           | Client message unique ID, recommended to use |
| serverMsgID          | String                                                           | Server message unique ID, used internally |
| createTime           | int                                                              | Creation time                   |
| sendTime             | int                                                              | Send time                       |
| sessionType          | [int](/enum/conversationType.md)                       | Session type                    |
| sendID               | String                                                           | Sender ID                       |
| recvID               | String                                                           | Receiver ID, no need to pay attention to in group chat session |
| msgFrom              | int                                                              | Internal field                  |
| contentType          | [int](/enum/messageContentType.md)                     | Message type                    |
| platformID           | int                                                              | Platform ID                     |
| senderNickname       | String                                                           | Sender nickname                 |
| senderFaceUrl        | String                                                           | Sender face URL                 |
| groupID              | String                                                           | Group ID                        |
| content              | String                                                           | Internal field                  |
| seq                  | int                                                              | Message seq                     |
| isRead               | bool                                                             | Whether read                    |
| status               | [int](/enum/messageStatus.md)                          | Message send status             |
| attachedInfo         | String                                                           | Attached info                   |
| ex                   | String                                                           | Extension info                  |
| offlinePush          | [OfflinePushInfo](/class/message/offlinePushInfo.md)   | Offline push details            |
| pictureElem          | [PictureElem](/class/message/pictureElem.md)           | Picture                         |
| soundElem            | [SoundElem](/class/message/soundElem.md)               | Sound                           |
| videoElem            | [VideoElem](/class/message/videoElem.md)               | Video                           |
| fileElem             | [FileElem](/class/message/fileElem.md)                 | File                            |
| mergeElem            | [MergeElem](/class/message/mergeElem.md)               | Merge                           |
| atElem               | [AtElem](/class/message/atElem.md)                     | @ info                          |
| locationElem         | [LocationElem](/class/message/locationElem.md)         | Location                        |
| quoteElem            | [QuoteElem](/class/message/quoteElem.md)               | Quote                           |
| customElem           | [CustomElem](/class/message/customElem.md)             | Custom                          |
| notificationElem     | [NotificationElem](/class/message/notificationElem.md) | Notification details            |
| faceElem             | [FaceElem](/class/message/faceElem.md)                 | Custom emoticon                 |
| attachedInfoElem     | [AttachedInfoElem](/class/message/attachedInfoElem.md) | Attached info                   |
| hasReadTime          | int                                                              | Single chat read timestamp      |
| isReact              | bool                                                             | Currently unused                |
| isExternalExtensions | bool                                                             | Currently unused                |
| textElem             | [TextElem](/class/message/textElem.md)                 | Text content                    |
| cardElem             | [CardElem](/class/message/cardElem.md)                 | Card content                    |
| advancedTextElem     | -                                                                | Currently unused                |
| typingElem           | [TypingElem](/class/message/typingElem.md)             | Typing details                  |

</TabItem>

<TabItem value="iOS">

### OIMMessageInfo

| Field Name           | Field Type                                                       | Description                     |
| -------------------- | ---------------------------------------------------------------- | ------------------------------- |
| clientMsgID          | NSString                                                         | Client message unique ID, recommended to use |
| serverMsgID          | NSString                                                         | Server message unique ID, used internally |
| createTime           | NSInteger                                                        | Creation time                   |
| sendTime             | NSInteger                                                        | Send time                       |
| sessionType          | [OIMConversationType](/enum/conversationType.md)       | Session type                    |
| sendID               | NSString                                                         | Sender ID                       |
| recvID               | NSString                                                         | Receiver ID, no need to pay attention to in group chat session |
| msgFrom              | NSInteger                                                        | Internal field                  |
| contentType          | [OIMMessageContentType](/enum/messageContentType.md)   | Message type                    |
| platformID           | NSInteger                                                        | Platform ID                     |
| senderNickname       | NSString                                                         | Sender nickname                 |
| senderFaceUrl        | NSString                                                         | Sender face URL                 |
| groupID              | NSString                                                         | Group ID                        |
| content              | NSString                                                         | Internal field                  |
| seq                  | NSInteger                                                        | Message seq                     |
| isRead               | BOOL                                                             | Whether read                    |
| status               | [OIMMessageStatus](/enum/messageStatus.md)             | Message send status             |
| attachedInfo         | NSString                                                         | Attached info                   |
| ex                   | NSString                                                         | Extension info                  |
| offlinePush          | [OfflinePushInfo](/class/message/offlinePushInfo.md)   | Offline push details            |
| pictureElem          | [PictureElem](/class/message/pictureElem.md)           | Picture                         |
| soundElem            | [SoundElem](/class/message/soundElem.md)               | Sound                           |
| videoElem            | [VideoElem](/class/message/videoElem.md)               | Video                           |
| fileElem             | [FileElem](/class/message/fileElem.md)                 | File                            |
| mergeElem            | [MergeElem](/class/message/mergeElem.md)               | Merge                           |
| atElem               | [AtElem](/class/message/atElem.md)                     | @ info                          |
| locationElem         | [LocationElem](/class/message/locationElem.md)         | Location                        |
| quoteElem            | [QuoteElem](/class/message/quoteElem.md)               | Quote                           |
| customElem           | [CustomElem](/class/message/customElem.md)             | Custom                          |
| notificationElem     | [NotificationElem](/class/message/notificationElem.md) | Notification details            |
| faceElem             | [FaceElem](/class/message/faceElem.md)                 | Custom emoticon                 |
| attachedInfoElem     | [AttachedInfoElem](/class/message/attachedInfoElem.md) | Attached info                   |
| textElem             | [TextElem](/class/message/textElem.md)                 | Text content                    |
| cardElem             | [CardElem](/class/message/cardElem.md)                 | Card content                    |
| advancedTextElem     | -                                                                | Currently unused                |
| typingElem           | [TypingElem](/class/message/typingElem.md)             | Typing details                  |
| hasReadTime          | NSInteger                                                        | Single chat read timestamp      |
| isReact              | BOOL                                                             | Currently unused                |
| isExternalExtensions | BOOL                                                             | Currently unused                |

</TabItem>

<TabItem value="Android">

### Message

| Field Name           | Field Type                                                       | Description                                                      |
| -------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| clientMsgID          | String                                                           | Client message unique ID, recommended to use                     |
| serverMsgID          | String                                                           | Server message unique ID, used internally                        |
| createTime           | int                                                              | Creation time                                                    |
| sendTime             | int                                                              | Send time                                                        |
| sessionType          | int                                                              | Session type [ConversationType](/enum/conversationType.md)       |
| sendID               | String                                                           | Sender ID                                                        |
| recvID               | String                                                           | Receiver ID, no need to pay attention to in group chat session   |
| msgFrom              | int                                                              | Internal field                                                   |
| contentType          | int                                                              | Message type [MessageType](/enum/messageContentType.md)          |
| platformID           | int                                                              | Platform ID                                                      |
| senderNickname       | String                                                           | Sender nickname                                                  |
| senderFaceUrl        | String                                                           | Sender face URL                                                  |
| groupID              | String                                                           | Group ID                                                         |
| content              | String                                                           | Internal field                                                   |
| seq                  | int                                                              | Message seq                                                      |
| isRead               | bool                                                             | Whether read                                                     |
| status               | int                                                              | Message send status [MessageStatus](/enum/messageStatus.md)      |
| attachedInfo         | String                                                           | Internal field                                                   |
| ex                   | String                                                           | Extension info                                                   |
| offlinePush          | [OfflinePushInfo](/class/message/offlinePushInfo.md)   | Offline push details                                             |
| pictureElem          | [PictureElem](/class/message/pictureElem.md)           | Picture                                                          |
| soundElem            | [SoundElem](/class/message/soundElem.md)               | Sound                                                            |
| videoElem            | [VideoElem](/class/message/videoElem.md)               | Video                                                            |
| fileElem             | [FileElem](/class/message/fileElem.md)                 | File                                                             |
| mergeElem            | [MergeElem](/class/message/mergeElem.md)               | Merge                                                            |
| atElem               | [AtElem](/class/message/atElem.md)                     | @ info                                                           |
| locationElem         | [LocationElem](/class/message/locationElem.md)         | Location                                                         |
| quoteElem            | [QuoteElem](/class/message/quoteElem.md)               | Quote                                                            |
| customElem           | [CustomElem](/class/message/customElem.md)             | Custom                                                           |
| notificationElem     | [NotificationElem](/class/message/notificationElem.md) | Notification details                                              |
| faceElem             | [FaceElem](/class/message/faceElem.md)                 | Custom emoticon                                                  |
| attachedInfoElem     | [AttachedInfoElem](/class/message/attachedInfoElem.md) | Attached info                                                    |
| hasReadTime          | int                                                              | Single chat read timestamp                                             |
| isReact              | boolean                                                          | Currently unused                                                         |
| isExternalExtensions | boolean                                                          | Currently unused                                                         |
| textElem             | [TextElem](/class/message/textElem.md)                 | Text content                                                     |
| cardElem             | [CardElem](/class/message/cardElem.md)                 | Card content                                                     |
| advancedTextElem     | -                                                                | Currently unused                                                 |
| typingElem           | [TypingElem](/class/message/typingElem.md)             | Typing details                                                   |
| ext                  | String                                                           | Android extension info                                           |

</TabItem>

<TabItem value="Web">

### MessageItem

| Field Name           | Field Type                                                       | Description                     |
| -------------------- | ---------------------------------------------------------------- | ------------------------------- |
| clientMsgID          | string                                                           | Client message unique ID, recommended to use |
| serverMsgID          | string                                                           | Server message unique ID, used internally |
| createTime           | number                                                           | Creation time                   |
| sendTime             | number                                                           | Send time                       |
| sessionType          | [SessionType](/enum/conversationType.md)               | Session type                    |
| sendID               | string                                                           | Sender ID                       |
| recvID               | string                                                           | Receiver ID, no need to pay attention to in group chat session |
| msgFrom              | number                                                           | Internal field                  |
| contentType          | [MessageType](/enum/messageContentType.md)             | Message type                    |
| platformID           | [Platform](/enum/platform.md)                         | Platform ID                     |
| senderNickname       | string                                                           | Sender nickname                 |
| senderFaceUrl        | string                                                           | Sender face URL                 |
| groupID              | string                                                           | Group ID                        |
| content              | string                                                           | Internal field                  |
| seq                  | number                                                           | Message seq                     |
| isRead               | boolean                                                          | Whether read                    |
| status               | [MessageStatus](/enum/messageStatus.md)                | Message send status             |
| attachedInfo         | string                                                           | Internal field                  |
| ex                   | string                                                           | Extension info                  |
| offlinePush          | [OfflinePushInfo](/class/message/offlinePushInfo.md)   | Offline push details            |
| pictureElem          | [PictureElem](/class/message/pictureElem.md)           | Picture message details         |
| soundElem            | [SoundElem](/class/message/soundElem.md)               | Sound message details           |
| videoElem            | [VideoElem](/class/message/videoElem.md)               | Video message details           |
| fileElem             | [FileElem](/class/message/fileElem.md)                 | File message details            |
| mergeElem            | [MergeElem](/class/message/mergeElem.md)               | Merge message details           |
| atTextElem           | [atTextElem](/class/message/atElem.md)                 | @ message details               |
| locationElem         | [LocationElem](/class/message/locationElem.md)         | Location message details        |
| quoteElem            | [QuoteElem](/class/message/quoteElem.md)               | Quote message details           |
| customElem           | [CustomElem](/class/message/customElem.md)             | Custom message details          |
| notificationElem     | [NotificationElem](/class/message/notificationElem.md) | Notification message details    |
| faceElem             | [FaceElem](/class/message/faceElem.md)                 | Custom emoticon details         |
| attachedInfoElem     | [AttachedInfoElem](/class/message/attachedInfoElem.md) | Attached info details           |
| textElem             | [TextElem](/class/message/textElem.md)                 | Text content details            |
| cardElem             | [CardElem](/class/message/cardElem.md)                 | Card content details            |
| advancedTextElem     | -                                                                | Currently unused                |
| typingElem           | [TypingElem](/class/message/typingElem.md)             | Typing details                  |
| hasReadTime          | number                                                           | Single chat read timestamp      |
| isReact              | boolean                                                          | Currently unused                |
| isExternalExtensions | boolean                                                          | Currently unused                |

</TabItem>

<TabItem value="uni-app">

### MessageItem

| Field Name           | Field Type                                                       | Description                     |
| -------------------- | ---------------------------------------------------------------- | ------------------------------- |
| clientMsgID          | string                                                           | Client message unique ID, recommended to use |
| serverMsgID          | string                                                           | Server message unique ID, used internally |
| createTime           | number                                                           | Creation time                   |
| sendTime             | number                                                           | Send time                       |
| sessionType          | [SessionType](/enum/conversationType.md)               | Session type                    |
| sendID               | string                                                           | Sender ID                       |
| recvID               | string                                                           | Receiver ID, no need to pay attention to in group chat session |
| msgFrom              | number                                                           | Internal field                  |
| contentType          | [MessageType](/enum/messageContentType.md)             | Message type                    |
| platformID           | [Platform](/enum/platform.md)                         | Platform ID                     |
| senderNickname       | string                                                           | Sender nickname                 |
| senderFaceUrl        | string                                                           | Sender face URL                 |
| groupID              | string                                                           | Group ID                        |
| content              | string                                                           | Internal field                  |
| seq                  | number                                                           | Message seq                     |
| isRead               | boolean                                                          | Whether read                    |
| status               | [MessageStatus](/enum/messageStatus.md)                | Message send status             |
| attachedInfo         | string                                                           | Internal field                  |
| ex                   | string                                                           | Extension info                  |
| offlinePush          | [OfflinePushInfo](/class/message/offlinePushInfo.md)   | Offline push details            |
| pictureElem          | [PictureElem](/class/message/pictureElem.md)           | Picture message details         |
| soundElem            | [SoundElem](/class/message/soundElem.md)               | Sound message details           |
| videoElem            | [VideoElem](/class/message/videoElem.md)               | Video message details           |
| fileElem             | [FileElem](/class/message/fileElem.md)                 | File message details            |
| mergeElem            | [MergeElem](/class/message/mergeElem.md)               | Merge message details           |
| atTextElem           | [atTextElem](/class/message/atElem.md)                 | @ message details               |
| locationElem         | [LocationElem](/class/message/locationElem.md)         | Location message details        |
| quoteElem            | [QuoteElem](/class/message/quoteElem.md)               | Quote message details           |
| customElem           | [CustomElem](/class/message/customElem.md)             | Custom message details          |
| notificationElem     | [NotificationElem](/class/message/notificationElem.md) | Notification message details    |
| faceElem             | [FaceElem](/class/message/faceElem.md)                 | Custom emoticon details         |
| attachedInfoElem     | [AttachedInfoElem](/class/message/attachedInfoElem.md) | Attached info details           |
| textElem             | [TextElem](/class/message/textElem.md)                 | Text content details            |
| cardElem             | [CardElem](/class/message/cardElem.md)                 | Card content details            |
| advancedTextElem     | -                                                                | Currently unused                |
| typingElem           | [TypingElem](/class/message/typingElem.md)             | Typing details                  |
| hasReadTime          | number                                                           | Single chat read timestamp      |
| isReact              | boolean                                                          | Currently unused                |
| isExternalExtensions | boolean                                                          | Currently unused                |

</TabItem>

<TabItem value="React-Native">

### MessageItem

| Field Name           | Field Type                                                       | Description                     |
| -------------------- | ---------------------------------------------------------------- | ------------------------------- |
| clientMsgID          | string                                                           | Client message unique ID, recommended to use |
| serverMsgID          | string                                                           | Server message unique ID, used internally |
| createTime           | number                                                           | Creation time                   |
| sendTime             | number                                                           | Send time                       |
| sessionType          | [SessionType](/enum/conversationType.md)               | Session type                    |
| sendID               | string                                                           | Sender ID                       |
| recvID               | string                                                           | Receiver ID, no need to pay attention to in group chat session |
| msgFrom              | number                                                           | Internal field                  |
| contentType          | [MessageType](/enum/messageContentType.md)             | Message type                    |
| platformID           | [Platform](/enum/platform.md)                         | Platform ID                     |
| senderNickname       | string                                                           | Sender nickname                 |
| senderFaceUrl        | string                                                           | Sender face URL                 |
| groupID              | string                                                           | Group ID                        |
| content              | string                                                           | Internal field                  |
| seq                  | number                                                           | Message seq                     |
| isRead               | boolean                                                          | Whether read                    |
| status               | [MessageStatus](/enum/messageStatus.md)                | Message send status             |
| attachedInfo         | string                                                           | Internal field                  |
| ex                   | string                                                           | Extension info                  |
| offlinePush          | [OfflinePushInfo](/class/message/offlinePushInfo.md)   | Offline push details            |
| pictureElem          | [PictureElem](/class/message/pictureElem.md)           | Picture message details         |
| soundElem            | [SoundElem](/class/message/soundElem.md)               | Sound message details           |
| videoElem            | [VideoElem](/class/message/videoElem.md)               | Video message details           |
| fileElem             | [FileElem](/class/message/fileElem.md)                 | File message details            |
| mergeElem            | [MergeElem](/class/message/mergeElem.md)               | Merge message details           |
| atTextElem           | [atTextElem](/class/message/atElem.md)                 | @ message details               |
| locationElem         | [LocationElem](/class/message/locationElem.md)         | Location message details        |
| quoteElem            | [QuoteElem](/class/message/quoteElem.md)               | Quote message details           |
| customElem           | [CustomElem](/class/message/customElem.md)             | Custom message details          |
| notificationElem     | [NotificationElem](/class/message/notificationElem.md) | Notification message details    |
| faceElem             | [FaceElem](/class/message/faceElem.md)                 | Custom emoticon details         |
| attachedInfoElem     | [AttachedInfoElem](/class/message/attachedInfoElem.md) | Attached info details           |
| textElem             | [TextElem](/class/message/textElem.md)                 | Text content details            |
| cardElem             | [CardElem](/class/message/cardElem.md)                 | Card content details            |
| advancedTextElem     | -                                                                | Currently unused                |
| typingElem           | [TypingElem](/class/message/typingElem.md)             | Typing details                  |
| hasReadTime          | number                                                           | Single chat read timestamp      |
| isReact              | boolean                                                          | Currently unused                |
| isExternalExtensions | boolean                                                          | Currently unused                |

</TabItem>

<TabItem value="Unity">

### Message

| Field Name           | Field Type                                                       | Description                     |
| -------------------- | ---------------------------------------------------------------- | ------------------------------- |
| ClientMsgID          | string                                                           | Client message unique ID, recommended to use |
| ServerMsgID          | string                                                           | Server message unique ID, used internally |
| CreateTime           | int                                                              | Creation time                   |
| SendTime             | int                                                              | Send time                       |
| SessionType          | [int](/enum/conversationType.md)                       | Session type                    |
| SendID               | string                                                           | Sender ID                       |
| RecvID               | string                                                           | Receiver ID, no need to pay attention to in group chat session |
| MsgFrom              | int                                                              | Internal field                  |
| ContentType          | [int](/enum/messageContentType.md)                     | Message type                    |
| PlatformID           | int                                                              | Platform ID                     |
| SenderNickname       | string                                                           | Sender nickname                 |
| SenderFaceUrl        | string                                                           | Sender face URL                 |
| GroupID              | string                                                           | Group ID                        |
| Content              | string                                                           | Internal field                  |
| Seq                  | int                                                              | Message seq                     |
| IsRead               | bool                                                             | Whether read                    |
| Status               | [int](/enum/messageStatus.md)                          | Message send status             |
| AttachedInfo         | string                                                           | Attached info                   |
| Ex                   | string                                                           | Extension info                  |
| OfflinePush          | [OfflinePushInfo](/class/message/offlinePushInfo.md)   | Offline push details            |
| PictureElem          | [PictureElem](/class/message/pictureElem.md)           | Picture                         |
| SoundElem            | [SoundElem](/class/message/soundElem.md)               | Sound                           |
| VideoElem            | [VideoElem](/class/message/videoElem.md)               | Video                           |
| FileElem             | [FileElem](/class/message/fileElem.md)                 | File                            |
| MergeElem            | [MergeElem](/class/message/mergeElem.md)               | Merge                           |
| AtElem               | [AtElem](/class/message/atElem.md)                     | @ info                          |
| LocationElem         | [LocationElem](/class/message/locationElem.md)         | Location                        |
| QuoteElem            | [QuoteElem](/class/message/quoteElem.md)               | Quote                           |
| CustomElem           | [CustomElem](/class/message/customElem.md)             | Custom                          |
| NotificationElem     | [NotificationElem](/class/message/notificationElem.md) | Notification details            |
| FaceElem             | [FaceElem](/class/message/faceElem.md)                 | Custom emoticon                 |
| AttachedInfoElem     | [AttachedInfoElem](/class/message/attachedInfoElem.md) | Attached info                   |
| HasReadTime          | int                                                              | Single chat read timestamp      |
| IsReact              | bool                                                             | Currently unused                |
| IsExternalExtensions | bool                                                             | Currently unused                |
| TextElem             | [TextElem](/class/message/textElem.md)                 | Text content                    |
| CardElem             | [CardElem](/class/message/cardElem.md)                 | Card content                    |
| AdvancedTextElem     | -                                                                | Currently unused                |
| TypingElem           | [TypingElem](/class/message/typingElem.md)             | Typing details                  |

</TabItem>

</Tabs>
