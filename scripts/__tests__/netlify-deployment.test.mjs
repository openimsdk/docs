import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import test from 'node:test';

test('keeps the Netlify build and publish settings in version control', () => {
  const config = readFileSync('netlify.toml', 'utf8');

  assert.match(config, /^\s*command = "pnpm build"$/m);
  assert.match(config, /^\s*publish = "\.next"$/m);
  assert.match(config, /^\s*NODE_VERSION = "22\.16\.0"$/m);
  assert.equal(existsSync('pnpm-lock.yaml'), true);
  assert.equal(existsSync('package-lock.json'), false);
});

test('uses the Netlify Next.js runtime instead of the self-hosted standalone output', () => {
  const nextConfig = readFileSync('next.config.mjs', 'utf8');
  const prepareStandalone = readFileSync('scripts/prepare-standalone.mjs', 'utf8');

  assert.match(nextConfig, /process\.env\.VERCEL \|\| process\.env\.NETLIFY/);
  assert.match(prepareStandalone, /process\.env\.VERCEL \|\| process\.env\.NETLIFY/);
});
