---
title: Callback Before Online Group Message Push
hide_title: true
---

# Callback Before Online Group Message Push

## Functional Description

Before a message is pushed to the client, the App business server can receive a request to send the message through this callback. The business server can intercept, modify, or add additional push information to the message as needed.

## Precautions

- To enable the callback, you must configure the callback URL and turn on the switch corresponding to this callback protocol. See the [Callback Description](../introduction) document for configuration methods.
- The callback direction is an HTTP/HTTPS POST request initiated by OpenIMServer to the App backend.
- After receiving the callback request, the App business server must respond within the timeout period.

## Scenarios That May Trigger This Callback

- Group member quits the group.
- Group member is kicked out of the group.
- Group is dismissed.

## Timing of Callback

- Before OpenIMServer prepares to push a message to the client.

## Interface Description

### Request URL Example

Here `CallbackCommand` is: `callbackBeforeGroupOnlinePushCommand`
```plaintext
{WEBHOOK_ADDRESS}/callbackBeforeGroupOnlinePushCommand?contenttype=json
```

### Request Package Example

```json
{
  "callbackCommand": "callbackBeforeGroupOnlinePushCommand",
  "platformID": 1,
  "platform": "iOS",
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

| Field           | Type    | Description                                     |
| --------------- | ------- | ---------------------------------------- |
| callbackCommand | string  | Callback command, here it is the callback before pushing a group message         |
| platformID      | int     | Platform ID (e.g., 1 for iOS, 2 for Android) |
| platform        | string  | Platform name (e.g., iOS, Android)              |
| clientMsgID     | string  | Client message ID                            |
| sendID          | string  | Sender ID                                |
| groupID         | string  | Group ID (if the message is sent to a group)        |
| contentType     | int     | Message content type ID                        |
| sessionType     | int     | Session type ID                            |
| atUserIDList    | array   | List of IDs of users being @'ed                        |
| content         | string  | Content of the sent message                           |

## Response Package Example

### Allow Pushing

Allow the message to be pushed to the client.

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
