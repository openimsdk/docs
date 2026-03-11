---
sidebar_position: 15
title: Callback After Marking Group Chat Conversation Read
hide_title: true
---

# Callback After Reporting Group Chat Message Read

## Functional Description
After a successful operation, the business server can perform necessary data synchronization or other business logic processing through this callback.

## Precautions
- To enable the callback, you must configure the callback URL and turn on the switch corresponding to this callback protocol. See the [Callback Description](../introduction) document for configuration methods.
- The callback direction is an HTTP/HTTPS POST request initiated by IMServer to the business server.
- The business server must respond to this request within the timeout period.

## Scenarios That May Trigger This Callback
- Triggered when the client calls MarkAllConversationMessageAsRead and MarkConversationMessageAsRead.

## Timing of Callback
- After a user successfully marks a group chat conversation as read through the client.

## Interface Description

### Request URL Example
Here `CallbackCommand` is: `callbackAfterGroupMsgReadCommand`
```plaintext
{WEBHOOK_ADDRESS}/callbackAfterGroupMsgReadCommand?contenttype=json
```

### Request Package Example
```json
{
  "callbackCommand": "callbackGroupMsgReadCommand",
  "sendID": "user123",
  "receiveID": "group789",
  "unreadMsgNum": 5,
  "contentType": 101,
}
```

### Request Package Field Description

| Object             | Type   | Description                                               |
|-----------------|--------|----------------------------------------------------|
| callbackCommand | string | Callback command, here it is the group message read callback                    |
| sendID          | string | User ID of the message sender                                     |
| receiveID       | string | Group ID receiving the message                                     |
| unreadMsgNum    | int64  | Number of unread messages                                         |
| contentType | int | Message type |

## Response Package Example

```json
{
    "actionCode": 0,
    "errCode": 0,
    "errMsg": "",
    "errDlt": "",
    "nextCode": ""
}
```

## Response Package Field Description
| Field      | Value                        | Description                                                     |
| ---------- | ---------------------------- | --------------------------------------------------------------- |
| actionCode | 0                            | Indicates whether the business system callback was executed correctly. `0` means the operation was successful. |
| errCode    | 0                            | Custom error code, `0` here means ignore the callback result.   |
| errMsg     | "An error message"           | Simple error message corresponding to the custom error code.    |
| errDlt     | "Detailed error information" | Detailed error information corresponding to the custom error code. |
| nextCode   | 1                            | Next execution instruction, `1` means refusing to continue execution, set when actionCode is `0`. |
