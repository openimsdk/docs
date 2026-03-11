---
sidebar_position: 28
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# searchLocalMessages

## Description

:::info

Search local messages.

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
  Future<SearchResult> searchLocalMessages({
    String? conversationID,
    List<String> keywordList = const [],
    int keywordListMatchType = 0,
    List<String> senderUserIDList = const [],
    List<int> messageTypeList = const [],
    int searchTimePosition = 0,
    int searchTimePeriod = 0,
    int pageIndex = 1,
    int count = 40,
    String? operationID,
  })
```

### Input Parameters

| Parameter Name             | Parameter Type      | Required | Description                                                                                            |
| -------------------- | ------------- | -------- | ----------------------------------------------------------------------------------------------- |
| conversationID       | String        | No       | Search by conversation, pass null if global search                                                             |
| keywordList          | List<String\> | Yes      | Search keyword list, currently only supports single keyword search                                                        |
| keywordListMatchType | int           | No       | Keyword matching mode, 1 represents AND, 2 represents OR, currently unused                                                    |
| senderUserIDList     | List<String\> | No       | Filter by sender uid list, currently unused                                                                |
| messageTypeList      | List<[int](/enum/messageContentType.md)\>    | Yes      | Message type list                                                                                    |
| searchTimePosition   | int           | Yes      | Search start time point. Default is 0 which means search from now. UTC timestamp in seconds                           |
| searchTimePeriod     | int           | Yes      | Past time range from the start time point, in seconds. Default 0 means unlimited range, pass 24x60x60 for past day |
| pageIndex            | int           | Yes      | Current page number                                                                                        |
| count                | int           | Yes      | Count per page                                                                                        |

### Return Result

| Name | Type                                                         | Description     |
| ---- | ------------------------------------------------------------ | -------- |
| ~    | SearchResult | Success return |

#### SearchResult

| Field Name          | Field Type                                                                | Description                             |
| ----------------- | ----------------------------------------------------------------------- | -------------------------------- |
| totalCount        | int                                                                     | Total number of messages retrieved             |
| searchResultItems | List<[SearchResultItems](/class/message/searchResultItem.md)> | Search results, returns array of searchXXX method caller |

### Code Example

```dart showLineNumbers
    SearchResult result =  await OpenIM.iMManager.messageManager.searchLocalMessages();
    // todo
```

</TabItem>

<TabItem value="iOS">

### Function Prototype

```swift showLineNumbers

- (void)searchLocalMessages:(OIMSearchParam *)param
                  onSuccess:(nullable OIMMessageSearchCallback)onSuccess
                  onFailure:(nullable OIMFailureCallback)onFailure;

```

### Input Parameters

| Parameter Name | Parameter Type                                                  | Required | Description |
| -------------------- | -------------------- | -- |----------------------------------------------------------------------------------------------- |
| conversationID       | NSString             | No | Conversation ID, if empty, it's global search                                                               |
| keywordList          | NSArray<NSString \*> | Yes | Search keyword list, currently only supports single keyword search                                                        |
| keywordListMatchType | NSInteger            | No | Keyword matching mode, 1 represents AND, 2 represents OR, currently unused                                                    |
| senderUserIDList     | NSArray<NSString \*> | No | Filter by sender uid list, currently unused                                                               |
| messageTypeList      | NSArray<[MessageContentType](/enum/messageContentType.md)\>              | Yes | Message type list                                                                                    |
| searchTimePosition   | NSInteger            | No | Search start time point. Default is 0 which means search from now. UTC timestamp in seconds                           |
| searchTimePeriod     | NSInteger            | No | Past time range from the start time point, in seconds. Default 0 means unlimited range, pass 24x60x60 for past day |
| pageIndex            | NSInteger            | No | Current page number, starting at 1. Invalid when conversationID is empty (global search)                        |
| count                | NSInteger            | No | Count per page. Invalid when conversationID is empty (global search)                                       |

### Return Result

| Name      | Type                                                                | Description     |
| --------- | ------------------------------------------------------------------- | -------- |
| onSuccess | OIMSearchResultInfo | Success return |
| onFailure | OIMFailureCallback                | Failure return |

#### OIMSearchResultInfo

| Field Name          | Field Type                                                                              | Description                 |
| ----------------- | ------------------------------------------------------------------------------------- | -------------------- |
| totalCount        | NSInteger                                                                             | Total number of messages retrieved |
| searchResultItems | NSArray< [OIMSearchResultItemInfo](/class/message/searchResultItem.md) \* > | Search results             |


### Code Example

```swift showLineNumbers

OIMSearchParam *param = [OIMSearchParam new];
param.conversationID = @"";
param.keywordList = @[];

[OIMManager.manager searchLocalMessages:param
                              onSuccess:^(OIMSearchResultInfo * _Nullable result) {

} onFailure:^(NSInteger code, NSString * _Nullable msg) {

}];

```

</TabItem>

<TabItem value="Android">

### Function Prototype

```dart showLineNumbers
    public void searchLocalMessages(OnBase<SearchResult> base, String conversationID, List<String> keywordList, int keywordListMatchType,
                                    List<String> senderUserIDList, List<Integer> messageTypeList, int searchTimePosition, int searchTimePeriod, int pageIndex
        , int count)
```

### Input Parameters

| Parameter Name             | Parameter Type                                                             | Required | Description                                                                                            |
| -------------------- | -------------------------------------------------------------------- | -------- | ----------------------------------------------------------------------------------------------- |
| callBack             | OnBase<SearchResult\> | Yes      | Callback interface                                                                                        |
| conversationID       | String                                                               | No       | Search by conversation, pass null if global search                                                             |
| keywordList          | List<String\>                                                        | Yes      | Search keyword list, currently only supports single keyword search                                                        |
| keywordListMatchType | int                                                                  | No       | Keyword matching mode, 1 represents AND, 2 represents OR, currently unused                                                    |
| senderUserIDList     | List<String\>                                                        | No       | Filter by sender uid list, currently unused                                                                |
| messageTypeList      | List<int\>                                                           | Yes      | [MessageType](/enum/messageContentType.md) list                                                                                    |
| searchTimePosition   | int                                                                  | Yes      | Search start time point. Default is 0 which means search from now. UTC timestamp in seconds                           |
| searchTimePeriod     | int                                                                  | Yes      | Past time range from the start time point, in seconds. Default 0 means unlimited range, pass 24x60x60 for past day |
| pageIndex            | int                                                                  | Yes      | Current page number                                                                                        |
| count                | int                                                                  | Yes      | Count per page                                                                                        |

### Return Result

| Name | Type                                                         | Description     |
| ---- | ------------------------------------------------------------ | -------- |
| ~    | SearchResult | Success return |

#### SearchResult

| Field Name          | Field Type                                                                | Description                             |
| ----------------- | ----------------------------------------------------------------------- | -------------------------------- |
| totalCount        | int                                                                     | Total number of messages retrieved             |
| searchResultItems | List<[SearchResultItems](/class/message/searchResultItem.md)> | Search results, returns array of searchXXX method caller |

### Code Example

```dart showLineNumbers
        OpenIMClient.getInstance().messageManager.searchLocalMessages(new OnBase<SearchResult>() {
            @Override
            public void onError(int code, String error) {

            }

            @Override
            public void onSuccess(SearchResult data) {

            }
        },  conversationID, keywordList,  keywordListMatchType,
         senderUserIDList, messageTypeList,  searchTimePosition,  searchTimePeriod,  pageIndex
        ,  count);
```

</TabItem>

<TabItem value="Web">

### Function Prototype

> [`SearchMessageResultItem`](/class/message/searchResultItem.md)

```ts showLineNumbers
type SearchMessageResult = {
  totalCount: number;
  searchResultItems: SearchMessageResultItem[];
};
IMSDK.searchLocalMessages({
  conversationID?: string;
  keywordList: string[];
  keywordListMatchType?: number;
  senderUserIDList?: string[];
  messageTypeList: MessageType[];
  searchTimePosition: number;
  searchTimePeriod: number;
  pageIndex: number;
  count: number;
}, operationID?: string): Promise<WsResponse<SearchMessageResult>>
```

### Input Parameters

| Parameter Name             | Parameter Type                                               | Required | Description                                                                                            |
| -------------------- | ------------------------------------------------------ | -------- | ----------------------------------------------------------------------------------------------- |
| conversationID       | string                                                 | No       | Search by conversation, pass empty string if global search                                                      |
| keywordList          | string[]                                               | Yes      | Search keyword list, currently only supports single keyword search                                                        |
| keywordListMatchType | number                                                 | No       | Keyword matching mode, 1 represents AND, 2 represents OR, currently unused                                                    |
| senderUserIDList     | string[]                                               | No       | Filter by sender userID list, currently unused                                                             |
| messageTypeList      | [MessageType](/enum/messageContentType.md)[] | Yes      | Message type list                                                                                    |
| searchTimePosition   | number                                                 | Yes      | Search start time point. Default is 0 which means search from now. UTC timestamp in seconds                           |
| searchTimePeriod     | number                                                 | Yes      | Past time range from the start time point, in seconds. Default 0 means unlimited range, pass 24x60x60 for past day |
| pageIndex            | number                                                 | Yes      | Current page number                                                                                        |
| count                | number                                                 | Yes      | Count per page                                                                                        |

### Return Result

| Parameter Name        | Parameter Type                                                                                  | Description         |
| --------------- | ----------------------------------------------------------------------------------------- | ------------ |
| Promise.then()  | Promise<WsResponse<SearchMessageResult\>\> | Success callback |
| Promise.catch() | Promise<[WsResponse](/class/response.md)\>                                      | Failure callback |

### Code Example

```js showLineNumbers
import { getSDK } from '@openim/wasm-client-sdk';
const IMSDK = getSDK();

// use in electron with ffi
// import { getWithRenderProcess } from '@openim/electron-client-sdk/lib/render';
// const { instance: IMSDK } = getWithRenderProcess();

IMSDK.searchLocalMessages({
  conversationID: '',
  keywordList: ['keyword'],
  keywordListMatchType: 0,
  senderUserIDList: [],
  messageTypeList: [101],
  searchTimePosition: 0,
  searchTimePeriod: 0,
  pageIndex: 1,
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

> [`SearchMessageResultItem`](/class/message/searchResultItem.md)

### Function Prototype

```ts showLineNumbers
type SearchMessageResult = {
  totalCount: number;
  searchResultItems: SearchMessageResultItem[];
};
IMSDK.asyncApi('searchLocalMessages', operationID: string, {
    conversationID?: string;
    keywordList: string[];
    keywordListMatchType?: number;
    senderUserIDList?: string[];
    messageTypeList: MessageType[];
    searchTimePosition: number;
    searchTimePeriod: number;
    pageIndex: number;
    count: number;
}): Promise<SearchMessageResult>
```

### Input Parameters

| Parameter Name             | Parameter Type                                               | Required | Description                                                                                            |
| -------------------- | ------------------------------------------------------ | -------- | ----------------------------------------------------------------------------------------------- |
| operationID          | string                                                 | Yes      | Operation ID, used to pinpoint issues, keep unique, prefer time+random                                         |
| conversationID       | string                                                 | No       | Search by conversation, pass empty string if global search                                                      |
| keywordList          | string[]                                               | Yes      | Search keyword list, currently only supports single keyword search                                                        |
| keywordListMatchType | number                                                 | No       | Keyword matching mode, 1 represents AND, 2 represents OR, currently unused                                                    |
| senderUserIDList     | string[]                                               | No       | Filter by sender userID list, currently unused                                                             |
| messageTypeList      | [MessageType](/enum/messageContentType.md)[] | Yes      | Message type list                                                                                    |
| searchTimePosition   | number                                                 | Yes      | Search start time point. Default is 0 which means search from now. UTC timestamp in seconds                           |
| searchTimePeriod     | number                                                 | Yes      | Past time range from the start time point, in seconds. Default 0 means unlimited range, pass 24x60x60 for past day |
| pageIndex            | number                                                 | Yes      | Current page number                                                                                        |
| count                | number                                                 | Yes      | Count per page                                                                                        |

### Return Result

> Use the `openim-uniapp-polyfill` package to make the function Promise. When calling, you need to use `then` and `catch` to determine and handle success and failure callbacks.

| Parameter Name        | Parameter Type                                                                     | Description         |
| --------------- | ---------------------------------------------------------------------------- | ------------ |
| Promise.then()  | Promise<SearchMessageResult\> | Success callback |
| Promise.catch() | Promise<[CatchResponse](/class/response.md)\>                      | Failure callback |

### Code Example

```js showLineNumbers
import IMSDK from 'openim-uniapp-polyfill';

IMSDK.asyncApi('searchLocalMessages', IMSDK.uuid(), {
  conversationID: '',
  keywordList: ['keyword'],
  keywordListMatchType: 0,
  senderUserIDList: [],
  messageTypeList: [101],
  searchTimePosition: 0,
  searchTimePeriod: 0,
  pageIndex: 1,
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
> [`SearchMessageResultItem`](/class/message/searchResultItem.md)

```ts showLineNumbers
type SearchMessageResult = {
  totalCount: number;
  searchResultItems: SearchMessageResultItem[];
};

OpenIMSDK.searchLocalMessages( {
  conversationID?: string,
  keywordList: string[],
  keywordListMatchType?: number,
  senderUserIDList?: string[],
  messageTypeList: MessageType[],
  searchTimePosition: number,
  searchTimePeriod: number,
  pageIndex: number,
  count: number,
}, operationID?: string): Promise<SearchMessageResult>
```

### Input Parameters

| Parameter Name             | Parameter Type                                               | Required | Description                                                                                            |
| -------------------- | ------------------------------------------------------ | -------- | ----------------------------------------------------------------------------------------------- |
| operationID          | string                                                 | No       | Operation ID, used to pinpoint issues, keep unique, prefer time+random                                         |
| conversationID       | string                                                 | No       | Search by conversation, pass empty string if global search                                                      |
| keywordList          | string[]                                               | Yes      | Search keyword list, currently only supports single keyword search                                                        |
| keywordListMatchType | number                                                 | No       | Keyword matching mode, 1 represents AND, 2 represents OR, currently unused                                                    |
| senderUserIDList     | string[]                                               | No       | Filter by sender userID list, currently unused                                                             |
| messageTypeList      | [MessageType](/enum/messageContentType.md)[] | Yes      | Message type list                                                                                    |
| searchTimePosition   | number                                                 | Yes      | Search start time point. Default is 0 which means search from now. UTC timestamp in seconds                           |
| searchTimePeriod     | number                                                 | Yes      | Past time range from the start time point, in seconds. Default 0 means unlimited range, pass 24x60x60 for past day |
| pageIndex            | number                                                 | Yes      | Current page number                                                                                        |
| count                | number                                                 | Yes      | Count per page                                                                                        |

### Return Result

| Parameter Name        | Parameter Type                                                                     | Description         |
| --------------- | ---------------------------------------------------------------------------- | ------------ |
| Promise.then()  | Promise<SearchMessageResult\> | Success callback |
| Promise.catch() | Promise<[OpenIMApiError](/class/response.md)\>                      | Failure callback |

### Code Example

```js showLineNumbers
import OpenIMSDK from "@openim/rn-client-sdk";

OpenIMSDK.searchLocalMessages({
  conversationID: '',
  keywordList: ['keyword'],
  keywordListMatchType: 0,
  senderUserIDList: [],
  messageTypeList: [101],
  searchTimePosition: 0,
  searchTimePeriod: 0,
  pageIndex: 1,
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

public static void SearchLocalMessages(OnBase<SearchMessageResult> cb, SearchMessagesParams searchParam)

```

### Input Parameters

| Parameter Name             | Parameter Type                                                             | Required | Description                                                                                            |
| -------------------- | -------------------------------------------------------------------- | -------- | ----------------------------------------------------------------------------------------------- |
| cb | [OnBase](/callback/onBase.md)< SearchMessageResult>  | Yes      | Callback interface                                                                                        |
| searchParam | [SearchMessagesParams](/class/message/SearchMessagesParams.md) | Yes      | Search parameters |


### Return Result

### SearchMessageResult

| Field Name          | Field Type                                                                | Description                             |
| ----------------- | ----------------------------------------------------------------------- | -------------------------------- |
| TotalCount        | int                                                                     | Total number of messages retrieved             |
| SearchResultItems | List<[SearchResultItems](/class/message/searchResultItem.md)> | Search results, returns array of searchXXX method caller |

### Code Example

```C# showLineNumbers
IMSDK.SearchLocalMessages((res,errCode,errMsg)=>{

},new SearchMessagesParams(){

});
```

</TabItem>
</Tabs>
