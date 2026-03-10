---
sidebar_position: 21
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# changeGroupMute

## Description

:::info

The group owner or group administrator modifies the mute status of the group.

:::

:::caution Note

After being muted, ordinary members cannot send messages, and the group owner and administrator can continue to send messages.

**Related Callbacks**:  
[onGroupInfoChanged](../../callback/onGroupInfoChanged)  

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
 Future<dynamic> changeGroupMute({
    required String groupID,
    required bool mute,
    String? operationID,
  })
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description          |
| -------------- | -------------- | -------- | -------------------- |
| groupID        | String         | Yes      | Group ID             |
| mute           | bool           | Yes      | true: enable group mute |

### Return Result

| Parameter Name | Parameter Type | Description                                 |
| -------------- | -------------- | ------------------------------------------- |
| ~              | ~              | Operation successful if no exception thrown |

### Code Example

```dart showLineNumbers
    await OpenIM.iMManager.groupManager.changeGroupMute(
      groupID: 'groupID',
      mute: true,
    );
    // todo
```

</TabItem>

<TabItem value="iOS">

### Function Prototype

```swift showLineNumbers

- (void)changeGroupMute:(NSString *)groupID
                 isMute:(BOOL)isMute
              onSuccess:(nullable OIMSuccessCallback)onSuccess
              onFailure:(nullable OIMFailureCallback)onFailure;

```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description   |
| -------------- | -------------- | -------- | ------------- |
| groupID        | NSString       | Yes      | Group ID      |
| isMute         | BOOL           | Yes      | Whether to mute |

### Return Result

| Parameter Name | Parameter Type     | Description |
| -------------- | ------------------ | ----------- |
| onSuccess      | OIMSuccessCallback | Success     |
| onFailure      | OIMFailureCallback | Failure     |

### Code Example

```swift showLineNumbers

 [OIMManager.manager changeGroupMute:@""
                              isMute:YES
                           onSuccess:^(NSString * _Nullable data) {
} onFailure:^(NSInteger code, NSString * _Nullable msg) {
}];

```

</TabItem>

<TabItem value="Android">

### Function Prototype

```java showLineNumbers

  public void changeGroupMute(OnBase<String> callBack, String gid, boolean mute)

```

### Input Parameters

| Parameter Name | Parameter Type                | Required | Description                     |
| -------------- | ----------------------------- | -------- | ------------------------------- |
| callBack       | [OnBase](/callback/onBase.md) | Yes      | Callback interface              |
| gid            | String                        | Yes      | Group ID                        |
| mute           | Boolean                       | Yes      | true to mute, false to unmute |

### Return Result

### Code Example

```java showLineNumbers
  OpenIMClient.getInstance().groupManager.changeGroupMute(new OnBase<String>() {
            @Override
            public void onError(int code, String error) {

            }

            @Override
            public void onSuccess(String data) {

            }
        },gid,mute)

```

</TabItem>

<TabItem value="Web">

### Function Prototype

```ts showLineNumbers
IMSDK.changeGroupMute({
    groupID: string;
    isMute: boolean;
}, operationID?: string): Promise<WsResponse>
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description   |
| -------------- | -------------- | -------- | ------------- |
| groupID        | string         | Yes      | Group ID      |
| isMute         | boolean        | Yes      | Whether to mute |

### Return Result

| Parameter Name  | Parameter Type                               | Description      |
| --------------- | -------------------------------------------- | ---------------- |
| Promise.then()  | Promise<[WsResponse](/class/response.md)\>   | Success callback |
| Promise.catch() | Promise<[WsResponse](/class/response.md)\>   | Failure callback |

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

IMSDK.changeGroupMute({
  groupID: '',
  isMute: true,
})
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
IMSDK.asyncApi('changeGroupMute', operationID: string, {
  groupID: string;
  isMute: boolean;
}): Promise<void>
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description                                                            |
| -------------- | -------------- | -------- | ---------------------------------------------------------------------- |
| operationID    | string         | Yes      | Operation ID, used to pinpoint issues, keep unique, prefer time+random |
| groupID        | string         | Yes      | Group ID                                                               |
| isMute         | boolean        | Yes      | Whether to mute                                                          |

### Return Result

> Use the `openim-uniapp-polyfill` package to make the function Promise. When calling, you need to use `then` and `catch` to determine and handle success and failure callbacks.

| Parameter Name  | Parameter Type                                | Description      |
| --------------- | --------------------------------------------- | ---------------- |
| Promise.then()  | Promise<void\>                                | Success callback |
| Promise.catch() | Promise<[CatchResponse](/class/response.md)\> | Failure callback |

### Code Example

```js showLineNumbers
import IMSDK from 'openim-uniapp-polyfill';

IMSDK.asyncApi('changeGroupMute', IMSDK.uuid(), {
  groupID: '',
  isMute: true,
})
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
OpenIMSDK.changeGroupMute({
  groupID: string,
  isMute: boolean,
}, operationID?: string): Promise<void>
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description                                                            |
| -------------- | -------------- | -------- | ---------------------------------------------------------------------- |
| groupID        | string         | Yes      | Group ID                                                               |
| isMute         | boolean        | Yes      | Whether to mute                                                          |
| operationID    | string         | No       | Operation ID, used to pinpoint issues, keep unique, prefer time+random |

### Return Result


| Parameter Name  | Parameter Type                                 | Description      |
| --------------- | ---------------------------------------------- | ---------------- |
| Promise.then()  | Promise<void\>                                 | Success callback |
| Promise.catch() | Promise<[OpenIMApiError](/class/response.md)\> | Failure callback |

### Code Example

```js showLineNumbers
import OpenIMSDK from "@openim/rn-client-sdk";

OpenIMSDK.changeGroupMute({
  groupID: '',
  isMute: true,
})
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

public static void ChangeGroupMute(OnBase<bool> cb, string groupId, bool isMute)

```

### Input Parameters

| Parameter Name | Parameter Type                | Required | Description                   |
| -------------- | ----------------------------- | -------- | ----------------------------- |
| cb             | [OnBase](/callback/onBase.md) | Yes      | Callback function             |
| groupId        | string                        | Yes      | Group ID                      |
| isMute         | bool                          | Yes      | true to mute, false to unmute |

### Return Result

### Code Example

```C# showLineNumbers

IMSDK.ChangeGroupMute((suc,errCode,errMsg)=>{

},groupId,isMute);

```

</TabItem>

</Tabs>
