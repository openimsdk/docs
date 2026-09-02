import { execFile } from 'node:child_process';
import { createHash } from 'node:crypto';
import { readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { promisify } from 'node:util';

import { getClientSdkPlatform } from './lib/client-sdk-platforms.mjs';
import { getClientSdkSidebarPaths } from './lib/client-sdk-sidebar.mjs';

const root = process.cwd();
const execFileAsync = promisify(execFile);
const platform = getClientSdkPlatform('harmony');
const sourceRoot = process.env.OPENIM_HARMONY_SDK_ROOT ?? resolve(root, '..', 'openim-sdk-harmony');
const sourceCommit = '77bd15d59c9f91118ba24cbb51f2fd72195ff465';
const sourceHashes = {
  types: '9f56e597777dbb1e4343c21a5cac61b4ad783a8117947536ca94215537ef3aac',
  runtime: '66071dfae66976864a7b69d1c8ff6b3aec0e98ffdc302c3946689d5243ab1dd8',
  entry: '0cafa83fc007f17db459ba81dac5451831d9c8e436c6a42e51550c517c23d89b',
  har: '7966155310dafcc3faff18fa2b1ce76c881c05d3660e917be792e79dd43cbd0a',
};
const intentionallyUndocumentedMethods = new Set([
  'invoke',
  'getFriends',
  'getAllConversationList',
  'deleteMessage',
  'createTargetedGroupMessage',
  'networkStatusChanged',
  'setAppBackgroundStatus',
]);

async function main() {
  await verifyPinnedSource();
  const sidebar = await readJson(platform.sidebarPath);
  const previousAudit = await readJson(platform.auditPath);
  const activePaths = new Set(getClientSdkSidebarPaths(sidebar));
  const sdkTypes = await readFile(resolve(sourceRoot, 'imsdk/src/main/ets/sdk-types.ets'), 'utf8');
  const sourceMethods = extractPromiseMethods(sdkTypes);
  const sourceEvents = extractSourceEvents(sdkTypes);
  const documentedMethods = new Set();
  const documentedEvents = new Set();
  const pages = [];

  for (const currentPath of getClientSdkSidebarPaths(sidebar)) {
    const relativePath = currentPath.slice(`${platform.routePrefix}/`.length);
    const source = await readFile(
      resolve(root, platform.manualRoot, `${relativePath}.mdx`),
      'utf8',
    );
    const examples = extractArktsExamples(source).join('\n');
    const sdkMethods = uniqueSorted(
      [...examples.matchAll(/\bsdk\.([A-Za-z][A-Za-z0-9_]*)\s*\(/g)]
        .map((match) => match[1])
        .filter((name) => name !== 'on'),
    );
    const sdkEvents = uniqueSorted(
      [...examples.matchAll(/OpenIMSDKEvent\.(EventOn[A-Za-z0-9_]+)/g)].map((match) => match[1]),
    );

    for (const method of sdkMethods) {
      if (!sourceMethods.has(method) && method !== 'setLogCallback') {
        throw new Error(`${currentPath}: unknown HarmonyOS SDK method ${method}`);
      }
      documentedMethods.add(method);
    }
    for (const event of sdkEvents) {
      if (!sourceEvents.has(event)) {
        throw new Error(`${currentPath}: unknown HarmonyOS SDK event ${event}`);
      }
      documentedEvents.add(event);
    }

    pages.push({
      currentPath,
      targetPath: currentPath,
      sourceKind: 'openim-specific',
      disposition: 'adapt',
      openimSources: [
        `local-source:openim-sdk-harmony/tree/${sourceCommit}/imsdk/src/main/ets/sdk-types.ets`,
        `sha256:${sourceHashes.types}`,
        `sha256:${sourceHashes.runtime}`,
        `sha256:${sourceHashes.entry}`,
        `sha256:${sourceHashes.har}`,
      ],
      sdkMethods,
      sdkEvents,
      locales: {
        zh: {
          reviewStatus: 'api-verified',
          reviewer: 'Codex',
          reviewedAt: '2026-08-31',
          exampleVerification: {
            status: 'pending',
            evidence: [
              `openim-sdk-harmony ${sourceCommit} sdk-types.ets`,
              `openim-sdk-harmony ${sourceCommit} sdk-runtime.ets`,
            ],
            reason:
              'The Chinese body and ArkTS examples were manually reviewed against the pinned HarmonyOS declarations and runtime; device execution remains pending.',
          },
        },
        en: {
          reviewStatus: 'deferred',
          reviewer: null,
          reviewedAt: null,
          exampleVerification: { status: 'pending', evidence: [], reason: null },
        },
      },
      redirectTo: null,
      notes: [
        '2026-08-31：已逐页人工核对 HarmonyOS SDK 公开声明、运行时实现、参数、返回结果、事件和 ArkTS 示例。',
      ],
    });
  }

  const missingMethods = [...sourceMethods].filter(
    (name) => !documentedMethods.has(name) && !intentionallyUndocumentedMethods.has(name),
  );
  const missingEvents = [...sourceEvents].filter((name) => !documentedEvents.has(name));
  if (missingMethods.length > 0) {
    throw new Error(`Undocumented public HarmonyOS SDK methods: ${missingMethods.join(', ')}`);
  }
  if (missingEvents.length > 0) {
    throw new Error(`Undocumented public HarmonyOS SDK events: ${missingEvents.join(', ')}`);
  }

  const omittedPages = (previousAudit.pages ?? []).filter(
    (page) => page.disposition === 'omit' && !activePaths.has(page.currentPath),
  );
  const audit = {
    schemaVersion: 1,
    sources: {
      harmonySdk: {
        repository: 'local-source:openim-sdk-harmony',
        tag: platform.sdkTag,
        commit: sourceCommit,
      },
    },
    pages: [...pages, ...omittedPages],
  };
  await writeFile(resolve(root, platform.auditPath), `${JSON.stringify(audit, null, 2)}\n`);
  console.log(
    `Wrote ${platform.auditPath}: ${pages.length} pages, ${documentedMethods.size} methods, ${documentedEvents.size} events.`,
  );
}

async function verifyPinnedSource() {
  const { stdout } = await execFileAsync('git', ['-C', sourceRoot, 'rev-parse', 'HEAD']);
  const actualCommit = stdout.trim();
  if (actualCommit !== sourceCommit) {
    throw new Error(
      `HarmonyOS SDK source drift: expected ${sourceCommit}, received ${actualCommit}`,
    );
  }

  const files = {
    types: 'imsdk/src/main/ets/sdk-types.ets',
    runtime: 'imsdk/src/main/ets/sdk-runtime.ets',
    entry: 'imsdk/Index.d.ets',
    har: 'imsdk/build/default/outputs/default/imsdk.har',
  };
  for (const [key, relativePath] of Object.entries(files)) {
    const bytes = await readFile(resolve(sourceRoot, relativePath));
    const actualHash = createHash('sha256').update(bytes).digest('hex');
    if (actualHash !== sourceHashes[key]) {
      throw new Error(
        `HarmonyOS SDK source drift in ${relativePath}: expected ${sourceHashes[key]}, received ${actualHash}`,
      );
    }
  }
}

function extractPromiseMethods(source) {
  const body = source.match(/export interface OpenIMSDK \{([\s\S]*?)\n\}/)?.[1];
  if (!body) throw new Error('Unable to find the OpenIMSDK interface.');
  return new Set(
    [...body.matchAll(/^\s{2}([A-Za-z][A-Za-z0-9_]*)[^\n]*Promise</gm)].map((match) => match[1]),
  );
}

function extractSourceEvents(source) {
  return new Set(
    [...source.matchAll(/^\s{2}(EventOn[A-Za-z0-9_]+)\s*=/gm)].map((match) => match[1]),
  );
}

function extractArktsExamples(source) {
  return [...source.matchAll(/```ts\n([\s\S]*?)\n```/g)].map((match) => match[1]);
}

function uniqueSorted(values) {
  return [...new Set(values)].sort((left, right) => left.localeCompare(right));
}

async function readJson(path) {
  return JSON.parse(await readFile(resolve(root, path), 'utf8'));
}

await main();
