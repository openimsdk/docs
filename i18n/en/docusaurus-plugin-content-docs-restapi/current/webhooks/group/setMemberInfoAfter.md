---
sidebar_position: 6
title: Callback After Setting Group Member Info
hide_title: true
---

# Callback After Setting Group Member Info

## Functional Description
After a successful operation, the business server can perform necessary data synchronization or other business logic processing through this callback.

## Precautions
- To enable the callback, you must configure the callback URL and turn on the switch corresponding to this callback protocol. See the [Callback Description](../introduction) document for configuration methods.
- The callback direction is an HTTP/HTTPS POST request initiated by IMServer to the business server.
- The business server must respond to this request within the timeout period.

## Scenarios That May Trigger This Callback
- After users perform corresponding operations successfully through the client or APP administrators through REST API.

## Timing of Callback
- After successfully setting group member info.

## Interface Description

### Request URL Example
Here `CallbackCommand` is: `callbackAfterSetGroupMemberInfoCommand`
```plaintext
{WEBHOOK_ADDRESS}/callbackAfterSetGroupMemberInfoCommand?contenttype=json
```

### Request Package Example
```json
{
  "callbackCommand": "callbackAfterSetGroupMemberInfoCommand",
  "groupID": "12345",
  "userID": "user789",
  "nickName":"user",
  "faceURL": "http://example.com/path/to/face/image.png",
  "roleLevel": 20,
  "ex": "Extra data"
}

```

### Request Package Field Description

| Object                     | Type   | Description                                                    |
|-------------------------|--------|----------------------------------------------------------------|
| callbackCommand         | string | Callback command, here it is the callback after setting group member info                             |
| groupID                 | string | Unique identifier of the group                                               |
| userID                  | string | User ID of the member who joined the group.                                             |
| nickName                | *string | Nickname of the user in the group.|
| faceURL                 | *string | Avatar URL of the group member                                                |
| roleLevel               | *int32 | Permission level of the user in the group. Ordinary member (20) or administrator (60)|
| ex                      | *string | Extra data field                                                 |

## Response Package Example
After the App backend synchronizes data, it sends a callback response package

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

| Field         | Value                        | Description                                       |
|-------------|------------------------------|------------------------------------------|
| actionCode  | 0                            | Indicates whether the business system callback was executed correctly. `0` means the operation was successful.     |
| errCode     | 0                            | Custom error code, `0` here means ignore the callback result.|
| errMsg      | "An error message"           | Simple error message corresponding to the custom error code.|
| errDlt      | "Detailed error information" | Detailed error information corresponding to the custom error code.|
| nextCode    | 1                            | Next execution instruction, `1` means refusing to continue execution, set when actionCode is `0`.|
