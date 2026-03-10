---
sidebar_position: 4
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# getFriendApplicationListAsApplicant

## 功能介绍

:::info 说明

获取好友申请列表（作为发起者）。

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

### 函数原型

```dart showLineNumbers
  Future<List<FriendApplicationInfo>> getFriendApplicationListAsApplicant(
          {String? operationID})
```

### 输入参数

无

### 返回结果

| 参数名称 | 参数类型                                                                    | 描述     |
| -------- | --------------------------------------------------------------------------- | -------- |
| ~        | List<[FriendApplicationInfo](/class/relation/friendApplication.md)> | 成功返回 |

### 代码示例

```dart showLineNumbers
    List<FriendApplicationInfo> list = await OpenIM.iMManager.friendshipManager.getFriendApplicationListAsApplicant();
    // todo
```

</TabItem>

<TabItem value="iOS">

### 函数原型

```swift showLineNumbers

- (void)getSendFriendApplicationListWithOnSuccess:(nullable OIMFriendApplicationsCallback)onSuccess
                                        onFailure:(nullable OIMFailureCallback)onFailure;

```

### 输入参数

无

### 返回结果

| 参数名称  | 参数类型                                                                           | 描述     |
| --------- | ---------------------------------------------------------------------------------- | -------- |
| onSuccess | NSArray< [OIMFriendApplication](/class/relation/friendApplication.md) \* > | 成功返回 |
| onFailure | OIMFailureCallback                               | 失败返回 |

### 代码示例

```swift showLineNumbers

[OIMManager.manager getSendFriendApplicationListWithOnSuccess:^(NSArray<OIMFriendApplication *> * _Nullable friendApplications) {
} onFailure:^(NSInteger code, NSString * _Nullable msg) {
}];

```

</TabItem>

<TabItem value="Android">

### 函数原型

```java showLineNumbers

public void getSendFriendApplicationList(OnBase<List<FriendApplicationInfo>> callBack)

```

### 输入参数

| 参数名称 | 参数类型                                                                                                             | 是否必填 | 描述     |
| -------- | -------------------------------------------------------------------------------------------------------------------- | -------- | -------- |
| callBack | [OnBase](/callback/onBase.md)<List<[FriendApplicationInfo](/class/relation/friendApplication.md)>> | 是       | 回调接口 |

### 返回结果

### 代码示例

```java showLineNumbers

OpenIMClient.getInstance().friendshipManager.getSendFriendApplicationList(new OnBase<List<FriendApplicationInfo>>{...})

```

</TabItem>

<TabItem value="Web">

### 函数原型

``` ts showLineNumbers
IMSDK.getFriendApplicationListAsApplicant(params: {
  offset: number;
  count: number;
},operationID?: string): Promise<WsResponse<FriendApplication[]>>
```

### 输入参数

| 参数名称 | 参数类型 | 是否必填 | 描述                       |
| -------- | -------- | -------- | -------------------------- |
| offset   | number   | 是       | 分页拉取起始下标   |
| count    | number   | 是       | 一页拉取的数量 |

### 返回结果

| 参数名称        | 参数类型                                                                                      | 描述               |
| --------------- | --------------------------------------------------------------------------------------------- | ------------------ |
| Promise.then()  | Promise<WsResponse<[FriendApplicationItem](/class/relation/friendApplication.md)[]>\> | 发出的好友请求列表 |
| Promise.catch() | Promise<[WsResponse](/class/response.md)\>                                          | 调用失败回调       |

### 代码示例

```js showLineNumbers
import { getSDK } from '@openim/wasm-client-sdk';
const IMSDK = getSDK();

// use in electron with ffi
// import { getWithRenderProcess } from '@openim/electron-client-sdk/lib/render';
// const { instance: IMSDK } = getWithRenderProcess();

// use in mini program
// import { getSDK } from '@openim/client-sdk';
// const IMSDK = getSDK();

IMSDK.getFriendApplicationListAsApplicant({
  offset: 0,
  count: 10,
})
  .then(({ data }) => {
    // 调用成功
  })
  .catch(({ errCode, errMsg }) => {
    // 调用失败
  });

```

</TabItem>

<TabItem value="uni-app">

### 函数原型

```ts showLineNumbers
IMSDK.asyncApi('getFriendApplicationListAsApplicant', operationID: string): Promise<FriendApplication[]>
```

### 输入参数

| 参数名称    | 参数类型 | 是否必填 | 描述                                                    |
| ----------- | -------- | -------- | ------------------------------------------------------- |
| operationID | string   | 是       | 操作 ID，用于定位问题，保持唯一，建议用当前时间和随机数 |

### 返回结果

> 通过`openim-uniapp-polyfill`包将函数 Promise 化，调用时需要使用`then`和`catch`判断并处理成功和失败回调。

| 参数名称        | 参数类型                                                                          | 描述               |
| --------------- | --------------------------------------------------------------------------------- | ------------------ |
| Promise.then()  | Promise<[FriendApplicationItem](/class/relation/friendApplication.md)[]\> | 发出的好友请求列表 |
| Promise.catch() | Promise<[CatchResponse](/class/response.md)\>                           | 调用失败回调       |

### 代码示例

```js showLineNumbers
import IMSDK from 'openim-uniapp-polyfill';

IMSDK.asyncApi('getFriendApplicationListAsApplicant', IMSDK.uuid())
  .then((data) => {
    // 调用成功
  })
  .catch(({ errCode, errMsg }) => {
    // 调用失败
  });
```

</TabItem>
<TabItem value="React-Native">

### 函数原型

```ts showLineNumbers
OpenIMSDK.getFriendApplicationListAsApplicant(req: {
  offset: number;
  count: number;
}, operationID?: string): Promise<FriendApplication[]>
```

### 输入参数

| 参数名称    | 参数类型 | 是否必填 | 描述                                                    |
| ----------- | -------- | -------- | ------------------------------------------------------- |
| offset      | number   | 是       | 分页拉取起始下标                                        |
| count       | number   | 是       | 一页拉取的数量                                          |
| operationID | string   | 否       | 操作 ID，用于定位问题，保持唯一，建议用当前时间和随机数 |

### 返回结果

| 参数名称        | 参数类型                                                                          | 描述               |
| --------------- | --------------------------------------------------------------------------------- | ------------------ |
| Promise.then()  | Promise<[FriendApplicationItem](/class/relation/friendApplication.md)[]\> | 发出的好友请求列表 |
| Promise.catch() | Promise<[OpenIMApiError](/class/response.md)\>                           | 调用失败回调       |

### 代码示例

```js showLineNumbers
import OpenIMSDK from "@openim/rn-client-sdk";

OpenIMSDK.getFriendApplicationListAsApplicant({
  offset: 0,
  count: 10,
})
  .then((data) => {
    // 调用成功
  })
  .catch((error) => {
    // 调用失败
  });
```

</TabItem>

<TabItem value="Unity">

### 函数原型

```C# showLineNumbers

public static void GetFriendApplicationListAsApplicant(OnBase<List<FriendApplicationInfo>> cb)

```

### 输入参数

| 参数名称 | 参数类型                                                                                                             | 是否必填 | 描述     |
| -------- | -------------------------------------------------------------------------------------------------------------------- | -------- | -------- |
| cb | [OnBase](/callback/onBase.md)<List<[FriendApplicationInfo](/class/relation/friendApplication.md)>> | 是       | 回调|

### 返回结果

### 代码示例

```C# showLineNumbers

IMSDK.GetFriendApplicationListAsApplicant((list,errCode,errMsg)=>{

});

```

</TabItem>


</Tabs>
