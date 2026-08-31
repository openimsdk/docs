import { readdir, readFile } from 'node:fs/promises';
import { join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import { getClientSdkPlatform } from './lib/client-sdk-platforms.mjs';
import { getClientSdkSidebarPaths } from './lib/client-sdk-sidebar.mjs';

const root = process.cwd();
const reviewStatuses = new Set([
  'structure-only',
  'written',
  'api-verified',
  'example-verified',
  'published',
]);
const englishReviewStatuses = new Set(['deferred', 'published']);

export function validateClientSdkAudit({
  platform,
  sidebar,
  audit,
  manualPages,
  englishPages = new Map(),
}) {
  const errors = [];
  const activePaths = new Set(getClientSdkSidebarPaths(sidebar));
  const auditPaths = new Set();
  const eventOwners = new Map();
  const methodOwners = new Map();
  const sdkSource = audit.sources?.[platform.sdkSourceKey];

  if (audit.schemaVersion !== 1) errors.push('unsupported schemaVersion');
  if (sdkSource?.tag !== platform.sdkTag) errors.push('SDK source tag differs from platform pin');
  if (sdkSource?.commit !== platform.sdkCommit) {
    errors.push('SDK source commit differs from platform pin');
  }

  for (const page of audit.pages ?? []) {
    const path = page.currentPath;
    if (auditPaths.has(path)) errors.push(`${path}: duplicate audit record`);
    auditPaths.add(path);
    if (!path?.startsWith(`${platform.routePrefix}/`))
      errors.push(`${path}: invalid platform path`);
    const isActive = activePaths.has(path);
    if (isActive && page.disposition !== 'adapt') errors.push(`${path}: active page must be adapt`);
    if (!isActive && page.disposition !== 'omit')
      errors.push(`${path}: inactive page must be omit`);
    if (!reviewStatuses.has(page.locales?.zh?.reviewStatus)) {
      errors.push(`${path}: invalid Chinese review status`);
    }
    if (!englishReviewStatuses.has(page.locales?.en?.reviewStatus)) {
      errors.push(`${path}: invalid English review status`);
    }

    const manual = manualPages.get(path);
    const english = englishPages.get(path);
    if (isActive && !manual) errors.push(`${path}: active page is missing manual Chinese MDX`);
    if (!isActive && manual) errors.push(`${path}: omitted page must not have manual Chinese MDX`);
    if (manual && page.locales?.zh?.reviewStatus === 'structure-only') {
      errors.push(`${path}: manual Chinese MDX requires a reviewed audit state`);
    }
    if (manual) validateManualPage({ platform, page, path, source: manual, errors });
    validatePublishedState({ page, path, source: manual, locale: 'zh', errors });
    if (page.locales?.en?.reviewStatus === 'published') {
      if (!english) errors.push(`${path}: published English page is missing manual MDX`);
      if (english) validateManualPage({ platform, page, path, source: english, errors });
      validatePublishedState({ page, path, source: english, locale: 'en', errors });
    }

    if (page.locales?.zh?.reviewStatus !== 'structure-only') {
      if (!(page.openimSources ?? []).some((source) => source.includes(platform.sdkCommit))) {
        errors.push(`${path}: reviewed page requires the pinned SDK commit as evidence`);
      }
    }
    for (const event of page.sdkEvents ?? []) {
      const owners = eventOwners.get(event) ?? [];
      owners.push(path);
      eventOwners.set(event, owners);
    }
    for (const method of page.sdkMethods ?? []) {
      const owners = methodOwners.get(method) ?? [];
      owners.push(path);
      methodOwners.set(method, owners);
    }
  }

  for (const path of activePaths) {
    if (!auditPaths.has(path)) errors.push(`${path}: active path is missing from audit`);
  }
  for (const [event, owners] of eventOwners) {
    if (owners.length > 1) errors.push(`${event}: multiple event owners (${owners.join(', ')})`);
  }
  if (platform.id === 'flutter') {
    for (const method of [
      'setUserListener',
      'setFriendshipListener',
      'setConversationListener',
      'setGroupListener',
      'setMessageListener',
    ]) {
      const owners = methodOwners.get(method) ?? [];
      if (owners.length > 1) {
        errors.push(`${method}: multiple singleton listener owners (${owners.join(', ')})`);
      }
    }
  }
  return errors.sort();
}

function validatePublishedState({ page, path, source, locale, errors }) {
  const state = page.locales?.[locale];
  if (state?.reviewStatus !== 'published') return;
  const label = locale === 'en' ? 'published English' : 'published Chinese';
  if (!state.reviewer?.trim()) errors.push(`${path}: ${label} requires a reviewer`);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(state.reviewedAt ?? '')) {
    errors.push(`${path}: ${label} requires a reviewedAt date`);
  }

  const verification = state.exampleVerification;
  const hasCodeExample = /```[A-Za-z0-9_-]+\n/.test(source ?? '');
  if (hasCodeExample) {
    if (verification?.status !== 'verified' || !(verification.evidence ?? []).some(hasText)) {
      errors.push(`${path}: ${label} code examples require verification evidence`);
    }
  } else if (verification?.status !== 'not-applicable' || !verification.reason?.trim()) {
    errors.push(`${path}: ${label} page without code requires a not-applicable reason`);
  }
}

function hasText(value) {
  return typeof value === 'string' && value.trim().length > 0;
}

function validateManualPage({ platform, page, path, source, errors }) {
  if (path !== `${platform.routePrefix}/logger` && /operationID/i.test(source)) {
    errors.push(`${path}: operationID is only allowed on the logger page`);
  }
  if (/\bOpenIM\.(?:on|off)\s*\(/.test(source)) {
    errors.push(`${path}: native content must not use the WASM listener API`);
  }
  if (platform.id === 'ios') {
    if ((page.sdkMethods?.length ?? 0) > 0 && !source.includes('```objc')) {
      errors.push(`${path}: method page requires an Objective-C example`);
    }
    if (hasInvalidObjCSuccessBlock(source)) {
      errors.push(`${path}: Objective-C onSuccess block is missing its declared parameter`);
    }
    if (/\[OIMManager manager\]\.callbacker/.test(source)) {
      errors.push(`${path}: callbacker must be accessed through the OIMManager class property`);
    }
    if (/\bOIMPlatformIOS\b/.test(source)) {
      errors.push(`${path}: content uses the nonexistent OIMPlatformIOS enum case`);
    }
  } else if (platform.id === 'flutter') {
    const dartExamples = extractDartCodeBlocks(source).join('\n');
    if ((page.sdkMethods?.length ?? 0) > 0 && !source.includes('```dart')) {
      errors.push(`${path}: method page requires a Dart example`);
    }
    if (/\b(?:typingStatusUpdate|setGlobalRecvMessageOpt)\s*\(/.test(dartExamples)) {
      errors.push(`${path}: content uses a Flutter API that throws UnimplementedError`);
    }
    if (/\bmessage\.conversationID\b/.test(dartExamples)) {
      errors.push(`${path}: Flutter Message does not expose conversationID`);
    }
    if (
      /\b(?:remove|unset)(?:User|Friendship|Conversation|Group|Message)Listener\s*\(/.test(
        dartExamples,
      )
    ) {
      errors.push(`${path}: content invents a Flutter listener removal API`);
    }
  } else if (platform.id === 'android') {
    if ((page.sdkMethods?.length ?? 0) > 0 && !source.includes('```java')) {
      errors.push(`${path}: method page requires a Java example`);
    }
  }
}

function hasInvalidObjCSuccessBlock(source) {
  const zeroArgumentSelectors = [
    'signalingReject',
    'signalingCancel',
    'signalingHungUp',
    'signalingSendCustomSignal',
  ];
  const zeroArgumentCall = new RegExp(
    `(?:${zeroArgumentSelectors.join('|')}):[\\s\\S]{0,1200}?onSuccess:\\s*\\^\\s*\\{`,
    'g',
  );
  return /onSuccess:\s*\^\s*\{/.test(source.replace(zeroArgumentCall, ''));
}

function extractDartCodeBlocks(source) {
  return [...source.matchAll(/```dart\n([\s\S]*?)\n```/g)].map((match) => match[1]);
}

async function main() {
  const requested = process.argv.slice(2).filter((value) => !value.startsWith('-'));
  const platformIds =
    requested.length > 0 ? requested : ['android', 'ios', 'flutter', 'react-native'];
  let failed = false;
  for (const platformId of platformIds) {
    const platform = getClientSdkPlatform(platformId);
    const [sidebar, audit, manualPages, englishPages] = await Promise.all([
      readJson(platform.sidebarPath),
      readJson(platform.auditPath),
      readManualPages(platform.manualRoot, platform.routePrefix),
      readManualPages(
        platform.manualRoot.replace(/^content\/zh\//, 'content/'),
        platform.routePrefix,
      ),
    ]);
    const errors = validateClientSdkAudit({
      platform,
      sidebar,
      audit,
      manualPages,
      englishPages,
    });
    if (errors.length > 0) {
      failed = true;
      console.error(`${platformId} SDK audit check failed: ${errors.length}`);
      for (const error of errors.slice(0, 80)) console.error(`  - ${error}`);
    } else {
      console.log(`${platformId} SDK audit check passed (${manualPages.size} active pages).`);
    }
  }
  if (failed) process.exitCode = 1;
}

async function readManualPages(manualRoot, routePrefix) {
  const pages = new Map();
  for (const filePath of await listMdxFiles(resolve(root, manualRoot))) {
    const suffix = relative(resolve(root, manualRoot), filePath)
      .replaceAll('\\', '/')
      .slice(0, -'.mdx'.length);
    pages.set(`${routePrefix}/${suffix}`, await readFile(filePath, 'utf8'));
  }
  return pages;
}

async function listMdxFiles(directory) {
  const files = [];
  let entries;
  try {
    entries = await readdir(directory, { withFileTypes: true });
  } catch (error) {
    if (error?.code === 'ENOENT') return files;
    throw error;
  }
  for (const entry of entries) {
    const entryPath = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...(await listMdxFiles(entryPath)));
    else if (entry.isFile() && entry.name.endsWith('.mdx')) files.push(entryPath);
  }
  return files.sort();
}

async function readJson(relativePath) {
  return JSON.parse(await readFile(resolve(root, relativePath), 'utf8'));
}

const isDirectExecution =
  process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url);

if (isDirectExecution) await main();
