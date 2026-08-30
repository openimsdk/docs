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
    sdkTag: '0.2.3',
    sdkCommit: 'sha256:8de6339b8c5c8f02a031892589de8e519de03240a34c22cb3548b501212308c3',
    previousSdkCommits: ['sha256:c4390e829a89ee2d3a5b781228102983d25e04dadfab3f7164a80a68fe01a90c'],
  },
  harmony: {
    id: 'harmony',
    contextKey: 'chat/sdk/harmony',
    routePrefix: '/sdk/harmony',
    manualRoot: 'content/zh/docs/chat/sdk/harmony',
    auditPath: 'data/structure/harmony-content-audit.json',
    labelsPath: 'data/structure/harmony-navigation-labels.json',
    sidebarPath: 'data/structure/harmony-sidebar.json',
    localizedOutputPath: 'src/generated/harmony-sdk-zh-content.json',
    sdkSourceKey: 'harmonySdk',
    sdkTag: '1.0.2',
    sdkCommit: '77bd15d59c9f91118ba24cbb51f2fd72195ff465',
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
};

// Locale publication remains explicit. UniApp and HarmonyOS participate in
// structure and content validation, but are not added to publication gating
// until their English audits are promoted for release.
export const clientSdkPlatformIds = Object.freeze(['android', 'ios', 'flutter', 'wasm']);
export const clientSdkStructurePlatformIds = Object.freeze(Object.keys(clientSdkPlatforms));

export function getClientSdkPlatform(id) {
  const platform = clientSdkPlatforms[id];
  if (!platform) throw new Error(`Unknown client SDK platform: ${id}`);
  return platform;
}
