import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

import { getClientSdkSidebarPaths } from '../lib/client-sdk-sidebar.mjs';
import {
  buildClientSdkAuditSeed,
  buildClientSdkNavigationLabels,
  getOmittedClientSdkPaths,
  mirrorClientSdkSidebar,
} from '../sync-client-sdk-structure.mjs';

const wasmSidebar = readJson('data/structure/wasm-sidebar.json');
const wasmLabels = readJson('data/structure/wasm-navigation-labels.json');

test('mirrors every supported WASM path for native SDKs', () => {
  const wasmPaths = getClientSdkSidebarPaths(wasmSidebar);
  for (const platform of ['android', 'ios', 'flutter']) {
    const mirrored = mirrorClientSdkSidebar(wasmSidebar, platform);
    const omitted = getOmittedClientSdkPaths(wasmSidebar, platform);
    assert.equal(mirrored.sidebarExpansion, wasmSidebar.sidebarExpansion);
    assert.equal(getClientSdkSidebarPaths(mirrored).length + omitted.length, wasmPaths.length);
    assert.equal(omitted.length, 0);
    assert.ok(!omitted.includes(`/sdk/${platform}/calling/overview-calling`));
    assert.ok(mirrored.nodes.some((node) => node.id === 'calling'));
    assert.equal(
      omitted.includes(
        `/sdk/${platform}/conversation/managing-conversation-groups/overview-conversation-groups`,
      ),
      false,
    );
  }
});

test('seeds new audit paths and preserves reviewed records at unchanged paths', () => {
  const sidebar = mirrorClientSdkSidebar(wasmSidebar, 'ios');
  const reviewed = {
    currentPath: '/sdk/ios/overview',
    locales: { zh: { reviewStatus: 'published' }, en: { reviewStatus: 'deferred' } },
  };
  const audit = buildClientSdkAuditSeed({
    platformId: 'ios',
    sidebar,
    omittedPaths: getOmittedClientSdkPaths(wasmSidebar, 'ios'),
    existingPages: [reviewed],
  });
  assert.equal(audit.pages.length, getClientSdkSidebarPaths(wasmSidebar).length);
  assert.equal(audit.pages[0], reviewed);
  assert.equal(audit.pages[1].locales.zh.reviewStatus, 'structure-only');
  assert.equal(audit.pages[1].locales.en.reviewStatus, 'deferred');
  assert.equal(audit.sources.iosSdk.commit, '17fb969fd3a360f00fe65f476435b81857e274f8');
  assert.equal(audit.pages.filter((page) => page.disposition === 'omit').length, 0);
});

test('retains routes removed from the sidebar as historical omitted records', () => {
  const sidebar = mirrorClientSdkSidebar(wasmSidebar, 'ios');
  const historical = {
    currentPath: '/sdk/ios/legacy/removed-page',
    targetPath: '/sdk/ios/legacy/removed-page',
    disposition: 'adapt',
    notes: ['Reviewed before removal.'],
    locales: { zh: { reviewStatus: 'published' }, en: { reviewStatus: 'deferred' } },
  };
  const audit = buildClientSdkAuditSeed({
    platformId: 'ios',
    sidebar,
    omittedPaths: getOmittedClientSdkPaths(wasmSidebar, 'ios'),
    existingPages: [historical],
  });
  const retained = audit.pages.find((page) => page.currentPath === historical.currentPath);
  assert.equal(retained.disposition, 'omit');
  assert.equal(retained.locales.zh.reviewStatus, 'published');
  assert.ok(retained.notes.includes('Reviewed before removal.'));
});

test('uses current WASM vocabulary with a platform-specific overview label', () => {
  const androidLabels = buildClientSdkNavigationLabels(wasmLabels, 'android');
  assert.equal(androidLabels['OpenIM SDK for WASM'], undefined);
  assert.equal(androidLabels['OpenIM SDK for Android'], 'OpenIM Android SDK 概览');

  const labels = buildClientSdkNavigationLabels(wasmLabels, 'flutter');
  assert.equal(labels['OpenIM SDK for WASM'], undefined);
  assert.equal(labels['OpenIM SDK for Flutter'], 'OpenIM Flutter SDK 概览');
  assert.equal(labels['Retrieve message history'], wasmLabels['Retrieve message history']);
});

function readJson(path) {
  return JSON.parse(readFileSync(path, 'utf8'));
}
