---
sidebar_position: 0
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# setBatchMsgListener

## Description

:::info

Set a listener for batch message events. It is recommended to use this to push new messages in batches.

:::

:::caution Note

(1) Call immediately after initSDK;  
(2) Can only be called once;  
(3) After setting, the `onRecvNewMessage` and `onRecvOfflineNewMessage` callbacks in `advancedMsgListener` will no longer be triggered.

:::

<Tabs
groupId="sdks-language"
values={[
{ label: 'uni-app', value: 'uni-app', },
{ label: 'Browser/Electron/MiniProgram', value: 'Web', },
{ label: 'React-Native', value: 'React-Native', },
]
}>

<TabItem value="Flutter">

### Function Prototype

</TabItem>

<TabItem value="iOS">

### Function Prototype

</TabItem>

<TabItem value="Android">

### Function Prototype

</TabItem>

<TabItem value="Web">

:::caution Note

Automatically set after successful login. Can be used for listening directly on the client. [See details of message events here](/listener/batchMsgListener.md)

:::

</TabItem>

<TabItem value="uni-app">

:::caution Note

Automatically set after successful initialization. The callback will be passed to the client via `globalEvent`. [See details of message events here](/listener/batchMsgListener.md)

:::

</TabItem>

<TabItem value="Unity">

:::caution Note

Automatically set after successful login. Can be used for listening directly on the client. [See details of message events here](/listener/batchMsgListener.md)

:::

</TabItem>

</Tabs>
