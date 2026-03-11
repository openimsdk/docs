---
title: Callback After Updating User Info
hide_title: true
---

# Callback After Updating User Info

## Functional Description

The App business server can get the result of the user updating personal information through this callback, and the App backend can perform operations such as data synchronization based on this.

## Precautions

- To enable the callback, you must configure the callback URL and turn on the switch corresponding to this callback protocol. See the [Callback Description](../introduction) document for configuration methods.
- The callback direction is an HTTP/HTTPS POST request initiated by OpenIM Server to the App backend.
- The APP business server must respond to this request within the timeout period.

## Scenarios That May Trigger This Callback

- App users update personal information through the client.
- App administrators update user information through REST API.

## Timing of Callback

- After OpenIM Server processes the request to update user information.

## Interface Description

### Request URL Example

Here `CallbackCommand` is: `callbackAfterUpdateUserInfoCommand`
```plaintext
{WEBHOOK_ADDRESS}/callbackAfterUpdateUserInfoExCommand?contenttype=json
```

### Request Parameter Description

### Header

### Request Package Example

```json
{
  "callbackCommand": "callbackAfterUpdateUserInfoExCommand",
  "userID": "user123",
  "nickName": "John Doe",
  "faceURL": "http://example.com/path/to/face/image.png",
  "ex": "Extra data"
}
```

### Request Package Field Description

| Field           | Type        | Description                                   |
| --------------- | ----------- | -------------------------------------- |
| callbackCommand | string      | Callback command, here it is the callback after updating user info |
| userID          | string      | Unique identifier of the user                       |
| nickName        | StringValue | Nickname of the user                             |
| faceURL         | StringValue | URL of the user's avatar                         |
| ex              | StringValue | Extra data field                         |

## Response Package Example

App backend sends the callback response package after synchronizing data.

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

| Field      | Value                        | Description                                                            |
| ---------- | ---------------------------- | --------------------------------------------------------------- |
| actionCode | 0                            | Indicates whether the business system callback was executed correctly. `0` means the operation was successful.               |
| errCode    | 0                            | Custom error code, `0` here means ignore the callback result.                   |
| errMsg     | "An error message"           | Simple error message corresponding to the custom error code.                                |
| errDlt     | "Detailed error information" | Detailed error information corresponding to the custom error code.                                |
| nextCode   | 1                            | Next execution instruction, `1` means refusing to continue execution, set when actionCode is `0`. |
