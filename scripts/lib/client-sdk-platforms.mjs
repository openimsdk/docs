const clientSdkPlatforms = {
  android: {
    id: 'android',
    contextKey: 'chat/sdk/android',
    routePrefix: '/sdk/android',
    manualRoot: 'content/zh/docs/chat/sdk/android',
    auditPath: 'data/structure/android-content-audit.json',
    labelsPath: 'data/structure/android-navigation-labels.json',
    sidebarPath: 'data/structure/android-sidebar.json',
    localizedOutputPath: 'src/generated/android-sdk-zh-content.json',
    sdkSourceKey: 'androidSdk',
    sdkTag: 'v3.8.4.0',
    sdkCommit: 'f82b142c7d3b4b66ce20586adabc69de9cd61673',
  },
  ios: {
    id: 'ios',
    contextKey: 'chat/sdk/ios',
    routePrefix: '/sdk/ios',
    manualRoot: 'content/zh/docs/chat/sdk/ios',
    auditPath: 'data/structure/ios-content-audit.json',
    labelsPath: 'data/structure/ios-navigation-labels.json',
    sidebarPath: 'data/structure/ios-sidebar.json',
    localizedOutputPath: 'src/generated/ios-sdk-zh-content.json',
    sdkSourceKey: 'iosSdk',
    sdkTag: '3.8.3-hotfix.12',
    sdkCommit: '17fb969fd3a360f00fe65f476435b81857e274f8',
  },
  flutter: {
    id: 'flutter',
    contextKey: 'chat/sdk/flutter',
    routePrefix: '/sdk/flutter',
    manualRoot: 'content/zh/docs/chat/sdk/flutter',
    auditPath: 'data/structure/flutter-content-audit.json',
    labelsPath: 'data/structure/flutter-navigation-labels.json',
    sidebarPath: 'data/structure/flutter-sidebar.json',
    localizedOutputPath: 'src/generated/flutter-sdk-zh-content.json',
    sdkSourceKey: 'flutterSdk',
    sdkTag: '3.8.3+hotfix.12',
    sdkCommit: '95889be7a26dce6fe896ef22096c9036cc25fc9b',
  },
  wasm: {
    id: 'wasm',
    contextKey: 'chat/sdk/wasm',
    routePrefix: '/sdk/wasm',
    manualRoot: 'content/zh/docs/chat/sdk/wasm',
    auditPath: 'data/structure/wasm-content-audit.json',
    labelsPath: 'data/structure/wasm-navigation-labels.json',
    sidebarPath: 'data/structure/wasm-sidebar.json',
    localizedOutputPath: 'src/generated/wasm-sdk-zh-content.json',
  },
  'react-native': {
    id: 'react-native',
    contextKey: 'chat/sdk/react-native',
    routePrefix: '/sdk/react-native',
    manualRoot: 'content/zh/docs/chat/sdk/react-native',
    auditPath: 'data/structure/react-native-content-audit.json',
    labelsPath: 'data/structure/react-native-navigation-labels.json',
    sidebarPath: 'data/structure/react-native-sidebar.json',
    localizedOutputPath: 'src/generated/react-native-sdk-zh-content.json',
    sdkSourceKey: 'reactNativeSdk',
    sdkTag: '3.8.5',
    sdkCommit: 'fa1e4084a374d381bd2b3e45abc43447b296894c',
  },
};

export const clientSdkPlatformIds = Object.freeze(Object.keys(clientSdkPlatforms));

export function getClientSdkPlatform(id) {
  const platform = clientSdkPlatforms[id];
  if (!platform) throw new Error(`Unknown client SDK platform: ${id}`);
  return platform;
}
