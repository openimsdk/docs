---
sidebar_position: 6
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# unInitSDK

## Description

:::info

Un-initialize the SDK. After successful un-initialization, you can re-initialize and set new IM connection information.

:::

<Tabs
groupId="sdks-language"
values={[
{ label: 'iOS', value: 'iOS', },
{ label: 'Android', value: 'Android', },
{ label: 'Flutter', value: 'Flutter', },
{ label: 'uni-app', value: 'uni-app', },
{ label: 'React-Native', value: 'React-Native', },
{ label: 'Unity', value: 'Unity', },
]
}>

<TabItem value="Flutter">

### Function Prototype

```dart showLineNumbers
  Future<dynamic> unInitSDK()
```

### Input Parameters

None

### Return Result

None

### Code Example

```dart showLineNumbers
    await OpenIM.iMManager.unInitSDK();
    //todo
```

</TabItem>

<TabItem value="iOS">

### Function Prototype

```swift showLineNumbers

- (void)unInitSDK;

```

### Input Parameters

None

### Return Result

None

### Code Example

```swift showLineNumbers

[OIMManager.manager unInitSDK];

```

</TabItem>

<TabItem value="Android">

### Function Prototype

```java showLineNumbers
 public void unInit()
```
### Input Parameters

None

### Return Result

None

### Code Example

```java showLineNumbers
OpenIMClient.getInstance().unInit();
```

</TabItem>

<TabItem value="uni-app">

### Function Prototype

```ts showLineNumbers
IMSDK.asyncApi("unInitSDK",operationID: string): Promise<boolean>
```

### Input Parameters

| Parameter Name    | Parameter Type                                      | Required | Description                                                    |
| ----------- | --------------------------------------------- | -------- | ------------------------------------------------------- |
| operationID | string                                        | Yes      | Operation ID, used to pinpoint issues, keep unique, prefer time+random |

### Return Result

> Use the `openim-uniapp-polyfill` package to make the function Promise. When calling, you need to use `then` and `catch` to determine and handle success and failure callbacks.

| Parameter Name  | Parameter Type                                                | Description           |
| --------------- | ------------------------------------------------------- | -------------- |
| Promise.then()  | Promise<void\>                                       | Whether un-initialization was successful |
| Promise.catch() | Promise<[CatchResponse](/class/response.md)\> | Failure callback   |

### Code Example

```js showLineNumbers
// App.vue
import IMSDK from 'openim-uniapp-polyfill';

IMSDK.asyncApi('unInitSDK', IMSDK.uuid(), config)
  .then(() => {
    // Call successful
  })
  .catch(({ errCode, errMsg }) => {
    // Call failed
  });
```

</TabItem>
<TabItem value="React-Native">

### Function Prototype

```ts showLineNumbers
OpenIMSDK.unInitSDK(operationID?: string): Promise<boolean>
```

### Input Parameters

| Parameter Name    | Parameter Type                                      | Required | Description                                                    |
| ----------- | --------------------------------------------- | -------- | ------------------------------------------------------- |
| operationID | string                                        | No       | Operation ID, used to pinpoint issues, keep unique, prefer time+random |

### Return Result

| Parameter Name  | Parameter Type                                                | Description           |
| --------------- | ------------------------------------------------------- | -------------- |
| Promise.then()  | Promise<void\>                                       | Whether un-initialization was successful |
| Promise.catch() | Promise<[OpenIMApiError](/class/response.md)\> | Failure callback   |

### Code Example

```js showLineNumbers
import OpenIMSDK from "@openim/rn-client-sdk";

OpenIMSDK.unInitSDK()
  .then(() => {
    // Call successful
  })
  .catch((error) => {
    // Call failed
  });
```

</TabItem>

<TabItem value="Unity">

### Function Prototype

```C# showLineNumbers

public static void UnInitSDK()

```

### Code Example

```C# showLineNumbers

IMSDK.UnInitSDK();

```

</TabItem>
</Tabs>
