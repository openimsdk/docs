---
sidebar_position: 5
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# getJoinedGroupListPage

## Description

:::info

Get the list of joined groups with pagination. offset is the start index, and count is the number to fetch.

:::

:::caution Note

The count should not be too large, otherwise the request time will be too long.

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
    Future<List<GroupInfo>> getJoinedGroupListPage({String? operationID, int offset = 0, int count = 40});
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description                            |
| -------------- | -------------- | -------- | -------------------------------------- |
| offset         | int            | Yes      | Start index for paginated pull         |
| count          | int            | Yes      | Number of items to pull per page       |

### Return Result

| Parameter Name | Parameter Type                               | Description |
| -------------- | -------------------------------------------- | ----------- |
| ~              | List< [GroupInfo](/class/group/groupInfo.md)>| Success     |

### Code Example

```dart showLineNumbers
    List<GroupInfo> list = await OpenIM.iMManager.groupManager.getJoinedGroupListPage();
    // todo
```

</TabItem>

<TabItem value="iOS">

### Function Prototype

```swift showLineNumbers

- (void)getJoinedGroupListPageWithOffset:(NSInteger)offset
                                   count:(NSInteger)count
                               onSuccess:(nullable OIMGroupsInfoCallback)onSuccess
                                onFailure:(nullable OIMFailureCallback)onFailure;

```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description                            |
| -------------- | -------------- | -------- | -------------------------------------- |
| offset         | int            | Yes      | Start index for paginated pull         |
| count          | int            | Yes      | Number of items to pull per page       |

### Return Result

| Parameter Name | Parameter Type                                         | Description |
| -------------- | ------------------------------------------------------ | ----------- |
| onSuccess      | NSArray< [OIMGroupInfo](/class/group/groupInfo.md) \*> | Success     |
| onFailure      | OIMFailureCallback                                     | Failure     |

### Code Example

```swift showLineNumbers

[OIMManager.manager getJoinedGroupListWithOffset:
                                   count:
                                   onSuccess:^(NSArray<OIMGroupInfo *> * _Nullable groupsInfo) {
} onFailure:^(NSInteger code, NSString * _Nullable msg) {
}];

```

</TabItem>

<TabItem value="Android">

### Function Prototype

```java showLineNumbers

    public void getJoinedGroupList(OnBase<List<GroupInfo>> callBack)

```

### Input Parameters

| Parameter Name | Parameter Type                                                              | Required | Description        |
| -------------- | --------------------------------------------------------------------------- | -------- | ------------------ |
| callBack       | [OnBase](/callback/onBase.md)<List<[GroupInfo](/class/group/groupInfo.md)>> | Yes      | Callback interface |

### Return Result

### Code Example

```java showLineNumbers

OpenIMClient.getInstance().groupManager.getJoinedGroupList(new OnBase<List<GroupInfo>>() {
            @Override
            public void onError(int code, String error) {

            }

            @Override
            public void onSuccess(List<GroupInfo> data) {

            }
        });

```

</TabItem>

<TabItem value="Web">

### Function Prototype

```ts showLineNumbers
IMSDK.getJoinedGroupList({
  offset: number;
  count: number;
}, operationID?: string): Promise<WsResponse<GroupItem[]>>
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description                                                            |
| -------------- | -------------- | -------- | ---------------------------------------------------------------------- |
| offset         | number         | Yes      | Start index for paginated pull                                         |
| count          | number         | Yes      | Number of items to pull per page                                       |
| operationID    | string         | No       | Operation ID, used to pinpoint issues, keep unique, prefer time+random |

### Return Result

| Parameter Name  | Parameter Type                                                 | Description           |
| --------------- | -------------------------------------------------------------- | --------------------- |
| Promise.then()  | Promise<WsResponse<[GroupItem](/class/group/groupInfo.md)[]>\> | Joined group list     |
| Promise.catch() | Promise<[WsResponse](/class/response.md)\>                     | Failure callback      |

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

IMSDK.getJoinedGroupList({ offset: 0, count: 1000 })
  .then(({ data }) => {
    // Success
  })
  .catch(({ errCode, errMsg }) => {
    // Failure
  });
```

</TabItem>

<TabItem value="uni-app">

### Function Prototype

```ts showLineNumbers
IMSDK.asyncApi('getJoinedGroupList', operationID: string, {
  offset: number;
  count: number;
}): Promise<GroupItem[]>
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description                                                            |
| -------------- | -------------- | -------- | ---------------------------------------------------------------------- |
| offset         | number         | Yes      | Start index for paginated pull                                         |
| count          | number         | Yes      | Number of items to pull per page                                       |
| operationID    | string         | Yes      | Operation ID, used to pinpoint issues, keep unique, prefer time+random |

### Return Result

> Use the `openim-uniapp-polyfill` package to make the function Promise. When calling, you need to use `then` and `catch` to determine and handle success and failure callbacks.

| Parameter Name  | Parameter Type                                           | Description           |
| --------------- | -------------------------------------------------------- | --------------------- |
| Promise.then()  | Promise<[GroupItem](/class/group/groupInfo.md)[]\>       | Joined group list     |
| Promise.catch() | Promise<[CatchResponse](/class/response.md)\>            | Failure callback      |

### Code Example

```js showLineNumbers
import IMSDK from 'openim-uniapp-polyfill';

IMSDK.asyncApi('getJoinedGroupList', IMSDK.uuid(), { offset: 0, count: 1000 })
  .then((data) => {
    // Success
  })
  .catch(({ errCode, errMsg }) => {
    // Failure
  });
```

</TabItem>
<TabItem value="React-Native">

### Function Prototype

```ts showLineNumbers
OpenIMSDK.getJoinedGroupList({
  offset: number;
  count: number;
}, operationID?: string): Promise<GroupItem[]>
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description                                                            |
| -------------- | -------------- | -------- | ---------------------------------------------------------------------- |
| offset         | number         | Yes      | Start index for paginated pull                                         |
| count          | number         | Yes      | Number of items to pull per page                                       |
| operationID    | string         | No       | Operation ID, used to pinpoint issues, keep unique, prefer time+random |

### Return Result

| Parameter Name  | Parameter Type                                           | Description           |
| --------------- | -------------------------------------------------------- | --------------------- |
| Promise.then()  | Promise<[GroupItem](/class/group/groupInfo.md)[]\>       | Joined group list     |
| Promise.catch() | Promise<[OpenIMApiError](/class/response.md)\>           | Failure callback      |

### Code Example

```js showLineNumbers
import OpenIMSDK from "@openim/rn-client-sdk";

 OpenIMSDK.getJoinedGroupList({
  offset: 0;
  count: 1000;
})
  .then((data) => {
    // Success
  })
  .catch((error) => {
    // Failure
  });
```

</TabItem>

<TabItem value="Unity">

### Function Prototype

```C# showLineNumbers

public static void GetJoinedGroupListPage(OnBase<List<GroupInfo>> cb, int offset, int count)

```

### Input Parameters

| Parameter Name | Parameter Type                                                              | Required | Description                            |
| -------------- | --------------------------------------------------------------------------- | -------- | -------------------------------------- |
| cb             | [OnBase](/callback/onBase.md)<List<[GroupInfo](/class/group/groupInfo.md)>> | Yes      | Callback                               |
| offset         | int                                                                         | Yes      | Start index for paginated pull         |
| count          | int                                                                         | Yes      | Number of items to pull per page       |

### Return Result

### Code Example

```C# showLineNumbers

IMSDK.GetJoinedGroupListPage((list,errCode,errMsg)=>{

},0,10);

```

</TabItem>

</Tabs>
