---
sidebar_position: 1
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# Config

## Description

:::info

Initialization SDK configuration information.

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

### InitConfig
| Field Name          | Field Type                          | Require | Description                                                          |
| ------------------- | ----------------------------------- | -------- | -------------------------------------------------------------------- |
| platformID          | [int](/enum/platform.md) | Yes      | Platform ID: iOS 1, Android 2, Windows 3, OSX 4, WEB 5, MiniProgram 6, Linux 7 |
| apiAddr             | String                              | Yes      | IM api address, usually `http://xxx:10002` or `https://xxx/api`             |
| wsAddr              | String                              | Yes      | IM ws address, usually `ws://xxx:10001` or `wss://xxx/msg_gateway`          |
| dataDir             | String                              | Yes      | IM client db save directory                                          |
| logLevel            | int                                 | No       | SDK log print level                                                  |
| isLogStandardOutput | BOOL                                | No       | Whether to print logs to the console                                  |
| logFilePath         | NSString                            | No       | Locally save log file path                                            |

</TabItem>

<TabItem value="iOS">

### OIMInitConfig

| Field Name          | Field Type                                  | Require | Description                                                          |
| ------------------- | ------------------------------------------- | -------- | -------------------------------------------------------------------- |
| platformID          | [OIMPlatform](/enum/platform.md) | Yes      | Platform ID: iOS 1, Android 2, Windows 3, OSX 4, WEB 5, MiniProgram 6, Linux 7 |
| apiAddr             | NSString                                    | Yes      | IM api address, usually `http://xxx:10002` or `https://xxx/api`             |
| wsAddr              | NSString                                    | Yes      | IM ws address, usually `ws://xxx:10001` or `wss://xxx/msg_gateway`          |
| dataDir             | NSString                                    | No       | IM client db save directory                                          |
| logLevel            | NSInteger                                   | No       | SDK log print level                                                  |
| isLogStandardOutput | BOOL                                        | No       | Whether to print logs to the console                                  |
| logFilePath         | NSString                                    | No       | Locally save log file path                                            |

</TabItem>

<TabItem value="Android">

### InitConfig

| Field Name          | Field Type | Require | Description                                                          |
| ------------------- | -------- | -------- | -------------------------------------------------------------------- |
| apiAddr             | string   | Yes      | IM api address, usually `http://xxx:10002` or `https://xxx/api`             |
| wsAddr              | string   | Yes      | IM ws address, usually `ws://xxx:10001` or `wss://xxx/msg_gateway`          |
| dataDir             | string   | Yes      | IM client db save directory                                          |
| platformID          | number   | No       | Platform ID: iOS 1, Android 2, Windows 3, OSX 4, WEB 5, MiniProgram 6, Linux 7 |
| logLevel            | number   | No       | SDK log print level                                                  |
| isLogStandardOutput | boolean  | No       | Whether to print logs to the console                                  |
| logFilePath         | string   | No       | Locally save log file path                                            |

</TabItem>

<TabItem value="uni-app">

### InitConfig

| Field Name          | Field Type                               | Require | Description                                                          |
| ------------------- | ---------------------------------------- | -------- | -------------------------------------------------------------------- |
| platformID          | [Platform](/enum/platform.md) | Yes      | Platform ID: iOS 1, Android 2, Windows 3, OSX 4, WEB 5, MiniProgram 6, Linux 7 |
| apiAddr             | string                                   | Yes      | IM api address, usually `http://xxx:10002` or `https://xxx/api`             |
| wsAddr              | string                                   | Yes      | IM ws address, usually `ws://xxx:10001` or `wss://xxx/msg_gateway`          |
| dataDir             | string                                   | Yes      | IM client db save directory                                          |
| logLevel            | [LogLevel](/enum/logLevel.md) | No       | SDK log print level                                                  |
| isLogStandardOutput | boolean                                  | No       | Whether to print logs to the console                                  |
| logFilePath         | string                                   | No       | Locally save log file path                                            |

</TabItem>

<TabItem value="Web">

### InitConfig

| Field Name          | Field Type                               | Require | Description                                                          |
| ------------------- | ---------------------------------------- | -------- | -------------------------------------------------------------------- |
| platformID          | [Platform](/enum/platform.md) | Yes      | Platform ID: iOS 1, Android 2, Windows 3, OSX 4, WEB/MiniProgram 5, Linux 7 |
| apiAddr             | string                                   | Yes      | IM api address, usually `http://xxx:10002` or `https://xxx/api`             |
| wsAddr              | string                                   | Yes      | IM ws address, usually `ws://xxx:10001` or `wss://xxx/msg_gateway`          |
| dataDir             | string                                   | Yes      | DB file save directory, absolute path                                |
| logFilePath         | string                                   | No       | Log file save directory, absolute path, do not save if not passed    |
| logLevel            | [LogLevel](/enum/logLevel.md) | No       | SDK log print level                                                  |
| isLogStandardOutput | boolean                                  | No       | Whether to print logs to the console                                  |

### InitAndLoginConfig

| Field Name          | Field Type                               | Require | Description                                                          |
| ------------------- | ---------------------------------------- | -------- | -------------------------------------------------------------------- |
| platformID          | [Platform](/enum/platform.md) | Yes      | Platform ID: iOS 1, Android 2, Windows 3, OSX 4, WEB/MiniProgram 5, Linux 7 |
| apiAddr             | string                                   | Yes      | IM api address, usually `http://xxx:10002` or `https://xxx/api`             |
| wsAddr              | string                                   | Yes      | IM ws address, usually `ws://xxx:10001` or `wss://xxx/msg_gateway`          |
| userID              | string                                   | Yes      | IM User ID                                                       |
| token               | string                                   | Yes      | OpenIM user token, the business backend verifies the user account and password, and calls the IM server API to obtain |
| logLevel            | [LogLevel](/enum/logLevel.md) | No       | SDK log print level                                                  |
| isLogStandardOutput | boolean                                  | No       | Whether to print logs to the console                                  |
| tryParse            | boolean                                  | No       | Whether to automatically parse the return value, default is true     |

</TabItem>

<TabItem value="React-Native">

### InitConfig

| Field Name          | Field Type                               | Require | Description                                                          |
| ------------------- | ---------------------------------------- | -------- | -------------------------------------------------------------------- |
| platformID          | [Platform](/enum/platform.md) | Yes      | Platform ID: iOS 1, Android 2, Windows 3, OSX 4, WEB 5, MiniProgram 6, Linux 7 |
| apiAddr             | string                                   | Yes      | IM api address, usually `http://xxx:10002` or `https://xxx/api`             |
| wsAddr              | string                                   | Yes      | IM ws address, usually `ws://xxx:10001` or `wss://xxx/msg_gateway`          |
| dataDir             | string                                   | Yes      | IM client db save directory                                          |
| logLevel            | [LogLevel](/enum/logLevel.md) | No       | SDK log print level                                                  |
| isLogStandardOutput | boolean                                  | No       | Whether to print logs to the console                                  |
| logFilePath         | string                                   | No       | Locally save log file path                                            |

</TabItem>

<TabItem value="Unity">

### IMConfig

| Field Name           | Field Type | Require | Description                                                          |
| -------------------- | -------- | -------- | -------------------------------------------------------------------- |
| ApiAddr              | string   | Yes      | IM api address, usually `http://xxx:10002` or `https://xxx/api`             |
| WsAddr               | string   | Yes      | IM ws address, usually `ws://xxx:10001` or `wss://xxx/msg_gateway`          |
| DataDir              | string   | Yes      | IM client db save directory                                          |
| PlatformID           | int      | No       | Platform ID: iOS 1, Android 2, Windows 3, OSX 4, WEB 5, MiniProgram 6, Linux 7 |
| LogLevel             | uint     | No       | SDK log print level                                                  |
| IsLogStandardOutput  | bool     | No       | Whether to print logs to the console                                  |
| LogFilePath          | string   | No       | Locally save log file path                                            |
| IsExternalExtensions | bool     | No       | Extension field                                                        |

</TabItem>
</Tabs>
