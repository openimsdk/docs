import assert from 'node:assert/strict';
import test from 'node:test';

import { isLocalePublished, validateAuditManifest } from '../lib/wasm-content-audit.mjs';

const validSources = {
  openimDocs: {
    repository: 'https://github.com/openimsdk/docs',
    commit: 'a177b296f1abe53ba2cf7d897acf86467a45e7c6',
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

function createPage(overrides = {}) {
  return {
    currentPath: '/sdk/wasm/overview',
    targetPath: '/sdk/wasm/overview',
    sourceKind: 'sendbird',
    disposition: 'undecided',
    sendbirdSource: null,
    openimSources: [],
    sdkMethods: [],
    sdkEvents: [],
    locales: {
      zh: {
        reviewStatus: 'structure-only',
        reviewer: null,
        reviewedAt: null,
        exampleVerification: { status: 'pending', evidence: [], reason: null },
      },
      en: {
        reviewStatus: 'deferred',
        reviewer: null,
        reviewedAt: null,
        exampleVerification: { status: 'pending', evidence: [], reason: null },
      },
    },
    redirectTo: null,
    notes: [],
    ...overrides,
  };
}

function createManifest(pages) {
  return { schemaVersion: 1, sources: validSources, pages };
}

function createLocaleState(reviewStatus, overrides = {}) {
  return {
    reviewStatus,
    reviewer: null,
    reviewedAt: null,
    exampleVerification: { status: 'pending', evidence: [], reason: null },
    ...overrides,
  };
}

const immutableOpenImSource =
  'https://github.com/openimsdk/docs/blob/a177b296f1abe53ba2cf7d897acf86467a45e7c6/docs/sdks/quickstart/browser.md';
const sendbirdSource = 'https://sendbird.com/docs/chat/sdk/v4/javascript/overview';

test('rejects duplicate currentPath values', () => {
  const page = createPage();
  const errors = validateAuditManifest(createManifest([page, page]));

  assert.ok(errors.some((error) => error.includes('duplicate currentPath')));
});

test('rejects invalid sourceKind, disposition, and review status values', () => {
  const page = createPage({
    sourceKind: 'generated',
    disposition: 'keep',
    locales: {
      zh: createLocaleState('done'),
      en: createLocaleState('deferred'),
    },
  });

  const errors = validateAuditManifest(createManifest([page]));

  assert.ok(errors.some((error) => error.includes('invalid sourceKind')));
  assert.ok(errors.some((error) => error.includes('invalid disposition')));
  assert.ok(errors.some((error) => error.includes('invalid reviewStatus')));
});

test('requires a manual Chinese file for written and higher states', () => {
  const page = createPage({
    disposition: 'retain',
    sendbirdSource,
    openimSources: [immutableOpenImSource],
    locales: {
      zh: createLocaleState('written'),
      en: createLocaleState('deferred'),
    },
  });

  const errors = validateAuditManifest(createManifest([page]), {
    activeRoutes: new Set([page.currentPath]),
    manualPaths: new Set(),
  });

  assert.ok(errors.some((error) => error.includes('requires a manual zh MDX file')));
});

test('historical merged pages retain API review evidence without obsolete MDX files', () => {
  const page = createPage({
    disposition: 'merge',
    redirectTo: '/sdk/wasm/conversation/overview-conversation',
    sendbirdSource,
    openimSources: [immutableOpenImSource],
    sdkMethods: ['sendMessage'],
    locales: {
      zh: createLocaleState('api-verified'),
      en: createLocaleState('deferred'),
    },
  });

  const errors = validateAuditManifest(createManifest([page]), {
    activeRoutes: new Set(),
    manualPaths: new Set(),
    sdkMethodNames: new Set(['sendMessage']),
  });

  assert.equal(
    errors.some((error) => error.includes('requires a manual zh MDX file')),
    false,
  );
});

test('requires immutable OpenIM and Sendbird sources for mapped Sendbird pages', () => {
  const page = createPage({
    disposition: 'retain',
    locales: {
      zh: createLocaleState('mapped'),
      en: createLocaleState('deferred'),
    },
  });

  const errors = validateAuditManifest(createManifest([page]));

  assert.ok(errors.some((error) => error.includes('requires an immutable OpenIM source')));
  assert.ok(errors.some((error) => error.includes('requires a Sendbird source')));
});

test('requires OpenIM sources to use the manifest-pinned docs commit', () => {
  const page = createPage({
    disposition: 'retain',
    sendbirdSource,
    openimSources: [
      'https://github.com/openimsdk/docs/blob/1111111111111111111111111111111111111111/docs/sdks/quickstart/browser.md',
    ],
    locales: {
      zh: createLocaleState('mapped'),
      en: createLocaleState('deferred'),
    },
  });

  const errors = validateAuditManifest(createManifest([page]));

  assert.ok(errors.some((error) => error.includes('must use a pinned OpenIM source commit')));
});

test('rejects unknown SDK methods at api-verified and higher states', () => {
  const page = createPage({
    disposition: 'retain',
    sendbirdSource,
    openimSources: [immutableOpenImSource],
    sdkMethods: ['inventedMethod'],
    locales: {
      zh: createLocaleState('api-verified'),
      en: createLocaleState('deferred'),
    },
  });

  const errors = validateAuditManifest(createManifest([page]), {
    manualPaths: new Set([page.currentPath]),
    sdkMethodNames: new Set(['sendMessage']),
  });

  assert.ok(errors.some((error) => error.includes('unknown SDK method inventedMethod')));
});

test('rejects unknown SDK events at api-verified and higher states', () => {
  const page = createPage({
    disposition: 'retain',
    sendbirdSource,
    openimSources: [immutableOpenImSource],
    sdkMethods: ['sendMessage'],
    sdkEvents: ['OnInventedEvent'],
    locales: {
      zh: createLocaleState('api-verified'),
      en: createLocaleState('deferred'),
    },
  });

  const errors = validateAuditManifest(createManifest([page]), {
    manualPaths: new Set([page.currentPath]),
    sdkMethodNames: new Set(['sendMessage']),
    sdkEventNames: new Set(['OnRecvNewMessages']),
  });

  assert.ok(errors.some((error) => error.includes('unknown SDK event OnInventedEvent')));
});

test('requires complete evidence before a locale can be published', () => {
  const page = createPage({
    disposition: 'retain',
    sendbirdSource,
    openimSources: [immutableOpenImSource],
    sdkMethods: ['sendMessage'],
    locales: {
      zh: createLocaleState('published'),
      en: createLocaleState('deferred'),
    },
  });

  const errors = validateAuditManifest(createManifest([page]), {
    manualPaths: new Set([page.currentPath]),
    sdkMethodNames: new Set(['sendMessage']),
  });

  assert.ok(errors.some((error) => error.includes('published requires reviewer')));
  assert.ok(errors.some((error) => error.includes('published requires reviewedAt')));
  assert.ok(errors.some((error) => error.includes('published requires example evidence')));
});

test('accepts a fully evidenced published Chinese page', () => {
  const page = createPage({
    disposition: 'retain',
    sendbirdSource,
    openimSources: [immutableOpenImSource],
    sdkMethods: ['sendMessage'],
    locales: {
      zh: createLocaleState('published', {
        reviewer: 'OpenIM docs team',
        reviewedAt: '2026-07-13',
        exampleVerification: {
          status: 'verified',
          evidence: ['pnpm test:wasm-example send-message'],
          reason: null,
        },
      }),
      en: createLocaleState('deferred'),
    },
  });

  const errors = validateAuditManifest(createManifest([page]), {
    manualPaths: new Set([page.currentPath]),
    sdkMethodNames: new Set(['sendMessage']),
  });

  assert.deepEqual(errors, []);
});

test('reports publication independently for each locale', () => {
  const page = createPage({
    locales: {
      zh: createLocaleState('published'),
      en: createLocaleState('deferred'),
    },
  });

  assert.equal(isLocalePublished(page, 'zh'), true);
  assert.equal(isLocalePublished(page, 'en'), false);
});

test('requires example evidence at example-verified and a concept note when no methods apply', () => {
  const page = createPage({
    disposition: 'retain',
    sendbirdSource,
    openimSources: [immutableOpenImSource],
    locales: {
      zh: createLocaleState('example-verified'),
      en: createLocaleState('deferred'),
    },
  });

  const errors = validateAuditManifest(createManifest([page]), {
    manualPaths: new Set([page.currentPath]),
    sdkMethodNames: new Set(['sendMessage']),
  });

  assert.ok(errors.some((error) => error.includes('example-verified requires example evidence')));
  assert.ok(
    errors.some((error) =>
      error.includes('verified page without SDK methods requires a concept note'),
    ),
  );
});

test('enforces merge, remove, undecided, and proposed disposition rules', () => {
  const merge = createPage({ disposition: 'merge', redirectTo: null });
  const remove = createPage({
    currentPath: '/sdk/wasm/removed',
    disposition: 'remove',
    locales: {
      zh: createLocaleState('published'),
      en: createLocaleState('deferred'),
    },
  });
  const undecided = createPage({
    currentPath: '/sdk/wasm/undecided',
    disposition: 'undecided',
    locales: {
      zh: createLocaleState('mapped'),
      en: createLocaleState('deferred'),
    },
  });
  const proposed = createPage({
    currentPath: '/sdk/wasm/openim-specific',
    sourceKind: 'openim-specific',
    disposition: 'proposed',
  });

  const errors = validateAuditManifest(createManifest([merge, remove, undecided, proposed]));

  assert.ok(errors.some((error) => error.includes('merge requires redirectTo')));
  assert.ok(errors.some((error) => error.includes('remove cannot be published')));
  assert.ok(errors.some((error) => error.includes('undecided cannot reach mapped')));
  assert.ok(
    errors.some((error) => error.includes('proposed requires an OpenIM source or SDK method')),
  );
});
