# OpenIM Documentation

The documentation website for OpenIM client SDKs and Platform API. It is built with Next.js, Fumadocs, TypeScript, and MDX, and publishes English and Simplified Chinese content from the same route structure.

OpenIM 是面向应用开发者的开源通信基础设施。本仓库提供 OpenIM 客户端 SDK 与 Platform API 的中英文文档站点。

## Documentation coverage

The public SDK navigation currently covers:

- iOS
- Flutter
- JavaScript SDK (WASM)
- Electron
- Mini Program and lightweight Web runtimes

WASM, iOS, Flutter, Electron, and Mini Program pages have reviewed English and Simplified Chinese versions. Additional platform routes may remain in the repository for future work but are hidden until their content is ready.

The Platform API section documents server-to-server authentication, users, relationships, groups, conversations, messages, third-party services, webhooks, and commercial capabilities. API facts must come from OpenIMServer definitions and the pinned documentation evidence; the navigation label must never be used to infer an unsupported API.

## Open source and Enterprise

OpenIM's open-source server and SDKs support self-hosted messaging and custom client integration. Pages marked **Enterprise** or **商业版** require the corresponding commercial delivery.

- [OpenIM platform](https://openim.io/)
- [OpenIM Enterprise and edition comparison](https://openim.io/enterprise/)
- [OpenIMSDK on GitHub](https://github.com/openimsdk)
- Enterprise and licensing contact: [contact@openim.io](mailto:contact@openim.io)

## Local development

Requirements:

- Node.js 22.12 or newer
- pnpm 11, managed through Corepack

```bash
corepack enable
pnpm install --frozen-lockfile
cp .env.example .env.local
pnpm dev
```

Open the English home page at `http://localhost:3000/` or the Simplified Chinese home page at `http://localhost:3000/zh`.

## Content layout

Public URLs omit internal product-version segments:

```text
/sdk/wasm/overview
└── content/docs/chat/sdk/wasm/overview.mdx

/zh/sdk/wasm/overview
└── content/zh/docs/chat/sdk/wasm/overview.mdx
```

English content lives under `content/docs/chat/**`. Simplified Chinese content lives under `content/zh/docs/chat/**`. The route manifest, navigation, localized SDK packages, and search indexes are derived or audited data; do not treat generated output as editorial evidence.

Before editing any SDK page, read [CONTRIBUTING.md](CONTRIBUTING.md) and [docs/CONTENT_AUTHORING.md](docs/CONTENT_AUTHORING.md). SDK body text must be reviewed and edited one page at a time. Scripts may maintain structure and deterministic metadata, but they must not generate or machine-translate final MDX prose.

## Common commands

| Command                 | Purpose                                                                        |
| ----------------------- | ------------------------------------------------------------------------------ |
| `pnpm dev`              | Synchronize derived content and start the development server.                  |
| `pnpm content:status`   | Report publication status by product and template.                             |
| `pnpm content:sync`     | Rebuild localized SDK packages and search indexes.                             |
| `pnpm content:metadata` | Refresh route and navigation metadata from reviewed MDX frontmatter.           |
| `pnpm content:check`    | Validate routes, links, navigation, frontmatter, and search records.           |
| `pnpm check`            | Run linting, type checks, content audits, SDK checks, OpenAPI lint, and tests. |
| `pnpm build`            | Run a production Next.js standalone build.                                     |
| `pnpm structure:report` | Refresh the active route and navigation report.                                |

`pnpm check` must be green before release. If a check fails in an unrelated subsystem, record and fix that failure rather than presenting the release as fully verified.

## Publication workflow

1. Complete and review the Simplified Chinese source page.
2. Update the page's audit record and verify APIs, parameters, results, and events against the pinned SDK or server source.
3. Translate the reviewed page manually into fluent English.
4. Publish the English locale only after its audit state and example evidence are complete.
5. Run `pnpm check` and `pnpm build`.
6. Review the resulting navigation, search results, mobile layout, canonical URLs, and language alternates.

Route or navigation changes also require synchronized Chinese and English content, audit records, ownership data, and any approved redirects.

## Deployment

### Vercel

The repository includes `vercel.json`; Vercel installs dependencies with pnpm and runs `pnpm build`. Set `NEXT_PUBLIC_SITE_URL` to the final production origin before deployment.

### Docker

```bash
docker compose up --build
```

### Standalone Node.js

```bash
pnpm install --frozen-lockfile
pnpm build
PORT=3000 HOSTNAME=0.0.0.0 pnpm start
```

The production server runs from `.next/standalone/server.js`.

## Configuration

```dotenv
NEXT_PUBLIC_SITE_URL=https://docs.example.com
NEXT_PUBLIC_GITHUB_URL=https://github.com/openimsdk
NEXT_PUBLIC_WEBSITE_URL=https://openim.io/
NEXT_PUBLIC_ENTERPRISE_URL=https://openim.io/enterprise/
NEXT_PUBLIC_EDIT_BASE_URL=https://github.com/your-org/your-repo/edit/main
```

Leave `NEXT_PUBLIC_EDIT_BASE_URL` empty to hide the edit link.

## Contributing and security

- Contribution workflow: [CONTRIBUTING.md](CONTRIBUTING.md)
- Content rules: [docs/CONTENT_AUTHORING.md](docs/CONTENT_AUTHORING.md)
- Architecture: [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md)
- Active scope: [docs/CONTENT_SCOPE.md](docs/CONTENT_SCOPE.md)
- Security policy: [SECURITY.md](SECURITY.md)

This repository is licensed under the [MIT License](LICENSE).
