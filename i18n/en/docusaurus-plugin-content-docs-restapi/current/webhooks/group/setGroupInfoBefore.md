---
sidebar_position: 7
title: Callback Before Setting Group Info
hide_title: true
---

# Callback Before Setting Group Info

## Functional Description


Before setting group info, the business server can reject this request, or modify and intervene in the request.

## Precautions
- To enable the callback, you must configure the callback URL and turn on the switch corresponding to this callback protocol. See the [Callback Description](../introduction) document for configuration methods.
- The callback direction is an HTTP/HTTPS POST request initiated by IMServer to the business server.
- The business server must respond to this request within the timeout period.

## Scenarios That May Trigger This Callback

- Before users perform corresponding operations through the client or APP administrators through REST API.

## Timing of Callback

- Before setting group info.

## Interface Description

### Request URL Example
Here `CallbackCommand` is: `callbackBeforeSetGroupInfoExCommand`
```plaintext
{WEBHOOK_ADDRESS}/callbackBeforeSetGroupInfoExCommand?contenttype=json
```

### Request Package Example

```json
{
  "callbackCommand": "callbackBeforeSetGroupInfoExCommand",
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

| Field             | Type        | Description                                               |
| ----------------- | ----------- | -------------------------------------------------- |
| callbackCommand   | string      | Callback command, here it is the callback before setting group info             |
| operationID       | string      | Used for global link tracking, timestamp is recommended, independent in each request |
| groupID           | string      | Unique identifier of the group                                   |
| groupName         | StringValue | Name of the group                                         |
| notification      | StringValue | Notification info of the group                                     |
| introduction      | StringValue | Introduction of the group                                         |
| faceURL           | StringValue | URL of the group's icon                                   |
| ex                | StringValue | Extra data field                                     |
| needVerification  | Int32Value  | Whether verification is needed to join the group                               |
| lookMemberInfo    | Int32Value  | Whether member info can be viewed                             |
| applyMemberFriend | Int32Value  | Whether members can be applied as friends                         |

## Response Package Example

### Allow Modification

Allow modifying group info.

```json
{
  "actionCode": 0,
  "errCode": 0,
  "errMsg": "",
  "errDlt": "",
  "nextCode": "nextCodeValue",
  "groupInfoForSet": {
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
}
```

## Response Package Field Description

| Field             | Type                         | Description                                                                                                |
| ----------------- | ---------------------------- | --------------------------------------------------------------------------------------------------- |
| actionCode        | 0                            | Indicates whether the business system callback was executed correctly. `0` means the operation was successful.                                                   |
| errCode           | 5001                         | Custom error code, ranges from 5000-9999. Set when actionCode is not 0; set when nextCode is 1. |
| errMsg            | "An error message"           | Simple error message corresponding to the custom error code.                                                                    |
| errDlt            | "Detailed error information" | Detailed error information corresponding to the custom error code.                                                                    |
| nextCode          | 1                            | Next execution instruction, `1` means refusing to continue execution, set when actionCode is `0`.                                     |
| groupID           | string                       | Unique identifier of the group                                                                                    |
| groupName         | StringValue                  | Name of the group                                                                                          |
| notification      | StringValue                  | Notification info of the group                                                                                      |
| introduction      | StringValue                  | Introduction of the group                                                                                          |
| faceURL           | StringValue                  | URL of the group's icon                                                                                    |
| ex                | StringValue                  | Extra data field                                                                                      |
| needVerification  | Int32Value                   | Whether verification is needed to join the group                                                                                |
| lookMemberInfo    | Int32Value                   | Whether member info can be viewed                                                                              |
| applyMemberFriend | Int32Value                   | Whether members can be applied as friends                                                                          |
