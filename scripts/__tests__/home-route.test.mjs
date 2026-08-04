import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const routes = JSON.parse(readFileSync('src/generated/routes.json', 'utf8'));
const structure = JSON.parse(readFileSync('data/structure/chat-pages.json', 'utf8'));

test('keeps the site home outside the dynamic documentation route manifest', () => {
  assert.equal(
    routes.some((route) => route.path === '/docs/chat'),
    false,
  );
  assert.equal(
    structure.some((page) => page.openimPath === '/docs/chat'),
    false,
  );
});

test('assigns the retained home content sources to the root route', () => {
  const en = readFileSync('content/docs/chat/index.mdx', 'utf8');
  const zh = readFileSync('content/zh/docs/chat.mdx', 'utf8');

  assert.match(en, /^sourcePath: '\/'$/m);
  assert.match(zh, /^sourcePath: '\/'$/m);
});

test('keeps every internal home-page link on an active route', () => {
  const activePaths = new Set(routes.map((route) => route.path));
  const sources = [
    readFileSync('src/components/mdx/landing.tsx', 'utf8'),
    readFileSync('content/docs/chat/index.mdx', 'utf8'),
    readFileSync('content/zh/docs/chat.mdx', 'utf8'),
  ];
  const internalLinks = sources.flatMap((source) =>
    [...source.matchAll(/(?:href:\s*|(?:primary|secondary)Href=)["'](\/[^"']+)["']/g)].map(
      (match) => match[1],
    ),
  );

  assert.deepEqual(
    [...new Set(internalLinks)].filter((href) => href !== '/' && !activePaths.has(href)),
    [],
  );
  assert.equal(
    internalLinks.some(
      (href) =>
        href.startsWith('/docs/chat/') ||
        href.startsWith('/sdk/v4/') ||
        href.startsWith('/platform-api/v3/'),
    ),
    false,
  );
});
