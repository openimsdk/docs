import { readFile, writeFile } from 'node:fs/promises';

const audit = JSON.parse(
  await readFile('data/structure/platform-api-content-audit.json', 'utf8'),
);
const routes = JSON.parse(await readFile('src/generated/routes.json', 'utf8'));
const navigation = JSON.parse(await readFile('src/generated/navigation.json', 'utf8'));
const structure = JSON.parse(await readFile('data/structure/chat-pages.json', 'utf8'));
const routeByPath = new Map(routes.map((route) => [route.path, route]));
const structureByPath = new Map(structure.map((record) => [record.openimPath, record]));

for (const page of audit.pages.filter((entry) => entry.reviewStatus === 'published')) {
  const source = await readFile(page.english, 'utf8');
  const frontmatter = parseFrontmatter(source);
  if (!frontmatter.title || !frontmatter.description) {
    throw new Error(`Reviewed English page lacks title or description: ${page.english}`);
  }

  const route = routeByPath.get(page.path);
  if (!route) throw new Error(`Missing route: ${page.path}`);
  route.title = frontmatter.title;
  route.description = frontmatter.description;
  route.contentFile = page.english;
  delete route.locales;

  const node = findNode(navigation.contexts.flatMap((context) => context.nodes), page.path);
  if (!node) throw new Error(`Missing navigation node: ${page.path}`);
  node.title = frontmatter.title;
  delete node.locales;

  const record = structureByPath.get(page.path) ?? {
    sourcePath: route.sourcePath,
    openimPath: page.path,
    context: route.contextKey,
    template: route.template,
  };
  record.title = frontmatter.title;
  record.contentFile = page.english;
  if (!structureByPath.has(page.path)) structure.push(record);
  console.log(`Published reviewed English page: ${page.path}`);
}

for (const context of navigation.contexts) {
  if (context.key === 'chat/platform-api') publishEnglishAncestors(context.nodes);
}

await Promise.all([
  writeFile('src/generated/routes.json', `${JSON.stringify(routes, null, 2)}\n`),
  writeFile('src/generated/navigation.json', `${JSON.stringify(navigation, null, 2)}\n`),
  writeFile('data/structure/chat-pages.json', `${JSON.stringify(structure, null, 2)}\n`),
]);

function findNode(nodes, path) {
  for (const node of nodes) {
    if (node.href === path) return node;
    const child = findNode(node.children ?? [], path);
    if (child) return child;
  }
}

function publishEnglishAncestors(nodes) {
  let supportsEnglish = false;
  for (const node of nodes) {
    const childSupportsEnglish = publishEnglishAncestors(node.children ?? []);
    const nodeSupportsEnglish = !node.locales || node.locales.includes('en');
    if (childSupportsEnglish) {
      delete node.locales;
      if (/\p{Script=Han}/u.test(node.title)) node.title = humanizeSegment(node.segment);
    }
    supportsEnglish ||= nodeSupportsEnglish || childSupportsEnglish;
  }
  return supportsEnglish;
}

function humanizeSegment(segment) {
  return segment
    .replace(/[_-]+/g, ' ')
    .replace(/\b\w/g, (letter) => letter.toUpperCase())
    .replace(/\bApi\b/g, 'API')
    .replace(/\bId\b/g, 'ID');
}

function parseFrontmatter(source) {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return {};
  return Object.fromEntries(
    match[1]
      .split(/\r?\n/)
      .map((line) => line.match(/^([A-Za-z][\w-]*):\s*(.*)$/))
      .filter(Boolean)
      .map((line) => {
        const [, key, rawValue] = line;
        try {
          return [key, JSON.parse(rawValue)];
        } catch {
          return [key, rawValue];
        }
      }),
  );
}
