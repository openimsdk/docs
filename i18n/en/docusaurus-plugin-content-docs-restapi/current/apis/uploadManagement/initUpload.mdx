---
sidebar_position: 1
title: 获取上传凭证
hide_title: true
---

<center>

## 获取上传凭证

</center>

### 简要描述

- 初始化表单直传任务，获取上传所需的临时 URL、字段和 Header。

### 请求方式

- `post`

### 请求 URL

- `{API_ADDRESS}/object/initiate_form_data`

### Header

| header 名   | 示例值        | 选填 | 类型   | 说明                         |
| :---------- | :------------ | :--- | ------ | ---------------------------- |
| operationID | 1646445464564 | 必填 | string | 用于全局链路追踪，建议使用时间戳，在每个请求中独立 |
| token       | eyJhbxxxx3Xs  | 必填 | string | [管理员 token](/restapi/apis/authenticationManagement/getAdminToken) |

### 请求参数示例

```json
{
  "name": "avatar.png",
  "size": 204800,
  "contentType": "image/png",
  "group": "avatar",
  "millisecond": 600000
}
```

| 字段名      | 选填 | 类型   | 说明                                             |
| :---------- | :--- | :----- | ------------------------------------------------ |
| name        | 必填 | string | 对象名称，通常为文件名                           |
| size        | 必填 | int64  | 文件大小（字节）                                 |
| contentType | 必填 | string | 文件 MIME 类型，如 `image/png`                  |
| group       | 选填 | string | 文件分组标识，用于在存储端区分业务目录           |
| millisecond | 选填 | int64  | 上传地址有效时长（毫秒），不填使用服务端默认值   |

### 成功返回示例

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

### 成功返回示例的参数说明

| 参数名      | 类型            | 说明                                                                 |
| :---------- | :-------------- | :------------------------------------------------------------------- |
| errCode     | int             | 错误码，0 表示成功                                                   |
| errMsg      | string          | 错误简要信息，为空                                                   |
| errDlt      | errDlt          | 错误详细信息，为空                                                   |
| data        | object          | 通用数据对象，具体结构见下方                                         |
| id          | string          | 上传任务 ID，稍后调用完成接口时使用                                  |
| url         | string          | 第三方存储直传地址                                                   |
| file        | string          | 文件内容对应的表单字段名                                             |
| header      | KeyValues 数组  | 直传 HTTP Header 列表                                                |
| formData    | map<string,string> | 需要在表单中追加的业务字段集合                                  |
| expires     | int64           | 凭证过期时间戳（毫秒）                                               |
| successCodes | array<int32/>   | 直传成功时可接受的 HTTP 状态码，如 `200`                             |

### 上传说明

1. 构造 `multipart/form-data` 请求，目标地址为返回的 `url`。
2. 将 `header` 中给出的键值添加到 HTTP Header。
3. 在请求体中写入 `formData` 的所有键值对，键名和键值须保持原样。
4. 将真实的文件内容放入 `file` 字段（字段名必须与返回值一致），例如 `-F "file=@avatar.png"`。
5. 根据 `successCodes` 列表判断上传是否成功，收到成功响应后再调用确认接口。

示例命令：

```bash
curl -X POST "https://storage.example.com/form-upload" \
  -H "Content-Type: multipart/form-data" \
  -F "policy=BASE64_POLICY" \
  -F "signature=SIGN_VALUE" \
  -F "key=tmp/avatar.png" \
  -F "file=@avatar.png"
```