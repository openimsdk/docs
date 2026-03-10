---
title: Callback After Importing Friends
hide_title: true
---

# Callback After Importing Friends

## Functional Description

The App business server can get the user's friend import request through this callback, and the business server can reject the user's friend import request, or modify and intervene in the request.

## Precautions

- To enable the callback, you must configure the callback URL and turn on the switch corresponding to this callback protocol. See the [Callback Description](../introduction) document for configuration methods.
- The callback direction is an HTTP/HTTPS POST request initiated by OpenIM Server to the App backend.
- The APP business server must respond to this request within the timeout period.

## Scenarios That May Trigger This Callback

- App users import friends through the client.
- App administrators import friends through REST API.

## Timing of Callback

- Before OpenIM Server prepares to import friends.

## Interface Description

### Request URL Example

Here `CallbackCommand` is: `callbackBeforeImportFriendsCommand`
```plaintext
{WEBHOOK_ADDRESS}/callbackBeforeImportFriendsCommand?contenttype=json
```

### Request Package Example

```json
{
  "callbackCommand": "callbackBeforeImportFriendsCommand",
  "ownerUserID": "user123",
  "friendUserIDs": ["user456", "user789"]
}
```

### Request Package Field Description

| Field           | Type   | Description                               |
| --------------- | ------ | ---------------------------------- |
| callbackCommand | string | Callback command, here it is the callback before importing friends |
| ownerUserID     | string | User ID originating the import friend request          |
| friendUserIDs   | array  | List of user IDs to be imported as friends         |

## Response Package Example

### Allow Import

Allow the user to import friends.

```json
{
  "actionCode": 0,
  "errCode": 0,
  "errMsg": "",
  "errDlt": "",
  "nextCode": "0"
}
```

### Reject Import

Reject the user from importing friends and provide an error message.

```json
{
  "actionCode": 1,
  "errCode": 5001,
  "errMsg": "User not allowed to import friends",
  "errDlt": "The user does not meet the criteria for importing friends",
  "nextCode": "1"
}
```

## Response Package Field Description

| Field      | Value                        | Description                                                            |
| ---------- | ---------------------------- | --------------------------------------------------------------- |
| actionCode | 0                            | Indicates whether the business system callback was executed correctly. `0` means the operation was successful.               |
| errCode    | 0                            | Custom error code, `0` here means ignore the callback result.                   |
| errMsg     | "An error message"           | Simple error message corresponding to the custom error code.                                |
| errDlt     | "Detailed error information" | Detailed error information corresponding to the custom error code.                                |
| nextCode   | 1                            | Next execution instruction, `1` means refusing to continue execution, set when actionCode is `0`. |
