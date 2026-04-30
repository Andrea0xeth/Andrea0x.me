import type { Config } from "tailwindcss";

/**
 * Tailwind config.
 *
 * Color note:
 *   The canonical decorative accent for this site is the CSS var
 *   `--accent-primary` (see src/app/globals.css). Prefer
 *   `bg-[var(--accent-primary)]` / `text-[var(--accent-primary)]` for
 *   theme-aware accents.
 *
 *   The Tailwind `primary-*` palette below is retained for legacy classes
 *   (e.g. `.section-divider`, a few hardcoded utilities) and is NOT the
 *   source of truth for branding. Avoid introducing new usages.
 */
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--bg-primary)',
        foreground: 'var(--text-primary)',
        // Legacy palette — see note above.
        primary: {
          DEFAULT: '#3b82f6',
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      fontSize: {
        display: ['48px', { lineHeight: '52px', letterSpacing: '-0.02em' }],
        h1: ['32px', { lineHeight: '36px', letterSpacing: '-0.01em' }],
        h2: ['24px', { lineHeight: '30px' }],
        h3: ['18px', { lineHeight: '24px' }],
        body: ['15px', { lineHeight: '24px' }],
        caption: ['13px', { lineHeight: '20px' }],
        tag: ['11px', { lineHeight: '14px', letterSpacing: '0.04em' }],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(12px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.98)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      fontFamily: {
        // Inter (variable injected by next/font in src/app/layout.tsx).
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        // JetBrains Mono — apply via `font-mono`. Variable also injected by
        // next/font in src/app/layout.tsx.
        mono: [
          'var(--font-jetbrains-mono)',
          'JetBrains Mono',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'monospace',
        ],
      },
    },
  },
  plugins: [],
};

export default config;
