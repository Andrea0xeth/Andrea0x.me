'use client';

import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  /** Whether the user has explicitly chosen a theme (vs. inheriting from OS). */
  isManual: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const STORAGE_KEY = 'theme';

function readSystemPreference(): Theme {
  if (typeof window === 'undefined') return 'dark';
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Initial value is set after hydration in the effect; default 'dark' avoids FOUC
  // (matches the most common case for this site). The inline script in <head>
  // is what really sets the right class before paint — see `theme-init.ts`.
  const [theme, setTheme] = useState<Theme>('dark');
  const [isManual, setIsManual] = useState<boolean>(false);

  // First-load resolution: localStorage wins; otherwise mirror OS preference.
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as Theme | null;
    if (saved === 'light' || saved === 'dark') {
      setTheme(saved);
      setIsManual(true);
    } else {
      setTheme(readSystemPreference());
      setIsManual(false);
    }
  }, []);

  // Apply class + persist (only when manual choice).
  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
  }, [theme]);

  // Live-track OS preference changes — but only when the user has NOT manually
  // toggled. The moment they click the switcher, isManual=true and we stop
  // following the OS until they clear localStorage.
  useEffect(() => {
    if (isManual) return;
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = (e: MediaQueryListEvent) => {
      setTheme(e.matches ? 'dark' : 'light');
    };
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, [isManual]);

  const toggleTheme = () => {
    setTheme((prev) => {
      const next = prev === 'light' ? 'dark' : 'light';
      localStorage.setItem(STORAGE_KEY, next);
      return next;
    });
    setIsManual(true);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isManual }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
