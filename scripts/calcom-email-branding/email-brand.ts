/**
 * Mirrors Andrea0x.me light-theme tokens (src/app/globals.css :root)
 * and copy from src/data/portfolio.ts — keep in sync manually when those change.
 */
export const emailBrand = {
  colors: {
    bgPrimary: "#ffffff",
    bgSecondary: "#f7f8fa",
    textPrimary: "#0b1020",
    textSecondary: "#475569",
    textTertiary: "#6b7589",
    borderPrimary: "#e5e7eb",
    accentPrimary: "#3b82f6",
    /** Cal.com outer email canvas */
    emailCanvas: "#f3f4f6",
  },
  fonts: {
    sans: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    mono: '"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
  },
  radius: {
    surface: "16px",
    card: "6px",
  },
  site: {
    url: "https://www.andrea0x.me",
    bookUrl: "https://call.andrea0x.me/book",
  },
  personal: {
    name: "Andrea Ritondale",
    handle: "Andrea0x.eth",
    tagline:
      "Principal Engineer · IT Architect · AI Builder · Hybrid Technical Founder",
    email: "hello@andrea0x.me",
    avatarUrl: "https://www.andrea0x.me/images/me.jpg",
  },
  social: {
    linkedin: "https://it.linkedin.com/in/andrea-ritondale",
    github: "https://github.com/Andrea0xeth",
    twitter: "https://x.com/andrea0x_eth",
    telegram: "https://t.me/Andrea0x_eth",
  },
} as const;
