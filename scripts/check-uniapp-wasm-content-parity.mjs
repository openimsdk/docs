import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const localeRoots = [
  ['en', 'content/docs/chat/sdk'],
  ['zh', 'content/zh/docs/chat/sdk'],
];

const failures = [];

for (const [locale, sdkRoot] of localeRoots) {
  const wasmRoot = path.join(sdkRoot, 'wasm');
  const uniappRoot = path.join(sdkRoot, 'uniapp');

  for (const uniappFile of await listMdxFiles(uniappRoot)) {
    const relativePath = path.relative(uniappRoot, uniappFile);
    const wasmFile = path.join(wasmRoot, relativePath);
    let wasmSource;
    try {
      wasmSource = await readFile(wasmFile, 'utf8');
    } catch {
      continue;
    }

    const uniappSource = await readFile(uniappFile, 'utf8');
    const wasmBody = extractBody(wasmSource);
    const uniappBody = extractBody(uniappSource);
    const ratio = normalizedContentLength(uniappBody) / Math.max(normalizedContentLength(wasmBody), 1);
    const wasmSections = extractSections(wasmBody);
    const uniappSections = extractSections(uniappBody);

    if (ratio < 0.72) {
      failures.push(
        `${locale}:${relativePath} content ratio ${ratio.toFixed(2)} is below the 0.72 Wasm baseline`,
      );
    }
    if (uniappSections.length < wasmSections.length) {
      failures.push(
        `${locale}:${relativePath} keeps ${uniappSections.length}/${wasmSections.length} Wasm sections`,
      );
    }
  }
}

if (failures.length > 0) {
  console.error(`uni-app/Wasm content parity failed (${failures.length} findings):`);
  for (const failure of failures) console.error(`- ${failure}`);
  process.exitCode = 1;
} else {
  console.log('uni-app/Wasm content parity passed for every shared route.');
}

async function listMdxFiles(root) {
  const output = [];
  for (const entry of await readdir(root, { withFileTypes: true })) {
    const absolutePath = path.join(root, entry.name);
    if (entry.isDirectory()) output.push(...(await listMdxFiles(absolutePath)));
    else if (entry.isFile() && entry.name.endsWith('.mdx')) output.push(absolutePath);
  }
  return output;
}

function extractBody(source) {
  const parts = source.split(/^---\s*$/m);
  return parts.slice(2).join('---').trim();
}

function extractSections(body) {
  return [...body.matchAll(/^##+\s+(.+)$/gm)].map((match) => match[1].trim());
}

function normalizedContentLength(body) {
  return body
    .replace(/@openim\/wasm-client-sdk|@\/uni_modules\/unix-openim-sdk/g, '')
    .replace(/openimsdk\.|OpenIM\./g, '')
    .replace(/\{\s*data\s*:\s*[^}]+\}/g, '')
    .replace(/\s+/g, ' ')
    .trim().length;
}
