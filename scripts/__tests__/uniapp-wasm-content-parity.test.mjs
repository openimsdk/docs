import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const source = readFileSync(
  new URL('../check-uniapp-wasm-content-parity.mjs', import.meta.url),
  'utf8',
);

test('uni-app parity audit compares every shared English and Chinese route', () => {
  assert.match(source, /content\/docs\/chat\/sdk/);
  assert.match(source, /content\/zh\/docs\/chat\/sdk/);
  assert.match(source, /path\.relative\(uniappRoot, uniappFile\)/);
  assert.match(source, /content ratio/);
  assert.match(source, /Wasm sections/);
});
