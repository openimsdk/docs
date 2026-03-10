---
sidebar_position: 2
title: Confirm Upload
hide_title: true
---

<center>

## Confirm Upload

</center>

### Brief Description

- Notify the server to complete the upload after successful direct file upload, and generate an accessible object address.

### Request Method

- `post`

### Request URL

- `{API_ADDRESS}/object/complete_form_data`

### Header

| Header Name | Example Value | Optional | Type | Description |
| :---------- | :------------ | :--- | ------ | ---------------------------- |
| operationID | 1646445464564 | Required | string | Used for global link tracking, timestamp is recommended, independent in each request |
| token       | eyJhbxxxx3Xs  | Required | string | [Admin token](/restapi/apis/authenticationManagement/getAdminToken) |

### Request Parameter Example

```json
{
  "id": "upload-task-id"
}
```

| Field Name | Optional | Type   | Description                |
| :----- | :--- | :----- | ------------------- |
| id     | Required | string | ID returned in the initialization phase |

### Success Return Example

```json
{
  "errCode": 0,
  "errMsg": "",
  "errDlt": "",
  "data": {
    "url": "https://cdn.example.com/avatar.png"
  }
}
```

### Parameter Description for Success Return Example

| Parameter Name | Type   | Description                         |
| :----- | :----- | :--------------------------- |
| errCode | int   | Error code, 0 means success            |
| errMsg  | string | Brief error message, empty    |
| errDlt  | errDlt | Detailed error message, empty    |
| data    | object | Generic data object, specific structure is below |
| url     | string | The final address where the file can be accessed on the business side |

> Only after finishing direct upload using the certificate returned by `initiate_form_data` and confirming success, the server will return `url`. It can be written into business data or delivered to the client.

### Failure Return Example

```json
{
  "errCode": 1004,
  "errMsg": "RecordNotFoundError",
  "errDlt": ": [1004]RecordNotFoundError"
}
```

### Parameter Description for Failure Return Example

| Parameter Name  | Type   | Description                          |
| :------ | :----- | :---------------------------- |
| errCode | int    | Error code, specifically check the global error code document |
| errMsg  | string | Brief error message                  |
| errDlt  | errDlt | Detailed error message                  |
