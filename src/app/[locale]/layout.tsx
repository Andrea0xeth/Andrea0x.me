import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { portfolioData } from "@/data/portfolio";
import type { Locale } from "@/data/types";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

const SITE_TITLE =
  "Andrea Ritondale — Principal Engineer · IT Architect · AI Builder";

const KEYWORDS = [
  "principal engineer",
  "founding engineer",
  "it architect",
  "technical co-founder",
  "ai engineer",
  "multi-agent systems",
  "mcp gateway",
  "ai-native workflow",
  "fractional cto",
  "cto-as-a-service",
  "italian principal engineer",
  "full-stack developer",
  "mongodb performance engineering",
  "defi engineer",
  "web3 developer",
  "smart contract integration",
  "blockchain consultant",
  "italian gov pnrr",
  "andrea ritondale",
  "andrea0x.eth",
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = rawLocale === "it" ? "it" : "en";
  const description = portfolioData.personal.shortBio[locale];

  return {
    title: {
      default: SITE_TITLE,
      template: "%s · Andrea Ritondale",
    },
    description,
    keywords: KEYWORDS,
    authors: [{ name: "Andrea Ritondale" }],
    creator: "Andrea Ritondale",
    publisher: "Andrea Ritondale",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL("https://andrea0x.me"),
    icons: {
      icon: "/favicon.ico",
      apple: "/apple-touch-icon.png",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: `/${locale}`,
      languages: {
        it: "/it",
        en: "/en",
      },
    },
    category: "technology",
    openGraph: {
      title: SITE_TITLE,
      description,
      url: `https://andrea0x.me/${locale}`,
      siteName: "Andrea Ritondale",
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: SITE_TITLE,
        },
      ],
      locale: locale === "it" ? "it_IT" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: SITE_TITLE,
      description,
      creator: "@andrea0x_eth",
      images: ["/opengraph-image"],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Enable static rendering for this locale
  setRequestLocale(locale);

  const messages = await getMessages();

  // JSON-LD Person schema. Uses EN shortBio so it stays stable across locales.
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Andrea Ritondale",
    alternateName: "Andrea0x.eth",
    url: "https://andrea0x.me",
    image: "https://andrea0x.me/images/me.jpg",
    jobTitle: "Principal Engineer · IT Architect · AI Builder",
    description: portfolioData.personal.shortBio.en,
    sameAs: [
      "https://it.linkedin.com/in/andrea-ritondale",
      "https://x.com/andrea0x_eth",
      "https://github.com/Andrea0xeth",
      "https://t.me/Andrea0x_eth",
    ],
    knowsAbout: [
      "Software Engineering",
      "AI Engineering",
      "Cloud Architecture",
      "Web3",
      "DeFi",
      "Blockchain",
      "Product Management",
      "IT Architecture",
    ],
    nationality: "Italian",
    knowsLanguage: ["Italian", "English"],
  };

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      {children}
    </NextIntlClientProvider>
  );
}
