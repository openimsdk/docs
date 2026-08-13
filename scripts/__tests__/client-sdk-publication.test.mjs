import assert from 'node:assert/strict';
import test from 'node:test';

import {
  createClientSdkPendingReviewContent,
  createClientSdkPublicationLookup,
  getClientSdkPlatform,
  getPublishedClientSdkLocales,
  isClientSdkLocalePublished,
  isClientSdkRoute,
  selectClientSdkLocalizedPage,
} from '../../src/lib/client-sdk-publication.ts';

test('detects all registered active SDK routes and excludes legacy native routes', () => {
  assert.equal(getClientSdkPlatform('/sdk/ios/overview'), 'ios');
  assert.equal(getClientSdkPlatform('/sdk/flutter/overview/'), 'flutter');
  assert.equal(getClientSdkPlatform('/sdk/wasm/overview'), 'wasm');
  assert.equal(getClientSdkPlatform('/sdk/uniapp/overview'), 'uniapp');
  assert.equal(isClientSdkRoute('/sdk/ios/open-channel/overview'), false);
});

test('reads locale publication state per platform audit', () => {
  assert.equal(isClientSdkLocalePublished('/sdk/ios/overview', 'zh'), true);
  assert.deepEqual(getPublishedClientSdkLocales('/sdk/flutter/overview'), ['en', 'zh']);
  assert.equal(isClientSdkLocalePublished('/sdk/flutter/overview', 'en'), true);
  assert.equal(isClientSdkLocalePublished('/sdk/wasm/overview', 'zh'), true);
  assert.equal(isClientSdkLocalePublished('/sdk/uniapp/overview', 'zh'), false);
});

test('lookup keeps active route detection independent from audit completeness', () => {
  const lookup = createClientSdkPublicationLookup({
    ios: { pages: [], activePaths: ['/sdk/ios/missing-audit'] },
  });
  assert.equal(lookup.isClientSdkRoute('/sdk/ios/missing-audit'), true);
  assert.equal(lookup.getClientSdkAuditPage('/sdk/ios/missing-audit'), undefined);
});

test('creates a platform-specific neutral pending body', () => {
  const pending = createClientSdkPendingReviewContent({
    path: '/sdk/flutter/overview',
    title: 'Flutter SDK 概览',
    description: '审核状态说明',
  });
  assert.match(pending?.body ?? '', /OpenIM Flutter SDK/);
  assert.equal(
    createClientSdkPendingReviewContent({
      path: '/sdk/android/overview',
      title: 'Android',
      description: 'Android',
    }),
    undefined,
  );
});

test('only selects manual client SDK content after its locale is published', () => {
  const manualPage = { body: 'manual' };
  const pendingPage = { body: 'pending' };
  const path = '/sdk/ios/overview';

  for (const reviewStatus of ['written', 'api-verified', 'published']) {
    const publication = createClientSdkPublicationLookup({
      ios: {
        activePaths: [path],
        pages: [{ currentPath: path, locales: { zh: { reviewStatus } } }],
      },
    });
    assert.equal(
      selectClientSdkLocalizedPage({
        path,
        locale: 'zh',
        manualPage,
        packagedPage: undefined,
        pendingPage,
        publication,
      }),
      reviewStatus === 'published' ? manualPage : pendingPage,
      reviewStatus,
    );
  }
  assert.equal(
    selectClientSdkLocalizedPage({
      path: '/sdk/wasm/overview',
      locale: 'zh',
      manualPage,
      packagedPage: undefined,
      pendingPage,
    }),
    manualPage,
  );
  assert.equal(
    selectClientSdkLocalizedPage({
      path: '/platform-api/user/overview',
      locale: 'zh',
      manualPage,
      packagedPage: undefined,
      pendingPage,
    }),
    manualPage,
  );
});
