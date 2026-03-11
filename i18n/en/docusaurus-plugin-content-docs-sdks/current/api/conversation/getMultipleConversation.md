---
sidebar_position: 5
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# getMultipleConversation

## Description

:::info

Get info for multiple conversations based on conversation IDs.

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
  Future<List<ConversationInfo>> getMultipleConversation({
    required List<String> conversationIDList,
    String? operationID,
  })
```

### Input Parameters

| Parameter Name     | Parameter Type| Required | Description         |
| ------------------ | ------------- | -------- | ------------ |
| conversationIDList | List<String\> | Yes      | Check conversation ID List |

### Return Result

| Name | Type                                                                        | Description |
| ---- | --------------------------------------------------------------------------- | -------- |
| ~    | List<[ConversationInfo](/class/conversation/conversationInfo.md)> | Success return |

### Code Example

```dart showLineNumbers
    final list = await OpenIM.iMManager.conversationManager.getMultipleConversation(conversationIDList: conversationIDList);
    //todo
```

</TabItem>

<TabItem value="iOS">

### Function Prototype

```swift showLineNumbers

- (void)getMultipleConversation:(NSArray <NSString *> *)conversationIDs
                       onSuccess:(nullable OIMConversationsInfoCallback)onSuccess
                       onFailure:(nullable OIMFailureCallback)onFailure;

```

### Input Parameters

| Parameter Name  | Parameter Type        | Required | Description         |
| --------------- | --------------------- | -------- | ------------ |
| conversationIDs | NSArray <NSString \*> | Yes      | Check conversation ID list |

### Return Result

| Name      | Type                                                                     | Description     |
| --------- | ------------------------------------------------------------------------ | -------- |
| onSuccess | [OIMConversationInfo](/class/conversation/conversationInfo.md) | Success return |
| onFailure | OIMFailureCallback                     | Failure return |

### Code Example

```swift showLineNumbers

[OIMManager.manager getMultipleConversation:@[]
                                  onSuccess:^(OIMConversationInfo * _Nullable conversation) {

} onFailure:^(NSInteger code, NSString * _Nullable msg) {

}];

```

</TabItem>

<TabItem value="Android">

### Function Prototype

```java showLineNumbers
  public void getMultipleConversation(OnBase<List<ConversationInfo>> base, List<String> conversationIDs)
```

### Input Parameters

| Parameter Name  | Parameter Type                                                                                                             | Required | Description         |
| --------------- | -------------------------------------------------------------------------------------------------------------------- | -------- | ------------ |
| base            | [OnBase](/callback/onBase.md)<List<[ConversationInfo](/class/conversation/conversationInfo.md)>> | Yes      | Callback interface     |
| conversationIDs | List<String\>                                                                                                        | Yes      | Check conversation ID List |

### Code Example

```java showLineNumbers
    OpenIMClient.getInstance().conversationManager.getMultipleConversation(new OnBase<List<ConversationInfo>>() {
            @Override
            public void onError(int code, String error) {

            }

            @Override
            public void onSuccess(List<ConversationInfo> data) {

            }
        },conversationIDs);
```

</TabItem>

<TabItem value="Web">

### Function Prototype

```ts showLineNumbers
IMSDK.getMultipleConversation(conversationIDList: string[],operationID?: string): Promise<WsResponse<ConversationItem[]>>
```

### Input Parameters

| Parameter Name     | Parameter Type | Required | Description         |
| ------------------ | -------- | -------- | ------------ |
| conversationIDList | string[] | Yes      | Check conversation ID List |

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

IMSDK.getMultipleConversation(['conversationID'])
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
IMSDK.asyncApi('getMultipleConversation', operationID: string, conversationIDList: string[]): Promise<ConversationItem[]>
```

### Input Parameters

| Parameter Name     | Parameter Type | Required | Description                                                    |
| ------------------ | -------- | -------- | ------------------------------------------------------- |
| operationID        | string   | Yes      | Operation ID, used to pinpoint issues, keep unique, prefer time+random |
| conversationIDList | string[] | Yes      | Check conversation ID List                                            |

### Return Result

> Use the `openim-uniapp-polyfill` package to make the function Promise. When calling, you need to use `then` and `catch` to determine and handle success and failure callbacks.

| Parameter Name  | Parameter Type                                                                   | Description      |
| --------------- | -------------------------------------------------------------------------------- | ------------ |
| Promise.then()  | Promise<[ConversationItem](/class/conversation/conversationInfo.md)[]> | Success callback |
| Promise.catch() | Promise<[CatchResponse](/class/response.md)\>                          | Failure callback |

### Code Example

```js showLineNumbers
import IMSDK from 'openim-uniapp-polyfill';

IMSDK.asyncApi('getMultipleConversation', IMSDK.uuid(), ['conversationID'])
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
OpenIMSDK.getMultipleConversation({
  conversationIDList: string[], 
}, operationID?: string): Promise<ConversationItem[]>
```

### Input Parameters

| Parameter Name     | Parameter Type | Required | Description                                                    |
| ------------------ | -------- | -------- | ------------------------------------------------------- |
| conversationIDList | string[] | Yes      | Check conversation ID List                                            |
| operationID        | string   | No       | Operation ID, used to pinpoint issues, keep unique, prefer time+random |

### Return Result

| Parameter Name  | Parameter Type                                                                   | Description      |
| --------------- | -------------------------------------------------------------------------------- | ------------ |
| Promise.then()  | Promise<[ConversationItem](/class/conversation/conversationInfo.md)[]> | Success callback |
| Promise.catch() | Promise<[OpenIMApiError](/class/response.md)\>                          | Failure callback |

### Code Example

```js showLineNumbers
import OpenIMSDK from "@openim/rn-client-sdk";

OpenIMSDK.getMultipleConversation(['conversationID'])
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

public static void GetMultipleConversation(OnBase<List<Conversation>> cb, string[] conversationIdList)

```

### Input Parameters

| Parameter Name  | Parameter Type  | Required | Description         |
| --------------- | ----------------| -------- | ------------ |
| cb | [OnBase](/callback/onBase.md)<List<[Conversation](/class/conversation/conversationInfo.md)>>  | Yes      | Callback interface     |
| conversationIdList |  string[]     | Yes      | Check conversation ID List |

### Code Example

```C# showLineNumbers
IMSDK.GetMultipleConversation((list,errCode,errMsg)=>{

},conversationIdList);
```

</TabItem>
</Tabs>
