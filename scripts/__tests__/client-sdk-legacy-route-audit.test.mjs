import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

import { buildClientSdkLegacyRedirectEntries } from '../lib/client-sdk-legacy-redirects.mjs';

const audit = readJson('data/structure/client-sdk-legacy-route-audit.json');
const wasmEntries = readJson('data/structure/wasm-legacy-redirects.json');

test('tracks every replaced native SDK route with a deterministic disposition', () => {
  assert.equal(audit.schemaVersion, 1);
  assert.ok(audit.records.length >= 200);

  const sources = new Set();
  for (const record of audit.records) {
    assert.ok(['ios', 'flutter'].includes(record.platform));
    assert.ok(record.source.startsWith(`/sdk/${record.platform}/`));
    assert.ok(!sources.has(record.source), `duplicate legacy route: ${record.source}`);
    sources.add(record.source);

    if (record.disposition === 'merge') {
      assert.ok(
        record.destination === '/sdk/error-codes' ||
          record.destination?.startsWith(`/sdk/${record.platform}/`),
      );
    } else {
      assert.equal(record.disposition, 'remove');
      assert.equal(record.destination, null);
    }
  }
});

test('keeps merged legacy audit records aligned with permanent redirect entries', () => {
  for (const platformId of ['ios', 'flutter']) {
    const redirects = buildClientSdkLegacyRedirectEntries({
      platformId,
      sidebar: readJson(`data/structure/${platformId}-sidebar.json`),
      wasmEntries,
      aliases: readJson(`data/structure/${platformId}-legacy-redirect-aliases.json`),
    });
    const redirectBySource = new Map(
      redirects.map(({ source, destination }) => [source, destination]),
    );
    const platformRecords = audit.records.filter((record) => record.platform === platformId);

    for (const record of platformRecords) {
      if (record.disposition === 'merge') {
        assert.equal(redirectBySource.get(record.source), record.destination, record.source);
      } else {
        assert.ok(!redirectBySource.has(record.source), record.source);
      }
    }
  }
});

function readJson(path) {
  return JSON.parse(readFileSync(path, 'utf8'));
}
