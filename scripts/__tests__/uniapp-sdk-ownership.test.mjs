import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

import { validateUniAppSdkOwnership } from '../lib/uniapp-sdk-ownership.mjs';

const manifest = readJson('data/structure/uniapp-sdk-doc-manifest.json');
const ownership = readJson('data/structure/uniapp-api-ownership.json');
const typeOwnership = readJson('data/structure/uniapp-type-ownership.json');
const sidebar = readJson('data/structure/uniapp-sidebar.json');
const audit = readJson('data/structure/uniapp-content-audit.json');

test('owns every uni-app operation, subscription, event control, event, type, and constant once', () => {
  const result = validateUniAppSdkOwnership({ manifest, ownership, typeOwnership, sidebar });

  assert.deepEqual(result, {
    operations: 162,
    eventSubscriptions: 81,
    eventControls: 2,
    events: 81,
    types: 237,
    constants: 109,
  });
});

test('keeps commercial and platform support metadata sourced from the frozen manifest', () => {
  const commercialOperations = ownership.callables.filter(
    (item) => item.role === 'operation' && item.edition === 'commercial',
  );
  const commercialSubscriptions = ownership.callables.filter(
    (item) => item.role === 'event-subscription' && item.edition === 'commercial',
  );
  const commercialTypes = typeOwnership.types.filter((item) => item.edition === 'commercial');

  assert.equal(commercialOperations.length, 51);
  assert.equal(commercialSubscriptions.length, 33);
  assert.equal(commercialTypes.length, 77);
  assert.equal(
    ownership.callables.find((item) => item.name === 'updateFcmToken').edition,
    'public',
  );
  assert.equal(
    ownership.events.find((item) => item.name === 'onSDKSessionChanged').synthetic,
    true,
  );
  assert.equal(
    ownership.callables.some((item) => item.name === 'getArchivedConversationList'),
    false,
  );
});

test('keeps every callable and event on the same unique owner page in the content audit', () => {
  const auditByPath = new Map(audit.pages.map((page) => [page.currentPath, page]));
  const expectedCallables = new Map();
  const expectedEvents = new Map();

  for (const item of ownership.callables) {
    const names = expectedCallables.get(item.page) ?? [];
    names.push(item.name);
    expectedCallables.set(item.page, names);
  }
  for (const item of ownership.events) {
    const names = expectedEvents.get(item.page) ?? [];
    names.push(item.name);
    expectedEvents.set(item.page, names);
  }

  for (const [page, names] of expectedCallables) {
    assert.deepEqual(auditByPath.get(page)?.sdkMethods, names.sort());
  }
  for (const [page, names] of expectedEvents) {
    assert.deepEqual(auditByPath.get(page)?.sdkEvents, names.sort());
  }
});

function readJson(path) {
  return JSON.parse(readFileSync(path, 'utf8'));
}
