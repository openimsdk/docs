import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import test from 'node:test';

const coverage = JSON.parse(readFileSync('data/structure/wasm-domain-api-coverage.json', 'utf8'));
const activePages = JSON.parse(readFileSync('src/generated/routes.json', 'utf8'))
  .filter(
    (route) =>
      route.contextKey === 'chat/sdk/wasm' &&
      (route.path.includes('/conversation/') || route.path.includes('/group/')),
  )
  .map((route) => route.path);

function read(path) {
  return readFileSync(`content/zh/docs/chat${path}.mdx`, 'utf8');
}

test('every assigned Conversation and Group API is named on its reviewed page', () => {
  const allSource = activePages.map(read).join('\n');
  for (const [domainName, domain] of Object.entries(coverage.domains)) {
    for (const item of [...domain.methods, ...domain.events]) {
      if (item.status?.startsWith('excluded')) {
        assert.doesNotMatch(allSource, new RegExp(`\\b${item.name}\\b`), item.name);
        continue;
      }
      assert.match(
        read(item.page),
        new RegExp(`\\b${item.name}\\b`),
        `${domainName}: ${item.name}`,
      );
    }
  }
});

test('setConversationDraft remains a dedicated documented workflow', () => {
  const draft = coverage.domains.conversation.methods.find(
    (item) => item.name === 'setConversationDraft',
  );

  assert.equal(
    draft.page,
    '/sdk/wasm/conversation/managing-conversations/set-conversation-draft',
  );
  assert.equal(draft.status, 'documented');
  assert.match(read(draft.page), /setConversationDraft\(\)/);
  assert.match(read(draft.page), /`conversationID` 和草稿文本 `draftText`/);
  assert.doesNotMatch(read(draft.page), /SetConversationParams|deprecated|废弃标记|固定版本声明/);
});

test('group join example uses the pinned GroupJoinSource declaration', () => {
  const source = read('/sdk/wasm/group/join-group');

  assert.match(source, /GroupJoinSource\.Search/);
  assert.doesNotMatch(source, /joinSource:\s*3/);
  assert.doesNotMatch(source, /roleLevel/);
});

test('every Conversation and Group event example includes matching cleanup', () => {
  for (const path of activePages) {
    const source = read(path);
    const onCount = source.match(/openimsdk\.on\(/g)?.length ?? 0;
    const offCount = source.match(/openimsdk\.off\(/g)?.length ?? 0;
    assert.equal(offCount, onCount, `${path}: expected one off() for every on()`);
  }
});

test('new domain pages do not reintroduce unsupported Sendbird channel models', () => {
  const all = activePages.map(read).join('\n');

  assert.doesNotMatch(all, /^#{2,4} OpenIM 数据模型$/m);
  assert.doesNotMatch(all, /^#{2,4} .*?(Channel Metadata|Channel Metacounters|开放频道|超级群组)/m);
  assert.doesNotMatch(all, /Sendbird|Channel Metadata|Channel Metacounters|开放频道|超级群组/i);
});

test('English files exist only as deferred structural scaffolds', () => {
  for (const path of activePages) {
    const file = `content/docs/chat${path}.mdx`;
    assert.ok(existsSync(file), file);
    assert.match(readFileSync(file, 'utf8'), new RegExp(`sourcePath: '${path}'`));
  }
});
