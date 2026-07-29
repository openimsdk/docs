import { readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const root = process.cwd();
const configs = {
  wasm: [
    ['check-speech-to-text', 'Check speech recognition support', '检查语音识别能力', 'speechToTextCapabilities'],
    ['transcribe-audio', 'Transcribe an audio file', '识别音频文字', 'speechToText'],
    ['save-local-transcript', 'Save a local transcript', '保存本地转写结果', 'setMessageLocalContent'],
  ],
  ios: [
    ['check-speech-to-text', 'Check speech recognition support', '检查语音识别能力', 'Open_im_sdkSpeechToTextCapabilities'],
    ['transcribe-audio', 'Transcribe an audio file', '识别音频文字', 'Open_im_sdkSpeechToText'],
    ['save-local-transcript', 'Save a local transcript', '保存本地转写结果', 'setMessageLocalEx:clientMsgID:localEx:onSuccess:onFailure:'],
  ],
  flutter: [
    ['check-speech-to-text', 'Check speech recognition support', '检查语音识别能力', 'speechToTextCapabilities'],
    ['transcribe-audio', 'Transcribe an audio file', '识别音频文字', 'speechToText'],
    ['save-local-transcript', 'Save a local transcript', '保存本地转写结果', 'setMessageLocalContent'],
  ],
};

for (const [platform, pages] of Object.entries(configs)) {
  const prefix = `/sdk/${platform}/message/composing-messages/`;
  const oldPath = `${prefix}transcribe-audio`;
  const sidebarPath = resolve(root, `data/structure/${platform}-sidebar.json`);
  const sidebar = JSON.parse(await readFile(sidebarPath, 'utf8'));
  sidebar.nodes = replace(sidebar.nodes, oldPath, prefix, pages);
  await writeFile(sidebarPath, `${JSON.stringify(sidebar, null, 2)}\n`);

  const labelsPath = resolve(root, `data/structure/${platform}-navigation-labels.json`);
  const labels = JSON.parse(await readFile(labelsPath, 'utf8'));
  for (const [, en, zh] of pages) labels[en] = zh;
  await writeFile(labelsPath, `${JSON.stringify(Object.fromEntries(Object.entries(labels).sort(([a], [b]) => a.localeCompare(b))), null, 2)}\n`);

  const auditPath = resolve(root, `data/structure/${platform}-content-audit.json`);
  const audit = JSON.parse(await readFile(auditPath, 'utf8'));
  const old = audit.pages.find((page) => page.currentPath === oldPath);
  for (const [slug, , , method] of pages) {
    const currentPath = `${prefix}${slug}`;
    const page = structuredClone(old);
    page.currentPath = currentPath;
    page.targetPath = currentPath;
    page.sdkMethods = [method];
    page.sdkEvents = [];
    page.locales.zh = { reviewStatus: 'published', reviewer: 'Codex', reviewedAt: '2026-07-23', exampleVerification: { status: 'verified', evidence: [...old.openimSources], reason: null } };
    page.locales.en = { reviewStatus: 'deferred', reviewer: null, reviewedAt: null, exampleVerification: { status: 'pending', evidence: [], reason: null } };
    page.notes = [`2026-07-23：已逐页人工审核；本页只归属 ${method}。`];
    const index = audit.pages.findIndex((candidate) => candidate.currentPath === currentPath);
    if (index >= 0) audit.pages[index] = page;
    else audit.pages.push(page);
  }
  await writeFile(auditPath, `${JSON.stringify(audit, null, 2)}\n`);
}

function replace(nodes, oldPath, prefix, pages) {
  return nodes.flatMap((entry) => {
    const path = typeof entry === 'string' ? entry : entry?.path;
    if (path === oldPath) return pages.map(([slug, title]) => ({ path: `${prefix}${slug}`, navigationTitle: title }));
    if (path) return [entry];
    return [{ ...entry, children: replace(entry.children ?? [], oldPath, prefix, pages) }];
  });
}
