'use client';

import { useRouter } from 'next/navigation';
import {
  getPlatformLabel,
  isSdkPlatformVisible,
  webCompatibleSdkPlatforms,
} from '@/src/config/docs';
import type { Locale } from '@/src/lib/i18n';
import { shouldShowVersion, uniqueVersions } from '@/src/lib/version-visibility';

export interface ContextOption {
  key: string;
  product: string;
  platform?: string | null;
  version?: string | null;
  href: string;
  pageCount: number;
}

export function ContextPicker({
  currentKey,
  locale = 'en',
  options,
}: {
  currentKey: string;
  locale?: Locale;
  options: ContextOption[];
}) {
  const router = useRouter();
  const current = options.find((option) => option.key === currentKey) ?? options[0];
  if (!current) return null;

  const productOptions = options.filter((option) => option.product === current.product);
  const platforms = unique(
    productOptions
      .map((option) => option.platform)
      .filter((value): value is string => Boolean(value))
      .filter(
        (platform) =>
          current.product !== 'sdk' ||
          isSdkPlatformVisible(platform, locale) ||
          platform === current.platform,
      ),
  );
  const versions = uniqueVersions(
    productOptions
      .filter((option) => !current.platform || option.platform === current.platform)
      .map((option) => option.version),
  );
  const hasPlatformSwitch = current.product === 'sdk' && !current.platform ? false : platforms.length > 0;
  const hasVersionSwitch = shouldShowVersion(current.version, versions);
  const platformSections = groupPlatforms(platforms, locale);

  if (!hasPlatformSwitch && !hasVersionSwitch) return null;

  function navigate(candidates: ContextOption[], preferredVersion = current.version) {
    const destination = pickContext(candidates, preferredVersion);
    if (destination) router.push(destination.href);
  }

  return (
    <div className={`context-picker ${hasPlatformSwitch && hasVersionSwitch ? '' : 'is-single'}`}>
      {hasPlatformSwitch ? (
        <label>
          <span>{locale === 'zh' ? '平台' : 'Platform'}</span>
          <select
            onChange={(event) =>
              navigate(
                options.filter(
                  (option) =>
                    option.product === current.product && option.platform === event.target.value,
                ),
              )
            }
            value={current.platform ?? platforms[0]}
          >
            {platformSections.map((section, index) =>
              section.label ? (
                <optgroup key={section.label} label={section.label}>
                  {section.platforms.map((platform) => (
                    <option key={platform} value={platform}>
                      {getPlatformLabel(platform)}
                    </option>
                  ))}
                </optgroup>
              ) : (
                section.platforms.map((platform) => (
                  <option key={`${index}-${platform}`} value={platform}>
                    {getPlatformLabel(platform)}
                  </option>
                ))
              ),
            )}
          </select>
        </label>
      ) : null}

      {hasVersionSwitch ? (
        <label>
          <span>{locale === 'zh' ? '版本' : 'Version'}</span>
          <select
            onChange={(event) =>
              navigate(
                options.filter(
                  (option) =>
                    option.product === current.product &&
                    option.platform === current.platform &&
                    option.version === event.target.value,
                ),
                event.target.value,
              )
            }
            value={current.version ?? versions[0]}
          >
            {versions.map((version) => (
              <option key={version} value={version}>
                {version}
              </option>
            ))}
          </select>
        </label>
      ) : null}
    </div>
  );
}

function pickContext(
  candidates: ContextOption[],
  preferredVersion?: string | null,
): ContextOption | undefined {
  return (
    candidates.find((option) => option.version === preferredVersion) ??
    [...candidates].sort((a, b) => versionNumber(b.version) - versionNumber(a.version))[0]
  );
}

function versionNumber(version?: string | null): number {
  const match = version?.match(/\d+/);
  return match ? Number.parseInt(match[0], 10) : 0;
}

function unique<T>(values: T[]): T[] {
  return [...new Set(values)];
}

function groupPlatforms(
  platforms: string[],
  locale: Locale,
): { label?: string; platforms: string[] }[] {
  const webCompatible = platforms.filter((platform) =>
    (webCompatibleSdkPlatforms as readonly string[]).includes(platform),
  );
  const groups = [
    platforms.filter((platform) => !webCompatible.includes(platform)),
    webCompatible,
  ];

  return groups
    .map((group, index) => ({
      label:
        index === 1 && group.length > 0
          ? locale === 'zh'
            ? 'Web 兼容'
            : 'Web-compatible'
          : undefined,
      platforms: group,
    }))
    .filter((group) => group.platforms.length > 0);
}
