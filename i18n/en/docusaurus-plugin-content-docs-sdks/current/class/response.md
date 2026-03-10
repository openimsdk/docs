---
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# Response

## Description

:::info

General parameter description for uni-app and JS SDK Promise function callbacks.

:::

<Tabs
groupId="sdks-language"
values={[
{ label: 'uni-app', value: 'uni-app', },
{ label: 'Browser/Electron/MiniProgram', value: 'Web', },
{ label: 'React-Native', value: 'React-Native', },
]
}>

<TabItem value="uni-app">

### CatchResponse

### Type

```ts
type CatchResponse = {
  errCode: number;
  errMsg: string;
};
```

### Field Description

| Field Name | Field Type | Description                     |
| -------- | -------- | ------------------------ |
| errCode  | number   | Error code when call fails       |
| errMsg   | string   | Error description information when call fails |

</TabItem>

<TabItem value="React-Native">

### OpenIMApiError

### Type

```ts
export class OpenIMApiError extends Error {
  name: string = 'OpenIMApiError';
  code: number;
  message: string;
  operationID: string;

  constructor(code: number, message: string, operationID: string) {
    super(message);
    this.code = code;
    this.message = message;
    this.operationID = operationID;
  }
}
```

### Field Description

| Field Name | Field Type | Description                     |
| -------- | -------- | ------------------------ |
| name     | string   | Error name                 |
| code  | number   | Error code when call fails       |
| message   | string   | Error description information when call fails |
| operationID   | string   | The operationID passed during the call  |

</TabItem>

<TabItem value="Web">

### WsResponse

### Type

```ts
type WsResponse<T = unknown> = {
  errCode: number;
  errMsg: string;
  data: T;
  operationID: string;
};
```

### Field Description

| Field Name    | Field Type | Description                           |
| ----------- | -------- | ------------------------------ |
| errCode     | number   | Error code when call fails             |
| errMsg      | string   | Error description information when call fails       |
| operationID | string   | The operationID passed during the call       |
| data        | T        | Return result when call is successful, as generic |

### WSEvent

### Type

```ts
type WSEvent<T = unknown> = {
  event: CbEvents;
  data: T;
  errCode: number;
  errMsg: string;
  operationID: string;
};
```

### Field Description

| Field Name    | Field Type | Description               |
| ----------- | -------- | ------------------ |
| event       | CbEvents | Listener event           |
| data        | T        | Callback result, as generic |
| errCode     | number   | Error code             |
| errMsg      | string   | Error description information       |
| operationID | string   | Unique operation id        |

</TabItem>

</Tabs>
