---
sidebar_position: 5
title: Callback Before Setting Group Member Info
hide_title: true
---

# Callback Before Setting Group Member Info

## Functional Description
Before setting group member info, the business server can reject this request, or modify and intervene in the request.

## Precautions
- To enable the callback, you must configure the callback URL and turn on the switch corresponding to this callback protocol. See the [Callback Description](../introduction) document for configuration methods.
- The callback direction is an HTTP/HTTPS POST request initiated by IMServer to the business server.
- The business server must respond to this request within the timeout period.

## Scenarios That May Trigger This Callback

- Before users perform corresponding operations through the client or APP administrators through REST API.

## Timing of Callback
- Before setting group member info.

## Interface Description

### Request URL Example
Here `CallbackCommand` is: `callbackBeforeSetGroupMemberInfoCommand`
```plaintext
{WEBHOOK_ADDRESS}/callbackBeforeSetGroupMemberInfoCommand?contenttype=json
```

### Request Package Example
```json
{
  "callbackCommand": "callbackBeforeSetGroupMemberInfoCommand",
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
| callbackCommand         | string | Callback command, here it is the callback before setting group member info                             |
| groupID                 | string | Unique identifier of the group                                               |
| userID                  | string | User ID of the member who joined the group.                                             |
| nickName                | *string | Nickname of the user in the group.|
| faceURL                 | *string | Avatar URL of the group member                                                |
| roleLevel               | *int32 | Permission level of the user in the group. Ordinary member (20) or administrator (60)|
| ex                      | *string | Extra data field                                                 |

## Response Package Example

### Allow Modification

```json
{
    "actionCode": 0,
    "errCode": 0,
    "errMsg": "",
    "errDlt": "",
    "nextCode": 0,
    "ex": "Some extra data",
    "nickName":"user",
    "faceURL": "http://example.com/path/to/face/image.png",
    "roleLevel": 20
}

```

## Response Package Field Description

| Field         | Value                        | Description                                                                                         |
| ------------- | ---------------------------- | --------------------------------------------------------------------------------------------------- |
| actionCode    | 0                            | Indicates whether the business system callback was executed correctly. `0` means the operation was successful. |
| errCode       | 5001                         | Custom error code, ranges from 5000-9999. Set when actionCode is not 0; set when nextCode is 1.      |
| errMsg        | "An error message"           | Simple error message corresponding to the custom error code.                                        |
| errDlt        | "Detailed error information" | Detailed error information corresponding to the custom error code.                                  |
| nextCode      | 1                            | Next execution instruction, `1` means refusing to continue execution, set when actionCode is `0`.    |
| ex                  | *string | Extra data field                                                 |
| nickName                | *string | Nickname of the user in the group.|
| faceURL                 | *string | Avatar URL of the group member                                                |
| roleLevel               | *int32 | Permission level of the user in the group. Ordinary member (20) or administrator (60)|
