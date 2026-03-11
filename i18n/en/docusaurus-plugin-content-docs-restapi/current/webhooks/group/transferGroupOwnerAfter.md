---
sidebar_position: 100
title: Callback After Transferring Group Owner
hide_title: true
---

# Callback After Transferring Group Owner

## Functional Description

After a successful operation, the business server can perform necessary data synchronization or other business logic processing through this callback.

## Precautions
- To enable the callback, you must configure the callback URL and turn on the switch corresponding to this callback protocol. See the [Callback Description](../introduction) document for configuration methods.
- The callback direction is an HTTP/HTTPS POST request initiated by IMServer to the business server.
- The business server must respond to this request within the timeout period.

## Scenarios That May Trigger This Callback

- After users perform corresponding operations successfully through the client or APP administrators through REST API.

## Timing of Callback
- After successfully transferring the group owner.

## Interface Description

### Request URL Example
Here `CallbackCommand` is: `callbackAfterTransferGroupOwnerCommand`
```plaintext
{WEBHOOK_ADDRESS}/callbackAfterTransferGroupOwnerCommand?contenttype=json
```

### Request Package Example
```json
{
  "callbackCommand": "callbackAfterTransferGroupOwnerCommand",
  "groupID": "G12345",
  "oldOwnerUserID": "userOld123",
  "newOwnerUserID": "userNew456"
}
```

### Request Package Field Description

| Field            | Type   | Description                               |
|---------------|--------|----------------------------------|
| callbackCommand | string | Callback command, here it is the callback after transferring group ownership |
| groupID        | string | Unique identifier of the group                    |
| oldOwnerUserID | string | User ID of the old group owner                      |
| newOwnerUserID | string | User ID of the new group owner                      |

## Response Package Example

### Processing Successful
Indicates that the business system successfully processed the group ownership transfer callback.

```json
{
    "actionCode": 0,
    "errCode": 0,
    "errMsg": "",
    "errDlt": "",
    "nextCode": 0
}
```

### Processing Failed
Indicates that the business system cannot process the callback, providing error info.

```json
{
    "actionCode": 1,
    "errCode": 5002,
    "errMsg": "Unable to process the request",
    "errDlt": "The group ownership transfer cannot be processed due to internal policy",
    "nextCode": 1
}
```

## Response Package Field Description

| Field         | Value                        | Description                                       |
|-------------|------------------------------|------------------------------------------|
| actionCode  | 0                            | Indicates whether the business system callback was executed correctly. `0` means the operation was successful.     |
| errCode     | 0                            | Custom error code, `0` here means ignore the callback result.|
| errMsg      | "An error message"           | Simple error message corresponding to the custom error code.|
| errDlt      | "Detailed error information" | Detailed error information corresponding to the custom error code.|
| nextCode    | 1                            | Next execution instruction, `1` means refusing to continue execution, set when actionCode is `0`.|