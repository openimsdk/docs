---
title: 'Version Notes'
hide_title: true
sidebar_position: 5
---

# Version Notes

## 1. Production Version Selection Recommendations

For production, use the latest stable release published on GitHub, which means the latest official release marked with GitHub Releases' green **Latest** badge.

| Component | Version Source |
| --- | --- |
| OpenIMServer | Use the official release marked with the green **Latest** badge on the [OpenIMServer Releases](https://github.com/openimsdk/open-im-server/releases) page |
| ChatServer | Use the official release marked with the green **Latest** badge on the [ChatServer Releases](https://github.com/openimsdk/chat/releases) page |
| OpenIMClientSDK | Use the official release marked with the green **Latest** badge on the Releases page of the client SDK repository you actually integrate |

- Always use an explicit stable `tag` instead of relying only on branch names or guessing version order manually.
- If you need issue reproduction, staged rollback, or multi-environment consistency, pin an explicit official `tag`.
- When deploying OpenIMServer and ChatServer together, choose the corresponding official `tag`s according to the release notes.
- When integrating OpenIMClientSDK, also check the target server-side version range and the corresponding release notes to avoid cross-version capability differences.

## 2. How to Check the Current Latest Stable Release

You can resolve the current official `tag` directly through GitHub's `releases/latest` redirect:

```bash
SERVER_LATEST_TAG=$(basename "$(curl -fsSLI -o /dev/null -w '%{url_effective}' https://github.com/openimsdk/open-im-server/releases/latest)")
echo "$SERVER_LATEST_TAG"

CHAT_LATEST_TAG=$(basename "$(curl -fsSLI -o /dev/null -w '%{url_effective}' https://github.com/openimsdk/chat/releases/latest)")
echo "$CHAT_LATEST_TAG"
```

## 3. Where to Read Release Notes

- OpenIMServer: see [OpenIMServer Releases](https://github.com/openimsdk/open-im-server/releases)
- ChatServer: see [ChatServer Releases](https://github.com/openimsdk/chat/releases)
- OpenIMClientSDK: see the Releases page and corresponding release notes of the client SDK repository you actually use

If you need to maintain a long-lived version, record the exact `tag` in your deployment docs, build scripts, and rollback plan.

## 4. Current Latest Stable Versions

- **OpenIMServer** `v3.8.3-patch.12` `2025-10-24`
  - [changelog](https://github.com/openimsdk/open-im-server/releases/tag/v3.8.3-patch.12)
- **ChatServer** `v1.8.4-patch.3` `2025-07-29`
  - [changelog](https://github.com/openimsdk/chat/releases/tag/v1.8.4-patch.3)
