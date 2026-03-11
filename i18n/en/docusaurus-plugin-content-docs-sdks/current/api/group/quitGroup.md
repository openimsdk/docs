---
sidebar_position: 24
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# quitGroup

## Description

:::info

Quit the group.

:::

:::caution Note

(1) The group owner must transfer group ownership before they can quit the group.

  
**Related Callbacks**:    
[onJoinedGroupDeleted](../../callback/onJoinedGroupDeleted)   
[onGroupMemberDeleted](../../callback/onGroupMemberDeleted) 

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
  Future<dynamic> quitGroup({
    required String groupID,
    String? operationID,
  })
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description |
| -------- | -------- | -------- | ----- |
| groupID  | String   | Yes      | Group ID |

### Return Result

| Parameter Name | Parameter Type | Description                 |
| -------- | -------- | --------------------------- |
| ~        | ~        | Operation successful if no exception is thrown |

### Code Example

```dart showLineNumbers
   await OpenIM.iMManager.groupManager.quitGroup(
      groupID: '',
    );
    // todo
```

</TabItem>

<TabItem value="iOS">

### Function Prototype

```swift showLineNumbers

- (void)quitGroup:(NSString *)groupID
        onSuccess:(nullable OIMSuccessCallback)onSuccess
        onFailure:(nullable OIMFailureCallback)onFailure;

```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description |
| -------- | -------- | -------- | ----- |
| groupID  | NSString | Yes      | Group ID |

### Return Result

| Parameter Name | Parameter Type       | Description |
| --------- | -------------------- | ----------- |
| onSuccess | OIMSuccessCallback   | Success     |
| onFailure | OIMFailureCallback   | Failure     |

### Code Example

```swift showLineNumbers

 [OIMManager.manager quitGroup:@""
                     onSuccess:^(NSString * _Nullable data) {
} onFailure:^(NSInteger code, NSString * _Nullable msg) {
}];

```

</TabItem>

<TabItem value="Android">

### Function Prototype

```java showLineNumbers
 public void quitGroup(OnBase<String> callBack, String gid)

```

### Input Parameters

| Parameter Name | Parameter Type                 | Required | Description |
| -------- | ------------------------------ | -------- | -------- |
| callBack | [OnBase](/callback/onBase.md)  | Yes      | Callback interface |
| gid      | String                         | Yes      | Group ID |

### Return Result

### Code Example

```java showLineNumbers
OpenIMClient.getInstance().groupManager.quitGroup(new OnBase<String>() {
            @Override
            public void onError(int code, String error) {

            }

            @Override
            public void onSuccess(String data) {

            }
        });
```

</TabItem>

<TabItem value="Web">

### Function Prototype

```ts showLineNumbers
IMSDK.quitGroup(groupID: string, operationID?: string): Promise<WsResponse>
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description |
| -------- | -------- | -------- | ------- |
| groupID  | string   | Yes      | Group ID |

### Return Result

| Parameter Name  | Parameter Type                             | Description      |
| --------------- | ------------------------------------------ | ---------------- |
| Promise.then()  | Promise<[WsResponse](/class/response.md)\> | Success callback |
| Promise.catch() | Promise<[WsResponse](/class/response.md)\> | Failure callback |

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

IMSDK.quitGroup('groupID')
  .then(() => {
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
IMSDK.asyncApi('quitGroup', operationID: string, groupID: string): Promise<void>
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description                                                            |
| ----------- | -------- | -------- | ---------------------------------------------------------------------- |
| operationID | string   | Yes      | Operation ID, used to pinpoint issues, keep unique, prefer time+random |
| groupID     | string   | Yes      | Group ID                                                               |

### Return Result

> Use the `openim-uniapp-polyfill` package to make the function Promise. When calling, you need to use `then` and `catch` to determine and handle success and failure callbacks.

| Parameter Name  | Parameter Type                                | Description      |
| --------------- | --------------------------------------------- | ---------------- |
| Promise.then()  | Promise<void\>                                | Success callback |
| Promise.catch() | Promise<[CatchResponse](/class/response.md)\> | Failure callback |

### Code Example

```js showLineNumbers
import IMSDK from 'openim-uniapp-polyfill';

IMSDK.asyncApi('quitGroup', IMSDK.uuid(), 'groupID')
  .then(() => {
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
OpenIMSDK.quitGroup(groupID: string, operationID?: string): Promise<void>
```

### Input Parameters
| Parameter Name | Parameter Type | Required | Description                                                            |
| ----------- | -------- | -------- | ---------------------------------------------------------------------- |
| groupID     | string   | Yes      | Group ID                                                               |
| operationID | string   | No       | Operation ID, used to pinpoint issues, keep unique, prefer time+random |

### Return Result
| Parameter Name  | Parameter Type                                 | Description      |
| --------------- | ---------------------------------------------- | ---------------- |
| Promise.then()  | Promise<void\>                                 | Success callback |
| Promise.catch() | Promise<[OpenIMApiError](/class/response.md)\> | Failure callback |

### Code Example

```js showLineNumbers
import OpenIMSDK from "@openim/rn-client-sdk";

OpenIMSDK.quitGroup('groupID')
  .then(() => {
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

public static void QuitGroup(OnBase<bool> cb, string groupId)

```

### Input Parameters

| Parameter Name | Parameter Type                 | Required | Description |
| -------- | ------------------------------ | -------- | -------- |
| cb       | [OnBase](/callback/onBase.md)  | Yes      | Callback interface |
| groupId  | string                         | Yes      | Group ID |

### Return Result

### Code Example

```C# showLineNumbers

IMSDK.QuitGroup((suc,errCode,errMsg)=>{

},groupId);

```

</TabItem>

</Tabs>
