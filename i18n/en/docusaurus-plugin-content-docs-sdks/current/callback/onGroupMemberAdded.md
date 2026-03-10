---
sidebar_position: 3
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# onGroupMemberAdded

## Description

:::info

When group members increase (such as a user being invited to the group), other group members receive this callback.

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
  Function(GroupMembersInfo info)? onGroupMemberAdded;
```

### Return Results

| Name | Type | Description |
| ---- | ---- | -------- |
| info | [GroupMembersInfo](/class/group/groupMemberInfo.md) | Group member info |

</TabItem>

<TabItem value="iOS">

### Return Prototype

```swift showLineNumbers

- (void)onGroupMemberAdded:(OIMGroupMemberInfo *)memberInfo;

```

### Return Results

| Name       | Type | Description |
| ---------- | ---- | -------- |
| memberInfo | [OIMGroupMemberInfo](/class/group/groupMemberInfo.md) | Group member info |

</TabItem>

<TabItem value="Android">

### Return Prototype

```java showLineNumbers
  void onGroupMemberAdded(GroupMembersInfo info);
```

### Return Results

| Name | Type | Description |
| ---- | ---- | -------- |
| info | [GroupMembersInfo](/class/group/groupMemberInfo.md) | Group member info |

</TabItem>

<TabItem value="Web">

### Return Prototype

```ts showLineNumbers

onGroupMemberAdded(data: WSEvent<GroupMemberItem>): void;

```

### Return Results

| Name | Type | Description |
| ---- | ---- | ---------- |
| data | [WSEvent](/class/response.md)<[GroupMemberItem](/class/group/groupMemberInfo.md)> | Group member info |

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

IMSDK.on(CbEvents.OnGroupMemberAdded, ({ data }) => {
  // data: group member info
});
```

</TabItem>

<TabItem value="uni-app">

### Return Prototype

```ts showLineNumbers

onGroupMemberAdded(data: WSEvent<GroupMemberItem>): void;

```

### Return Results

| Name | Type | Description |
| ---- | ---- | ---------- |
| data | [WSEvent](/class/response.md)<[GroupMemberItem](/class/group/groupMemberInfo.md)> | Group member info |

### Call Example

```js showLineNumbers
import IMSDK from 'openim-uniapp-polyfill';

IMSDK.subscribe(IMSDK.IMEvents.OnGroupMemberAdded, ({ data }) => {
  // data: group member info
});
```

</TabItem>

<TabItem value="Unity">

### Return Prototype

```C# showLineNumbers
void OnGroupMemberAdded(GroupMember info);
```

### Return Results

| Name | Type | Description |
| ---- | ---- | -------- |
| info | [GroupMember](/class/group/groupMemberInfo.md) | Group member info |

</TabItem>
</Tabs>
