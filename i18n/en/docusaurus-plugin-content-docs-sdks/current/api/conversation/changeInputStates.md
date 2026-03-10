---
sidebar_position: 16
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# changeInputStates

## Description

:::info

Change input states.

:::

:::caution Note

When typing is finished, focus needs to be set to false.

:::

<Tabs
groupId="sdks-language"
values={[
{ label: 'iOS', value: 'iOS', },
{ label: 'Android', value: 'Android', },
{ label: 'Flutter', value: 'Flutter', },
{ label: 'uni-app', value: 'uni-app', },
{ label: 'Browser/Electron/MiniProgram', value: 'Web', },
{ label: 'React-Native', value: 'React-Native', },
{ label: 'Unity', value: 'Unity', },
]
}>

<TabItem value="Flutter">

### Function Prototype

```dart showLineNumbers
Future changeInputStates({
    required String conversationID,
    required bool focus,
    String? operationID,
  })
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description |
| -------------- | -------- | -------- | ------- |
| conversationID | String   | Yes      | Conversation ID |
| focus | bool   | Yes      | Is typing focus |

### Return Result

| Name | Type | Description                 |
| ---- | ---- | -------------------- |
| ~    | ~    | Operation successful if no exception thrown |

### Code Example

```dart showLineNumbers
    await OpenIM.iMManager.conversationManager.changeInputStates(conversationID: conversationID, focus: focus);
    //todo
```

</TabItem>

<TabItem value="iOS">

### Function Prototype

```swift showLineNumbers

- (void)changeInputStates:(NSString *)conversationID
                    focus:(BOOL)focus
                 onSuccess:(nullable OIMSuccessCallback)onSuccess
                 onFailure:(nullable OIMFailureCallback)onFailure;

```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description |
| -------------- | -------- | -------- | ------- |
| conversationID | NSString | Yes      | Conversation ID |
| focus | BOOL   | Yes      | Is typing focus |

### Return Result

| Name      | Type                                                   | Description     |
| --------- | ------------------------------------------------------ | -------- |
| onSuccess | OIMSuccessCallback | Success return |
| onFailure | OIMFailureCallback   | Failure return |

### Code Example

```swift showLineNumbers

[OIMManager.manager changeInputStates:@"" 
                                focus:
                           onSuccess:^(NSString * _Nullable data) {

} onFailure:^(NSInteger code, NSString * _Nullable msg) {

}];

```

</TabItem>

<TabItem value="Android">

### Function Prototype

```java showLineNumbers
public void changeInputState(OnBase<String> base, String conversionId, boolean focus)
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description |
| -------------- | -------- | -------- | ------- |
| conversationID | String   | Yes      | Conversation ID |
| focus          | boolean | Yes      | Is typing focus |

### Return Result

### Code Example

```java showLineNumbers
OpenIMClient.getInstance().conversationManager.changeInputState(new OnBase<String>() {
    @Override
    public void onError(int code, String error) {
        // todo: handle error information
    }
    @Override
    public void onSuccess(String data) {
        // todo: request successful
    }
}, conversationID , focus);
```

</TabItem>

<TabItem value="Web">

### Function Prototype

```ts showLineNumbers
IMSDK.changeInputStates({
  conversationID: string,
  focus: boolean,
}, operationID?: string): Promise<WsResponse>
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description |
| -------------- | -------- | -------- | ------- |
| conversationID | string   | Yes      | Conversation ID |
| focus          | boolean  | Yes      | Is typing focus |
| operationID    | string   | No       | Operation ID, used to pinpoint issues, keep unique, prefer time+random |

### Return Result

| Parameter Name  | Parameter Type                                       | Description      |
| --------------- | ---------------------------------------------------- | ------------ |
| Promise.then()  | Promise<[WsResponse](/class/response.md)\> | Success callback |
| Promise.catch() | Promise<[WsResponse](/class/response.md)\> | Failure callback |

### Code Example

```js showLineNumbers
import { getSDK } from '@openim/wasm-client-sdk';
const IMSDK = getSDK();

// use in electron with ffi
// import { getWithRenderProcess } from '@openim/electron-client-sdk/lib/render';
// const { instance: IMSDK } = getWithRenderProcess();

// use in mini program
// import { getSDK } from '@openim/client-sdk';
// const IMSDK = getSDK();

IMSDK.changeInputStates({
  conversationID: 'conversationID',
  focus: true,
})
  .then(() => {
    // Call successful
  })
  .catch(({ errCode, errMsg }) => {
    // Call failed
  });
```

</TabItem>

<TabItem value="uni-app">

### Function Prototype

```ts showLineNumbers
IMSDK.asyncApi('changeInputStates', operationID: string, {
  conversationID: string,
  focus: boolean,
}): Promise<void>
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description |
| -------------- | -------- | -------- | ------- |
| conversationID | string   | Yes      | Conversation ID |
| focus          | boolean  | Yes      | Is typing focus |
| operationID    | string   | Yes      | Operation ID, used to pinpoint issues, keep unique, prefer time+random |

### Return Result

> Use the `openim-uniapp-polyfill` package to make the function Promise. When calling, you need to use `then` and `catch` to determine and handle success and failure callbacks.

| Parameter Name  | Parameter Type                                          | Description      |
| --------------- | ------------------------------------------------------- | ------------ |
| Promise.then()  | Promise<void\>                                          | Success callback |
| Promise.catch() | Promise<[CatchResponse](/class/response.md)\> | Failure callback |

### Code Example

```js showLineNumbers
import IMSDK from 'openim-uniapp-polyfill';

IMSDK.asyncApi('changeInputStates', IMSDK.uuid(), {
  conversationID: 'conversationID',
  focus: true,
})
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
OpenIMSDK.changeInputStates({
  conversationID: string,
  focus: boolean,
}, operationID?: string): Promise<void>
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description |
| -------------- | -------- | -------- | ------- |
| conversationID | string   | Yes      | Conversation ID |
| focus          | boolean  | Yes      | Is typing focus |
| operationID    | string   | No       | Operation ID, used to pinpoint issues, keep unique, prefer time+random |

### Return Result
| Parameter Name  | Parameter Type                                          | Description      |
| --------------- | ------------------------------------------------------- | ------------ |
| Promise.then()  | Promise<void\>                                          | Success callback |
| Promise.catch() | Promise<[OpenIMApiError](/class/response.md)\> | Failure callback |

### Code Example

```js showLineNumbers
import OpenIMSDK from "@openim/rn-client-sdk";

OpenIMSDK.changeInputStates({
  conversationID: 'conversationID',
  focus: true,
})
  .then(() => {
    // Call successful
  })
  .catch((error) => {
    // Call failed
  });
```

</TabItem>

<TabItem value="Unity">

:::caution Note

Not implemented

:::

</TabItem>

</Tabs>
