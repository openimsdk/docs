import assert from 'node:assert/strict';
import test from 'node:test';

import { validateClientSdkAudit } from '../check-client-sdk-content-audit.mjs';
import { getClientSdkPlatform } from '../lib/client-sdk-platforms.mjs';

test('accepts one reviewed native event owner with the pinned SDK source', () => {
  const platform = getClientSdkPlatform('flutter');
  const path = '/sdk/flutter/events/overview-events';
  const errors = validateClientSdkAudit({
    platform,
    sidebar: { nodes: [path] },
    audit: {
      schemaVersion: 1,
      sources: {
        flutterSdk: { tag: platform.sdkTag, commit: platform.sdkCommit },
      },
      pages: [auditPage(path, platform.sdkCommit)],
    },
    manualPages: new Map([[path, '```dart\nsetMessageListener(listener);\n```']]),
  });
  assert.deepEqual(errors, []);
});

test('rejects duplicate event ownership and native-specific invalid examples', () => {
  const platform = getClientSdkPlatform('flutter');
  const first = '/sdk/flutter/events/overview-events';
  const second = '/sdk/flutter/logger';
  const errors = validateClientSdkAudit({
    platform,
    sidebar: { nodes: [first, second] },
    audit: {
      schemaVersion: 1,
      sources: {
        flutterSdk: { tag: platform.sdkTag, commit: platform.sdkCommit },
      },
      pages: [auditPage(first, platform.sdkCommit), auditPage(second, platform.sdkCommit)],
    },
    manualPages: new Map([
      [first, '```dart\ntypingStatusUpdate();\n```'],
      [second, '```dart\nsetMessageListener(listener);\n```'],
    ]),
  });
  assert.ok(errors.some((error) => error.includes('multiple event owners')));
  assert.ok(errors.some((error) => error.includes('multiple singleton listener owners')));
  assert.ok(errors.some((error) => error.includes('UnimplementedError')));
});

test('requires review metadata and example evidence before native content is published', () => {
  const platform = getClientSdkPlatform('flutter');
  const path = '/sdk/flutter/events/overview-events';
  const page = auditPage(path, platform.sdkCommit);
  page.locales.zh.reviewStatus = 'published';
  const errors = validateClientSdkAudit({
    platform,
    sidebar: { nodes: [path] },
    audit: {
      schemaVersion: 1,
      sources: { flutterSdk: { tag: platform.sdkTag, commit: platform.sdkCommit } },
      pages: [page],
    },
    manualPages: new Map([[path, '```dart\nsetMessageListener(listener);\n```']]),
  });
  assert.ok(errors.some((error) => error.includes('requires a reviewer')));
  assert.ok(errors.some((error) => error.includes('requires a reviewedAt date')));
  assert.ok(errors.some((error) => error.includes('require verification evidence')));

  page.locales.zh = {
    reviewStatus: 'published',
    reviewer: 'Codex',
    reviewedAt: '2026-07-20',
    exampleVerification: {
      status: 'verified',
      evidence: ['Pinned Flutter SDK declarations statically checked.'],
      reason: null,
    },
  };
  assert.deepEqual(
    validateClientSdkAudit({
      platform,
      sidebar: { nodes: [path] },
      audit: {
        schemaVersion: 1,
        sources: { flutterSdk: { tag: platform.sdkTag, commit: platform.sdkCommit } },
        pages: [page],
      },
      manualPages: new Map([[path, '```dart\nsetMessageListener(listener);\n```']]),
    }),
    [],
  );
});

test('rejects invalid Objective-C callback blocks and callbacker receivers', () => {
  const platform = getClientSdkPlatform('ios');
  const path = '/sdk/ios/group/retrieving-groups/retrieve-and-search-groups';
  const page = auditPage(path, platform.sdkCommit);
  page.openimSources = [`https://github.com/openimsdk/open-im-sdk-ios/tree/${platform.sdkCommit}`];
  const errors = validateClientSdkAudit({
    platform,
    sidebar: { nodes: [path] },
    audit: {
      schemaVersion: 1,
      sources: { iosSdk: { tag: platform.sdkTag, commit: platform.sdkCommit } },
      pages: [page],
    },
    manualPages: new Map([
      [
        path,
        '```objc\nOIMPlatform platform = OIMPlatformIOS;\n[[OIMManager manager].callbacker addGroupListener:self];\n[manager createGroup:groupInfo onSuccess:^{ } onFailure:nil];\n```',
      ],
    ]),
  });
  assert.ok(errors.some((error) => error.includes('missing its declared parameter')));
  assert.ok(errors.some((error) => error.includes('OIMManager class property')));
  assert.ok(errors.some((error) => error.includes('nonexistent OIMPlatformIOS')));
});

test('accepts parameterless Objective-C signaling success callbacks declared by the SDK', () => {
  const platform = getClientSdkPlatform('ios');
  const path = '/sdk/ios/calling/sending-custom-signals/send-a-custom-signal';
  const page = auditPage(path, platform.sdkCommit);
  page.openimSources = [`https://github.com/openimsdk/open-im-sdk-ios/tree/${platform.sdkCommit}`];
  page.sdkMethods = ['signalingSendCustomSignal:customInfo:onSuccess:onFailure:'];
  const errors = validateClientSdkAudit({
    platform,
    sidebar: { nodes: [path] },
    audit: {
      schemaVersion: 1,
      sources: { iosSdk: { tag: platform.sdkTag, commit: platform.sdkCommit } },
      pages: [page],
    },
    manualPages: new Map([
      [
        path,
        '```objc\n[[OIMManager manager] signalingSendCustomSignal:roomID customInfo:customInfo onSuccess:^{ } onFailure:nil];\n```',
      ],
    ]),
  });
  assert.ok(!errors.some((error) => error.includes('missing its declared parameter')));
});

test('rejects conversationID on the Flutter Message model', () => {
  const platform = getClientSdkPlatform('flutter');
  const path = '/sdk/flutter/message/receiving-messages/receive-messages';
  const errors = validateClientSdkAudit({
    platform,
    sidebar: { nodes: [path] },
    audit: {
      schemaVersion: 1,
      sources: { flutterSdk: { tag: platform.sdkTag, commit: platform.sdkCommit } },
      pages: [auditPage(path, platform.sdkCommit)],
    },
    manualPages: new Map([[path, '```dart\nmerge(message.conversationID, message);\n```']]),
  });
  assert.ok(errors.some((error) => error.includes('does not expose conversationID')));
});

test('accepts uni-app root imports, direct Promise results, and handle-based event cleanup', () => {
  const platform = getClientSdkPlatform('uniapp');
  const path = '/sdk/uniapp/events/overview-events';
  const page = auditPage(path, platform.sdkCommit);
  page.openimSources = [`data/structure/uniapp-sdk-doc-manifest.json#${platform.sdkCommit}`];
  page.sdkMethods = ['onRecvNewMessage', 'off'];
  page.sdkEvents = ['onRecvNewMessage'];
  const source = `\`\`\`uts
import { onRecvNewMessage, off } from '@/uni_modules/unix-openim-sdk'

const subscription = onRecvNewMessage((message) => {
  console.log(message.clientMsgID)
})

off(subscription)
\`\`\``;
  const errors = validateClientSdkAudit({
    platform,
    sidebar: { nodes: [path] },
    audit: {
      schemaVersion: 1,
      sources: { uniappSdk: { tag: platform.sdkTag, commit: platform.sdkCommit } },
      pages: [page],
    },
    manualPages: new Map([[path, source]]),
  });
  assert.deepEqual(errors, []);
});

test('rejects Wasm-style calls and unsafe uni-app initialization and listener examples', () => {
  const platform = getClientSdkPlatform('uniapp');
  const path = '/sdk/uniapp/getting-started/install-initialize-and-inspect-sdk';
  const page = auditPage(path, platform.sdkCommit);
  page.openimSources = [`data/structure/uniapp-sdk-doc-manifest.json#${platform.sdkCommit}`];
  page.sdkMethods = ['initSDK', 'onRecvNewMessage'];
  page.sdkEvents = ['onRecvNewMessage'];
  const source = `\`\`\`uts
import { initSDK } from 'unix-openim-sdk'
const sdk = openimsdk.initSDK({ apiAddr, wsAddr })
const { data } = await sdk.login({ userID, token })
OpenIM.on('onRecvNewMessage', handler)
OpenIM.off('onRecvNewMessage', handler)
\`\`\``;
  const errors = validateClientSdkAudit({
    platform,
    sidebar: { nodes: [path] },
    audit: {
      schemaVersion: 1,
      sources: { uniappSdk: { tag: platform.sdkTag, commit: platform.sdkCommit } },
      pages: [page],
    },
    manualPages: new Map([[path, source]]),
  });
  assert.ok(errors.some((error) => error.includes('absolute uni_modules import')));
  assert.ok(errors.some((error) => error.includes('WASM SDK instance')));
  assert.ok(errors.some((error) => error.includes('WsResponse.data')));
  assert.ok(errors.some((error) => error.includes('object-style login')));
  assert.ok(errors.some((error) => error.includes('systemType')));
  assert.ok(errors.some((error) => error.includes('subscription handle')));
});

function auditPage(path, commit) {
  return {
    currentPath: path,
    disposition: 'adapt',
    openimSources: [`https://github.com/openimsdk/open-im-sdk-flutter/tree/${commit}`],
    sdkMethods: ['setMessageListener'],
    sdkEvents: ['onRecvNewMessage'],
    locales: {
      zh: { reviewStatus: 'api-verified' },
      en: { reviewStatus: 'deferred' },
    },
  };
}
