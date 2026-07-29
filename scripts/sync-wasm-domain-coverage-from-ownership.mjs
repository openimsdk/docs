import { readFile, writeFile } from 'node:fs/promises';

const coveragePath = 'data/structure/wasm-domain-api-coverage.json';
const ownershipPath = 'data/structure/wasm-api-ownership.json';

const coverage = JSON.parse(await readFile(coveragePath, 'utf8'));
const ownership = JSON.parse(await readFile(ownershipPath, 'utf8'));
const replacementPages = new Map([
  ['createAdvancedQuoteMessage', '/sdk/wasm/message/creating-messages/create-quote-message'],
  ['createAdvancedTextMessage', '/sdk/wasm/message/creating-messages/create-custom-message'],
  ['deleteMessage', '/sdk/wasm/message/managing-messages/delete-saved-messages'],
  ['getFriendList', '/sdk/wasm/user/friends/get-friend-list-page'],
  ['getGroupMemberListByJoinTimeFilter', '/sdk/wasm/group/retrieving-group-members/get-group-member-list'],
  ['getUserStatus', '/sdk/wasm/user/online-status/get-subscribe-users-status'],
  ['pinFriends', '/sdk/wasm/user/friends/update-friends'],
  ['resetConversationGroupAtType', '/sdk/wasm/conversation/managing-conversations/clear-group-mentions'],
  ['setFriendRemark', '/sdk/wasm/user/friends/update-friends'],
  ['setFriendsEx', '/sdk/wasm/user/friends/update-friends'],
  ['setGlobalRecvMessageOpt', '/sdk/wasm/user/profile/set-global-message-reception'],
  ['setGroupApplyMemberFriend', '/sdk/wasm/group/set-group-member-friend-permission'],
  ['setGroupLookMemberInfo', '/sdk/wasm/group/set-group-member-profile-access'],
  ['setGroupMemberNickname', '/sdk/wasm/group/managing-group-members/set-group-member-nickname'],
  ['setGroupMemberRoleLevel', '/sdk/wasm/group/managing-group-members/set-group-member-role-level'],
  ['setGroupVerification', '/sdk/wasm/group/set-group-join-verification'],
  ['SetSelfInfoEx', '/sdk/wasm/user/profile/set-self-info'],
  ['typingStatusUpdate', '/sdk/wasm/message/composing-messages/update-typing-status'],
]);
for (const item of ownership.methods) {
  if (replacementPages.has(item.name)) item.page = replacementPages.get(item.name);
}
await writeFile(ownershipPath, `${JSON.stringify(ownership, null, 2)}\n`);
const methodOwners = new Map(ownership.methods.map((item) => [item.name, item]));
const eventOwners = new Map(ownership.events.map((item) => [item.name, item]));

for (const domain of Object.values(coverage.domains)) {
  domain.methods = domain.methods.map((item) => {
    const owner = methodOwners.get(item.name);
    if (!owner) throw new Error(`Missing method ownership: ${item.name}`);
    return { ...item, page: owner.page, status: owner.status };
  });
  domain.events = domain.events.map((item) => {
    const owner = eventOwners.get(item.name);
    if (!owner) throw new Error(`Missing event ownership: ${item.name}`);
    return { ...item, page: owner.page, status: owner.status };
  });
}

await writeFile(coveragePath, `${JSON.stringify(coverage, null, 2)}\n`);
