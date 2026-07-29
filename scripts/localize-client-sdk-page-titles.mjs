import { readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const platforms = ['wasm', 'ios', 'flutter'];
const reviewDate = '2026-07-24';
const reviewNote =
  '2026-07-24：逐页复核页面任务与 API 归属，将正文页标题改为准确的中文任务名称，并与左侧导航语义对齐；API 方法名只保留在正文与示例中。';
const forceNavigationTitlePaths = new Set([
  '/sdk/wasm/conversation/managing-conversation-groups/get-conversation-groups',
  '/sdk/wasm/conversation/managing-conversation-groups/get-conversation-group-info-with-conversations',
  '/sdk/wasm/conversation/managing-conversation-groups/get-conversation-group-ids-by-conversation-id',
  '/sdk/wasm/conversation/managing-conversation-groups/set-conversation-group-order',
  '/sdk/wasm/group/retrieving-group-members/overview-retrieving-group-members',
  '/sdk/wasm/user/friends/get-friend-list-page',
  '/sdk/wasm/user/friend-applications/get-friend-application-unhandled-count',
  '/sdk/wasm/group/group-applications/get-group-application-unhandled-count',
  '/sdk/wasm/message/receiving-messages/receive-custom-business-messages',
  '/sdk/wasm/message/managing-read-status/get-group-message-readers',
  '/sdk/wasm/calling/managing-calls/handle-call-events',
  '/sdk/wasm/calling/retrieving-call-information/restore-pending-invitation',
  '/sdk/ios/user/retrieving-and-updating-user-information/get-self-profile',
  '/sdk/ios/user/retrieving-and-updating-user-information/set-global-message-reception',
  '/sdk/ios/user/friends/get-friend-list-page',
  '/sdk/ios/user/friend-applications/get-friend-application-unhandled-count',
  '/sdk/ios/conversation/managing-conversations/set-message-receive-option',
  '/sdk/ios/conversation/managing-conversation-groups/get-conversation-groups',
  '/sdk/ios/conversation/managing-conversation-groups/get-conversation-group-info-with-conversations',
  '/sdk/ios/conversation/managing-conversation-groups/get-conversation-group-ids-by-conversation-id',
  '/sdk/ios/conversation/managing-conversation-groups/set-conversation-group-order',
  '/sdk/ios/group/retrieving-group-members/overview-retrieving-group-members',
  '/sdk/ios/group/group-applications/get-group-application-unhandled-count',
  '/sdk/ios/message/receiving-messages/custom-business-listener',
  '/sdk/ios/message/managing-read-status/get-group-message-readers',
  '/sdk/ios/calling/managing-calls/handle-call-events',
  '/sdk/ios/calling/retrieving-call-information/restore-pending-invitation',
  '/sdk/flutter/user/retrieving-and-updating-user-information/get-self-profile',
  '/sdk/flutter/user/friends/get-friend-list-page',
  '/sdk/flutter/user/friend-applications/get-friend-application-unhandled-count',
  '/sdk/flutter/conversation/managing-conversation-groups/get-conversation-groups',
  '/sdk/flutter/conversation/managing-conversation-groups/get-conversation-group-info-with-conversations',
  '/sdk/flutter/conversation/managing-conversation-groups/get-conversation-group-ids-by-conversation-id',
  '/sdk/flutter/conversation/managing-conversation-groups/set-conversation-group-order',
  '/sdk/flutter/group/retrieving-group-members/overview-retrieving-group-members',
  '/sdk/flutter/group/group-applications/get-group-application-unhandled-count',
  '/sdk/flutter/message/receiving-messages/custom-business-listener',
  '/sdk/flutter/calling/managing-calls/handle-call-events',
  '/sdk/flutter/calling/retrieving-call-information/restore-pending-invitation',
]);

function collectPages(nodes, result = []) {
  for (const node of nodes) {
    if (typeof node === 'string') {
      result.push({
        path: node,
        navigationTitle: node.split('/').at(-1),
      });
      continue;
    }

    if (node.path) {
      result.push({
        path: node.path,
        navigationTitle: node.navigationTitle ?? node.path.split('/').at(-1),
      });
    }

    if (node.children) {
      collectPages(node.children, result);
    }
  }

  return result;
}

function replaceFrontmatterTitle(source, title, filePath) {
  const frontmatterEnd = source.indexOf('\n---', 4);
  if (!source.startsWith('---\n') || frontmatterEnd === -1) {
    throw new Error(`Invalid frontmatter: ${filePath}`);
  }

  const frontmatter = source.slice(0, frontmatterEnd);
  if (!/^title:\s*.+$/m.test(frontmatter)) {
    throw new Error(`Missing frontmatter title: ${filePath}`);
  }

  const escapedTitle = title.replaceAll("'", "''");
  const updatedFrontmatter = frontmatter.replace(
    /^title:\s*.+$/m,
    `title: '${escapedTitle}'`,
  );

  return `${updatedFrontmatter}${source.slice(frontmatterEnd)}`;
}

for (const platform of platforms) {
  const sidebarPath = resolve(root, `data/structure/${platform}-sidebar.json`);
  const labelsPath = resolve(
    root,
    `data/structure/${platform}-navigation-labels.json`,
  );
  const auditPath = resolve(root, `data/structure/${platform}-content-audit.json`);
  const sidebar = JSON.parse(await readFile(sidebarPath, 'utf8'));
  const labels = JSON.parse(await readFile(labelsPath, 'utf8'));
  const audit = JSON.parse(await readFile(auditPath, 'utf8'));
  const auditByPath = new Map(
    audit.pages.map((page) => [page.targetPath ?? page.currentPath, page]),
  );
  let updatedCount = 0;

  for (const page of collectPages(sidebar.nodes)) {
    const title = labels[page.navigationTitle];
    if (!title || !/[\u3400-\u9fff]/u.test(title)) {
      throw new Error(
        `Missing Chinese navigation label for ${page.path}: ${page.navigationTitle}`,
      );
    }

    const contentPath = resolve(root, `content/zh/docs/chat${page.path}.mdx`);
    const source = await readFile(contentPath, 'utf8');
    const currentTitle = source.match(/^title:\s*['"]?(.+?)['"]?\s*$/m)?.[1];
    const needsLocalizedTitle =
      currentTitle && !/[\u3400-\u9fff]/u.test(currentTitle);
    const needsSemanticAlignment =
      forceNavigationTitlePaths.has(page.path) && currentTitle !== title;
    if (!needsLocalizedTitle && !needsSemanticAlignment) {
      continue;
    }

    await writeFile(
      contentPath,
      replaceFrontmatterTitle(source, title, contentPath),
      'utf8',
    );

    const auditPage = auditByPath.get(page.path);
    if (!auditPage) {
      throw new Error(`Missing audit record for ${page.path}`);
    }

    auditPage.locales.zh.reviewedAt = reviewDate;
    auditPage.notes ??= [];
    if (!auditPage.notes.includes(reviewNote)) {
      auditPage.notes.push(reviewNote);
    }
    updatedCount += 1;
  }

  await writeFile(auditPath, `${JSON.stringify(audit, null, 2)}\n`, 'utf8');
  console.log(`${platform}: localized ${updatedCount} page titles`);
}
