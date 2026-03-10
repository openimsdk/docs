---
title: Callback Before Agreeing To Add Friend
hide_title: true
---

# Callback Before Agreeing To Add Friend

## Functional Description
The App backend can view users' responses to friend requests in real-time through this callback, including:
- Periodically view users' responses to friend requests.
- Intercept malicious friend request responses.

## Precautions
- To enable the callback, you must configure the callback URL and turn on the switch corresponding to this callback protocol. See the [Callback Description](../introduction) document for configuration methods.
- The callback direction is an HTTP/HTTPS POST request initiated by OpenIM Server to the App backend.
- The APP business server must respond to this request within the timeout period.

## Scenarios That May Trigger This Callback
- App user initiates a response to a friend request through the client, agreeing to add a friend.

## Timing of Callback
- After OpenIM Server receives the response to agree to add a friend from the App.

## Interface Description

### Request URL Example
Here `CallbackCommand` is: `callbackBeforeAddFriendAgreeCommand`
```plaintext
{WEBHOOK_ADDRESS}/callbackBeforeAddFriendAgreeCommand?contenttype=json
```

### Request Package Example
```json
{
  "callbackCommand": "callbackBeforeAddFriendAgreeCommand",
  "fromUserID": "user123",
  "toUserID": "user456",
  "handleMsg": "Let's be friends!",
  "handleResult": 1
}

```

### Request Package Field Description

| Object          | Type   | Description                                      |
|-----------------|--------|------------------------------------------|
| callbackCommand | string | Callback command, here it is the callback before adding a friend         |
| fromUserID      | string | User ID who originated the friend request                      |
| toUserID        | string | User ID receiving the friend request                      |
| handleMsg          | string | Additional message when handling the friend request                        |
| handleResult          | int32 | Result of handling the friend request                        |

## Response Package Example

### Allow Adding
Allow users to add friends.

```json
{
    "actionCode": 0,
    "errCode": 0,
    "errMsg": "",
    "errDlt": "",
    "nextCode": 1
}

```

## Response Package Field Description

| Field      | Value                         | Description                                      |
|------------|------------------------------|-----------------------------------------|
| actionCode | 0                            | Indicates whether the business system callback was executed correctly. `0` means the operation was successful.              |
| errCode    | 0                            | Custom error code, `0` here means ignore the callback result.                  |
| errMsg     | "An error message"           | Simple error message corresponding to the custom error code.                        |
| errDlt     | "Detailed error information" | Detailed error information corresponding to the custom error code.                        |
| nextCode   | 1                            | Next execution instruction, `1` means refusing to continue execution, set when actionCode is `0`. |
