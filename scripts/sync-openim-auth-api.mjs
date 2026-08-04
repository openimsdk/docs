import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';

const root = process.cwd();
const today = new Date().toLocaleDateString('en-CA', { timeZone: 'Asia/Taipei' });
const localRoot = '/platform-api/auth';
const contentRoot = 'content/docs/chat/platform-api/auth';
const zhContentRoot = 'content/zh/docs/chat/platform-api/auth';
const contextKey = 'chat/platform-api';
const contextTitle = 'Platform API';

// Mirrors open-im-server/internal/api/router.go authRouterGroup.POST order.
const goAuthApiOrder = [
  '/auth/get_admin_token',
  '/auth/get_user_token',
  '/auth/parse_token',
  '/auth/force_logout',
];
const goAuthApiOrderIndex = new Map(goAuthApiOrder.map((endpoint, index) => [endpoint, index]));

const publicHeaders = [
  ['operationID', '是', 'string', '每次请求的唯一链路追踪 ID，建议由后端生成并写入日志。'],
  ['Content-Type: application/json', '是', 'string', '请求体为 JSON 时必须设置。'],
];

const adminHeaders = [
  ['operationID', '是', 'string', '每次请求的唯一链路追踪 ID，建议由后端生成并写入日志。'],
  ['token', '是', 'string', 'APP 管理员 Token；仅保存在可信后端服务中。'],
  ['Content-Type: application/json', '是', 'string', '请求体为 JSON 时必须设置。'],
];

const authTokenData = {
  token: 'admin_or_user_token_sample',
  expireTimeSeconds: 7776000,
};

const authApis = [
  {
    slug: 'get-admin-token',
    title: '获取管理员 Token',
    endpoint: '/auth/get_admin_token',
    summary:
      '使用服务端配置的 secret 为 APP 管理员账号签发管理员 Token，供可信后端调用管理端 REST API。',
    sample: { secret: 'openIM123', userID: 'imAdmin' },
    fields: [
      ['secret', '是', 'string', '服务端配置文件 `config/share.yml` 中的 `secret`。'],
      [
        'userID',
        '是',
        'string',
        'APP 管理员用户 ID，默认通常为 `imAdmin`，必须在服务端管理员账号配置中。',
      ],
    ],
    responseData: authTokenData,
    responseFields: [
      ['data.token', 'string', '签发的 APP 管理员 Token。'],
      ['data.expireTimeSeconds', 'int', 'Token 有效期，单位秒。'],
    ],
    headers: publicHeaders,
    sideEffects: '为指定 APP 管理员签发新的管理员 Token，并记录一次管理员登录。',
    limits: [
      '`secret` 必须与服务端配置一致。',
      '`userID` 必须是服务端配置中的 APP 管理员账号。',
      '此接口在 router 白名单中，不需要携带管理员 Token。',
    ],
  },
  {
    slug: 'get-user-token',
    title: '获取用户 Token',
    endpoint: '/auth/get_user_token',
    summary: '由可信后端为指定用户和登录终端签发用户 Token，客户端使用该 Token 登录 SDK。',
    sample: { platformID: 2, userID: 'user_001' },
    fields: [
      [
        'platformID',
        '是',
        'int',
        '用户登录终端类型，例如 iOS、Android、Web 等；不能传管理员平台 ID。',
      ],
      ['userID', '是', 'string', '需要签发 Token 的普通用户 ID。'],
    ],
    responseData: authTokenData,
    responseFields: [
      ['data.token', 'string', '签发的用户 Token。'],
      ['data.expireTimeSeconds', 'int', 'Token 有效期，单位秒。'],
    ],
    headers: adminHeaders,
    sideEffects: '为指定普通用户签发新的用户 Token，并写入服务端 Token 状态。',
    limits: [
      '必须使用 APP 管理员 Token 调用。',
      '`platformID` 不能是管理员平台 ID。',
      '`userID` 不能是 APP 管理员账号，也不能是通知类应用账号。',
      '目标用户必须已注册到 OpenIM。',
    ],
  },
  {
    slug: 'parse-token',
    title: '解析 Token',
    endpoint: '/auth/parse_token',
    summary: '解析一个 OpenIM Token，返回 Token 所属用户、终端类型和过期时间。',
    sample: { token: 'user_or_admin_token_sample' },
    fields: [['token', '是', 'string', '需要解析的 OpenIM Token。']],
    responseData: {
      userID: 'user_001',
      platformID: 2,
      expireTimeSeconds: 1719800000,
    },
    responseFields: [
      ['data.userID', 'string', 'Token 所属用户 ID。'],
      ['data.platformID', 'int', 'Token 所属终端类型。'],
      ['data.expireTimeSeconds', 'int', 'Token 过期时间，Unix 秒级时间戳。'],
    ],
    headers: publicHeaders,
    sideEffects: '只读解析，不创建或修改 Token 状态。',
    limits: [
      '此接口在 router 白名单中，不需要携带管理员 Token。',
      '被解析的 Token 必须格式正确、未过期，且未被踢下线。',
    ],
  },
  {
    slug: 'force-logout',
    title: '强制用户下线',
    endpoint: '/auth/force_logout',
    summary: '强制指定用户从某个终端退出登录，客户端 SDK 会收到被踢下线回调。',
    sample: { platformID: 2, userID: 'user_001' },
    fields: [
      ['platformID', '是', 'int', '需要踢下线的终端类型。'],
      ['userID', '是', 'string', '需要强制下线的用户 ID。'],
    ],
    headers: adminHeaders,
    sideEffects: '将指定用户在指定终端的 Token 标记为 kicked，并通知网关断开对应连接。',
    limits: ['必须使用 APP 管理员 Token 调用。', '`platformID` 和 `userID` 必填。'],
  },
];

validateGoAuthApiOrder();

const externalAuthApis = [...authApis].sort(compareByGoAuthApiOrder);

await rm(resolve(root, contentRoot), { force: true, recursive: true });
await rm(resolve(root, zhContentRoot), { force: true, recursive: true });

const routesPath = resolve(root, 'src/generated/routes.json');
const navigationPath = resolve(root, 'src/generated/navigation.json');
const platformApiZhPath = resolve(root, 'src/generated/platform-api-zh-content.json');
const structurePath = resolve(root, 'data/structure/chat-pages.json');

const routes = JSON.parse(await readFile(routesPath, 'utf8'));
const navigation = JSON.parse(await readFile(navigationPath, 'utf8'));
const platformApiZh = JSON.parse(await readFile(platformApiZhPath, 'utf8'));

const routesWithoutAuth = routes.filter((route) => !route.path.startsWith(`${localRoot}/`));
const maxSourceIndex = Math.max(...routesWithoutAuth.map((route) => route.sourceIndex ?? 0));
const maxNavOrder = Math.max(...routesWithoutAuth.map((route) => route.navOrder ?? 0));

const newRoutes = [];
for (const [index, spec] of externalAuthApis.entries()) {
  const path = `${localRoot}/${spec.slug}`;
  const relativePath = path.replace(/^\/docs\//, '');
  const contentFile = `${contentRoot}/${spec.slug}.mdx`;
  const record = {
    id: 0,
    path,
    relativePath,
    sourcePath: path,
    title: spec.title,
    description: `OpenIM 认证 REST API：${spec.title}。`,
    product: 'platform-api',
    version: 'v3',
    platform: null,
    contextKey,
    contextTitle,
    template: 'api',
    status: 'published',
    sourceIndex: maxSourceIndex + index + 1,
    contentFile,
    navOrder: maxNavOrder + index + 1,
  };
  newRoutes.push(record);

  await writeMdx(contentFile, renderMdx(record, spec, false));
  await writeMdx(`${zhContentRoot}/${spec.slug}.mdx`, renderMdx(record, spec, true));
}

const nextRoutes = [...routesWithoutAuth, ...newRoutes].map((route, index) => ({
  ...route,
  id: index + 1,
}));

const platformContext = navigation.contexts.find((context) => context.key === contextKey);
if (!platformContext) {
  throw new Error(`Missing navigation context: ${contextKey}`);
}

const authNode = {
  id: 'auth',
  segment: 'auth',
  title: '认证',
  href: null,
  type: 'folder',
  children: newRoutes.map((route) => ({
    id: `auth/${route.path.split('/').at(-1)}`,
    segment: route.path.split('/').at(-1),
    title: route.title,
    href: route.path,
    type: 'page',
    children: [],
    minIndex: route.navOrder,
  })),
  minIndex: newRoutes[0]?.navOrder ?? maxNavOrder + 1,
};

platformContext.nodes = platformContext.nodes.filter((node) => node.id !== 'auth');
const groupIndex = platformContext.nodes.findIndex((node) => node.id === 'group');
const thirdIndex = platformContext.nodes.findIndex((node) => node.id === 'third');
const messageIndex = platformContext.nodes.findIndex((node) => node.id === 'message');
if (groupIndex >= 0) {
  platformContext.nodes.splice(groupIndex + 1, 0, authNode);
} else if (thirdIndex >= 0) {
  platformContext.nodes.splice(thirdIndex, 0, authNode);
} else if (messageIndex >= 0) {
  platformContext.nodes.splice(messageIndex, 0, authNode);
} else {
  platformContext.nodes.push(authNode);
}
platformContext.pageCount = nextRoutes.filter((route) => route.contextKey === contextKey).length;

platformApiZh.generatedAt = today;
platformApiZh.navigationLabels = {
  ...platformApiZh.navigationLabels,
  auth: '认证',
};

await Promise.all([
  writeFile(routesPath, `${JSON.stringify(nextRoutes, null, 2)}\n`, 'utf8'),
  writeFile(navigationPath, `${JSON.stringify(navigation, null, 2)}\n`, 'utf8'),
  writeFile(platformApiZhPath, `${JSON.stringify(platformApiZh, null, 2)}\n`, 'utf8'),
  writeFile(
    structurePath,
    `${JSON.stringify(
      nextRoutes.map((route) => ({
        sourcePath: route.sourcePath,
        openimPath: route.path,
        title: route.title,
        context: route.contextKey,
        template: route.template,
        contentFile: route.contentFile,
      })),
      null,
      2,
    )}\n`,
    'utf8',
  ),
]);

console.log(`Wrote ${externalAuthApis.length} OpenIM auth API page(s).`);

async function writeMdx(file, body) {
  await mkdir(dirname(resolve(root, file)), { recursive: true });
  await writeFile(
    resolve(root, file),
    body.replaceAll('/docs/chat/platform-api/v3', '/platform-api'),
    'utf8',
  );
}

function renderMdx(record, spec, localized) {
  const frontmatter = localized
    ? {
        title: record.title,
        description: record.description,
        sourcePath: record.sourcePath,
      }
    : {
        title: record.title,
        description: record.description,
        product: record.product,
        context: record.contextKey,
        template: record.template,
        status: record.status,
        lastUpdated: today,
        version: record.version,
        sourcePath: record.sourcePath,
      };

  return `---\n${renderFrontmatter(frontmatter)}\n---\n\n${renderBody(spec)}\n`;
}

function renderBody(spec) {
  const success = {
    errCode: 0,
    errMsg: '',
    errDlt: '',
    ...(spec.responseData !== undefined ? { data: spec.responseData } : {}),
  };
  const responseFields = [
    ['errCode', 'int', '业务错误码，0 表示成功。'],
    ['errMsg', 'string', '错误简要信息，成功时通常为空。'],
    ['errDlt', 'string', '错误详细信息，成功时通常为空。'],
    ...(spec.responseData !== undefined ? [['data', 'object', '接口返回数据。']] : []),
    ...(spec.responseFields ?? []),
  ];

  return `使用 **${spec.title}** 从可信后端调用 OpenIM 认证 REST 接口。${spec.summary} 请先在[接入准备](/docs/chat/platform-api/v3/prepare-to-use-api)中配置 API 地址；管理员 Token 只能保存在可信后端服务中，不能下发到客户端或写入前端代码。\n\n## HTTP 请求\n\n\`\`\`bash\nPOST {API_ADDRESS}${spec.endpoint}\n\`\`\`\n\n### 请求示例\n\n\`\`\`bash\n${renderCurl(spec)}\n\`\`\`\n\n## 参数\n\n此接口通过请求头传入链路追踪信息，通过 JSON 请求体传递业务参数。除 router 白名单接口外，管理端接口还需要在请求头中携带 APP 管理员 Token。\n\n### 请求头\n\n${renderTable(['Header', '是否必填', '类型', '说明'], spec.headers)}\n\n## 请求体\n\n\`\`\`json\n${json(spec.sample)}\n\`\`\`\n\n${renderTable(['参数名', '是否必填', '类型', '说明'], spec.fields)}\n\n## 响应\n\n请求被 OpenIM 正常处理时通常返回 \`200 OK\`。业务是否成功以响应体中的 \`errCode\` 为准；\`errCode === 0\` 表示成功，非 0 表示业务错误。\n\n\`\`\`json\n${json(success)}\n\`\`\`\n\n### 响应参数\n\n${renderTable(['参数名', '类型', '说明'], responseFields)}\n\n### 错误\n\n如果请求失败，OpenIM 返回错误对象。更多错误码说明见[错误码](/docs/chat/platform-api/v3/error-codes)。\n\n\`\`\`json\n${json({ errCode: 1004, errMsg: 'RecordNotFoundError', errDlt: ': [1004]RecordNotFoundError' })}\n\`\`\`\n\n| 错误场景 | 可能原因 | 处理方式 |\n| -------- | -------- | -------- |\n| 鉴权失败 | \`secret\` 不正确、\`token\` 缺失或 Token 已过期。 | 检查服务端配置，重新获取 APP 管理员 Token。 |\n| 链路追踪困难 | \`operationID\` 缺失或在大量请求中重复使用。 | 为每次请求生成独立 \`operationID\`，并在服务端日志中保留。 |\n| 参数校验失败 | 请求体字段类型、必填字段或终端类型不符合接口要求。 | 对照请求体参数表和限制说明检查字段。 |\n\n## 权限和限制\n\n- ${spec.sideEffects}\n${spec.limits.map((item) => `- ${item}`).join('\n')}\n\n## 相关页面\n\n- [接入准备](/docs/chat/platform-api/v3/prepare-to-use-api)\n- [获取用户信息](/docs/chat/platform-api/v3/user/listing-users/get-a-user)\n- [错误码](/docs/chat/platform-api/v3/error-codes)`;
}

function renderCurl(spec) {
  const lines = [
    `curl --request POST "\${API_ADDRESS}${spec.endpoint}" \\`,
    '  --header "Content-Type: application/json; charset=utf-8" \\',
    '  --header "operationID: ${OPERATION_ID}" \\',
  ];
  if (spec.headers.some(([name]) => name === 'token')) {
    lines.push('  --header "token: ${ADMIN_TOKEN}" \\');
  }
  lines.push(`  --data-raw '${json(spec.sample)}'`);
  return lines.join('\n');
}

function renderFrontmatter(values) {
  return Object.entries(values)
    .map(([key, value]) => `${key}: ${JSON.stringify(value)}`)
    .join('\n');
}

function validateGoAuthApiOrder() {
  const endpoints = new Set(authApis.map((api) => api.endpoint));
  const missingOrder = [...endpoints].filter((endpoint) => !goAuthApiOrderIndex.has(endpoint));
  if (missingOrder.length > 0) {
    throw new Error(`Missing Go auth API order for: ${missingOrder.join(', ')}`);
  }

  const missingSpec = goAuthApiOrder.filter((endpoint) => !endpoints.has(endpoint));
  if (missingSpec.length > 0) {
    throw new Error(`Missing auth API spec for: ${missingSpec.join(', ')}`);
  }
}

function compareByGoAuthApiOrder(a, b) {
  return goAuthApiOrderIndex.get(a.endpoint) - goAuthApiOrderIndex.get(b.endpoint);
}

function renderTable(headers, rows) {
  const divider = headers.map(() => '---');
  const lines = [headers, divider, ...rows].map((row) => `| ${row.map(escapeCell).join(' | ')} |`);
  return lines.join('\n');
}

function escapeCell(value) {
  return String(value).replace(/\|/g, '\\|');
}

function json(value) {
  return JSON.stringify(value, null, 2);
}
