import type { Locale } from '@/src/lib/i18n';

export const productLabels: Record<string, string> = {
  chat: 'Chat',
  sdk: 'SDKs',
  'platform-api': 'Platform API',
};

export const productLabelsZh: Record<string, string> = {
  chat: '聊天',
  sdk: 'SDKs',
  'platform-api': '服务端 API',
};

export const platformLabels: Record<string, string> = {
  ios: 'iOS',
  android: 'Android',
  flutter: 'Flutter',
  uniapp: 'uni-app',
  harmony: 'HarmonyOS',
  wasm: 'WASM',
  electron: 'Electron',
  miniprogram: 'Mini Program',
  'react-native': 'React Native',
};

export const webCompatibleSdkPlatforms = ['wasm', 'electron', 'miniprogram'] as const;

/** Temporarily hidden from SDK nav, home cards, and platform switcher. Routes remain. */
export const hiddenSdkPlatforms = ['uniapp', 'harmony', 'react-native'] as const;

export function isSdkPlatformVisible(platform?: string | null): boolean {
  if (!platform) return true;
  return !(hiddenSdkPlatforms as readonly string[]).includes(platform);
}

export type SdkPlatformItem = {
  href: string;
  label: string;
  labelZh?: string;
  platform: string;
};

export type SdkPlatformSection = {
  description?: string;
  descriptionZh?: string;
  items: SdkPlatformItem[];
  label?: string;
  labelZh?: string;
};

export const sdkPlatformSections: SdkPlatformSection[] = [
  {
    items: [
      { label: 'iOS', platform: 'ios', href: '/sdk/ios/overview' },
      { label: 'Android', platform: 'android', href: '/sdk/android/overview' },
      { label: 'Flutter', platform: 'flutter', href: '/sdk/flutter/overview' },
      { label: 'HarmonyOS', platform: 'harmony', href: '/sdk/harmony/overview' },
    ],
  },
  {
    label: 'Web-compatible',
    labelZh: 'Web 兼容',
    description: 'Shared core API',
    descriptionZh: '共享核心 API',
    items: [
      { label: 'WASM', platform: 'wasm', href: '/sdk/wasm/overview' },
      { label: 'Electron', platform: 'electron', href: '/sdk/electron/overview' },
      {
        label: 'Mini Program',
        platform: 'miniprogram',
        href: '/sdk/miniprogram/overview',
      },
    ],
  },
  {
    label: 'Common reference',
    labelZh: '公共参考',
    description: 'Shared by client SDKs',
    descriptionZh: '各客户端 SDK 通用',
    items: [
      {
        label: 'Error codes',
        labelZh: '错误码',
        platform: 'common',
        href: '/sdk/error-codes',
      },
    ],
  },
];

export const sdkPlatformItems = sdkPlatformSections.flatMap((section) => section.items);

export function getProductLabel(product: string, locale: Locale = 'en'): string {
  if (locale === 'zh')
    return productLabelsZh[product] ?? productLabels[product] ?? humanizeSlug(product);
  return productLabels[product] ?? humanizeSlug(product);
}

export function getPlatformLabel(platform?: string | null): string | undefined {
  if (!platform) return undefined;
  return platformLabels[platform] ?? humanizeSlug(platform);
}

export function humanizeSlug(value: string): string {
  return value
    .replace(/[_-]+/g, ' ')
    .replace(/\b\w/g, (letter) => letter.toUpperCase())
    .replace(/\bIos\b/g, 'iOS')
    .replace(/\bSdk\b/g, 'SDK')
    .replace(/\bApi\b/g, 'API');
}
