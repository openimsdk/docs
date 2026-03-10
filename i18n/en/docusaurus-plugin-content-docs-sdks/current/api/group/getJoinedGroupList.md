---
sidebar_position: 5
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# getJoinedGroupList

## Description

:::info

Get the list of joined groups.

:::

:::caution Note

If the joined group has been dismissed, it will not be returned.

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
  Future<List<GroupInfo>> getJoinedGroupList({String? operationID})
```

### Input Parameters

None

### Return Result

| Parameter Name | Parameter Type                               | Description |
| -------------- | -------------------------------------------- | ----------- |
| ~              | List<[GroupInfo](/class/group/groupInfo.md)> | Success     |

### Code Example

```dart showLineNumbers
    List<GroupInfo> list = await OpenIM.iMManager.groupManager.getJoinedGroupList();
    // todo
```

</TabItem>

<TabItem value="iOS">

### Function Prototype

```swift showLineNumbers

- (void)getJoinedGroupListWithOnSuccess:(nullable OIMGroupsInfoCallback)onSuccess
                                onFailure:(nullable OIMFailureCallback)onFailure;

```

### Input Parameters

None

### Return Result

| Parameter Name | Parameter Type                                         | Description |
| -------------- | ------------------------------------------------------ | ----------- |
| onSuccess      | NSArray< [OIMGroupInfo](/class/group/groupInfo.md) \*> | Success     |
| onFailure      | OIMFailureCallback                                     | Failure     |

### Code Example

```swift showLineNumbers

[OIMManager.manager getJoinedGroupListWithOnSuccess:^(NSArray<OIMGroupInfo *> * _Nullable groupsInfo) {
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
IMSDK.getJoinedGroupList(operationID?: string): Promise<WsResponse<GroupItem[]>>
```

### Input Parameters

None

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

IMSDK.getJoinedGroupList()
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
IMSDK.asyncApi('getJoinedGroupList', operationID: string): Promise<GroupItem[]>
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description                                                            |
| -------------- | -------------- | -------- | ---------------------------------------------------------------------- |
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

IMSDK.asyncApi('getJoinedGroupList', IMSDK.uuid())
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
OpenIMSDK.getJoinedGroupList(operationID?: string): Promise<GroupItem[]>
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description                                                            |
| -------------- | -------------- | -------- | ---------------------------------------------------------------------- |
| operationID    | string         | No       | Operation ID, used to pinpoint issues, keep unique, prefer time+random |

### Return Result

| Parameter Name  | Parameter Type                                           | Description           |
| --------------- | -------------------------------------------------------- | --------------------- |
| Promise.then()  | Promise<[GroupItem](/class/group/groupInfo.md)[]\>       | Joined group list     |
| Promise.catch() | Promise<[OpenIMApiError](/class/response.md)\>           | Failure callback      |

### Code Example

```js showLineNumbers
import OpenIMSDK from "@openim/rn-client-sdk";

 OpenIMSDK.getJoinedGroupList()
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

public static void GetJoinedGroupList(OnBase<List<GroupInfo>> cb)

```

### Input Parameters

| Parameter Name | Parameter Type                                                              | Required | Description |
| -------------- | --------------------------------------------------------------------------- | -------- | ----------- |
| cb             | [OnBase](/callback/onBase.md)<List<[GroupInfo](/class/group/groupInfo.md)>> | Yes      | Callback    |

### Return Result

### Code Example

```C# showLineNumbers

IMSDK.GetJoinedGroupList((list,errCode,errMsg)=>{

});

```

</TabItem>

</Tabs>
