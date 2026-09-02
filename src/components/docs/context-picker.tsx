'use client';

import {
  useEffect,
  useId,
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
} from 'react';
import { useRouter } from 'next/navigation';
import { CheckIcon, ChevronDownIcon } from '@/src/components/ui/icons';
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
          isSdkPlatformVisible(platform) ||
          platform === current.platform,
      ),
  );
  const versions = uniqueVersions(
    productOptions
      .filter((option) => !current.platform || option.platform === current.platform)
      .map((option) => option.version),
  );
  const hasPlatformSwitch =
    current.product === 'sdk' && !current.platform ? false : platforms.length > 0;
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
        <ContextSelect
          label={locale === 'zh' ? '平台' : 'Platform'}
          onChange={(platform) =>
            navigate(
              options.filter(
                (option) => option.product === current.product && option.platform === platform,
              ),
            )
          }
          sections={platformSections.map((section) => ({
            label: section.label,
            options: section.platforms.map((platform) => ({
              label: getPlatformLabel(platform) ?? platform,
              value: platform,
            })),
          }))}
          value={current.platform ?? platforms[0]}
        />
      ) : null}

      {hasVersionSwitch ? (
        <ContextSelect
          label={locale === 'zh' ? '版本' : 'Version'}
          onChange={(version) =>
            navigate(
              options.filter(
                (option) =>
                  option.product === current.product &&
                  option.platform === current.platform &&
                  option.version === version,
              ),
              version,
            )
          }
          sections={[
            {
              options: versions.map((version) => ({ label: version, value: version })),
            },
          ]}
          value={current.version ?? versions[0]}
        />
      ) : null}
    </div>
  );
}

interface ContextSelectSection {
  label?: string;
  options: { label: string; value: string }[];
}

function ContextSelect({
  label,
  onChange,
  sections,
  value,
}: {
  label: string;
  onChange: (value: string) => void;
  sections: ContextSelectSection[];
  value: string;
}) {
  const [open, setOpen] = useState(false);
  const [activeValue, setActiveValue] = useState(value);
  const fieldRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const optionRefs = useRef(new Map<string, HTMLButtonElement>());
  const id = useId();
  const labelId = `${id}-label`;
  const listboxId = `${id}-listbox`;
  const options = sections.flatMap((section) => section.options);
  const selected = options.find((option) => option.value === value) ?? options[0];

  useEffect(() => {
    if (!open) return;

    function closeOnOutsidePointer(event: PointerEvent) {
      if (!fieldRef.current?.contains(event.target as Node)) setOpen(false);
    }

    document.addEventListener('pointerdown', closeOnOutsidePointer);
    return () => document.removeEventListener('pointerdown', closeOnOutsidePointer);
  }, [open]);

  if (!selected) return null;

  function focusOption(nextValue: string) {
    setActiveValue(nextValue);
    requestAnimationFrame(() => optionRefs.current.get(nextValue)?.focus());
  }

  function openAndFocus(direction: 'first' | 'last' | 'selected' = 'selected') {
    const nextValue =
      direction === 'first'
        ? options[0]?.value
        : direction === 'last'
          ? options.at(-1)?.value
          : selected.value;
    setOpen(true);
    if (nextValue) focusOption(nextValue);
  }

  function moveFocus(offset: number) {
    const currentIndex = Math.max(
      0,
      options.findIndex((option) => option.value === activeValue),
    );
    const nextIndex = (currentIndex + offset + options.length) % options.length;
    const nextValue = options[nextIndex]?.value;
    if (nextValue) focusOption(nextValue);
  }

  function selectOption(nextValue: string) {
    setOpen(false);
    setActiveValue(nextValue);
    triggerRef.current?.focus();
    if (nextValue !== value) onChange(nextValue);
  }

  function handleTriggerKeyDown(event: ReactKeyboardEvent<HTMLButtonElement>) {
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      openAndFocus(event.key === 'ArrowDown' ? 'first' : 'last');
    } else if (event.key === 'Escape' && open) {
      event.preventDefault();
      setOpen(false);
    }
  }

  function handleOptionKeyDown(event: ReactKeyboardEvent<HTMLButtonElement>, optionValue: string) {
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      moveFocus(event.key === 'ArrowDown' ? 1 : -1);
    } else if (event.key === 'Home' || event.key === 'End') {
      event.preventDefault();
      const nextValue = event.key === 'Home' ? options[0]?.value : options.at(-1)?.value;
      if (nextValue) focusOption(nextValue);
    } else if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      selectOption(optionValue);
    } else if (event.key === 'Escape') {
      event.preventDefault();
      setOpen(false);
      triggerRef.current?.focus();
    } else if (event.key === 'Tab') {
      setOpen(false);
    }
  }

  return (
    <div className="context-field" ref={fieldRef}>
      <span className="context-field-label" id={labelId}>
        {label}
      </span>
      <button
        aria-controls={listboxId}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-labelledby={`${labelId} ${id}-value`}
        className="context-select-trigger"
        onClick={() => (open ? setOpen(false) : openAndFocus())}
        onKeyDown={handleTriggerKeyDown}
        ref={triggerRef}
        type="button"
      >
        <span id={`${id}-value`}>{selected.label}</span>
        <ChevronDownIcon />
      </button>
      {open ? (
        <div
          aria-labelledby={labelId}
          className="context-select-menu"
          id={listboxId}
          role="listbox"
        >
          {sections.map((section, sectionIndex) => {
            const sectionId = `${id}-section-${sectionIndex}`;
            return (
              <div
                aria-labelledby={section.label ? sectionId : undefined}
                className="context-select-section"
                key={section.label ?? `section-${sectionIndex}`}
                role={section.label ? 'group' : undefined}
              >
                {section.label ? (
                  <div className="context-select-section-label" id={sectionId}>
                    {section.label}
                  </div>
                ) : null}
                {section.options.map((option) => {
                  const isSelected = option.value === value;
                  const isActive = option.value === activeValue;
                  return (
                    <button
                      aria-selected={isSelected}
                      className="context-select-option"
                      data-active={isActive || undefined}
                      key={option.value}
                      onClick={() => selectOption(option.value)}
                      onFocus={() => setActiveValue(option.value)}
                      onKeyDown={(event) => handleOptionKeyDown(event, option.value)}
                      onMouseEnter={() => setActiveValue(option.value)}
                      ref={(node) => {
                        if (node) optionRefs.current.set(option.value, node);
                        else optionRefs.current.delete(option.value);
                      }}
                      role="option"
                      tabIndex={isActive ? 0 : -1}
                      type="button"
                    >
                      <span>{option.label}</span>
                      {isSelected ? <CheckIcon /> : null}
                    </button>
                  );
                })}
              </div>
            );
          })}
        </div>
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
  const groups = [platforms.filter((platform) => !webCompatible.includes(platform)), webCompatible];

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
