import { readFile, stat } from 'node:fs/promises';
import { resolve } from 'node:path';
import {
  isChatDocumentationPath,
  localizedContentFileCandidates,
} from './lib/chat-content-paths.mjs';
import { validateSearchIndexPaths } from './lib/search-index-contract.mjs';
import { clientSdkPlatformIds, getClientSdkPlatform } from './lib/client-sdk-platforms.mjs';
import {
  getClientSdkSidebarApplicationScope,
} from './lib/client-sdk-sidebar.mjs';

const root = process.cwd();
const routes = JSON.parse(await readFile(resolve(root, 'src/generated/routes.json'), 'utf8'));
const navigation = JSON.parse(
  await readFile(resolve(root, 'src/generated/navigation.json'), 'utf8'),
);
const searchIndex = JSON.parse(
  await readFile(resolve(root, 'src/generated/search-index.json'), 'utf8'),
);
const searchIndexZh = JSON.parse(
  await readFile(resolve(root, 'src/generated/search-index-zh.json'), 'utf8'),
);
const clientSdkStructures = await Promise.all(
  clientSdkPlatformIds.map(async (platformId) => {
    const platform = getClientSdkPlatform(platformId);
    const [audit, sidebar] = await Promise.all([
      readJson(platform.auditPath),
      readJson(platform.sidebarPath),
    ]);
    return { audit, platform, sidebar };
  }),
);
const scope = JSON.parse(await readFile(resolve(root, 'data/structure/scope.json'), 'utf8'));
const expectedSdkPlatforms = [
  'ios',
  'android',
  'flutter',
  'uniapp',
  'wasm',
  'electron',
  'miniprogram',
  'react-native',
];

const errors = [];
const warnings = [];

let platformApiZh = { navigationLabels: {} };
try {
  platformApiZh = JSON.parse(
    await readFile(resolve(root, 'src/generated/platform-api-zh-content.json'), 'utf8'),
  );
} catch {
  errors.push('Missing generated Platform API Chinese navigation data.');
}

const pathSet = new Set();
const contentSet = new Set();
const routeByPath = new Map();
const platformApiDraftPatterns = [
  /\bSendbird-style\b/i,
  /Recommended implementation/i,
  /This page keeps/i,
  /familiar Sendbird-style browsing model/i,
  /Replace Sendbird-specific terminology/i,
  /No direct OpenIM endpoint/i,
  /Sendbird Platform API slot/i,
  /^### 弃用信息$/m,
  /当前 OpenIM 文档没有将该能力标记为废弃/,
  /迁移时应以 OpenIM REST API 当前版本/,
];
const platformApiPublishedOnlyPatterns = [
  /to call the documented OpenIM REST endpoint/i,
  /This capability is available through the referenced OpenIM endpoint/i,
];
const platformApiZhLegacyPatterns = [
  /^## Overview$/m,
  /^## HTTP request$/m,
  /^## Parameters$/m,
  /^## Request body$/m,
  /^## Responses$/m,
  /^### Header$/m,
  /^## OpenIM availability$/m,
  /^## Implementation notes$/m,
  /^## Server-side responsibility$/m,
  /^## Official OpenIM references$/m,
  /\bgroup channel\b/i,
  /\bopen channel\b/i,
  /\bThis capability\b/,
  /\bImplementation approach\b/,
  /\bRequest conventions\b/,
  /\bRelated pages\b/,
];
const platformApiUnsupportedPathPatterns = [
  /\/open-channel\b/,
  /custom-channel-types?/,
  /\/listing-muted-users\//,
];
const platformApiUncoveredPatterns = [
  /可通过 OpenIM 基础能力组合实现/,
  /当前 OpenIM REST 未提供独立接口/,
  /不是一个独立接口/,
  /Available through OpenIM primitives/,
  /Not exposed as a Platform API endpoint/,
];
const platformApiEnglishRequiredApiHeadings = ['## HTTP request', '## Response'];
const platformApiZhRequiredApiHeadings = ['## HTTP 请求', '## 响应'];
const platformApiForbiddenApiHeadings = [
  /^### 路径参数$/m,
  /^### 查询参数$/m,
  /^#### 响应字段$/m,
  /^#### 错误字段$/m,
  /^## OpenIM 实现说明$/m,
  /^## 资源$/m,
];
const platformApiListUsersPath = '/platform-api/user/listing-users/list-users';
const platformApiListUsersExpectedSnippets = [
  'POST {API_ADDRESS}/user/get_users',
  'curl --request POST',
  'process.env.OPENIM_API_ADDRESS',
  'http.NewRequest',
  '安全提示',
  '200 OK',
  'errCode === 0',
  'pagination.pageNumber',
  '### 分页读取建议',
  '常见错误场景',
  '"showNumber": 100',
];
const platformApiEnglishListUsersExpectedSnippets = [
  'POST {API_ADDRESS}/user/get_users',
  'curl --request POST',
  'Keep administrator tokens on trusted backend services only',
  '200 OK',
  'errCode === 0',
  'pagination.pageNumber',
  '"showNumber": 100',
  'Authentication failed',
];
const platformApiListUsersForbiddenSnippets = ['123.321.1.1', '203.56.175.233'];
const platformApiEnglishOverviewHeadingExpectations = new Map([
  ['/platform-api/overview', ['## Most popular', '## Recommended features', '## Resources']],
  [
    '/platform-api/prepare-to-use-api',
    ['## Base URL', '## Request headers', '## Authentication', '## Request body'],
  ],
  [
    '/platform-api/user/overview',
    [
      '## Capability scope',
      '## Common APIs',
      '## Resource representations',
      '## Enums',
      '## Integration advice',
      '## Related pages',
    ],
  ],
  [
    '/platform-api/relation/overview',
    [
      '## Capability scope',
      '## Common APIs',
      '## Resource representations',
      '## Enums',
      '## Integration advice',
      '## Related pages',
    ],
  ],
  [
    '/platform-api/auth/overview',
    ['## Capability scope', '## Common APIs', '## Integration advice', '## Related pages'],
  ],
  [
    '/platform-api/group/overview',
    [
      '## Capability scope',
      '## Common APIs',
      '## Resource representations',
      '## Enums',
      '## Integration advice',
      '## Related pages',
    ],
  ],
  [
    '/platform-api/message/overview',
    ['## Capability scope', '## Common APIs', '## Enums', '## Integration advice', '## Related pages'],
  ],
  [
    '/platform-api/logs/overview',
    ['## Capability scope', '## Common APIs', '## Integration advice', '## Related pages'],
  ],
  [
    '/platform-api/conversation/overview',
    [
      '## Capability scope',
      '## Common APIs',
      '## Resource representations',
      '## Enums',
      '## Integration advice',
      '## Related pages',
    ],
  ],
  [
    '/platform-api/migration-to-openim',
    ['## Capability scope', '## Common APIs', '## Integration advice', '## Related pages'],
  ],
  [
    '/platform-api/error-codes',
    [
      '## Response structure',
      '## Error code ranges',
      '## Handling flow',
      '## Server error codes',
      '## Troubleshooting',
    ],
  ],
]);
const platformApiZhOverviewHeadingExpectations = new Map([
  ['/platform-api/overview', ['## 最常用', '## 推荐功能', '## 资源']],
  ['/platform-api/prepare-to-use-api', ['## 基础地址', '## 请求头', '## 鉴权', '## 请求体']],
  [
    '/platform-api/user/overview',
    ['## 能力范围', '## 常用接口', '## 资源表示', '## 枚举', '## 接入建议', '## 相关页面'],
  ],
  [
    '/platform-api/relation/overview',
    ['## 能力范围', '## 常用接口', '## 资源表示', '## 枚举', '## 接入建议', '## 相关页面'],
  ],
  [
    '/platform-api/auth/overview',
    ['## 能力范围', '## 常用接口', '## 接入建议', '## 相关页面'],
  ],
  [
    '/platform-api/group/overview',
    ['## 能力范围', '## 常用接口', '## 资源表示', '## 枚举', '## 接入建议', '## 相关页面'],
  ],
  [
    '/platform-api/conversation/overview',
    ['## 能力范围', '## 常用接口', '## 资源表示', '## 枚举', '## 接入建议', '## 相关页面'],
  ],
  [
    '/platform-api/message/overview',
    ['## 能力范围', '## 常用接口', '## 枚举', '## 接入建议', '## 相关页面'],
  ],
  [
    '/platform-api/logs/overview',
    ['## 能力范围', '## 常用接口', '## 接入建议', '## 相关页面'],
  ],
  [
    '/platform-api/timer/overview',
    ['## 能力范围', '## 资源结构', '## 枚举', '## 接入建议'],
  ],
  [
    '/platform-api/meeting/overview',
    ['## 能力范围', '## 资源结构', '## 枚举', '## 接入建议'],
  ],
  [
    '/platform-api/webhooks/overview',
    ['## 工作方式', '## 配置 Webhooks', '## 调用协议', '## 枚举', '## 回调能力', '## 接入建议', '## 相关页面'],
  ],
  [
    '/platform-api/migration-to-openim',
    ['## 能力范围', '## 常用接口', '## 接入建议', '## 相关页面'],
  ],
  [
    '/platform-api/error-codes',
    ['## 响应结构', '## 错误码范围', '## 处理流程', '## 服务端错误码', '## 排查建议'],
  ],
]);
const platformApiAllowedOverviewPaths = new Set([
  ...platformApiEnglishOverviewHeadingExpectations.keys(),
  ...platformApiZhOverviewHeadingExpectations.keys(),
]);
const visibleBrandPattern = /\bSendbird\b/i;
const activeSdkPlatforms = scope.products.sdk?.platforms ?? [];
if (activeSdkPlatforms.join('\n') !== expectedSdkPlatforms.join('\n')) {
  errors.push(
    `Active SDK platforms must be ${expectedSdkPlatforms.join(', ')}; got ${activeSdkPlatforms.join(
      ', ',
    )}`,
  );
}

for (const route of routes) {
  if (pathSet.has(route.path)) errors.push(`Duplicate route path: ${route.path}`);
  if (contentSet.has(route.contentFile))
    errors.push(`Duplicate content file: ${route.contentFile}`);
  pathSet.add(route.path);
  contentSet.add(route.contentFile);
  routeByPath.set(route.path, route);

  const productScope = scope.products[route.product];
  if (!productScope) {
    errors.push(`Route is outside the active content scope: ${route.path} (${route.product})`);
  } else {
    if (productScope.versions?.length > 0 && !productScope.versions.includes(route.version)) {
      errors.push(
        `Unsupported version in active scope: ${route.path} (${route.version ?? 'none'})`,
      );
    }
    if (productScope.platforms?.length > 0 && !productScope.platforms.includes(route.platform)) {
      errors.push(
        `Unsupported platform in active scope: ${route.path} (${route.platform ?? 'none'})`,
      );
    }
  }
  if (!scope.allowReferenceTemplates && route.template === 'reference') {
    errors.push(`Hand-authored reference page is disabled by scope: ${route.path}`);
  }

  const absolute = resolve(root, route.contentFile);
  try {
    const details = await stat(absolute);
    if (!details.isFile()) errors.push(`Not a file: ${route.contentFile}`);
  } catch {
    errors.push(`Missing MDX file: ${route.contentFile}`);
    continue;
  }

  const mdx = await readFile(absolute, 'utf8');
  const frontmatter = parseFrontmatter(mdx);
  for (const key of ['title', 'description', 'product', 'context', 'template', 'status']) {
    if (!frontmatter[key]) errors.push(`${route.contentFile}: missing frontmatter field “${key}”`);
  }
  if (frontmatter.title && frontmatter.title !== route.title) {
    warnings.push(`${route.contentFile}: title differs from generated route metadata`);
  }

  if (route.product === 'platform-api') {
    const bodyWithoutFrontmatter = mdx.replace(/^---\r?\n[\s\S]*?\r?\n---/, '');
    const isZhOnlyRoute = route.contentFile.startsWith('content/zh/');

    for (const pattern of platformApiUnsupportedPathPatterns) {
      if (pattern.test(route.path)) {
        errors.push(`${route.path}: unsupported Sendbird-only Platform API path was generated`);
      }
    }
    if (route.template === 'overview' && !platformApiAllowedOverviewPaths.has(route.path)) {
      errors.push(
        `${route.contentFile}: non-root Platform API overview page is outside current OpenIM coverage scope`,
      );
    }
    if (route.status !== 'published') {
      errors.push(`${route.contentFile}: Platform API route must be published`);
    }

    for (const pattern of platformApiDraftPatterns) {
      if (pattern.test(mdx)) {
        errors.push(`${route.contentFile}: contains Platform API draft wording (${pattern})`);
      }
    }
    if (visibleBrandPattern.test(bodyWithoutFrontmatter)) {
      errors.push(`${route.contentFile}: visible Platform API body must not mention Sendbird`);
    }
    for (const pattern of platformApiUncoveredPatterns) {
      if (pattern.test(bodyWithoutFrontmatter)) {
        errors.push(
          `${route.contentFile}: Platform API contains uncovered capability wording (${pattern})`,
        );
      }
    }
    for (const pattern of platformApiPublishedOnlyPatterns) {
      if (pattern.test(mdx)) {
        errors.push(
          `${route.contentFile}: Platform API page contains old English direct-only wording (${pattern})`,
        );
      }
    }

    if (isZhOnlyRoute) {
      if (frontmatter.title && containsUnexpectedEnglish(frontmatter.title)) {
        errors.push(`${route.contentFile}: localized title contains untranslated English text`);
      }
      const expectedOverviewHeadings = platformApiZhOverviewHeadingExpectations.get(route.path);
      if (expectedOverviewHeadings) {
        const actualHeadings = extractPlatformApiSecondLevelHeadings(bodyWithoutFrontmatter);
        if (actualHeadings.join('\n') !== expectedOverviewHeadings.join('\n')) {
          errors.push(
            `${route.contentFile}: overview heading structure differs; expected ${JSON.stringify(
              expectedOverviewHeadings,
            )}, got ${JSON.stringify(actualHeadings)}`,
          );
        }
      }
      for (const pattern of platformApiZhLegacyPatterns) {
        if (pattern.test(bodyWithoutFrontmatter)) {
          errors.push(
            `${route.contentFile}: contains English Platform API template text (${pattern})`,
          );
        }
      }
      if (route.template === 'api') {
        for (const heading of platformApiZhRequiredApiHeadings) {
          if (!bodyWithoutFrontmatter.includes(heading)) {
            errors.push(`${route.contentFile}: missing Chinese heading "${heading}"`);
          }
        }
        if (
          !bodyWithoutFrontmatter.includes('## 参数') &&
          !bodyWithoutFrontmatter.includes('## 请求参数') &&
          !bodyWithoutFrontmatter.includes('## 请求体')
        ) {
          errors.push(
            `${route.contentFile}: missing Sendbird-style parameter/request-body section`,
          );
        }
        for (const pattern of platformApiForbiddenApiHeadings) {
          if (pattern.test(bodyWithoutFrontmatter)) {
            errors.push(
              `${route.contentFile}: contains non-Sendbird Platform API heading ${pattern}`,
            );
          }
        }
      }
    } else {
      if (containsCjk(frontmatter.title ?? '') || containsCjk(frontmatter.description ?? '')) {
        errors.push(`${route.contentFile}: English Platform API frontmatter contains Chinese text`);
      }
      if (containsCjk(bodyWithoutFrontmatter)) {
        errors.push(`${route.contentFile}: English Platform API body contains Chinese text`);
      }
      const expectedOverviewHeadings = platformApiEnglishOverviewHeadingExpectations.get(
        route.path,
      );
      if (expectedOverviewHeadings) {
        const actualHeadings = extractPlatformApiSecondLevelHeadings(bodyWithoutFrontmatter);
        if (actualHeadings.join('\n') !== expectedOverviewHeadings.join('\n')) {
          errors.push(
            `${route.contentFile}: English overview heading structure differs; expected ${JSON.stringify(
              expectedOverviewHeadings,
            )}, got ${JSON.stringify(actualHeadings)}`,
          );
        }
      }
      if (route.path === '/platform-api/error-codes') {
        checkPlatformApiEnglishErrorCodesPage(bodyWithoutFrontmatter, route.contentFile);
      }
      if (route.template === 'api') {
        for (const heading of platformApiEnglishRequiredApiHeadings) {
          if (!mdx.includes(heading)) {
            errors.push(`${route.contentFile}: missing English heading "${heading}"`);
          }
        }
        if (!mdx.includes('## Request body') && !mdx.includes('## Request parameters')) {
          errors.push(
            `${route.contentFile}: missing English request body or request parameters heading`,
          );
        }
        if (route.path === platformApiListUsersPath) {
          checkPlatformApiEnglishListUsersPage(bodyWithoutFrontmatter, route.contentFile);
        }
      }

      const localizedFiles = localizedContentFileCandidates(route.contentFile);
      let localizedFile = localizedFiles[0];
      let localizedMdx = '';
      for (const candidate of localizedFiles) {
        try {
          const localizedPath = resolve(root, candidate);
          const details = await stat(localizedPath);
          if (!details.isFile()) continue;
          localizedFile = candidate;
          localizedMdx = await readFile(localizedPath, 'utf8');
          break;
        } catch {}
      }
      if (!localizedMdx) {
        errors.push(`Missing Chinese Platform API MDX file: ${localizedFile}`);
      }
      if (localizedMdx) {
        const localizedFrontmatter = parseFrontmatter(localizedMdx);
        if (!localizedFrontmatter.title) {
          errors.push(`${localizedFile}: missing localized title`);
        } else if (containsUnexpectedEnglish(localizedFrontmatter.title)) {
          errors.push(`${localizedFile}: localized title contains untranslated English text`);
        }
        const localizedBody = localizedMdx.replace(/^---\r?\n[\s\S]*?\r?\n---/, '');
        if (visibleBrandPattern.test(localizedMdx)) {
          errors.push(`${localizedFile}: visible Chinese page must not mention Sendbird`);
        }
        const expectedZhOverviewHeadings = platformApiZhOverviewHeadingExpectations.get(
          route.path,
        );
        if (expectedZhOverviewHeadings) {
          const actualHeadings = extractPlatformApiSecondLevelHeadings(localizedBody);
          if (actualHeadings.join('\n') !== expectedZhOverviewHeadings.join('\n')) {
            errors.push(
              `${localizedFile}: overview heading structure differs; expected ${JSON.stringify(
                expectedZhOverviewHeadings,
              )}, got ${JSON.stringify(actualHeadings)}`,
            );
          }
        }
        if (route.path === '/platform-api/error-codes') {
          checkPlatformApiErrorCodesPage(localizedBody, localizedFile);
        }
        for (const pattern of platformApiUncoveredPatterns) {
          if (pattern.test(localizedBody)) {
            errors.push(
              `${localizedFile}: contains uncovered capability wording (${pattern})`,
            );
          }
        }
        for (const pattern of platformApiZhLegacyPatterns) {
          if (pattern.test(localizedBody)) {
            errors.push(
              `${localizedFile}: contains English Platform API template text (${pattern})`,
            );
          }
        }
        if (route.template === 'api') {
          for (const heading of platformApiZhRequiredApiHeadings) {
            if (!localizedBody.includes(heading)) {
              errors.push(`${localizedFile}: missing Chinese heading "${heading}"`);
            }
          }
          if (
            !localizedBody.includes('## 参数') &&
            !localizedBody.includes('## 请求参数') &&
            !localizedBody.includes('## 请求体')
          ) {
            errors.push(
              `${localizedFile}: missing Sendbird-style parameter/request-body section`,
            );
          }
          for (const pattern of platformApiForbiddenApiHeadings) {
            if (pattern.test(localizedBody)) {
              errors.push(
                `${localizedFile}: contains non-Sendbird Platform API heading ${pattern}`,
              );
            }
          }
          if (route.path === platformApiListUsersPath) {
            checkPlatformApiListUsersPage(localizedBody, localizedFile, { localized: true });
          }
        }
      }
    }
  }

  for (const href of mdx.matchAll(/href=["']((?:\/zh)?\/(?:sdk|platform-api)(?:\/[^"']*)?)["']/g)) {
    const routePath = href[1].replace(/^\/zh(?=\/(?:sdk|platform-api)(?:\/|$))/, '');
    if (isChatDocumentationPath(routePath) && !pathSet.has(routePath)) {
      warnings.push(`${route.contentFile}: unresolved internal link ${href[1]}`);
    }
  }
}

const clientSdkSearchScope = getClientSdkSidebarApplicationScope({
  routes,
  sidebars: clientSdkStructures.map(({ platform, sidebar }) => ({
    platform,
    config: sidebar,
  })),
});

errors.push(
  ...validateSearchIndexPaths({
    routes,
    auditPages: new Map(
      clientSdkStructures
        .flatMap(({ audit }) => audit.pages)
        .map((page) => [page.currentPath, page]),
    ),
    clientSdkActivePaths: clientSdkSearchScope.activePaths,
    managedClientSdkContexts: clientSdkSearchScope.managedContexts,
    indexes: { en: searchIndex, zh: searchIndexZh },
  }),
);

const navigatedPaths = new Set();
for (const context of navigation.contexts) {
  for (const path of flattenNavigation(context.nodes)) {
    if (navigatedPaths.has(path)) warnings.push(`Navigation path appears more than once: ${path}`);
    navigatedPaths.add(path);
    if (!routeByPath.has(path)) errors.push(`Navigation points to unknown route: ${path}`);
  }
}

const sdkContextPlatforms = navigation.contexts
  .filter((context) => context.product === 'sdk')
  .map((context) => context.platform)
  .filter(Boolean);
if (sdkContextPlatforms.join('\n') !== expectedSdkPlatforms.join('\n')) {
  errors.push(
    `Navigation SDK platforms must be ${expectedSdkPlatforms.join(
      ', ',
    )}; got ${sdkContextPlatforms.join(', ')}`,
  );
}

const routeSdkPlatforms = [
  ...new Set(
    routes
      .filter((route) => route.product === 'sdk')
      .map((route) => route.platform)
      .filter(Boolean),
  ),
];
if (routeSdkPlatforms.join('\n') !== expectedSdkPlatforms.join('\n')) {
  errors.push(
    `Route SDK platforms must be ${expectedSdkPlatforms.join(', ')}; got ${routeSdkPlatforms.join(
      ', ',
    )}`,
  );
}

for (const route of routes) {
  if (route.path === '') continue;
  if (!navigatedPaths.has(route.path))
    warnings.push(`Route is not represented in sidebar navigation: ${route.path}`);
}

const platformContext = navigation.contexts.find(
  (context) => context.key === 'chat/platform-api',
);
if (platformContext) {
  for (const segment of collectFolderSegments(platformContext.nodes)) {
    if (!platformApiZh.navigationLabels[segment]) {
      errors.push(`Missing Chinese Platform API navigation label for segment: ${segment}`);
    }
  }
}

console.log(`Content files checked: ${routes.length.toLocaleString()}`);
console.log(`Navigation contexts: ${navigation.contexts.length.toLocaleString()}`);
console.log(
  `Search records: ${searchIndex.length.toLocaleString()} en, ${searchIndexZh.length.toLocaleString()} zh`,
);

if (warnings.length > 0) {
  console.warn(`Warnings: ${warnings.length}`);
  for (const warning of warnings.slice(0, 20)) console.warn(`  - ${warning}`);
  if (warnings.length > 20) console.warn(`  … ${warnings.length - 20} additional warnings omitted`);
}

if (errors.length > 0) {
  console.error(`Errors: ${errors.length}`);
  for (const error of errors.slice(0, 50)) console.error(`  - ${error}`);
  process.exitCode = 1;
} else {
  console.log('Content integrity check passed.');
}

function parseFrontmatter(source) {
  const match = source.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  const result = {};
  for (const line of match[1].split('\n')) {
    const separator = line.indexOf(':');
    if (separator < 0) continue;
    const key = line.slice(0, separator).trim();
    const raw = line.slice(separator + 1).trim();
    try {
      result[key] = JSON.parse(raw);
    } catch {
      result[key] = raw.replace(/^['"]|['"]$/g, '');
    }
  }
  return result;
}

function collectFolderSegments(nodes) {
  const segments = new Set();
  for (const node of nodes) {
    if (node.children?.length > 0 && !node.href && node.segment) segments.add(node.segment);
    for (const segment of collectFolderSegments(node.children ?? [])) segments.add(segment);
  }
  return segments;
}

function containsUnexpectedEnglish(value) {
  const allowed = value.replace(
    /\b(OpenIM|Platform|API|REST|Webhook|Token|ID|URL|APNs|FCM|HMS|GDPR|DAU|MAU|IP|SDK|APP|HTTP|JSON)\b/g,
    '',
  );
  return /[A-Za-z]{2,}/.test(allowed);
}

function containsCjk(value) {
  return /[\u3400-\u9fff]/.test(value);
}

function extractPlatformApiSecondLevelHeadings(body) {
  return body
    .split(/\r?\n/)
    .map((line) => line.match(/^(##)\s+(.+)$/))
    .filter((match) => Boolean(match))
    .map((match) => `${match[1]} ${match[2].trim()}`);
}

function checkPlatformApiListUsersPage(body, label, options = {}) {
  const actualHeadings = extractPlatformApiSecondLevelHeadings(body);
  for (const heading of ['## HTTP 请求', '## 参数', '## 响应']) {
    if (!actualHeadings.includes(heading)) {
      errors.push(`${label}: list-users page is missing heading "${heading}"`);
    }
  }
  for (const expected of platformApiListUsersExpectedSnippets) {
    if (!body.includes(expected)) {
      errors.push(`${label}: list-users page is missing "${expected}"`);
    }
  }
  const resourceExpectation = options.localized
    ? '/platform-api/user/overview#userinfo'
    : 'users[].userID';
  if (!body.includes(resourceExpectation)) {
    errors.push(`${label}: list-users page is missing "${resourceExpectation}"`);
  }
  for (const forbidden of platformApiListUsersForbiddenSnippets) {
    if (body.includes(forbidden)) {
      errors.push(`${label}: list-users page contains raw sample host ${forbidden}`);
    }
  }
}

function checkPlatformApiEnglishListUsersPage(body, label) {
  for (const expected of platformApiEnglishListUsersExpectedSnippets) {
    if (!body.includes(expected)) {
      errors.push(`${label}: list-users page is missing "${expected}"`);
    }
  }
  for (const forbidden of platformApiListUsersForbiddenSnippets) {
    if (body.includes(forbidden)) {
      errors.push(`${label}: list-users page contains raw sample host ${forbidden}`);
    }
  }
}

function checkPlatformApiEnglishErrorCodesPage(body, label) {
  for (const expected of [
    'errCode === 0',
    '1-9999',
    '10000-20000',
    '20001-29999',
    '| 1001 | Request | Invalid arguments',
    '| 1002 | Request | Permission denied',
    '| 1501 | Token | Token expired',
    'Convert internal error details into product-safe messages',
    'Many `1002` or `1501-1507` errors',
  ]) {
    if (!body.includes(expected)) {
      errors.push(`${label}: error-codes page is missing "${expected}"`);
    }
  }
}

function checkPlatformApiErrorCodesPage(body, label) {
  for (const expected of [
    'errCode === 0',
    '1~9999',
    '10000~20000',
    '20001~29999',
    '| 1001 | 通用请求 | 参数错误',
    '| 1002 | 通用请求 | 权限不足',
    '| 1501 | Token | token 已过期',
    '不要直接暴露内部错误详情',
    '大量出现 `1002` 或 `1501~1507`',
  ]) {
    if (!body.includes(expected)) {
      errors.push(`${label}: error-codes page is missing "${expected}"`);
    }
  }
}

function* flattenNavigation(nodes) {
  for (const node of nodes) {
    if (node.href) yield node.href;
    yield* flattenNavigation(node.children ?? []);
  }
}

async function readJson(relativePath) {
  return JSON.parse(await readFile(resolve(root, relativePath), 'utf8'));
}
