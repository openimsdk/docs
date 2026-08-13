const frozenBaseline = Object.freeze({
  privateCommit: 'e71e3f68827f9f7af354526fecbaded25dc14de9',
  interfaceSha256: 'acbe16c69ba4ddfa2e7bbdcf35a119c88801e93d960520db50de082c2e4234df',
  responseSchemaSha256: 'a6a73ab3e368812cbe9b6355fed3edbe59b890aa6e8f73c69e3d06fd23a6c6e5',
});

const expectedCounts = Object.freeze({
  constants: 109,
  types: 237,
  operations: 162,
  eventSubscriptions: 81,
  eventControls: 2,
  events: 81,
});

const forbiddenProvenance = [
  'openim-sdk-unix-harmony',
  'imsdk.har',
  '.aar',
  '.xcframework',
  '/users/',
  '/volumes/',
];

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

export function validateUniAppSdkDocManifest(manifest) {
  assert(manifest?.schemaVersion === 1, 'Unsupported uni-app documentation manifest schema');
  assert(manifest?.sdkVersion === '0.2.0-rc.3', 'Unexpected uni-app SDK documentation version');
  assert(
    manifest?.baseline?.privateCommit === frozenBaseline.privateCommit,
    'Private commit baseline drifted',
  );
  assert(
    manifest?.baseline?.interfaceSha256 === frozenBaseline.interfaceSha256,
    'Consumer interface baseline drifted',
  );
  assert(
    manifest?.baseline?.responseSchemaSha256 === frozenBaseline.responseSchemaSha256,
    'Response schema baseline drifted',
  );
  assert(JSON.stringify(manifest.counts) === JSON.stringify(expectedCounts), 'Surface counts drifted');

  const serialized = JSON.stringify(manifest).toLowerCase();
  for (const forbidden of forbiddenProvenance) {
    assert(!serialized.includes(forbidden), `Manifest contains private native provenance: ${forbidden}`);
  }

  const commercialOperations = manifest.callables.filter(
    (item) => item.edition === 'commercial' && item.role === 'operation',
  ).length;
  const commercialEventSubscriptions = manifest.callables.filter(
    (item) => item.edition === 'commercial' && item.role === 'event-subscription',
  ).length;
  const commercialTypes = manifest.types.filter((item) => item.edition === 'commercial').length;
  const unsupportedHarmonyOperations = manifest.callables
    .filter((item) => item.role === 'operation' && item.platforms.harmony === 'platform-unsupported')
    .map((item) => item.name)
    .sort();
  const unsupportedHarmonyEvents = manifest.events
    .filter((item) => item.platforms.harmony === 'platform-unsupported')
    .map((item) => item.name)
    .sort();
  const syntheticEvents = manifest.events
    .filter((item) => item.synthetic)
    .map((item) => item.name)
    .sort();

  assert(commercialOperations === 51, 'Commercial operation count drifted');
  assert(commercialEventSubscriptions === 33, 'Commercial event subscription count drifted');
  assert(commercialTypes === 77, 'Commercial type count drifted');
  assert(manifest.typeExtensions.length === 3, 'Commercial type extension count drifted');
  assert(unsupportedHarmonyOperations.length === 4, 'Harmony unsupported operation count drifted');
  assert(unsupportedHarmonyEvents.length === 10, 'Harmony unsupported event count drifted');
  assert(
    !manifest.callables.some((item) => item.name === 'getArchivedConversationList'),
    'Retired getArchivedConversationList leaked into active documentation',
  );

  return {
    counts: manifest.counts,
    commercialOperations,
    commercialEventSubscriptions,
    commercialTypes,
    unsupportedHarmonyOperations,
    unsupportedHarmonyEvents,
    syntheticEvents,
    retiredCallables: manifest.retiredCallables,
  };
}

export const uniAppSdkDocumentationBaseline = frozenBaseline;
