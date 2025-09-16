import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/theme-context";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Andrea0x.eth - Blockchain Product Manager & Web3 Developer | DeFi & DAO Expert",
  description: "Professional Blockchain Product Manager & Product Communication specialist. Expert in DAO, DeFi, NFTs & Web3 technologies. Building the future of decentralized applications with EVM expertise.",
  keywords: [
    "blockchain product manager",
    "web3 developer",
    "defi expert",
    "dao specialist",
    "nft developer",
    "ethereum developer",
    "smart contracts",
    "blockchain consultant",
    "web3 product management",
    "decentralized applications",
    "crypto product manager",
    "blockchain communication",
    "EVM expert",
    "andrea0x.eth",
    "andrea ritondale",
    "Blockchain",
    "Web3",
    "DeFi",
    "DAO",
    "NFT",
    "Product Manager",
    "Ethereum",
    "Smart Contracts",
    "Decentralized Finance"
  ],
  authors: [{ name: "Andrea Ritondale" }],
  creator: "Andrea0x.eth",
  publisher: "Andrea0x.eth",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://andrea0x.eth.limo'),
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: '/',
  },
  category: 'technology',
  classification: 'Portfolio Website',
  other: {
    'theme-color': '#3b82f6',
    'color-scheme': 'dark light',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'Andrea0x.eth',
    'application-name': 'Andrea0x.eth Portfolio',
    'msapplication-TileColor': '#3b82f6',
  },
  openGraph: {
    title: "Andrea0x.eth - Blockchain Product Manager & Web3 Developer",
    description: "Professional Blockchain Product Manager & Product Communication specialist. Expert in DAO, DeFi, NFTs & Web3 technologies. Building the future of decentralized applications.",
    url: 'https://andrea0x.eth.limo',
    siteName: 'Andrea0x.eth Portfolio',
    images: [
      {
        url: 'https://static.debank.com/image/op_nft/local_url/f75f6a9d560cf10d57c1866859b64c43/8294c465eb0314d169a2c0efdb354952.png',
        width: 1200,
        height: 630,
        alt: 'Andrea0x.eth - Blockchain Product Manager',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Andrea0x.eth - Blockchain Product Manager & Web3 Specialist",
    description: "Blockchain Product Manager & Product Communication specialist.",
    creator: '@andrea0x_eth',
    images: ['https://static.debank.com/image/op_nft/local_url/f75f6a9d560cf10d57c1866859b64c43/8294c465eb0314d169a2c0efdb354952.png'],
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0ea5e9" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}