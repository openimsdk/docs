---
sidebar_position: 9
title: Common Fields Description
---


| Field Name     | Type   | String Length Limit | Description                                                  | Value Explanation                                            |
| -------------- | ------ | ------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| secret         | string | 32                  | Server secret key                                            | String                                                       |
| platformID     | int    |                     | Terminal type when user logs in                              | 1:iOS, 2:Android, 3:Windows, 4:OSX, 5:Web, 6:MiniWeb, 7:Linux, 8:APad, 9:IPad, 10:Admin, 11:HarmonyOS |
| userID         | string | 64                  | User ID, guaranteed to be unique, cannot contain special characters | String                                                       |
| nickname       | string | 255                 | Nickname                                                     | String                                                       |
| faceURL        | string | 255                 | Avatar URL                                                   | URL link                                                     |
| ex             | string | 1024                | Extension field, recommended to encapsulate as a JSON string | String/JSON                                                  |
| operationID    | string |                     | Operation ID, used for problem locating, keep unique, recommended to use current time + random number + userID | String                                                       |
| operatorUserID | string | 64                  | The user who initiated this action, the specific meaning depends on the context | String                                                       |
| groupID        | string | 64                  | Group ID, guaranteed to be unique                            | String                                                       |
| sessionType    | int    |                     | Conversation type                                            | 1: Single chat, 3: Group chat, 4: System notification        |
| appMangerLevel | int    |                     | Account type                                                 | 0: Normal user, 2: APP administrator, 3: Notification account, 4: Robot |

## PublicUserInfo

> User Public Info Object

| Field Name | Type   | Max String Length Limit | Description |
| ---------- | ------ | ----------------------- | ----------- |
| userID     | string | 64                      | User ID     |
| nickname   | string | 255                     | Username    |
| faceURL    | string | 255                     | User avatar URL |
| ex         | string | 1024                    | Extension field |


## UserInfo

> User Info Object

| Field Name       | Type   | Description                 | Value Explanation  |
| ---------------- | ------ | --------------------------- | ------------------ |
| userID           | string | User ID                     |                    |
| nickname         | string | Username                    |                    |
| faceURL          | string | User avatar URL             |                    |
| ex               | string | Extension field             |                    |
| createTime       | int    | Creation time               |                    |
| appMangerLevel   | int    | Internal field, can be ignored |                 |
| globalRecvMsgOpt | int    | Global offline push reception setting | 0: Receive; 2: Do not receive |

## FriendInfo

> Friend Info Object

| Field Name     | Type                  | Description  | Value Explanation |
| -------------- | --------------------- | ------------ | ----------------- |
| ownerUserID    | string                | User ID      |                   |
| remark         | string                | Remark       |                   |
| createTime     | int                   | Creation time|                   |
| addSource      | int                   | Add source   |                   |
| operatorUserID | string                | Operator ID  |                   |
| ex             | string                | Extension field|                  |
| friendUser     | [UserInfo](#userinfo) | User info object |                |

## BlackInfo

> Blocklist Info Object

| Field Name     | Type                              | Description    | Value Explanation |
| -------------- | --------------------------------- | -------------- | ----------------- |
| ownerUserID    | string                            | User ID        |                   |
| createTime     | int                               | Block time     |                   |
| blackUserInfo  | [PublicUserInfo](#publicuserinfo) | Blocked user info |                |
| addSource      | int                               | Block source   |                   |
| operatorUserID | string                            | Operator ID    |                   |
| ex             | string                            | Extension field |                  |

## GroupInfo

> Group Info Object

| Field Name             | Type   | Description                         | Value Explanation                                                                                     |
| ---------------------- | ------ | ----------------------------------- | ----------------------------------------------------------------------------------------------------- |
| groupID                | string | Group ID                            |                                                                                                       |
| groupName              | string | Group name                          |                                                                                                       |
| notification           | string | Group notice                        |                                                                                                       |
| introduction           | string | Group introduction                  |                                                                                                       |
| faceURL                | string | Group avatar URL                    |                                                                                                       |
| ownerUserID            | string | Group owner ID                      |                                                                                                       |
| createTime             | int    | Creation time                       |                                                                                                       |
| memberCount            | int    | Number of group members             |                                                                                                       |
| ex                     | string | Group extension field               |                                                                                                       |
| status                 | int    | Group status                        | 0: Normal status; 1: Banned (Not used yet); 2: Dismissed; 3: Muted all                                 |
| creatorUserID          | string | Group creator ID                    |                                                                                                       |
| groupType              | int    | Group type                          | Fixed as 2                                                                                            |
| needVerification       | int    | Group joining verification          | 0: Applying to join group requires approval, member invitation can join directly; 1: Everyone joining group requires verification, except group owner/admin invitation; 2: Direct join |
| lookMemberInfo         | int    | View other member's info setting    | 0: Allow viewing group member information; 1: Do not allow viewing group member information            |
| applyMemberFriend      | int    | Add friend setting for group members| 0: Allow adding friends from group members; 1: Do not allow adding                                     |
| notificationUpdateTime | int    | Group notice last update time       |                                                                                                       |
| notificationUserID     | string | Group notice last set user ID       |                                                                                                       |

## GroupMemberInfo

> Group Member Info Object

| Field Name     | Type   | Description              | Value Explanation                                      |
| -------------- | ------ | ------------------------ | ------------------------------------------------------ |
| groupID        | string | Group ID                 |                                                        |
| userID         | string | Group member ID          |                                                        |
| roleLevel      | int    | Group member role level  | 100: Group owner; 60: Admin; 20: Normal member         |
| joinTime       | int    | Join group time          |                                                        |
| nickname       | string | Group member nickname    |                                                        |
| faceURL        | string | Group member avatar URL  |                                                        |
| appMangerLevel | int    | Internal field, can be ignored |                                                  |
| joinSource     | int    | Join group source        | 1: Admin invitation; 2: Group member invitation; 3: Search join; 4: QR code join |
| operatorUserID | string | User ID of operator joining group |                                                |
| ex             | string | Group member extension field |                                                    |
| muteEndTime    | int    | Mute end time            |                                                        |
| inviterUserID  | string | User ID of inviter       |                                                        |

## FriendRequestInfo

> Friend Application Object

| Field Name    | Type   | Description                 | Value Explanation            |
| ------------- | ------ | --------------------------- | ---------------------------- |
| fromUserID    | string | User ID of applicant        |                              |
| fromNickname  | string | Username of applicant       |                              |
| fromFaceURL   | string | Avatar URL of applicant     |                              |
| toUserID      | string | User ID of receiver         |                              |
| toNickname    | string | Username of receiver        |                              |
| toFaceURL     | string | Avatar URL of receiver      |                              |
| handleResult  | int    | Friend application status   | 1: Agreed, 0: Unhandled, -1: Rejected |
| reqMsg        | string | Application message         |                              |
| createTime    | int    | Creation time               |                              |
| handlerUserID | string | User ID of handler          |                              |
| handleMsg     | string | Handling message            |                              |
| handleTime    | int    | Handling time               |                              |
| ex            | string | Extension field             |                              |

## GroupRequestInfo

> Group Application Object

| Field Name    | Type                              | Description       | Value Explanation                                      |
| ------------- | --------------------------------- | ----------------- | ------------------------------------------------------ |
| userInfo      | [PublicUserInfo](#publicuserinfo) | Applicant user info |                                                      |
| groupInfo     | [GroupInfo](#groupinfo)           | Group info        |                                                        |
| handleResult  | int                               | Handling result   | 1: Agreed; 0: Unhandled; -1: Rejected                   |
| reqMsg        | string                            | Application message |                                                      |
| handleMsg     | string                            | Handling message  |                                                        |
| reqTime       | int                               | Application time  |                                                        |
| handleUserID  | string                            | User ID of handler |                                                       |
| handleTime    | int                               | Handling time     |                                                        |
| ex            | string                            | Application extension field |                                              |
| joinSource    | int                               | Join group source | 1: Admin invitation; 2: Group member invitation; 3: Search join; 4: QR code join |
| inviterUserID | string                            | User ID of the inviter |                                                   |

## PictureBaseInfo

> Picture Base Info

| Field Name | Type   | Description        | Value Range |
| ---------- | ------ | ------------------ | ----------- |
| uuid       | string | Picture unique uuid |             |
| type       | string | Picture type       |             |
| size       | int    | Picture size       |             |
| width      | int    | Picture width      |             |
| height     | int    | Picture height     |             |

## ConversationInfo

> Conversation Info

| Field Name            | Type    | Description                                                               | Value Range |
| --------------------- | ------- | ------------------------------------------------------------------------- | ----------- |
| ownerUserID           | string  | User ID of conversation owner                                             |             |
| conversationID        | string  | Conversation ID                                                           |             |
| recvMsgOpt            | int     | Message receiving parameter, 0: Receive messages; 1: Do not receive messages; 2: Receive messages but do not remind | |
| conversationType      | int     | Conversation type, 1: Single chat, 3: Group chat                          |             |
| userID                | string  | Conversation user ID, valid when conversation type is 1                   |             |
| groupID               | string  | Conversation group ID, valid when conversation type is 3                  |             |
| isPinned              | boolean | Whether the conversation is pinned                                        |             |
| attachedInfo          | string  | Extension field used by openIM                                            |             |
| isPrivateChat         | boolean | Whether burn after reading is enabled                                     |             |
| groupAtType           | int     | Group conversation notice strong prompt type, group notice someone **@ownerUserID**, **@All** special identifier | |
| ex                    | string  | Extension field used by users                                             |             |
| burnDuration          | int     | Duration of burn after reading messages                                   |             |
| minSeq                | int     | Minimum seq the user can pull in this conversation                        |             |
| maxSeq                | int     | Maximum seq the user can pull in this conversation                        |             |
| msgDestructTime       | int     | Message destruction interval time                                         |             |
| latestMsgDestructTime | int     | Last message destruction time                                             |             |
| isMsgDestruct         | boolean | Whether message timed destruction is enabled                              |             |
