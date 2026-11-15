import type { BilingualString } from './types';

/**
 * Short copy for the /work index CasesRail (seeded from public/landing #work).
 * Full case-study pages keep portfolio.ts as source of truth.
 */
export interface CaseIndexBlurb {
  slug: string;
  /** Rail label when it differs from CaseStudy.title (e.g. dpass). */
  railName?: string;
  railHint: BilingualString;
  /** Compact status chip (landing casing). */
  statusTag: BilingualString;
  headline: BilingualString;
  lead: BilingualString;
  tabs: {
    context: BilingualString;
    architecture: BilingualString;
    results: BilingualString;
  };
  glance: {
    role: BilingualString;
    /** Omit when there is no client list to show. */
    clients?: string;
    stack: string;
    keyNumber: BilingualString;
  };
}

export const caseIndexBlurbs: CaseIndexBlurb[] = [
  {
    slug: 'haelias',
    railHint: {
      en: 'Solo CTO · Montefarmaco · Logista',
      it: 'Solo CTO · Montefarmaco · Logista',
    },
    statusTag: { en: 'In production', it: 'In produzione' },
    headline: {
      en: 'Live procurement for Italian pharmacies. One CTO, production clients.',
      it: 'Procurement live per le farmacie italiane. Un solo CTO, clienti in produzione.',
    },
    lead: {
      en: 'Digital procurement live with enterprise clients. Express backend, React 19 UI, Rust worker, DigitalOcean.',
      it: 'Procurement digitale live con clienti enterprise. Backend Express, UI React 19, worker Rust, DigitalOcean.',
    },
    tabs: {
      context: {
        en: 'Italian pharmacies still buy via phone, email and fax. Haelias is the live B2B layer for that market. Solo CTO ownership end-to-end.',
        it: 'Le farmacie italiane ordinano ancora via telefono, email e fax. Haelias è il layer B2B live di quel mercato. Ownership da Solo CTO end-to-end.',
      },
      architecture: {
        en: 'Five repos in production: Express + TypeScript (143 endpoints), React 19 SPA, Rust + Tokio Farmadati sync, Managed MongoDB on DigitalOcean.',
        it: 'Cinque repo in produzione: Express + TypeScript (143 endpoint), SPA React 19, sync Farmadati in Rust + Tokio, Managed MongoDB su DigitalOcean.',
      },
      results: {
        en: '5.5M+ MongoDB documents live; 70% on-disk index reduction (1.69 GB to 369 MB); €1,260/year cluster upgrade avoided.',
        it: '5.5M+ documenti MongoDB live; −70% indici on-disk (1.69 GB a 369 MB); upgrade cluster da €1.260/anno evitato.',
      },
    },
    glance: {
      role: { en: 'Solo CTO', it: 'Solo CTO' },
      clients: 'Montefarmaco · Logista SPA',
      stack: 'Express · React 19 · Rust · MongoDB',
      keyNumber: { en: '5.5M+ documents', it: '5.5M+ documenti' },
    },
  },
  {
    slug: 'mandate',
    railName: 'Mandate',
    railHint: {
      en: 'Technical co-founder · 11 workspaces',
      it: 'Technical co-founder · 11 workspace',
    },
    statusTag: { en: 'Pre-launch', it: 'Pre-lancio' },
    headline: {
      en: 'DeFi run by AI agents: one LLM loop, three chains, encrypted keys per agent.',
      it: 'DeFi gestita da agenti AI: un loop LLM, tre chain, chiavi cifrate per agente.',
    },
    lead: {
      en: 'One LLM loop over 7 job types, Python MCP gateway, signing-service with encrypted per-agent keys. CREATE2 on three chains.',
      it: 'Un loop LLM su 7 job type, MCP gateway in Python, signing-service con chiavi per agente cifrate. CREATE2 su tre chain.',
    },
    tabs: {
      context: {
        en: 'Mandate needs agents that can operate DeFi workflows without exposing keys. Pre-launch platform with 11 workspaces stood up in five weeks.',
        it: 'Mandate serve agenti che operano workflow DeFi senza esporre le chiavi. Piattaforma pre-lancio: 11 workspace in cinque settimane.',
      },
      architecture: {
        en: 'LLM loop over 7 job types, Python MCP gateway, signing-service with encrypted per-agent keys. Contracts at the same CREATE2 address on Ethereum, Base and Arbitrum.',
        it: 'Loop LLM su 7 job type, MCP gateway in Python, signing-service con chiavi per agente cifrate. Contratti allo stesso CREATE2 su Ethereum, Base e Arbitrum.',
      },
      results: {
        en: '11 workspaces in 5 weeks; 1,300+ commits; 3 chains at identical CREATE2 addresses.',
        it: '11 workspace in 5 settimane; 1.300+ commit; 3 chain allo stesso indirizzo CREATE2.',
      },
    },
    glance: {
      role: { en: 'Technical co-founder', it: 'Technical co-founder' },
      stack: 'Next.js 15 · Cloud Run · Foundry · Python MCP',
      keyNumber: {
        en: '11 workspaces in 5 weeks',
        it: '11 workspace in 5 settimane',
      },
    },
  },
  {
    slug: 'dpass',
    railName: 'ArtCertify',
    railHint: {
      en: 'Tech lead · MiC · Invitalia',
      it: 'Lead tecnico · MiC · Invitalia',
    },
    statusTag: { en: 'Active', it: 'Attivo' },
    headline: {
      en: 'Ministry of Culture tender: four blockchain data products for cultural assets.',
      it: 'Bando Ministero della Cultura: quattro data product blockchain per i beni culturali.',
    },
    lead: {
      en: 'Ecomic Lotto 3: soulbound certificates, SPID identity, hybrid MINIO + IPFS. RTI Activa Digital + Civita.',
      it: 'Ecomic Lotto 3: certificazioni soulbound, identità SPID, storage ibrido MINIO + IPFS. RTI Activa Digital + Civita.',
    },
    tabs: {
      context: {
        en: 'Italian Ministry of Culture (Ecomic Lotto 3) needed verifiable credentials for cultural assets without losing institutional identity flows (SPID).',
        it: 'Il Ministero della Cultura (Ecomic Lotto 3) doveva certificare i beni culturali senza perdere i flussi di identità istituzionali (SPID).',
      },
      architecture: {
        en: 'Four blockchain Data Products, soulbound certificates, SPID identity, hybrid MINIO + IPFS. Chains: Algorand + Base.',
        it: 'Quattro Data Product blockchain, certificazioni soulbound, SPID, storage ibrido MINIO + IPFS. Chain: Algorand + Base.',
      },
      results: {
        en: '4 data products; 6 pilot use cases; 2 chains in the delivery scope.',
        it: '4 data product; 6 use case pilota; 2 chain nel perimetro di delivery.',
      },
    },
    glance: {
      role: {
        en: 'Technical-functional lead',
        it: 'Lead tecnico-funzionale',
      },
      clients: 'MiC · Activa Digital · Civita',
      stack: 'Algorand · Base · SPID · MINIO · IPFS',
      keyNumber: { en: '4 data products', it: '4 data product' },
    },
  },
  {
    slug: 'factor',
    railHint: {
      en: 'Founding engineer · 68 MCP tools',
      it: 'Founding engineer · 68 tool MCP',
    },
    statusTag: { en: 'Completed', it: 'Completato' },
    headline: {
      en: 'ERC-4626 vaults across three chains, and an MCP layer with 68 tools.',
      it: 'Vault ERC-4626 su tre chain, e un layer MCP con 68 tool.',
    },
    lead: {
      en: 'Vaults on Arbitrum, Base and Ethereum, two production UIs, Vault-as-a-Service paid in USDC via x402.',
      it: 'Vault su Arbitrum, Base ed Ethereum, due UI in produzione, Vault-as-a-Service pagato in USDC via x402.',
    },
    tabs: {
      context: {
        en: 'Factor needed production vault infrastructure plus an AI-native surface so agents can operate vaults safely.',
        it: 'Factor serviva infrastruttura vault in produzione e una superficie AI-native perché gli agenti operassero i vault in sicurezza.',
      },
      architecture: {
        en: 'ERC-4626 on Arbitrum, Base and Ethereum; two production UIs; MCP server with 68 tools; VaaS paid in USDC via x402.',
        it: 'ERC-4626 su Arbitrum, Base ed Ethereum; due UI in produzione; server MCP con 68 tool; VaaS pagato in USDC via x402.',
      },
      results: {
        en: '~140k LOC; 468 + 253 commits across main surfaces; 68 MCP tools shipped.',
        it: '~140k LOC; 468 + 253 commit sulle superfici principali; 68 tool MCP rilasciati.',
      },
    },
    glance: {
      role: { en: 'Founding engineer', it: 'Founding engineer' },
      clients: 'Factor',
      stack: 'ERC-4626 · MCP · x402 · USDC',
      keyNumber: { en: '68 MCP tools', it: '68 tool MCP' },
    },
  },
  {
    slug: 'deckagent',
    railHint: {
      en: 'Solo founder · local-first · QR pairing',
      it: 'Solo founder · local-first · QR pairing',
    },
    statusTag: { en: 'Beta', it: 'Beta' },
    headline: {
      en: 'A remote for Cursor on your phone. Code stays on your machine.',
      it: 'Il telecomando di Cursor dal telefono. Il codice resta sul tuo computer.',
    },
    lead: {
      en: 'Follow agents, read plans, send the next prompt. Daemon, PWA, extension, iOS app and Watch.',
      it: 'Segui gli agenti, leggi i piani, manda il prossimo prompt. Daemon, PWA, estensione, app iOS e Watch.',
    },
    tabs: {
      context: {
        en: 'You leave the desk but the agent keeps running. DeckAgent is the phone remote while the repo stays local.',
        it: "Lasci la scrivania ma l'agente continua. DeckAgent è il telecomando dal telefono mentre il repo resta in locale.",
      },
      architecture: {
        en: 'Five surfaces: daemon, PWA, browser extension, iOS app and Watch. QR pairing; 100% local bind: no cloud proxy of the codebase.',
        it: 'Cinque superfici: daemon, PWA, estensione, app iOS e Watch. Pairing QR; 100% in locale: niente proxy cloud del codice.',
      },
      results: {
        en: '5 surfaces shipping; 100% local; QR pairing for session bootstrap.',
        it: '5 superfici; 100% in locale; pairing QR per avviare la sessione.',
      },
    },
    glance: {
      role: { en: 'Solo founder', it: 'Solo founder' },
      stack: 'Daemon · PWA · iOS · Watch',
      keyNumber: {
        en: '5 surfaces · 100% local',
        it: '5 superfici · 100% locale',
      },
    },
  },
];

export function blurbForSlug(slug: string): CaseIndexBlurb | undefined {
  return caseIndexBlurbs.find((b) => b.slug === slug);
}
