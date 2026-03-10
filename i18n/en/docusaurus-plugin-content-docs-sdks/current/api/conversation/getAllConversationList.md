---
sidebar_position: 2
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# getAllConversationList

## Description

:::info

Get a list of all conversations.

:::

:::caution Note

If the conversation list grows too large, it is recommended to use [getConversationListSplit](/api/conversation/getConversationListSplit.md) to retrieve it via pagination.

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
  Future<List<ConversationInfo>> getAllConversationList(
          {String? operationID})
```

### Input Parameters

None

### Return Result

| Name | Type                                                                        | Description |
| ---- | --------------------------------------------------------------------------- | -------- |
| ~    | List<[ConversationInfo](/class/conversation/conversationInfo.md)> | Success return |

### Code Example

```dart showLineNumbers
    List<ConversationInfo> list = await OpenIM.iMManager.conversationManager.getAllConversationList();
    //todo
```

</TabItem>

<TabItem value="iOS">

### Function Prototype

```swift showLineNumbers

- (void)getAllConversationListWithOnSuccess:(nullable OIMConversationsInfoCallback)onSuccess
                                  onFailure:(nullable OIMFailureCallback)onFailure;

```

### Input Parameters

None

### Return Result

| Name      | Type                                                                                  | Description     |
| --------- | ------------------------------------------------------------------------------------- | -------- |
| onSuccess | NSArray< [OIMConversationInfo](/class/conversation/conversationInfo.md) \*> | Success return |
| onFailure | OIMFailureCallback                                  | Failure return |

### Code Example

```swift showLineNumbers

[OIMManager.manager getAllConversationListWithOnSuccess:^(NSArray<OIMConversationInfo *> * _Nullable conversations) {

} onFailure:^(NSInteger code, NSString * _Nullable msg) {

}];

```

</TabItem>

<TabItem value="Android">

### Function Prototype

```java showLineNumbers

 public void getAllConversationList(OnBase<List<ConversationInfo>> base)

```

### Input Parameters

| Name     | Type                                                                                                                 | Required | Description |
| -------- | -------------------------------------------------------------------------------------------------------------------- | ---- | -------- |
| callBack | [OnBase](/callback/onBase.md)<List<[ConversationInfo](/class/conversation/conversationInfo.md)>> | Yes   | Callback interface |

### Code Example

```java showLineNumbers
 OpenIMClient.getInstance().conversationManager.getAllConversationList(new OnBase<List<ConversationInfo>>() {
            @Override
            public void onError(int code, String error) {
            }

            @Override
            public void onSuccess(List<ConversationInfo> data) {

            }
        });

```

</TabItem>

<TabItem value="Web">

### Function Prototype

```ts showLineNumbers
IMSDK.getAllConversationList(operationID?: string): Promise<WsResponse<ConversationItem[]>>
```

### Input Parameters

None

### Return Result

| Parameter Name  | Parameter Type                                                                                | Description      |
| --------------- | --------------------------------------------------------------------------------------------- | ------------ |
| Promise.then()  | Promise<WsResponse<[ConversationItem](/class/conversation/conversationInfo.md)[]>\> | Success callback |
| Promise.catch() | Promise<[WsResponse](/class/response.md)\>                                          | Failure callback |

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

IMSDK.getAllConversationList()
  .then(({ data }) => {
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
IMSDK.asyncApi('getAllConversationList', operationID: string): Promise<ConversationItem[]>
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description                                                    |
| ----------- | -------- | -------- | ------------------------------------------------------- |
| operationID | string   | Yes      | Operation ID, used to pinpoint issues, keep unique, prefer time+random |

### Return Result

> Use the `openim-uniapp-polyfill` package to make the function Promise. When calling, you need to use `then` and `catch` to determine and handle success and failure callbacks.

| Parameter Name  | Parameter Type                                                                   | Description      |
| --------------- | -------------------------------------------------------------------------------- | ------------ |
| Promise.then()  | Promise<[ConversationItem](/class/conversation/conversationInfo.md)[]> | Success callback |
| Promise.catch() | Promise<[CatchResponse](/class/response.md)\>                          | Failure callback |

### Code Example

```js showLineNumbers
import IMSDK from 'openim-uniapp-polyfill';

IMSDK.asyncApi('getAllConversationList', IMSDK.uuid())
  .then((data) => {
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
OpenIMSDK.getAllConversationList(operationID?: string): Promise<ConversationItem[]>
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description                                                    |
| ----------- | -------- | -------- | ------------------------------------------------------- |
| operationID | string   | No       | Operation ID, used to pinpoint issues, keep unique, prefer time+random |

### Return Result

| Parameter Name  | Parameter Type                                                                                | Description      |
| --------------- | --------------------------------------------------------------------------------------------- | ------------ |
| Promise.then()  | Promise<[ConversationItem](/class/conversation/conversationInfo.md)[]>\> | Success callback |
| Promise.catch() | Promise<[OpenIMApiError](/class/response.md)\>                                          | Failure callback |

### Code Example

```js showLineNumbers
import OpenIMSDK from "@openim/rn-client-sdk";

OpenIMSDK.getAllConversationList()
  .then((data) => {
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

public static void GetAllConversationList(OnBase<List<Conversation>> cb)

```

### Input Parameters

| Name     | Type                                                                                                                 | Required | Description |
| -------- | -------------------------------------------------------------------------------------------------------------------- | ---- | -------- |
| cb | [OnBase](/callback/onBase.md)<List<[Conversation](/class/conversation/conversationInfo.md)>> | Yes   | Callback function |

### Code Example

```C# showLineNumbers

IMSDK.GetAllConversationList((list,errCode,errMsg)=>{

});

```

</TabItem>



</Tabs>
