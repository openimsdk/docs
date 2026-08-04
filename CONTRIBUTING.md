# Contributing to OpenIM Documentation

Thank you for improving OpenIM documentation. Contributions must preserve the accuracy of both the product content and the documentation system.

## Before you start

- Use Node.js 22.12 or newer and the pnpm version declared in `package.json`.
- Read `AGENTS.md` and `docs/CONTENT_AUTHORING.md` before editing SDK or Platform API content.
- Check `git status` and preserve unrelated work already present in the worktree.
- Confirm that the target capability exists in the pinned OpenIM SDK, OpenIMServer source, OpenAPI document, or immutable audit evidence.

## Language workflow

Simplified Chinese is the editorial source for client SDK guides:

1. Review the complete Chinese page and its evidence.
2. Update the page manually; do not use scripts or machine translation for final prose.
3. Update the page's audit record after the review.
4. Translate the reviewed page manually into English.
5. Verify that titles, parameters, examples, results, event boundaries, and links match the Chinese source and the target SDK.

Do not publish an English SDK page while its Chinese source is incomplete or its English audit state is deferred.

## Writing rules

- Organize task pages by user operation, not by a mechanically repeated template.
- Keep parameter and result explanations next to the API operation they describe.
- Do not combine parameters from unrelated APIs in one table.
- Explain Future or Promise completion, event delivery, and query reconciliation as separate stages.
- Give each event one owning page. Other pages link to that owner instead of registering the same listener again.
- Use stable business identifiers such as `conversationID`, `groupID`, `userID`, and `clientMsgID`; never use an array index or display name as a merge key.
- Do not document deprecated, reserved, unsupported, or inferred capabilities as public features.
- Mark commercial capabilities through the existing Enterprise metadata and ownership system.

## Structural changes

Adding, deleting, merging, or moving a page requires coordinated updates to:

- English and Chinese content
- route and sidebar structure
- audit and API/event ownership records
- search and localized generated data
- approved redirects, when compatibility is required
- tests covering the affected structure

Completed migration plans and one-time rewrite tools are retained in Git history rather than the current maintenance interface. Use the current architecture, scope, audit records, and active package scripts as the source of truth.

## Validation

Run the checks appropriate to the change:

```bash
pnpm content:check
pnpm check
```

Also run a production build for route, navigation, rendering, publication-state, or deployment changes:

```bash
pnpm build
```

After `pnpm build`, keep the repository's expected `next-env.d.ts` import if Next.js rewrites it.

## Pull requests

A documentation pull request should state:

- the pages or domains changed;
- the SDK/server version or immutable source used for verification;
- whether routes, event ownership, commercial metadata, or redirects changed;
- the validation commands run and any remaining failure.

Do not include tokens, private deployment addresses, customer data, internal screenshots, or sensitive diagnostic logs.
