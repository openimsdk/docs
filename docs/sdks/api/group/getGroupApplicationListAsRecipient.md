---
sidebar_position: 9
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# getGroupApplicationListAsRecipient

## 功能介绍

:::info 说明

作为群主或管理员，获取自己管理的群收到的进群申请

:::

:::caution 注意
一次性获取所有的进群申请。
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
  Future<List<GroupApplicationInfo>> getGroupApplicationListAsRecipient(
          {String? operationID})
```

### 输入参数

无

### 返回结果

| 参数名称 | 参数类型                                                                     | 描述     |
| -------- | ---------------------------------------------------------------------------- | -------- |
| ~        | List<[GroupApplicationInfo](/class/group/groupApplicationInfo.md)> | 成功返回 |

### 代码示例

```dart showLineNumbers
    List<GroupApplicationInfo> list = await OpenIM.iMManager.groupManager.getGroupApplicationListAsRecipient();
    // todo
```

</TabItem>

<TabItem value="iOS">

### 函数原型

```swift showLineNumbers

- (void)getGroupApplicationListAsRecipientWithOnSuccess:(nullable OIMGroupsApplicationCallback)onSuccess
                                              onFailure:(nullable OIMFailureCallback)onFailure;

```

### 输入参数

无

### 返回结果

| 参数名称  | 参数类型                                                                               | 描述     |
| --------- | -------------------------------------------------------------------------------------- | -------- |
| onSuccess | NSArray< [OIMGroupApplicationInfo](/class/group/groupApplicationInfo.md) \*> | 成功返回 |
| onFailure | OIMFailureCallback                                   | 失败返回 |

### 代码示例

```swift showLineNumbers

[OIMManager.manager getGroupApplicationListAsRecipientWithOnSuccess:^(NSArray<OIMGroupApplicationInfo *> * _Nullable groupsInfo) {

} onFailure:^(NSInteger code, NSString * _Nullable msg) {

}];

```

</TabItem>

<TabItem value="Android">

### 函数原型

```java showLineNumbers

    public void getRecvGroupApplicationList(OnBase<List<GroupApplicationInfo>> callBack)

```

### 输入参数

| 参数名称 | 参数类型                                                                                                              | 是否必填 | 描述     |
| -------- | --------------------------------------------------------------------------------------------------------------------- | -------- | -------- |
| callBack | [OnBase](/callback/onBase.md)<List<[GroupApplicationInfo](/class/group/groupApplicationInfo.md)>> | 是       | 回调接口 |

### 返回结果

### 代码示例

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

### 函数原型

```ts showLineNumbers
IMSDK.getGroupApplicationListAsRecipient(params: {
  offset: number;
  count: number;
}): Promise<WsResponse<GroupApplicationItem[]>>
```

### 输入参数

| 参数名称 | 参数类型 | 是否必填 | 描述                             |
| -------- | -------- | -------- | -------------------------------- |
| offset   | number   | 是       | 分页拉取起始下标   |
| count    | number   | 是       | 一页拉取的数量 |

### 返回结果

| 参数名称        | 参数类型                                                                                       | 描述               |
| --------------- | ---------------------------------------------------------------------------------------------- | ------------------ |
| Promise.then()  | Promise<WsResponse<[GroupApplicationItem](/class/group/groupApplicationInfo.md)[]>\> | 发出的加群请求列表 |
| Promise.catch() | Promise<[WsResponse](/class/response.md)\>                                           | 调用失败回调       |

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

IMSDK.getGroupApplicationListAsRecipient({
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
IMSDK.asyncApi('getGroupApplicationListAsRecipient', operationID: string): Promise<GroupApplicationItem[]>
```

### 输入参数

| 参数名称    | 参数类型 | 是否必填 | 描述                                                    |
| ----------- | -------- | -------- | ------------------------------------------------------- |
| operationID | string   | 是       | 操作 ID，用于定位问题，保持唯一，建议用当前时间和随机数 |

### 返回结果

> 通过`openim-uniapp-polyfill`包将函数 Promise 化，调用时需要使用`then`和`catch`判断并处理成功和失败回调。

| 参数名称        | 参数类型                                                                           | 描述               |
| --------------- | ---------------------------------------------------------------------------------- | ------------------ |
| Promise.then()  | Promise<[GroupApplicationItem](/class/group/groupApplicationInfo.md)[]\> | 发出的加群请求列表 |
| Promise.catch() | Promise<[CatchResponse](/class/response.md)\>                            | 调用失败回调       |

### 代码示例

```js showLineNumbers
import IMSDK from 'openim-uniapp-polyfill';

IMSDK.asyncApi('getGroupApplicationListAsRecipient', IMSDK.uuid())
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
OpenIMSDK.getGroupApplicationListAsRecipient(req: {
  groupIDs: string[];
  handleResults: number[]
  offset: number;
  count: number;
}, operationID?: string): Promise<GroupApplicationItem[]>
```

### 输入参数

| 参数名称    | 参数类型 | 是否必填 | 描述                                                    |
| ----------- | -------- | -------- | ------------------------------------------------------- |
| groupIDs    | string[] | 是       | 群组 ID 列表                                            |
| handleResults | number[] | 是       | -                                            |
| offset      | number   | 是       | 分页拉取起始下标                                        |
| count       | number   | 是       | 一页拉取的数量                                          |
| operationID | string   | 否       | 操作 ID，用于定位问题，保持唯一，建议用当前时间和随机数 |

### 返回结果

| 参数名称        | 参数类型                                                                           | 描述               |
| --------------- | ---------------------------------------------------------------------------------- | ------------------ |
| Promise.then()  | Promise<[GroupApplicationItem](/class/group/groupApplicationInfo.md)[]\> | 发出的加群请求列表 |
| Promise.catch() | Promise<[OpenIMApiError](/class/response.md)\>                            | 调用失败回调       |

### 代码示例

```js showLineNumbers
import OpenIMSDK from "@openim/rn-client-sdk";

OpenIMSDK.getGroupApplicationListAsRecipient({
  offset: 0,
  count: 10,
  handleResults: [],
  groupIDs: ['groupID1', 'groupID2'],
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

public static void GetGroupApplicationListAsRecipient(OnBase<List<GroupApplicationInfo>> cb)

```

### 输入参数

| 参数名称 | 参数类型                                                                                                              | 是否必填 | 描述     |
| -------- | --------------------------------------------------------------------------------------------------------------------- | -------- | -------- |
| cb | [OnBase](/callback/onBase.md)<List<[GroupApplicationInfo](/class/group/groupApplicationInfo.md)>> | 是     | 回调接口 |

### 返回结果

### 代码示例

```C# showLineNumbers

IMSDK.GetGroupApplicationListAsRecipient((list,errCode,errMsg)=>{

});

```

</TabItem>
</Tabs>
