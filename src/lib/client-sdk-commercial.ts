import flutterAudit from '@/data/structure/flutter-content-audit.json';
import iosAudit from '@/data/structure/ios-content-audit.json';
import reactNativeAudit from '@/data/structure/react-native-content-audit.json';
import ownership from '@/data/structure/wasm-api-ownership.json';

type OwnershipEntry = {
  name: string;
  page: string | null;
  status: string;
  commercial?: boolean;
};

type NativePlatform = 'flutter' | 'ios' | 'react-native';

type ClientSdkAuditPage = {
  currentPath: string;
  disposition?: string;
  sdkEvents: string[];
  sdkMethods: string[];
};

export type PageCommercialKind = 'full' | 'partial' | 'none';

export type PageCommercialInfo = {
  kind: PageCommercialKind;
  methods: string[];
  openSourceMethods: string[];
  events: string[];
};

const methods = ownership.methods as OwnershipEntry[];
const events = ownership.events as OwnershipEntry[];
const commercialMethodNames = new Set(
  methods.filter((entry) => entry.commercial).map((entry) => entry.name),
);
const commercialEventNames = new Set(
  events.filter((entry) => entry.commercial).map((entry) => entry.name),
);
const nativeAudits: Record<NativePlatform, ClientSdkAuditPage[]> = {
  flutter: flutterAudit.pages as ClientSdkAuditPage[],
  ios: iosAudit.pages as ClientSdkAuditPage[],
  'react-native': reactNativeAudit.pages as ClientSdkAuditPage[],
};

const platformSymbolAliases: Record<NativePlatform, Record<string, string>> = {
  flutter: {
    getConversationGroupByConversationID: 'getConversationGroupIDsByConversationID',
    onHangup: 'OnHangUp',
  },
  ios: {
    getSignalingInvitationInfoStartAppWithOnSuccess: 'getSignalingInvitationInfoStartApp',
    getConversationPinnedMsgWithConversationID: 'getConversationPinnedMsg',
    modifyMessageWithConversationID: 'modifyMessage',
    onHunguUp: 'OnHangUp',
    Open_im_sdkAddConversationsToGroups: 'addConversationsToGroups',
    Open_im_sdkCreateConversationGroup: 'createConversationGroup',
    Open_im_sdkDeleteConversationGroup: 'deleteConversationGroup',
    Open_im_sdkGetConversationGroupByConversationID: 'getConversationGroupIDsByConversationID',
    Open_im_sdkGetConversationGroupInfoWithConversations:
      'getConversationGroupInfoWithConversations',
    Open_im_sdkGetConversationGroups: 'getConversationGroups',
    Open_im_sdkRemoveConversationsFromGroups: 'removeConversationsFromGroups',
    Open_im_sdkSetConversationGroupListener: 'createConversationGroup',
    Open_im_sdkSetConversationGroupOrder: 'setConversationGroupOrder',
    Open_im_sdkSpeechToText: 'speechToText',
    Open_im_sdkSpeechToTextCapabilities: 'speechToTextCapabilities',
    Open_im_sdkUpdateConversationGroup: 'updateConversationGroup',
    setConversationPinnedMsgWithConversationID: 'setConversationPinnedMsg',
  },
  'react-native': {},
};

const partialCommercialConceptSources: Record<string, string[]> = {
  '/sdk/wasm/calling/overview-calling': [
    '/sdk/wasm/calling/managing-calls/start-single-call',
    '/sdk/wasm/calling/managing-calls/handle-call-events',
    '/sdk/wasm/calling/retrieving-call-information/restore-pending-invitation',
  ],
  '/sdk/flutter/calling/overview-calling': [
    '/sdk/flutter/calling/managing-calls/start-single-call',
    '/sdk/flutter/calling/managing-calls/handle-call-events',
    '/sdk/flutter/calling/retrieving-call-information/restore-pending-invitation',
  ],
  '/sdk/ios/calling/overview-calling': [
    '/sdk/ios/calling/managing-calls/start-single-call',
    '/sdk/ios/calling/managing-calls/handle-call-events',
    '/sdk/ios/calling/retrieving-call-information/restore-pending-invitation',
  ],
};

// These capabilities share general-purpose setters with open-source fields. Classify the
// task page instead of marking the whole setter as commercial.
const fullCommercialConceptPages = new Set([
  '/sdk/wasm/conversation/managing-conversations/set-private-chat',
  '/sdk/wasm/conversation/managing-conversations/set-burn-duration',
  '/sdk/wasm/conversation/managing-conversations/set-message-destruct',
  '/sdk/wasm/conversation/managing-conversations/set-conversation-remark',
  '/sdk/wasm/conversation/managing-conversations/mark-conversation',
  '/sdk/wasm/message/composing-messages/save-local-transcript',
  '/sdk/wasm/user/profile/set-friend-add-permission',
  '/sdk/react-native/user/profile/set-friend-add-permission',
  '/sdk/flutter/conversation/managing-conversations/set-private-chat',
  '/sdk/flutter/conversation/managing-conversations/set-burn-duration',
  '/sdk/flutter/conversation/managing-conversations/set-message-destruct',
  '/sdk/flutter/message/composing-messages/save-local-transcript',
  '/sdk/ios/conversation/managing-conversations/set-private-chat',
  '/sdk/ios/conversation/managing-conversations/set-burn-duration',
  '/sdk/ios/conversation/managing-conversations/set-message-destruct',
  '/sdk/ios/conversation/managing-conversations/set-message-destruct-time',
  '/sdk/ios/message/composing-messages/save-local-transcript',
]);

function applyCommercialConceptOverride(
  pagePath: string,
  info: PageCommercialInfo,
): PageCommercialInfo {
  return fullCommercialConceptPages.has(pagePath) ? { ...info, kind: 'full' } : info;
}

function getWasmPageCommercialInfo(pagePath: string): PageCommercialInfo {
  const documentedMethods = methods.filter(
    (entry) => entry.page === pagePath && entry.status === 'documented',
  );
  const commercialMethods = documentedMethods
    .filter((entry) => entry.commercial)
    .map((entry) => entry.name)
    .sort((left, right) => left.localeCompare(right));
  const openSourceMethods = documentedMethods
    .filter((entry) => !entry.commercial)
    .map((entry) => entry.name)
    .sort((left, right) => left.localeCompare(right));
  const commercialEvents = events
    .filter((entry) => entry.page === pagePath && entry.commercial)
    .map((entry) => entry.name)
    .sort((left, right) => left.localeCompare(right));

  if (commercialMethods.length === 0 && commercialEvents.length === 0) {
    return { kind: 'none', methods: [], openSourceMethods, events: [] };
  }

  const kind: PageCommercialKind = openSourceMethods.length === 0 ? 'full' : 'partial';

  return {
    kind,
    methods: commercialMethods,
    openSourceMethods,
    events: commercialEvents,
  };
}

function parseClientSdkPath(
  pagePath: string,
):
  | { platform: 'wasm'; wasmPath: string }
  | { platform: NativePlatform; wasmPath: string }
  | undefined {
  const match = pagePath.match(/^\/sdk\/(wasm|flutter|ios|react-native)(\/.*)$/);
  if (!match) return undefined;

  const platform = match[1] as 'wasm' | NativePlatform;
  return {
    platform,
    wasmPath: `/sdk/wasm${match[2]}`,
  };
}

function normalizePlatformSymbol(
  platform: NativePlatform,
  symbol: string,
  type: 'method' | 'event',
): string {
  const selectorBase = symbol.split(':', 1)[0];
  const alias = platformSymbolAliases[platform][selectorBase];
  if (alias) return alias;
  if (type === 'event' && selectorBase.startsWith('on')) {
    return `On${selectorBase.slice(2)}`;
  }
  return selectorBase;
}

export function getPageCommercialInfo(pagePath: string): PageCommercialInfo {
  const conceptSources = partialCommercialConceptSources[pagePath];
  if (conceptSources) {
    const sourceInfo = conceptSources.map((sourcePath) => getPageCommercialInfo(sourcePath));
    return {
      kind: 'partial',
      methods: [...new Set(sourceInfo.flatMap((info) => info.methods))].sort((left, right) =>
        left.localeCompare(right),
      ),
      openSourceMethods: [],
      events: [...new Set(sourceInfo.flatMap((info) => info.events))].sort((left, right) =>
        left.localeCompare(right),
      ),
    };
  }

  const route = parseClientSdkPath(pagePath);
  if (!route) return { kind: 'none', methods: [], openSourceMethods: [], events: [] };
  if (route.platform === 'wasm') {
    return applyCommercialConceptOverride(pagePath, getWasmPageCommercialInfo(route.wasmPath));
  }

  const page = nativeAudits[route.platform].find(
    (entry) => entry.currentPath === pagePath && entry.disposition !== 'omit',
  );
  if (!page) return { kind: 'none', methods: [], openSourceMethods: [], events: [] };

  const commercialMethods = page.sdkMethods.filter((name) =>
    commercialMethodNames.has(normalizePlatformSymbol(route.platform, name, 'method')),
  );
  const openSourceMethods = page.sdkMethods.filter((name) => !commercialMethods.includes(name));
  const commercialEvents = page.sdkEvents.filter((name) =>
    commercialEventNames.has(normalizePlatformSymbol(route.platform, name, 'event')),
  );

  if (commercialMethods.length === 0 && commercialEvents.length === 0) {
    return applyCommercialConceptOverride(pagePath, {
      kind: 'none',
      methods: [],
      openSourceMethods,
      events: [],
    });
  }

  const wasmInfo = getWasmPageCommercialInfo(route.wasmPath);
  return applyCommercialConceptOverride(pagePath, {
    kind: wasmInfo.kind === 'full' ? 'full' : 'partial',
    methods: commercialMethods.sort((left, right) => left.localeCompare(right)),
    openSourceMethods: openSourceMethods.sort((left, right) => left.localeCompare(right)),
    events: commercialEvents.sort((left, right) => left.localeCompare(right)),
  });
}

export function getPageCommercialNames(pagePath: string): Set<string> {
  const info = getPageCommercialInfo(pagePath);
  const symbols = [...info.methods, ...info.events];
  return new Set(symbols.flatMap((name) => [name, name.split(':', 1)[0]]));
}

/** Match inline code containing an SDK method or event to a commercial symbol. */
export function matchCommercialSymbol(
  codeText: string,
  commercialNames: ReadonlySet<string>,
): string | null {
  if (commercialNames.size === 0) return null;

  const trimmed = codeText.trim();
  const withoutCall = trimmed.replace(/\(\s*\)$/, '');
  const candidates = [
    withoutCall,
    withoutCall.replace(/^openimsdk\./, ''),
    withoutCall.replace(/^OpenIM\./, ''),
    withoutCall.replace(/^SdkEvent\./, ''),
    withoutCall.includes('.') ? (withoutCall.split('.').at(-1) ?? withoutCall) : withoutCall,
  ];

  for (const candidate of candidates) {
    if (commercialNames.has(candidate)) return candidate;
  }
  return null;
}
