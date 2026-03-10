---
sidebar_position: 3
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# getConversationListSplit

## Description

:::info

Get a list of conversations with pagination.

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
  Future<List<ConversationInfo>> getConversationListSplit({
    int offset = 0,
    int count = 20,
    String? operationID,
  })
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description       |
| -------- | -------- | -------- | ---------- |
| offset   | int      | Yes      | Start index for paginated fetch |
| count    | int      | Yes      | Number of items per page       |

### Return Result

| Name | Type                                                                        | Description |
| ---- | --------------------------------------------------------------------------- | -------- |
| ~    | List<[ConversationInfo](/class/conversation/conversationInfo.md)> | Success return |

### Code Example

```dart showLineNumbers
    List<ConversationInfo> list = await OpenIM.iMManager.conversationManager.getConversationListSplit();
    //todo
```

</TabItem>

<TabItem value="iOS">

### Function Prototype

```swift showLineNumbers

- (void)getConversationListSplitWithOffset:(NSInteger)offset
                                     count:(NSInteger)count
                                 onSuccess:(nullable OIMConversationsInfoCallback)onSuccess
                                 onFailure:(nullable OIMFailureCallback)onFailure;

```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description       |
| -------- | --------- | -------- | ---------- |
| offset   | NSInteger | Yes      | Start index for paginated fetch |
| count    | NSInteger | Yes      | Number of items per page       |

### Return Result

| Name      | Type                                                                                  | Description     |
| --------- | ------------------------------------------------------------------------------------- | -------- |
| onSuccess | NSArray< [OIMConversationInfo](/class/conversation/conversationInfo.md) \*> | Success return |
| onFailure | OIMFailureCallback                                  | Failure return |

### Code Example

```swift showLineNumbers

[OIMManager.manager getConversationListSplitWithOffset:0
                                                 count:20
                                             onSuccess:^(NSArray<OIMConversationInfo *> * _Nullable conversations) {

} onFailure:^(NSInteger code, NSString * _Nullable msg) {

}];

```

</TabItem>

<TabItem value="Android">

### Function Prototype

```java showLineNumbers

public void getConversationListSplit(OnBase<List<ConversationInfo>> base, long offset, long count)

```

### Input Parameters

| Parameter Name | Parameter Type                                                                                                             | Required | Description       |
| -------- | -------------------------------------------------------------------------------------------------------------------- | -------- | ---------- |
| base     | [OnBase](/callback/onBase.md)<List<[ConversationInfo](/class/conversation/conversationInfo.md)>> | Yes      | Callback interface   |
| offset   | int                                                                                                                  | Yes      | Start offset value |
| count    | int                                                                                                                  | Yes      | Item count       |

### Code Example

```java showLineNumbers

        OpenIMClient.getInstance().conversationManager.getConversationListSplit(new OnBase<List<ConversationInfo>>() {
            @Override
            public void onError(int code, String error) {

            }

            @Override
            public void onSuccess(List<ConversationInfo> data) {

            }
        },offset,count);
```

</TabItem>

<TabItem value="Web">

### Function Prototype

```ts showLineNumbers
IMSDK.getConversationListSplit({
  offset: number;
  count: number;
},operationID?: string): Promise<WsResponse<ConversationItem[]>>
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description             |
| -------- | -------- | -------- | ---------------- |
| offset   | number   | Yes      | Start index for paginated fetch |
| count    | number   | Yes      | Number of items per page   |

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

IMSDK.getConversationListSplit({
  offset: 0,
  count: 20,
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
IMSDK.asyncApi('getConversationListSplit', operationID: string, {
  offset: number;
  count: number;
}): Promise<ConversationItem[]>
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description                                                    |
| ----------- | -------- | -------- | ------------------------------------------------------- |
| operationID | string   | Yes      | Operation ID, used to pinpoint issues, keep unique, prefer time+random |
| offset      | number   | Yes      | Start index for paginated fetch                                        |
| count       | number   | Yes      | Number of items per page                                          |

### Return Result

> Use the `openim-uniapp-polyfill` package to make the function Promise. When calling, you need to use `then` and `catch` to determine and handle success and failure callbacks.

| Parameter Name  | Parameter Type                                                                   | Description      |
| --------------- | -------------------------------------------------------------------------------- | ------------ |
| Promise.then()  | Promise<[ConversationItem](/class/conversation/conversationInfo.md)[]> | Success callback |
| Promise.catch() | Promise<[CatchResponse](/class/response.md)\>                          | Failure callback |

### Code Example

```js showLineNumbers
import IMSDK from 'openim-uniapp-polyfill';

IMSDK.asyncApi('getConversationListSplit', IMSDK.uuid(), {
  offset: 0,
  count: 20,
})
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
OpenIMSDK.getConversationListSplit({
  offset: number,
  count: number,
}, operationID?: string): Promise<ConversationItem[]>
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description                                                    |
| ----------- | -------- | -------- | ------------------------------------------------------- |
| offset      | number   | Yes      | Start index for paginated fetch                                        |
| count       | number   | Yes      | Number of items per page                                          |
| operationID | string   | No       | Operation ID, used to pinpoint issues, keep unique, prefer time+random |


### Return Result

| Parameter Name  | Parameter Type                                                                   | Description      |
| --------------- | -------------------------------------------------------------------------------- | ------------ |
| Promise.then()  | Promise<[ConversationItem](/class/conversation/conversationInfo.md)[]> | Success callback |
| Promise.catch() | Promise<[OpenIMApiError](/class/response.md)\>                          | Failure callback |

### Code Example

```js showLineNumbers
import OpenIMSDK from "@openim/rn-client-sdk";

OpenIMSDK.getConversationListSplit({
  offset: 0,
  count: 20,
})
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

public static void GetConversationListSplit(OnBase<List<Conversation>> cb, int offset, int count)

```

### Input Parameters

| Parameter Name | Parameter Type                                                                                                             | Required | Description       |
| -------- | -------------------------------------------------------------------------------------------------------------------- | -------- | ---------- |
| cb | [OnBase](/callback/onBase.md)<List<[Conversation](/class/conversation/conversationInfo.md)>> | Yes      | Callback interface   |
| offset   | int                                                                                                                  | Yes      | Start offset value |
| count    | int                                                                                                                  | Yes      | Item count       |

### Code Example

```C# showLineNumbers

IMSDK.GetConversationListSplit((list,errCode,errMsg)=>{

},offset,count);
```

</TabItem>

</Tabs>
