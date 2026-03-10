---
title: Callback After Adding Blacklist
hide_title: true
---

# Callback After Adding Blacklist

## Functional Description

The App business server can receive requests from users adding to the blacklist through this callback, and the business server can review or modify this request.

## Precautions

- To enable the callback, you must configure the callback URL and turn on the switch corresponding to this callback protocol. See the [Callback Description](../introduction) document for configuration methods.
- The callback direction is an HTTP/HTTPS POST request initiated by OpenIM Server to the App backend.
- The APP business server must respond to this request within the timeout period.

## Scenarios That May Trigger This Callback

- App users attempt to add other users to the blacklist through the client.

## Timing of Callback

- After OpenIM Server receives the request to add a user to the blacklist, before processing the request.

## Interface Description

### Request URL Example

Here `CallbackCommand` is: `callbackBeforeAddBlackCommand`
```plaintext
{WEBHOOK_ADDRESS}/callbackBeforeAddBlackCommand?contenttype=json
```

### Request Package Example

```json
{
  "callbackCommand": "callbackBeforeAddBlackCommand",
  "ownerUserID": "user123",
  "blackUserID": "user456"
}
```

### Request Package Field Description

| Field           | Type   | Description                                 |
| --------------- | ------ | ------------------------------------ |
| callbackCommand | string | Callback command, here it is the callback for adding a blacklist user |
| ownerUserID     | string | User ID originating the add to blacklist request          |
| blackUserID     | string | User ID being added to the blacklist              |

## Response Package Example

### Allow Adding

Allow users to add the specified user to the blacklist.

```json
{
  "actionCode": 0,
  "errCode": 0,
  "errMsg": "",
  "errDlt": "",
  "nextCode": "nextCodeValue"
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
