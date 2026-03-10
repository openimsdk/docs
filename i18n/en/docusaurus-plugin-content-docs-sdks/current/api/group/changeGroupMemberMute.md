---
sidebar_position: 20
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# changeGroupMemberMute

## Description

:::info

The group owner or group administrator modifies the mute status of a group member.

:::

:::caution Note

The group owner can mute administrators and ordinary members, and administrators can mute ordinary members.

**Related Callbacks**:  
[onGroupMemberInfoChanged](../../callback/onGroupMemberInfoChanged)  

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
Future<dynamic> changeGroupMemberMute({
    required String groupID,
    required String userID,
    int seconds = 0,
    String? operationID,
  })
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description                                                         |
| -------------- | -------------- | -------- | ------------------------------------------------------------------- |
| groupID        | String         | Yes      | Group ID                                                            |
| userID         | String         | Yes      | Muted User ID                                                       |
| seconds        | int            | Yes      | Muted duration in seconds. Setting it to 0 cancels the mute status. |

### Return Result

| Parameter Name | Parameter Type | Description                                 |
| -------------- | -------------- | ------------------------------------------- |
| ~              | ~              | Operation successful if no exception thrown |

### Code Example

```dart showLineNumbers
   await OpenIM.iMManager.groupManager.changeGroupMemberMute(
      groupID: 'groupID',
      userID: 'userID',
      seconds: 60,
    );
    // todo
```

</TabItem>

<TabItem value="iOS">

### Function Prototype

```swift showLineNumbers

- (void)changeGroupMemberMute:(NSString *)groupID
                       userID:(NSString *)userID
                 mutedSeconds:(NSInteger)mutedSeconds
           onSuccess:(nullable OIMSuccessCallback)onSuccess
           onFailure:(nullable OIMFailureCallback)onFailure;

```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description                                                         |
| -------------- | -------------- | -------- | ------------------------------------------------------------------- |
| groupID        | NSString       | Yes      | Group ID                                                            |
| userID         | NSString       | Yes      | Muted User ID                                                       |
| mutedSeconds   | NSInteger      | Yes      | Muted duration in seconds. Setting it to 0 cancels the mute status. |

### Return Result

| Parameter Name | Parameter Type     | Description |
| -------------- | ------------------ | ----------- |
| onSuccess      | OIMSuccessCallback | Success     |
| onFailure      | OIMFailureCallback | Failure     |

### Code Example

```swift showLineNumbers

[OIMManager.manager changeGroupMemberMute:@""
                                   userID:@""
                             mutedSeconds:30
                                onSuccess:^(NSString * _Nullable data) {
} onFailure:^(NSInteger code, NSString * _Nullable msg) {
}];

```

</TabItem>

<TabItem value="Android">

### Function Prototype

```java showLineNumbers

 public void changeGroupMemberMute(OnBase<String> callBack, String gid, String uid, long seconds)

```

### Input Parameters

| Parameter Name | Parameter Type                | Required | Description                                                         |
| -------------- | ----------------------------- | -------- | ------------------------------------------------------------------- |
| callBack       | [OnBase](/callback/onBase.md) | Yes      | Callback interface                                                  |
| gid            | String                        | Yes      | Group ID                                                            |
| uid            | String                        | Yes      | User ID                                                             |
| seconds        | Long                          | Yes      | Muted duration in seconds. Setting it to 0 cancels the mute status. |

### Return Result

### Code Example

```java showLineNumbers
  OpenIMClient.getInstance().groupManager.changeGroupMemberMute(new OnBase<String>() {
            @Override
            public void onError(int code, String error) {

            }

            @Override
            public void onSuccess(String data) {

            }
        },gid,uid,seconds)

```

</TabItem>

<TabItem value="Web">

### Function Prototype

```ts showLineNumbers
IMSDK.changeGroupMemberMute({
    groupID: string;
    userID: string;
    mutedSeconds: number;
}, operationID?: string): Promise<WsResponse>
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description                                                         |
| -------------- | -------------- | -------- | ------------------------------------------------------------------- |
| groupID        | string         | Yes      | Group ID                                                            |
| userID         | string         | Yes      | Muted User ID                                                       |
| mutedSeconds   | number         | Yes      | Muted duration in seconds. Setting it to 0 cancels the mute status. |

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

IMSDK.changeGroupMemberMute({
  groupID: '',
  userID: '',
  mutedSeconds: 7200,
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
IMSDK.asyncApi('changeGroupMemberMute', operationID: string, {
  groupID: string;
  userID: string;
  mutedSeconds: number;
}): Promise<void>
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description                                                            |
| -------------- | -------------- | -------- | ---------------------------------------------------------------------- |
| operationID    | string         | Yes      | Operation ID, used to pinpoint issues, keep unique, prefer time+random |
| groupID        | string         | Yes      | Group ID                                                               |
| userID         | string         | Yes      | Muted User ID                                                          |
| mutedSeconds   | number         | Yes      | Muted duration in seconds. Setting it to 0 cancels the mute status.    |

### Return Result

> Use the `openim-uniapp-polyfill` package to make the function Promise. When calling, you need to use `then` and `catch` to determine and handle success and failure callbacks.

| Parameter Name  | Parameter Type                                | Description      |
| --------------- | --------------------------------------------- | ---------------- |
| Promise.then()  | Promise<void\>                                | Success callback |
| Promise.catch() | Promise<[CatchResponse](/class/response.md)\> | Failure callback |

### Code Example

```js showLineNumbers
import IMSDK from 'openim-uniapp-polyfill';

IMSDK.asyncApi('changeGroupMemberMute', IMSDK.uuid(), {
  groupID: '',
  userID: '',
  mutedSeconds: 7200,
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
OpenIMSDK.changeGroupMemberMute({
  groupID: string,
  userID: string,
  mutedSeconds: number,
}, operationID?: string): Promise<void>
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description                                                            |
| -------------- | -------------- | -------- | ---------------------------------------------------------------------- |
| groupID        | string         | Yes      | Group ID                                                               |
| userID         | string         | Yes      | Muted User ID                                                          |
| mutedSeconds   | number         | Yes      | Muted duration in seconds. Setting it to 0 cancels the mute status.    |
| operationID    | string         | No       | Operation ID, used to pinpoint issues, keep unique, prefer time+random |

### Return Result

| Parameter Name  | Parameter Type                                 | Description      |
| --------------- | ---------------------------------------------- | ---------------- |
| Promise.then()  | Promise<void\>                                 | Success callback |
| Promise.catch() | Promise<[OpenIMApiError](/class/response.md)\> | Failure callback |


### Code Example

```js showLineNumbers
import OpenIMSDK from "@openim/rn-client-sdk";

OpenIMSDK.changeGroupMemberMute({
  groupID: '',
  userID: '',
  mutedSeconds: 7200,
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

public static void ChangeGroupMemberMute(OnBase<bool> cb, string groupId, string userId, int mutedSeconds)

```

### Input Parameters

| Parameter Name | Parameter Type                | Required | Description                                                         |
| -------------- | ----------------------------- | -------- | ------------------------------------------------------------------- |
| cb             | [OnBase](/callback/onBase.md) | Yes      | Callback interface                                                  |
| groupId        | string                        | Yes      | Group ID                                                            |
| userId         | string                        | Yes      | User ID                                                             |
| mutedSeconds   | int                           | Yes      | Muted duration in seconds. Setting it to 0 cancels the mute status. |

### Return Result

### Code Example

```C# showLineNumbers

IMSDK.ChangeGroupMemberMute((suc,errCode,errMsg)=>{

},groupID,userID,mutedSeconds);

```

</TabItem>

</Tabs>
