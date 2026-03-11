---
sidebar_position: 9
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# setConversationDraft

## Description

:::info

Set a conversation draft.

:::

:::caution Note

Setting it to empty will clear the draft.    

**Related Callbacks**:      
[onConversationChanged](/callback/onConversationChanged.md)

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
  Future setConversationDraft({
    required String conversationID,
    required String draftText,
    String? operationID,
  })
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description    |
| -------------- | -------- | -------- | ------- |
| conversationID | String   | Yes      | Conversation ID |
| draftText      | String   | Yes      | Draft content    |

### Return Result

| Name | Type | Description                 |
| ---- | ---- | -------------------- |
| ~    | ~    | Operation successful if no exception thrown |

### Code Example

```dart showLineNumbers
    await OpenIM.iMManager.conversationManager.setConversationDraft(conversationID: conversationID, draftText: draftText);
    //todo
```

</TabItem>

<TabItem value="iOS">

### Function Prototype

```swift showLineNumbers

- (void)setConversationDraft:(NSString *)conversationID
                   draftText:(NSString *)draftText
                   onSuccess:(nullable OIMSuccessCallback)onSuccess
                   onFailure:(nullable OIMFailureCallback)onFailure;

```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description    |
| -------------- | -------- | -------- | ------- |
| conversationID | NSString | Yes      | Conversation ID |
| draftText      | NSString | Yes      | Draft content    |

### Return Result

| Name      | Type                                                   | Description     |
| --------- | ------------------------------------------------------ | -------- |
| onSuccess | OIMSuccessCallback | Success return |
| onFailure | OIMFailureCallback   | Failure return |

### Code Example

```swift showLineNumbers

[OIMManager.manager setConversationDraft:@""
                               draftText:@""
                               onSuccess:^(NSString * _Nullable data) {

} onFailure:^(NSInteger code, NSString * _Nullable msg) {

}];

```

</TabItem>

<TabItem value="Android">
### Function Prototype

```java showLineNumbers
 public void setConversationDraft(OnBase<String> base, String conversationID, String draftText)
```

### Input Parameters

| Parameter Name | Parameter Type                                | Required | Description     |
| -------------- | --------------------------------------- | -------- | -------- |
| base           | [OnBase\<String\>](/callback/onBase.md) | Yes      | Callback interface |
| conversationID | String                                           | Yes      | Conversation ID  |
| draftText      | String                                           | Yes      | Draft content     |

### Code Example

```java showLineNumbers
           OpenIMClient.getInstance().conversationManager.setConversationDraft(new OnBase<String>() {
               @Override
               public void onError(int code, String error) {

               }

               @Override
               public void onSuccess(String data) {

               }
           },conversationID,draftText);
```

</TabItem>

<TabItem value="Web">

### Function Prototype

```ts showLineNumbers
IMSDK.setConversationDraft({
    conversationID: string;
    draftText: string;
},operationID?: string): Promise<WsResponse>
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description     |
| -------------- | -------- | -------- | -------- |
| conversationID | string   | Yes      | Conversation ID  |
| draftText      | string   | Yes      | Draft content |

### Return Result

| Parameter Name  | Parameter Type                                        | Description         |
| --------------- | ----------------------------------------------------- | ------------ |
| Promise.then()  | Promise\<[WsResponse](/class/response.md)\> | Success callback |
| Promise.catch() | Promise\<[WsResponse](/class/response.md)\> | Failure callback |

### Code Example

```js showLineNumbers
import { getSDK } from '@openim/wasm-client-sdk';
const IMSDK = getSDK();

// use in electron with ffi
// import { getWithRenderProcess } from '@openim/electron-client-sdk/lib/render';
// const { instance: IMSDK } = getWithRenderProcess();

IMSDK.setConversationDraft({
  conversationID: 'conversationID',
  draftText: 'draft',
})
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
IMSDK.asyncApi('setConversationDraft', operationID: string, {
  conversationID: string;
  draftText: string;
}): Promise<void>
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description                                                    |
| -------------- | -------- | -------- | ------------------------------------------------------- |
| operationID    | string   | Yes      | Operation ID, used to pinpoint issues, keep unique, prefer time+random |
| conversationID | string   | Yes      | Conversation ID                                                 |
| draftText      | string   | Yes      | Draft content                                                |

### Return Result

> Use the `openim-uniapp-polyfill` package to make the function Promise. When calling, you need to use `then` and `catch` to determine and handle success and failure callbacks.

| Parameter Name  | Parameter Type                                           | Description         |
| --------------- | -------------------------------------------------------- | ------------ |
| Promise.then()  | Promise\<void\>                                          | Success callback |
| Promise.catch() | Promise\<[CatchResponse](/class/response.md)\> | Failure callback |

### Code Example

```js showLineNumbers
import IMSDK from 'openim-uniapp-polyfill';

IMSDK.asyncApi('setConversationDraft', IMSDK.uuid(), {
  conversationID: '',
  draftText: '',
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
OpenIMSDK.setConversationDraft({
  conversationID: string,
  draftText: string,
}, operationID?: string): Promise<void>
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description                                                    |
| -------------- | -------- | -------- | ------------------------------------------------------- |
| conversationID | string   | Yes      | Conversation ID                                                 |
| draftText      | string   | Yes      | Draft content                                                |
| operationID    | string   | No       | Operation ID, used to pinpoint issues, keep unique, prefer time+random |

### Return Result

| Parameter Name  | Parameter Type                                           | Description         |
| --------------- | -------------------------------------------------------- | ------------ |
| Promise.then()  | Promise\<void\>                                          | Success callback |
| Promise.catch() | Promise\<[OpenIMApiError](/class/response.md)\> | Failure callback |

### Code Example

```js showLineNumbers
import OpenIMSDK from "@openim/rn-client-sdk";

OpenIMSDK.setConversationDraft({
  conversationID: '',
  draftText: '',
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
### Function Prototype

```C# showLineNumbers

public static void SetConversationDraft(OnBase<bool> cb, string conversationId, string draftText)

```

### Input Parameters

| Parameter Name | Parameter Type                                | Required | Description     |
| -------------- | --------------------------------------- | -------- | -------- |
| cb | [OnBase](/callback/onBase.md) | Yes      | Callback function |
| conversationId | string                                           | Yes      | Conversation ID  |
| draftText      | string                                           | Yes      | Draft content     |

### Code Example

```C# showLineNumbers
IMSDK.SetConversationDraft((suc,errCode,errMsg)=>{

},conversationId,draftText);
```

</TabItem>
</Tabs>
