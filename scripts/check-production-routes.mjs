import { spawn } from 'node:child_process';
import { readFile } from 'node:fs/promises';
import process from 'node:process';

const audit = JSON.parse(
  await readFile(new URL('../data/structure/uniapp-content-audit.json', import.meta.url), 'utf8'),
);

const routes = audit.pages.flatMap((page) => {
  const paths = [];
  if (page.locales?.en?.reviewStatus === 'published') paths.push(page.currentPath);
  if (page.locales?.zh?.reviewStatus === 'published') paths.push(`/zh${page.currentPath}`);
  return paths;
});

if (routes.length === 0) throw new Error('No published uni-app routes found for production smoke.');

const externalBaseURL = process.env.OPENIM_DOCS_BASE_URL;
const port = Number(process.env.OPENIM_DOCS_SMOKE_PORT ?? 31000 + (process.pid % 1000));
const baseURL = externalBaseURL ?? `http://127.0.0.1:${port}`;
let server;
let serverOutput = '';

if (!externalBaseURL) {
  server = spawn(process.execPath, ['.next/standalone/server.js'], {
    env: { ...process.env, HOSTNAME: '127.0.0.1', PORT: String(port) },
    stdio: ['ignore', 'pipe', 'pipe'],
  });

  server.stdout.on('data', (chunk) => {
    serverOutput += chunk.toString();
  });
  server.stderr.on('data', (chunk) => {
    serverOutput += chunk.toString();
  });

  try {
    await waitUntilReady(baseURL, server);
  } catch (error) {
    throw new Error(`${error.message}\n${serverOutput.trim()}`);
  }
}

try {
  const failures = [];
  await mapConcurrent(routes, 6, async (route) => {
    try {
      const response = await fetch(`${baseURL}${route}`, { redirect: 'manual' });
      if (response.status !== 200) failures.push(`${response.status} ${route}`);
      await response.arrayBuffer();
    } catch (error) {
      failures.push(`request failed ${route}: ${error instanceof Error ? error.message : error}`);
    }
  });

  if (failures.length > 0) {
    throw new Error(
      `Production route smoke failed for ${failures.length}/${routes.length} uni-app routes:\n${failures.join('\n')}\n${serverOutput.trim()}`,
    );
  }

  console.log(`Production route smoke passed for ${routes.length} published uni-app routes.`);
} finally {
  if (server && server.exitCode === null) {
    server.kill('SIGTERM');
    await Promise.race([
      new Promise((resolve) => server.once('exit', resolve)),
      new Promise((resolve) => setTimeout(resolve, 2_000)),
    ]);
  }
}

async function waitUntilReady(url, child) {
  const deadline = Date.now() + 20_000;
  while (Date.now() < deadline) {
    if (child.exitCode !== null) throw new Error(`Production server exited with ${child.exitCode}.`);
    try {
      const response = await fetch(url, { redirect: 'manual' });
      await response.arrayBuffer();
      return;
    } catch {
      await new Promise((resolve) => setTimeout(resolve, 100));
    }
  }
  throw new Error(`Production server did not become ready at ${url}.`);
}

async function mapConcurrent(items, concurrency, fn) {
  let cursor = 0;
  await Promise.all(
    Array.from({ length: Math.min(concurrency, items.length) }, async () => {
      while (cursor < items.length) {
        const index = cursor;
        cursor += 1;
        await fn(items[index]);
      }
    }),
  );
}
