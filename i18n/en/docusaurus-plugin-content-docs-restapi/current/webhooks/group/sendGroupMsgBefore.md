---
sidebar_position: 3
title: Callback Before Sending Group Chat Message
hide_title: true
---

# Callback Before Sending Group Message

## Functional Description

Before sending a group chat message, the business server can reject this request, or modify and intervene in the request.

## Precautions
- To enable the callback, you must configure the callback URL and turn on the switch corresponding to this callback protocol. See the [Callback Description](../introduction) document for configuration methods.
- The callback direction is an HTTP/HTTPS POST request initiated by IMServer to the business server.
- The business server must respond to this request within the timeout period.

## Scenarios That May Trigger This Callback
- Before users perform corresponding operations through the client or APP administrators through REST API.

## Timing of Callback
- Before sending a group chat message.

## Interface Description

### Request URL Example
Here `CallbackCommand` is: `callbackBeforeSendGroupMsgCommand`
```plaintext
{WEBHOOK_ADDRESS}/callbackBeforeSendGroupMsgCommand?contenttype=json
```

### Request Package Example
```json
{
  "sendID": "123456",
  "callbackCommand": "callbackBeforeSendGroupMsgCommand",
  "serverMsgID": "msg123",
  "clientMsgID": "client123",
  "operationID": "1646445464564",
  "senderPlatformID": 1,
  "senderNickname": "John",
  "sessionType": 2,
  "msgFrom": 1,
  "contentType": 1,
  "status": 0,
  "sendTime": 1673048592000,
  "createTime": 1673048592000,
  "content": "Hello, this is a group message!",
  "seq": 1,
  "atUserList": ["user123", "user456"],
  "faceURL": "http://example.com/user123.png",
  "ex": "Extra data",
  "groupID": "group567"
}
```

### Request Package Field Description

| Object               | Type   | Description                                                  |
|-------------------|--------|--------------------------------------------------------|
| sendID            | string | Unique identifier of the sender                                        |
| callbackCommand   | string | Callback command, here it is the callback before sending a group message                    |
| serverMsgID       | string | Server-side message ID                                         |
| clientMsgID       | string | Client-side message ID                                           |
| operationID | string | operationID used for global link tracking |
| senderPlatformID  | int32  | Platform ID of the sender                                          |
| senderNickname    | string | Nickname of the sender                                            |
| sessionType       | int32  | Session type                                               |
| msgFrom           | int32  | Message source, 1 for user, 2 for group                     |
| contentType       | int32  | Message type, 1 for text message                                   |
| status            | int32  | Message status                                               |
| sendTime | int64 | Timestamp of message sending (milliseconds) |
| createTime        | int64  | Timestamp of message creation (milliseconds)                                 |
| content           | string | Message content                                               |
| seq               | uint32 | Sequence number of the message                                             |
| atUserList        | string | List of group member IDs                                |
| faceURL           | string | Avatar URL of the sender                                         |
| ex                | string | Extra data field                                           |
| groupID           | string | Group ID                                              |

## Response Package Example

### Allow Sending

Allow users to send group messages.

```json
{
    "actionCode": 0,
    "errCode": 0,
    "errMsg": "",
    "errDlt": "",
    "nextCode": 0
}

```

## Response Package Field Description

| Field         | Value                        | Description                                                                                         |
| ------------- | ---------------------------- | --------------------------------------------------------------------------------------------------- |
| actionCode    | 0                            | Indicates whether the business system callback was executed correctly. `0` means the operation was successful. |
| errCode       | 5001                         | Custom error code, ranges from 5000-9999. Set when actionCode is not 0; set when nextCode is 1.      |
| errMsg        | "An error message"           | Simple error message corresponding to the custom error code.                                        |
| errDlt        | "Detailed error information" | Detailed error information corresponding to the custom error code.                                  |
| nextCode      | 1                            | Next execution instruction, `1` means refusing to continue execution, set when actionCode is `0`.    |
