---
sidebar_position: 7
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# getSpecifiedGroupsInfo

## Description

:::info

Get the specified group information.

:::

:::caution Note

It is recommended that the group list is a maximum of 100 at a time.

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
  Future<List<GroupInfo>> getGroupsInfo({
    required List<String> groupIDList,
    String? operationID,
  })
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description       |
| -------------- | -------------- | -------- | ----------------- |
| groupIDList    | List<String\>  | Yes      | List of Group IDs |

### Return Result

| Parameter Name | Parameter Type                               | Description |
| -------------- | -------------------------------------------- | ----------- |
| ~              | List<[GroupInfo](/class/group/groupInfo.md)\>| Success     |

### Code Example

```dart showLineNumbers
    List<GroupInfo> list = await OpenIM.iMManager.groupManager.getGroupsInfo(
      groupIDList: [],
    );
    // todo
```

</TabItem>

<TabItem value="iOS">

### Function Prototype

```swift showLineNumbers

- (void)getSpecifiedGroupsInfo:(NSArray <NSString *> *)groupsID
                     onSuccess:(nullable OIMGroupsInfoCallback)onSuccess
                     onFailure:(nullable OIMFailureCallback)onFailure;

```

### Input Parameters

| Parameter Name | Parameter Type        | Required | Description       |
| -------------- | --------------------- | -------- | ----------------- |
| groupsID       | NSArray <NSString \*> | Yes      | List of Group IDs |

### Return Result

| Parameter Name | Parameter Type                                         | Description |
| -------------- | ------------------------------------------------------ | ----------- |
| onSuccess      | NSArray< [OIMGroupInfo](/class/group/groupInfo.md) \*> | Success     |
| onFailure      | OIMFailureCallback                                     | Failure     |

### Code Example

```swift showLineNumbers

[OIMManager.manager getSpecifiedGroupsInfo:@[]
                                 onSuccess:^(NSArray<OIMGroupInfo *> * _Nullable groupsInfo) {
} onFailure:^(NSInteger code, NSString * _Nullable msg) {
}];

```

</TabItem>

<TabItem value="Android">

### Function Prototype

```java showLineNumbers
public void getGroupsInfo(OnBase<List<GroupInfo>> base, List<String> gidList)
```

### Input Parameters

| Parameter Name | Parameter Type                                                              | Required | Description       |
| -------------- | --------------------------------------------------------------------------- | -------- | ----------------- |
| callBack       | [OnBase](/callback/onBase.md)<List<[GroupInfo](/class/group/groupInfo.md)>> | Yes      | Callback interface|
| gidList        | List<String\>                                                               | Yes      | List of Group IDs |

### Return Result

### Code Example

```java showLineNumbers

OpenIMClient.getInstance().groupManager.getGroupsInfo(new OnBase<List<GroupInfo>>() {
            @Override
            public void onError(int code, String error) {

            }

            @Override
            public void onSuccess(List<GroupInfo> data) {

            }
        },gidList);
```

</TabItem>

<TabItem value="Web">

### Function Prototype

```ts showLineNumbers
IMSDK.getSpecifiedGroupsInfo(groupIDList: string[], operationID?: string): Promise<WsResponse<GroupInfo[]>>
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description       |
| -------------- | -------------- | -------- | ----------------- |
| groupIDList    | string[]       | Yes      | List of Group IDs |

### Return Result

| Parameter Name  | Parameter Type                                                 | Description             |
| --------------- | -------------------------------------------------------------- | ----------------------- |
| Promise.then()  | Promise<WsResponse<[GroupInfo](/class/group/groupInfo.md)[]>\> | Group information list  |
| Promise.catch() | Promise<[WsResponse](/class/response.md)\>                     | Failure callback        |

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

const groupIDList = ['userID1', 'userID2'];
IMSDK.getSpecifiedGroupsInfo(groupIDList)
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
IMSDK.asyncApi('getSpecifiedGroupsInfo', operationID: string, groupIDList: string[]): Promise<GroupInfo[]>
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description                                                            |
| -------------- | -------------- | -------- | ---------------------------------------------------------------------- |
| operationID    | string         | Yes      | Operation ID, used to pinpoint issues, keep unique, prefer time+random |
| groupIDList    | string[]       | Yes      | List of Group IDs                                                      |

### Return Result

> Use the `openim-uniapp-polyfill` package to make the function Promise. When calling, you need to use `then` and `catch` to determine and handle success and failure callbacks.

| Parameter Name  | Parameter Type                                           | Description             |
| --------------- | -------------------------------------------------------- | ----------------------- |
| Promise.then()  | Promise<[GroupInfo](/class/group/groupInfo.md)[]\>       | Group information list  |
| Promise.catch() | Promise<[CatchResponse](/class/response.md)\>            | Failure callback        |

### Code Example

```js showLineNumbers
import IMSDK from 'openim-uniapp-polyfill';

const groupIDList = ['groupID1', 'groupID2'];
IMSDK.asyncApi('getSpecifiedGroupsInfo', IMSDK.uuid(), groupIDList)
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
OpenIMSDK.getSpecifiedGroupsInfo(groupIDList: string[], operationID?: string): Promise<GroupInfo[]>
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description                                                            |
| -------------- | -------------- | -------- | ---------------------------------------------------------------------- |
| operationID    | string         | No       | Operation ID, used to pinpoint issues, keep unique, prefer time+random |
| groupIDList    | string[]       | Yes      | List of Group IDs                                                      |

### Return Result

| Parameter Name  | Parameter Type                                           | Description             |
| --------------- | -------------------------------------------------------- | ----------------------- |
| Promise.then()  | Promise<[GroupInfo](/class/group/groupInfo.md)[]\>       | Group information list  |
| Promise.catch() | Promise<[OpenIMApiError](/class/response.md)\>           | Failure callback        |

### Code Example

```js showLineNumbers
import OpenIMSDK from "@openim/rn-client-sdk";

const groupIDList = ['userID1', 'userID2'];
OpenIMSDK.getSpecifiedGroupsInfo(groupIDList)
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

public static void GetSpecifiedGroupsInfo(OnBase<List<GroupInfo>> cb, string[] groupIdList)

```

### Input Parameters

| Parameter Name | Parameter Type                                                              | Required | Description       |
| -------------- | --------------------------------------------------------------------------- | -------- | ----------------- |
| cb             | [OnBase](/callback/onBase.md)<List<[GroupInfo](/class/group/groupInfo.md)>> | Yes      | Callback          |
| groupIdList    | string[]                                                                    | Yes      | List of Group IDs |

### Return Result

### Code Example

```C# showLineNumbers
IMSDK.GetSpecifiedGroupsInfo((list,errCode,errMsg)=>{
    
},{""});

```

</TabItem>

</Tabs>
