import { execFile as execFileCallback } from 'node:child_process';
import { createHash } from 'node:crypto';
import { mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { dirname, resolve } from 'node:path';
import { pathToFileURL, fileURLToPath } from 'node:url';
import { promisify } from 'node:util';

import ts from 'typescript';

const execFile = promisify(execFileCallback);
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');

export function extractSdkApi(sdkDeclaration, eventDeclaration) {
  const sdkSource = ts.createSourceFile(
    'sdk/index.d.ts',
    sdkDeclaration,
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TS,
  );
  const eventSource = ts.createSourceFile(
    'constant/index.d.ts',
    eventDeclaration,
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TS,
  );
  const methods = [];
  const events = [];

  walk(sdkSource, (node) => {
    if (
      !ts.isClassDeclaration(node) ||
      !node.name ||
      !['WasmSdk', 'SDK'].includes(node.name.text)
    ) {
      return;
    }
    for (const member of node.members) {
      if ((!ts.isPropertyDeclaration(member) && !ts.isMethodDeclaration(member)) || !member.type) {
        continue;
      }
      const name = propertyName(member.name);
      if (!name || name.startsWith('_')) continue;
      const signature = ts.isPropertyDeclaration(member)
        ? `${name}: ${member.type.getText(sdkSource)}`.replace(/\s+/g, ' ').trim()
        : member.getText(sdkSource).replace(/;$/, '').replace(/\s+/g, ' ').trim();
      methods.push({
        name,
        signature,
        deprecated: ts.getJSDocDeprecatedTag(member) !== undefined,
      });
    }
  });

  walk(eventSource, (node) => {
    if (!ts.isEnumDeclaration(node) || node.name.text !== 'SdkEvent') return;
    for (const member of node.members) {
      const name = propertyName(member.name);
      if (!name || !member.initializer || !ts.isStringLiteral(member.initializer)) continue;
      events.push({ name, value: member.initializer.text });
    }
  });

  return {
    methods: methods.sort((a, b) => a.name.localeCompare(b.name)),
    events: events.sort((a, b) => a.name.localeCompare(b.name)),
  };
}

export async function syncWasmSdkApi({
  auditPath = resolve(root, 'data/structure/wasm-content-audit.json'),
  outputPath = resolve(root, 'data/structure/wasm-sdk-api.json'),
  fetchImpl = fetch,
} = {}) {
  const audit = JSON.parse(await readFile(auditPath, 'utf8'));
  const source = audit.sources?.wasmSdk;
  if (!source?.version || !source?.integrity) {
    throw new Error('Audit manifest must pin sources.wasmSdk.version and integrity.');
  }

  const tarball = `https://registry.npmjs.org/@openim/wasm-client-sdk/-/wasm-client-sdk-${source.version}.tgz`;
  const response = await fetchImpl(tarball, {
    headers: { 'User-Agent': 'openim-chat-docs-next' },
  });
  if (!response.ok) throw new Error(`Failed to download ${tarball}: ${response.status}`);

  const archive = Buffer.from(await response.arrayBuffer());
  const actualIntegrity = `sha512-${createHash('sha512').update(archive).digest('base64')}`;
  if (actualIntegrity !== source.integrity) {
    throw new Error(`WASM SDK integrity mismatch: expected ${source.integrity}, got ${actualIntegrity}`);
  }

  const temporaryRoot = await mkdtemp(resolve(tmpdir(), 'openim-wasm-api-'));
  try {
    const archivePath = resolve(temporaryRoot, 'sdk.tgz');
    await writeFile(archivePath, archive);
    await execFile('tar', [
      '-xzf',
      archivePath,
      '-C',
      temporaryRoot,
      'package/lib/sdk/index.d.ts',
      'package/lib/constant/index.d.ts',
    ]);

    const [sdkDeclaration, eventDeclaration] = await Promise.all([
      readFile(resolve(temporaryRoot, 'package/lib/sdk/index.d.ts'), 'utf8'),
      readFile(resolve(temporaryRoot, 'package/lib/constant/index.d.ts'), 'utf8'),
    ]);
    const api = extractSdkApi(sdkDeclaration, eventDeclaration);
    const output = {
      package: source.package,
      version: source.version,
      tarball,
      integrity: source.integrity,
      methods: api.methods,
      events: api.events,
    };
    await writeFile(outputPath, `${JSON.stringify(output, null, 2)}\n`, 'utf8');
    return output;
  } finally {
    await rm(temporaryRoot, { recursive: true, force: true });
  }
}

function walk(node, visit) {
  visit(node);
  node.forEachChild((child) => walk(child, visit));
}

function propertyName(name) {
  if (ts.isIdentifier(name) || ts.isStringLiteral(name) || ts.isNumericLiteral(name)) {
    return name.text;
  }
  return undefined;
}

const invokedPath = process.argv[1] ? pathToFileURL(resolve(process.argv[1])).href : undefined;
if (invokedPath === import.meta.url) {
  syncWasmSdkApi()
    .then((output) => {
      console.log(
        `Wrote WASM SDK API snapshot (${output.methods.length} methods, ${output.events.length} events).`,
      );
    })
    .catch((error) => {
      console.error(error instanceof Error ? error.message : error);
      process.exitCode = 1;
    });
}
