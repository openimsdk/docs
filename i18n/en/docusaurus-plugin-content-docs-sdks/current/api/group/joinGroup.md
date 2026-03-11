---
sidebar_position: 3
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# joinGroup

## Description

:::info

Apply to join a group.

:::

:::caution Note

Determine the result of the group join application based on the [group verification option](../../enum/groupVerification).

**Related Callbacks**:    
[onJoinedGroupAdded](../../callback/onJoinedGroupAdded)   
[onGroupMemberAdded](../../callback/onGroupMemberAdded)   
[onGroupApplicationAdded](/callback/onGroupApplicationAdded.md)

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
Future<dynamic> joinGroup({
    required String groupID,
    String? reason,
    String? operationID,
    int joinSource = 3,
  })
```

### Input Parameters

| Parameter Name | Parameter Type             | Required | Description                                                            |
| -------------- | -------------------------- | -------- | ---------------------------------------------------------------------- |
| groupID        | String                     | Yes      | Group ID                                                               |
| reason         | Sting                      | No       | Request information                                                    |
| joinSource     | [int](/enum/joinSource.md) | Yes      | Request source 2: By invitation 3: By search 4: By QR code             |

### Return Result

| Parameter Name | Parameter Type | Description                             |
| -------------- | -------------- | --------------------------------------- |
| ~              | ~              | Successful if no exception is thrown    |

### Code Example

```dart showLineNumbers
    await OpenIM.iMManager.groupManager.joinGroup(
      groupID: '',
      reason: '',
      joinSource: 2,
     );
    // todo
```

</TabItem>

<TabItem value="iOS">

### Function Prototype

```swift showLineNumbers

- (void)joinGroup:(NSString *)groupID
           reqMsg:(NSString *)reqMsg
       joinSource:(OIMJoinType)joinSource
        onSuccess:(OIMSuccessCallback)onSuccess
        onFailure:(OIMFailureCallback)onFailure;

```

### Input Parameters

| Parameter Name | Parameter Type                     | Required | Description         |
| -------------- | ---------------------------------- | -------- | ------------------- |
| groupID        | NSString                           | Yes      | Group ID            |
| reqMsg         | NSSting                            | No       | Request information |
| joinSource     | [OIMJoinType](/enum/joinSource.md) | Yes      | Join method         |

### Return Result

| Parameter Name | Parameter Type                                         | Description |
| -------------- | ------------------------------------------------------ | ----------- |
| onSuccess      | OIMSuccessCallback                                     | Success     |
| onFailure      | OIMFailureCallback                                     | Failure     |

### Code Example

```swift showLineNumbers

[OIMManager.manager joinGroup:@""
                       reqMsg:nil
                    onSuccess:^(NSString * _Nullable data) {
} onFailure:^(NSInteger code, NSString * _Nullable msg) {
}];

```

</TabItem>

<TabItem value="Android">

### Function Prototype

```java showLineNumbers
    public void joinGroup(OnBase<String> callBack, String gid, String reason, int joinSource)

```

### Input Parameters

| Parameter Name | Parameter Type                | Required | Description                                     |
| -------------- | ----------------------------- | -------- | ----------------------------------------------- |
| callBack       | [OnBase](/callback/onBase.md) | Yes      | Callback interface                              |
| gid            | String                        | Yes      | Group ID                                        |
| reason         | Sting                         | No       | Request information                             |
| joinSource     | int                           | Yes      | [JoinSource](/enum/joinSource.md) Request source |

### Return Result

### Code Example

```java showLineNumbers
OpenIMClient.getInstance().groupManager.joinGroup(new OnBase<String>() {
            @Override
            public void onError(int code, String error) {

            }

            @Override
            public void onSuccess(String data) {

            }
        }, gid,  reason,  joinSource);
```

</TabItem>

<TabItem value="Web">

### Function Prototype

```ts showLineNumbers
IMSDK.joinGroup({
  groupID: string;
  reqMsg: string;
  joinSource: GroupJoinSource;
}, operationID?: string): Promise<WsResponse>
```

### Input Parameters

| Parameter Name | Parameter Type                         | Required | Description                     |
| -------------- | -------------------------------------- | -------- | ------------------------------- |
| groupID        | string                                 | Yes      | Group ID                        |
| reqMsg         | string                                 | Yes      | Group join application information |
| joinSource     | [GroupJoinSource](/enum/joinSource.md) | Yes      | Join method                     |

### Return Result

| Parameter Name  | Parameter Type                             | Description      |
| --------------- | ------------------------------------------ | ---------------- |
| Promise.then()  | Promise<[WsResponse](/class/response.md)\> | Success callback |
| Promise.catch() | Promise<[WsResponse](/class/response.md)\> | Failure callback |

### Code Example

```js showLineNumbers
import { getSDK } from '@openim/wasm-client-sdk';
import { GroupJoinSource } from '@openim/wasm-client-sdk/lib/types/enum';
const IMSDK = getSDK();

IMSDK.joinGroup({
  groupID: '',
  reqMsg: '',
  joinSource: GroupJoinSource.Search,
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
IMSDK.asyncApi('joinGroup', operationID: string, {
  groupID: string;
  reqMsg: string;
  joinSource: GroupJoinSource;
}): Promise<void>
```

### Input Parameters

| Parameter Name | Parameter Type                         | Required | Description                                                            |
| -------------- | -------------------------------------- | -------- | ---------------------------------------------------------------------- |
| operationID    | string                                 | Yes      | Operation ID, used to pinpoint issues, keep unique, prefer time+random |
| groupID        | string                                 | Yes      | Group ID                                                               |
| reqMsg         | string                                 | Yes      | Group join application information                                     |
| joinSource     | [GroupJoinSource](/enum/joinSource.md) | Yes      | Join method                                                            |

### Return Result

> Use the `openim-uniapp-polyfill` package to make the function Promise. When calling, you need to use `then` and `catch` to determine and handle success and failure callbacks.

| Parameter Name  | Parameter Type                                | Description      |
| --------------- | --------------------------------------------- | ---------------- |
| Promise.then()  | Promise<void\>                                | Success callback |
| Promise.catch() | Promise<[CatchResponse](/class/response.md)\> | Failure callback |

### Code Example

```js showLineNumbers
import IMSDK, { GroupJoinSource } from 'openim-uniapp-polyfill';

IMSDK.asyncApi('joinGroup', IMSDK.uuid(), {
  groupID: '',
  reqMsg: '',
  joinSource: GroupJoinSource.Search,
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
OpenIMSDK.joinGroup({
  groupID: string,
  reqMsg: string,
  joinSource: GroupJoinSource.Search,
}, operationID?: string): Promise<void>
```

### Input Parameters

| Parameter Name | Parameter Type                         | Required | Description                                                            |
| -------------- | -------------------------------------- | -------- | ---------------------------------------------------------------------- |
| groupID        | string                                 | Yes      | Group ID                                                               |
| reqMsg         | string                                 | Yes      | Group join application information                                     |
| joinSource     | [GroupJoinSource](/enum/joinSource.md) | Yes      | Join method                                                            |
| operationID    | string                                 | No       | Operation ID, used to pinpoint issues, keep unique, prefer time+random |

### Return Result

| Parameter Name  | Parameter Type                                 | Description      |
| --------------- | ---------------------------------------------- | ---------------- |
| Promise.then()  | Promise<void\>                                 | Success callback |
| Promise.catch() | Promise<[OpenIMApiError](/class/response.md)\> | Failure callback |

### Code Example

```js showLineNumbers
import OpenIMSDK from "@openim/rn-client-sdk";

OpenIMSDK.joinGroup({
  groupID: '',
  reqMsg: '',
  joinSource: GroupJoinSource.Search,
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

public static void JoinGroup(OnBase<bool> cb, string groupId, string reqMsg, JoinSource joinSource, string ex)

```

### Input Parameters

| Parameter Name | Parameter Type                    | Required | Description         |
| -------------- | --------------------------------- | -------- | ------------------- |
| cb             | [OnBase](/callback/onBase.md)     | Yes      | Callback            |
| groupId        | string                            | Yes      | Group ID            |
| reqMsg         | string                            | No       | Request information |
| joinSource     | [JoinSource](/enum/joinSource.md) | Yes      | Request source      |
| ex             | string                            | Yes      | Extension field     |


### Return Result

### Code Example

```C# showLineNumbers

IMSDK.JoinGroup((suc,errCode,errMsg)=>{

},groupId,reqMsg,joinSource,ex);

```

</TabItem>

</Tabs>
