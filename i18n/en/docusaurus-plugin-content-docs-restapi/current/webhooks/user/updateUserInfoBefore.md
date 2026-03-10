---
title: Callback Before Updating User Info
hide_title: true
---

# Callback Before Updating User Info

## Functional Description

The App business server can get the user's request to update personal information through this callback, or modify and intervene in the request.

## Precautions

- To enable the callback, you must configure the callback URL and turn on the switch corresponding to this callback protocol. See the [Callback Description](../introduction) document for configuration methods.
- The callback direction is an HTTP/HTTPS POST request initiated by OpenIM Server to the App backend.
- The APP business server must respond to this request within the timeout period.

## Scenarios That May Trigger This Callback

- App users update personal information through the client.
- App administrators update user information through REST API.

## Timing of Callback

- Before OpenIM Server prepares to update user information.

## Interface Description

### Request URL Example

Here `CallbackCommand` is: `callbackBeforeUpdateUserInfoExCommand`
```plaintext
{WEBHOOK_ADDRESS}/callbackBeforeUpdateUserInfoExCommand?contenttype=json
```

### Request Package Example

```json
{
  "callbackCommand": "callbackBeforeUpdateUserInfoExCommand",
  "userID": "user123",
  "nickName": "John Doe",
  "faceURL": "http://example.com/path/to/fac  e/image.png",
  "ex": "Extra data"
}
```

### Request Package Field Description

| Field           | Type        | Description                                   |
| --------------- | ----------- | -------------------------------------- |
| callbackCommand | string      | Callback command, here it is the callback before updating user info |
| userID          | string      | Unique identifier of the user                       |
| nickName        | StringValue | Nickname of the user                             |
| faceURL         | StringValue | URL of the user's avatar                         |
| ex              | StringValue | Extra data field                         |

## Response Package Example

### Allow Update

Allow users to update information.

```json
{
  "actionCode": 0,
  "errCode": 0,
  "errMsg": "",
  "errDlt": "",
  "nextCode": "0",
  "nickName": "John Doe Updated",
  "faceURL": "http://example.com/new/face/image.png",
  "ex": "Updated extra data"
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
| nickName   | StringValue                  | Nickname of the user                                                                                          |
| faceURL    | StringValue                  | URL of the user's avatar                                                                                      |
| ex         | StringValue                  | Extra data field                                                                                      |
