---
title: Callback Before Sending Single Chat Message
hide_title: true
---

# Callback Before Sending Single Chat Message

## Functional Description
The App business server can operate on users' single chat messages in real-time through this callback, such as: real-time recording of sending single chat messages, intercepting users' illegal speech requests.

## Precautions
- To enable the callback, you must configure the callback URL and turn on the switch corresponding to this callback protocol. See the [Callback Description](../introduction) document for configuration methods.
- The callback direction is an HTTP/HTTPS POST request initiated by OpenIMServer to the App backend.
- The APP business server must respond to this request within the timeout period.

## Scenarios That May Trigger This Callback
- App users send single chat messages through the client.
- App administrators send single chat messages through REST API.

## Timing of Callback
- After OpenIMServer receives the single chat message sent by the user and before delivering the message to the target user.

## Interface Description

### Request URL Example
Here `CallbackCommand` is: `callbackBeforeSendSingleMsgCommand`
```plaintext
{WEBHOOK_ADDRESS}/callbackBeforeSendSingleMsgCommand?contenttype=json
```

### Request Package Example
```json
{
  "sendID": "user123",
  "callbackCommand": "callbackBeforeSendSingleMsgCommand",
  "serverMsgID": "msg001",
  "clientMsgID": "clientmsg001",
  "operationID": "1646445464564",
  "senderPlatformID": 1,
  "senderNickname": "User123",
  "sessionType": 1,
  "msgFrom": 1,
  "contentType": 1,
  "status": 1,
  "sendTime": 1673048592000,
  "createTime": 1673048592000,
  "content": "Hello, this is a test message",
  "seq": 1001,
  "atUserList": ["user456", "user789"],
  "faceURL": "http://example.com/path/to/user/image.png",
  "ex": "Extra data",
  "recvID": "user456"
}
```

### Request Package Field Description

| Object             | Type    | Description                                                       |
|-----------------|---------|------------------------------------------------------------|
| sendID          | string  | User ID of the sender                                              |
| callbackCommand | string  | Callback command, here it is the callback before sending a single chat message                        |
| serverMsgID     | string  | Message ID assigned by the server                                          |
| clientMsgID     | string  | Message ID assigned by the client                                          |
| operationID | string | operationID used for global link tracking |
| senderPlatformID| int32   | Platform ID of the sender                                              |
| senderNickname  | string  | Nickname of the sender                                                |
| sessionType     | int32   | Session type                                                    |
| msgFrom         | int32   | Message source                                                    |
| contentType     | int32   | Content type of the message                                              |
| status          | int32   | Status of the message                                                  |
| sendTime      | int64   | Timestamp of message sending (milliseconds)                                  |
| createTime | int64 | Timestamp of message creation (milliseconds) |
| content         | string  | Message content                                                    |
| seq             | uint32  | Message sequence number                                                  |
| atUserList      | array   | List of group member IDs, ignored for single chat                                              |
| faceURL         | string  | URL of the sender's avatar                                             |
| ex              | string  | Extra data field                                              |
| recvID          | string  | User ID of the receiver                                              |

## Response Package Example

### Allow Sending
Allow users to send messages.

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

| Field             | Value       | Description                                         |
|-----------------|----------|--------------------------------------------|
| actionCode      | 0        | Indicates whether the business system callback was executed correctly. `0` means the operation was successful.     |
| errCode     | 5001                        | Custom error code, ranges from 5000-9999. Set when actionCode is not 0; set when nextCode is 1.|
| errMsg          | "Message"    | Simple error message corresponding to the custom error code.                       |
| errDlt          | "Detailed info" | Detailed error information corresponding to the custom error code.                       |
| nextCode        | 1        | Next execution instruction, `1` means refusing to continue execution, set when actionCode is `0`.|
