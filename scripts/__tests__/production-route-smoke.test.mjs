import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const sourceConfig = readFileSync(new URL('../../source.config.ts', import.meta.url), 'utf8');
const packageJson = JSON.parse(
  readFileSync(new URL('../../package.json', import.meta.url), 'utf8'),
);
const smokeScript = readFileSync(
  new URL('../check-production-routes.mjs', import.meta.url),
  'utf8',
);

test('maps UTS examples to a supported Shiki grammar', () => {
  assert.match(sourceConfig, /langs:\s*\['typescript'\]/);
  assert.match(sourceConfig, /langAlias:\s*\{\s*uts:\s*'typescript'\s*\}/);
});

test('production build requests every published uni-app route', () => {
  assert.match(packageJson.scripts.postbuild, /check-production-routes\.mjs/);
  assert.match(smokeScript, /uniapp-content-audit\.json/);
  assert.match(smokeScript, /reviewStatus === 'published'/);
  assert.match(smokeScript, /response\.status !== 200/);
});
