---
sidebar_position: 8
title: Callback After Setting Group Info
hide_title: true
---

# Callback After Setting Group Info

## Functional Description
After a successful operation, the business server can perform necessary data synchronization or other business logic processing through this callback.

## Precautions
- To enable the callback, you must configure the callback URL and turn on the switch corresponding to this callback protocol. See the [Callback Description](../introduction) document for configuration methods.
- The callback direction is an HTTP/HTTPS POST request initiated by IMServer to the business server.
- The business server must respond to this request within the timeout period.

## Scenarios That May Trigger This Callback
- After users perform corresponding operations successfully through the client or APP administrators through REST API.

## Timing of Callback
- After successfully setting group info.

## Interface Description

### Request URL Example
Here `CallbackCommand` is: `callbackAfterSetGroupInfoExCommand`
```plaintext
{WEBHOOK_ADDRESS}/callbackAfterSetGroupInfoExCommand?contenttype=json
```

### Request Package Example
```json
{
  "callbackCommand": "callbackAfterSetGroupInfoExCommand",
  "operationID": "1646445464564",
  "groupID": "G002",
  "groupName": {
    "value": "NewGroupName"
  },
  "notification": {
    "value": "Updated group notification"
  },
  "introduction": {
    "value": "Updated group introduction"
  },
  "faceURL": {
    "value": "http://example.com/new/path/to/face/image.png"
  },
  "ex": {
    "value": "Updated extra data"
  },
  "needVerification": {
    "value": 0
  },
  "lookMemberInfo": {
    "value": 1
  },
  "applyMemberFriend": {
    "value": 0
  }
}
```

### Request Package Field Description

| Field             | Type    | Description                                   |
| ----------------- | ------- | -------------------------------------- |
| callbackCommand   | string  | Callback command, here it is the callback after setting group info |
| operationID       | string  | Used for global link tracking, timestamp is recommended, independent in each request            |
| groupID           | string  | Unique identifier of the group                       |
| groupName         | string  | Name of the group                             |
| notification      | string  | Notification info of the group                         |
| introduction      | string  | Introduction of the group                             |
| faceURL           | string  | URL of the group's icon                        |
| ex                | *string | Extra data field                         |
| needVerification  | *int32  | Whether verification is needed to join the group                   |
| lookMemberInfo    | *int32  | Whether member info can be viewed                 |
| applyMemberFriend | *int32  | Whether members can be applied as friends             |

## Response Package Example

### Operation Completed
Confirm that the group info modification operation has been completed.

```json
{
  "actionCode": 0,
  "errCode": 0,
  "errMsg": "",
  "errDlt": "",
  "nextCode": 0
}
```

## Response Package Field Description

| Field      | Value                        | Description                                                     |
| ---------- | ---------------------------- | --------------------------------------------------------------- |
| actionCode | 0                            | Indicates whether the business system callback was executed correctly. `0` means the operation was successful. |
| errCode    | 0                            | Custom error code, `0` here means ignore the callback result.   |
| errMsg     | "An error message"           | Simple error message corresponding to the custom error code.    |
| errDlt     | "Detailed error information" | Detailed error information corresponding to the custom error code. |
| nextCode   | 1                            | Next execution instruction, `1` means refusing to continue execution, set when actionCode is `0`. |
