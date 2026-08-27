'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { SearchIcon } from '@/src/components/ui/icons';
import type { Locale } from '@/src/lib/i18n';
import { t, toLocalizedPath } from '@/src/lib/i18n';
import { buildSearchRequestUrl } from '@/src/lib/search-core';

interface Result {
  path: string;
  title: string;
  description: string;
  context: string;
}

export function SearchDialog({ locale = 'en' }: { locale?: Locale }) {
  const text = t(locale);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Result[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        openDialog();
      }
      if (event.key === '/' && !isEditableElement(event.target)) {
        event.preventDefault();
        openDialog();
      }
    }

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  useEffect(() => {
    const normalized = query.trim();
    if (normalized.length < 2) return;

    const controller = new AbortController();
    const timeout = window.setTimeout(async () => {
      setLoading(true);
      try {
        const response = await fetch(buildSearchRequestUrl(normalized, 12, locale), {
          signal: controller.signal,
        });
        if (!response.ok) throw new Error('Search request failed');
        const payload = (await response.json()) as { results: Result[] };
        setResults(payload.results);
      } catch (error) {
        if (!(error instanceof DOMException && error.name === 'AbortError')) setResults([]);
      } finally {
        setLoading(false);
      }
    }, 140);

    return () => {
      controller.abort();
      window.clearTimeout(timeout);
    };
  }, [locale, query]);

  function openDialog() {
    dialogRef.current?.showModal();
    window.setTimeout(() => inputRef.current?.focus(), 0);
  }

  function closeDialog() {
    dialogRef.current?.close();
    setQuery('');
    setResults([]);
  }

  return (
    <>
      <button
        aria-label={text.search.trigger}
        className="search-trigger"
        onClick={openDialog}
        type="button"
      >
        <SearchIcon />
        <span>{text.search.trigger}</span>
        <kbd>⌘K</kbd>
      </button>
      <dialog
        aria-label={text.search.aria}
        className="search-dialog"
        onClick={(event) => {
          if (event.target === dialogRef.current) closeDialog();
        }}
        ref={dialogRef}
      >
        <div className="search-panel">
          <div className="search-input-row">
            <SearchIcon />
            <input
              aria-label={text.search.input}
              onChange={(event) => {
                const value = event.target.value;
                setQuery(value);
                if (value.trim().length < 2) {
                  setResults([]);
                  setLoading(false);
                }
              }}
              placeholder={text.search.placeholder}
              ref={inputRef}
              value={query}
            />
            <button onClick={closeDialog} type="button">
              Esc
            </button>
          </div>
          <div aria-live="polite" className="search-results">
            {loading ? <p className="search-state">{text.search.loading}</p> : null}
            {!loading && query.trim().length >= 2 && results.length === 0 ? (
              <p className="search-state">{text.search.empty}</p>
            ) : null}
            {results.map((result) => (
              <Link
                href={toLocalizedPath(result.path, locale)}
                key={result.path}
                onClick={closeDialog}
              >
                <span className="search-result-context">{result.context}</span>
                <strong>{result.title}</strong>
                <span>{result.description}</span>
              </Link>
            ))}
            {query.trim().length < 2 ? <p className="search-state">{text.search.hint}</p> : null}
          </div>
        </div>
      </dialog>
    </>
  );
}

function isEditableElement(target: EventTarget | null): boolean {
  return (
    target instanceof HTMLInputElement ||
    target instanceof HTMLTextAreaElement ||
    (target instanceof HTMLElement && target.isContentEditable)
  );
}
