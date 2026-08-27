import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

test('publishes immutable production images after verification', () => {
  const workflow = readFileSync('.github/workflows/ci.yml', 'utf8');

  assert.match(workflow, /publish-image:[\s\S]*needs: verify/);
  assert.match(workflow, /ghcr\.io\/openimsdk\/docs:sha-\$\{\{ github\.sha \}\}/);
  assert.match(workflow, /NEXT_PUBLIC_SITE_URL=https:\/\/docs\.openim\.io/);
  assert.match(
    workflow,
    /IMAGE: ghcr\.io\/openimsdk\/docs@\$\{\{ needs\.publish-image\.outputs\.digest \}\}/,
  );
  assert.match(workflow, /environment:\s+name: production/);
});

test('keeps the production deployment independent from Netlify', () => {
  const packageJson = JSON.parse(readFileSync('package.json', 'utf8'));
  const netlifyConfig = readFileSync('netlify.toml', 'utf8');
  const nextConfig = readFileSync('next.config.mjs', 'utf8');
  const prepareStandalone = readFileSync('scripts/prepare-standalone.mjs', 'utf8');

  assert.match(netlifyConfig, /^\[build\]\n\s+ignore = "exit 0"$/m);
  assert.doesNotMatch(netlifyConfig, /^\s*(command|publish)\s*=/m);
  assert.doesNotMatch(netlifyConfig, /^\[\[plugins\]\]$/m);
  assert.equal(packageJson.devDependencies['@netlify/plugin-nextjs'], undefined);
  assert.doesNotMatch(nextConfig, /NETLIFY/);
  assert.doesNotMatch(prepareStandalone, /NETLIFY/);
});

test('keeps deployment access restricted and validates a candidate before switching', () => {
  const entry = readFileSync('deploy/openim-docs/openim-docs-deploy-entry', 'utf8');
  const deploy = readFileSync('deploy/openim-docs/deploy-openim-docs.sh', 'utf8');
  const provision = readFileSync('deploy/openim-docs/provision.sh', 'utf8');

  assert.match(entry, /SSH_ORIGINAL_COMMAND/);
  assert.match(entry, /sudo -n \/usr\/local\/sbin\/deploy-openim-docs/);
  assert.match(deploy, /ghcr\\\.io\/openimsdk\/docs@sha256:/);
  assert.match(deploy, /another deployment is already running/);
  assert.match(deploy, /\/api\/health/);
  assert.match(deploy, /nginx -t/);
  assert.match(deploy, /systemctl reload nginx/);
  assert.match(provision, /openim-docs-deploy/);
  assert.match(provision, /visudo -cf/);
});

test('builds a revision-aware standalone image with a health check', () => {
  const dockerfile = readFileSync('Dockerfile', 'utf8');
  const nextConfig = readFileSync('next.config.mjs', 'utf8');
  const healthRoute = readFileSync('app/api/health/route.ts', 'utf8');
  const nginxConfig = readFileSync('deploy/openim-docs/nginx-https.conf', 'utf8');

  assert.match(dockerfile, /ARG NEXT_PUBLIC_SITE_URL=https:\/\/docs\.openim\.io/);
  assert.match(dockerfile, /HEALTHCHECK[\s\S]*\/api\/health/);
  assert.match(nextConfig, /deploymentId: deploymentVersion/);
  assert.match(nextConfig, /generateBuildId: async \(\) => deploymentVersion/);
  assert.match(nextConfig, /poweredByHeader: false/);
  assert.match(nginxConfig, /server_tokens off/);
  assert.match(healthRoute, /status: 'ok'/);
  assert.match(healthRoute, /'Cache-Control': 'no-store'/);
});
