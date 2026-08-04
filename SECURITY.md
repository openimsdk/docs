# Security policy

## Supported version

Security fixes are applied to the current `main` branch and to the production deployment built from it. This repository requires Node.js 22.12 or newer and uses `pnpm-lock.yaml` as the dependency lock source.

Before a public release, maintainers should run:

```bash
pnpm install --frozen-lockfile
pnpm audit --prod
pnpm check
pnpm build
```

Dependabot checks npm and GitHub Actions dependencies weekly. Framework and documentation-tooling updates should be reviewed and validated with the full production build before merging.

## Reporting a vulnerability

Please do not disclose a suspected vulnerability in a public issue, discussion, or pull request.

Report it privately through one of these channels:

- [GitHub private security advisory](https://github.com/openimsdk/docs/security/advisories/new)
- Email: [contact@openim.io](mailto:contact@openim.io)

Include the affected URL or component, reproduction steps, expected impact, and any suggested mitigation. Do not include production credentials, personal data, or secrets in the report.

The maintainers will acknowledge the report, validate the impact, coordinate a fix, and publish an advisory when appropriate. Please allow time for remediation before public disclosure.

## Scope

This policy covers the documentation application and its build, routing, search, and content-processing code. Vulnerabilities in OpenIMServer, ChatServer, or OpenIMClientSDK should be reported through the corresponding OpenIMSDK repository or the contact address above.
