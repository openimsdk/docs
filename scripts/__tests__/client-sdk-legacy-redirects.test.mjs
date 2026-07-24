import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

import {
  buildClientSdkLegacyRedirectEntries,
  buildClientSdkLegacyRedirects,
} from '../lib/client-sdk-legacy-redirects.mjs';

test('maps reviewed WASM redirects only when the native destination is active', () => {
  const entries = buildClientSdkLegacyRedirectEntries({
    platformId: 'ios',
    sidebar: readJson('data/structure/ios-sidebar.json'),
    wasmEntries: readJson('data/structure/wasm-legacy-redirects.json'),
    aliases: readJson('data/structure/ios-legacy-redirect-aliases.json'),
  });
  assert.ok(
    !entries.some(({ source }) => source === '/sdk/ios/channel/creating-a-channel/create-a-channel'),
  );
  assert.ok(
    !entries.some(
      ({ source }) => source === '/sdk/ios/calling/synchronizing-calls/synchronize-call-events',
    ),
  );
  assert.ok(
    entries.some(
      ({ source, destination }) =>
        source ===
          '/sdk/ios/message/receiving-messages-through-event-delegate/receive-messages-in-a-group-channel' &&
        destination === '/sdk/ios/message/receiving-messages/receive-messages',
    ),
  );
  assert.equal(new Set(entries.map(({ source }) => source)).size, entries.length);
});

test('emits permanent default and localized redirects', () => {
  const redirects = buildClientSdkLegacyRedirects({
    platformId: 'flutter',
    sidebar: { nodes: ['/sdk/flutter/events/overview-events'] },
    wasmEntries: [
      {
        source: '/sdk/wasm/event-handler/overview-event-handler',
        destination: '/sdk/wasm/events/overview-events',
      },
    ],
  });
  assert.deepEqual(redirects, [
    {
      source: '/sdk/flutter/event-handler/overview-event-handler',
      destination: '/sdk/flutter/events/overview-events',
      permanent: true,
    },
    {
      source: '/zh/sdk/flutter/event-handler/overview-event-handler',
      destination: '/zh/sdk/flutter/events/overview-events',
      permanent: true,
    },
  ]);
});

function readJson(path) {
  return JSON.parse(readFileSync(path, 'utf8'));
}
