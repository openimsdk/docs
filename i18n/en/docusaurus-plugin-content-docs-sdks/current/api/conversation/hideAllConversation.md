---
sidebar_position: 16
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# hideAllConversation

## Description

:::info

Hide all local conversations. This will not delete the messages within the conversations. When a new message is received, the conversation will be displayed again.

:::

<Tabs
groupId="sdks-language"
values={[
{ label: 'iOS', value: 'iOS', },
{ label: 'Android', value: 'Android', },
{ label: 'Flutter', value: 'Flutter', },
{ label: 'uni-app', value: 'uni-app', },
{ label: 'Browser/Electron', value: 'Web', },
{ label: 'React-Native', value: 'React-Native', },
{ label: 'Unity', value: 'Unity', },
]
}>

<TabItem value="Flutter">

### Function Prototype

```dart showLineNumbers
  Future<dynamic> deleteAllConversationFromLocal({
    String? operationID,
  })
```

### Input Parameters

None

### Return Result

| Name | Type | Description                 |
| ---- | ---- | -------------------- |
| ~    | ~    | Operation successful if no exception thrown |

### Code Example

```dart showLineNumbers
    await OpenIM.iMManager.conversationManager.deleteAllConversationFromLocal();
    //todo
```

</TabItem>

<TabItem value="iOS">

### Function Prototype

```swift showLineNumbers

- (void)deleteAllConversationFromLocalWithOnSuccess:(nullable OIMSuccessCallback)onSuccess
                                          onFailure:(nullable OIMFailureCallback)onFailure;

```

### Input Parameters

None

### Return Result

| Name      | Type                                                   | Description     |
| --------- | ------------------------------------------------------ | -------- |
| onSuccess | OIMSuccessCallback | Success return |
| onFailure | OIMFailureCallback   | Failure return |

### Code Example

```swift showLineNumbers

[OIMManager.manager deleteAllConversationFromLocalWithOnSuccess:^(NSString * _Nullable data) {

} onFailure:^(NSInteger code, NSString * _Nullable msg) {

}];

```

</TabItem>

<TabItem value="Android">

### Function Prototype

```java showLineNumbers

  public void deleteAllConversationFromLocal(OnBase<String> base)

```

### Input Parameters

| Parameter Name | Parameter Type                                | Required | Description     |
| -------- | --------------------------------------- | -------- | -------- |
| base     | [OnBase](/callback/onBase.md) | Yes      | Callback interface |

### Code Example

```java showLineNumbers
        OpenIMClient.getInstance().messageManager.deleteAllMsgFromLocalAndSvr(new OnBase<String>() {
                        @Override
                        public void onError(int code, String error) {

                        }

                        @Override
                        public void onSuccess(String data) {

                        }
                    });
```

</TabItem>

<TabItem value="Web">

### Function Prototype

```ts showLineNumbers
IMSDK.deleteAllConversationFromLocal(operationID?: string): Promise<WsResponse>
```

### Input Parameters

None

### Return Result

| Parameter Name  | Parameter Type                                             | Description         |
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

IMSDK.deleteAllConversationFromLocal()
  .then(({ data }) => {
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
OpenIMSDK.hideAllConversations(operationID?: string): Promise<void>
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description                                                    |
| ----------- | -------- | -------- | ------------------------------------------------------- |
| operationID | string   | No       | Operation ID, used to pinpoint issues, keep unique, prefer time+random |

### Return Result

| Parameter Name  | Parameter Type                                             | Description         |
| --------------- | ---------------------------------------------------- | ------------ |
| Promise.then()  | Promise<[WsResponse](/class/response.md)\> | Success callback |
| Promise.catch() | Promise<[WsResponse](/class/response.md)\> | Failure callback |

### Code Example

```js showLineNumbers
import OpenIMSDK from "@openim/rn-client-sdk";

OpenIMSDK.hideAllConversations()
  .then(() => {
    // Call successful
  })
  .catch((error) => {
    // Call failed
  });
```

</TabItem>

<TabItem value="Unity">

### Function Prototype

```C# showLineNumbers

public static void HideAllConversations(OnBase<bool> cb)

```

### Input Parameters

| Parameter Name | Parameter Type                                | Required | Description     |
| -------- | --------------------------------------- | -------- | -------- |
| cb | [OnBase](/callback/onBase.md) | Yes      | Callback interface |

### Code Example

```C# showLineNumbers
IMSDK.HideAllConversations((suc,errCode,errMsg)=>{

});
```

</TabItem>

</Tabs>
