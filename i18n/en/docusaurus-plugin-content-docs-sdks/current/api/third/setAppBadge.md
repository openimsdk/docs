---
sidebar_position: 5
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# setAppBadge

## Description

:::info

Set App unread count badge, used to display unread count badge during offline push.

:::

:::caution Note

Currently only effective for firebase.

:::

<Tabs
groupId="sdks-language"
values={[
{ label: 'iOS', value: 'iOS', },
{ label: 'Flutter', value: 'Flutter', },
{ label: 'uni-app', value: 'uni-app', },
{ label: 'React-Native', value: 'React-Native', },
]
}>

<TabItem value="Flutter">

### Function Prototype

```dart showLineNumbers
  Future setAppBadge(int count, {
    String? operationID,
  });
```

### Input Parameters

| Parameter Name       | Parameter Type | Required | Description             |
| -------------- | -------- | -------- | ---------------- |
| count | int   | Yes      | Badge count         |

### Return Result

| Parameter Name | Parameter Type | Description         |
| -------- | -------- | ------------ |
| then     | void     | Success callback |
| onError  | Function | Failure callback |

### Code Example

```swift showLineNumbers
OpenIM.iMManager.messageManager.setAppBadge();
```

</TabItem>

<TabItem value="iOS">

### Function Prototype

```swift showLineNumbers

- (void)setAppBadge:(NSInteger)count
          onSuccess:(nullable OIMSuccessCallback)onSuccess
          onFailure:(nullable OIMFailureCallback)onFailure;

```

### Input Parameters

| Parameter Name | Parameter Type  | Required | Description |
| -------- | --------- | -------- | ---- |
| count    | NSInteger | Yes      | Badge count |

### Return Result

| Name      | Type                                                   | Description     |
| --------- | ------------------------------------------------------ | -------- |
| onSuccess | OIMSuccessCallback | Success return |
| onFailure | OIMFailureCallback   | Failure return |

### Code Example

```swift showLineNumbers

[OIMManager.manager setAppBadge:0
                      onSuccess:^(NSString * _Nullable data) {

} onFailure:^(NSInteger code, NSString * _Nullable msg) {

}];

```

</TabItem>

<TabItem value="Android">

### Parameter Details

</TabItem>

<TabItem value="Web">

### Parameter Details

</TabItem>

<TabItem value="uni-app">

### Function Prototype

```ts showLineNumbers
IMSDK.asyncApi('setAppBadge', operationID: string, badge: number): Promise<void>
```

### Input Parameters

| Parameter Name    | Parameter Type | Required | Description                                                    |
| ----------- | -------- | -------- | ------------------------------------------------------- |
| operationID | string   | Yes      | Operation ID, used to pinpoint issues, keep unique, prefer time+random |
| badge       | number   | Yes      | Badge count                                                  |

### Return Result

> Use the `openim-uniapp-polyfill` package to make the function Promise. When calling, you need to use `then` and `catch` to determine and handle success and failure callbacks.

| Parameter Name  | Parameter Type                                                | Description         |
| --------------- | ------------------------------------------------------- | ------------ |
| Promise.then()  | Promise<void\>                                          | Success callback |
| Promise.catch() | Promise<[CatchResponse](/class/response.md)\> | Failure callback |

### Code Example

```js showLineNumbers
import IMSDK from 'openim-uniapp-polyfill';

IMSDK.asyncApi('setAppBadge', IMSDK.uuid(), 99)
  .then(() => {
    // Call successful
  })
  .catch(({ errCode, errMsg }) => {
    // Call failed
  });
```

</TabItem>
<TabItem value="React-Native">

### Function Prototype

```ts showLineNumbers
OpenIMSDK.setAppBadge(appUnreadCount: number, operationID?: string): Promise<void>
```

### Input Parameters

| Parameter Name    | Parameter Type | Required | Description                                                    |
| ----------- | -------- | -------- | ------------------------------------------------------- |
| badge       | number   | Yes      | Badge count                                                  |
| operationID | string   | No       | Operation ID, used to pinpoint issues, keep unique, prefer time+random |

### Return Result

| Parameter Name  | Parameter Type                                                | Description         |
| --------------- | ------------------------------------------------------- | ------------ |
| Promise.then()  | Promise<void\>                                          | Success callback |
| Promise.catch() | Promise<[OpenIMApiError](/class/response.md)\> | Failure callback |

### Code Example

```js showLineNumbers
import OpenIMSDK from "@openim/rn-client-sdk";

OpenIMSDK.setAppBadge(99)
  .then(() => {
    // Call successful
  })
  .catch((error) => {
    // Call failed
  });
```

</TabItem>
</Tabs>
