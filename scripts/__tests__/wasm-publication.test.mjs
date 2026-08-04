import assert from 'node:assert/strict';
import test from 'node:test';

import {
  createWasmPendingReviewContent,
  createWasmPublicationLookup,
  getPublishedWasmLocales,
  getWasmAuditPage,
  isWasmLocalePublished,
  isWasmRoute,
  wasmPendingReviewBody,
} from '../../src/lib/wasm-publication.ts';

const overview = '/sdk/wasm/overview';

test('looks up audited WASM routes with normalized paths', () => {
  assert.equal(getWasmAuditPage(`${overview}/`)?.currentPath, overview);
  assert.equal(isWasmRoute(overview), true);
  assert.equal(isWasmRoute('/sdk/android/overview'), false);
  assert.equal(
    isWasmRoute('/sdk/wasm/signaling/overview'),
    false,
    'OpenIM-specific candidates are not active routes yet',
  );
});

test('recognizes active WASM routes even when their audit record is missing', () => {
  const missingAuditPath = '/sdk/wasm/missing-audit';
  const lookup = createWasmPublicationLookup([], [missingAuditPath]);

  assert.equal(lookup.isWasmRoute(missingAuditPath), true);
  assert.equal(lookup.getWasmAuditPage(missingAuditPath), undefined);
  assert.equal(lookup.isWasmLocalePublished(missingAuditPath, 'zh'), false);
});

test('exposes locale publication state from the audit manifest', () => {
  assert.equal(isWasmLocalePublished(overview, 'zh'), true);
  assert.equal(isWasmLocalePublished(overview, 'en'), true);
  assert.deepEqual(getPublishedWasmLocales(overview), ['en', 'zh']);
});

test('uses a neutral Chinese pending-review body', () => {
  assert.equal(
    wasmPendingReviewBody,
    [
      '## 中文内容审核中',
      '',
      '该页面已经纳入 OpenIM WASM SDK 文档结构，中文技术内容仍在逐页核对中。',
      '',
      '在审核完成前，请参考 OpenIM 官方 SDK 文档和当前项目使用的 SDK 版本。',
    ].join('\n'),
  );
});

test('builds pending content without inventing technical guidance', () => {
  assert.deepEqual(
    createWasmPendingReviewContent({
      description: '中文审核状态说明',
      path: overview,
      title: 'WASM SDK 概览',
    }),
    {
      body: wasmPendingReviewBody,
      description: '中文审核状态说明',
      sourcePath: overview,
      title: 'WASM SDK 概览',
    },
  );
  assert.equal(
    createWasmPendingReviewContent({
      description: 'Android',
      path: '/sdk/android/overview',
      title: 'Android',
    }),
    undefined,
  );
});
