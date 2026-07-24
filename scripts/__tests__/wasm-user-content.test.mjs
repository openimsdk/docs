import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const root = 'content/zh/docs/chat/sdk/wasm/user';
const wasmRoot = 'content/zh/docs/chat/sdk/wasm';
const audit = JSON.parse(readFileSync('data/structure/wasm-content-audit.json', 'utf8'));

function read(relativePath) {
  return readFileSync(`${root}/${relativePath}.mdx`, 'utf8');
}

function readWasm(relativePath) {
  return readFileSync(`${wasmRoot}/${relativePath}.mdx`, 'utf8');
}

function auditPage(relativePath) {
  const currentPath = `/sdk/wasm/user/${relativePath}`;
  return audit.pages.find((page) => page.currentPath === currentPath);
}

test('friend request parameters match the pinned WASM declarations', () => {
  const add = read('friend-applications/add-friend');
  const accept = read('friend-applications/accept-friend-application');
  const refuse = read('friend-applications/refuse-friend-application');

  assert.match(add, /addFriend\(\{ toUserID, reqMsg \}\)/);
  assert.match(add, /`reqMsg` 没有内容时传空字符串/);
  assert.match(accept, /handleMsg: ''/);
  assert.match(refuse, /handleMsg: ''/);
  assert.doesNotMatch(add, /\| `ex`\s+\| `string`\s+\|/);
});

test('friend application events separate received and sent applications', () => {
  const source = read(
    'friend-applications/get-friend-application-list-as-recipient',
  );

  assert.match(source, /fromUserID:toUserID/);
  assert.match(source, /OnFriendApplicationAdded/);
  assert.match(source, /OnFriendApplicationAccepted|`Accepted`/);
  assert.match(source, /OnFriendApplicationRejected|`Rejected`/);
});

test('friend application list pages include executable examples', () => {
  const received = read(
    'friend-applications/get-friend-application-list-as-recipient',
  );
  const sent = read(
    'friend-applications/get-friend-application-list-as-applicant',
  );

  assert.match(received, /getFriendApplicationListAsRecipient\(\{/);
  assert.match(received, /ApplicationHandleResult\.Unprocessed/);
  assert.match(sent, /getFriendApplicationListAsApplicant\(\{/);
  assert.match(sent, /offset: 0/);
  assert.match(sent, /count: 20/);
});

test('friend search documents required switches and the data type', () => {
  const source = read('friends/search-friends');

  for (const name of ['isSearchUserID', 'isSearchNickname', 'isSearchRemark']) {
    assert.match(source, new RegExp(`${name}: true`), name);
  }
  assert.match(source, /当前只使用一个非空关键词/);
  assert.match(source, /结果是 `SearchedFriendsInfo\[\]`/);
  assert.doesNotMatch(source, /WsResponse<SearchedFriendsInfo\[\]>/);
  assert.match(source, /不要覆盖完整好友列表/);
});

test('blacklist pages use real fields and explain asymmetric message behavior', () => {
  const list = read('blacklist/get-black-list');

  assert.doesNotMatch(list, /\| `gender`/);
  assert.match(list, /对方不能向当前用户发送消息/);
  assert.match(list, /当前用户仍可向对方发送/);
});

test('Group pages document mute permissions and normalize mute timestamps', () => {
  const operations = readWasm('group/managing-group-members/change-group-member-mute');
  const list = readWasm('group/retrieving-group-members/get-group-member-list');

  assert.match(operations, /群主可以禁言管理员和普通成员/);
  assert.match(operations, /管理员只能禁言普通成员/);
  assert.match(operations, /`muteEndTime`/);
  assert.match(list, /根据 `muteEndTime` 过滤/);
});

test('friend deletion removes rather than merges a cached friend', () => {
  const relationship = read('friends/check-friend');
  const source = read('friends/get-friend-list-page');

  assert.match(relationship, /result.*`1`.*好友/);
  assert.match(relationship, /区分黑名单时另行查询黑名单/);
  assert.match(source, /const handleFriendDeleted/);
  assert.match(source, /removeFriend\(data\.userID\)/);
});

test('online status documents subscription without exposing getUserStatus', () => {
  const source = [
    read('online-status/subscribe-users-status'),
    read('online-status/get-subscribe-users-status'),
    read('online-status/unsubscribe-users-status'),
  ].join('\n');

  assert.match(source, /3000/);
  assert.doesNotMatch(source, /getUserStatus/);
  assert.doesNotMatch(source, /OpenIM\.getGroupMemberList/);
  assert.doesNotMatch(source, /声明缺口|两层签名不一致/);
});

test('profile examples cover extension ownership and whole-value replacement', () => {
  const source = read('profile/set-self-info');

  assert.match(source, /`ex` 是完整字符串/);
  assert.match(source, /不会自动合并/);
});

test('profile updates restrict editable fields and separate refresh errors', () => {
  const source = read('profile/set-self-info');

  assert.doesNotMatch(source, /const payload: PartialUserItem/);
  assert.match(source, /nickname.*faceURL.*ex/);
  assert.match(source, /设置全局消息接收方式/);
  assert.match(source, /Promise 成功表示设置请求完成/);
  assert.match(source, /最终资料通过 `OnSelfInfoUpdated` 或 `getSelfUserInfo\(\)` 校准/);
});

test('global message reception omits the reserved NotReceive value', () => {
  const source = read('profile/set-global-message-reception');

  assert.match(source, /MessageReceiveOptType\.Normal.*`0`/s);
  assert.match(source, /MessageReceiveOptType\.NotNotify.*`2`/s);
  assert.doesNotMatch(source, /MessageReceiveOptType\.NotReceive/);
  assert.match(source, /正常接收消息，并允许离线推送或通知/);
  assert.match(source, /接收消息，但不触发离线推送或通知/);
});

test('user overview links every user-owned workflow and leaves group moderation to Groups', () => {
  const source = read('overview-user');

  assert.match(source, /好友申请/);
  assert.match(source, /修改好友资料/);
  assert.match(source, /当前用户资料/);
  assert.doesNotMatch(source, /查询群内被禁言成员/);
});

test('exact-ID user lookup has a precise Chinese task title', () => {
  const source = read('profile/get-users-info');

  assert.match(source, /^title: '获取用户资料'$/m);
  assert.match(source, /按 `userID`/);
  assert.match(source, /没有面向任意公开用户资料的通用变更事件/);
});

test('every user-page event example includes matching cleanup', () => {
  const pages = [
    'friend-applications/get-friend-application-list-as-recipient',
    'friends/get-friend-list-page',
    'blacklist/get-black-list',
    'online-status/subscribe-users-status',
    'profile/set-self-info',
  ];

  for (const page of pages) {
    const source = read(page);
    const onCount = source.match(/openimsdk\.on\(/g)?.length ?? 0;
    const offCount = source.match(/openimsdk\.off\(/g)?.length ?? 0;
    assert.equal(offCount, onCount, `${page}: expected one off() for every on()`);
  }
});

test('user-page audit records match the reviewed content', () => {
  assert.equal(auditPage('overview-user').disposition, 'adapt');
  const mergedLatestInfo = auditPage(
    'retrieving-and-updating-user-information/retrieve-the-latest-information-on-participants',
  );
  assert.equal(mergedLatestInfo.disposition, 'remove');
  assert.equal(mergedLatestInfo.redirectTo, null);
  assert.deepEqual(mergedLatestInfo.sdkMethods, []);

  const redirects = JSON.parse(
    readFileSync('data/structure/wasm-legacy-redirects.json', 'utf8'),
  );
  assert.equal(
    redirects.some((entry) => entry.source === mergedLatestInfo.currentPath),
    false,
  );

  const ownership = JSON.parse(
    readFileSync('data/structure/wasm-api-ownership.json', 'utf8'),
  );
  assert.equal(
    ownership.methods.find((item) => item.name === 'getUsersInfo')?.page,
    '/sdk/wasm/user/profile/get-users-info',
  );
  assert.equal(
    ownership.methods.find((item) => item.name === 'getUserStatus')?.status,
    'excluded-consolidated',
  );

  const selfInfoPages = [
    'overview-user',
    'profile/set-self-info',
  ];
  for (const path of selfInfoPages) {
    assert.ok(
      auditPage(path).openimSources.some((source) => source.endsWith('/onSelfUserInfoUpdate.md')),
      `${path}: missing immutable OnSelfInfoUpdated source`,
    );
  }

  for (const path of [
    'profile/overview-profile',
    'online-status/overview-online-status',
    'friends/overview-friends',
    'friend-applications/overview-friend-applications',
    'blacklist/overview-blacklist',
  ]) {
    assert.equal(auditPage(path).disposition, 'remove');
    assert.equal(auditPage(path).redirectTo, null);
  }
});
