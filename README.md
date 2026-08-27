# OpenIMSDK Documentation

[![CI](https://github.com/openimsdk/docs/actions/workflows/ci.yml/badge.svg)](https://github.com/openimsdk/docs/actions/workflows/ci.yml)
[![Documentation](https://img.shields.io/badge/docs-docs.openim.io-1769ff)](https://docs.openim.io)
[![License: MIT](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

This repository contains the source for the official [OpenIMSDK documentation](https://docs.openim.io). It provides implementation guides and API documentation for OpenIMClientSDK, OpenIMServer, ChatServer, and the server-side Platform API in English and Simplified Chinese.

OpenIMSDK is the umbrella project for the OpenIMClientSDK client SDKs and the OpenIMServer core IM server. ChatServer is the business extension server; it is not presented as a standalone “Chat” product. The source repositories are maintained by the [OpenIMSDK organization](https://github.com/openimsdk).

## Documentation links

| Resource                         | Link                                                  |
| -------------------------------- | ----------------------------------------------------- |
| Documentation                    | [docs.openim.io](https://docs.openim.io)              |
| Simplified Chinese documentation | [docs.openim.io/zh](https://docs.openim.io/zh)        |
| OpenIMSDK website                | [openim.io](https://openim.io/)                       |
| Enterprise edition               | [openim.io/enterprise](https://openim.io/enterprise/) |
| OpenIMSDK on GitHub              | [github.com/openimsdk](https://github.com/openimsdk)  |

## Documentation scope

The public documentation currently covers:

- OpenIMSDK concepts, OpenIMServer and ChatServer deployment guidance, and integration workflows
- iOS SDK
- Flutter SDK
- Electron SDK
- JavaScript SDK for lightweight Web and Mini Program runtimes
- JavaScript SDK (WASM) for full Web IM applications and Electron renderer processes
- Platform API, including authentication, users, relationships, groups, conversations, messages, Webhooks, and operational APIs

Only reviewed platforms and pages appear in the public navigation, search index, and sitemap. Draft structures for additional platforms may remain in the repository without being published.

Capabilities marked **Enterprise** require the corresponding commercial edition or delivery. See the [Enterprise edition](https://openim.io/enterprise/) for product information, or contact [contact@openim.io](mailto:contact@openim.io) for licensing and commercial support.

## Technology

The documentation application is built with:

- [Next.js](https://nextjs.org/) and React
- [Fumadocs](https://fumadocs.dev/) for MDX content integration
- TypeScript
- Tailwind CSS
- pnpm and Corepack

English and Simplified Chinese pages share one audited route structure. Navigation, search indexes, localized SDK packages, and publication metadata are derived from reviewed MDX and structural records.

## Local development

### Requirements

- Node.js 22.12 or later
- Corepack
- The pnpm version declared in `package.json`

### Start the development server

```bash
corepack enable
pnpm install --frozen-lockfile
cp .env.example .env.local
pnpm dev
```

Open the local site at:

- English: [http://localhost:3000](http://localhost:3000)
- Simplified Chinese: [http://localhost:3000/zh](http://localhost:3000/zh)

## Repository structure

```text
api/chat/platform-api/  Versioned OpenAPI source documents
app/                    Next.js routes, metadata, search, and sitemap
content/docs/           English SDK and Platform API MDX
content/en/docs/guides/ Reviewed English guide snapshots
content/zh/docs/        Simplified Chinese MDX and guide snapshots
data/structure/         Navigation, ownership, scope, and review records
docs/                   Current architecture and authoring documentation
public/                 Versioned images, brand assets, and downloads
scripts/                Active validation, synchronization, and build tools
src/components/         Documentation and site UI
src/generated/          Committed route, navigation, search, and locale data
```

Public URLs do not expose internal product-version directories. For example:

```text
/sdk/wasm/overview
└── content/docs/chat/sdk/wasm/overview.mdx

/zh/sdk/wasm/overview
└── content/zh/docs/chat/sdk/wasm/overview.mdx
```

Generated files are build inputs, not editorial evidence. Documentation facts must be verified against the pinned OpenIMClientSDK declarations, OpenIMServer definitions, OpenAPI documents, or the immutable sources recorded in the relevant audit file.

## Authoring and localization

Read [CONTRIBUTING.md](CONTRIBUTING.md) and the [content authoring guide](docs/CONTENT_AUTHORING.md) before changing documentation pages.

The client SDK localization workflow is Chinese-first:

1. Review the complete Simplified Chinese page and its technical evidence.
2. Edit and audit the page manually.
3. Translate the reviewed page into fluent English.
4. Verify API names, parameters, examples, results, events, and links against the target SDK.
5. Publish the English route only after its review record is complete.

Final MDX prose must be reviewed page by page. Scripts may update deterministic structure and generated metadata, but they must not generate or machine-translate final documentation text.

## Validation

Run the complete validation suite before submitting or publishing changes:

```bash
pnpm check
pnpm build
```

`pnpm check` includes linting, TypeScript validation, content integrity checks, SDK publication audits, example checks, OpenAPI linting, and Platform API tests. `pnpm build` validates the production application. Local and Docker builds also prepare the standalone server output; Vercel builds use its managed Next.js runtime.

Frequently used commands:

| Command                 | Purpose                                                              |
| ----------------------- | -------------------------------------------------------------------- |
| `pnpm dev`              | Synchronize derived content and start the development server.        |
| `pnpm content:status`   | Report publication status by product and page type.                  |
| `pnpm content:sync`     | Rebuild localized SDK packages and search indexes.                   |
| `pnpm content:metadata` | Refresh route and navigation metadata from reviewed frontmatter.     |
| `pnpm content:check`    | Validate routes, links, navigation, frontmatter, and search records. |
| `pnpm structure:report` | Refresh the active route and navigation report.                      |
| `pnpm check`            | Run the complete quality and content validation suite.               |
| `pnpm build`            | Create the production Next.js build and standalone output.           |

## Configuration

Copy `.env.example` to `.env.local` for local development. The following public environment variables configure canonical URLs and external navigation:

```dotenv
NEXT_PUBLIC_SITE_URL=https://docs.openim.io
NEXT_PUBLIC_WEBSITE_URL=https://openim.io/
NEXT_PUBLIC_ENTERPRISE_URL=https://openim.io/enterprise/
NEXT_PUBLIC_LEGACY_DOCS_URL=https://openim-docs-legacy.vercel.app
NEXT_PUBLIC_GITHUB_URL=https://github.com/openimsdk
NEXT_PUBLIC_EDIT_BASE_URL=https://github.com/openimsdk/docs/edit/main
```

`NEXT_PUBLIC_LEGACY_DOCS_URL` controls the archived-documentation link in the global navigation. Leave `NEXT_PUBLIC_EDIT_BASE_URL` empty if edit links should not be displayed.

## Deployment

### Production

The production site at [docs.openim.io](https://docs.openim.io) is self-hosted as a Next.js standalone container behind Nginx. Every push to `main` runs the complete verification suite, publishes an immutable image to GitHub Container Registry, and deploys that image by digest through a restricted SSH account.

Production uses two local container slots. A candidate must pass container health checks and smoke tests for the home page and dynamic APIs before Nginx switches traffic atomically. After the switch, GitHub Actions verifies the public HTTPS health endpoint. See the [deployment audit](docs/DEPLOYMENT_AUDIT.md) and [server deployment reference](deploy/openim-docs/README.md) for the verified chain and operational controls.

### Vercel preview or alternative deployment

The repository includes `vercel.json`. Configure the production environment variables, import the repository into Vercel, and use the committed pnpm lockfile. Vercel runs:

```bash
pnpm install --frozen-lockfile
pnpm build
```

### Docker and standalone Node.js

Build and run the maintained container image with:

```bash
docker compose up --build
```

For a direct Node.js deployment:

```bash
corepack enable
pnpm install --frozen-lockfile
pnpm build
PORT=3000 HOSTNAME=0.0.0.0 pnpm start
```

The production server is generated at `.next/standalone/server.js`.

## Contributing

Contributions that improve correctness, examples, navigation, accessibility, or developer experience are welcome. Pull requests should identify the affected documentation area, the SDK or server evidence used, and the validation commands that were run.

See:

- [Contribution guide](CONTRIBUTING.md)
- [Content authoring rules](docs/CONTENT_AUTHORING.md)
- [Architecture](docs/ARCHITECTURE.md)
- [Current publication scope](docs/CONTENT_SCOPE.md)

## Support and security

Use [GitHub Issues](https://github.com/openimsdk/docs/issues) for reproducible documentation defects and content corrections. For product, deployment, licensing, or commercial support, contact [contact@openim.io](mailto:contact@openim.io).

Do not report security vulnerabilities in a public issue. Follow the private reporting process in [SECURITY.md](SECURITY.md).

## License

This documentation project is licensed under the [MIT License](LICENSE).
