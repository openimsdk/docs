export const dispositions = ['undecided', 'retain', 'adapt', 'merge', 'remove', 'proposed'];

export const sourceKinds = ['sendbird', 'openim-specific'];

export const exampleVerificationStatuses = ['pending', 'verified', 'not-applicable'];

export const reviewStatuses = [
  'deferred',
  'structure-only',
  'mapped',
  'written',
  'api-verified',
  'example-verified',
  'published',
];

export function reviewRank(status) {
  return reviewStatuses.indexOf(status);
}

export function isLocalePublished(page, locale) {
  return page?.locales?.[locale]?.reviewStatus === 'published';
}

export function validateAuditManifest(manifest, context = {}) {
  const errors = [];
  const paths = new Set();

  validateSources(manifest?.sources, errors);

  if (manifest?.schemaVersion !== 1) {
    errors.push(`unsupported schemaVersion ${String(manifest?.schemaVersion)}`);
  }

  if (!Array.isArray(manifest?.pages)) {
    errors.push('pages must be an array');
    return errors.sort();
  }

  for (const page of manifest.pages) {
    const path = page?.currentPath ?? '(missing currentPath)';
    if (paths.has(page.currentPath)) {
      errors.push(`${page.currentPath}: duplicate currentPath`);
    }
    paths.add(page.currentPath);

    if (!isWasmPath(page.currentPath)) {
      errors.push(`${path}: invalid currentPath`);
    }
    if (!isWasmPath(page.targetPath) && page.targetPath !== '/sdk/error-codes') {
      errors.push(`${path}: invalid targetPath`);
    }
    if (!sourceKinds.includes(page.sourceKind)) {
      errors.push(`${path}: invalid sourceKind ${String(page.sourceKind)}`);
    }
    if (!dispositions.includes(page.disposition)) {
      errors.push(`${path}: invalid disposition ${String(page.disposition)}`);
    }
    if (!Array.isArray(page.openimSources)) {
      errors.push(`${path}: openimSources must be an array`);
    }
    if (!Array.isArray(page.sdkMethods)) {
      errors.push(`${path}: sdkMethods must be an array`);
    }
    if (!Array.isArray(page.sdkEvents)) {
      errors.push(`${path}: sdkEvents must be an array`);
    }
    if (!Array.isArray(page.notes)) {
      errors.push(`${path}: notes must be an array`);
    }

    validateDisposition(page, errors);
    validateLocales(page, context, errors, manifest.sources);
  }

  if (context.activeRoutes instanceof Set) {
    for (const route of context.activeRoutes) {
      if (!paths.has(route)) errors.push(`${route}: active route is missing from audit manifest`);
    }
  }

  return errors.sort();
}

function validateSources(sources, errors) {
  if (!sources || typeof sources !== 'object') {
    errors.push('sources must be an object');
    return;
  }
  if (!/^https:\/\/github\.com\/openimsdk\/docs\/?$/i.test(sources.openimDocs?.repository ?? '')) {
    errors.push('sources.openimDocs.repository must identify the OpenIM docs repository');
  }
  if (!/^[a-f0-9]{40}$/i.test(sources.openimDocs?.commit ?? '')) {
    errors.push('sources.openimDocs.commit must be a 40-character git commit');
  }
  if (sources.sdkCore !== undefined) {
    if (
      !/^https:\/\/github\.com\/openimsdk\/openim-sdk-core\/?$/i.test(
        sources.sdkCore?.repository ?? '',
      )
    ) {
      errors.push('sources.sdkCore.repository must identify the OpenIM SDK Core repository');
    }
    if (!/^[a-f0-9]{40}$/i.test(sources.sdkCore?.commit ?? '')) {
      errors.push('sources.sdkCore.commit must be a 40-character git commit');
    }
  }
  if (sources.wasmSdk?.package !== '@openim/wasm-client-sdk') {
    errors.push('sources.wasmSdk.package must be @openim/wasm-client-sdk');
  }
  if (!/^\d+\.\d+\.\d+(?:[-.][0-9A-Za-z.-]+)?$/.test(sources.wasmSdk?.version ?? '')) {
    errors.push('sources.wasmSdk.version must be pinned');
  }
  if (!/^sha512-[A-Za-z0-9+/]+=*$/.test(sources.wasmSdk?.integrity ?? '')) {
    errors.push('sources.wasmSdk.integrity must be sha512');
  }
  if (
    !/^https:\/\/github\.com\/openimsdk\/openim-sdk-js-wasm\/?$/i.test(
      sources.wasmSdk?.repository ?? '',
    )
  ) {
    errors.push('sources.wasmSdk.repository must identify the OpenIM WASM SDK repository');
  }
  if (!/^[a-f0-9]{40}$/i.test(sources.wasmSdk?.commit ?? '')) {
    errors.push('sources.wasmSdk.commit must be a 40-character git commit');
  }
  if (sources.wasmLegacyImplementation !== undefined) {
    if (
      !/^https:\/\/github\.com\/openimsdk\/open-im-sdk-web-wasm\/?$/i.test(
        sources.wasmLegacyImplementation?.repository ?? '',
      )
    ) {
      errors.push(
        'sources.wasmLegacyImplementation.repository must identify the legacy OpenIM WASM implementation repository',
      );
    }
    if (!/^[a-f0-9]{40}$/i.test(sources.wasmLegacyImplementation?.commit ?? '')) {
      errors.push('sources.wasmLegacyImplementation.commit must be a 40-character git commit');
    }
  }
  validateTypeSource(
    sources.wasmSdkTypes,
    {
      key: 'wasmSdkTypes',
      repository: 'openimsdk/openim-sdk-js-wasm',
      packageName: '@openim/wasm-client-sdk',
      requireIntegrity: true,
    },
    errors,
  );
  validateTypeSource(
    sources.wasmEnterpriseTypes,
    {
      key: 'wasmEnterpriseTypes',
      repository: 'openimsdk/open-im-sdk-core-enterprise',
      packageName: '@openim/client-sdk-types',
      requireIntegrity: false,
    },
    errors,
  );
}

function validateTypeSource(source, expected, errors) {
  if (source === undefined) return;
  if (source.package !== expected.packageName) {
    errors.push(`sources.${expected.key}.package must be ${expected.packageName}`);
  }
  if (!/^\d+\.\d+\.\d+(?:[-.][0-9A-Za-z.-]+)?$/.test(source.version ?? '')) {
    errors.push(`sources.${expected.key}.version must be pinned`);
  }
  if (expected.requireIntegrity && !/^sha512-[A-Za-z0-9+/]+=*$/.test(source.integrity ?? '')) {
    errors.push(`sources.${expected.key}.integrity must be sha512`);
  }
  if (
    !new RegExp(`^https://github\\.com/${expected.repository}/?$`, 'i').test(
      source.repository ?? '',
    )
  ) {
    errors.push(`sources.${expected.key}.repository must identify ${expected.repository}`);
  }
  if (!/^[a-f0-9]{40}$/i.test(source.commit ?? '')) {
    errors.push(`sources.${expected.key}.commit must be a 40-character git commit`);
  }
}

function validateDisposition(page, errors) {
  const path = page.currentPath ?? '(missing currentPath)';
  if (page.disposition === 'merge') {
    const sharedClientSdkTarget = page.redirectTo === '/sdk/error-codes';
    if ((!isWasmPath(page.redirectTo) && !sharedClientSdkTarget) || page.redirectTo === page.currentPath) {
      errors.push(`${path}: merge requires redirectTo to a different published SDK path`);
    }
  }

  if (page.disposition === 'remove') {
    for (const locale of ['zh', 'en']) {
      if (isLocalePublished(page, locale)) {
        errors.push(`${path}: remove cannot be published for ${locale}`);
      }
    }
  }

  if (page.disposition === 'proposed' && page.sourceKind === 'openim-specific') {
    const hasSource = page.openimSources?.some(isImmutableOpenImSource) ?? false;
    const hasMethod = Array.isArray(page.sdkMethods) && page.sdkMethods.length > 0;
    if (!hasSource && !hasMethod) {
      errors.push(`${path}: proposed requires an OpenIM source or SDK method`);
    }
  }
}

function validateLocales(page, context, errors, sources) {
  const path = page.currentPath ?? '(missing currentPath)';
  for (const locale of ['zh', 'en']) {
    const state = page.locales?.[locale];
    if (!state || typeof state !== 'object') {
      errors.push(`${path}: missing ${locale} locale state`);
      continue;
    }
    if (!reviewStatuses.includes(state.reviewStatus)) {
      errors.push(`${path}: invalid reviewStatus ${String(state.reviewStatus)} for ${locale}`);
      continue;
    }

    const rank = reviewRank(state.reviewStatus);
    if (page.disposition === 'undecided' && rank >= reviewRank('mapped')) {
      errors.push(`${path}: undecided cannot reach mapped for ${locale}`);
    }
    const requiresActiveManualContent =
      context.activeRoutes instanceof Set &&
      context.activeRoutes.has(path) &&
      ['retain', 'adapt'].includes(page.disposition);
    if (locale === 'zh' && rank >= reviewRank('written') && requiresActiveManualContent) {
      if (context.manualPaths instanceof Set && !context.manualPaths.has(path)) {
        errors.push(`${path}: ${state.reviewStatus} requires a manual zh MDX file`);
      }
    }
    if (rank >= reviewRank('mapped')) {
      if (!page.openimSources?.some(isImmutableOpenImSource)) {
        errors.push(`${path}: ${state.reviewStatus} requires an immutable OpenIM source`);
      }
      for (const source of page.openimSources ?? []) {
        if (isImmutableOpenImSource(source) && !isPinnedOpenImSource(source, sources)) {
          errors.push(`${path}: OpenIM source must use a pinned OpenIM source commit`);
        }
      }
      if (page.sourceKind === 'sendbird' && !isSendbirdSource(page.sendbirdSource)) {
        errors.push(`${path}: ${state.reviewStatus} requires a Sendbird source`);
      }
    }
    if (rank >= reviewRank('api-verified') && context.sdkMethodNames instanceof Set) {
      for (const method of page.sdkMethods ?? []) {
        if (!context.sdkMethodNames.has(method)) {
          errors.push(`${path}: unknown SDK method ${method}`);
        }
      }
    }
    if (rank >= reviewRank('api-verified') && context.sdkEventNames instanceof Set) {
      for (const event of page.sdkEvents ?? []) {
        if (!context.sdkEventNames.has(event)) {
          errors.push(`${path}: unknown SDK event ${event}`);
        }
      }
    }
    validateExampleVerification(path, locale, state, errors);

    if (
      rank >= reviewRank('api-verified') &&
      (page.sdkMethods?.length ?? 0) === 0 &&
      !page.notes?.some(isConceptNote)
    ) {
      errors.push(`${path}: verified page without SDK methods requires a concept note`);
    }

    if (rank >= reviewRank('example-verified') && !hasExampleEvidence(state.exampleVerification)) {
      errors.push(`${path}: example-verified requires example evidence for ${locale}`);
    }

    if (state.reviewStatus === 'published') {
      if (!['retain', 'adapt'].includes(page.disposition)) {
        errors.push(`${path}: published requires retain or adapt disposition for ${locale}`);
      }
      if (!state.reviewer?.trim()) {
        errors.push(`${path}: published requires reviewer for ${locale}`);
      }
      if (!/^\d{4}-\d{2}-\d{2}$/.test(state.reviewedAt ?? '')) {
        errors.push(`${path}: published requires reviewedAt for ${locale}`);
      }
      if (!hasExampleEvidence(state.exampleVerification)) {
        errors.push(`${path}: published requires example evidence for ${locale}`);
      }
    }
  }
}

function validateExampleVerification(path, locale, state, errors) {
  const verification = state.exampleVerification;
  if (!verification || !exampleVerificationStatuses.includes(verification.status)) {
    errors.push(`${path}: invalid example verification status for ${locale}`);
    return;
  }
  if (!Array.isArray(verification.evidence)) {
    errors.push(`${path}: example evidence must be an array for ${locale}`);
  }
}

function isWasmPath(value) {
  return typeof value === 'string' && value.startsWith('/sdk/wasm/');
}

function isSendbirdSource(value) {
  return typeof value === 'string' && /^https:\/\/(?:www\.)?sendbird\.com\/docs\//i.test(value);
}

function isImmutableOpenImSource(value) {
  if (typeof value !== 'string') return false;
  return (
    /^https:\/\/github\.com\/openimsdk\/[\w.-]+\/blob\/[a-f0-9]{40}\//i.test(value) ||
    /^https:\/\/raw\.githubusercontent\.com\/openimsdk\/[\w.-]+\/[a-f0-9]{40}\//i.test(value)
  );
}

function isPinnedOpenImSource(source, sources) {
  const pinnedRepositories = [
    sources?.openimDocs,
    sources?.sdkCore,
    sources?.wasmSdk,
    sources?.wasmLegacyImplementation,
    sources?.wasmSdkTypes,
    sources?.wasmEnterpriseTypes,
  ].filter(Boolean);
  return pinnedRepositories.some(({ repository, commit }) => {
    const repositoryPath = repository
      ?.replace(/^https:\/\/github\.com\//i, '')
      .replace(/\/$/, '');
    if (!repositoryPath || !commit) return false;
    const normalizedSource = source.toLowerCase();
    const normalizedRepositoryPath = repositoryPath.toLowerCase();
    return (
      normalizedSource.includes(`github.com/${normalizedRepositoryPath}/blob/${commit}/`) ||
      normalizedSource.includes(`raw.githubusercontent.com/${normalizedRepositoryPath}/${commit}/`)
    );
  });
}

function hasExampleEvidence(verification) {
  const verified =
    verification?.status === 'verified' && verification.evidence?.some((item) => item.trim());
  const notApplicable =
    verification?.status === 'not-applicable' && Boolean(verification.reason?.trim());
  return Boolean(verified || notApplicable);
}

function isConceptNote(note) {
  return /concept|browser runtime|boundary|概念|浏览器运行时|边界/i.test(note);
}
