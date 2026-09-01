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

test('rejects TypeScript-only syntax in UniApp SDK examples', () => {
  const platform = getClientSdkPlatform('uniapp');
  const path = '/sdk/uniapp/message/managing-messages/modify-a-message';
  const page = auditPage(path, platform.sdkCommit);
  page.openimSources = [platform.sdkCommit];
  const errors = validateClientSdkAudit({
    platform,
    sidebar: { nodes: [path] },
    audit: {
      schemaVersion: 1,
      sources: { uniappSdk: { tag: platform.sdkTag, commit: platform.sdkCommit } },
      pages: [page],
    },
    manualPages: new Map([
      [
        path,
        '```ts\nimport { type OpenIMMessageItem } from "sdk"\nconst next = { ...message }\n```',
      ],
    ]),
  });

  assert.ok(errors.some((error) => error.includes('requires a UTS example')));
  assert.ok(errors.some((error) => error.includes('must use UTS code fences')));
});

test('requires stable HarmonyOS listeners with retained cleanup functions', () => {
  const platform = getClientSdkPlatform('harmony');
  const path = '/sdk/harmony/message/receiving-messages/receive-messages';
  const page = auditPage(path, platform.sdkCommit);
  page.openimSources = [`local-source:openim-sdk-harmony/tree/${platform.sdkCommit}`];
  page.sdkMethods = [];
  page.sdkEvents = ['EventOnRecvNewMessage'];
  const audit = {
    schemaVersion: 1,
    sources: { harmonySdk: { tag: platform.sdkTag, commit: platform.sdkCommit } },
    pages: [page],
  };
  const invalid = validateClientSdkAudit({
    platform,
    sidebar: { nodes: [path] },
    audit,
    manualPages: new Map([
      [path, '```ts\nsdk.on(OpenIMSDKEvent.EventOnRecvNewMessage, (data) => merge(data));\n```'],
    ]),
  });
  assert.ok(invalid.some((error) => error.includes('stable named handler')));
  assert.ok(invalid.some((error) => error.includes('retain its unsubscribe function')));

  const valid = validateClientSdkAudit({
    platform,
    sidebar: { nodes: [path] },
    audit,
    manualPages: new Map([
      [
        path,
        '```ts\nconst handleMessage = (data: EventData): void => merge(data);\nconst unsubscribeMessage = sdk.on(OpenIMSDKEvent.EventOnRecvNewMessage, handleMessage);\nunsubscribeMessage();\n```',
      ],
    ]),
  });
  assert.deepEqual(valid, []);

  const validFormatted = validateClientSdkAudit({
    platform,
    sidebar: { nodes: [path] },
    audit,
    manualPages: new Map([
      [
        path,
        '```ts\nconst unsubscribes: Array<() => void> = [];\nconst handleMessage = (data: EventData): void => merge(data);\nunsubscribes.push(\n  sdk.on(\n    OpenIMSDKEvent.EventOnRecvNewMessage,\n    handleMessage,\n  ),\n);\nfor (let index = 0; index < unsubscribes.length; index += 1) {\n  unsubscribes[index]();\n}\n```',
      ],
    ]),
  });
  assert.deepEqual(validFormatted, []);
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
