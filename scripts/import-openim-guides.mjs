import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';

const root = process.cwd();
const componentPath = resolve(root, 'src/components/docs/guides-page.tsx');
const outputPath = resolve(root, 'src/generated/guides-content.json');
const rawBase = 'https://raw.githubusercontent.com/openimsdk/docs/refs/heads/feat/new/docs';
const docsBase = 'https://docs.openim.io/zh-Hans';
const existingRecords = await readExistingRecords(outputPath);
const emojiPattern = /[\p{Extended_Pictographic}\uFE0E\uFE0F\u200D]/gu;
const placeholderPattern = /(?:TODO|TBD|占位|待补充|placeholder)/i;
const marketingQuotePattern =
  /(?:摆脱云锁定|自由定义通信|即时通讯世界|OpenIM\s*=|构建可掌控|即时通讯未来)/;
const marketingHeadingPattern = /^(?:AIGC\s*时代的通信基础层|一句话总结)$/i;
const marketingLinePattern =
  /^(?:无论你的应用是面向消费者、企业，还是 AI 场景|不被云锁定，自由定义你的通信方式)/;

const component = await readFile(componentPath, 'utf8');
const sourcePaths = [
  ...new Set(
    [...component.matchAll(/legacy\(locale,\s*'([^']+)'/g)]
      .map((match) => match[1])
      .filter((path) => path.startsWith('/guides/')),
  ),
];

const records = {};
for (const sourcePath of sourcePaths) {
  let raw = '';
  try {
    raw = await fetchGuideSource(sourcePath);
  } catch (error) {
    if (!existingRecords[sourcePath]) throw error;
    const existing = existingRecords[sourcePath];
    records[sourcePath] = {
      ...existing,
      excerpt: excerpt(existing.body),
      headings: extractHeadings(existing.body),
    };
    continue;
  }
  const parsed = parseMarkdown(raw);
  const body = normalizeCommercialMarkdown(normalizeMarkdown(parsed.body));
  records[sourcePath] = {
    title: normalizeTitle(
      parsed.frontmatter.title ?? firstHeading(body) ?? titleFromPath(sourcePath),
    ),
    sourcePath,
    sourceUrl: `${docsBase}${sourcePath}`,
    body,
    excerpt: excerpt(body),
    headings: extractHeadings(body),
  };
}

validateImportedGuides(records);

await mkdir(dirname(outputPath), { recursive: true });
await writeFile(
  outputPath,
  `${JSON.stringify(
    {
      generatedAt: new Date().toISOString(),
      source: 'openimsdk/docs feat/new docs/guides',
      records,
    },
    null,
    2,
  )}\n`,
  'utf8',
);

console.log(`Imported ${Object.keys(records).length} OpenIM guide pages.`);

async function readExistingRecords(path) {
  try {
    const existing = JSON.parse(await readFile(path, 'utf8'));
    return existing.records ?? {};
  } catch {
    return {};
  }
}

async function fetchText(url) {
  let lastStatus = 0;
  for (let attempt = 1; attempt <= 4; attempt += 1) {
    const response = await fetch(url, { headers: { 'User-Agent': 'openim-chat-docs-next' } });
    lastStatus = response.status;
    if (response.ok) return response.text();
    await new Promise((resolveRetry) => setTimeout(resolveRetry, attempt * 500));
  }
  throw new Error(`Failed to fetch ${url}: ${lastStatus}`);
}

async function fetchGuideSource(sourcePath) {
  let lastError;
  for (const extension of ['.mdx', '.md']) {
    try {
      return await fetchText(`${rawBase}${sourcePath}${extension}`);
    } catch (error) {
      lastError = error;
    }
  }
  throw lastError;
}

function parseMarkdown(raw) {
  const frontmatter = {};
  let body = raw;
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (match) {
    body = raw.slice(match[0].length);
    for (const line of match[1].split(/\r?\n/)) {
      const separator = line.indexOf(':');
      if (separator === -1) continue;
      frontmatter[line.slice(0, separator).trim()] = line
        .slice(separator + 1)
        .trim()
        .replace(/^['"]|['"]$/g, '');
    }
  }
  return { body, frontmatter };
}

function normalizeMarkdown(value) {
  const importedAssets = new Map(
    [...value.matchAll(/^\s*import\s+([A-Za-z_$][\w$]*)\s+from\s+['"]([^'"]+)['"];?\s*$/gm)].map(
      (match) => [match[1], match[2]],
    ),
  );
  const lines = rewriteImageTags(value, importedAssets)
    .replace(/\r\n/g, '\n')
    .replace(/<!--[\s\S]*?-->/g, '')
    .split('\n')
    .filter((line) => !line.trim().match(/^import\s.+from\s+['"].+['"];?$/))
    .filter((line) => !line.trim().match(/^<\/?(Tabs|TabItem|details|summary)\b.*>$/i));

  while (lines.length > 0 && lines[0].trim() === '') lines.shift();
  if (lines[0]?.match(/^#\s+/)) lines.shift();
  while (lines.length > 0 && ['---', '***'].includes(lines[0].trim())) lines.shift();

  return lines
    .join('\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

function rewriteImageTags(value, importedAssets) {
  return value.replace(/<img\b([^>]*?)\/?\s*>/gi, (tag, attributes) => {
    const variable = attributes.match(/\bsrc=\{([A-Za-z_$][\w$]*)\}/)?.[1];
    const literal = attributes.match(/\bsrc=['"]([^'"]+)['"]/)?.[1];
    const source = (variable && importedAssets.get(variable)) || literal;
    if (!source) return tag;

    const alt = attributes.match(/\balt=['"]([^'"]*)['"]/)?.[1] ?? '';
    return `![${alt}](${source.replaceAll('\\', '/')})`;
  });
}

function normalizeCommercialMarkdown(value) {
  const normalizedLines = [];
  let inCode = false;

  for (const line of value.split('\n')) {
    if (line.trim().startsWith('```')) {
      inCode = !inCode;
      normalizedLines.push(line);
      continue;
    }

    if (inCode) {
      normalizedLines.push(line);
      continue;
    }

    const cleanedLine = cleanMarkdownSpacing(rewriteCommercialLanguage(stripEmoji(line)));
    if (!marketingLinePattern.test(cleanedLine.trim())) normalizedLines.push(cleanedLine);
  }

  return tidyMarkdownLines(
    removePlaceholderSections(
      removeMarketingSections(
        removeMarketingQuoteBlocks(removeMarketingSeparators(normalizedLines)),
      ),
    ),
  )
    .join('\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

function stripEmoji(value) {
  return value.replace(emojiPattern, '');
}

function normalizeTitle(value) {
  return cleanHeadingTitle(value)
    .replace(/[>#*_`]/g, '')
    .replace(/^docker\b/i, 'Docker')
    .replace(/\bgoland\b/i, 'GoLand')
    .trim();
}

function cleanMarkdownSpacing(line) {
  const heading = line.match(/^(\s*#{1,6})\s+(.+)$/);
  if (heading) return `${heading[1]} ${cleanHeadingTitle(heading[2])}`;

  return line
    .replace(/^(\s*[-*+]\s+)\s+/, '$1')
    .replace(/\*\*\s+/g, '**')
    .replace(/\*\*([^*]+?)\s+\*\*/g, '**$1**')
    .replace(/\s+：\*\*/g, '：**')
    .replace(/\*\*([^*]+)\*\*(?=\p{Script=Han})/gu, '**$1** ')
    .replace(/\s+([，。！？；：、）])/g, '$1')
    .replace(/([（])\s+/g, '$1');
}

function cleanHeadingTitle(value) {
  return spaceCjkTerms(stripEmoji(value))
    .replace(/[>#*_`]/g, '')
    .replace(/\s+([，。！？；：、）])/g, '$1')
    .replace(/([（])\s+/g, '$1')
    .replace(
      /^(\d+(?:\.\d+)*)([.)])?\s*(?=\S)/,
      (_, section, marker = '') => `${section}${marker} `,
    )
    .replace(/\s{2,}/g, ' ')
    .trim();
}

function spaceCjkTerms(value) {
  return value
    .replace(/([A-Za-z0-9])(\p{Script=Han})/gu, '$1 $2')
    .replace(/(\p{Script=Han})([A-Za-z0-9])/gu, '$1 $2');
}

function rewriteCommercialLanguage(line) {
  return spaceCjkTerms(line)
    .replace(
      /它能让在自己的应用中快速集成聊天、群组、好友、通知、音视频通话等功能，/g,
      '开发者可在自有应用中集成聊天、群组、好友、通知、音视频通话等功能，',
    )
    .replace(
      /你完全掌控数据、交互逻辑与部署方式，可根据业务场景自由扩展与二次开发。/g,
      '部署方可管理数据、交互逻辑与部署方式，并按业务场景扩展。',
    )
    .replace(
      /支持私有化部署与信创环境落地，帮助团队摆脱云服务锁定。/g,
      '支持私有化部署与信创环境落地，可替代依赖第三方 IM 云服务的架构。',
    )
    .replace(/为什么选择 OpenIMSDK？?/g, '主要能力')
    .replace(/OpenIMSDK 生态系统/g, '生态组件')
    .replace(/部署选项/g, '部署方式')
    .replace(/用 OpenIMSDK 可以构建什么？?/g, '适用场景')
    .replace(/快速体验/g, '验证部署')
    .replace(/快速体验 OpenIMSDK 核心能力，并测试/g, '验证 OpenIMSDK 核心能力，并确认')
    .replace(
      /OpenIMSDK 提供构建应用内实时通信的一体化解决方案，具有以下关键优势：/g,
      'OpenIMSDK 覆盖应用内实时通信的主要模块，能力包括：',
    )
    .replace(/开发者友好/g, '统一 API')
    .replace(/完全开源/g, '开源范围')
    .replace(/AI 原生 \(AI-native\)/g, '智能交互扩展')
    .replace(/高度可定制/g, '二次开发')
    .replace(/高性能架构/g, '服务端架构')
    .replace(/助力开发者快速集成聊天能力。/g, '用于统一集成聊天能力。')
    .replace(
      /源代码完全开放，无厂商绑定，灵活可控、自由定制。/g,
      '源代码开放，可按业务约束自托管和二次开发。',
    )
    .replace(
      /原生适配 AIGC 时代的智能交互场景，可无缝集成 LLM 与多智能体系统。/g,
      '可接入 LLM、多智能体等智能交互场景。',
    )
    .replace(
      /支持二次开发，让你定义属于自己的聊天逻辑、交互体验与 UI 风格。/g,
      '支持二次开发，可按业务需要调整聊天逻辑、交互体验与 UI。',
    )
    .replace(/数据完全掌握在你手中。?/g, '数据、网络与合规策略由部署方管理。')
    .replace(/提供了强大的 Webhook 能力。/g, '提供 Webhook 能力。')
    .replace(
      /轻松集成聊天、群组、好友、推送等核心功能。/g,
      '用于集成聊天、群组、好友、推送等核心功能。',
    )
    .replace(
      /自主运行 OpenIM 开源版本，在本地或信创环境中完全掌控通信系统与数据安全。/g,
      '可在本地、私有云或信创环境中运行 OpenIM 开源版本。',
    )
    .replace(
      /可私有部署在自有服务器上，实现对数据与系统的完全掌控。/g,
      '可部署在自有服务器或私有云环境。',
    )
    .replace(/以增强业务功能/g, '用于管理和扩展业务功能')
    .replace(/提供功能完善的客户端 SDK/g, '提供客户端 SDK')
    .replace(
      /支持 Docker Compose 一键部署 或 源码方式集群部署，兼容 Linux \/ macOS \/ Windows 全平台运行环境。/g,
      '支持 Docker Compose、源码部署和集群部署。',
    )
    .replace(
      /OpenIMSDK 都能成为你稳定、可控、面向未来的通信引擎。/g,
      'OpenIMSDK 可作为可自托管的通信基础设施。',
    )
    .replace(/OpenIMSDK 可作为可自托管的通信基础设施。/g, 'OpenIMSDK 可作为自托管通信基础设施。')
    .replace(/开箱即用/g, '可直接使用')
    .replace(/强烈建议/g, '建议')
    .replace(/您/g, '你');
}

function removeMarketingSeparators(lines) {
  return lines.filter((line) => !/^(-{3,}|\*{3,})$/.test(line.trim()));
}

function removeMarketingQuoteBlocks(lines) {
  const result = [];
  for (let index = 0; index < lines.length; index += 1) {
    if (!lines[index].trim().startsWith('>')) {
      result.push(lines[index]);
      continue;
    }

    const block = [];
    while (index < lines.length && lines[index].trim().startsWith('>')) {
      block.push(lines[index]);
      index += 1;
    }
    index -= 1;

    if (!block.some((line) => marketingQuotePattern.test(line))) result.push(...block);
  }
  return result;
}

function removeMarketingSections(lines) {
  return removeSections(lines, (heading) =>
    marketingHeadingPattern.test(cleanHeadingTitle(heading)),
  );
}

function removePlaceholderSections(lines) {
  const withoutSections = [];

  for (let index = 0; index < lines.length; index += 1) {
    const heading = parseHeading(lines[index]);
    if (!heading) {
      if (!placeholderPattern.test(stripMarkdown(lines[index]).trim()))
        withoutSections.push(lines[index]);
      continue;
    }

    const nextIndex = findNextSameOrHigherHeading(lines, index + 1, heading.depth);
    const sectionLines = lines.slice(index + 1, nextIndex);
    const nonEmpty = sectionLines.map((line) => stripMarkdown(line).trim()).filter(Boolean);
    if (nonEmpty.length > 0 && nonEmpty.every((line) => placeholderPattern.test(line))) {
      index = nextIndex - 1;
      continue;
    }

    withoutSections.push(lines[index]);
  }

  return withoutSections;
}

function removeSections(lines, shouldRemove) {
  const result = [];

  for (let index = 0; index < lines.length; index += 1) {
    const heading = parseHeading(lines[index]);
    if (!heading || !shouldRemove(heading.title)) {
      result.push(lines[index]);
      continue;
    }

    index = findNextSameOrHigherHeading(lines, index + 1, heading.depth) - 1;
  }

  return result;
}

function parseHeading(line) {
  const match = line.match(/^(#{1,6})\s+(.+)$/);
  if (!match) return undefined;
  return { depth: match[1].length, title: match[2].trim() };
}

function findNextSameOrHigherHeading(lines, start, depth) {
  for (let index = start; index < lines.length; index += 1) {
    const nextHeading = parseHeading(lines[index]);
    if (nextHeading && nextHeading.depth <= depth) return index;
  }
  return lines.length;
}

function stripMarkdown(value) {
  return value
    .replace(/!\[[^\]]*]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]+)]\([^)]*\)/g, '$1')
    .replace(/[#{}`*_>|-]+/g, ' ')
    .replace(/\s+/g, ' ');
}

function tidyMarkdownLines(lines) {
  const result = [];
  for (const line of lines) {
    if (line.trim() === '' && result.at(-1)?.trim() === '') continue;
    result.push(line);
  }
  while (result.length > 0 && result[0].trim() === '') result.shift();
  while (result.length > 0 && result.at(-1).trim() === '') result.pop();
  return result;
}

function validateImportedGuides(records) {
  const errors = [];

  for (const [sourcePath, record] of Object.entries(records)) {
    for (const [label, value] of [
      ['title', record.title],
      ['body', record.body],
      ['excerpt', record.excerpt],
      ...record.headings.map((heading) => ['heading', heading.title]),
    ]) {
      if (emojiPattern.test(value)) errors.push(`${sourcePath}: ${label} contains emoji`);
      if (placeholderPattern.test(value))
        errors.push(`${sourcePath}: ${label} contains placeholder text`);
      emojiPattern.lastIndex = 0;
    }
  }

  if (errors.length > 0) {
    throw new Error(`Guide import quality check failed:\n${errors.slice(0, 30).join('\n')}`);
  }
}

function firstHeading(value) {
  const title = value.match(/^#{1,6}\s+(.+)$/m)?.[1];
  return title ? normalizeTitle(title) : undefined;
}

function extractHeadings(value) {
  const headings = [];
  let inCode = false;
  for (const line of value.split('\n')) {
    if (line.trim().startsWith('```')) {
      inCode = !inCode;
      continue;
    }
    if (inCode) continue;

    const match = line.match(/^(#{1,4})\s+(.+)$/);
    if (!match) continue;
    const title = cleanHeadingTitle(match[2]);
    headings.push({
      depth: Math.max(match[1].length, 2),
      title,
      url: `#${slugify(title)}`,
    });
  }
  return headings.slice(0, 24);
}

function excerpt(value) {
  return value
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/!\[[^\]]*]\([^)]*\)/g, ' ')
    .replace(/\[[^\]]+]\([^)]*\)/g, (match) => match.match(/\[([^\]]+)]/)?.[1] ?? ' ')
    .replace(/[#{}`*_>|-]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 240);
}

function titleFromPath(sourcePath) {
  return sourcePath
    .split('/')
    .at(-1)
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, '-')
    .replace(/^-+|-+$/g, '');
}
