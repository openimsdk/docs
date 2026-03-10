---
sidebar_position: 17
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# getInputStates

## Description

:::info

Get a user's current input status.

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
Future getInputstates({
    required String conversationID,
    required String userID,
    String? operationID,
  })
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description |
| -------------- | -------- | -------- | ------- |
| conversationID | String   | Yes      | Conversation ID |
| userID | String   | Yes      | User ID |

### Return Result

| Name | Type | Description                 |
| ---- | ---- | -------------------- |
| ~    | Future< List< int>?>    | Operation successful if no exception is thrown |

### Code Example

```dart showLineNumbers
    await OpenIM.iMManager.conversationManager.getInputstates(conversationID: conversationID, userID: );
    //todo
```

</TabItem>

<TabItem value="iOS">

### Function Prototype

```swift showLineNumbers

- (void)getInputstates:(NSString *)conversationID
                    userID:(NSString)userID
                 onSuccess:(nullable OIMInputStatusChangedCallback)onSuccess
                 onFailure:(nullable OIMFailureCallback)onFailure;

```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description |
| -------------- | -------- | -------- | ------- |
| conversationID | NSString | Yes      | Conversation ID |
| userID | NSString   | Yes      | User ID |

### Return Result

| Name      | Type                                                   | Description     |
| --------- | ------------------------------------------------------ | -------- |
| onSuccess | NSArray< NSNumber \*>  | Success return |
| onFailure | OIMFailureCallback   | Failure return |

### Code Example

```swift showLineNumbers

[OIMManager.manager getInputstates:@"" 
                                userID:
                           onSuccess:^(NSArray<NSNumber *> * _Nullable data) {

} onFailure:^(NSInteger code, NSString * _Nullable msg) {

}];

```

</TabItem>

<TabItem value="Android">

### Function Prototype

```java showLineNumbers
public void getInputState(OnBase<List<Integer>> base, String conversionId, String userId)
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description |
| -------------- | -------- | -------- | ------- |
| conversationID | String   | Yes      | Conversation ID |
| userId         | String   | Yes      | User ID  |

### Return Result

### Code Example

```java showLineNumbers
OpenIMClient.getInstance().conversationManager.getInputState(new OnBase<List<Integer>>() {
    @Override
    public void onError(int code, String error) {
        // todo: handle error information
    }
    @Override
    public void onSuccess(List<Integer> data) {
        // todo: request successful
    }
}, conversationID , userId);
```


</TabItem>

<TabItem value="Web">

### Function Prototype

```ts showLineNumbers
IMSDK.getInputstates({
  conversationID: string,
  userID: string,
}, operationID?: string): Promise<WsResponse<number[]>>
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description |
| -------------- | -------- | -------- | ------- |
| conversationID | string   | Yes      | Conversation ID |
| userID         | string   | Yes      | User ID |
| operationID    | string   | No       | Operation ID, used to pinpoint issues, keep unique, prefer time+random |

### Return Result

| Parameter Name  | Parameter Type                                       | Description      |
| --------------- | ---------------------------------------------------- | ------------ |
| Promise.then()  | Promise<[WsResponse](/class/response.md)<number[]>\> | Success callback |
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

IMSDK.getInputstates({
  conversationID: 'conversationID',
  userID: 'userID',
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
IMSDK.asyncApi('getInputstates', operationID: string, {
  conversationID: string,
  userID: string,
}): Promise<number[]>
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description |
| -------------- | -------- | -------- | ------- |
| conversationID | string   | Yes      | Conversation ID |
| userID         | string   | Yes      | User ID |
| operationID    | string   | Yes      | Operation ID, used to pinpoint issues, keep unique, prefer time+random |

### Return Result

> Use the `openim-uniapp-polyfill` package to make the function Promise. When calling, you need to use `then` and `catch` to determine and handle success and failure callbacks.

| Parameter Name  | Parameter Type                                          | Description      |
| --------------- | ------------------------------------------------------- | ------------ |
| Promise.then()  | Promise<number[]\>                                          | Success callback |
| Promise.catch() | Promise<[CatchResponse](/class/response.md)\> | Failure callback |

### Code Example

```js showLineNumbers
import IMSDK from 'openim-uniapp-polyfill';

IMSDK.asyncApi('getInputstates', IMSDK.uuid(), {
  conversationID: 'conversationID',
  userID: 'userID',
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
OpenIMSDK.getInputstates({
  conversationID: string,
  userID: string,
}, operationID?: string): Promise<number[]>
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description |
| -------------- | -------- | -------- | ------- |
| conversationID | string   | Yes      | Conversation ID |
| userID         | string   | Yes      | User ID |
| operationID    | string   | No       | Operation ID, used to pinpoint issues, keep unique, prefer time+random |

### Return Result
| Parameter Name  | Parameter Type                                          | Description      |
| --------------- | ------------------------------------------------------- | ------------ |
| Promise.then()  | Promise<number[]\>                                          | Success callback |
| Promise.catch() | Promise<[OpenIMApiError](/class/response.md)\> | Failure callback |

### Code Example

```js showLineNumbers
import OpenIMSDK from "@openim/rn-client-sdk";

OpenIMSDK.getInputstates({
  conversationID: 'conversationID',
  userID: 'userID',
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
