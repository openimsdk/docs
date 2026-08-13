const clientSdkPlatforms = {
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
  uniapp: {
    id: 'uniapp',
    contextKey: 'chat/sdk/uniapp',
    routePrefix: '/sdk/uniapp',
    manualRoot: 'content/zh/docs/chat/sdk/uniapp',
    auditPath: 'data/structure/uniapp-content-audit.json',
    labelsPath: 'data/structure/uniapp-navigation-labels.json',
    sidebarPath: 'data/structure/uniapp-sidebar.json',
    localizedOutputPath: 'src/generated/uniapp-sdk-zh-content.json',
    sdkSourceKey: 'uniappSdk',
    sdkTag: '0.2.0-rc.3',
    sdkCommit: 'e71e3f68827f9f7af354526fecbaded25dc14de9',
  },
};

export const clientSdkPlatformIds = Object.freeze(Object.keys(clientSdkPlatforms));

export function getClientSdkPlatform(id) {
  const platform = clientSdkPlatforms[id];
  if (!platform) throw new Error(`Unknown client SDK platform: ${id}`);
  return platform;
}
