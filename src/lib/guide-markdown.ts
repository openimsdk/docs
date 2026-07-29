import guidesContentData from '@/src/generated/guides-content.json';
import { stripLocaleFromPath } from '@/src/lib/i18n';

type GuideContentRecord = {
  body: string;
  excerpt: string;
  headings: unknown[];
  sourcePath: string;
  sourceUrl: string;
  title: string;
};

const guidesContent = guidesContentData as {
  records: Record<string, GuideContentRecord>;
};

const guideMarkdownRoutes = [
  ['/docs/guides/getting-started/overview', '/guides/introduction/product'],
  ['/docs/guides/getting-started/concepts', '/guides/introduction/termDefinition'],
  ['/docs/guides/getting-started/open-source-capabilities', '/guides/introduction/features'],
  ['/docs/guides/getting-started/versions', '/guides/introduction/version'],
  ['/docs/guides/deployment/components', '/guides/gettingStarted/env-comp'],
  ['/docs/guides/deployment/docker-compose', '/guides/gettingStarted/dockerCompose'],
  ['/docs/guides/deployment/source', '/guides/gettingStarted/imSourceCodeDeployment'],
  ['/docs/guides/deployment/offline', '/guides/gettingStarted/internalDeployment'],
  ['/docs/guides/deployment/cluster', '/guides/gettingStarted/cluster'],
  ['/docs/guides/deployment/network', '/guides/gettingStarted/ports'],
  ['/docs/guides/deployment/domain', '/guides/gettingStarted/nginxDomainConfig'],
  ['/docs/guides/deployment/production', '/guides/gettingStarted/production'],
  ['/docs/guides/deployment/verification', '/guides/gettingStarted/quickTestServer'],
  ['/docs/guides/integration/business-system', '/guides/solution/integrate'],
  ['/docs/guides/integration/offline-push', '/guides/solution/offlinePush'],
  ['/docs/guides/integration/migration', '/guides/solution/migrate'],
  ['/docs/guides/extension/server-development', '/guides/solution/developNewFeatures'],
  ['/docs/guides/extension/object-storage', '/guides/solution/s3'],
  ['/docs/guides/extension/storage-migration', '/guides/solution/s3convert'],
  ['/docs/guides/extension/ai-openclaw', '/guides/solution/openclaw'],
  ['/docs/guides/operations/monitoring', '/guides/gettingStarted/admin'],
  ['/docs/guides/operations/debugging', '/guides/solution/howToDebug'],
  ['/docs/guides/operations/troubleshooting', '/guides/gettingStarted/faq'],
  ['/docs/guides/operations/benchmark-results', '/guides/benchmark/benchmark_test'],
  ['/docs/guides/operations/benchmark-tools', '/guides/benchmark/benchmark_guide'],
  ['/docs/guides/quick-start/intro', '/guides/introduction/product'],
  ['/docs/guides/quick-start/concept', '/guides/introduction/termDefinition'],
  ['/docs/guides/quick-start/feature', '/guides/introduction/features'],
  ['/docs/guides/quick-start/version', '/guides/introduction/version'],
  ['/docs/guides/quick-deployment/env', '/guides/gettingStarted/env-comp'],
  ['/docs/guides/quick-deployment/docker', '/guides/gettingStarted/dockerCompose'],
  ['/docs/guides/quick-deployment/source', '/guides/gettingStarted/imSourceCodeDeployment'],
  ['/docs/guides/quick-deployment/offline', '/guides/gettingStarted/internalDeployment'],
  ['/docs/guides/quick-deployment/cluster', '/guides/gettingStarted/cluster'],
  ['/docs/guides/quick-deployment/ports', '/guides/gettingStarted/ports'],
  ['/docs/guides/quick-deployment/domain', '/guides/gettingStarted/nginxDomainConfig'],
  ['/docs/guides/quick-deployment/prod', '/guides/gettingStarted/production'],
  ['/docs/guides/quick-deployment/verify', '/guides/gettingStarted/quickTestServer'],
  ['/docs/guides/quick-deployment/faq', '/guides/gettingStarted/faq'],
  ['/docs/guides/quick-deployment/ops', '/guides/gettingStarted/admin'],
  ['/docs/guides/solutions/dev', '/guides/solution/developNewFeatures'],
  ['/docs/guides/solutions/debug', '/guides/solution/howToDebug'],
  ['/docs/guides/solutions/integrate', '/guides/solution/integrate'],
  ['/docs/guides/solutions/migrate', '/guides/solution/migrate'],
  ['/docs/guides/solutions/push', '/guides/solution/offlinePush'],
  ['/docs/guides/solutions/s3', '/guides/solution/s3'],
  ['/docs/guides/solutions/storage', '/guides/solution/s3convert'],
  ['/docs/guides/solutions/openclaw', '/guides/solution/openclaw'],
  ['/docs/guides/reliability/report', '/guides/benchmark/benchmark_test'],
  ['/docs/guides/reliability/tooling', '/guides/benchmark/benchmark_guide'],
] as const;

const guideSourceByPath = new Map<string, string>(guideMarkdownRoutes);

export function getGuideMarkdownPage(rawPath: string) {
  const path = normalizeGuidePath(rawPath);
  const sourcePath = guideSourceByPath.get(path);
  if (!sourcePath) return undefined;
  return guidesContent.records[sourcePath];
}

export function hasGuideMarkdownPage(rawPath: string) {
  return Boolean(getGuideMarkdownPage(rawPath));
}

function normalizeGuidePath(path: string) {
  const stripped = stripLocaleFromPath(path);
  if (stripped.length > 1 && stripped.endsWith('/')) return stripped.slice(0, -1);
  return stripped;
}
