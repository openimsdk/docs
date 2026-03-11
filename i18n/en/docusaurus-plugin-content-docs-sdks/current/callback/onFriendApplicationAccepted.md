---
sidebar_position: 3
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# onFriendApplicationAccepted

## Description

:::info

When a friend application is accepted, both the applicant and the recipient receive this callback, successfully establishing a friendship.

:::

<Tabs
groupId="sdks-language"
values={[
{ label: 'iOS', value: 'iOS', },
{ label: 'Android', value: 'Android', },
{ label: 'Flutter', value: 'Flutter', },
{ label: 'uni-app', value: 'uni-app', },
{ label: 'Browser/Electron/MiniProgram', value: 'Web', },
{ label: 'Unity', value: 'Unity', },
]
}>

<TabItem value="Flutter">

### Return Prototype

```dart showLineNumbers
  Function(FriendApplicationInfo application)? onFriendApplicationAccepted;
```

### Return Results

| Name        | Type                                                                  | Description           |
| ----------- | --------------------------------------------------------------------- | -------------- |
| application | [FriendApplicationInfo](/class/relation/friendApplication.md) | Friend application |

</TabItem>

<TabItem value="iOS">

### Return Prototype

```swift showLineNumbers

- (void)onFriendApplicationAccepted:(OIMFriendApplication *)application;

```

### Return Results

| Name        | Type                                                                 | Description         |
| ----------- | -------------------------------------------------------------------- | ------------ |
| application | [OIMFriendApplication](/class/relation/friendApplication.md) | Friend application |

</TabItem>

<TabItem value="Android">

### Return Prototype

```swift showLineNumbers

-  void onFriendApplicationAccepted(FriendApplicationInfo u)

```

### Return Results

| Name        | Type                                                                  | Description         |
| ----------- | --------------------------------------------------------------------- | ------------ |
| application | [FriendApplicationInfo](/class/relation/friendApplication.md) | Friend application |

</TabItem>

<TabItem value="Web">

### Return Prototype

```ts showLineNumbers

onFriendApplicationAccepted(data: WSEvent<FriendApplicationItem>): void;

```

### Return Results

| Name | Type                                                                                                           | Description     |
| ---- | -------------------------------------------------------------------------------------------------------------- | -------- |
| data | [WSEvent](/class/response.md)<[FriendApplicationItem](/class/relation/friendApplication.md)> | Friend application |

### Call Example

```js showLineNumbers
import { getSDK } from '@openim/wasm-client-sdk';
const IMSDK = getSDK();

// use in electron with ffi
// import { getWithRenderProcess } from '@openim/electron-client-sdk/lib/render';
// const { instance: IMSDK } = getWithRenderProcess();

// use in mini program
// import { getSDK } from '@openim/client-sdk';
// const IMSDK = getSDK();

IMSDK.on(CbEvents.OnFriendApplicationAccepted, ({ data }) => {
  // data: friend application
});
```

</TabItem>

<TabItem value="uni-app">

### Return Prototype

```ts showLineNumbers

onFriendApplicationAccepted(data: WSEvent<FriendApplicationItem>): void;

```

### Return Results

| Name | Type                                                                                                           | Description     |
| ---- | -------------------------------------------------------------------------------------------------------------- | -------- |
| data | [WSEvent](/class/response.md)<[FriendApplicationItem](/class/relation/friendApplication.md)> | Friend application |

### Call Example

```js showLineNumbers
import IMSDK from 'openim-uniapp-polyfill';

IMSDK.subscribe(IMSDK.IMEvents.OnFriendApplicationAccepted, ({ data }) => {
  // data: friend application
});
```

</TabItem>

<TabItem value="Unity">

### Return Prototype

```C# showLineNumbers
void OnFriendApplicationAccepted(FriendApplicationInfo application);
```

### Return Results

| Name        | Type                                                                  | Description           |
| ----------- | --------------------------------------------------------------------- | -------------- |
| application | [FriendApplicationInfo](/class/relation/friendApplication.md) | Friend application |

</TabItem>
</Tabs>
