---
sidebar_position: 4
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# getUsersInfo

## Description

:::info

Get the personal information of specified users. This API is used for retrieving public information between non-friends, such as nickname, avatar, etc.

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
Future<List<PublicUserInfo>> getUsersInfo({
    required List<String> userIDList,
    String? operationID,
  })
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description    |
| -------- | ------------- | -------- | ------- |
| userIDList  | List< String\> | Yes      | User ID list |
| groupID  | String        | No       | Group ID |

### Return Result

| Parameter Name | Parameter Type        | Description         |
| -------- | --------------- | ------------ |
| then     | List< [PublicUserInfo](/class/user/publicInfo.md) \> | Success callback |
| onError  | Function        | Failure callback |

### Code Example

```dart showLineNumbers
await OpenIM.iMManager.userManager.getUsersInfo(userIDList: []);
// todo
```

</TabItem>

<TabItem value="iOS">

### Function Prototype

```swift showLineNumbers

- (void)getUsersInfo:(NSArray<NSString *> *)userIDs
                   onSuccess:(nullable OIMPublicUsersInfoCallback)onSuccess
                   onFailure:(nullable OIMFailureCallback)onFailure;

```

### Input Parameters

| Parameter Name | Parameter Type              | Required | Description    |
| -------- | --------------------- | -------- | ------- |
| userIDs  | NSArray<NSString \*\> | Yes      | User ID list |
| groupID  | NSString              | No       | Group ID |

### Return Result

| Parameter Name  | Parameter Type                                             | Description     |
| --------- | ---------------------------------------------------- | -------- |
| onSuccess | [OIMPublicUserInfo](/class/user/publicInfo.md)                                  | Success return |
| onFailure | OIMFailureCallback | Failure return |

### Code Example

```swift showLineNumbers

[OIMManager.manager getUsersInfo:@[]
                                 groupID:@""
                               onSuccess:^(NSArray<OIMPublicUserInfo *> * _Nullable usersInfo) {

} onFailure:^(NSInteger code, NSString * _Nullable msg) {

}];

```

</TabItem>

<TabItem value="Android">

### Function Prototype

```java showLineNumbers
public void getUsersInfo(OnBase<List<PublicUserInfo>> callBack, List<String> uidList)
```

### Input Parameters

| Parameter Name | Parameter Type                                                                                     | Required | Description         |
| -------- | -------------------------------------------------------------------------------------------- | -------- | ------------ |
| callBack | [OnBase](/callback/onBase.md)<List<[PublicUserInfo](/class/user/publicInfo.md)>> | Yes      | Callback interface     |
| uidList  | List<String\>                                                                                | Yes      | User ID collection |

### Code Example

```java showLineNumbers
OpenIMClient.getInstance().userInfoManager.getUsersInfo(new OnBase<List<PublicUserInfo>>() {
    @Override
    public void onError(int code, String error) {
      // todo: Handle error message
    }
    @Override
    public void onSuccess(List<PublicUserInfo> data) {
      // todo: Request successful, return PublicUser
    }
},uidList);
```

</TabItem>

<TabItem value="Web">

### Function Prototype

```ts showLineNumbers
IMSDK.getUsersInfo(userIDList: string[], operationID?: string): Promise<WsResponse<PublicUserItem[]>>
```

### Input Parameters

| Parameter Name   | Parameter Type | Required | Description             |
| ---------- | -------- | -------- | ---------------- |
| userIDList | string[] | Yes      | User ID list |
| operationID | string   | No       | Operation ID, used to pinpoint issues, keep unique, prefer time+random |

### Return Result

| Parameter Name  | Parameter Type                                                                      | Description                 |
| --------------- | ----------------------------------------------------------------------------- | -------------------- |
| Promise.then()  | Promise<WsResponse<[PublicUserItem](/class/user/publicInfo.md)[]>\> | Queried user info list |
| Promise.catch() | Promise<[WsResponse](/class/response.md)\>                          | Failure callback         |

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

const userIDList = ['userID1', 'userID2'];
IMSDK.getUsersInfo(userIDList)
  .then(({ data }) => {
    // data: Queried user info list
  })
  .catch(({ errCode, errMsg }) => {
    // Call failed
  });
```

</TabItem>

<TabItem value="uni-app">

### Function Prototype

```ts showLineNumbers
IMSDK.asyncApi('getUsersInfo', operationID: string, userIDList: string[]): Promise<PublicUserItem[]>
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description                                                    |
| ----------- | -------- | -------- | ------------------------------------------------------- |
| userIDList  | string[] | Yes      | User userID list                                        |
| operationID | string   | Yes      | Operation ID, used to pinpoint issues, keep unique, prefer time+random |

### Return Result

> Use the `openim-uniapp-polyfill` package to make the function Promise. When calling, you need to use `then` and `catch` to determine and handle success and failure callbacks.

| Parameter Name  | Parameter Type                                                          | Description                 |
| --------------- | ----------------------------------------------------------------- | -------------------- |
| Promise.then()  | Promise<[PublicUserItem](/class/user/publicInfo.md)[]\> | Queried user info list |
| Promise.catch() | Promise<[CatchResponse](/class/response.md)\>           | Failure callback         |

### Code Example

```js showLineNumbers
import IMSDK from 'openim-uniapp-polyfill';

const userIDList = ['userID1', 'userID2'];
IMSDK.asyncApi('getUsersInfo', IMSDK.uuid(), userIDList)
  .then((data) => {
    // data: Queried user info list
  })
  .catch(({ errCode, errMsg }) => {
    // Call failed
  });
```

</TabItem>
<TabItem value="React-Native">

### Function Prototype

```ts showLineNumbers
OpenIMSDK.getUsersInfo(userIDList: string[], operationID?: string): Promise<PublicUserItem[]>
```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description                                                    |
| ----------- | -------- | -------- | ------------------------------------------------------- |
| userIDList  | string[] | Yes      | User userID list                                        |
| operationID | string   | No       | Operation ID, used to pinpoint issues, keep unique, prefer time+random |

### Return Result

| Parameter Name  | Parameter Type                                                          | Description                 |
| --------------- | ----------------------------------------------------------------- | -------------------- |
| Promise.then()  | Promise<[PublicUserItem](/class/user/publicInfo.md)[]\> | Queried user info list |
| Promise.catch() | Promise<[OpenIMApiError](/class/response.md)\>           | Failure callback         |

### Code Example

```js showLineNumbers
import OpenIMSDK from "@openim/rn-client-sdk";

const userIDList = ['userID1', 'userID2'];
OpenIMSDK.getUsersInfo(userIDList)
  .then((data) => {
    // data: Queried user info list
  })
  .catch((error) => {
    // Call failed
  });
```

</TabItem>

<TabItem value="Unity">

### Function Prototype

```C# showLineNumbers

public static void GetUsersInfo(OnBase<List<PublicUserInfo>> cb, string[] userIds, string groupId)

```

### Input Parameters

| Parameter Name | Parameter Type                                                                                     | Required | Description         |
| -------- | -------------------------------------------------------------------------------------------- | -------- | ------------ |
| cb       | [OnBase](/callback/onBase.md)<List<[PublicUserInfo](/class/user/publicInfo.md)>>  | Yes      | Callback |
| userIds  |  string[]                                                                              | Yes      | User ID collection |
| groupId  | String                                                                        | No       | Group ID  |

### Code Example

```C# showLineNumbers

IMSDK.GetUsersInfo((list,errCode,errMsg)=>{
    if(list!= null){

    }else{

    }
}, userIds, groupId);

```

</TabItem>

</Tabs>
