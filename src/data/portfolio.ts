import type { PortfolioData } from "./types";

// ---------------------------------------------------------------------------
// Andrea Ritondale — canonical portfolio dataset.
// Source: /me.md (v3.0, 2026-04-30). Italian content lifted from the canonical
// document; English translations are professional rewrites (not MT).
// ---------------------------------------------------------------------------

export const portfolioData: PortfolioData = {
  personal: {
    name: "Andrea Ritondale",
    handle: "Andrea0x.eth",
    nationality: "Italian",
    birthYear: 1994,
    workMode: {
      it: "100% remoto, disponibile a viaggiare quando serve.",
      en: "100% remote, willing to travel when needed.",
    },
    shortBio: {
      it: "Principal Engineer + IT Architect + AI Builder. Costruisco e gestisco sistemi IT complessi end-to-end attraverso domini diversi: B2B SaaS pharma in produzione, DeFi AI-native, dati pubblici italiani per i beni culturali.",
      en: "Principal Engineer + IT Architect + AI Builder. I design, build and run complex IT systems end-to-end across multiple domains: production B2B pharma SaaS, AI-native DeFi, Italian government data products for cultural heritage.",
    },
    longBio: {
      it: "Sono Andrea — imprenditore tecnico ibrido. Principal Engineer + IT Architect + AI Builder, con ownership end-to-end di sistemi IT complessi su domini multipli.\n\nTraditional software development: 6+ anni di full-stack senior. Su Haelias sono Solo CTO di una piattaforma B2B di procurement digitale per farmacie italiane in produzione attiva, con 5.5M+ documenti MongoDB, ~14k prodotti in stock cross-supplier, 143 endpoint Express e clienti enterprise come Montefarmaco e Logista SPA. Stack: React 19 + Node + Rust + MongoDB + DigitalOcean. Caso emblematico: riduzione 70% size indici in produzione live (1.69 GB -> 369 MB) evitando un upgrade da +€1.260/anno.\n\nAI engineering: su Mandate.Finance sono Founding Product Engineer e Technical Co-founder. Ho costruito una piattaforma DeFi su 11 workspace (6 servizi runtime su Cloud Run, Foundry contracts, infra, due frontend Next.js 15, harness di test, docs). L'agent layer è un singolo LLM loop parametrizzato per 7 job type e 8 strategy template in Postgres, con MCP gateway in Python che intermedia le letture, signing-service che custodisce per-agent EOA cifrate AES-256-GCM, e tre layer di difesa contro le hallucination dello step deploy.\n\nAI-native workflow: tratto Claude Code come moltiplicatore strategico — multi-agent parallel dispatch, code review automation, multi-repo deploy orchestration, conversation->PRD pipeline. Top-decile workflow.\n\nCloud / DevOps: gestisco infrastructure su due piattaforme (GCP per Mandate, DigitalOcean per Haelias) senza supporto DevOps dedicato. Cloud Run, Cloud SQL private + VPC, Secret Manager, App Platform, Managed MongoDB, Vercel, Netlify, Docker. Runbook self-authored.\n\nWeb3 / Blockchain: integrazione smart contract multi-chain EVM (Ethereum, Base, Arbitrum) e Algorand, ERC-4626, EIP-7702 / ERC-7821, account abstraction, soulbound token (ARC-19 + ERC-5192), cross-chain via LiFi, x402 payments, MCP server, integrazione protocolli (AAVE, Morpho, Balancer, Factor SDK).\n\nIT management & digitalizzazione: trasformo workflow tradizionali in flussi digitali end-to-end. Coordino team distribuiti su più progetti in parallelo.\n\nBusiness strategy: revenue modeling Excel, SWOT, business plan, cap table, fundraising, pitch deck, GTM strategy.\n\nSu Activa Digital sono lead tecnico-funzionale di ArtCertify e dei 4 Data Product blockchain del Bando Ecomic Lotto 3 (MiC PNRR), parte di RTI con Civita Mostre, deadline 30 giugno 2026.\n\nNon sono un PM che delega il tech, né un dev che ignora il business. Sono uno dei pochi che può disegnare un sistema, costruirlo, gestirne la complessità IT e poi venderlo. Italiano nativo, lavoro con team internazionali in inglese.",
      en: "I'm Andrea — a hybrid technical founder. Principal Engineer + IT Architect + AI Builder, with end-to-end ownership of complex IT systems across multiple domains.\n\nTraditional software development: 6+ years of senior full-stack work. On Haelias I'm the Solo CTO of a B2B digital procurement platform for Italian pharmacies, running in production with 5.5M+ MongoDB documents, ~14k cross-supplier in-stock products, 143 Express endpoints, and enterprise clients like Montefarmaco and Logista SPA. Stack: React 19 + Node + Rust + MongoDB + DigitalOcean. A flagship example: a 70% reduction in index footprint on the live cluster (1.69 GB -> 369 MB), avoiding a €1,260/year cluster upgrade.\n\nAI engineering: on Mandate.Finance I'm the Founding Product Engineer and Technical Co-founder. I built a DeFi platform across 11 workspaces (6 Cloud Run runtime services, Foundry contracts, infra, two Next.js 15 frontends, a test harness, docs). The agent layer is a single LLM loop parameterised by 7 job types and 8 strategy templates stored in Postgres, with a Python MCP gateway brokering reads, a signing-service custodying AES-256-GCM-encrypted per-agent EOAs, and three layers of defense against deploy-step hallucinations.\n\nAI-native workflow: I treat Claude Code as a strategic multiplier — multi-agent parallel dispatch, code-review automation, multi-repo deploy orchestration, conversation-to-PRD pipeline. Top-decile workflow.\n\nCloud / DevOps: I run infrastructure across two platforms (GCP for Mandate, DigitalOcean for Haelias) without dedicated DevOps support. Cloud Run, Cloud SQL private + VPC, Secret Manager, App Platform, Managed MongoDB, Vercel, Netlify, Docker. Self-authored runbooks.\n\nWeb3 / Blockchain: multi-chain smart-contract integration on EVM (Ethereum, Base, Arbitrum) and Algorand, ERC-4626, EIP-7702 / ERC-7821, account abstraction, soulbound tokens (ARC-19 + ERC-5192), cross-chain via LiFi, x402 payments, MCP servers, protocol integrations (AAVE, Morpho, Balancer, Factor SDK).\n\nIT management & digitalization: I turn traditional workflows into end-to-end digital flows and coordinate distributed teams across several parallel projects.\n\nBusiness strategy: Excel revenue modeling, SWOT, business plan, cap table, fundraising, pitch deck, GTM.\n\nAt Activa Digital I'm the technical-functional lead on ArtCertify and the 4 blockchain Data Products of the Ecomic Lotto 3 tender (MiC PNRR), part of an RTI with Civita Mostre, deadline 30 June 2026.\n\nI'm not a PM who delegates the tech, nor a dev who ignores the business. I'm one of the few who can design a system, build it, manage the IT complexity and then sell it. Italian native; I work with international teams in English.",
    },
    avatarReal: "/images/me.jpg",
    avatarAnon: "/images/miladi.png",
  },

  social: {
    email: "hello@andrea0x.me",
    telegram: "https://t.me/Andrea0x_eth",
    linkedin: "https://it.linkedin.com/in/andrea-ritondale",
    twitter: "https://x.com/andrea0x_eth",
    github: "https://github.com/Andrea0xeth?tab=repositories",
    discord: "andrea0x.eth",
    mirror: "https://mirror.xyz/andrea0x.eth",
    calendly: "https://calendly.com/andrea0x_eth",
  },

  taglines: {
    primary: {
      it: "Principal Engineer · IT Architect · AI Builder · Imprenditore Tecnico Ibrido",
      en: "Principal Engineer · IT Architect · AI Builder · Hybrid Technical Founder",
    },
    typewriter: {
      it: [
        "Principal Engineer & IT Architect",
        "AI Builder — MCP, agent loop, code-level guardrails",
        "Founding Product Engineer @ Mandate.Finance",
        "Solo CTO @ Haelias — 5.5M+ documenti in produzione",
        "Lead tecnico-funzionale ArtCertify — MiC PNRR Lotto 3",
        "Cloud ops senza DevOps dedicato — GCP + DigitalOcean",
        "Generalista by design, specialista dove serve",
      ],
      en: [
        "Principal Engineer & IT Architect",
        "AI Builder — MCP, agent loops, code-level guardrails",
        "Founding Product Engineer @ Mandate.Finance",
        "Solo CTO @ Haelias — 5.5M+ docs in production",
        "Technical-functional lead — ArtCertify · MiC PNRR Lotto 3",
        "Cloud ops without dedicated DevOps — GCP + DigitalOcean",
        "Generalist by design, specialist where it matters",
      ],
    },
  },

  // -------------------------------------------------------------------------
  // 6 pillars — sez. 6.1-6.11
  // -------------------------------------------------------------------------
  pillars: [
    {
      id: "traditional-dev",
      title: {
        it: "Traditional Software Engineering",
        en: "Traditional Software Engineering",
      },
      summary: {
        it: "Full-stack senior+ con production ownership: scrivo specifiche, architetto, deploy e mantengo.",
        en: "Senior+ full-stack with production ownership: I write specs, design the architecture, deploy and maintain.",
      },
      metrics: [
        {
          label: {
            it: "Documenti MongoDB in produzione",
            en: "MongoDB documents in production",
          },
          value: "5.5M+",
        },
        {
          label: {
            it: "Endpoint Express custom (singolo `main.ts`)",
            en: "Custom Express endpoints (single `main.ts`)",
          },
          value: "143",
        },
      ],
      tags: [
        "TypeScript",
        "React 19",
        "Next.js 15",
        "Node.js",
        "Express",
        "Rust + Tokio",
        "MongoDB",
        "Postgres",
        "Drizzle",
        "Tailwind",
      ],
    },
    {
      id: "ai-eng",
      title: {
        it: "AI Engineering",
        en: "AI Engineering",
      },
      summary: {
        it: "Costruisco sistemi AI in produzione: agent loop con tool whitelist, MCP gateway multi-tenant, signing-service custodial e guardrail a livello di codice.",
        en: "I build production AI systems: agent loops with per-task tool whitelists, multi-tenant MCP gateways, custodial signing-services and code-level guardrails.",
      },
      metrics: [
        {
          label: {
            it: "Workspace su Mandate in 5 settimane",
            en: "Workspaces shipped on Mandate in 5 weeks",
          },
          value: "11",
        },
        {
          label: {
            it: "Job type × strategy template (Postgres-driven)",
            en: "Job types × strategy templates (Postgres-driven)",
          },
          value: "7 × 8",
        },
      ],
      tags: [
        "Single-loop agent",
        "Per-task tool whitelist",
        "MCP gateway",
        "MCP-over-stdio",
        "LLM integration",
        "Code-level SELL GUARD",
        "DeepInfra",
        "OpenRouter",
        "Anthropic (review)",
        "Prompt engineering",
        "Agent testing",
      ],
    },
    {
      id: "cloud-devops",
      title: {
        it: "Cloud & DevOps",
        en: "Cloud & DevOps",
      },
      summary: {
        it: "Gestisco infrastructure produttiva su GCP e DigitalOcean senza un team DevOps dedicato.",
        en: "I run production infrastructure on GCP and DigitalOcean without a dedicated DevOps team.",
      },
      metrics: [
        {
          label: {
            it: "Riduzione footprint indici MongoDB",
            en: "MongoDB index footprint reduction",
          },
          value: "70% (1.69 GB -> 369 MB)",
        },
        {
          label: {
            it: "Risparmio annuale evitando upgrade cluster",
            en: "Annual savings by avoiding cluster upgrade",
          },
          value: "€1,260/yr",
        },
      ],
      tags: [
        "GCP",
        "Cloud Run",
        "Cloud SQL",
        "Secret Manager",
        "DigitalOcean",
        "App Platform",
        "Vercel",
        "Netlify",
        "Docker",
        "Multi-environment",
      ],
    },
    {
      id: "web3",
      title: {
        it: "Web3 / Blockchain",
        en: "Web3 / Blockchain",
      },
      summary: {
        it: "Integrazione smart contract multi-chain (EVM + Algorand), vault ERC-4626, soulbound token (ARC-19 + ERC-5192), account abstraction, gasless UX.",
        en: "Multi-chain smart-contract integration (EVM + Algorand), ERC-4626 vaults, soulbound tokens (ARC-19 + ERC-5192), account abstraction, gasless UX.",
      },
      metrics: [
        {
          label: {
            it: "Chain integrate",
            en: "Chains integrated",
          },
          value: "Ethereum · Base · Arbitrum · Algorand",
        },
        {
          label: {
            it: "Protocolli integrati",
            en: "Protocols integrated",
          },
          value: "AAVE · Morpho · Balancer · Factor SDK",
        },
      ],
      tags: [
        "ERC-4626",
        "EIP-7702",
        "ERC-7821",
        "ERC-721",
        "ERC-5192",
        "Algorand",
        "ARC-3 / ARC-19",
        "AlgoKit",
        "Privy",
        "Wagmi / viem",
        "Foundry",
        "LiFi",
        "Solidity",
        "x402",
        "MCP",
        "Account abstraction",
      ],
    },
    {
      id: "it-mgmt",
      title: {
        it: "IT Management & Digitalizzazione",
        en: "IT Management & Digitalization",
      },
      summary: {
        it: "Orchestro sistemi IT complessi e trasformo workflow tradizionali in flussi digitali end-to-end.",
        en: "I orchestrate complex IT systems and turn traditional workflows into end-to-end digital flows.",
      },
      metrics: [
        {
          label: {
            it: "Progetti production-grade in parallelo",
            en: "Production-grade projects in parallel",
          },
          value: "5+",
        },
        {
          label: {
            it: "Workflow pharma digitalizzati su Haelias",
            en: "Pharma workflows digitalized on Haelias",
          },
          value: "7+",
        },
      ],
      tags: [
        "Microservices",
        "Vendor selection",
        "Multi-team coordination",
        "Process digitalization",
        "Decision logs",
        "Runbooks",
        "Stakeholder management",
      ],
    },
    {
      id: "business",
      title: {
        it: "Business Strategy",
        en: "Business Strategy",
      },
      summary: {
        it: "Revenue modeling, GTM, fundraising e business plan: tech con attitudine imprenditoriale.",
        en: "Revenue modeling, GTM, fundraising and business plans — tech with a founder mindset.",
      },
      metrics: [
        {
          label: {
            it: "Artefatti finanziari",
            en: "Financial artifacts",
          },
          value: "Revenue model + cap table",
        },
        {
          label: {
            it: "Industry presence",
            en: "Industry presence",
          },
          value: "Gnosis Pay",
        },
      ],
      tags: [
        "Excel modeling",
        "SWOT",
        "Cap table",
        "Pitch deck",
        "GTM strategy",
        "Pricing",
        "Fundraising",
      ],
    },
  ],

  // -------------------------------------------------------------------------
  // 4 case studies — sez. 4, 5, 10, 12
  // -------------------------------------------------------------------------
  caseStudies: [
    {
      slug: "haelias",
      title: "Haelias",
      domain: {
        it: "B2B SaaS · Procurement Pharma",
        en: "B2B SaaS · Pharma Procurement",
      },
      role: {
        it: "Solo CTO / Principal Engineer (con contributor support su UI)",
        en: "Solo CTO / Principal Engineer (with contributor support on UI)",
      },
      period: "2025 – present (architettura attuale; legacy Crifarma/Healias 2022 – 2024)",
      status: "production",
      clients: ["Montefarmaco", "Logista SPA"],
      problem: {
        it: "Le farmacie italiane gestiscono il procurement con telefonate, email e fax verso più grossisti, contrattando i prezzi a voce e riconciliando manualmente bolle e fatture. Servono catalog real-time multi-fornitore, ODA digitali, audit trail compliance-grade e UX safety per ordini high-value.",
        en: "Italian pharmacies handle procurement through phone calls, emails and faxes to multiple wholesalers, negotiate prices verbally and reconcile invoices by hand. They need a real-time multi-supplier catalog, digital purchase orders, compliance-grade audit trails and safety UX for high-value orders.",
      },
      architecture: {
        it: "Stack production end-to-end su 5 repo git indipendenti (core / ui / sync-worker / landingpage / haelias_docs): backend Express + TypeScript con 143 endpoint montati da un singolo `main.ts`, SPA React 19 + Tailwind 3 + MUI 7 con 136 componenti in Atomic Design e 5 React Context (no Redux), landing in Vite, worker Rust + Tokio per l'ingestion dal catalogo SOAP di Farmadati su MongoDB Managed condiviso. Il data layer è composto da 16 schemi Mongoose in modello multi-tenant (5 ruoli RBAC: admin / manager / buyer / supplier / referral_partner), un search engine custom su indici parziali pesati e una strategia indici a due livelli che confina gli indici di Discover/ricerca ai ~14k prodotti in stock invece dei 5,5M totali. Il dominio ODA è una state machine a 6 stati con sub-ordini cascading (`createSubOda`) e una state machine counter-offer per linea a 6 stati (`requested → admin_absorbed | sent_to_supplier → supplier_responded → resolved`), più un layer `stripSupplierDataForBuyer` invocato su ogni read lato buyer. Il customer support è un bridge Discord ↔ SSE bidirezionale: messaggi pollati via REST da Discord vengono pushati nella UI in tempo reale. 493 test case backend (Jest + supertest), 68% statement coverage. La UI principale è CRA + craco (non Next.js); Vite alimenta solo la landingpage.",
        en: "End-to-end production stack across 5 independent git repos (core / ui / sync-worker / landingpage / haelias_docs): an Express + TypeScript backend exposing 143 endpoints mounted from a single `main.ts`, a React 19 + Tailwind 3 + MUI 7 SPA with 136 components organised in Atomic Design and 5 React Contexts (no Redux), a Vite landing page, and a Rust + Tokio sync worker that ingests Farmadati's SOAP catalog into the shared Managed MongoDB. The data layer is 16 Mongoose schemas with a multi-tenant entity model (5 RBAC roles: admin / manager / buyer / supplier / referral_partner), a custom search engine over partial weighted text indexes, and a two-tier index strategy that confines Discover/search indexes to the ~14k in-stock products instead of the full 5.5M-document catalog. The ODA domain is a 6-state order machine with cascading sub-orders (`createSubOda`), a 6-state per-line counter-offer state machine (`requested → admin_absorbed | sent_to_supplier → supplier_responded → resolved`), and a `stripSupplierDataForBuyer` sanitiser called on every buyer-facing order read. Customer support is a bidirectional Discord ↔ SSE bridge: REST-polled Discord messages stream into the UI in real time. 493 backend test cases (Jest + supertest), 68% statement coverage. The main UI is CRA + craco (not Next.js); Vite powers the landing page only.",
      },
      decisions: [
        {
          title: {
            it: "Cluster upgrade vs ottimizzazione indici",
            en: "Cluster upgrade vs index optimization",
          },
          body: {
            it: "Diagnosi via WiredTiger cache-pressure analysis: dei 5,5M documenti prodotti, solo ~14k portano supply attiva. Indici sostituiti con indici parziali filtrati su `{hasSupply: true, status: \"active\"}` (name, producer, category) più un indice testuale partial pesato multi-campo (name:10, sku:8, ean:8, producer:5, category:3, description:1). Risultato: ~99% di riduzione del footprint in cache sui search path, 70% di riduzione on-disk live (1.69 GB → 369 MB), cluster $15/mese mantenuto, upgrade da €1.260/anno evitato.",
            en: "Diagnosed via WiredTiger cache-pressure analysis: out of 5.5M product docs, only ~14k carry active supply at any time. Replaced full indexes with partial indexes filtered on `{hasSupply: true, status: \"active\"}` — name, producer, category, plus a partial weighted multi-field text index (name:10, sku:8, ean:8, producer:5, category:3, description:1). Result: ~99% reduction in the in-cache search-index footprint, 70% on-disk index reduction live (1.69 GB → 369 MB), $15/mo cluster kept, €1,260/year upgrade avoided.",
          },
        },
        {
          title: {
            it: "Worker Farmadati in Rust + Tokio",
            en: "Rust + Tokio Farmadati sync worker",
          },
          body: {
            it: "Sync continuo SOAP-to-Mongo con concorrenza per tabella e per pagina (`FARMADATI_PAGE_CONCURRENCY`) e bulk write. Lock + run-history collections (`farmadati_sync_states`, `farmadati_sync_runs`) e comando `resume` heartbeat-based per crash recovery. Modalità CLI: `delta` / `full` / `auto` / `resume` / `snapshot` / `reset-lock`. Rust con `$set`-only è intenzionale: il flag `hasSupply` denormalizzato dal backend sopravvive a ogni upsert Farmadati perché il worker tocca solo i propri campi.",
            en: "Continuous SOAP-to-Mongo sync with concurrent table downloads + per-table page-level concurrency (`FARMADATI_PAGE_CONCURRENCY`) and bulk writes. Lock + run-history collections (`farmadati_sync_states`, `farmadati_sync_runs`) plus a heartbeat-based `resume` command for crash recovery. CLI modes: `delta` / `full` / `auto` / `resume` / `snapshot` / `reset-lock`. Rust `$set`-only is intentional: the backend's `hasSupply` denormalisation flag survives every Farmadati upsert because the worker only sets its own fields.",
          },
        },
        {
          title: {
            it: "Privacy-by-design tra supplier e buyer",
            en: "Privacy-by-design between supplier and buyer",
          },
          body: {
            it: "`stripSupplierDataForBuyer` (`core/routes/orders.ts:182`) è il sanitiser unico chiamato su ogni read lato buyer: rimuove `warehouseAssignments`, droppa `warehouse`/`entityId` dai breakdown di linea, e gating della visibilità `priceNegotiation` in base allo status dell'ordine. La state machine counter-offer ha 6 stati + 3 risoluzioni (`buyer_price_accepted` / `supplier_price_accepted` / `negotiation_failed`) con `originalNetPrice` e `absorbedNetPrice` rigorosamente separati.",
            en: "`stripSupplierDataForBuyer` (`core/routes/orders.ts:182`) is the single sanitiser called on every buyer-facing order read: removes `warehouseAssignments`, drops `warehouse`/`entityId` from line breakdowns, and gates `priceNegotiation` visibility on order status. The counter-offer state machine has 6 states + 3 resolutions (`buyer_price_accepted` / `supplier_price_accepted` / `negotiation_failed`) with `originalNetPrice` and `absorbedNetPrice` strictly separated.",
          },
        },
        {
          title: {
            it: "Modal warning per ordini high-value",
            en: "Modal warnings for high-value orders",
          },
          body: {
            it: "Hard block scartato in favore di un warning configurabile per ordini €250k–€1M+ — sicurezza senza frustrare i buyer enterprise.",
            en: "Picked a configurable warning over a hard block for €250k–€1M+ orders — safety without frustrating enterprise buyers.",
          },
        },
        {
          title: {
            it: "Sub-ODA cascading per fulfilment parziale",
            en: "Sub-ODA cascading for partial fulfilment",
          },
          body: {
            it: "Quando un magazzino fulfilla solo parzialmente una linea, l'admin emette un sub-ODA (`createSubOda`, `routes/orders.ts:6350`) collegato via `parent.subOrderIds[]` e `subOrderId: \"ODA-SUB-...\"`. Il buyer vede un singolo ODA; il flusso warehouse riceve un nuovo ODA per ogni round di fulfilment. Coperto dai test in `tests/orders.test.ts:3570-3645`.",
            en: "When a warehouse partially fulfils a line, admin issues a sub-ODA (`createSubOda`, `routes/orders.ts:6350`) linked by `parent.subOrderIds[]` and `subOrderId: \"ODA-SUB-...\"`. The buyer keeps a single ODA in their view; the warehouse-side picking flow gets one fresh ODA per fulfilment round. Tested at `tests/orders.test.ts:3570-3645`.",
          },
        },
        {
          title: {
            it: "Bridge customer support Discord ↔ SSE",
            en: "Discord ↔ SSE customer support bridge",
          },
          body: {
            it: "Customer support real-time senza Intercom: REST-polling di un canale Discord ogni 10s (`libs/support-discord.ts`), persistenza in `support-conversations` + `support-messages`, push verso UI via Server-Sent Events (`libs/support-stream.ts`). Gestisce 429-retry, filtering del bot user e subscription per conversazione.",
            en: "Real-time customer support without paying for Intercom: REST-polls a Discord channel every 10s (`libs/support-discord.ts`), persists messages to `support-conversations` + `support-messages`, then pushes them into the UI via Server-Sent Events (`libs/support-stream.ts`). Handles 429-retry, bot user filtering, and conversation-scoped subscription.",
          },
        },
        {
          title: {
            it: "bulkWrite singolo per CSV da 50k righe",
            en: "Single bulkWrite for 50k-row CSVs",
          },
          body: {
            it: "Gli upload CSV (`csv-upload.ts`) e la maintenance del flag `hasSupply` (`hasSupplyMaintenance.ts`) emettono un singolo MongoDB bulkWrite per upload indipendentemente dalla size — anche un CSV da 50k righe diventa una sola operazione, con progress streamato in UI tramite l'utility upload-progress.",
            en: "CSV uploads (`csv-upload.ts`) and supply-flag maintenance (`hasSupplyMaintenance.ts`) issue a single MongoDB bulkWrite per upload regardless of size — even a 50k-row CSV is one operation, with progress streamed to the UI via the upload-progress utility.",
          },
        },
      ],
      results: [
        {
          label: {
            it: "Documenti MongoDB live",
            en: "Live MongoDB documents",
          },
          value: "5.5M+",
        },
        {
          label: {
            it: "Prodotti in stock cross-supplier",
            en: "In-stock cross-supplier products",
          },
          value: "~14k",
        },
        {
          label: {
            it: "Endpoint Express (singolo `main.ts`)",
            en: "Express endpoints (single `main.ts`)",
          },
          value: "143",
        },
        {
          label: {
            it: "Test case backend (Jest + supertest)",
            en: "Backend test cases (Jest + supertest)",
          },
          value: "493",
        },
        {
          label: {
            it: "Statement coverage backend",
            en: "Backend statement coverage",
          },
          value: "68%",
        },
        {
          label: {
            it: "Schemi Mongoose",
            en: "Mongoose schemas",
          },
          value: "16",
        },
        {
          label: {
            it: "Componenti React (Atomic Design)",
            en: "React components (Atomic Design)",
          },
          value: "136",
        },
        {
          label: {
            it: "Repo git indipendenti",
            en: "Independent git repos",
          },
          value: "5",
        },
        {
          label: {
            it: "Riduzione size indici on-disk (live)",
            en: "On-disk index footprint reduction (live)",
          },
          value: "70% (1.69 GB → 369 MB)",
        },
        {
          label: {
            it: "Riduzione indici in cache (search path)",
            en: "In-cache search-index reduction",
          },
          value: "~99%",
        },
        {
          label: {
            it: "Risparmio annuale vs upgrade cluster",
            en: "Annual savings vs cluster upgrade",
          },
          value: "€1,260/yr",
        },
        {
          label: {
            it: "Benchmark CSV ingest",
            en: "CSV ingest benchmark",
          },
          value: "50k rows = 1 bulkWrite",
        },
      ],
      techStack: [
        // Backend
        "Node.js",
        "Express 4",
        "TypeScript",
        "MongoDB",
        "Mongoose",
        "MongoDB driver (native)",
        "Helmet",
        "Web Push",
        "Resend",
        "@react-email/components",
        "PDFKit",
        "ExcelJS",
        "Turf.js",
        // Frontend
        "React 19",
        "React Router v7",
        "Tailwind 3",
        "MUI 7",
        "MUI X DataGrid",
        "framer-motion",
        "Chart.js",
        "Recharts",
        "react-window",
        "CRA + craco",
        "Vite (landingpage only)",
        // Worker
        "Rust 2021",
        "Tokio",
        "reqwest",
        "mongodb (Rust driver)",
        "rustls",
        // Tooling
        "Jest",
        "supertest",
        // Infra
        "DigitalOcean App Platform",
        "Managed MongoDB",
        "Vercel",
        // Integrations
        "Discord Bot API",
        "Server-Sent Events",
        "Farmadati SOAP",
      ],
      pillarsTouched: ["traditional-dev", "cloud-devops", "it-mgmt"],
      image: "/images/logos/montefarmaco.png",
      featured: true,
    },
    {
      slug: "mandate",
      link: "https://mandate.finance",
      title: "Mandate.Finance",
      domain: {
        it: "DeFi + AI agent layer",
        en: "DeFi + AI agent layer",
      },
      role: {
        it: "Founding Product Engineer & Technical Co-founder",
        en: "Founding Product Engineer & Technical Co-founder",
      },
      period: "Mar 2026 – present",
      status: "pre-launch",
      problem: {
        it: "Costruire una piattaforma DeFi dove agent AI autonomi gestiscono fondi reali on-chain, mantenendo self-custody dell'utente, gasless UX e oversight in tempo reale. Servono guardrail forti perché l'irreversibilità on-chain non perdona.",
        en: "Build a DeFi platform where autonomous AI agents manage real on-chain funds while preserving user self-custody, gasless UX and real-time oversight. Strong guardrails are mandatory — on-chain irreversibility is unforgiving.",
      },
      architecture: {
        it: "Piattaforma multi-repo distribuita su 11 workspace — 6 servizi runtime su GCP Cloud Run (`backend`, `agent-executor`, `signing-service`, `mcp-gateway`, `jobs`, `stats-api`), una suite di smart contract Foundry (ERC-7821 `KairosBatchExecutor` + `KairosBillingTreasury` UUPS, deployati allo stesso indirizzo su Base, Arbitrum e Ethereum mainnet via CREATE2), un Postgres 16 privato con 59 migration SQL versionate, due frontend Next.js 15 (`ui` e `landing`), un test harness end-to-end basato su SSE e il sito pubblico di docs. Agent layer: un singolo LLM loop in `agent-executor` parametrizzato per 7 job type (deploy / scan / trade / rebalance / report / exit / chat) e ~8 strategy template conservati su Postgres — tool whitelist per task, SELL GUARD a livello di codice e per-vault prompt override su tre tier. L'MCP gateway (Python + FastAPI) intermedia tutte le letture DeFi via JSON-RPC su stdio con request-id correlation per evitare cross-tenant pollution; il signing-service è l'unico custode delle EOA per-agent (keystore AES-256-GCM in Postgres) e l'unica via per le scritture on-chain — ogni scrittura passa da una transazione EIP-7702 Type-4 sponsorata da un singolo hot wallet, con counter atomico per i nonce in Redis così che lo scale-out multi-instance di Cloud Run sia sicuro.",
        en: "Multi-repo platform across 11 workspaces — 6 runtime services on GCP Cloud Run (`backend`, `agent-executor`, `signing-service`, `mcp-gateway`, `jobs`, `stats-api`), a Foundry smart-contract suite (ERC-7821 `KairosBatchExecutor` + UUPS `KairosBillingTreasury` deployed at the same address on Base, Arbitrum and Ethereum mainnet via CREATE2), a private Postgres 16 with 59 versioned SQL migrations, two Next.js 15 frontends (`ui` and `landing`), an SSE-based agent test harness, and a public docs site. Agent layer: a single LLM loop in `agent-executor` parameterised by 7 job types (deploy / scan / trade / rebalance / report / exit / chat) and ~8 strategy templates stored in Postgres — per-task tool whitelists, code-level SELL GUARDs and per-vault prompt overrides at three resolution tiers. The MCP gateway (Python + FastAPI) brokers all read-only DeFi data via JSON-RPC over stdio with request-id correlation to prevent cross-tenant pollution; the signing-service is the sole custodian of per-agent EOAs (AES-256-GCM keystore in Postgres) and the only path to chain writes — every write rides on EIP-7702 Type-4 transactions sponsored by a single hot wallet, with a Redis-backed atomic nonce counter so multi-instance Cloud Run scale-out is safe.",
      },
      decisions: [
        {
          title: {
            it: "Single agent loop + 7 job type + 8 strategy template",
            en: "Single agent loop + 7 job types + 8 strategy templates",
          },
          body: {
            it: "Un singolo LLM loop (`runAgentLoop` in `agent-executor/src/llm/loop.ts`), una sola fonte di verità per i prompt (tabella `strategy_templates` in Postgres), tool whitelist per job type (deploy / scan / trade / rebalance / report / exit / chat) e per-vault prompt override a tre tier. Aggiungere una nuova strategia è una riga SQL, non un servizio. Sostituisce il framing 'multi-agent (evaluator/researcher/manager/executor)': la realtà è più interessante — parametrizzazione runtime, non topologia di ruoli.",
            en: "One LLM loop (`runAgentLoop` in `agent-executor/src/llm/loop.ts`), one source of truth for prompts (`strategy_templates` table in Postgres), per-job-type tool whitelists (deploy / scan / trade / rebalance / report / exit / chat) and three-tier per-vault prompt overrides. Adding a new strategy is a SQL row, not a service. This replaces the 'multi-agent (evaluator/researcher/manager/executor)' framing — the real story is runtime parameterisation, not a role topology.",
          },
        },
        {
          title: {
            it: "Tre layer di difesa contro le hallucination dello step deploy",
            en: "Three layers of defense against deploy-step hallucinations",
          },
          body: {
            it: "Quando i modelli più piccoli hallucinavano 'Deployment Complete' senza chiamare `register_vault`, la piattaforma deployava un secondo vault on-chain e bloccava i fondi. Fix a tre layer: (1) auto-register dentro la branch `deploy_vault` dal topic `VaultCreated` parsato dalla receipt del signing-service, (2) `registerVaultInDb` idempotente che short-circuita su duplicate-active, (3) post-loop validator che sovrascrive la decision dichiarata dall'LLM in `'error'` quando `getVaultStatus(vaultId)` mostra pending/null.",
            en: "When small models hallucinated 'Deployment Complete' without calling `register_vault`, the platform deployed second on-chain vaults and stranded funds. Three layers: (1) receipt-parsed auto-register inside the `deploy_vault` branch using the signing-service's `VaultCreated` topic, (2) idempotent `registerVaultInDb` that short-circuits on duplicate-active, (3) post-loop validator that overrides the LLM's claimed decision to `'error'` when `getVaultStatus(vaultId)` shows pending/null.",
          },
        },
        {
          title: {
            it: "SELL GUARD a livello di codice non bypassabile dall'LLM",
            en: "Code-level SELL GUARD the LLM cannot bypass",
          },
          body: {
            it: "Sui vault trader (`category.endsWith('-trader')`), quando `factor_swap_openocean` venderebbe il token in trading per il denominator, l'executor chiama `simulate_exit` server-side, calcola il cost basis dai `vault_trades` e blocca lo swap se il PnL supera la soglia di stop-loss. L'LLM non può rilanciare o discutere — vede solo `SELL_BLOCKED`. Origine: deepseek aveva bypassato tre volte il prompt-level mandate → enforcement spostato nel codice.",
            en: "On trader vaults (`category.endsWith('-trader')`), when `factor_swap_openocean` would sell the trading token for the denominator the executor calls `simulate_exit` server-side, computes cost basis from `vault_trades`, and blocks the swap if PnL exceeds the stop-loss threshold. The LLM cannot retry or argue — it only sees `SELL_BLOCKED`. Origin: deepseek bypassed the prompt-level mandate three times → enforcement moved into code.",
          },
        },
        {
          title: {
            it: "Custodia EOA per-agent + sponsor paga il gas",
            en: "Per-agent EOA custody + sponsor pays gas",
          },
          body: {
            it: "Il backend non vede mai chiavi in chiaro: ogni EOA dell'agent è generata e cifrata AES-256-GCM dentro `signing-service/src/keystore.ts`, persistita in `signing_keystores`, decifrata in una cache TTL di 5 minuti. Gli utenti firmano authorization EIP-7702 che delegano a un singolo batch executor allo stesso indirizzo CREATE2 su tre chain; l'hot wallet della piattaforma paga il gas. Risultato: UX gasless self-custody con zero relayer wallet trust nel mezzo.",
            en: "Backend never sees plaintext keys: each agent EOA is generated and AES-256-GCM-encrypted inside `signing-service/src/keystore.ts`, persisted in `signing_keystores`, decrypted into a 5-min TTL cache. Users sign EIP-7702 authorizations delegating to a single batch executor at the same CREATE2 address on three chains; the platform's hot wallet pays gas. Result: gasless self-custody UX with zero trusted wallet relayers in between.",
          },
        },
        {
          title: {
            it: "Sponsor nonce con Redis EVAL Lua atomico",
            en: "Atomic sponsor nonce via Redis EVAL Lua",
          },
          body: {
            it: "Il `SponsorMutex` in-process serializza solo una replica; lo scaling multi-instance di Cloud Run può andare in race su `getTransactionCount(sponsor, 'pending')`. Fix: counter atomico Redis-backed `sponsor-nonce:{chainId}` driven da uno script `EVAL` Lua (`GET → SET(n+1) → return n` atomico), con cold-start path che legge il nonce dalla chain solo se la key non esiste. Fallback su `Map` in-memory se Redis non è disponibile, con warn log per ops.",
            en: "The in-process `SponsorMutex` only serializes a single replica; multi-instance Cloud Run scale-out could race on `getTransactionCount(sponsor, 'pending')`. Fix: Redis-backed atomic counter `sponsor-nonce:{chainId}` driven by an `EVAL` Lua script (`GET → SET(n+1) → return n` atomically), with cold-start path that reads chain nonce only when the key is absent. Fallback to in-memory `Map` when Redis is unavailable, with warn log for ops.",
          },
        },
        {
          title: {
            it: "MCP-over-stdio multi-tenant con request-id correlation",
            en: "Multi-tenant MCP-over-stdio with request-id correlation",
          },
          body: {
            it: "JSON-RPC naive su singolo pipe stdin/stdout non è sicuro per un gateway multi-tenant: un singolo `console.log` di una qualsiasi dep transitiva polluiva lo stream e produceva data scrambling cross-vault (osservato in produzione il 2026-04-15 — agent A vedeva il `factor_vault_analytics` di agent B). Il gateway loopa su `stdout.readline()` e scarta ogni frame il cui `id` non matcha la richiesta in flight — unica difesa durevole per questa classe di bug multi-tenant.",
            en: "Naive JSON-RPC over a single stdin/stdout pipe is unsafe for a multi-tenant gateway: a single `console.log` from any transitive dep polluted the response stream and produced cross-vault data scrambling (observed in production 2026-04-15 — agent A saw agent B's `factor_vault_analytics` result). The gateway loops on `stdout.readline()` discarding any frame whose `id` doesn't match the in-flight request — the only durable defence against this class of multi-tenant bug.",
          },
        },
        {
          title: {
            it: "Leverage watchdog in-process (HF<1.2 emergency exit)",
            en: "In-process leverage watchdog (HF<1.2 emergency exit)",
          },
          body: {
            it: "`agent-executor/src/leverage-watchdog.ts`: cron `setInterval` da 60s avviato post-`app.listen`, fermato su SIGTERM. Ogni tick: (1) carica i vault con `mode: leverage`, (2) legge il `min(healthFactor)` su Aave + Morpho via `factor_vault_analytics`, (3) su `HF < config.minHealthFactor` inserisce una row `custom_jobs` con il prompt di exit-leverage schedulato `* * * * *`, (4) sotto la soglia hard 1.2 emette un prompt EMERGENCY-prefixato e `log.error`. Cloud Run a singola replica + guard `inFlight` in-process previene tick concorrenti.",
            en: "`agent-executor/src/leverage-watchdog.ts`: 60s `setInterval` started post-`app.listen`, stopped on SIGTERM. Each tick: (1) load vaults with `mode: leverage`, (2) read `min(healthFactor)` across Aave + Morpho via `factor_vault_analytics`, (3) on `HF < config.minHealthFactor` insert a `custom_jobs` row with the exit-leverage prompt scheduled `* * * * *`, (4) below the hard 1.2 floor emit an EMERGENCY-prefixed prompt and `log.error`. Single-replica Cloud Run + in-process `inFlight` guard prevents concurrent ticks.",
          },
        },
        {
          title: {
            it: "UX gasless con self-custody",
            en: "Gasless UX with self-custody",
          },
          body: {
            it: "Privy + EIP-7702 Type-4 sponsored transactions + ERC-7821 batch executor: l'utente non vede mai una private key e non paga gas, mantenendo self-custody. Cross-chain via LiFi percepito come operazione singola.",
            en: "Privy + EIP-7702 Type-4 sponsored transactions + ERC-7821 batch executor: users never touch a private key and never pay gas, while keeping self-custody. Cross-chain via LiFi feels like a single operation.",
          },
        },
        {
          title: {
            it: "Multi-provider LLM cost-driven",
            en: "Cost-driven multi-provider LLM",
          },
          body: {
            it: "Astrazione multi-provider in produzione (DeepInfra come default, OpenRouter come backup). Anthropic resta come strumento di review/research, non nel router LLM in produzione. La migrazione da Ollama Cloud a DeepInfra ha tagliato ~50% del costo. Pattern cost-driven, non capability-driven.",
            en: "Multi-provider abstraction in production (DeepInfra as default, OpenRouter as backup). Anthropic stays for review/research, not in the production LLM router. Migration from Ollama Cloud to DeepInfra cut cost ~50%. Cost-driven pattern, not capability-driven.",
          },
        },
      ],
      results: [
        {
          label: {
            it: "Componenti production-deployed",
            en: "Components production-deployed",
          },
          value: "11",
        },
        {
          label: {
            it: "Settimane per shippare",
            en: "Weeks to ship",
          },
          value: "5",
        },
        {
          label: {
            it: "Commit complessivi",
            en: "Total commits",
          },
          value: "1,300+",
        },
        {
          label: {
            it: "Linee di codice",
            en: "Lines of code",
          },
          value: "~140k",
        },
        {
          label: {
            it: "UI authorship",
            en: "UI authorship",
          },
          value: "94%",
        },
        {
          label: {
            it: "Test smart contract",
            en: "Smart-contract tests",
          },
          value: "127 (15 suite, 7 invarianti × 256 run)",
        },
        {
          label: {
            it: "Migration SQL versionate",
            en: "Versioned SQL migrations",
          },
          value: "59",
        },
        {
          label: {
            it: "Sistema notifiche",
            en: "Notification system",
          },
          value: "72 eventi · 8 domini · 3 tier",
        },
        {
          label: {
            it: "Chain (stesso indirizzo via CREATE2)",
            en: "Chains (same address via CREATE2)",
          },
          value: "Ethereum + Base + Arbitrum",
        },
      ],
      techStack: [
        "Next.js 15",
        "React 19",
        "TypeScript",
        "Tailwind",
        "Privy",
        "Wagmi / viem",
        "Foundry / Solidity 0.8.28",
        "EIP-7702 / ERC-7821",
        "ERC-7821 batch executor",
        "UUPS billing treasury",
        "Factor StudioPro vault factory",
        "Express",
        "Drizzle ORM",
        "Postgres 16",
        "Python 3.12 / FastAPI",
        "MCP (JSON-RPC over stdio)",
        "GCP Cloud Run",
        "Cloud SQL (private VPC)",
        "Memorystore Redis",
        "Secret Manager",
        "DeepInfra",
        "OpenRouter",
        "LiFi (cross-chain)",
        "Resend + React Email",
        "Stripe",
        "Pino",
        "Vitest",
        "Three.js / R3F",
        "Custom stats service (Go + GCS)",
      ],
      pillarsTouched: ["traditional-dev", "ai-eng", "cloud-devops", "web3", "it-mgmt", "business"],
      image: "/images/previews/mandate.jpg",
      featured: true,
    },
    {
      slug: "dpass",
      title: "Bando Ecomic Lotto 3 — MiC PNRR (DPaaS / DPass)",
      domain: {
        it: "Settore pubblico italiano · Beni culturali · Blockchain data products",
        en: "Italian public sector · Cultural heritage · Blockchain data products",
      },
      role: {
        it: "Lead tecnico-funzionale ArtCertify + blockchain Data Products (RTI Activa Digital + Civita Mostre)",
        en: "Technical-functional lead on ArtCertify + blockchain Data Products (RTI Activa Digital + Civita Mostre)",
      },
      period: "2025 – 30 giugno 2026 (deadline operativa)",
      status: "active",
      clients: ["MiC – Digital Library / ICDP", "Invitalia", "PNRR / NextGenerationEU"],
      problem: {
        it: "Il MiC italiano (Digital Library / Istituto Centrale per la Digitalizzazione del Patrimonio Culturale) ha emesso il Bando Ecomic Lotto 3 'Fruizione Avanzata' (Dialogo Competitivo, D.Lgs. 36/2023, finanziamento PNRR) per costruire un ecosistema digitale dei beni culturali. Servono Data Product blockchain integrati nella DPaaS (cloud privato MiC su OpenShift), ontologie semantiche compliant con ArCo / REICAT / Dublin Core, certificazioni soulbound non trasferibili, identità governativa SPID/IAM ECOMIC e una piattaforma applicativa pronta a sostenere 6 use case pilota su istituti culturali nazionali.",
        en: "The Italian Ministry of Culture (Digital Library / ICDP) issued the Ecomic Lotto 3 'Advanced Fruition' tender (Dialogo Competitivo, D.Lgs. 36/2023, NextGenerationEU/PNRR funding) to build a national cultural-heritage digital ecosystem. The bid requires blockchain Data Products integrated into DPaaS (the MiC's private OpenShift cloud), semantic ontologies compliant with ArCo / REICAT / Dublin Core, non-transferable soulbound certifications, SPID / IAM ECOMIC government identity and an application platform ready to power 6 pilot use cases across national cultural institutions.",
      },
      architecture: {
        it: "Architettura su tre livelli logici (per ALLEGATO 1.1 Parte II + Relazione Unica). Livello 1 — DP-Lab / DPaaS: 4 Data Product blockchain stateless lambda-style su cloud privato MiC (OpenShift + Dataiku + Dify + storage S3) — DP1 Catalogo Metadati (Elasticsearch OSS + Postgres + Protegé/Pellet, REICAT/Dublin Core/ArCo), DP2 Collegamento automatico Metadati ed Entità (Dify + LLaMA, NER + abstract + entity extraction multimodale), DP3 Certificazione asset+metadati via Blockchain+IPFS (chain agnostic: Algorand-first con fork EVM su Base), DP4 Collegamento Entità Linked Data (Neo4j + GraphDB, profilo CIDOC-CRM/ArCo). Livello 2 — Backend microservizi containerizzati (Docker/K8s), API-first OpenAPI/Swagger, IAM ECOMIC + JWT + RBAC + TLS 1.3. Livello 3 — Frontend applicativo: 3 piattaforme RTI (ArtCertify per certificazione SBT, Atlante Digitale per fruizione mobile-first, ARMedia per XR/AR/VR) consumate da 6 use case pilota (Masterpiece Box / Bronzi di Riace, Regina Viarum / Appia Antica, Risorse Culturali di Comunità / Oliveto Citra, Double Reality / Brescia, Villa dei Papiri / MANN, BasiliCULT / Potenza). Storage ibrido: MINIO/S3 per file (centralizzato, GDPR-bound), IPFS Pinata per metadata JSON (decentralizzato, immutable per CID, ARC-19 compatible). CI/CD: ArgoCD + GitLab. Codename interno: Terranova. Coordinamento RTI Activa Digital S.c.a.r.l. + Civita Mostre con partner ARMedia, GS&H/GSnet, Orfeo, Remidia, Cultural AI partner.",
        en: "Three logical layers (per ALLEGATO 1.1 Parte II + Relazione Unica). Layer 1 — DP-Lab / DPaaS: 4 stateless lambda-style blockchain Data Products on the MiC private cloud (OpenShift + Dataiku + Dify + S3 storage) — DP1 Metadata Catalog (Elasticsearch OSS + Postgres + Protegé/Pellet, REICAT/Dublin Core/ArCo), DP2 Auto-linking Metadata & Entities (Dify + LLaMA, multimodal NER + abstract + entity extraction), DP3 Asset+metadata certification via Blockchain+IPFS (chain-agnostic: Algorand-first with EVM fork on Base), DP4 Entity Linking via Linked Data (Neo4j + GraphDB, CIDOC-CRM/ArCo profile). Layer 2 — Containerised backend microservices (Docker/K8s), API-first OpenAPI/Swagger, IAM ECOMIC + JWT + RBAC + TLS 1.3. Layer 3 — Application frontend: 3 RTI platforms (ArtCertify for SBT certification, Atlante Digitale for mobile-first fruition, ARMedia for XR/AR/VR) consumed by 6 pilot use cases (Masterpiece Box / Bronzi di Riace, Regina Viarum / Appia Antica, Risorse Culturali di Comunità / Oliveto Citra, Double Reality / Brescia, Villa dei Papiri / MANN, BasiliCULT / Potenza). Hybrid storage: MINIO/S3 for files (centralised, GDPR-bound), IPFS Pinata for JSON metadata (decentralised, immutable per CID, ARC-19 compatible). CI/CD: ArgoCD + GitLab. Internal codename: Terranova. Coordinated within the RTI Activa Digital S.c.a.r.l. + Civita Mostre consortium with partners ARMedia, GS&H/GSnet, Orfeo, Remidia, Cultural AI partner.",
      },
      decisions: [
        {
          title: {
            it: "4 Data Product stateless, non un monolite",
            en: "4 stateless Data Products, not a monolith",
          },
          body: {
            it: "Scelti 4 Data Product lambda-style stateless (input → JSON output su S3 / I.PaC) invece di una piattaforma monolitica per allinearsi ai criteri di valutazione DPaaS e ai vincoli di delivery PNRR. Ogni DP è autonomamente versionabile e sostituibile.",
            en: "Picked 4 stateless lambda-style Data Products (input → JSON output on S3 / I.PaC) over a monolithic platform to align with DPaaS scoring criteria and PNRR delivery constraints. Each DP is independently versionable and replaceable.",
          },
        },
        {
          title: {
            it: "Algorand-first, EVM Base come fork (chain-agnostic)",
            en: "Algorand-first with Base EVM fork (chain-agnostic)",
          },
          body: {
            it: "DP3 progettato chain-agnostic. ASA fornisce semantica token senza rischio smart-contract, fee Algorand sono prevedibili e energy-friendly (DNSH compliant per Allegato 1.5); Base/EVM mantenuto come fork (`ArtCertify_EVM`) per flessibilità istituzionale.",
            en: "DP3 designed chain-agnostic. ASA gives token semantics without smart-contract risk, Algorand fees are predictable and energy-friendly (DNSH compliant per Allegato 1.5); Base/EVM kept as fork (`ArtCertify_EVM`) for institutional flexibility.",
          },
        },
        {
          title: {
            it: "SBT (soulbound) sopra NFT trasferibili",
            en: "SBT (soulbound) over transferable NFTs",
          },
          body: {
            it: "Le certificazioni di beni culturali devono essere prove non-trasferibili. ARC-19 (template URL IPFS mutabile) + ARC-3 (metadata) su Algorand; ERC-721 + ERC-5192 (Minimal Soulbound) con override `_update` su Base via contratto custom `ArtCertifySBT.sol`.",
            en: "Cultural-heritage certifications must be non-transferable proofs. ARC-19 (mutable IPFS template URL) + ARC-3 (metadata) on Algorand; ERC-721 + ERC-5192 (Minimal Soulbound) with `_update` override on Base via custom `ArtCertifySBT.sol` contract.",
          },
        },
        {
          title: {
            it: "Storage ibrido MINIO + IPFS",
            en: "Hybrid MINIO + IPFS storage",
          },
          body: {
            it: "MINIO per i file raw (centralizzato, S3-compatibile, GDPR-bounded), IPFS Pinata solo per i metadata JSON (decentralizzato, immutable per CID, ARC-19 compatibile). Bilancia compliance e immutabilità.",
            en: "MINIO for raw files (centralised, S3-compatible, GDPR-bounded), IPFS Pinata for JSON metadata only (decentralised, immutable per CID, ARC-19 compatible). Balances compliance with immutability.",
          },
        },
        {
          title: {
            it: "ArtCertify decoupled dai Data Product",
            en: "ArtCertify decoupled from Data Products",
          },
          body: {
            it: "ArtCertify shippato standalone come prima cosa, così che gli istituti culturali possano usarlo senza dipendere dalla disponibilità DP-Lab; binding incrementale ai DP nelle release successive. Mitigazione del rischio di delivery PNRR.",
            en: "Ship ArtCertify standalone first, so cultural institutions can use it without depending on DP-Lab availability, then bind DPs incrementally in later releases. Mitigates PNRR delivery risk.",
          },
        },
        {
          title: {
            it: "Identità governativa come prerequisito",
            en: "Government identity as a prerequisite",
          },
          body: {
            it: "SPID + IAM ECOMIC + JWT + RBAC + TLS 1.3 dal giorno uno: ogni Data Product e ogni applicazione si agganciano all'identità nazionale, evitando bypass tecnici inaccettabili per il settore pubblico.",
            en: "SPID + IAM ECOMIC + JWT + RBAC + TLS 1.3 from day one: every Data Product and every application hooks into national identity, avoiding technical bypasses unacceptable for the public sector.",
          },
        },
      ],
      results: [
        {
          label: {
            it: "Data Product blockchain progettati",
            en: "Blockchain Data Products designed",
          },
          value: "4",
        },
        {
          label: {
            it: "Use case pilota consumatori",
            en: "Consuming pilot use cases",
          },
          value: "6",
        },
        {
          label: {
            it: "Piattaforme applicative RTI",
            en: "RTI application platforms",
          },
          value: "3",
        },
        {
          label: {
            it: "Enti pubblici coinvolti",
            en: "Public-sector bodies engaged",
          },
          value: "MiC Digital Library + Invitalia",
        },
        {
          label: {
            it: "Procedura di gara",
            en: "Procurement procedure",
          },
          value: "Dialogo Competitivo (D.Lgs. 36/2023)",
        },
        {
          label: {
            it: "Deadline operativa",
            en: "Operational deadline",
          },
          value: "30 giugno 2026",
        },
      ],
      techStack: [
        // Blockchain
        "Algorand",
        "ARC-3",
        "ARC-19",
        "Algorand Standard Assets (ASA)",
        "AlgoKit",
        "algosdk",
        "Pera Wallet Connect",
        "Base (EVM L2)",
        "ERC-721",
        "ERC-5192 (Soulbound)",
        "OpenZeppelin",
        // Storage
        "IPFS / Pinata",
        "MINIO (S3-compatible)",
        "Crust Network (POC)",
        // Data layer
        "Neo4j (Linked Data)",
        "Elasticsearch OSS",
        "Postgres",
        "Protegé / Pellet (OWL)",
        "ArCo / REICAT / Dublin Core",
        "CIDOC-CRM",
        // AI / DPaaS
        "Dify (LLM orchestrator)",
        "LLaMA",
        "Dataiku",
        // Identity
        "SPID",
        "IAM ECOMIC",
        "JWT + RBAC",
        "TLS 1.3",
        "Privy (EVM fork)",
        // Frontend
        "React 19",
        "TypeScript",
        "Vite",
        "Tailwind 3",
        // Infra
        "OpenShift",
        "Docker",
        "Kubernetes",
        "ArgoCD",
        "GitLab CI",
      ],
      pillarsTouched: ["it-mgmt", "web3", "business", "ai-eng"],
      image: "/images/logos/pnrr.svg",
      featured: true,
    },
    {
      slug: "factor",
      title: "Factor",
      domain: {
        it: "DeFi · Vault infrastructure · AI-native layer",
        en: "DeFi · Vault infrastructure · AI-native layer",
      },
      role: {
        it: "Founding Engineer · Top contributor su Discover · 100% sole author su VaaS / Agent",
        en: "Founding Engineer · Top contributor on Discover · 100% sole author on VaaS / Agent",
      },
      period: "2023 – present",
      status: "active",
      problem: {
        it: "Costruire l'infrastruttura per un'esperienza DeFi vault-as-a-service end-to-end: contratti ERC-4626 con manager-adapter, SDK tipizzato, due UI in produzione (power-user + depositor) e — dal 2026 — un layer AI-native che esponga vault e strategie a LLM, agent autonomi e API HTTP a pagamento.",
        en: "Build the infrastructure for an end-to-end DeFi vault-as-a-service experience: ERC-4626 contracts with manager-adapter pattern, a typed SDK, two production UIs (power-user + depositor) and — from 2026 — an AI-native layer exposing vaults and strategies to LLMs, autonomous agents and pay-per-call HTTP APIs.",
      },
      architecture: {
        it: "Factor.fi è un'infrastruttura per vault DeFi su Arbitrum, Base ed Ethereum: vault ERC-4626 Studio Pro, manager-adapter pattern con integrazione di Aave, Compound, Morpho, Silo, Uniswap V3, OpenOcean e Pendle, più un SDK tipizzato (`@factordao/sdk`, `@factordao/sdk-studio`). Sopra girano due UI in produzione: Factor Studio (Vite + React 19 + wagmi + RainbowKit, ~78k LOC, ~253 commit Andrea) per power-user che compongono e gestiscono vault, e Factor Discover (Next.js 14 + Sentry, ~56k LOC, ~468 commit Andrea — top contributor individuale) per i depositanti su `pro.factor.fi`. Nel 2026 ho aggiunto un layer AI-native: un server MCP (`factor-mcp`, 68 tool) che espone l'intero SDK agli LLM con due modalità (stdio classica e stateless multi-tenant via AsyncLocalStorage); un prodotto Vault-as-a-Service (`factor-vaas`, 100% sole author) HTTP con pagamenti via x402 / USDC su Base, worker BullMQ, pool di wallet HD-derived (treasury all'indice 0, ogni worker su indice proprio — nessuna chiave condivisa) e motore di ribilanciamento basato su Anthropic; un agente DeFi autonomo (`factor-agent`, 4.8k LOC, working tree only) che consuma il server MCP via task pianificati con cron (vault-monitor, position-tracker, strategy-executor, auto-compound, risk-guard, reporter), con notifiche Telegram + Discord.",
        en: "Factor.fi is a DeFi vault infrastructure on Arbitrum, Base and Ethereum: ERC-4626 Studio Pro vaults, a manager-adapter pattern integrating Aave, Compound, Morpho, Silo, Uniswap V3, OpenOcean and Pendle, plus a typed SDK (`@factordao/sdk`, `@factordao/sdk-studio`). Two production UIs ride on top: Factor Studio (Vite + React 19 + wagmi + RainbowKit, ~78k LOC, ~253 Andrea commits) for power-users to compose and manage vaults, and Factor Discover (Next.js 14 + Sentry, ~56k LOC, ~468 Andrea commits — top individual contributor) for depositors on `pro.factor.fi`. In 2026 I added an AI-native layer: an MCP server (`factor-mcp`, 68 tools) exposing the entire SDK to LLMs with two modes (classic stdio and stateless multi-tenant via AsyncLocalStorage); a Vault-as-a-Service HTTP product (`factor-vaas`, 100% sole author) with x402 / USDC payments on Base, BullMQ workers, an HD-derived wallet pool (treasury at index 0, each worker at its own index — no shared keys) and an Anthropic-driven rebalancing engine; an autonomous DeFi agent (`factor-agent`, 4.8k LOC, working tree only) that consumes the MCP server over cron-scheduled tasks (vault-monitor, position-tracker, strategy-executor, auto-compound, risk-guard, reporter) with Telegram + Discord notifications.",
      },
      decisions: [
        {
          title: {
            it: "HD wallet pool con isolamento per worker",
            en: "HD wallet pool with per-worker isolation",
          },
          body: {
            it: "In `factor-vaas` il treasury vive sull'indice HD 0; ogni worker deriva il proprio indice. Nessuna chiave condivisa, scaling orizzontale immediato e blast radius minimo se un worker viene compromesso.",
            en: "In `factor-vaas` the treasury sits at HD index 0; each worker derives its own index. No shared keys, horizontal scaling out-of-the-box, minimal blast radius if a worker is compromised.",
          },
        },
        {
          title: {
            it: "MCP stateless via AsyncLocalStorage",
            en: "Stateless MCP via AsyncLocalStorage",
          },
          body: {
            it: "`factor-mcp` ha due modalità: stdio classica e stateless per gateway multi-tenant. ChainId ed environment viaggiano nel context per-richiesta tramite AsyncLocalStorage; `sendTransaction` restituisce calldata non firmato anziché broadcast — un singolo processo serve molti utenti senza mutazione di stato globale.",
            en: "`factor-mcp` ships two modes: classic stdio and stateless for multi-tenant gateways. `chainId` and environment ride in per-request context via AsyncLocalStorage; `sendTransaction` returns unsigned calldata instead of broadcasting — one process serves many users with zero global-state mutation.",
          },
        },
        {
          title: {
            it: "Pagamenti x402 per primitive on-chain",
            en: "x402 payments for on-chain primitives",
          },
          body: {
            it: "VaaS espone `POST /api/vault` dietro x402 (Coinbase, USDC su Base): il client ottiene 402 Payment Required, firma il pagamento e riprova. Niente account, niente carte di credito, una primitiva HTTP+blockchain pulita. Pricing in funzione dei componenti (`3 + adapters*1 + assets*0.10` USDC).",
            en: "VaaS gates `POST /api/vault` behind x402 (Coinbase, USDC on Base): the client gets a 402 Payment Required, signs the payment and retries. No accounts, no credit cards, a clean HTTP+blockchain primitive. Pricing is a function of components (`3 + adapters*1 + assets*0.10` USDC).",
          },
        },
        {
          title: {
            it: "Manager-adapter pattern riusabile",
            en: "Reusable manager-adapter pattern",
          },
          body: {
            it: "Ogni protocollo (Aave, Morpho, Silo, Compound, Uniswap V3, OpenOcean, Pendle) è un adapter isolato dietro un'interfaccia comune. Le strategie diventano building block componibili anziché contratti monolitici, audit più semplice e onboarding di nuovi protocolli incrementale.",
            en: "Each protocol (Aave, Morpho, Silo, Compound, Uniswap V3, OpenOcean, Pendle) is an isolated adapter behind a shared interface. Strategies become composable building blocks rather than monolithic contracts — simpler audits, incremental onboarding of new protocols.",
          },
        },
      ],
      results: [
        {
          label: {
            it: "Periodo attivo",
            en: "Active period",
          },
          value: "Feb 2024 – ora",
        },
        {
          label: {
            it: "Codebase principali",
            en: "Owned codebases",
          },
          value: "~140k LOC",
        },
        {
          label: {
            it: "Contributi UI principali",
            en: "Lead UI contribution",
          },
          value: "Top contributor su Discover (~468 commit), 2nd su Studio (~253 commit)",
        },
        {
          label: {
            it: "Chain supportate",
            en: "Supported chains",
          },
          value: "Arbitrum · Base · Ethereum",
        },
        {
          label: {
            it: "Layer AI-native (2026)",
            en: "AI-native layer (2026)",
          },
          value: "MCP (68 tool, stdio + stateless) · VaaS (x402 + USDC) · Agent (cron + LLM)",
        },
      ],
      techStack: [
        // Smart contracts / SDKs
        "Solidity",
        "ERC-4626",
        "Foundry",
        "Hardhat",
        "wagmi",
        "viem",
        "ethers",
        // Backend / infra
        "TypeScript",
        "Node.js",
        "Express",
        "Drizzle ORM",
        "Postgres",
        "Redis",
        "BullMQ",
        // UI
        "React 19",
        "Next.js 14",
        "Vite",
        "RainbowKit",
        "Radix UI",
        "Tailwind",
        "TanStack Query/Table",
        // AI / agent
        "MCP (Model Context Protocol)",
        "Anthropic SDK",
        "x402",
        "AsyncLocalStorage",
        // Misc
        "Sentry",
        "Drizzle-Kit",
        "Zod",
        "Lerna",
        "i18next",
      ],
      pillarsTouched: ["traditional-dev", "web3", "ai-eng", "cloud-devops"],
      image: "/images/previews/factor.jpg",
      link: "https://factor.fi/",
      featured: true,
    },
  ],

  // -------------------------------------------------------------------------
  // Experience — sez. 16.5/16.6/16.7 (top entries) + esistenti
  // -------------------------------------------------------------------------
  experience: [
    {
      company: "Mandate.Finance",
      position: {
        it: "Founding Product Engineer & Technical Co-founder",
        en: "Founding Product Engineer & Technical Co-founder",
      },
      period: "03/2026 – Present",
      type: { it: "Co-founder", en: "Co-founder" },
      description: {
        it: "Founding engineer di una piattaforma DeFi AI-native: 11 workspace (6 servizi runtime su Cloud Run + Foundry contracts + infra + 2 frontend Next.js 15 + test harness + docs) in 5 settimane (~1.300 commit, ~140k LOC). Single LLM loop su 7 job type + 8 strategy template Postgres, MCP gateway in Python, signing-service con per-agent EOA AES-256-GCM, ERC-7821 batch executor + UUPS billing treasury (127 test) deployati allo stesso indirizzo CREATE2 su Ethereum + Base + Arbitrum. UX gasless via Privy + EIP-7702.",
        en: "Founding engineer of an AI-native DeFi platform: 11 workspaces (6 Cloud Run runtime services + Foundry contracts + infra + 2 Next.js 15 frontends + test harness + docs) in 5 weeks (~1,300 commits, ~140k LOC). Single LLM loop over 7 job types + 8 strategy templates in Postgres, Python MCP gateway, signing-service with per-agent AES-256-GCM EOAs, ERC-7821 batch executor + UUPS billing treasury (127 tests) deployed at the same CREATE2 address on Ethereum + Base + Arbitrum. Gasless UX via Privy + EIP-7702.",
      },
      logo: "/images/factor_studio.gif",
    },
    {
      company: "Haelias",
      position: {
        it: "Solo CTO / Principal Engineer",
        en: "Solo CTO / Principal Engineer",
      },
      period: "2022 – Present",
      type: { it: "Full Time", en: "Full Time" },
      description: {
        it: "Solo CTO di un B2B SaaS pharma in produzione attiva (Montefarmaco, Logista SPA): 5.5M+ documenti MongoDB, ~14k prodotti in stock cross-supplier, 143 endpoint Express, 16 schemi Mongoose, 5 ruoli RBAC, 493 test backend con 68% statement coverage. Architettura end-to-end su 5 repo git (BE Express + UI React 19 + craco + worker Rust + landing Vite + docs), 70% riduzione size indici on-disk live + ~99% in cache evitando upgrade da +€1.260/anno, custom search engine, modal warning per ordini €250k–€1M+.",
        en: "Solo CTO of a live B2B pharma SaaS (Montefarmaco, Logista SPA): 5.5M+ MongoDB documents, ~14k cross-supplier in-stock products, 143 Express endpoints, 16 Mongoose schemas, 5 RBAC roles, 493 backend tests with 68% statement coverage. End-to-end architecture across 5 git repos (Express BE + React 19 + craco UI + Rust worker + Vite landing + docs), 70% on-disk index footprint reduction + ~99% in cache avoiding a €1,260/year upgrade, custom search engine, modal warnings for €250k–€1M+ orders.",
      },
      logo: "/images/me.jpg",
    },
    {
      company: "Bando Ecomic Lotto 3 (MiC PNRR / Activa Digital)",
      position: {
        it: "Lead tecnico-funzionale ArtCertify + Data Product Blockchain",
        en: "Technical-functional lead on ArtCertify + Blockchain Data Products",
      },
      period: "2025 – 06/2026 (deadline operativa)",
      type: { it: "Lead Tecnico", en: "Technical Lead" },
      description: {
        it: "Lead tecnico-funzionale su ArtCertify e sui 4 Data Product blockchain (Catalogo Metadati, Auto-linking, Certificazione Blockchain+IPFS, Linked Data) del Bando Ecomic Lotto 3 'Fruizione Avanzata' (MiC Digital Library / Invitalia, finanziamento PNRR, Dialogo Competitivo D.Lgs. 36/2023). RTI Activa Digital + Civita Mostre, codename interno Terranova. Coordinamento con il team Sara (PO), Giulio (tech lead), Flavio Cipollina (PO AI), Roberto Donnofrio, Serena Nardoni (BA), Jacopo (analista funzionale), Daniele Vettoretti (Data Product reference).",
        en: "Technical-functional lead on ArtCertify and on the 4 blockchain Data Products (Metadata Catalog, Auto-linking, Blockchain+IPFS Certification, Linked Data) of the Ecomic Lotto 3 'Advanced Fruition' tender (MiC Digital Library / Invitalia, PNRR funding, Dialogo Competitivo D.Lgs. 36/2023). RTI Activa Digital + Civita Mostre, internal codename Terranova. Coordination with Sara (PO), Giulio (tech lead), Flavio Cipollina (AI PO), Roberto Donnofrio, Serena Nardoni (BA), Jacopo (functional analyst), Daniele Vettoretti (Data Product reference).",
      },
      logo: "/images/logos/pnrr.svg",
    },
    {
      company: "Factor.fi",
      position: {
        it: "Founding Engineer / Senior Product Owner",
        en: "Founding Engineer / Senior Product Owner",
      },
      period: "09/2023 – 2024",
      type: { it: "Full Time", en: "Full Time" },
      description: {
        it: "Founding engineer di Factor: backend, jobs, signing-service e UI per il marketplace di strategie DeFi e vault automatizzati. Mix-and-match strategy templates, ERC-4626, multi-chain. Reference codebase tuttora attivo per i pattern Web3.",
        en: "Founding engineer at Factor: backend, jobs, signing-service and UI for the DeFi strategy marketplace and automated vaults. Mix-and-match strategy templates, ERC-4626, multi-chain. Reference codebase still active for Web3 patterns.",
      },
      link: "https://factor.fi/",
      logo: "/images/factor_studio.gif",
    },
    {
      company: "Gruppo Activa",
      position: {
        it: "Blockchain Product Owner",
        en: "Blockchain Product Owner",
      },
      period: "08/2023 – Present",
      type: { it: "Full Time", en: "Full Time" },
      description: {
        it: "Blockchain Product Owner specializzato in digitalizzazione, problem solving e sviluppo smart contract. Gestione di iniziative di product management con focus su architettura blockchain e user experience.",
        en: "Blockchain Product Owner focused on digitalization, problem solving and smart-contract development. Driving product-management initiatives with emphasis on blockchain architecture and UX.",
      },
      link: "https://gruppoactiva.com/",
      logo: "/images/me.jpg",
    },
    {
      company: "Andrea Ritondale",
      position: {
        it: "Consulente Blockchain & Web3",
        en: "Blockchain & Web3 Consultant",
      },
      period: "01/2020 – Present",
      type: { it: "Freelance", en: "Freelance" },
      description: {
        it: "Consulenza tecnica e manageriale per aziende nei settori Blockchain, Web3, DeFi e NFT su sviluppo, architettura e go-to-market.",
        en: "Technical and managerial consulting for Blockchain, Web3, DeFi and NFT companies across development, architecture and go-to-market.",
      },
      logo: "/images/me.jpg",
    },
  ],

  // -------------------------------------------------------------------------
  // Education
  // -------------------------------------------------------------------------
  education: [
    {
      title: {
        it: "Professional Scrum Master I — Scrum.org",
        en: "Professional Scrum Master I — Scrum.org",
      },
      period: "11/2022",
      description: {
        it: "Certificazione Scrum Master.",
        en: "Certified Scrum Master.",
      },
    },
    {
      title: {
        it: "Laurea Magistrale in Management — Università di Cassino e del Lazio Meridionale (IT)",
        en: "Master's Degree in Management — University of Cassino and Southern Lazio (IT)",
      },
      period: "2020 – 10/2022",
      description: {
        it: "Voto: 110 e lode. Tesi: 'Decentralized Autonomous Organization — Modello di governance sovranazionale in Blockchain'.",
        en: "Grade: 110/110 cum laude. Dissertation: 'Decentralized Autonomous Organization — A supranational governance model in Blockchain'.",
      },
      link: "https://www.researchgate.net/publication/365354831_DAO_Decentralized_Autonomous_Organization_Modello_sovranazionale_di_Corporate_Governance_in_blockchain",
    },
    {
      title: {
        it: "Erasmus+ — St. Kliment Sofia University (BG)",
        en: "Erasmus+ — St. Kliment Sofia University (BG)",
      },
      period: "02/2020 – 07/2020",
      description: {
        it: "Programma di scambio internazionale.",
        en: "International exchange program.",
      },
    },
    {
      title: {
        it: "Blockchain Developer — Start2Impact",
        en: "Blockchain Developer — Start2Impact",
      },
      period: "09/2020 – 03/2021",
      description: {
        it: "Percorso completo di sviluppo blockchain.",
        en: "Comprehensive blockchain development training.",
      },
    },
    {
      title: {
        it: "Blockchain Business — Dalian University of Technology (CN)",
        en: "Blockchain Business — Dalian University of Technology (CN)",
      },
      period: "09/2019 – 12/2019",
      description: {
        it: "Programmazione blockchain + lingua cinese.",
        en: "Blockchain programming + Chinese language.",
      },
    },
    {
      title: {
        it: "Laurea Triennale in Economia — Università di Cassino e del Lazio Meridionale (IT)",
        en: "Bachelor's Degree in Economics — University of Cassino and Southern Lazio (IT)",
      },
      period: "29/01/2020",
      description: {
        it: "Tesi: 'Blockchain a supporto dell'internazionalizzazione delle PMI'.",
        en: "Dissertation: 'Blockchain to support the internationalization of SMEs'.",
      },
    },
  ],

  // -------------------------------------------------------------------------
  // Skills (sez. 16.4)
  // -------------------------------------------------------------------------
  skills: [
    {
      category: { it: "Frontend", en: "Frontend" },
      items: [
        "Next.js 15",
        "React 19",
        "TypeScript",
        "Tailwind 4",
        "MUI 7",
        "Zustand",
        "next-intl",
        "PWA",
        "Framer Motion",
        "Radix UI",
        "Vite",
      ],
    },
    {
      category: { it: "Backend", en: "Backend" },
      items: [
        "Node.js 20+",
        "Express 4+",
        "TypeScript 5+",
        "Rust + Tokio",
        "Drizzle ORM",
        "Mongoose 8",
        "Microservices",
        "API Design",
        "SSE Streaming",
        "JWT",
        "OAuth2",
        "2FA",
        "Vitest",
        "Jest",
      ],
    },
    {
      category: { it: "AI Engineering", en: "AI Engineering" },
      items: [
        "Single-loop Agent",
        "Per-task Tool Whitelist",
        "LLM Integration",
        "MCP Gateway",
        "MCP-over-stdio (request-id correlation)",
        "Agent Testing (SSE harness)",
        "Code-level Guardrails (SELL GUARD)",
        "Strategy Templates (Postgres-driven)",
        "Real-time Oversight",
        "Prompt Engineering",
        "Multi-provider LLM",
        "DeepInfra",
        "OpenRouter",
        "Anthropic (review)",
      ],
    },
    {
      category: { it: "AI-Native Workflow", en: "AI-Native Workflow" },
      items: [
        "Claude Code",
        "Claude API",
        "Multi-Agent Parallel Dispatch",
        "Code Review Automation",
        "PRD-from-Conversation",
        "Multi-Repo Deploy Orchestration",
        "Sub-Agent Prompt Design",
        "OMI",
      ],
    },
    {
      category: { it: "Cloud & DevOps", en: "Cloud & DevOps" },
      items: [
        "GCP",
        "Cloud Run",
        "Cloud SQL",
        "Cloud Build",
        "Secret Manager",
        "VPC Connector",
        "DigitalOcean",
        "App Platform",
        "Managed MongoDB",
        "Vercel",
        "Netlify",
        "Docker",
        "Multi-environment",
        "doctl",
        "gcloud",
      ],
    },
    {
      category: { it: "Database Engineering", en: "Database Engineering" },
      items: [
        "MongoDB Performance Tuning",
        "Aggregation Pipelines",
        "Change Streams",
        "Partial Indexes",
        "WiredTiger Cache Analysis",
        "Slow Query Diagnosis",
        "Schema Migration",
        "bulkWrite",
        "Postgres",
        "Drizzle",
      ],
    },
    {
      category: { it: "Web3 / Blockchain", en: "Web3 / Blockchain" },
      items: [
        "Ethereum",
        "Base",
        "Arbitrum",
        "Algorand",
        "Privy",
        "Wagmi",
        "viem",
        "ethers",
        "ERC-4626",
        "EIP-7702",
        "ERC-7821",
        "ERC-721",
        "ERC-5192 (Soulbound)",
        "ERC-2612",
        "UUPS Proxies",
        "ARC-3 / ARC-19",
        "AlgoKit",
        "algosdk",
        "Pera Wallet Connect",
        "WalletConnect v2",
        "x402",
        "Foundry",
        "Hardhat",
        "Solidity",
        "OpenZeppelin",
        "LiFi",
        "Alchemy",
        "AAVE",
        "Morpho",
        "Balancer",
        "Factor SDK",
        "Account Abstraction",
        "MCP (Model Context Protocol)",
        "IPFS / Pinata",
      ],
    },
    {
      category: {
        it: "IT Management & Sistemi Complessi",
        en: "IT Management & Complex Systems",
      },
      items: [
        "Microservice Architecture",
        "IT Governance",
        "Vendor Selection",
        "Code Review Standards",
        "Decision Logs",
        "Documentation",
        "Multi-team Coordination",
        "Stakeholder Management",
        "Multi-project Orchestration",
      ],
    },
    {
      category: {
        it: "Digitalizzazione Processi",
        en: "Process Digitalization",
      },
      items: [
        "Process Mapping",
        "Workflow Digitalization",
        "State Machine Design",
        "Audit Trail",
        "Self-service UX",
        "Multi-channel Notification",
        "Document Generation",
        "GDPR-aware Logging",
      ],
    },
    {
      category: { it: "Product / UX", en: "Product / UX" },
      items: [
        "Product Design",
        "Funnel Design",
        "Onboarding Psychology",
        "Brand Strategy",
        "Information Architecture",
        "Safety Patterns",
        "Modal Warning Systems",
        "Progressive Disclosure",
      ],
    },
    {
      category: { it: "Business / Commercial", en: "Business / Commercial" },
      items: [
        "Revenue Modeling",
        "Excel Modeling",
        "SWOT Analysis",
        "Business Plan",
        "Cap Table",
        "Dilution Math",
        "Fundraising",
        "Pitch Deck",
        "Pricing Strategy",
        "GTM Strategy",
        "Beta Program Design",
      ],
    },
    {
      category: { it: "Domain Expertise", en: "Domain Expertise" },
      items: [
        "Pharma B2B Procurement",
        "MINSAN",
        "Farmadati",
        "ODA Lifecycle",
        "VAT Compliance Italia",
        "Multi-tenant SaaS",
        "DeFi",
        "ERC-4626 Vaults",
        "Soulbound Tokens (SBT)",
        "PNRR",
        "MiC Digital Library",
        "DPaaS / DP-Lab",
        "Cultural Heritage",
        "ArCo / REICAT / Dublin Core",
        "SPID / IAM ECOMIC",
      ],
    },
  ],

  // -------------------------------------------------------------------------
  // Services (sez. 6.11 + 13 + 16.9)
  // -------------------------------------------------------------------------
  services: [
    {
      id: "fractional-cto",
      title: {
        it: "Fractional / CTO-as-a-Service",
        en: "Fractional / CTO-as-a-Service",
      },
      description: {
        it: "CTO part-time per startup o aziende che hanno bisogno di seniority tecnica senza assumere a tempo pieno: architettura, ownership end-to-end, IT management, cost discipline.",
        en: "Part-time CTO for startups or companies that need senior technical leadership without a full-time hire: architecture, end-to-end ownership, IT management, cost discipline.",
      },
      bulletPoints: {
        it: [
          "Architettura di sistema e roadmap tecnica",
          "Governance di team distribuiti e vendor selection",
          "Decision logs, runbook e standard di code review",
          "Cost discipline su cloud e tooling",
        ],
        en: [
          "System architecture and technical roadmap",
          "Distributed-team governance and vendor selection",
          "Decision logs, runbooks and code-review standards",
          "Cost discipline on cloud and tooling",
        ],
      },
      rateRange: "€120–200/h",
    },
    {
      id: "technical-architect",
      title: {
        it: "Technical Architect",
        en: "Technical Architect",
      },
      description: {
        it: "Disegno sistemi IT complessi multi-componente. Microservice boundaries, schema design, deploy pipeline, decisioni cross-stack documentate.",
        en: "I design complex multi-component IT systems. Microservice boundaries, schema design, deploy pipelines, documented cross-stack decisions.",
      },
      bulletPoints: {
        it: [
          "Architecture review e refactoring incrementale",
          "Microservice boundary design",
          "Schema design e data modeling",
          "Deploy pipeline e multi-environment workflow",
        ],
        en: [
          "Architecture review and incremental refactoring",
          "Microservice boundary design",
          "Schema design and data modeling",
          "Deploy pipelines and multi-environment workflow",
        ],
      },
      rateRange: "€120–200/h",
    },
    {
      id: "ai-engineering",
      title: {
        it: "AI Engineering",
        en: "AI Engineering",
      },
      description: {
        it: "Costruisco sistemi AI in produzione: agent loop con tool whitelist, MCP gateway multi-tenant, signing-service custodial, guardrail a livello di codice, prompt engineering production-grade.",
        en: "I build production AI systems: agent loops with per-task tool whitelists, multi-tenant MCP gateways, custodial signing-services, code-level guardrails, production-grade prompt engineering.",
      },
      bulletPoints: {
        it: [
          "Single agent loop con tool whitelist per job type",
          "MCP gateway tra LLM e tool esterni (request-id correlation)",
          "Signing-service custodial con per-agent EOA cifrate",
          "Guardrail a livello di codice (SELL GUARD non bypassabile)",
          "Subscription/credit engine per agent autonomi",
          "Quality assurance su output non-deterministici",
        ],
        en: [
          "Single agent loop with per-job-type tool whitelists",
          "MCP gateway between LLMs and external tools (request-id correlation)",
          "Custodial signing-service with per-agent encrypted EOAs",
          "Code-level guardrails (non-bypassable SELL GUARD)",
          "Subscription/credit engine for autonomous agents",
          "QA for non-deterministic outputs",
        ],
      },
    },
    {
      id: "database-performance",
      title: {
        it: "Database Performance Engineering",
        en: "Database Performance Engineering",
      },
      description: {
        it: "Tuning di MongoDB e Postgres in produzione live, con focus su cost discipline e zero-downtime.",
        en: "Tuning live-production MongoDB and Postgres clusters with a focus on cost discipline and zero-downtime ops.",
      },
      bulletPoints: {
        it: [
          "Cache pressure analysis e ottimizzazione indici",
          "Aggregation pipelines complesse",
          "Schema migration retro-compatibile",
          "Hot patches sotto pressione",
        ],
        en: [
          "Cache-pressure analysis and index optimization",
          "Complex aggregation pipelines",
          "Backward-compatible schema migrations",
          "Hot patches under pressure",
        ],
      },
    },
    {
      id: "process-digitalization",
      title: {
        it: "Digitalizzazione Processi Aziendali",
        en: "Process Digitalization",
      },
      description: {
        it: "Mappo processi tradizionali, identifico i punti di attrito e progetto sostituti digitali end-to-end con audit trail.",
        en: "I map traditional processes, identify friction points and design end-to-end digital replacements with audit trails.",
      },
      bulletPoints: {
        it: [
          "Process mapping e gap analysis",
          "State machine design e workflow digitali",
          "Audit trail e GDPR-aware logging",
          "Self-service UX e document generation",
        ],
        en: [
          "Process mapping and gap analysis",
          "State machine design and digital workflows",
          "Audit trails and GDPR-aware logging",
          "Self-service UX and document generation",
        ],
      },
    },
    {
      id: "web3-integration",
      title: {
        it: "Web3 / Smart Contract Integration",
        en: "Web3 / Smart Contract Integration",
      },
      description: {
        it: "Integrazione smart contract multi-chain (EVM + Algorand) con UX gasless, account abstraction, soulbound token e protocolli audit-ready.",
        en: "Multi-chain (EVM + Algorand) smart-contract integration with gasless UX, account abstraction, soulbound tokens and audit-ready protocols.",
      },
      bulletPoints: {
        it: [
          "ERC-4626 vault, EIP-7702 / ERC-7821 sponsored tx, UUPS proxy",
          "Soulbound token (ARC-19 + ERC-5192) con metadata IPFS versionato",
          "Cross-chain via LiFi, pagamenti HTTP via x402",
          "Algorand: AlgoKit, algosdk, ARC-3/19, Pera Wallet",
          "Privy + Wagmi + viem stack",
          "Signing-service isolato con per-agent EOA cifrate",
        ],
        en: [
          "ERC-4626 vaults, EIP-7702 / ERC-7821 sponsored tx, UUPS proxies",
          "Soulbound tokens (ARC-19 + ERC-5192) with versioned IPFS metadata",
          "Cross-chain via LiFi, HTTP payments via x402",
          "Algorand: AlgoKit, algosdk, ARC-3/19, Pera Wallet",
          "Privy + Wagmi + viem stack",
          "Isolated signing-service with per-agent encrypted EOAs",
        ],
      },
    },
  ],

  // -------------------------------------------------------------------------
  // Collaborations — Tier 2 (DAO/community/advisory roles)
  // -------------------------------------------------------------------------
  collaborations: [
    {
      name: "Synthetix Italia",
      role: { it: "The 300 ⚔️ Member & Country Lead", en: "The 300 ⚔️ Member & Country Lead" },
      period: "06/2022 – 12/2024",
      description: {
        it: "Lead della community italiana di Synthetix: comunicazione di protocollo, social media, engagement.",
        en: "Lead of the Italian Synthetix community: protocol communication, social media and engagement.",
      },
      logo: "/images/synthetixitalia.jpg",
      link: "https://synthetixitalia.eth.limo",
    },
    {
      name: "Kwenta",
      role: { it: "Elite Councilor & Grants Councilor", en: "Elite Councilor & Grants Councilor" },
      period: "02/2023 – 12/2023",
      description: {
        it: "1/5 del council elected by community, portavoce della governance DAO. In precedenza 1/3 del Grants Council per la distribuzione di grant.",
        en: "1/5 of the community-elected council, spokesperson for DAO governance. Previously 1/3 of the Grants Council distributing grants.",
      },
      logo: "/images/kwenta.jpg",
      link: "https://kwenta.io/",
    },
    {
      name: "Jigstack",
      role: { it: "Core Contributor & Product Manager", en: "Core Contributor & Product Manager" },
      period: "01/2022 – 08/2023",
      description: {
        it: "DAO manager e product head di un wallet Web3 governato dalla DAO Jigstack: smart contract, chain analysis, DeFi.",
        en: "DAO manager and product head of a Web3 wallet governed by the Jigstack DAO: smart contracts, chain analysis, DeFi.",
      },
      logo: "/images/jigstack.gif",
      link: "https://jigstack.org/",
    },
    {
      name: "MEGO Tickets",
      role: { it: "Web3 Advisor", en: "Web3 Advisor" },
      period: "01/2023 – 12/2024",
      description: {
        it: "Web3 advisory: competitive analysis e strategia di risposta in scenari di emergenza.",
        en: "Web3 advisory: competitive analysis and emergency-response strategy.",
      },
      logo: "/images/me.jpg",
    },
    {
      name: "FNDZ",
      role: { it: "Product Communications Manager", en: "Product Communications Manager" },
      period: "07/2021 – 03/2022",
      description: {
        it: "Product Communication Lead per una piattaforma DeFi di copy trading: UX e strategia di comunicazione.",
        en: "Product Communication Lead for a DeFi copy-trading platform: UX and communication strategy.",
      },
      logo: "/images/fndz.jpg",
      link: "https://fndz.io/",
    },
    {
      name: "YOMI",
      role: {
        it: "Senior Product Management Advisor & Business Development Manager",
        en: "Senior Product Management Advisor & Business Development Manager",
      },
      period: "03/2023 – 08/2023",
      description: {
        it: "Advisory di product management senior e business development: competitive analysis, ricerca e team collaboration.",
        en: "Senior product-management advisory and business development: competitive analysis, research and team collaboration.",
      },
      logo: "/images/me.jpg",
    },
    {
      name: "Theledger.it",
      role: { it: "Blockchain Editor & Copywriter", en: "Blockchain Editor & Copywriter" },
      period: "09/2020 – 01/2022",
      description: {
        it: "Editor e copywriter blockchain su Bitcoin, Ethereum, DeFi e crypto in generale.",
        en: "Blockchain editor and copywriter on Bitcoin, Ethereum, DeFi and crypto at large.",
      },
      logo: "/images/me.jpg",
    },
  ],

  // -------------------------------------------------------------------------
  // Projects — preserve all existing + add Haelias / Mandate / DPass
  // -------------------------------------------------------------------------
  projects: [
    {
      title: "Haelias",
      description: {
        it: "B2B SaaS pharma in produzione: 5.5M+ documenti MongoDB, ~14k prodotti in stock cross-supplier, 143 endpoint Express, 5 repo git, clienti enterprise (Montefarmaco, Logista SPA).",
        en: "Production B2B pharma SaaS: 5.5M+ MongoDB documents, ~14k cross-supplier in-stock products, 143 Express endpoints, 5 git repos, enterprise clients (Montefarmaco, Logista SPA).",
      },
      image: "/images/logos/montefarmaco.png",
      gif: null,
      categories: ["B2B SaaS", "Enterprise", "Web2"],
      featured: true,
    },
    {
      title: "Mandate.Finance",
      description: {
        it: "Piattaforma DeFi AI-native: 11 workspace production-deployed in 5 settimane, multi-chain (stesso indirizzo CREATE2 su 3 chain), MCP gateway, gasless UX via EIP-7702 + ERC-7821.",
        en: "AI-native DeFi platform: 11 production-deployed workspaces in 5 weeks, multi-chain (same CREATE2 address on 3 chains), MCP gateway, gasless UX via EIP-7702 + ERC-7821.",
      },
      image: "/images/previews/mandate.jpg",
      gif: null,
      categories: ["DeFi", "Web3", "AI", "Enterprise"],
      featured: true,
    },
    {
      title: "DPass / PNRR",
      description: {
        it: "Bando Ecomic Lotto 3 'Fruizione Avanzata' (MiC PNRR): 4 Data Product blockchain (Catalogo, Auto-linking, Certificazione, Linked Data) consumati da 6 use case pilota su istituti culturali nazionali. RTI Activa Digital + Civita Mostre.",
        en: "Ecomic Lotto 3 'Advanced Fruition' tender (MiC PNRR): 4 blockchain Data Products (Catalog, Auto-linking, Certification, Linked Data) consumed by 6 pilot use cases across national cultural institutions. RTI Activa Digital + Civita Mostre.",
      },
      image: "/images/logos/pnrr.svg",
      gif: null,
      categories: ["Government", "Web3", "Enterprise", "Cultural Heritage"],
      featured: true,
    },
    {
      title: "ArtCertify",
      description: {
        it: "Piattaforma dual-chain di Soulbound Token per la certificazione di beni culturali. Algorand-first (ARC-3 + ARC-19, Pera Wallet, JWT backend) con fork EVM su Base (ERC-721 + ERC-5192, Privy, Hardhat/Foundry). Storage ibrido MINIO + IPFS, certificati non-trasferibili con metadata IPFS versionato.",
        en: "Dual-chain Soulbound Token platform for cultural-heritage certification. Algorand-first (ARC-3 + ARC-19, Pera Wallet, JWT backend) with EVM fork on Base (ERC-721 + ERC-5192, Privy, Hardhat/Foundry). Hybrid MINIO + IPFS storage, non-transferable certificates with versioned IPFS metadata.",
      },
      image: "/images/logos/pnrr.svg",
      gif: null,
      categories: ["Web3", "Algorand", "Government", "Identity", "Cultural Heritage"],
      featured: true,
    },
    {
      title: "Artence Passkey",
      description: {
        it: "Wallet Algorand passkey-native: deriva la secret key in modo deterministico dal `rawId` di una credenziale WebAuthn via SHA-256, e la espone alle dApp via WalletConnect v2 con namespace `algorand:*`. Onboarding Web3 senza seed phrase.",
        en: "Passkey-native Algorand wallet: derives the secret key deterministically from a WebAuthn credential `rawId` via SHA-256, and exposes it to dApps via WalletConnect v2 with the `algorand:*` namespace. Web3 onboarding without seed phrase.",
      },
      image: "/images/me.jpg",
      gif: null,
      categories: ["Web3", "Algorand", "Identity"],
      featured: true,
    },
    {
      title: "Terion Token",
      description: {
        it: "Progetto token (ulteriori dettagli in fase di review NDA).",
        en: "Token project (additional details under NDA review).",
      },
      image: "/images/me.jpg",
      gif: null,
      categories: ["Web3", "DeFi"],
      featured: false,
    },
    {
      title: "CAPUT MUNDI",
      description: {
        it: "Deployment italiano di ArtCertify per il progetto Roma Caput Mundi (PNRR / NextGenerationEU). Certificazione SBT Algorand di asset culturali della Capitale.",
        en: "Italian deployment of ArtCertify for the Rome Caput Mundi project (PNRR / NextGenerationEU). Algorand SBT certification for Rome's cultural assets.",
      },
      image: "/images/logos/pnrr.svg",
      gif: null,
      categories: ["Government", "Cultural Heritage", "Web3"],
      featured: false,
    },
    {
      title: "Raspberry Claw",
      description: {
        it: "AI agent self-hosted su Raspberry Pi con integrazione Factor: agent autonomo on-prem con tooling DeFi, MIT, documentazione bilingue.",
        en: "Self-hosted AI agent on Raspberry Pi with Factor integration: autonomous on-prem agent with DeFi tooling, MIT-licensed, bilingual docs.",
      },
      image: "/images/me.jpg",
      gif: null,
      categories: ["AI", "Web3"],
      featured: false,
    },
    {
      title: "Factor Discover",
      description: {
        it: "Marketplace di strategie DeFi e vault automatizzati: scopri le migliori strategie da Factor Studio o Factor SDK.",
        en: "DeFi strategy marketplace and automated vaults — find the best strategies from Factor Studio or Factor SDK.",
      },
      image: "/images/factor_discover.gif",
      gif: "/images/factor_discover.gif",
      link: "https://pro.factor.fi/",
      categories: ["DeFi", "Web3", "DAO", "Community"],
      featured: true,
    },
    {
      title: "Factor Studio",
      description: {
        it: "Middleware DeFi per strategie e vault automatizzati.",
        en: "DeFi middleware infrastructure for strategies and automated vaults.",
      },
      image: "/images/factor_studio.gif",
      gif: "/images/factor_studio.gif",
      link: "https://studio.factor.fi/",
      categories: ["DeFi", "Web3", "DAO", "Community"],
      featured: true,
    },
    {
      title: "Kwenta",
      description: {
        it: "GrantsDAO che finanzia progetti community e public goods legati a kwenta.io.",
        en: "GrantsDAO funding kwenta.io community and public-goods projects.",
      },
      image: "/images/previews/kwenta.jpg",
      gif: null,
      link: "https://kwenta.eth.limo/",
      categories: ["DeFi", "Web3", "DAO", "Community"],
      featured: true,
    },
    {
      title: "Synthetix Italia",
      description: {
        it: "Community ufficiale italiana di Synthetix.io.",
        en: "Official Italian community of Synthetix.io.",
      },
      image: "/images/synthetixitalia.jpg",
      gif: "/images/synthetixitalia.gif",
      categories: ["Web3", "DAO", "Community"],
      featured: true,
    },
    {
      title: "Jigstack",
      description: {
        it: "DeFi Umbrella multi-prodotto con l'ambizione di diventare una DAO completamente decentralizzata.",
        en: "Multi-product DeFi umbrella aiming to become a fully decentralized DAO.",
      },
      image: "/images/jigstack.jpg",
      gif: "/images/jigstack.gif",
      categories: ["DeFi", "Web3", "DAO", "Community"],
      featured: true,
    },
    {
      title: "Kwentize",
      description: {
        it: "PFP customiser di Kwenta.io.",
        en: "Kwenta.io PFP customizer.",
      },
      image: "/images/kwentize.jpg",
      gif: "/images/kwentize.gif",
      categories: ["NFT", "Web3", "Web2", "Community"],
      featured: false,
    },
    {
      title: "jWallet",
      description: {
        it: "Wallet EVM gestito da DAO.",
        en: "DAO-managed EVM wallet.",
      },
      image: "/images/wallet.jpg",
      gif: "/images/wallet.gif",
      categories: ["Web3"],
      featured: false,
    },
    {
      title: "Stakbank",
      description: {
        it: "Piattaforma di staking e governance di Jigstack.",
        en: "Jigstack staking and governance platform.",
      },
      image: "/images/stakbank.jpg",
      gif: null,
      categories: ["DeFi", "Web3", "DAO"],
      featured: false,
    },
    {
      title: "Lemonade",
      description: {
        it: "Launchpad Web3 — piattaforma di Initial Dex Offering.",
        en: "Web3 launchpad — Initial Dex Offering platform.",
      },
      image: "/images/lemonade.jpg",
      gif: null,
      categories: ["DeFi", "Web3"],
      featured: false,
    },
    {
      title: "FNDZ",
      description: {
        it: "Piattaforma DeFi di copy trading governata da DAO.",
        en: "DAO-managed DeFi copy-trading platform.",
      },
      image: "/images/fndz.jpg",
      gif: null,
      categories: ["DeFi", "Web3", "DAO"],
      featured: false,
    },
    {
      title: "FNDapp",
      description: {
        it: "Assistente di shopping online con integrazione Web3 in lavorazione.",
        en: "Online shopping assistant with in-progress Web3 integration.",
      },
      image: "/images/fndapp.jpg",
      gif: null,
      categories: ["Web2", "Web3", "Community"],
      featured: false,
    },
    {
      title: "Gallery",
      description: {
        it: "Marketplace NFT premium.",
        en: "Premium NFT marketplace.",
      },
      image: "/images/gallery.jpg",
      gif: null,
      categories: ["NFT", "Web3"],
      featured: false,
    },
    {
      title: "Santa",
      description: {
        it: "EVM crypto gifting.",
        en: "EVM crypto gifting.",
      },
      image: "/images/santa.jpg",
      gif: null,
      categories: ["NFT", "Web3", "Web2"],
      featured: false,
    },
  ],

  // -------------------------------------------------------------------------
  // Trusted by — preserved structure
  // -------------------------------------------------------------------------
  trustedBy: {
    enterprise: [
      {
        name: "Montefarmaco",
        logo: "/images/logos/montefarmaco.png",
        url: "https://www.montefarmaco.it/",
        textOnly: false,
      },
      {
        name: "Logista",
        logo: "/images/logos/logista.png",
        url: "https://www.logista.com/",
        textOnly: false,
      },
      {
        name: "Gruppo Activa",
        logo: "/images/logos/gruppo-activa.png",
        url: "https://gruppoactiva.com/",
        textOnly: false,
      },
      {
        name: "DPass",
        logo: "/images/logos/dpass.png",
        url: "https://www.dipendenze.gov.it/",
        textOnly: false,
      },
    ],
    institutions: [
      {
        name: "MIC – Ministero della Cultura",
        logo: "/images/logos/mic.svg",
        url: "https://cultura.gov.it/",
        textOnly: false,
      },
      {
        name: "Invitalia",
        logo: "/images/logos/invitalia.svg",
        url: "https://www.invitalia.it/",
        textOnly: false,
      },
      {
        name: "PNRR – Italia Domani",
        logo: "/images/logos/pnrr.svg",
        url: "https://www.italiadomani.gov.it/",
        textOnly: false,
      },
    ],
    tools: [
      {
        name: "Google Cloud",
        logo: "/images/logos/gcp.svg",
        url: "https://cloud.google.com/",
        textOnly: false,
      },
      {
        name: "Claude (Anthropic)",
        logo: "/images/logos/anthropic.svg",
        url: "https://www.anthropic.com/",
        textOnly: false,
      },
      {
        name: "Aave",
        logo: "/images/logos/aave.svg",
        url: "https://aave.com/",
        textOnly: false,
      },
    ],
  },

  // -------------------------------------------------------------------------
  // Tech stack — Tier 3 (~25-30 entries)
  // -------------------------------------------------------------------------
  techStack: [
    // Cloud
    { name: "Google Cloud Platform", category: "cloud", url: "https://cloud.google.com/", logo: "/images/logos/gcp.svg" },
    { name: "DigitalOcean", category: "cloud", url: "https://www.digitalocean.com/", logo: "/images/logos/tech/digitalocean.svg" },
    { name: "Vercel", category: "cloud", url: "https://vercel.com/", logo: "/images/logos/tech/vercel.svg" },
    { name: "Netlify", category: "cloud", url: "https://www.netlify.com/", logo: "/images/logos/tech/netlify.svg" },

    // AI
    { name: "Anthropic Claude", category: "ai", url: "https://www.anthropic.com/", logo: "/images/logos/anthropic.svg" },
    { name: "Claude Code", category: "ai", url: "https://www.anthropic.com/claude-code", logo: "/images/logos/tech/claude.svg" },
    { name: "Cursor", category: "ai", url: "https://cursor.com/", logo: "/images/logos/tech/cursor.svg" },
    { name: "OMI", category: "ai", url: "https://www.omi.me/", logo: "/images/logos/tech/omi.png" },
    { name: "DeepInfra", category: "ai", url: "https://deepinfra.com/", logo: "/images/logos/tech/deepinfra.png" },

    // Web3 protocols
    { name: "AAVE", category: "web3", url: "https://aave.com/", logo: "/images/logos/aave.svg" },
    { name: "Morpho", category: "web3", url: "https://morpho.org/", logo: "/images/logos/tech/morpho.png" },
    { name: "Balancer", category: "web3", url: "https://balancer.fi/", logo: "/images/logos/tech/balancer.svg" },
    { name: "Factor SDK", category: "web3", url: "https://factor.fi/", logo: "/images/logos/tech/factor.png" },
    { name: "LiFi", category: "web3", url: "https://li.fi/", logo: "/images/logos/tech/lifi.svg" },
    { name: "Privy", category: "web3", url: "https://www.privy.io/", logo: "/images/logos/tech/privy.png" },
    { name: "Algorand", category: "web3", url: "https://www.algorand.com/", logo: "/images/logos/tech/algorand.svg" },
    { name: "AlgoKit", category: "web3", url: "https://github.com/algorandfoundation/algokit", logo: "/images/logos/tech/algokit.png" },
    { name: "Pera Wallet", category: "web3", url: "https://perawallet.app/", logo: "/images/logos/tech/perawallet.png" },
    { name: "IPFS", category: "web3", url: "https://ipfs.tech/", logo: "/images/logos/tech/ipfs.svg" },
    { name: "Crust Network", category: "web3", url: "https://crust.network/", logo: "/images/logos/tech/crust.png" },

    // Database
    { name: "MongoDB", category: "database", url: "https://www.mongodb.com/", logo: "/images/logos/tech/mongodb.svg" },
    { name: "Postgres", category: "database", url: "https://www.postgresql.org/", logo: "/images/logos/tech/postgres.svg" },
    { name: "Drizzle", category: "database", url: "https://orm.drizzle.team/", logo: "/images/logos/tech/drizzle.svg" },
    { name: "Neo4j", category: "database", url: "https://neo4j.com/", logo: "/images/logos/tech/neo4j.svg" },
    { name: "MINIO", category: "database", url: "https://min.io/", logo: "/images/logos/tech/minio.svg" },

    // Frontend
    { name: "Next.js", category: "frontend", url: "https://nextjs.org/", logo: "/images/logos/tech/next-js.svg" },
    { name: "React", category: "frontend", url: "https://react.dev/", logo: "/images/logos/tech/react.svg" },
    { name: "TypeScript", category: "frontend", url: "https://www.typescriptlang.org/", logo: "/images/logos/tech/typescript.svg" },
    { name: "Tailwind CSS", category: "frontend", url: "https://tailwindcss.com/", logo: "/images/logos/tech/tailwind-css.svg" },

    // Backend
    { name: "Node.js", category: "backend", url: "https://nodejs.org/", logo: "/images/logos/tech/node-js.svg" },
    { name: "Express", category: "backend", url: "https://expressjs.com/", logo: "/images/logos/tech/express.svg" },
    { name: "Rust", category: "backend", url: "https://www.rust-lang.org/", logo: "/images/logos/tech/rust.svg" },

    // DevOps
    { name: "Docker", category: "devops", url: "https://www.docker.com/", logo: "/images/logos/tech/docker.svg" },
    { name: "GitHub", category: "devops", url: "https://github.com/", logo: "/images/logos/tech/github.svg" },

    // Tools
    { name: "Linear", category: "tools", url: "https://linear.app/", logo: "/images/logos/tech/linear.svg" },
    { name: "Resend", category: "tools", url: "https://resend.com/", logo: "/images/logos/tech/resend.svg" },
    { name: "Stripe", category: "tools", url: "https://stripe.com/", logo: "/images/logos/tech/stripe.svg" },
    { name: "Coinbase CDP", category: "tools", url: "https://www.coinbase.com/developer-platform", logo: "/images/logos/tech/coinbase.svg" },
  ],

  // -------------------------------------------------------------------------
  // Stats — 4 entries with real numbers
  // -------------------------------------------------------------------------
  stats: [
    {
      value: "5.5M+",
      label: {
        it: "Documenti MongoDB in produzione",
        en: "MongoDB documents in production",
      },
      caption: {
        it: "Cluster live di Haelias, multi-tenant",
        en: "Live Haelias cluster, multi-tenant",
      },
    },
    {
      value: "70%",
      label: {
        it: "Riduzione footprint indici",
        en: "Index footprint reduction",
      },
      caption: {
        it: "1.69 GB → 369 MB, upgrade da €1.260/anno evitato",
        en: "1.69 GB -> 369 MB, €1,260/year upgrade avoided",
      },
    },
    {
      value: "11",
      label: {
        it: "Workspace in 5 settimane",
        en: "Workspaces in 5 weeks",
      },
      caption: {
        it: "Mandate.Finance · 1.300+ commit, ~140k LOC",
        en: "Mandate.Finance · 1,300+ commits, ~140k LOC",
      },
    },
    {
      value: "5+",
      label: {
        it: "Domini di lavoro paralleli",
        en: "Domains running in parallel",
      },
      caption: {
        it: "Blockchain · Government · Web3 · AI · Logistics · Pharma B2B ",
        en: "Blockchain · Government · Web3 · AI · Logistics · Pharma B2B ",
      },
    },
  ],

  // -------------------------------------------------------------------------
  // Languages
  // -------------------------------------------------------------------------
  languages: [
    { name: "Italian", level: 100 },
    { name: "English", level: 80 },
    { name: "Spanish", level: 50 },
    { name: "Chinese", level: 25 },
  ],
};
