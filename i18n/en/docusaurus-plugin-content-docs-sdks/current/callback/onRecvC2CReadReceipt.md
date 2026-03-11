---
sidebar_position: 3
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# onRecvC2CReadReceipt

## Description

:::info

After a sent C2C message is marked as read by the recipient, the message sender receives this callback.

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
  Function(List<ReadReceiptInfo> list)? onRecvC2CMessageReadReceipt;
```

### Return Results

| Name | Type | Description |
| ---- | ---- | -------- |
| list | List<[ReadReceiptInfo](/class/message/receiptInfo.md)> | Read receipt list |

</TabItem>

<TabItem value="iOS">

### Return Prototype

```swift showLineNumbers

- (void)onRecvC2CReadReceipt:(NSArray<OIMReceiptInfo *> *)receiptList;

```

### Return Results

| Name        | Type | Description |
| ----------- | ---- | -------- |
| receiptList | NSArray< [OIMReceiptInfo](/class/message/receiptInfo.md) \* > | Read receipt list |

</TabItem>

<TabItem value="Android">

```java showLineNumbers
  void onRecvC2CMessageReadReceipt(List<ReadReceiptInfo> list)
```

### Return Results

| Name | Type | Description |
| ---- | ---- | -------- |
| list | List<[ReadReceiptInfo](/class/message/receiptInfo.md)> | Receipt list |

</TabItem>

<TabItem value="Web">

### Return Prototype

```ts showLineNumbers

onRecvC2CReadReceipt(data: WSEvent<ReceiptInfo[]>): void;

```

### Return Results

| Name | Type | Description |
| ---- | ---- | ------------ |
| data | [WSEvent](/class/response.md)<[ReceiptInfo](/class/message/receiptInfo.md)[]> | Read receipt list |

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

IMSDK.on(CbEvents.OnRecvC2CReadReceipt, ({ data }) => {
  // data: read receipt list
});
```

</TabItem>

<TabItem value="uni-app">

### Return Prototype

```ts showLineNumbers

onRecvC2CReadReceipt(data: WSEvent<ReceiptInfo[]>): void;

```

### Return Results

| Name | Type | Description |
| ---- | ---- | ------------ |
| data | [WSEvent](/class/response.md)<[ReceiptInfo](/class/message/receiptInfo.md)[]> | Read receipt list |

### Call Example

```js showLineNumbers
import IMSDK from 'openim-uniapp-polyfill';

IMSDK.subscribe(IMSDK.IMEvents.OnRecvC2CReadReceipt, ({ data }) => {
  // data: read receipt list
});
```

</TabItem>

<TabItem value="Unity">

### Return Prototype

```C# showLineNumbers
void OnRecvC2CReadReceipt(List<MessageReceipt> list);
```

### Return Results

| Name | Type | Description |
| ---- | ---- | -------- |
| list | List<[MessageReceipt](/class/message/receiptInfo.md)> | Read receipt list |

</TabItem>
</Tabs>
