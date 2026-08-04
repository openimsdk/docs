import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';

const root = process.cwd();
const today = new Date().toLocaleDateString('en-CA', { timeZone: 'Asia/Taipei' });
const localRoot = '/platform-api/third';
const contentRoot = 'content/docs/chat/platform-api/third';
const zhContentRoot = 'content/zh/docs/chat/platform-api/third';
const contextKey = 'chat/platform-api';
const contextTitle = 'Platform API';

// Mirrors open-im-server/internal/api/router.go thirdGroup/logs/objectGroup order.
const goThirdApiOrder = [
  '/third/prometheus',
  '/third/fcm_update_token',
  '/third/set_app_badge',
  '/third/logs/upload',
  '/third/logs/delete',
  '/third/logs/search',
  '/object/part_limit',
  '/object/part_size',
  '/object/initiate_multipart_upload',
  '/object/auth_sign',
  '/object/complete_multipart_upload',
  '/object/access_url',
  '/object/initiate_form_data',
  '/object/complete_form_data',
  '/object/*name',
];
const goThirdApiOrderIndex = new Map(goThirdApiOrder.map((endpoint, index) => [endpoint, index]));

const commonPostHeaders = [
  ['operationID', '是', 'string', '每次请求的唯一链路追踪 ID，建议由后端生成并写入日志。'],
  [
    'token',
    '是',
    'string',
    'APP 管理员 Token 或具备对应权限的用户 Token；仅保存在可信后端服务中。',
  ],
  ['Content-Type: application/json', '是', 'string', '请求体为 JSON 时必须设置。'],
];

const objectPostHeaders = [
  ...commonPostHeaders,
  [
    'X-Request-Api',
    '否',
    'string',
    '生成对象访问 URL 时使用的 API 外部地址；不传时服务端根据当前请求地址推导。',
  ],
];

const keyValues = [{ key: 'Content-Type', values: ['application/octet-stream'] }];
const queryValues = [{ key: 'partNumber', values: ['1'] }];
const signPart = {
  partNumber: 1,
  url: 'https://storage.example.com/upload?partNumber=1',
  query: queryValues,
  header: keyValues,
};
const authSignParts = {
  url: 'https://storage.example.com/upload',
  query: [],
  header: keyValues,
  parts: [signPart],
};
const logInfo = {
  userID: 'user_001',
  platform: 'Android',
  url: 'https://example.com/logs/openim.log',
  createTime: 1719800000000,
  nickname: 'Tom',
  logID: '1234567890',
  filename: 'openim.log',
  systemType: '',
  ex: '',
  version: '1.0.0',
};

const paginationFields = [
  ['pagination', '是', 'object', '分页参数。'],
  ['pagination.pageNumber', '是', 'int', '页码，从 1 开始。'],
  ['pagination.showNumber', '是', 'int', '每页数量，必须大于 0。'],
];

const keyValuesFields = (prefix, summary) => [
  [prefix, 'array', summary],
  [`${prefix}[].key`, 'string', 'Header 或 query 参数名。'],
  [`${prefix}[].values`, 'array', '该参数对应的一个或多个字符串值。'],
];

const signPartFields = (prefix) => [
  [prefix, 'array', '分片上传签名列表。'],
  [`${prefix}[].partNumber`, 'int', '分片序号。'],
  [`${prefix}[].url`, 'string', '该分片上传地址。'],
  ...keyValuesFields(`${prefix}[].query`, '该分片上传地址需要追加的 query 参数。'),
  ...keyValuesFields(`${prefix}[].header`, '该分片上传请求需要携带的 Header。'),
];

const thirdApis = [
  {
    slug: 'prometheus',
    title: '跳转监控面板',
    endpoint: '/third/prometheus',
    method: 'GET',
    summary: '重定向到服务端配置的 Grafana 监控地址，用于查看 OpenIM 监控面板。',
    responseMode: 'redirect',
    redirectTarget: '服务端配置项 `API.Prometheus.GrafanaURL`',
    sideEffects: '只读跳转，不改变业务数据。',
    limits: [
      '此接口由 API 服务直接返回 `302 Found`。',
      '如果 Grafana 地址未配置或不可访问，需要先检查服务端监控配置。',
    ],
  },
  {
    slug: 'fcm-update-token',
    title: '更新 FCM Token',
    endpoint: '/third/fcm_update_token',
    method: 'POST',
    summary: '更新指定账号在某个终端上的 FCM 推送 Token 及过期时间。',
    sample: {
      platformID: 2,
      fcmToken: 'fcm_token_sample',
      account: 'user_001',
      expireTime: 1719803600,
    },
    fields: [
      ['platformID', '是', 'int', '终端平台 ID。'],
      ['fcmToken', '是', 'string', 'Firebase Cloud Messaging 推送 Token。'],
      ['account', '是', 'string', '推送 Token 所属账号，通常为用户 ID。'],
      ['expireTime', '是', 'int', '推送 Token 过期时间，单位由推送服务配置约定。'],
    ],
    headers: commonPostHeaders,
    sideEffects: '更新第三方推送 Token 缓存或存储记录。',
    limits: ['`platformID`、`fcmToken`、`account` 和 `expireTime` 必填。'],
  },
  {
    slug: 'set-app-badge',
    title: '设置应用角标',
    endpoint: '/third/set_app_badge',
    method: 'POST',
    summary: '设置指定用户在应用推送通道中的未读角标数量。',
    sample: { userID: 'user_001', appUnreadCount: 12 },
    fields: [
      ['userID', '是', 'string', '目标用户 ID。'],
      ['appUnreadCount', '是', 'int', '应用角标未读数。'],
    ],
    headers: commonPostHeaders,
    sideEffects: '更新用户在第三方推送服务中的应用角标数量。',
    limits: ['`userID` 和 `appUnreadCount` 必填。', '`appUnreadCount` 应大于等于 0。'],
  },
  {
    slug: 'upload-logs',
    title: '上传日志记录',
    endpoint: '/third/logs/upload',
    method: 'POST',
    summary: '登记客户端或业务侧已上传的日志文件 URL，便于后续在后台检索。',
    sample: {
      platform: 2,
      fileURLs: [{ filename: 'openim.log', URL: 'https://example.com/logs/openim.log' }],
      appFramework: 'flutter',
      version: '1.0.0',
      ex: '',
    },
    fields: [
      ['platform', '是', 'int', '日志来源终端平台 ID。'],
      ['fileURLs', '是', 'array', '已上传日志文件列表。'],
      ['fileURLs[].filename', '是', 'string', '日志文件名。'],
      ['fileURLs[].URL', '是', 'string', '日志文件可访问 URL。'],
      ['appFramework', '否', 'string', '客户端框架，例如 flutter、react-native。'],
      ['version', '否', 'string', '客户端或应用版本号。'],
      ['ex', '否', 'string', '扩展字段。'],
    ],
    headers: commonPostHeaders,
    sideEffects: '写入日志索引记录；日志文件本身应先由调用方上传到可访问地址。',
    limits: [
      '`platform` 和 `fileURLs` 必填。',
      '`fileURLs[].URL` 必须是服务端可访问的日志文件地址。',
    ],
  },
  {
    slug: 'delete-logs',
    title: '删除日志记录',
    endpoint: '/third/logs/delete',
    method: 'POST',
    summary: '按日志 ID 删除后台保存的日志索引记录。',
    sample: { logIDs: ['1234567890'] },
    fields: [['logIDs', '是', 'array', '需要删除的日志 ID 列表。']],
    headers: commonPostHeaders,
    sideEffects: '删除指定日志索引记录。',
    limits: ['必须使用 APP 管理员 Token 调用。', '`logIDs` 必填且不能为空。'],
  },
  {
    slug: 'search-logs',
    title: '搜索日志记录',
    endpoint: '/third/logs/search',
    method: 'POST',
    summary: '按关键字、时间范围和分页参数检索客户端日志记录。',
    sample: {
      keyword: 'user_001',
      startTime: 1719800000000,
      endTime: 1719886400000,
      pagination: { pageNumber: 1, showNumber: 20 },
    },
    fields: [
      ['keyword', '否', 'string', '搜索关键字，可匹配日志相关字段。'],
      [
        'startTime',
        '否',
        'int',
        '起始时间，Unix 毫秒时间戳；与 `endTime` 同时为 0 时服务端使用默认范围。',
      ],
      ['endTime', '否', 'int', '结束时间，Unix 毫秒时间戳。'],
      ...paginationFields,
    ],
    responseData: { logsInfos: [logInfo], total: 1 },
    responseFields: [
      ['data.logsInfos', 'array', '日志记录列表。'],
      ['data.logsInfos[].userID', 'string', '上传日志的用户 ID。'],
      ['data.logsInfos[].platform', 'string', '日志来源平台名称。'],
      ['data.logsInfos[].url', 'string', '日志文件 URL。'],
      ['data.logsInfos[].createTime', 'int', '日志记录创建时间，Unix 毫秒时间戳。'],
      ['data.logsInfos[].nickname', 'string', '上传用户昵称。'],
      ['data.logsInfos[].logID', 'string', '日志 ID。'],
      ['data.logsInfos[].filename', 'string', '日志文件名。'],
      ['data.logsInfos[].systemType', 'string', '系统类型。'],
      ['data.logsInfos[].ex', 'string', '扩展字段。'],
      ['data.logsInfos[].version', 'string', '客户端或应用版本号。'],
      ['data.total', 'int', '符合条件的日志总数。'],
    ],
    headers: commonPostHeaders,
    sideEffects: '只读查询，不删除或修改日志记录。',
    limits: [
      '必须使用 APP 管理员 Token 调用。',
      '`startTime` 不能大于 `endTime`。',
      '`pagination` 必填。',
    ],
  },
  {
    slug: 'part-limit',
    title: '获取分片上传限制',
    endpoint: '/object/part_limit',
    method: 'POST',
    summary: '获取对象存储分片上传允许的最小分片、最大分片和最大分片数量。',
    sample: {},
    fields: [['(空对象)', '是', 'object', '请求体传空 JSON 对象 `{}`。']],
    responseData: { minPartSize: 5242880, maxPartSize: 5368709120, maxNumSize: 10000 },
    responseFields: [
      ['data.minPartSize', 'int', '最小分片大小，单位字节。'],
      ['data.maxPartSize', 'int', '最大分片大小，单位字节。'],
      ['data.maxNumSize', 'int', '最大分片数量。'],
    ],
    headers: commonPostHeaders,
    sideEffects: '只读查询，不创建上传任务。',
    limits: ['请求体为空对象。'],
  },
  {
    slug: 'part-size',
    title: '计算分片大小',
    endpoint: '/object/part_size',
    method: 'POST',
    summary: '根据文件总大小计算推荐分片大小。',
    sample: { size: 10485760 },
    fields: [['size', '是', 'int', '文件总大小，单位字节。']],
    responseData: { size: 5242880 },
    responseFields: [['data.size', 'int', '推荐分片大小，单位字节。']],
    headers: commonPostHeaders,
    sideEffects: '只读计算，不创建上传任务。',
    limits: ['`size` 必须大于 0。'],
  },
  {
    slug: 'initiate-multipart-upload',
    title: '初始化分片上传',
    endpoint: '/object/initiate_multipart_upload',
    method: 'POST',
    summary: '创建对象存储分片上传任务，并返回 uploadID、分片大小和每个分片的上传签名。',
    sample: {
      hash: 'sha256_file_hash',
      size: 10485760,
      partSize: 5242880,
      maxParts: 2,
      cause: 'message',
      name: 'attachments/file.zip',
      contentType: 'application/zip',
    },
    fields: [
      ['hash', '是', 'string', '文件哈希，用于秒传或去重判断。'],
      ['size', '是', 'int', '文件总大小，单位字节。'],
      ['partSize', '是', 'int', '期望分片大小，单位字节。'],
      ['maxParts', '是', 'int', '允许的最大分片数量。'],
      ['cause', '否', 'string', '业务用途或对象分组，例如 `message`、`avatar`。'],
      ['name', '是', 'string', '对象名称，通常为业务侧保存的文件名或路径。'],
      ['contentType', '否', 'string', '文件 MIME 类型。'],
      [
        'urlPrefix',
        '否',
        'string',
        '服务端会根据 `X-Request-Api` 或当前请求地址自动补齐，通常不需要在请求体中传。',
      ],
    ],
    responseData: {
      url: '',
      upload: {
        uploadID: 'upload_id_sample',
        partSize: 5242880,
        sign: authSignParts,
        expireTime: 1719803600000,
      },
    },
    responseFields: [
      ['data.url', 'string', '如果同 hash 对象已存在，服务端可能直接返回对象访问 URL。'],
      ['data.upload', 'object', '新建分片上传任务信息。'],
      ['data.upload.uploadID', 'string', '上传任务 ID，后续签名和完成上传时使用。'],
      ['data.upload.partSize', 'int', '实际分片大小，单位字节。'],
      ['data.upload.sign', 'object', '上传签名信息。'],
      ...keyValuesFields('data.upload.sign.query', '上传地址需要追加的 query 参数。'),
      ...keyValuesFields('data.upload.sign.header', '上传请求需要携带的 Header。'),
      ...signPartFields('data.upload.sign.parts'),
      ['data.upload.expireTime', 'int', '上传签名过期时间，Unix 毫秒时间戳。'],
    ],
    headers: objectPostHeaders,
    sideEffects: '创建分片上传任务；若文件 hash 已存在，可能直接复用已有对象。',
    limits: [
      '`hash`、`size`、`partSize`、`maxParts` 和 `name` 必填。',
      '`name` 需要通过服务端对象名称校验。',
    ],
  },
  {
    slug: 'auth-sign',
    title: '刷新分片上传签名',
    endpoint: '/object/auth_sign',
    method: 'POST',
    summary: '为已有分片上传任务重新获取指定分片的上传签名。',
    sample: { uploadID: 'upload_id_sample', partNumbers: [1, 2] },
    fields: [
      ['uploadID', '是', 'string', '初始化分片上传返回的上传任务 ID。'],
      ['partNumbers', '是', 'array', '需要获取签名的分片序号列表。'],
    ],
    responseData: authSignParts,
    responseFields: [
      ['data.url', 'string', '通用上传地址。'],
      ...keyValuesFields('data.query', '通用上传地址需要追加的 query 参数。'),
      ...keyValuesFields('data.header', '通用上传请求需要携带的 Header。'),
      ...signPartFields('data.parts'),
    ],
    headers: commonPostHeaders,
    sideEffects: '只刷新上传签名，不完成上传任务。',
    limits: ['`uploadID` 和 `partNumbers` 必填。', '`partNumbers` 应与初始化任务的分片范围一致。'],
  },
  {
    slug: 'complete-multipart-upload',
    title: '完成分片上传',
    endpoint: '/object/complete_multipart_upload',
    method: 'POST',
    summary: '在所有分片上传到对象存储后，确认并生成 OpenIM 可访问的对象 URL。',
    sample: {
      uploadID: 'upload_id_sample',
      parts: ['etag_part_1', 'etag_part_2'],
      name: 'attachments/file.zip',
      contentType: 'application/zip',
      cause: 'message',
    },
    fields: [
      ['uploadID', '是', 'string', '初始化分片上传返回的上传任务 ID。'],
      ['parts', '是', 'array', '对象存储返回的分片完成标识列表。'],
      ['name', '是', 'string', '对象名称，需与初始化阶段保持一致。'],
      ['contentType', '否', 'string', '文件 MIME 类型。'],
      ['cause', '否', 'string', '业务用途或对象分组。'],
      [
        'urlPrefix',
        '否',
        'string',
        '服务端会根据 `X-Request-Api` 或当前请求地址自动补齐，通常不需要在请求体中传。',
      ],
    ],
    responseData: { url: 'https://api.example.com/object/attachments/file.zip' },
    responseFields: [['data.url', 'string', '完成上传后 OpenIM 返回的对象访问 URL。']],
    headers: objectPostHeaders,
    sideEffects: '完成对象存储分片上传，并写入 OpenIM 对象记录。',
    limits: ['`uploadID`、`parts` 和 `name` 必填。', '必须先完成所有分片上传，再调用此接口。'],
  },
  {
    slug: 'access-url',
    title: '获取对象访问地址',
    endpoint: '/object/access_url',
    method: 'POST',
    summary: '为已保存的对象生成临时可访问 URL，可附带图片处理 query 参数。',
    sample: {
      name: 'attachments/file.zip',
      query: { type: 'image', format: 'webp', width: '320', height: '320' },
    },
    fields: [
      ['name', '是', 'string', '对象名称。'],
      ['query', '否', 'object', '访问 URL 的 query 参数集合。'],
      ['query.type', '否', 'string', '处理类型；当前支持空值或 `image`。'],
      ['query.format', '否', 'string', '图片输出格式，仅 `query.type=image` 时使用。'],
      ['query.width', '否', 'string', '图片宽度，仅 `query.type=image` 时使用。'],
      ['query.height', '否', 'string', '图片高度，仅 `query.type=image` 时使用。'],
    ],
    responseData: { url: 'https://storage.example.com/signed-url', expireTime: 1720404800000 },
    responseFields: [
      ['data.url', 'string', '对象存储临时访问 URL。'],
      ['data.expireTime', 'int', '访问 URL 过期时间，Unix 毫秒时间戳。'],
    ],
    headers: commonPostHeaders,
    sideEffects: '只读生成访问 URL，不修改对象记录。',
    limits: ['`name` 必填。', '`query.type` 只能为空或 `image`。'],
  },
  {
    slug: 'initiate-form-data',
    title: '初始化表单直传',
    endpoint: '/object/initiate_form_data',
    method: 'POST',
    summary: '初始化表单直传任务，返回第三方存储直传所需的 URL、Header、表单字段和成功状态码。',
    sample: {
      name: 'avatar.png',
      size: 204800,
      contentType: 'image/png',
      group: 'avatar',
      millisecond: 600000,
      absolute: false,
    },
    fields: [
      ['name', '是', 'string', '对象名称，通常为文件名或业务路径。'],
      ['size', '是', 'int', '文件大小，单位字节。'],
      ['contentType', '是', 'string', '文件 MIME 类型。'],
      ['group', '否', 'string', '文件分组标识，用于存储端区分业务目录。'],
      [
        'millisecond',
        '否',
        'int',
        '上传凭证有效时长，单位毫秒；管理员调用时可指定，不传默认 10 分钟。',
      ],
      ['absolute', '否', 'boolean', '管理员调用时是否按 `name` 作为绝对对象 key。'],
    ],
    responseData: {
      id: 'base64-form-data-id',
      url: 'https://storage.example.com/form-upload',
      file: 'file',
      header: [{ key: 'Content-Type', values: ['multipart/form-data'] }],
      formData: {
        policy: 'BASE64_POLICY',
        signature: 'SIGN_VALUE',
        key: 'tmp/avatar.png',
      },
      expires: 1719800600000,
      successCodes: [200, 204],
    },
    responseFields: [
      ['data.id', 'string', '表单直传任务 ID，完成上传确认时使用。'],
      ['data.url', 'string', '第三方存储直传地址。'],
      ['data.file', 'string', '文件内容在 multipart/form-data 中使用的字段名。'],
      ...keyValuesFields('data.header', '直传请求需要携带的 Header。'),
      ['data.formData', 'object', '直传请求需要追加到表单中的字段集合。'],
      ['data.expires', 'int', '凭证过期时间，Unix 毫秒时间戳。'],
      ['data.successCodes', 'array', '直传成功时可接受的 HTTP 状态码。'],
    ],
    headers: commonPostHeaders,
    sideEffects: '创建一次表单直传凭证；文件内容仍需调用方直接上传到返回的第三方存储地址。',
    limits: [
      '`name`、`size` 和 `contentType` 必填。',
      '`size` 必须大于 0。',
      '直传成功后必须调用完成接口生成业务可访问 URL。',
    ],
    extraNotes: [
      '构造 `multipart/form-data` 请求时，需要把 `formData` 中的字段原样写入表单，并将真实文件内容放入返回的 `file` 字段。',
    ],
  },
  {
    slug: 'complete-form-data',
    title: '完成表单直传',
    endpoint: '/object/complete_form_data',
    method: 'POST',
    summary: '在表单直传成功后确认上传任务，写入对象记录并返回 OpenIM 可访问 URL。',
    sample: { id: 'base64-form-data-id' },
    fields: [
      ['id', '是', 'string', '初始化表单直传返回的任务 ID。'],
      [
        'urlPrefix',
        '否',
        'string',
        '服务端会根据 `X-Request-Api` 或当前请求地址自动补齐，通常不需要在请求体中传。',
      ],
    ],
    responseData: { url: 'https://api.example.com/object/avatar.png' },
    responseFields: [['data.url', 'string', '完成表单直传后 OpenIM 返回的对象访问 URL。']],
    headers: objectPostHeaders,
    sideEffects: '校验第三方存储对象，写入 OpenIM 对象记录，并生成访问 URL。',
    limits: ['`id` 必填。', '必须先使用初始化接口返回的凭证完成第三方存储直传。'],
  },
  {
    slug: 'object-redirect',
    title: '对象访问重定向',
    endpoint: '/object/*name',
    displayEndpoint: '/object/{name}',
    curlEndpoint: '/object/attachments/file.zip?operationID=${OPERATION_ID}',
    method: 'GET',
    summary: '按对象名称获取临时访问地址，并通过 `302 Found` 重定向到对象存储 URL。',
    responseMode: 'redirect',
    redirectTarget: '对象存储临时访问 URL',
    pathFields: [
      [
        'name',
        '是',
        'string',
        '对象名称；路径中的 `{name}` 会作为对象名传给 `/object/access_url`。',
      ],
    ],
    queryFields: [
      ['operationID', '否', 'string', '链路追踪 ID；不传时服务端会生成随机值。'],
      ['type', '否', 'string', '处理类型；当前支持空值或 `image`。'],
      ['format', '否', 'string', '图片输出格式，仅 `type=image` 时使用。'],
      ['width', '否', 'string', '图片宽度，仅 `type=image` 时使用。'],
      ['height', '否', 'string', '图片高度，仅 `type=image` 时使用。'],
    ],
    sideEffects: '只读生成访问 URL 并重定向，不修改对象记录。',
    limits: ['`name` 必须存在且不能为空。', '`type` 只能为空或 `image`。'],
  },
];

validateGoThirdApiOrder();

const externalThirdApis = [...thirdApis].sort(compareByGoThirdApiOrder);

await rm(resolve(root, contentRoot), { force: true, recursive: true });
await rm(resolve(root, zhContentRoot), { force: true, recursive: true });

const routesPath = resolve(root, 'src/generated/routes.json');
const navigationPath = resolve(root, 'src/generated/navigation.json');
const platformApiZhPath = resolve(root, 'src/generated/platform-api-zh-content.json');
const structurePath = resolve(root, 'data/structure/chat-pages.json');

const routes = JSON.parse(await readFile(routesPath, 'utf8'));
const navigation = JSON.parse(await readFile(navigationPath, 'utf8'));
const platformApiZh = JSON.parse(await readFile(platformApiZhPath, 'utf8'));

const routesWithoutThird = routes.filter((route) => !route.path.startsWith(`${localRoot}/`));
const maxSourceIndex = Math.max(...routesWithoutThird.map((route) => route.sourceIndex ?? 0));
const maxNavOrder = Math.max(...routesWithoutThird.map((route) => route.navOrder ?? 0));

const newRoutes = [];
for (const [index, spec] of externalThirdApis.entries()) {
  const path = `${localRoot}/${spec.slug}`;
  const relativePath = path.replace(/^\/docs\//, '');
  const contentFile = `${contentRoot}/${spec.slug}.mdx`;
  const record = {
    id: 0,
    path,
    relativePath,
    sourcePath: path,
    title: spec.title,
    description: `OpenIM 第三方服务 REST API：${spec.title}。`,
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

const nextRoutes = [...routesWithoutThird, ...newRoutes].map((route, index) => ({
  ...route,
  id: index + 1,
}));

const platformContext = navigation.contexts.find((context) => context.key === contextKey);
if (!platformContext) {
  throw new Error(`Missing navigation context: ${contextKey}`);
}

const thirdNode = {
  id: 'third',
  segment: 'third',
  title: '第三方服务',
  href: null,
  type: 'folder',
  children: newRoutes.map((route) => ({
    id: `third/${route.path.split('/').at(-1)}`,
    segment: route.path.split('/').at(-1),
    title: route.title,
    href: route.path,
    type: 'page',
    children: [],
    minIndex: route.navOrder,
  })),
  minIndex: newRoutes[0]?.navOrder ?? maxNavOrder + 1,
};

platformContext.nodes = platformContext.nodes.filter((node) => node.id !== 'third');
const authIndex = platformContext.nodes.findIndex((node) => node.id === 'auth');
const groupIndex = platformContext.nodes.findIndex((node) => node.id === 'group');
const messageIndex = platformContext.nodes.findIndex((node) => node.id === 'message');
if (authIndex >= 0) {
  platformContext.nodes.splice(authIndex + 1, 0, thirdNode);
} else if (groupIndex >= 0) {
  platformContext.nodes.splice(groupIndex + 1, 0, thirdNode);
} else if (messageIndex >= 0) {
  platformContext.nodes.splice(messageIndex, 0, thirdNode);
} else {
  platformContext.nodes.push(thirdNode);
}
platformContext.pageCount = nextRoutes.filter((route) => route.contextKey === contextKey).length;

platformApiZh.generatedAt = today;
platformApiZh.navigationLabels = {
  ...platformApiZh.navigationLabels,
  third: '第三方服务',
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

console.log(`Wrote ${externalThirdApis.length} OpenIM third API page(s).`);

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
  if (spec.responseMode === 'redirect') {
    return renderRedirectBody(spec);
  }
  return renderJsonBody(spec);
}

function renderJsonBody(spec) {
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
  const notes = spec.extraNotes?.length
    ? `\n\n## 调用说明\n\n${spec.extraNotes.map((item) => `- ${item}`).join('\n')}`
    : '';

  return `使用 **${spec.title}** 从可信后端调用 OpenIM 第三方服务 REST 接口。${spec.summary} 请先在[接入准备](/docs/chat/platform-api/v3/prepare-to-use-api)中配置 API 地址和 Token；接口参数通过请求头和 JSON 请求体传递。\n\n## HTTP 请求\n\n\`\`\`bash\n${spec.method} {API_ADDRESS}${spec.endpoint}\n\`\`\`\n\n### 请求示例\n\n\`\`\`bash\n${renderCurl(spec)}\n\`\`\`\n\n> 安全提示：管理端 Token 只能保存在可信后端服务中，不能下发到客户端或写入前端代码。\n\n## 参数\n\n此接口通过请求头传入链路追踪信息和鉴权凭证，通过 JSON 请求体传递业务参数。\n\n### 请求头\n\n${renderTable(['Header', '是否必填', '类型', '说明'], spec.headers)}\n\n## 请求体\n\n\`\`\`json\n${json(spec.sample)}\n\`\`\`\n\n${renderTable(['参数名', '是否必填', '类型', '说明'], spec.fields)}\n\n## 响应\n\n请求被 OpenIM 正常处理时通常返回 \`200 OK\`。业务是否成功以响应体中的 \`errCode\` 为准；\`errCode === 0\` 表示成功，非 0 表示业务错误。\n\n\`\`\`json\n${json(success)}\n\`\`\`\n\n### 响应参数\n\n${renderTable(['参数名', '类型', '说明'], responseFields)}${notes}\n\n### 错误\n\n如果请求失败，OpenIM 返回错误对象。更多错误码说明见[错误码](/docs/chat/platform-api/v3/error-codes)。\n\n\`\`\`json\n${json({ errCode: 1004, errMsg: 'RecordNotFoundError', errDlt: ': [1004]RecordNotFoundError' })}\n\`\`\`\n\n| 错误场景 | 可能原因 | 处理方式 |\n| -------- | -------- | -------- |\n| 鉴权失败 | \`token\` 缺失、过期，或调用账号没有该接口权限。 | 重新获取有效 Token，并在可信后端调用接口。 |\n| 链路追踪困难 | \`operationID\` 缺失或在大量请求中重复使用。 | 为每次请求生成独立 \`operationID\`，并在服务端日志中保留。 |\n| 参数校验失败 | 请求体字段类型、必填字段或枚举值不符合接口要求。 | 对照请求体参数表和限制说明检查字段。 |\n\n## 权限和限制\n\n- ${spec.sideEffects}\n${spec.limits.map((item) => `- ${item}`).join('\n')}\n- 所有数组型请求参数建议控制在 1000 个元素以内。\n\n## 相关页面\n\n- [接入准备](/docs/chat/platform-api/v3/prepare-to-use-api)\n- [认证接口](/docs/chat/platform-api/v3/auth/tokens/get-admin-token)\n- [错误码](/docs/chat/platform-api/v3/error-codes)`;
}

function renderRedirectBody(spec) {
  const pathSection = spec.pathFields
    ? `### 路径变量\n\n${renderTable(['参数名', '是否必填', '类型', '说明'], spec.pathFields)}\n\n`
    : '';
  const querySection = spec.queryFields
    ? `### Query 参数\n\n${renderTable(['参数名', '是否必填', '类型', '说明'], spec.queryFields)}\n\n`
    : '';
  const parameterSection =
    pathSection || querySection
      ? `${pathSection}${querySection}`.trimEnd()
      : '此接口不需要请求体参数。';

  return `使用 **${spec.title}** 调用 OpenIM 第三方服务 GET 接口。${spec.summary}\n\n## HTTP 请求\n\n\`\`\`bash\nGET {API_ADDRESS}${spec.displayEndpoint ?? spec.endpoint}\n\`\`\`\n\n### 请求示例\n\n\`\`\`bash\n${renderCurl(spec)}\n\`\`\`\n\n## 参数\n\n此接口不使用 JSON 请求体。\n\n${parameterSection}\n\n## 响应\n\n成功时返回 \`302 Found\`，并在 \`Location\` Header 中写入${spec.redirectTarget}。\n\n| Header | 类型 | 说明 |\n| ------ | ---- | ---- |\n| Location | string | 重定向目标地址。 |\n\n### 错误\n\n如果请求失败，服务端可能返回 \`400 Bad Request\`、\`404 Not Found\` 或 \`500 Internal Server Error\`，响应体为错误文本。\n\n## 权限和限制\n\n- ${spec.sideEffects}\n${spec.limits.map((item) => `- ${item}`).join('\n')}\n\n## 相关页面\n\n- [接入准备](/docs/chat/platform-api/v3/prepare-to-use-api)\n- [获取对象访问地址](/docs/chat/platform-api/v3/third/object-storage/access-url)\n- [错误码](/docs/chat/platform-api/v3/error-codes)`;
}

function renderCurl(spec) {
  if (spec.method === 'GET') {
    return `curl --request GET "\${API_ADDRESS}${spec.curlEndpoint ?? spec.displayEndpoint ?? spec.endpoint}"`;
  }

  const lines = [
    `curl --request ${spec.method} "\${API_ADDRESS}${spec.endpoint}" \\`,
    '  --header "Content-Type: application/json; charset=utf-8" \\',
    '  --header "operationID: ${OPERATION_ID}" \\',
    '  --header "token: ${ADMIN_TOKEN}" \\',
  ];
  if (spec.headers?.some(([name]) => name === 'X-Request-Api')) {
    lines.push('  --header "X-Request-Api: ${API_ADDRESS}" \\');
  }
  lines.push(`  --data-raw '${json(spec.sample)}'`);
  return lines.join('\n');
}

function renderFrontmatter(values) {
  return Object.entries(values)
    .map(([key, value]) => `${key}: ${JSON.stringify(value)}`)
    .join('\n');
}

function validateGoThirdApiOrder() {
  const endpoints = new Set(thirdApis.map((api) => api.endpoint));
  const missingOrder = [...endpoints].filter((endpoint) => !goThirdApiOrderIndex.has(endpoint));
  if (missingOrder.length > 0) {
    throw new Error(`Missing Go third API order for: ${missingOrder.join(', ')}`);
  }

  const missingSpec = goThirdApiOrder.filter((endpoint) => !endpoints.has(endpoint));
  if (missingSpec.length > 0) {
    throw new Error(`Missing third API spec for: ${missingSpec.join(', ')}`);
  }
}

function compareByGoThirdApiOrder(a, b) {
  return goThirdApiOrderIndex.get(a.endpoint) - goThirdApiOrderIndex.get(b.endpoint);
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
