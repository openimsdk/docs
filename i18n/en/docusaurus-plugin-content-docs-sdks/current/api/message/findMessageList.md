---
sidebar_position: 31
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# findMessageList

## Description

:::info

Find local messages by message ID.

:::

:::caution Note

Only supports messages that have been pulled locally.

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
  Future<SearchResult> findMessageList({
    required List<SearchParams> searchParams,
    String? operationID,
  })
```

### Input Parameters

| Parameter Name                     | Parameter Type      | Required | Description         |
| ---------------------------- | ------------- | -------- | ------------ |
| SearchParams.conversationID  | String        | Yes      | Conversation ID      |
| SearchParams.clientMsgIDList | List<String\> | Yes      | Message ID list |

### Return Result

| Name | Type         | Description     |
| ---- | ------------ | -------- |
| ~    | SearchResult | Success return |

#### SearchResult

| Field Name        | Field Type                                                                | Description                          |
| --------------- | ----------------------------------------------------------------------- | ----------------------------- |
| totalCount      | int                                                                     | Total number of messages retrieved          |
| findResultItems | List<[SearchResultItems](/class/message/searchResultItem.md)> | Search results returned by findXX method |

### Code Example

```dart showLineNumbers
    SearchResult result = await OpenIM.iMManager.messageManager.findMessageList(
      searchParams: [
        SearchParams(
          clientMsgIDList: [],
          conversationID: '',
        )
      ],
    );
    // todo
```

</TabItem>

<TabItem value="iOS">

### Function Prototype

```swift showLineNumbers

- (void)findMessageList:(NSArray<OIMFindMessageListParam *> *)param
              onSuccess:(nullable OIMMessageSearchCallback)onSuccess
              onFailure:(nullable OIMFailureCallback)onFailure;

```

### Input Parameters

| Parameter Name                                | Parameter Type              | Required | Description                                                                 |
| --------------------------------------- | --------------------- | -------- | -------------------------------------------------------------------- |
| OIMFindMessageListParam.conversationID  | NSSting               | Yes      | Conversation ID, if not empty, get by conversation ID, otherwise get by userID and groupID |
| OIMFindMessageListParam.clientMsgIDList | NSArray <NSString \*> | Yes      | Starting message clientMsgID, empty string for first pull                               |

### Return Result

| Name      | Type                | Description     |
| --------- | ------------------- | -------- |
| onSuccess | OIMSearchResultInfo | Success return |
| onFailure | OIMFailureCallback  | Failure return |

#### OIMSearchResultInfo

| Field Name          | Field Type                                                                              | Description                 |
| ----------------- | ------------------------------------------------------------------------------------- | -------------------- |
| totalCount        | NSInteger                                                                             | Total number of messages retrieved |
| searchResultItems | NSArray< [OIMSearchResultItemInfo](/class/message/searchResultItem.md) \* > | Search results             |

### Code Example

```swift showLineNumbers

OIMFindMessageListParam *param = [OIMFindMessageListParam new];
param.conversationID = @"";
param.clientMsgIDList = @[];

[OIMManager.manager findMessageList:@[param]
                          onSuccess:^(OIMSearchResultInfo * _Nullable result) {

} onFailure:^(NSInteger code, NSString * _Nullable msg) {

}];

```

</TabItem>

<TabItem value="Android">

### Function Prototype

```dart showLineNumbers
    public void findMessageList(OnBase<SearchResult> base, List<SearchParams> searchParams)
```

### Input Parameters

| Parameter Name     | Parameter Type                  | Required | Description     |
| ------------ | ------------------------- | -------- | -------- |
| callBack     | OnBase<TypeKeySetResult\> | Yes      | Callback interface |
| SearchParams | List<SearchParams\>       | Yes      |          |

### Return Result

| Name | Type             | Description     |
| ---- | ---------------- | -------- |
| ~    | TypeKeySetResult | Success return |

### Code Example

```dart showLineNumbers
        OpenIMClient.getInstance().messageManager. findMessageList(new OnBase<SearchResult>() {
            @Override
            public void onError(int code, String error) {

            }

            @Override
            public void onSuccess(SearchResult data) {

            }
        },searchParams);
    // todo
```

</TabItem>

<TabItem value="Web">

### Function Prototype

> [`SearchMessageResultItem`](/class/message/searchResultItem.md)

```ts showLineNumbers
type FindMessageResult = {
  totalCount: number;
  findResultItems: SearchMessageResultItem[];
};
IMSDK.findMessageList({
  conversationID: string;
  clientMsgIDList: string[];
}[], operationID?: string): Promise<WsResponse<FindMessageResult>>
```

### Input Parameters

| Parameter Name        | Parameter Type | Required | Description         |
| --------------- | -------- | -------- | ------------ |
| conversationID  | string   | Yes      | Conversation ID      |
| clientMsgIDList | string[] | Yes      | Message ID list |

### Return Result

| Parameter Name        | Parameter Type                                             | Description         |
| --------------- | ---------------------------------------------------- | ------------ |
| Promise.then()  | Promise<WsResponse<FindMessageResult\>>              | Success callback |
| Promise.catch() | Promise<[WsResponse](/class/response.md)\> | Failure callback |

### Code Example

```js showLineNumbers
import { getSDK } from '@openim/wasm-client-sdk';
const IMSDK = getSDK();

// use in electron with ffi
// import { getWithRenderProcess } from '@openim/electron-client-sdk/lib/render';
// const { instance: IMSDK } = getWithRenderProcess();

IMSDK.findMessageList([
  {
    conversationID: 'conversation id',
    clientMsgIDList: ['msgid'],
  },
])
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

> [`SearchMessageResultItem`](/class/message/searchResultItem.md)

```ts showLineNumbers
type FindMessageResult = {
  totalCount: number;
  findResultItems: SearchMessageResultItem[];
};
IMSDK.asyncApi('findMessageList', operationID: string, {
conversationID: string,
clientMsgIDList: string[]
}): Promise<FindMessageResult>
```

### Input Parameters

| Parameter Name        | Parameter Type | Required | Description                                                    |
| --------------- | -------- | -------- | ------------------------------------------------------- |
| operationID     | string   | Yes      | Operation ID, used to pinpoint issues, keep unique, prefer time+random |
| conversationID  | string   | Yes      | Conversation ID                                                 |
| clientMsgIDList | string[] | Yes      | Message ID                                                 |

### Return Result

> Use the `openim-uniapp-polyfill` package to make the function Promise. When calling, you need to use `then` and `catch` to determine and handle success and failure callbacks.

| Parameter Name        | Parameter Type                                                | Description         |
| --------------- | ------------------------------------------------------- | ------------ |
| Promise.then()  | Promise<FindMessageResult\>                             | Success callback |
| Promise.catch() | Promise<[CatchResponse](/class/response.md)\> | Failure callback |

### Code Example

```js showLineNumbers
import IMSDK from 'openim-uniapp-polyfill';

IMSDK.asyncApi('findMessageList', IMSDK.uuid(), {
  conversationID: '',
  clientMsgIDList: ['msgid'],
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

> [`SearchMessageResultItem`](/class/message/searchResultItem.md)

```ts showLineNumbers
OpenIMSDK.findMessageList({
  conversationID: string,
  clientMsgIDList: string[]
}, operationID?: string): Promise<FindMessageResult>
```

### Input Parameters

| Parameter Name        | Parameter Type | Required | Description                                                    |
| --------------- | -------- | -------- | ------------------------------------------------------- |
| conversationID  | string   | Yes      | Conversation ID                                                 |
| clientMsgIDList | string[] | Yes      | Message ID                                                 |
| operationID     | string   | No       | Operation ID, used to pinpoint issues, keep unique, prefer time+random |

### Return Result

| Parameter Name        | Parameter Type                                                | Description         |
| --------------- | ------------------------------------------------------- | ------------ |
| Promise.then()  | Promise<FindMessageResult\>                             | Success callback |
| Promise.catch() | Promise<[OpenIMApiError](/class/response.md)\> | Failure callback |

### Code Example

```js showLineNumbers
import OpenIMSDK from '@openim/rn-client-sdk';

OpenIMSDK.findMessageList(
  {
    conversationID: '',
    clientMsgIDList: ['msgid'],
  },
)
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

public static void FindMessageList(OnBase<FindMessageResult> cb, ConversationArgs[] findMessageOptions)

```

### Input Parameters

| Parameter Name           | Parameter Type                                                           | Required | Description     |
| ------------------ | ------------------------------------------------------------------ | -------- | -------- |
| cb |  [OnBase](/callback/onBase.md)< FindMessageResult>  | Yes      | Callback interface                                                                                        |
| findMessageOptions | [ConversationArgs](/class/message/ConversationArgs.md)[] | Yes      |          |

### FindMessageResult

| Field Name          | Field Type                                                                              | Description                 |
| ----------------- | ------------------------------------------------------------------------------------- | -------------------- |
| TotalCount  | int | Total number of messages retrieved |
| FindResultItems | List< [SearchResultItem](/class/message/searchResultItem.md)  > | Search results             |

### Code Example

```C# showLineNumbers
IMSDK.FindMessageList((result,errCode,errMsg)=>{

},findMessageOptions);
```

</TabItem>
</Tabs>
