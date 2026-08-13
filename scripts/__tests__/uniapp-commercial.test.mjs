import assert from 'node:assert/strict';
import test from 'node:test';

import {
  enterpriseBadgeMarkupPatternSource,
  getPageCommercialInfo,
  getPageCommercialNames,
  isEnterpriseBadgeMarkup,
} from '../../src/lib/client-sdk-commercial.ts';

test('recognizes every commercial badge label used by client SDK content', () => {
  for (const label of ['商业版', '商业版字段', 'Enterprise', 'Commercial', 'Commercial field']) {
    const markup = `<span className="enterprise-field-badge">${label}</span>`;
    assert.equal(isEnterpriseBadgeMarkup(markup), true, label);
    assert.match(markup, new RegExp(`^${enterpriseBadgeMarkupPatternSource}$`));
  }

  assert.equal(
    isEnterpriseBadgeMarkup('<span className="enterprise-field-badge">Unknown</span>'),
    false,
  );
});

test('derives uni-app commercial pages from the Private documentation ownership manifest', () => {
  assert.equal(
    getPageCommercialInfo('/sdk/uniapp/calling/managing-calls/start-single-call').kind,
    'full',
  );
  assert.equal(
    getPageCommercialInfo('/sdk/uniapp/message/sending-messages/send-message').kind,
    'none',
  );
  assert.equal(
    getPageCommercialInfo('/sdk/uniapp/getting-started/update-token-and-observe-sdk-session').kind,
    'full',
  );
  assert.ok(
    getPageCommercialNames('/sdk/uniapp/message/composing-messages/translate-text-and-messages').has(
      'translateText',
    ),
  );
});

test('keeps Public APIs with Harmony-only restrictions outside commercial classification', () => {
  const info = getPageCommercialInfo(
    '/sdk/uniapp/getting-started/handle-app-lifecycle-and-device-state',
  );
  assert.ok(info.openSourceMethods.includes('updateFcmToken'));
  assert.equal(info.methods.includes('updateFcmToken'), false);
});
