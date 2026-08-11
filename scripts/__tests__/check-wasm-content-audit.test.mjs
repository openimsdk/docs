import assert from 'node:assert/strict';
import test from 'node:test';

import { buildAuditReport } from '../check-wasm-content-audit.mjs';

const commit = 'a177b296f1abe53ba2cf7d897acf86467a45e7c6';
const sources = {
  openimDocs: {
    repository: 'https://github.com/openimsdk/docs',
    commit,
  },
  wasmSdk: {
    package: '@openim/wasm-client-sdk',
    version: '3.8.3-patch.15.1',
    integrity:
      'sha512-X34t69RxIALLppmdg4/HJaWQCFdA9JhbedOMW7zoAV81g87+8ZP3RgWsqbyBxBGfQIkf/rjfhpeApbeWf4Oa/g==',
    repository: 'https://github.com/openimsdk/openim-sdk-js-wasm',
    commit: '615d327c78c5ecf9a01a053f6889d01cb9094639',
  },
};

function localeState(reviewStatus) {
  return {
    reviewStatus,
    reviewer: null,
    reviewedAt: null,
    exampleVerification: { status: 'pending', evidence: [], reason: null },
  };
}

function page(currentPath, overrides = {}) {
  return {
    currentPath,
    targetPath: currentPath,
    sourceKind: 'sendbird',
    disposition: 'undecided',
    sendbirdSource: `https://sendbird.com/docs/chat${currentPath.replace(
      '/sdk/wasm/',
      '/sdk/v4/javascript/',
    )}`,
    openimSources: [],
    sdkMethods: [],
    sdkEvents: [],
    locales: {
      zh: localeState('structure-only'),
      en: localeState('deferred'),
    },
    redirectTo: null,
    notes: [],
    ...overrides,
  };
}

const routeA = '/sdk/wasm/overview';
const routeB = '/sdk/wasm/getting-started/prepare-environment';

test('reports active, manual, pending, proposed, and locale counts deterministically', () => {
  const report = buildAuditReport({
    routes: [{ path: routeA }, { path: routeB }],
    manualPaths: new Set([routeA]),
    audit: {
      schemaVersion: 1,
      sources,
      pages: [
        page(routeA, {
          disposition: 'retain',
          openimSources: [
            `https://github.com/openimsdk/docs/blob/${commit}/docs/sdks/quickstart/browser.md`,
          ],
          sdkMethods: ['sendMessage'],
          locales: {
            zh: localeState('written'),
            en: localeState('deferred'),
          },
        }),
        page(routeB),
        page('/sdk/wasm/signaling/overview', {
          sourceKind: 'openim-specific',
          disposition: 'proposed',
          sendbirdSource: null,
          sdkMethods: ['signalingInvite'],
        }),
      ],
    },
    api: {
      ...sources.wasmSdk,
      methods: [{ name: 'sendMessage' }, { name: 'signalingInvite' }],
      events: [],
    },
  });

  assert.deepEqual(report.errors, []);
  assert.deepEqual(report.summary, {
    activeRoutes: 2,
    auditRecords: 3,
    manualPages: 1,
    pendingActivePages: 1,
    proposedPages: 1,
    removedPages: 0,
    localeStatusCounts: {
      en: { deferred: 3 },
      zh: { 'structure-only': 2, written: 1 },
    },
  });
});

test('rejects orphan manual pages and SDK snapshot source drift', () => {
  const orphan = '/sdk/wasm/orphan';
  const report = buildAuditReport({
    routes: [{ path: routeA }],
    manualPaths: new Set([orphan]),
    audit: {
      schemaVersion: 1,
      sources,
      pages: [page(routeA)],
    },
    api: {
      package: sources.wasmSdk.package,
      version: '0.0.0',
      integrity: sources.wasmSdk.integrity,
      methods: [],
      events: [],
    },
  });

  assert.ok(
    report.errors.some((error) =>
      error.includes(`${orphan}: manual zh MDX is not an active route`),
    ),
  );
  assert.ok(report.errors.some((error) => error.includes('SDK snapshot version does not match')));
});
