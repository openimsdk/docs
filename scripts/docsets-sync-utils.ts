import { spawnSync } from 'node:child_process';
import {
  appendFile,
  lstat,
  mkdir,
  readFile,
  realpath,
  rm,
  stat,
  writeFile,
} from 'node:fs/promises';
import { dirname, join, relative, resolve } from 'node:path';
import { z } from 'zod';
import { docsetsDataSchema, type DocsetRecord, type DocsetsData } from '../src/types/docs.js';
import { lintApiOpenApiDocuments } from './openapi.js';

const repoRoot = process.cwd();
const manifestPath = resolve(repoRoot, 'data/structure/docsets.json');
const outputDir = resolve(repoRoot, '.docsets-sync');
const upstreamsDir = join(outputDir, 'upstreams');
const diffsDir = join(outputDir, 'diffs');
const summaryPath = join(outputDir, 'summary.json');
const emptyTreeSha = '4b825dc642cb6eb9a060e54bf8d69288fbee4904';
const [command, ...commandArgs] = process.argv.slice(2);

// Persisted contracts and stage-specific models
const syncPlanRecordSchema = z.strictObject({
  path: z.string().min(1),
  targetRef: z.string().min(1),
});
const skippedRecordSchema = z.strictObject({
  path: z.string().min(1),
  reason: z.string().min(1),
});
const syncSummarySchema = z.strictObject({
  changed: z.boolean(),
  records: z.array(syncPlanRecordSchema),
  skipped: z.array(skippedRecordSchema),
});

type SyncPlanRecord = z.infer<typeof syncPlanRecordSchema>;
type SkippedRecord = z.infer<typeof skippedRecordSchema>;
type SyncSummary = z.infer<typeof syncSummarySchema>;

interface CollectedSyncRecord extends SyncPlanRecord {
  sourceSha: string;
  targetSha: string;
  stat: string;
}

interface VersionParts {
  major: number;
  minor: number;
  patch: number;
  suffix: string;
  build: number;
  revision: number;
}

interface MatchedTag {
  tag: string;
  version: VersionParts;
}

// CLI
await run().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : String(error));
  process.exitCode = 1;
});

async function run(): Promise<void> {
  if (command === '--help' || command === '-h') {
    console.log(renderUsage());
  } else if (command === 'diff') {
    await collectDocsetDiffs(readDocsetPath(commandArgs));
  } else if (command === 'baseline') {
    if (commandArgs.length > 0) throw new Error(`baseline takes no arguments.\n${renderUsage()}`);
    await updateDocsetBaselines();
  } else if (command === 'verify-paths') {
    if (commandArgs.length > 0)
      throw new Error(`verify-paths takes no arguments.\n${renderUsage()}`);
    await verifyDocsetPaths();
  } else if (command === 'lint-openapi') {
    if (commandArgs.length > 0)
      throw new Error(`lint-openapi takes no arguments.\n${renderUsage()}`);
    await lintOpenApiDocuments();
  } else {
    throw new Error(`${renderUsage()}\nUnknown docsets sync command: ${command ?? '(missing)'}.`);
  }
}

function renderUsage(): string {
  return [
    'Usage:',
    '  tsx scripts/docsets-sync-utils.ts diff [--path PATH]',
    '  tsx scripts/docsets-sync-utils.ts verify-paths',
    '  tsx scripts/docsets-sync-utils.ts lint-openapi',
    '  tsx scripts/docsets-sync-utils.ts baseline',
  ].join('\n');
}

// Diff collection
async function collectDocsetDiffs(docsetPath: string | null): Promise<void> {
  const { docsets } = await readManifest();

  await rm(outputDir, { recursive: true, force: true });
  await mkdir(upstreamsDir, { recursive: true });
  await mkdir(diffsDir, { recursive: true });

  const records: CollectedSyncRecord[] = [];
  const skipped: SkippedRecord[] = [];
  const selectedDocsets = docsetPath
    ? docsets.filter((docset) => docset.path === docsetPath)
    : docsets;
  if (docsetPath && selectedDocsets.length === 0)
    throw new Error(`Unknown docset path: ${docsetPath}`);

  for (const docset of selectedDocsets) {
    const targetRef = resolveTargetRef(docset);
    if (!targetRef) {
      skipped.push({ path: docset.path, reason: 'no target ref matched' });
      continue;
    }

    const repoDir = join(upstreamsDir, safeName(docset.path));
    await mkdir(repoDir, { recursive: true });
    git(['init', '-q'], repoDir);
    git(['remote', 'add', 'origin', docset.repoUrl], repoDir);

    const targetSha = fetchRef(repoDir, targetRef);
    const sourceSha = docset.sourceRef ? fetchRef(repoDir, docset.sourceRef) : emptyTreeSha;

    if (docset.sourceRef && sourceSha === targetSha) {
      skipped.push({
        path: docset.path,
        reason: `no update (${docset.sourceRef} == ${targetRef})`,
      });
      continue;
    }

    const diffPath = join(diffsDir, `${safeName(docset.path)}.diff`);
    git(['diff', '--binary', `--output=${diffPath}`, sourceSha, targetSha, '--'], repoDir);
    if ((await stat(diffPath)).size === 0) {
      await rm(diffPath, { force: true });
      skipped.push({ path: docset.path, reason: 'ref changed but no file diff was produced' });
      continue;
    }

    records.push({
      path: docset.path,
      targetRef,
      sourceSha,
      targetSha,
      stat: git(['diff', '--stat', sourceSha, targetSha, '--'], repoDir),
    });
  }

  const changed = records.length > 0;
  const summary: SyncSummary = {
    changed,
    records: records.map(({ path, targetRef }) => ({ path, targetRef })),
    skipped,
  };
  await writeFile(summaryPath, `${JSON.stringify(summary, null, 2)}\n`);
  await writeFile(join(outputDir, 'summary.md'), renderSummary(records, skipped, docsets));
  await writeFile(join(outputDir, 'prompt.md'), renderPrompt(records, docsets));
  await writeGitHubOutputs(changed);

  console.log(
    changed ? `Collected ${records.length} upstream diff(s).` : 'No docsets updates found.',
  );
  if (skipped.length > 0) console.log(`Skipped ${skipped.length} docsets item(s).`);
}

// Docset verification and commands
async function verifyDocsetPaths(): Promise<void> {
  const records = await readSyncPlan();
  const baseRef = process.env.GITHUB_SHA || 'HEAD';
  const allowedPaths = records.map((record) => record.path);
  const changedPaths = new Set([
    ...readGitPaths(['diff', '--no-ext-diff', '--name-only', '--no-renames', '-z', baseRef, '--']),
    ...readGitPaths(['ls-files', '--others', '--exclude-standard', '-z']),
  ]);
  const unexpectedPaths = [...changedPaths].filter(
    (path) => !allowedPaths.some((allowedPath) => isPathWithin(path, allowedPath)),
  );

  const missingPaths: string[] = [];
  for (const record of records) {
    if (!(await pathIsDirectory(resolve(repoRoot, record.path)))) {
      missingPaths.push(record.path);
    }
  }
  const violations: string[] = [];
  violations.push(...(await verifyChangedPathContainment(changedPaths)));
  if (unexpectedPaths.length > 0) {
    violations.push(
      `Changed files outside configured docset paths:\n${unexpectedPaths
        .map((path) => `- ${path}`)
        .join('\n')}`,
    );
  }
  if (missingPaths.length > 0) {
    violations.push(
      `Did not produce every configured docset directory:\n${missingPaths
        .map((path) => `- ${path}`)
        .join('\n')}`,
    );
  }
  if (violations.length > 0) {
    throw new Error(`Docsets path verification failed:\n\n${violations.join('\n\n')}`);
  }

  console.log(`Verified ${changedPaths.size} changed file(s) against configured docset paths.`);
}

async function verifyChangedPathContainment(changedPaths: Set<string>): Promise<string[]> {
  const canonicalRoot = await realpath(repoRoot);
  const violations: string[] = [];
  for (const changedPath of changedPaths) {
    let currentPath = repoRoot;
    for (const segment of changedPath.split('/')) {
      currentPath = join(currentPath, segment);
      let info;
      try {
        info = await lstat(currentPath);
      } catch (error) {
        if (isNodeError(error) && error.code === 'ENOENT') break;
        throw error;
      }
      if (info.isSymbolicLink()) {
        violations.push(`Changed path uses a symbolic link: ${changedPath}.`);
        break;
      }
      const canonicalPath = await realpath(currentPath);
      const relativePath = relative(canonicalRoot, canonicalPath);
      if (
        relativePath === '..' ||
        relativePath.startsWith(`..${process.platform === 'win32' ? '\\' : '/'}`)
      ) {
        violations.push(`Changed path resolves outside the repository: ${changedPath}.`);
        break;
      }
    }
  }
  return violations;
}

async function pathIsDirectory(path: string): Promise<boolean> {
  try {
    return (await stat(path)).isDirectory();
  } catch (error) {
    if (isNodeError(error) && error.code === 'ENOENT') return false;
    throw error;
  }
}

async function lintOpenApiDocuments(): Promise<void> {
  await lintApiOpenApiDocuments(repoRoot);
}

function isNodeError(error: unknown): error is NodeJS.ErrnoException {
  return error instanceof Error && 'code' in error;
}

// Persisted sync plan
async function updateDocsetBaselines(): Promise<void> {
  const manifest = await readManifest();
  const records = await readSyncPlan(manifest);

  if (records.length === 0) {
    console.log('No docsets baselines to update.');
    return;
  }

  const docsetsByPath = new Map(manifest.docsets.map((docset) => [docset.path, docset]));
  for (const record of records) {
    const docset = requireDocset(docsetsByPath, record.path);
    docset.sourceRef = record.targetRef;
  }

  await writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);

  console.log(`Updated ${records.length} docsets baseline(s).`);
  for (const record of records) {
    console.log(`- ${record.path}: sourceRef ${record.targetRef}`);
  }
}

async function readManifest(): Promise<DocsetsData> {
  return docsetsDataSchema.parse(JSON.parse(await readFile(manifestPath, 'utf8')));
}

async function readSyncPlan(manifest?: DocsetsData): Promise<SyncPlanRecord[]> {
  const currentManifest = manifest ?? (await readManifest());
  const summary = syncSummarySchema.parse(JSON.parse(await readFile(summaryPath, 'utf8')));
  if (summary.changed !== summary.records.length > 0) {
    throw new Error('Docsets summary changed flag does not match its records.');
  }

  const docsetsByPath = new Map(currentManifest.docsets.map((docset) => [docset.path, docset]));
  const seenPaths = new Set<string>();
  return summary.records.map((record): SyncPlanRecord => {
    if (seenPaths.has(record.path))
      throw new Error(`Duplicate docset path in summary: ${record.path}`);
    seenPaths.add(record.path);
    if (!docsetsByPath.has(record.path))
      throw new Error(`Unknown docset path in summary: ${record.path}`);
    return record;
  });
}

// Generated summaries and prompts
function readDocsetPath(values: string[]): string | null {
  const args = values[0] === '--' ? values.slice(1) : values;
  if (args.length === 0) return null;
  if (args.length === 2 && args[0] === '--path' && args[1]) return args[1];
  throw new Error(`Invalid diff arguments.\n${renderUsage()}`);
}

async function writeGitHubOutputs(changed: boolean): Promise<void> {
  if (!process.env.GITHUB_OUTPUT) return;
  const outputPath = process.env.GITHUB_OUTPUT;
  await mkdir(dirname(outputPath), { recursive: true });
  await appendFile(
    outputPath,
    [
      `changed=${changed ? 'true' : 'false'}`,
      'summary_path=.docsets-sync/summary.md',
      'prompt_path=.docsets-sync/prompt.md',
      '',
    ].join('\n'),
  );
}

function renderSummary(
  records: CollectedSyncRecord[],
  skipped: SkippedRecord[],
  docsets: DocsetRecord[],
): string {
  const docsetsByPath = new Map(docsets.map((docset) => [docset.path, docset]));
  const lines: string[] = ['# Docsets upstream diff summary', ''];
  if (records.length === 0) {
    lines.push('No configured docsets have upstream changes.');
  } else {
    for (const record of records) {
      const docset = requireDocset(docsetsByPath, record.path);
      lines.push(`## ${record.path}`, '');
      lines.push(`- Repo: ${docset.repoUrl}`);
      lines.push(`- Path: ${docset.path}`);
      lines.push(`- Source: ${renderSourceRef(docset)} (${record.sourceSha})`);
      lines.push(`- Target: ${record.targetRef} (${record.targetSha})`);
      lines.push(`- Target tag pattern: ${docset.targetTagPattern}`);
      lines.push(`- Diff: ${diffRelativePath(record.path)}`);
      lines.push(`- Stat: ${readStatSummary(record.stat)}`, '');
    }
  }
  if (skipped.length > 0) {
    lines.push('## Skipped', '');
    for (const item of skipped) lines.push(`- ${item.path}: ${item.reason}`);
    lines.push('');
  }
  return `${lines.join('\n')}\n`;
}

function renderPrompt(records: SyncPlanRecord[], docsets: DocsetRecord[]): string {
  const docsetsByPath = new Map(docsets.map((docset) => [docset.path, docset]));
  const lines: string[] = [
    '# Update synced docsets',
    '',
    'Apply all relevant upstream changes to each docset target directory listed below.',
    '',
    'Rules:',
    '- Read each complete diff and update every affected file; do not stop after representative changes.',
    '- Spawn exactly one subagent for every docset listed below and run those docset subagents in parallel. Give each subagent exclusive write ownership of its target directory.',
    '- Wait for every docset subagent to finish. The root agent must review every subagent result and the combined git diff before running final verification.',
    '- If subagent collaboration tools are unavailable or any docset subagent fails, do not fall back to a partial single-agent update. Stop and report the failure clearly.',
    "- Edit files only within that docset's target directory. Do not edit other docsets, generated files, data/structure/docsets.json, or repository configuration.",
    '- Inspect the existing target directory and repository conventions, then follow the docset instructions below.',
    '- If the target directory is missing, create it only when the instructions and upstream source provide enough information. Otherwise fail the docset; never invent content.',
    '- Keep the current information architecture unless the upstream diff requires a change.',
    '- Use only facts supported by the target upstream source. Do not invent APIs, signatures, parameters, examples, or compatibility claims.',
    '- Before finishing, verify every listed docset is complete. Do not leave a partial update.',
    '',
    'Docsets:',
    '',
  ];
  for (const record of records) {
    const docset = requireDocset(docsetsByPath, record.path);
    lines.push(`## ${record.path}`);
    lines.push(`- Target directory: ${docset.path}`);
    lines.push(`- Target source: ${docset.repoUrl} at ${record.targetRef}`);
    lines.push(`- Diff: ${diffRelativePath(record.path)}`);
    lines.push('- Instructions:');
    lines.push(docset.instructions, '');
  }
  return `${lines.join('\n')}\n`;
}

function renderSourceRef(docset: DocsetRecord): string {
  return docset.sourceRef ?? 'initial import (empty baseline)';
}

function requireDocset(docsetsByPath: Map<string, DocsetRecord>, path: string): DocsetRecord {
  const docset = docsetsByPath.get(path);
  if (!docset) throw new Error(`Unknown docset path: ${path}`);
  return docset;
}

function diffRelativePath(path: string): string {
  return relative(repoRoot, join(diffsDir, `${safeName(path)}.diff`));
}

function readStatSummary(statText: string): string {
  return statText.trim().split('\n').at(-1)?.trim() || 'No stat summary was produced.';
}

// Upstream refs and Git helpers
function resolveTargetRef(docset: DocsetRecord): string | null {
  const tag = getLatestMatchingTag(docset.repoUrl, docset.targetTagPattern);
  return tag?.tag ?? null;
}

function getLatestMatchingTag(repoUrl: string, patternText: string): MatchedTag | null {
  let pattern: RegExp;
  try {
    pattern = new RegExp(patternText);
  } catch (error) {
    throw new Error(
      `Invalid targetTagPattern ${JSON.stringify(patternText)}: ${(error as Error).message}`,
    );
  }

  return (
    getRemoteTags(repoUrl)
      .map((tag) => readMatchedTag(tag, pattern, patternText))
      .filter((tag): tag is MatchedTag => Boolean(tag))
      .sort((a, b) => compareVersionParts(b.version, a.version) || a.tag.localeCompare(b.tag))[0] ??
    null
  );
}

function readMatchedTag(tag: string, pattern: RegExp, patternText: string): MatchedTag | null {
  const match = pattern.exec(tag);
  if (!match) return null;
  const groups = match.groups as Record<string, string | undefined> | undefined;
  if (!groups?.major || !groups.minor || !groups.patch) {
    throw new Error(
      `targetTagPattern must provide named capture groups major, minor, and patch: ${patternText}`,
    );
  }

  const version = {
    major: parseVersionGroup(groups.major, 'major', patternText),
    minor: parseVersionGroup(groups.minor, 'minor', patternText),
    patch: parseVersionGroup(groups.patch, 'patch', patternText),
    suffix: groups.suffix ?? '',
    build: groups.build ? parseVersionGroup(groups.build, 'build', patternText) : 0,
    revision: groups.revision ? parseVersionGroup(groups.revision, 'revision', patternText) : 0,
  };

  return { tag, version };
}

function parseVersionGroup(value: string, groupName: string, patternText: string): number {
  const numberValue = Number(value);
  if (!Number.isSafeInteger(numberValue) || numberValue < 0) {
    throw new Error(
      `targetTagPattern group ${groupName} must capture a non-negative integer: ${patternText}`,
    );
  }
  return numberValue;
}

function getRemoteTags(repoUrl: string): string[] {
  return git(['ls-remote', '--tags', '--refs', repoUrl], repoRoot)
    .split('\n')
    .map((line) => line.trim().match(/^[a-f0-9]+\s+refs\/tags\/(.+)$/)?.[1])
    .filter((tag): tag is string => Boolean(tag));
}

function fetchRef(repoDir: string, ref: string): string {
  git(['fetch', '--quiet', '--depth=1', 'origin', ref], repoDir);
  return git(['rev-parse', 'FETCH_HEAD'], repoDir).trim();
}

function git(args: string[], cwd: string): string {
  const result = spawnSync('git', args, { cwd, encoding: 'utf8', maxBuffer: 50 * 1024 * 1024 });
  if (result.status !== 0) {
    throw new Error(`git ${args.join(' ')} failed:\n${result.stderr || result.stdout}`);
  }
  return result.stdout;
}

function readGitPaths(args: string[]): string[] {
  return git(args, repoRoot).split('\0').filter(Boolean);
}

function isPathWithin(path: string, root: string): boolean {
  return path === root || path.startsWith(`${root}/`);
}

function compareVersionParts(a: VersionParts, b: VersionParts): number {
  for (const field of ['major', 'minor', 'patch'] as const) {
    const diff = a[field] - b[field];
    if (diff !== 0) return diff;
  }
  if (a.build !== b.build) return a.build - b.build;
  if (a.revision !== b.revision) return a.revision - b.revision;
  if (Boolean(a.suffix) !== Boolean(b.suffix)) return a.suffix ? 1 : -1;
  return a.suffix.localeCompare(b.suffix);
}

function safeName(value: string): string {
  return value.replace(/[^A-Za-z0-9_.-]+/g, '__');
}
