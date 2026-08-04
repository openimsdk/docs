import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import test from 'node:test';

test('keeps local caches and competing lockfiles out of version control', () => {
  const trackedArtifacts = execFileSync(
    'git',
    ['ls-files', '--', '.pnpm-store', '.netlify', 'package-lock.json'],
    { encoding: 'utf8' },
  ).trim();
  const gitignore = readFileSync('.gitignore', 'utf8');

  assert.equal(trackedArtifacts, '');
  assert.match(gitignore, /^\/\.pnpm-store\/$/m);
  assert.match(gitignore, /^\/\.netlify\/$/m);
  assert.doesNotMatch(gitignore, /^src\/generated\//m);
});

test('uses the pnpm lockfile throughout the Docker build', () => {
  const dockerfile = readFileSync('Dockerfile', 'utf8');
  const dockerignore = readFileSync('.dockerignore', 'utf8');
  const vercelignore = readFileSync('.vercelignore', 'utf8');

  assert.match(dockerfile, /COPY package\.json pnpm-lock\.yaml pnpm-workspace\.yaml/);
  assert.match(dockerfile, /pnpm install --frozen-lockfile --ignore-scripts/);
  assert.match(dockerfile, /pnpm source:generate/);
  assert.match(dockerfile, /pnpm build/);
  assert.doesNotMatch(dockerfile, /package-lock\.json|npm ci|npm run/);
  assert.match(dockerignore, /^\.next-local$/m);
  assert.match(dockerignore, /^\.pnpm-store$/m);
  assert.match(dockerignore, /^\.source-local$/m);
  assert.doesNotMatch(dockerignore, /^docs\/?$/m);
  assert.doesNotMatch(vercelignore, /^docs\/?$/m);
});

test('keeps excluded Unity scaffolds and completed migration tools out of the active tree', () => {
  const routes = JSON.parse(readFileSync('src/generated/routes.json', 'utf8'));
  const structure = JSON.parse(readFileSync('data/structure/chat-pages.json', 'utf8'));
  const retiredScriptPattern =
    /^(?:build-wasm-api-ownership|finalize-|localize-|migrate-|reconcile-|record-|refactor-|remove-|split-|sync-openim-android-sdk-english|sync-refactored-|sync-reviewed-|sync-wasm-domain-coverage)/;
  const retiredScripts = readdirSync('scripts').filter((name) => retiredScriptPattern.test(name));

  assert.equal(existsSync('content/docs/chat/sdk/unity'), false);
  assert.equal(existsSync('docs/superpowers'), false);
  assert.equal(
    routes.some((route) => route.platform === 'unity'),
    false,
  );
  assert.equal(
    structure.some((page) => page.platform === 'unity'),
    false,
  );
  assert.equal(structure.length, routes.length);
  assert.deepEqual(retiredScripts, []);
});
