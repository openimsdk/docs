---
title: Callback Before Sending Friend Request
hide_title: true
---

# Callback Before Sending Friend Request

## Functional Description

The App business server can get the friend request sent by the user through this callback, including:

- View users' friend requests in real-time.
- Intercept malicious friend requests.

## Precautions

- To enable the callback, you must configure the callback URL and turn on the switch corresponding to this callback protocol. See the [Callback Description](../introduction) document for configuration methods.
- The callback direction is an HTTP/HTTPS POST request initiated by OpenIM Server to the App backend.
- The APP business server must respond to this request within the timeout period.

## Scenarios That May Trigger This Callback

- App user initiates a friend add request through the client.

## Timing of Callback

- After OpenIM Server receives the friend add request from the App.

## Interface Description

### Request URL Example

Here `CallbackCommand` is: `callbackBeforeAddFriendCommand`
```plaintext
{WEBHOOK_ADDRESS}/callbackBeforeAddFriendCommand?contenttype=json
```

### Request Package Example

```json
{
  "callbackCommand": "callbackBeforeAddFriendCommand",
  "fromUserID": "user123",
  "toUserID": "user456",
  "reqMsg": "Hi, let's be friends!"
}
```

### Request Package Field Description

| Field           | Type   | Description                               |
| --------------- | ------ | ---------------------------------- |
| callbackCommand | string | Callback command, here it is the callback before adding a friend |
| fromUserID      | string | User ID originating the friend request              |
| toUserID        | string | ID of the requested user                    |
| reqMsg          | string | Message attached to the friend request                 |
| ex              | string | Extra data field                     |

## Response Package Example

### Allow Adding

Allow users to add friends.

```json
{
  "actionCode": 0,
  "errCode": 0,
  "errMsg": "",
  "errDlt": "",
  "nextCode": "0"
}
```

## Response Package Field Description

| Field      | Value                        | Description                                                                                                |
| ---------- | ---------------------------- | --------------------------------------------------------------------------------------------------- |
| actionCode | 0                            | Indicates whether the business system callback was executed correctly. `0` means the operation was successful.                                                   |
| errCode    | 5001                         | Custom error code, ranges from 5000-9999. Set when actionCode is not 0; set when nextCode is 1. |
| errMsg     | "An error message"           | Simple error message corresponding to the custom error code.                                                                    |
| errDlt     | "Detailed error information" | Detailed error information corresponding to the custom error code.                                                                    |
| nextCode   | 1                            | Next execution instruction, `1` means refusing to continue execution, set when actionCode is `0`.                                     |
