---
title: Callback For Removing Blacklist Users
hide_title: true
---

# Callback For Removing Blacklist Users

## Functional Description
The App business server can process the user's request to remove from the blacklist through this callback, including: real-time recording of user quitting group (for example, logging, or synchronizing to other systems).

## Precautions
- To enable the callback, you must configure the callback URL and turn on the switch corresponding to this callback protocol. See the [Callback Description](../introduction) document for configuration methods.
- The callback direction is an HTTP/HTTPS POST request initiated by OpenIM Server to the App backend.
- The APP business server must respond to this request within the timeout period.

## Scenarios That May Trigger This Callback
- App users attempt to remove other users from the blacklist through the client.

## Timing of Callback
- After OpenIM Server receives the request to remove a blacklist user, before processing this request.

## Interface Description

### Request URL Example
Here `CallbackCommand` is: `callbackAfterRemoveBlackCommand`
```plaintext
{WEBHOOK_ADDRESS}/callbackAfterRemoveBlackCommand?contenttype=json
```

### Request Package Example
```json
{
  "callbackCommand": "callbackAfterRemoveBlackCommand",
  "ownerUserID": "user123",
  "blackUserID": "user456"
}
```

### Request Package Field Description

| Field           | Type   | Description                                  |
|-----------------|--------|-------------------------------------|
| callbackCommand | string | Callback command, here it is the callback for removing blacklist user  |
| ownerUserID     | string | User ID originating the remove blacklist request            |
| blackUserID     | string | User ID being removed from the blacklist                |

## Response Package Example

### Allow Removal
Allow users to remove the specified user from the blacklist.

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

| Field      | Value                        | Description                                       |
|-------------|------------------------------|------------------------------------------|
| actionCode  | 0                            | Indicates whether the business system callback was executed correctly. `0` means the operation was successful.     |
| errCode     | 0                            | Custom error code, `0` here means ignore the callback result.|
| errMsg      | "An error message"           | Simple error message corresponding to the custom error code.|
| errDlt      | "Detailed error information" | Detailed error information corresponding to the custom error code.|
| nextCode    | 1                            | Next execution instruction, `1` means refusing to continue execution, set when actionCode is `0`.|
