---
sidebar_position: 1
title: Get Upload Certificate
hide_title: true
---

<center>

## Get Upload Certificate

</center>

### Brief Description

- Initialize form direct upload task, get temporary URL, fields, and Header needed for upload.

### Request Method

- `post`

### Request URL

- `{API_ADDRESS}/object/initiate_form_data`

### Header

| Header Name | Example Value | Optional | Type | Description |
| :---------- | :------------ | :--- | ------ | ---------------------------- |
| operationID | 1646445464564 | Required | string | Used for global link tracking, timestamp is recommended, independent in each request |
| token       | eyJhbxxxx3Xs  | Required | string | [Admin token](/restapi/apis/authenticationManagement/getAdminToken) |

### Request Parameter Example

```json
{
  "name": "avatar.png",
  "size": 204800,
  "contentType": "image/png",
  "group": "avatar",
  "millisecond": 600000
}
```

| Field Name  | Optional | Type   | Description                                      |
| :---------- | :--- | :----- | ------------------------------------------------ |
| name        | Required | string | Object name, usually the file name                           |
| size        | Required | int64  | File size (bytes)                                 |
| contentType | Required | string | File MIME type, such as `image/png`                  |
| group       | Optional | string | File group flag, used to distinguish business directories on the storage side           |
| millisecond | Optional | int64  | Valid duration of upload address (milliseconds), leave blank to use server default value   |

### Success Return Example

```json
{
  "errCode": 0,
  "errMsg": "",
  "errDlt": "",
  "data": {
    "id": "upload-task-id",
    "url": "https://storage.example.com/form-upload",
    "file": "file",
    "header": [
      {
        "key": "Content-Type",
        "value": "multipart/form-data"
      }
    ],
    "formData": {
      "policy": "BASE64_POLICY",
      "signature": "SIGN_VALUE",
      "key": "tmp/avatar.png"
    },
    "expires": 1715065020123,
    "successCodes": [
      200
    ]
  }
}
```

### Parameter Description for Success Return Example

| Parameter Name | Type            | Description                                                                 |
| :---------- | :-------------- | :------------------------------------------------------------------- |
| errCode     | int             | Error code, 0 means success                                                   |
| errMsg      | string          | Brief error message, empty                                                   |
| errDlt      | errDlt          | Detailed error message, empty                                                   |
| data        | object          | Generic data object, specific structure is below                                         |
| id          | string          | Upload task ID, used later when calling finish interface                                  |
| url         | string          | Third-party storage direct upload address                                                   |
| file        | string          | Form field name corresponding to the file content                                             |
| header      | KeyValues Array | Direct upload HTTP Header list                                                |
| formData    | map<string,string> | Business field set that needs to be appended in the form                                  |
| expires     | int64           | Certificate expiration timestamp (milliseconds)                                               |
| successCodes | array<int32/>   | Acceptable HTTP status codes when direct upload is successful, such as `200`                             |

### Upload Instructions

1. Construct a `multipart/form-data` request with target address as the returned `url`.
2. Add the key-values given in `header` to the HTTP Header.
3. Write all key-value pairs of `formData` into the request body, keep key names and key values original.
4. Put the real file content into the `file` field (field name must be consistent with the return value), e.g. `-F "file=@avatar.png"`.
5. Check whether the upload is successful according to the `successCodes` list, and call confirm interface after receiving a successful response.

Example Command:

```bash
curl -X POST "https://storage.example.com/form-upload" \
  -H "Content-Type: multipart/form-data" \
  -F "policy=BASE64_POLICY" \
  -F "signature=SIGN_VALUE" \
  -F "key=tmp/avatar.png" \
  -F "file=@avatar.png"
```