---
sidebar_position: 9
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# getGroupApplicationListAsRecipient

## Description

:::info

As a group owner or administrator, get the group applications received by the groups you manage.

:::

:::caution Note

Get all group applications at once.

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
  Future<List<GroupApplicationInfo>> getGroupApplicationListAsRecipient(
          {String? operationID})
```

### Input Parameters

None

### Return Result

| Parameter Name | Parameter Type                                                     | Description |
| -------------- | ------------------------------------------------------------------ | ----------- |
| ~              | List<[GroupApplicationInfo](/class/group/groupApplicationInfo.md)> | Success     |

### Code Example

```dart showLineNumbers
    List<GroupApplicationInfo> list = await OpenIM.iMManager.groupManager.getGroupApplicationListAsRecipient();
    // todo
```

</TabItem>

<TabItem value="iOS">

### Function Prototype

```swift showLineNumbers

- (void)getGroupApplicationListAsRecipientWithOnSuccess:(nullable OIMGroupsApplicationCallback)onSuccess
                                              onFailure:(nullable OIMFailureCallback)onFailure;

```

### Input Parameters

None

### Return Result

| Parameter Name | Parameter Type                                                               | Description |
| -------------- | ---------------------------------------------------------------------------- | ----------- |
| onSuccess      | NSArray< [OIMGroupApplicationInfo](/class/group/groupApplicationInfo.md) \*> | Success     |
| onFailure      | OIMFailureCallback                                                           | Failure     |

### Code Example

```swift showLineNumbers

[OIMManager.manager getGroupApplicationListAsRecipientWithOnSuccess:^(NSArray<OIMGroupApplicationInfo *> * _Nullable groupsInfo) {

} onFailure:^(NSInteger code, NSString * _Nullable msg) {

}];

```

</TabItem>

<TabItem value="Android">

### Function Prototype

```java showLineNumbers

    public void getRecvGroupApplicationList(OnBase<List<GroupApplicationInfo>> callBack)

```

### Input Parameters

| Parameter Name | Parameter Type                                                                                      | Required | Description        |
| -------------- | --------------------------------------------------------------------------------------------------- | -------- | ------------------ |
| callBack       | [OnBase](/callback/onBase.md)<List<[GroupApplicationInfo](/class/group/groupApplicationInfo.md)>> | Yes      | Callback interface |

### Return Result

### Code Example

```java showLineNumbers

   OpenIMClient.getInstance().groupManager.getRecvGroupApplicationList(new OnBase<List<GroupApplicationInfo>>() {
            @Override
            public void onError(int code, String error) {

            }

            @Override
            public void onSuccess(List<GroupApplicationInfo> data) {

            }
        });

```

</TabItem>

<TabItem value="Web">

### Function Prototype

```ts showLineNumbers
IMSDK.getGroupApplicationListAsRecipient(params: {
  offset: number;
  count: number;
}): Promise<WsResponse<GroupApplicationItem[]>>
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description                            |
| -------------- | -------------- | -------- | -------------------------------------- |
| offset         | number         | Yes      | Start index for paginated pull         |
| count          | number         | Yes      | Number of items to pull per page       |

### Return Result

| Parameter Name  | Parameter Type                                                                               | Description                          |
| --------------- | -------------------------------------------------------------------------------------------- | ------------------------------------ |
| Promise.then()  | Promise<WsResponse<[GroupApplicationItem](/class/group/groupApplicationInfo.md)[]>\>         | List of received group applications  |
| Promise.catch() | Promise<[WsResponse](/class/response.md)\>                                                   | Failure callback                     |

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

IMSDK.getGroupApplicationListAsRecipient({
  offset: 0,
  count: 10,
})
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
IMSDK.asyncApi('getGroupApplicationListAsRecipient', operationID: string): Promise<GroupApplicationItem[]>
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description                                                            |
| -------------- | -------------- | -------- | ---------------------------------------------------------------------- |
| operationID    | string         | Yes      | Operation ID, used to pinpoint issues, keep unique, prefer time+random |

### Return Result

> Use the `openim-uniapp-polyfill` package to make the function Promise. When calling, you need to use `then` and `catch` to determine and handle success and failure callbacks.

| Parameter Name  | Parameter Type                                                                     | Description                          |
| --------------- | ---------------------------------------------------------------------------------- | ------------------------------------ |
| Promise.then()  | Promise<[GroupApplicationItem](/class/group/groupApplicationInfo.md)[]\>           | List of received group applications  |
| Promise.catch() | Promise<[CatchResponse](/class/response.md)\>                                      | Failure callback                     |

### Code Example

```js showLineNumbers
import IMSDK from 'openim-uniapp-polyfill';

IMSDK.asyncApi('getGroupApplicationListAsRecipient', IMSDK.uuid())
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
OpenIMSDK.getGroupApplicationListAsRecipient(req: {
  groupIDs: string[];
  handleResults: number[]
  offset: number;
  count: number;
}, operationID?: string): Promise<GroupApplicationItem[]>
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description                                                            |
| -------------- | -------------- | -------- | ---------------------------------------------------------------------- |
| groupIDs       | string[]       | Yes      | List of Group IDs                                                      |
| handleResults  | number[]       | Yes      | -                                                                      |
| offset         | number         | Yes      | Start index for paginated pull                                         |
| count          | number         | Yes      | Number of items to pull per page                                       |
| operationID    | string         | No       | Operation ID, used to pinpoint issues, keep unique, prefer time+random |

### Return Result

| Parameter Name  | Parameter Type                                                                     | Description                          |
| --------------- | ---------------------------------------------------------------------------------- | ------------------------------------ |
| Promise.then()  | Promise<[GroupApplicationItem](/class/group/groupApplicationInfo.md)[]\>           | List of received group applications  |
| Promise.catch() | Promise<[OpenIMApiError](/class/response.md)\>                                     | Failure callback                     |

### Code Example

```js showLineNumbers
import OpenIMSDK from "@openim/rn-client-sdk";

OpenIMSDK.getGroupApplicationListAsRecipient({
  offset: 0,
  count: 10,
  handleResults: [],
  groupIDs: ['groupID1', 'groupID2'],
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

public static void GetGroupApplicationListAsRecipient(OnBase<List<GroupApplicationInfo>> cb)

```

### Input Parameters

| Parameter Name | Parameter Type                                                                                      | Required | Description        |
| -------------- | --------------------------------------------------------------------------------------------------- | -------- | ------------------ |
| cb             | [OnBase](/callback/onBase.md)<List<[GroupApplicationInfo](/class/group/groupApplicationInfo.md)>> | Yes      | Callback interface |

### Return Result

### Code Example

```C# showLineNumbers

IMSDK.GetGroupApplicationListAsRecipient((list,errCode,errMsg)=>{

});

```

</TabItem>
</Tabs>
