---
title: Callback Before Offline Push Message
hide_title: true
---

# Callback Before Offline Push Message

## Functional Description

Before an offline push message is sent to the client, the App business server can receive a request to send the message through this callback. The business server can intercept, modify, or add additional push information to the message as needed.

## Precautions

- To enable the callback, you must configure the callback URL and turn on the switch corresponding to this callback protocol. See the [Callback Description](../introduction) document for configuration methods.
- The callback direction is an HTTP/HTTPS POST request initiated by OpenIM Server to the App backend.
- After receiving the callback request, the App business server must respond within the timeout period.

## Scenarios That May Trigger This Callback

- Group member quits the group.
- Group member is kicked out of the group.
- Group is dismissed.

## Timing of Callback

- Before OpenIMServer prepares to send an offline push message to the client.

## Interface Description

### Request URL Example

Here `CallbackCommand` is: `callbackBeforeOfflinePushCommand`
```plaintext
{WEBHOOK_ADDRESS}/callbackBeforeOfflinePushCommand?contenttype=json
```

### Request Package Example

```json
{
  "callbackCommand": "callbackBeforeOfflinePushCommand",
  "platformID": 1,
  "platform": "iOS",
  "userIDList": ["user123", "user456"],
  "title": "New Message",
  "desc": "You have a new message",
  "ex": "Extra push info",
  "iOSPushSound": "default",
  "iOSBadgeCount": true,
  "signalInfo": "Signal data",
  "clientMsgID": "msg123",
  "sendID": "user789",
  "groupID": "group123",
  "contentType": 1,
  "sessionType": 2,
  "atUserIDList": ["user101", "user102"],
  "content": "Hello, this is a test message"
}
```

### Request Package Field Description

| Field           | Type   | Description                                     |
| --------------- | ------ | ---------------------------------------- |
| callbackCommand | string | Callback command, here it is the callback before offline message push         |
| platformID      | int    | Platform ID (e.g., 1 for iOS, 2 for Android) |
| platform        | string | Platform name (e.g., iOS, Android)              |
| userIDList      | array  | List of user IDs indicating which users will receive this message   |
| title           | string | Title of the push message                           |
| desc            | string | Description of the push message                           |
| ex              | string | Additional push information                           |
| iOSPushSound    | string | Sound setting when pushed on iOS                     |
| iOSBadgeCount   | bool   | Whether to modify the unread message count on the iOS app icon           |
| signalInfo      | string | Additional signal information carried by the push                   |
| clientMsgID     | string | Client message ID                            |
| sendID          | string | User ID of the sender                          |
| groupID         | string | Group ID, if it is a group message                |
| contentType     | int    | Type of message content                           |
| sessionType     | int    | Session type (e.g., 1 for single chat, 2 for group chat)    |
| atUserIDList    | array  | List of IDs of users being @'ed                        |
| content         | string | Content of the sent message                           |

## Response Package Example

### Allow Pushing

Allow the message to be offline pushed to the client.

```json
{
  "actionCode": 0,
  "errCode": 0,
  "errMsg": "",
  "errDlt": "",
  "nextCode": "",
  "userIDList": ["user123", "user456"],
  "offlinePushInfo": {
    "title": "New Message",
    "desc": "You have a new message",
    "ex": "Extra push info",
    "iOSPushSound": "default",
    "iOSBadgeCount": true,
    "signalInfo": "Signal data"
  }
}
```

## Response Package Field Description

| Field           | Type                         | Description                                                                                                |
| --------------- | ---------------------------- | --------------------------------------------------------------------------------------------------- |
| actionCode      | 0                            | Indicates whether the business system callback was executed correctly. `0` means the operation was successful.                                                   |
| errCode         | 5001                         | Custom error code, ranges from 5000-9999. Set when actionCode is not 0; set when nextCode is 1. |
| errMsg          | "An error message"           | Simple error message corresponding to the custom error code.                                                                    |
| errDlt          | "Detailed error information" | Detailed error information corresponding to the custom error code.                                                                    |
| nextCode        | 1                            | Next execution instruction, `1` means refusing to continue execution, set when actionCode is `0`.                                     |
| userIDList      | array                        | List of user IDs, indicating users allowed to receive the message.                                                              |
| offlinePushInfo | object                       | Offline push info object.                                                                                  |
