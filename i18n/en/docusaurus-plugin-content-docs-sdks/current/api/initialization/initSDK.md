---
sidebar_position: 1
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# initSDK

## Description

:::info

Initialization is the first step for the client to call the SDK. It can only be called once during the application's lifecycle. Repeated calls may lead to unknown issues.

:::

:::caution Note

(1) After successful initialization, set various listeners and log in. Ensure that other APIs are called after the synchronous login callback is completed. There are examples of specific flows in the [Quick Start](../../quickstart) for each platform;  
(2) The client's underlying logs will be stored in a specified directory for debugging, but it is **not recommended** to enable this in a production environment.

:::

<Tabs
groupId="sdks-language"
values={[
{ label: 'iOS', value: 'iOS', },
{ label: 'Android', value: 'Android', },
{ label: 'Flutter', value: 'Flutter', },
{ label: 'uni-app', value: 'uni-app', },
{ label: 'Electron', value: 'Web', },
{ label: 'React-Native', value: 'React-Native', },
{ label: 'Unity', value: 'Unity', },
]
}>

<TabItem value="Flutter">

### Function Prototype

```dart showLineNumbers

    // Method One
   Future<dynamic> initSDK({
      required int platform,
      required String apiAddr,
      required String wsAddr,
      required String dataDir,
      required OnConnectListener listener,
      int logLevel = 6,
      bool isLogStandardOutput = true,
      String? logFilePath,
      String? operationID,
    });

    // Method Two
    Future<bool?> init(
    InitConfig config,
    OnConnectListener listener, {
    String? operationID,
  });
```

### Input Parameters

| Parameter Name | Parameter Type                                         | Required | Description       |
| -------- | ------------------------------------------------ | -------- | ---------- |
| config   | [InitConfig](/class/init/config.md) | Yes      | Initialization parameter |

### Return Result

| Name | Type | Description               |
| ---- | -------- | ------------------ |
| ~    | dynamic  | Identifies whether initialization is successful |

### Code Example

```dart showLineNumbers
     OpenIM.iMManager.initSDK(
          platform: IMPlatform.android,
          apiAddr: '',
          wsAddr: '',
          dataDir: '',
          listener: OnConnectListener(
            onConnectFailed: (code, errorMsg) {},
            onConnecting: () {},
            onConnectSuccess: () {},
            onKickedOffline: () {},
            onUserTokenExpired: () {},
          ),
        );
```

</TabItem>

<TabItem value="iOS">

### Function Prototype

```swift showLineNumbers
- (BOOL)initSDKWithConfig:(OIMInitConfig *)config
             onConnecting:(nullable OIMVoidCallback)onConnecting
         onConnectFailure:(nullable OIMFailureCallback)onConnectFailure
         onConnectSuccess:(nullable OIMVoidCallback)onConnectSuccess
          onKickedOffline:(nullable OIMVoidCallback)onKickedOffline
       onUserTokenExpired:(nullable OIMVoidCallback)onUserTokenExpired;
```

### Input Parameters

| Parameter Name | Parameter Type                                         | Required | Description       |
| -------- | ------------------------------------------------ | -------- | ---------- |
| config   | [OIMInitConfig](/class/init/config.md) | Yes      | Initialization parameter |

### Return Result

| Name               | Type               | Description               |
| ------------------ | ------------------ | ------------------ |
| success            | BOOL               | Identifies whether initialization is successful |
| onConnecting       | OIMVoidCallback    | Connecting callback       |
| onConnectFailure   | OIMFailureCallback | Connection failure callback     |
| onConnectSuccess   | OIMFailureCallback | Connection success callback     |
| onKickedOffline    | OIMVoidCallback    | Kicked offline callback       |
| onUserTokenExpired | OIMVoidCallback    | token expired callback   |

### Code Example

```swift showLineNumbers
OIMInitConfig *config = [OIMInitConfig new];
config.apiAddr = @"";
config.wsAddr = @"";
config.objectStorage = @"";

BOOL success = [OIMManager.manager initSDKWithConfig:config
                                        onConnecting:^{

} onConnectFailure:^(NSInteger code, NSString * _Nullable msg) {
    // Connection failed callback function
    // code error code
    // error error message
} onConnectSuccess:^{
    // SDK has successfully connected to the IM server
} onKickedOffline:^{
    // SDK is connecting to the IM server
} onUserTokenExpired:^{
    // Ticket expired while online: at this point you need to generate a new token and call the login() function again to re-login.
}];

```

</TabItem>

<TabItem value="Android">

### Parameter Details

```java showLineNumbers
public boolean initSDK(Application application, InitConfig initConfig, @NotNull OnConnListener listener)
```

| Parameter Name       | Parameter Type                                              | Required | Description                  |
| -------------------- | ----------------------------------------------------------- | -------- | --------------------- |
| application          | Application                                                 | Yes      | Application           |
| initConfig           | [InitConfig](/class/init/config.md)                         | Yes      | Initialization parameter         |
| listener             | [OnConnectListener](/listener/connectListener.md) | Yes      | Listener                  |

### Code Example

```java showLineNumbers
InitConfig initConfig=new InitConfig(
            Constant.getImApiUrl(),//SDK API address
            Constant.getImWsUrl(),//SDK WebSocket address
            getStorageDir(),//SDK database storage directory
            );
     OpenIMClient.getInstance().initSDK(application,
          initConfig,
          new OnConnListener() {
                 @Override
                public void onConnectFailed(long code, String error) {
                    // Failed to connect to server
                }

                @Override
                public void onConnectSuccess() {
                    // Successfully connected to server
                }

                @Override
                public void onConnecting() {
                    // Connecting to server...
                }

                @Override
                public void onKickedOffline() {
                    // Current user was kicked offline
                }

                @Override
                public void onUserTokenExpired() {
                    // Login ticket has expired
                }
            });

```

</TabItem>

<TabItem value="Web">

:::caution Note

`@openim/client-sdk` and `@openim/wasm-client-sdk` do not need to be initialized; just call log in directly. `initSDK` only needs to be called when `@openim/electron-client-sdk` is used in Electron with the ffi approach.

:::

### Parameter Details

```ts showLineNumbers
IMSDK.initSDK(config: InitConfig, operationID?: string):Promise<boolean>
```

### Input Parameters

| Parameter Name | Parameter Type                                        | Required | Description                                                    |
| ----------- | ----------------------------------------------------- | -------- | ------------------------------------------------------- |
| config      | [InitConfig](/class/init/config.md) | Yes      | Initialization parameter                                        |
| operationID | string                                                | No       | Operation ID, used to pinpoint issues, keep unique, prefer time+random |

### Return Result

| Parameter Name  | Parameter Type                                       | Description         |
| --------------- | ---------------------------------------------------- | ------------ |
| Promise.then()  | Promise<boolean\> | Success callback |
| Promise.catch() | Promise<void\> | Failure callback |

### Code Example

```ts showLineNumbers
import { LogLevel } from "@openim/wasm-client-sdk";
import { getWithRenderProcess } from '@openim/electron-client-sdk/lib/render';

const { instance: IMSDK } = getWithRenderProcess();

IMSDK.initSDK({
  platformID: 'your-platform-id',
  apiAddr: 'http://your-server-ip:10002',
  wsAddr: 'ws://your-server-ip:10001',
  dataDir: 'your-db-dir',
  logFilePath: 'your-log-file-path',
  logLevel: LogLevel.Debug,
  isLogStandardOutput: true,
});
```

</TabItem>

<TabItem value="uni-app">

### Function Prototype

```ts showLineNumbers
IMSDK.asyncApi("initSDK",operationID: string, config: InitConfig): Promise<boolean>
```

### Input Parameters

| Parameter Name | Parameter Type                                | Required | Description                                                    |
| ----------- | --------------------------------------------- | -------- | ------------------------------------------------------- |
| operationID | string                                        | Yes      | Operation ID, used to pinpoint issues, keep unique, prefer time+random |
| config      | [InitConfig](/class/init/config.md) | Yes      | Initialization parameter                                              |

### Return Result

> Use the `openim-uniapp-polyfill` package to make the function Promise. When calling, you need to use `then` and `catch` to determine and handle success and failure callbacks.

| Parameter Name  | Parameter Type                                          | Description           |
| --------------- | ------------------------------------------------------- | -------------- |
| Promise.then()  | Promise<boolean\>                                       | Is initialization successful |
| Promise.catch() | Promise<[CatchResponse](/class/response.md)\> | Failure callback   |

### Code Example

```js showLineNumbers
// App.vue
import IMSDK from 'openim-uniapp-polyfill';

const path = await getDbDir();
const config = {
  apiAddr: 'http://xxx:10002', // IM's API interface address. E.g. http://xxx:10002
  wsAddr: 'ws://xxx:10001', // IM's websocket address. E.g. ws://xxx:10001
  platformID: uni.$u.os() === 'ios' ? 1 : 2, // Platform, reference Platform class
  dataDir: path, // Data storage path
  logLevel: 6, // Log print level
  logFilePath: path, // Directory where logs are stored
  isLogStandardOutput: true, // Whether to output to console
};
const flag = await IMSDK.asyncApi('initSDK', IMSDK.uuid(), config);

// utils.js
export const getDbDir = () =>
  new Promise((resolve, reject) => {
    plus.io.requestFileSystem(plus.io.PRIVATE_DOC, (fs) => {
      fs.root.getDirectory(
        'user',
        {
          create: true,
        },
        (entry) => {
          resolve(entry.fullPath);
        },
        (error) => {
          reject(error);
        }
      );
    });
  });
```

</TabItem>
<TabItem value="React-Native">

### Function Prototype

```ts showLineNumbers
OpenIMSDK.initSDK(config: InitConfig, optionalID? :string): Promise<boolean>
```

### Input Parameters

| Parameter Name | Parameter Type                                   | Required | Description       |
| -------- | ------------------------------------------------ | -------- | ---------- |
| config   | [InitConfig](/class/init/config.md) | Yes      | Initialization parameter |
| operationID   | string | No       | Operation ID, used to pinpoint issues, keep unique, prefer time+random|

### Return Result

| Parameter Name  | Parameter Type                                          | Description           |
| --------------- | ------------------------------------------------------- | -------------- |
| Promise.then()  | Promise<boolean\>                                       | Is initialization successful |
| Promise.catch() | Promise<[OpenIMApiError](/class/response.md)\> | Failure callback   |

### Code Example

```ts showLineNumbers
import OpenIMSDK from '@openim/rn-client-sdk';
import RNFS from 'react-native-fs';

RNFS.mkdir(RNFS.DocumentDirectoryPath + '/tmp');

OpenIMSDK.initSDK({
  platformID: 2,  // 1: ios, 2: android
  apiAddr: 'http://your-server-ip:10002',
  wsAddr: 'ws://your-server-ip:10001',
  dataDir: RNFS.DocumentDirectoryPath + '/tmp',
  logFilePath: RNFS.DocumentDirectoryPath + '/tmp',
  logLevel: 5,
  isLogStandardOutput: true,
});
```

</TabItem>

<TabItem value="Unity">

### Function Prototype

```C# showLineNumbers

public static bool InitSDK(IMConfig config, IConnCallBack cb)

```

### Input Parameters

| Parameter Name | Parameter Type | Required | Description                                                   |
| -------- | ----------- | -------- | -------------------------------------------------------|
| config   | [IMConfig](/class/init/config.md)    |   Yes    | SDK configuring           |
| cb      | [IConnListener](/listener/connectListener.md)   |   Yes    | Network connection status callback   |

    
### Code Example
    
```C# showLineNumbers

var config = new IMConfig()
{
    PlatformID = (int)PlatformID,
    WsAddr = wsAddr,
    ApiAddr = apiAddr,
    DataDir = dataDir,
    LogLevel = 5,
    IsLogStandardOutput = true,
    LogFilePath = logDir,
    IsExternalExtensions = true,
};
var connListener = new IConnListener();
var res = IMSDK.InitSDK(config, connListener);

```

</TabItem>

</Tabs>
