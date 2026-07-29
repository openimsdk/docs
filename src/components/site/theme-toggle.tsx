'use client';

import { useTheme } from 'fumadocs-ui/provider/base';
import { MoonIcon, SunIcon } from '@/src/components/ui/icons';

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  function toggleTheme() {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  }

  return (
    <button
      aria-label="Toggle color theme"
      className="icon-button theme-toggle"
      onClick={toggleTheme}
      type="button"
    >
      <span className="theme-icon theme-icon-moon">
        <MoonIcon />
      </span>
      <span className="theme-icon theme-icon-sun">
        <SunIcon />
      </span>
    </button>
  );
}
