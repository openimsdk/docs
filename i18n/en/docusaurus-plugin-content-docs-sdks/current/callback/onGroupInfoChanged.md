---
sidebar_position: 3
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# onGroupInfoChanged

## Description

:::info

When group information (avatar, group name, etc., including changes to the group owner) changes, all group members receive this callback.

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
  Function(GroupInfo info)? onGroupInfoChanged;
```

### Return Results

| Name | Type | Description |
| ---- | ---- | -------- |
| info | [GroupInfo](/class/group/groupInfo.md) | Group chat info |

</TabItem>

<TabItem value="iOS">

### Return Prototype

```swift showLineNumbers

- (void)onGroupInfoChanged:(OIMGroupInfo *)groupInfo;

```

### Return Results

| Name      | Type | Description |
| --------- | ---- | -------- |
| groupInfo | [OIMGroupInfo](/class/group/groupInfo.md) | Group chat info |

</TabItem>

<TabItem value="Android">

### Return Prototype

```java showLineNumbers
  void onGroupInfoChanged(GroupInfo info);
```

### Return Results

| Name | Type | Description |
| ---- | ---- | -------- |
| info | [GroupInfo](/class/group/groupInfo.md) | Group info |

</TabItem>

<TabItem value="Web">

### Return Prototype

```ts showLineNumbers

onGroupInfoChanged(data: WSEvent<GroupItem>): void;

```

### Return Results

| Name | Type | Description |
| ---- | ---- | -------- |
| data | [WSEvent](/class/response.md)<[GroupItem](/class/group/groupInfo.md)> | Group chat info |

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

IMSDK.on(CbEvents.OnGroupInfoChanged, ({ data }) => {
  // data: group info
});
```

</TabItem>

<TabItem value="uni-app">

### Return Prototype

```ts showLineNumbers

onGroupInfoChanged(data: WSEvent<GroupItem>): void;

```

### Return Results

| Name | Type | Description |
| ---- | ---- | -------- |
| data | [WSEvent](/class/response.md)<[GroupItem](/class/group/groupInfo.md)> | Group chat info |

### Call Example

```js showLineNumbers
import IMSDK from 'openim-uniapp-polyfill';

IMSDK.subscribe(IMSDK.IMEvents.OnGroupInfoChanged, ({ data }) => {
  // data: group info
});
```

</TabItem>

<TabItem value="Unity">

### Return Prototype

```C# showLineNumbers
void OnGroupInfoChanged(GroupInfo groupInfo);
```

### Return Results

| Name | Type | Description |
| ---- | ---- | -------- |
| groupInfo | [GroupInfo](/class/group/groupInfo.md) | Group chat info |

</TabItem>
</Tabs>
