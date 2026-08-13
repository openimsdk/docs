import { getClientSdkSidebarPaths } from './client-sdk-sidebar.mjs';

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function assertUniqueComplete({ actual, expected, label, activePaths }) {
  assert(actual.length === expected.length, `${label} count differs from the documentation manifest`);
  const byName = new Map();
  for (const item of actual) {
    assert(!byName.has(item.name), `${label} ${item.name} has multiple owners`);
    assert(item.page == null || activePaths.has(item.page), `${label} ${item.name} owns an inactive page`);
    byName.set(item.name, item);
  }
  for (const item of expected) {
    const owner = byName.get(item.name);
    assert(owner != null, `${label} ${item.name} has no owner`);
    assert(owner.page != null || owner.disposition != null, `${label} ${item.name} has no page or disposition`);
    assert(owner.edition === item.edition, `${label} ${item.name} edition drifted`);
  }
}

export function validateUniAppSdkOwnership({ manifest, ownership, typeOwnership, sidebar }) {
  const activePaths = new Set(getClientSdkSidebarPaths(sidebar));
  assert(ownership.schemaVersion === 1, 'Unsupported uni-app API ownership schema');
  assert(typeOwnership.schemaVersion === 1, 'Unsupported uni-app type ownership schema');
  assert(
    ownership.manifestSha256 === typeOwnership.manifestSha256,
    'Uni-app ownership documents use different manifest baselines',
  );

  assertUniqueComplete({
    actual: ownership.callables,
    expected: manifest.callables,
    label: 'callable',
    activePaths,
  });
  assertUniqueComplete({
    actual: ownership.events,
    expected: manifest.events,
    label: 'event',
    activePaths,
  });
  assertUniqueComplete({
    actual: typeOwnership.types,
    expected: manifest.types,
    label: 'type',
    activePaths,
  });
  assertUniqueComplete({
    actual: typeOwnership.constants,
    expected: manifest.constants,
    label: 'constant',
    activePaths,
  });

  for (const item of ownership.callables) {
    const source = manifest.callables.find((candidate) => candidate.name === item.name);
    assert(item.role === source.role, `callable ${item.name} role drifted`);
    assert(
      JSON.stringify(item.platforms) === JSON.stringify(source.platforms),
      `callable ${item.name} platform support drifted`,
    );
  }
  for (const item of ownership.events) {
    const source = manifest.events.find((candidate) => candidate.name === item.name);
    assert(item.synthetic === source.synthetic, `event ${item.name} synthetic marker drifted`);
    assert(
      JSON.stringify(item.platforms) === JSON.stringify(source.platforms),
      `event ${item.name} platform support drifted`,
    );
  }

  return {
    operations: ownership.callables.filter((item) => item.role === 'operation').length,
    eventSubscriptions: ownership.callables.filter((item) => item.role === 'event-subscription').length,
    eventControls: ownership.callables.filter((item) => item.role === 'event-control').length,
    events: ownership.events.length,
    types: typeOwnership.types.length,
    constants: typeOwnership.constants.length,
  };
}
