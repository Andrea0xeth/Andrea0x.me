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
      it: "Principal Engineer + IT Architect + AI Builder. Costruisco e gestisco sistemi IT complessi end-to-end attraverso domini diversi: B2B SaaS pharma in produzione, DeFi multi-agent, dati pubblici italiani.",
      en: "Principal Engineer + IT Architect + AI Builder. I design, build and run complex IT systems end-to-end across multiple domains: production B2B pharma SaaS, multi-agent DeFi, Italian government data products.",
    },
    longBio: {
      it: "Sono Andrea — imprenditore tecnico ibrido. Principal Engineer + IT Architect + AI Builder, con ownership end-to-end di sistemi IT complessi su domini multipli.\n\nTraditional software development: 6+ anni di full-stack senior. Su Haelias sono Solo CTO di una piattaforma B2B di procurement digitale per farmacie italiane in produzione attiva, con 5.5M+ documenti MongoDB, 30k+ prodotti multi-tenant, clienti enterprise come Montefarmaco e Logista SPA. Stack: React 19 + Node + Rust + MongoDB + DigitalOcean. Caso emblematico: riduzione 70% size indici in produzione live (1.69 GB -> 369 MB) evitando un upgrade da +€1.260/anno.\n\nAI engineering: su Mandate.Finance sono Founding Product Engineer e Technical Co-founder. Ho costruito un sistema con 11 componenti microservizi (ui, backend, agent-executor, agent-tester, mcp-gateway, signing-service, jobs, contracts, landing, infra, docs). Architettura multi-agent (evaluator/researcher/manager/executor) con memoria a lungo termine, MCP gateway per l'integrazione LLM<->blockchain, parsing LLM di documenti per data ingestion.\n\nAI-native workflow: tratto Claude Code come moltiplicatore strategico — multi-agent parallel dispatch, code review automation, multi-repo deploy orchestration, conversation->PRD pipeline. Top-decile workflow.\n\nCloud / DevOps: gestisco infrastructure su due piattaforme (GCP per Mandate, DigitalOcean per Haelias) senza supporto DevOps dedicato. Cloud Run, Cloud SQL private + VPC, Secret Manager, App Platform, Managed MongoDB, Vercel, Netlify, Docker. Runbook self-authored.\n\nWeb3 / Blockchain: smart contract integration multi-chain (Ethereum, Base, Arbitrum), ERC-4626, EIP-7702, account abstraction, cross-chain via LiFi, integrazione protocolli (AAVE, Morpho, Balancer, Factor SDK).\n\nIT management & digitalizzazione: trasformo workflow tradizionali in flussi digitali end-to-end. Coordino team distribuiti su più progetti in parallelo.\n\nBusiness strategy: revenue modeling Excel, SWOT, business plan, cap table, fundraising, pitch deck, GTM strategy.\n\nSu DPass / PNRR sono architect e proposal lead di 6 blockchain data product per MIC e Invitalia, coordinando un team multi-disciplinare.\n\nNon sono un PM che delega il tech, né un dev che ignora il business. Sono uno dei pochi che può disegnare un sistema, costruirlo, gestirne la complessità IT e poi venderlo. Italiano nativo, lavoro con team internazionali in inglese.",
      en: "I'm Andrea — a hybrid technical founder. Principal Engineer + IT Architect + AI Builder, with end-to-end ownership of complex IT systems across multiple domains.\n\nTraditional software development: 6+ years of senior full-stack work. On Haelias I'm the Solo CTO of a B2B digital procurement platform for Italian pharmacies, running in production with 5.5M+ MongoDB documents, 30k+ multi-tenant products, and enterprise clients like Montefarmaco and Logista SPA. Stack: React 19 + Node + Rust + MongoDB + DigitalOcean. A flagship example: a 70% reduction in index footprint on the live cluster (1.69 GB -> 369 MB), avoiding a €1,260/year cluster upgrade.\n\nAI engineering: on Mandate.Finance I'm the Founding Product Engineer and Technical Co-founder. I built a system with 11 microservice components (ui, backend, agent-executor, agent-tester, mcp-gateway, signing-service, jobs, contracts, landing, infra, docs). Multi-agent architecture (evaluator/researcher/manager/executor) with long-term memory, MCP gateway bridging LLMs and blockchain tools, and LLM-based document parsing for data ingestion.\n\nAI-native workflow: I treat Claude Code as a strategic multiplier — multi-agent parallel dispatch, code-review automation, multi-repo deploy orchestration, conversation-to-PRD pipeline. Top-decile workflow.\n\nCloud / DevOps: I run infrastructure across two platforms (GCP for Mandate, DigitalOcean for Haelias) without dedicated DevOps support. Cloud Run, Cloud SQL private + VPC, Secret Manager, App Platform, Managed MongoDB, Vercel, Netlify, Docker. Self-authored runbooks.\n\nWeb3 / Blockchain: multi-chain smart-contract integration (Ethereum, Base, Arbitrum), ERC-4626, EIP-7702, account abstraction, cross-chain via LiFi, protocol integrations (AAVE, Morpho, Balancer, Factor SDK).\n\nIT management & digitalization: I turn traditional workflows into end-to-end digital flows and coordinate distributed teams across several parallel projects.\n\nBusiness strategy: Excel revenue modeling, SWOT, business plan, cap table, fundraising, pitch deck, GTM.\n\nOn DPass / PNRR I'm the architect and proposal lead for 6 blockchain data products for MIC and Invitalia, coordinating a multi-disciplinary team.\n\nI'm not a PM who delegates the tech, nor a dev who ignores the business. I'm one of the few who can design a system, build it, manage the IT complexity and then sell it. Italian native; I work with international teams in English.",
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
        "AI Builder — multi-agent, MCP, LLM integration",
        "Founding Product Engineer @ Mandate.Finance",
        "Solo CTO @ Haelias — 5.5M+ documenti in produzione",
        "Architetto blockchain data products per il settore pubblico",
        "Cloud ops senza DevOps dedicato — GCP + DigitalOcean",
        "Generalista by design, specialista dove serve",
      ],
      en: [
        "Principal Engineer & IT Architect",
        "AI Builder — multi-agent, MCP, LLM integration",
        "Founding Product Engineer @ Mandate.Finance",
        "Solo CTO @ Haelias — 5.5M+ docs in production",
        "Blockchain data products for the public sector",
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
            it: "Endpoint Express custom",
            en: "Custom Express endpoints",
          },
          value: "50+",
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
        it: "Costruisco sistemi AI in produzione: multi-agent autonomi, MCP gateway, LLM integration.",
        en: "I build production AI systems: autonomous multi-agent runtimes, MCP gateways, LLM integration.",
      },
      metrics: [
        {
          label: {
            it: "Microservizi su Mandate in 5 settimane",
            en: "Microservices shipped on Mandate in 5 weeks",
          },
          value: "11",
        },
        {
          label: {
            it: "Architettura multi-agent",
            en: "Multi-agent architecture",
          },
          value: "evaluator / researcher / manager / executor",
        },
      ],
      tags: [
        "Multi-agent architecture",
        "MCP gateway",
        "LLM integration",
        "Long-term memory",
        "Anthropic Claude",
        "DeepInfra",
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
        it: "Smart contract integration multi-chain, vault ERC-4626, account abstraction, gasless UX.",
        en: "Multi-chain smart-contract integration, ERC-4626 vaults, account abstraction, gasless UX.",
      },
      metrics: [
        {
          label: {
            it: "Chain integrate",
            en: "Chains integrated",
          },
          value: "Ethereum + Base + Arbitrum",
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
        "Privy",
        "Wagmi / viem",
        "Foundry",
        "LiFi",
        "Solidity",
        "Subgraph",
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
          value: "Mandate rep · Gnosis Pay integration",
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
      title: "Haelias / SixSteps",
      domain: {
        it: "B2B SaaS · Procurement Pharma",
        en: "B2B SaaS · Pharma Procurement",
      },
      role: {
        it: "Solo CTO / Principal Engineer",
        en: "Solo CTO / Principal Engineer",
      },
      period: "2022 – present",
      status: "production",
      clients: ["Montefarmaco", "Logista SPA"],
      problem: {
        it: "Le farmacie italiane gestiscono il procurement con telefonate, email e fax verso più grossisti, contrattando i prezzi a voce e riconciliando manualmente bolle e fatture. Servono catalog real-time multi-fornitore, ODA digitali, audit trail compliance-grade e UX safety per ordini high-value.",
        en: "Italian pharmacies handle procurement through phone calls, emails and faxes to multiple wholesalers, negotiate prices verbally and reconcile invoices by hand. They need a real-time multi-supplier catalog, digital purchase orders, compliance-grade audit trails and safety UX for high-value orders.",
      },
      architecture: {
        it: "Stack production end-to-end su 4+ repo con multi-environment workflow: backend Express + TypeScript (50+ endpoint), UI React 19 + Tailwind + MUI 7, landing Vite, worker Rust + Tokio per ingestion da Farmadati. MongoDB Managed con 5.5M+ documenti, schema multi-tenant a 5 ruoli RBAC, custom search engine (substring + multi-EAN + relevance scoring), state machine ODA con sub-ordini cascading e counter-offer audit trail. Bridge bidirezionale UI <-> Discord per il customer support real-time.",
        en: "End-to-end production stack across 4+ repos with multi-environment workflow: Express + TypeScript backend (50+ endpoints), React 19 + Tailwind + MUI 7 UI, Vite landing, Rust + Tokio worker ingesting Farmadati. Managed MongoDB with 5.5M+ documents, multi-tenant 5-role RBAC schema, a custom search engine (substring + multi-EAN + relevance scoring), an ODA state machine with cascading sub-orders and counter-offer audit trail, plus a real-time UI<->Discord bridge for customer support.",
      },
      decisions: [
        {
          title: {
            it: "Cluster upgrade vs ottimizzazione indici",
            en: "Cluster upgrade vs index optimization",
          },
          body: {
            it: "Diagnosticato il root cause via cache pressure analysis e drop+recreate degli indici in produzione live: 70% di footprint in meno (1.69 GB -> 369 MB), cluster $15/mese sufficiente, evitato l'upgrade da +€1.260/anno.",
            en: "Diagnosed the root cause through WiredTiger cache-pressure analysis, then dropped and recreated indexes on the live cluster: 70% footprint reduction (1.69 GB -> 369 MB), $15/month cluster kept, $1,260/year upgrade avoided.",
          },
        },
        {
          title: {
            it: "Worker ingestion in Rust + Tokio",
            en: "Rust + Tokio ingestion worker",
          },
          body: {
            it: "Per il sync continuo del database canonical Farmadati ho scelto Rust + Tokio invece di Node: throughput stabile, memoria prevedibile, latenza <1s tra upload supply e visibilità nel catalogo Discover.",
            en: "For the continuous Farmadati sync I picked Rust + Tokio over Node: stable throughput, predictable memory, <1s latency between supply upload and visibility in the Discover catalog.",
          },
        },
        {
          title: {
            it: "Privacy-by-design tra supplier e buyer",
            en: "Privacy-by-design between supplier and buyer",
          },
          body: {
            it: "Layer stripSupplierDataForBuyer che sanifica i dati admin/supplier prima di esporli al buyer; counter-offer state machine tracciabile (requested -> admin_absorbed | sent_to_supplier -> supplier_responded -> resolved) con originalNetPrice e absorbedNetPrice separati.",
            en: "A stripSupplierDataForBuyer layer sanitizes admin/supplier data before exposing it to buyers; the counter-offer state machine (requested -> admin_absorbed | sent_to_supplier -> supplier_responded -> resolved) keeps originalNetPrice and absorbedNetPrice strictly separated.",
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
            it: "Prodotti attivi multi-tenant",
            en: "Active multi-tenant products",
          },
          value: "30k+",
        },
        {
          label: {
            it: "Prodotti in stock cross-supplier",
            en: "Cross-supplier in-stock products",
          },
          value: "14k+",
        },
        {
          label: {
            it: "Riduzione size indici",
            en: "Index footprint reduction",
          },
          value: "70%",
        },
        {
          label: {
            it: "Latenza upload supply -> catalogo",
            en: "Upload-to-catalog latency",
          },
          value: "<1s",
        },
      ],
      techStack: [
        "Express",
        "TypeScript",
        "React 19",
        "Tailwind",
        "MUI 7",
        "Vite",
        "Rust + Tokio",
        "MongoDB",
        "DigitalOcean App Platform",
        "Vercel",
        "Discord Bot API",
        "ExcelJS",
        "PDFKit",
        "Resend",
      ],
      pillarsTouched: ["traditional-dev", "cloud-devops", "it-mgmt"],
      image: "/images/logos/montefarmaco.png",
      featured: true,
    },
    {
      slug: "mandate",
      title: "Mandate.Finance",
      domain: {
        it: "DeFi + AI multi-agent",
        en: "DeFi + AI multi-agent",
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
        it: "Monorepo con 11 componenti (ui, backend, agent-executor, agent-tester, mcp-gateway, signing-service, jobs, contracts, landing, infra, docs). Architettura multi-agent (evaluator + researcher + manager + executor) con memoria a lungo termine. MCP gateway separa il ragionamento (LLM) dalle letture on-chain dal signing-service che esegue le scritture. Smart contracts in Foundry, multi-chain Ethereum + Base + Arbitrum, cross-chain via LiFi. Cloud Run + Cloud SQL privato + VPC + Secret Manager su GCP.",
        en: "Monorepo with 11 components (ui, backend, agent-executor, agent-tester, mcp-gateway, signing-service, jobs, contracts, landing, infra, docs). Multi-agent architecture (evaluator + researcher + manager + executor) with long-term memory. The MCP gateway separates reasoning (LLM) from on-chain reads, while the signing-service handles writes. Foundry smart contracts, multi-chain across Ethereum + Base + Arbitrum, cross-chain via LiFi. GCP infra: Cloud Run + private Cloud SQL + VPC + Secret Manager.",
      },
      decisions: [
        {
          title: {
            it: "Multi-provider LLM con Gemma low-cost",
            en: "Multi-provider LLM with low-cost Gemma",
          },
          body: {
            it: "Astrazione multi-provider (DeepInfra/Gemma per costi, OpenRouter come backup, Anthropic premium). Gemma scelto per agent autonomi: cost-driven, non capability-driven. DeepInfra ~3x più economico di OpenRouter.",
            en: "Multi-provider abstraction (DeepInfra/Gemma for cost, OpenRouter as backup, Anthropic premium). Gemma was the choice for autonomous agents: cost-driven, not capability-driven. DeepInfra is ~3x cheaper than OpenRouter.",
          },
        },
        {
          title: {
            it: "MCP gateway per separare reasoning ed esecuzione",
            en: "MCP gateway to separate reasoning and execution",
          },
          body: {
            it: "Componente dedicato che espone tool blockchain (read state, simulate, fetch market data) come MCP server. L'agent ragiona, MCP esegue letture, signing-service esegue scritture: separation of concerns netta e auditabile.",
            en: "A dedicated component exposes blockchain tools (read state, simulate, fetch market data) as an MCP server. The agent reasons, MCP performs reads, the signing-service performs writes — clean and auditable separation of concerns.",
          },
        },
        {
          title: {
            it: "agent-tester come gate di deploy",
            en: "agent-tester as a deploy gate",
          },
          body: {
            it: "Quality assurance dedicata per output non-deterministici LLM, validation di policy compliance (l'agent rispetta i bound della risk × strategy matrix?), regression detection prima del deploy in produzione.",
            en: "A dedicated QA layer for non-deterministic LLM output: policy-compliance validation (does the agent stay within the risk × strategy matrix?) and regression detection before production deploy.",
          },
        },
        {
          title: {
            it: "UX gasless con self-custody",
            en: "Gasless UX with self-custody",
          },
          body: {
            it: "Privy + EIP-7702 sponsored transactions + account abstraction: l'utente non vede mai una private key e non paga gas, mantenendo self-custody. Cross-chain via LiFi percepito come operazione singola.",
            en: "Privy + EIP-7702 sponsored transactions + account abstraction: users never touch a private key and never pay gas, while keeping self-custody. Cross-chain via LiFi feels like a single operation.",
          },
        },
      ],
      results: [
        {
          label: {
            it: "Componenti microservizi production-deployed",
            en: "Microservice components production-deployed",
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
          value: "1,500+",
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
          value: "93%",
        },
      ],
      techStack: [
        "Next.js 15",
        "React 19",
        "TypeScript",
        "Tailwind",
        "Privy",
        "Wagmi / viem",
        "Foundry",
        "Solidity",
        "Express",
        "Drizzle",
        "Postgres",
        "GCP Cloud Run",
        "Cloud SQL",
        "Secret Manager",
        "DeepInfra",
        "Anthropic",
        "LiFi",
        "Subgraph",
      ],
      pillarsTouched: ["traditional-dev", "ai-eng", "cloud-devops", "web3", "it-mgmt", "business"],
      image: "/images/factor_studio.gif",
      featured: true,
    },
    {
      slug: "dpass",
      title: "DPass / PNRR",
      domain: {
        it: "Settore pubblico italiano · Blockchain data products",
        en: "Italian public sector · Blockchain data products",
      },
      role: {
        it: "Architect / Technical Lead / Proposal Lead",
        en: "Architect / Technical Lead / Proposal Lead",
      },
      period: "2024 – 2025",
      status: "active",
      clients: ["MIC – Ministero della Cultura", "Invitalia", "PNRR"],
      problem: {
        it: "Il PNRR italiano ha bisogno di prodotti dati basati su blockchain integrati con l'identity governativa (IPAC, ArchCertify, OAuth2). Servono proposte tecniche solide, capacità di interfacciarsi con autorità pubbliche e team multi-disciplinari.",
        en: "The Italian PNRR needs blockchain-based data products integrated with government identity (IPAC, ArchCertify, OAuth2). It requires solid technical proposals, the ability to interface with public authorities, and multi-disciplinary team coordination.",
      },
      architecture: {
        it: "DPass API e piattaforma per costruire prodotti su infrastruttura pubblica blockchain. IPAC certification + ArchCertify integration come livello di trust governativo. OAuth2 governativo per identity management con autorità pubbliche. Coordinamento di team deliverable (Marco, Serena, Flavio, Gianluca) lato proposal e architecture.",
        en: "DPass APIs and platform for building products on public blockchain infrastructure. IPAC certification + ArchCertify integration provide the government trust layer. Government OAuth2 for identity management with public authorities. Cross-functional team coordination (Marco, Serena, Flavio, Gianluca) on the proposal and architecture side.",
      },
      decisions: [
        {
          title: {
            it: "Architettura blockchain-as-a-substrate, non blockchain-as-a-product",
            en: "Blockchain as substrate, not product",
          },
          body: {
            it: "Le proposte trattano la blockchain come livello di garanzia auditabile per dati pubblici, non come token-driven product. Riduce frizione regolatoria e accelera l'approval.",
            en: "Proposals treat blockchain as an auditable guarantee layer for public data, not as a token-driven product. Lower regulatory friction, faster approval.",
          },
        },
        {
          title: {
            it: "Identity governativa come prerequisito",
            en: "Government identity as a prerequisite",
          },
          body: {
            it: "OAuth2 governativo + IPAC + ArchCertify dal giorno uno: ogni prodotto si aggancia all'identità nazionale, evitando bypass tecnici inaccettabili per il settore pubblico.",
            en: "Government OAuth2 + IPAC + ArchCertify from day one: every product hooks into national identity, avoiding technical bypasses unacceptable for the public sector.",
          },
        },
      ],
      results: [
        {
          label: {
            it: "Blockchain data product proposti",
            en: "Blockchain data products proposed",
          },
          value: "6",
        },
        {
          label: {
            it: "Enti pubblici coinvolti",
            en: "Public-sector bodies engaged",
          },
          value: "MIC + Invitalia",
        },
        {
          label: {
            it: "Team deliverable coordinato",
            en: "Delivery team coordinated",
          },
          value: "4 persone",
        },
      ],
      techStack: [
        "Blockchain data products",
        "OAuth2",
        "IPAC",
        "ArchCertify",
        "Identity management",
        "Public-sector procurement",
      ],
      pillarsTouched: ["it-mgmt", "web3", "business"],
      image: "/images/logos/pnrr.svg",
      featured: true,
    },
    {
      slug: "factor",
      title: "Factor",
      domain: {
        it: "DeFi · Vault infrastructure",
        en: "DeFi · Vault infrastructure",
      },
      role: {
        it: "Founding Engineer (precedente)",
        en: "Founding Engineer (previous)",
      },
      period: "2023 – 2024",
      status: "completed",
      problem: {
        it: "Costruire l'infrastruttura per un marketplace di strategie DeFi e vault automatizzati: backend, jobs schedulati, signing-service e UI per strategy creator e community.",
        en: "Build the infrastructure for a DeFi strategy marketplace and automated vaults: backend, scheduled jobs, signing-service and UI for strategy creators and the community.",
      },
      architecture: {
        it: "Backend orientato ai vault, layer di jobs per execution schedulata, signing-service separato per la sicurezza delle scritture on-chain, UI per la gestione delle strategie. Reference codebase tuttora attivo per pattern Web3 e ERC-4626.",
        en: "Vault-oriented backend, scheduled jobs layer for execution, separate signing-service to secure on-chain writes, UI for strategy management. Still an active reference codebase for Web3 and ERC-4626 patterns.",
      },
      decisions: [
        {
          title: {
            it: "Signing-service isolato",
            en: "Isolated signing-service",
          },
          body: {
            it: "Le chiavi private restano in un servizio separato con secret management dedicato: superficie di attacco minima, audit semplificato.",
            en: "Private keys live in an isolated service with dedicated secret management: minimal attack surface, simpler audit.",
          },
        },
        {
          title: {
            it: "Strategy templates riusabili",
            en: "Reusable strategy templates",
          },
          body: {
            it: "Mix-and-match building blocks per la community: l'utente compone strategie senza scrivere contratti, sfruttando primitive verificate.",
            en: "Mix-and-match building blocks for the community: users compose strategies without writing contracts, leveraging vetted primitives.",
          },
        },
      ],
      results: [
        {
          label: {
            it: "Tipologia codebase",
            en: "Codebase type",
          },
          value: "Reference attivo per pattern ERC-4626",
        },
        {
          label: {
            it: "Componenti owned",
            en: "Owned components",
          },
          value: "Backend · Jobs · Signing-service · UI",
        },
      ],
      techStack: [
        "Solidity",
        "ERC-4626",
        "TypeScript",
        "Node.js",
        "Express",
        "React",
        "Wagmi",
        "Foundry",
      ],
      pillarsTouched: ["traditional-dev", "web3"],
      image: "/images/factor_studio.gif",
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
        it: "Founding engineer di una piattaforma DeFi multi-agent: 11 componenti microservizi production-deployed in 5 settimane (1.500+ commit, ~140k LOC). Architettura multi-agent con memoria a lungo termine, MCP gateway, agent-tester, signing-service. Multi-chain (Ethereum + Base + Arbitrum) con UX gasless via Privy + EIP-7702.",
        en: "Founding engineer of a multi-agent DeFi platform: 11 production-deployed microservices in 5 weeks (1,500+ commits, ~140k LOC). Multi-agent architecture with long-term memory, MCP gateway, agent-tester, signing-service. Multi-chain (Ethereum + Base + Arbitrum) with gasless UX via Privy + EIP-7702.",
      },
      logo: "/images/factor_studio.gif",
    },
    {
      company: "Haelias / SixSteps",
      position: {
        it: "Solo CTO / Principal Engineer",
        en: "Solo CTO / Principal Engineer",
      },
      period: "2022 – Present",
      type: { it: "Full Time", en: "Full Time" },
      description: {
        it: "Solo CTO di un B2B SaaS pharma in produzione attiva (Montefarmaco, Logista SPA): 5.5M+ documenti MongoDB, 30k+ prodotti multi-tenant. Architettura end-to-end (BE Express + UI React 19 + worker Rust), 70% riduzione size indici live evitando upgrade da +€1.260/anno, custom search engine, modal warning per ordini €250k–€1M+.",
        en: "Solo CTO of a live B2B pharma SaaS (Montefarmaco, Logista SPA): 5.5M+ MongoDB documents, 30k+ multi-tenant products. End-to-end architecture (Express BE + React 19 UI + Rust worker), 70% live index footprint reduction avoiding a €1,260/year upgrade, custom search engine, modal warnings for €250k–€1M+ orders.",
      },
      logo: "/images/me.jpg",
    },
    {
      company: "DPass / PNRR",
      position: {
        it: "Architect / Technical Lead",
        en: "Architect / Technical Lead",
      },
      period: "2024 – 2025",
      type: { it: "Lead Tecnico", en: "Technical Lead" },
      description: {
        it: "Architettato e proposto 6 blockchain data product per il PNRR italiano (MIC/Invitalia). Technical due diligence + architecture design + proposal lead. Coordinamento team (Marco, Serena, Flavio, Gianluca). IPAC certification + ArchCertify + OAuth2 governativo.",
        en: "Architected and proposed 6 blockchain data products for the Italian PNRR (MIC/Invitalia). Technical due diligence, architecture design and proposal lead. Cross-functional team coordination (Marco, Serena, Flavio, Gianluca). IPAC certification + ArchCertify + government OAuth2.",
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
        "Multi-Agent Architecture",
        "LLM Integration",
        "MCP Gateway",
        "Agent Testing",
        "Long-term Memory",
        "Real-time Oversight",
        "Prompt Engineering",
        "Multi-provider LLM",
        "DeepInfra",
        "Anthropic",
        "OpenRouter",
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
        "Privy",
        "Wagmi",
        "viem",
        "ERC-4626",
        "EIP-7702",
        "ERC-7821",
        "ERC-2612",
        "UUPS Proxies",
        "Foundry",
        "Solidity",
        "LiFi",
        "Alchemy",
        "AAVE",
        "Morpho",
        "Balancer",
        "Factor SDK",
        "Account Abstraction",
        "Subgraph",
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
        "PNRR",
        "DPass",
        "IPAC",
        "ArchCertify",
        "OAuth2 Governativo",
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
        it: "Costruisco sistemi AI in produzione: multi-agent, MCP gateway, LLM integration, agent-tester, prompt engineering production-grade.",
        en: "I build production AI systems: multi-agent, MCP gateways, LLM integration, agent-testers, production-grade prompt engineering.",
      },
      bulletPoints: {
        it: [
          "Multi-agent architecture (evaluator/researcher/manager/executor)",
          "MCP gateway tra LLM e tool esterni",
          "Subscription/credit engine per agent autonomi",
          "Quality assurance su output non-deterministici",
        ],
        en: [
          "Multi-agent architecture (evaluator/researcher/manager/executor)",
          "MCP gateway between LLMs and external tools",
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
        it: "Integrazione smart contract multi-chain con UX gasless, account abstraction e protocollo audit-ready.",
        en: "Multi-chain smart-contract integration with gasless UX, account abstraction and audit-ready protocols.",
      },
      bulletPoints: {
        it: [
          "ERC-4626 vault e EIP-7702 sponsored tx",
          "Cross-chain via LiFi e Subgraph indexing",
          "Privy + Wagmi + viem stack",
          "Signing-service isolato",
        ],
        en: [
          "ERC-4626 vaults and EIP-7702 sponsored tx",
          "Cross-chain via LiFi and Subgraph indexing",
          "Privy + Wagmi + viem stack",
          "Isolated signing-service",
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
        it: "B2B SaaS pharma in produzione: 5.5M+ documenti MongoDB, 30k+ prodotti multi-tenant, clienti enterprise (Montefarmaco, Logista SPA).",
        en: "Production B2B pharma SaaS: 5.5M+ MongoDB documents, 30k+ multi-tenant products, enterprise clients (Montefarmaco, Logista SPA).",
      },
      image: "/images/logos/montefarmaco.png",
      gif: null,
      categories: ["B2B SaaS", "Enterprise", "Web2", "AI"],
      featured: true,
    },
    {
      title: "Mandate.Finance",
      description: {
        it: "Piattaforma DeFi con agent AI autonomi: 11 microservizi production-deployed in 5 settimane, multi-chain, gasless UX.",
        en: "DeFi platform with autonomous AI agents: 11 production-deployed microservices in 5 weeks, multi-chain, gasless UX.",
      },
      image: "/images/factor_studio.gif",
      gif: "/images/factor_studio.gif",
      categories: ["DeFi", "Web3", "AI", "Enterprise"],
      featured: true,
    },
    {
      title: "DPass / PNRR",
      description: {
        it: "6 blockchain data product proposals per il PNRR italiano (MIC/Invitalia). IPAC + ArchCertify + OAuth2 governativo.",
        en: "6 blockchain data product proposals for the Italian PNRR (MIC/Invitalia). IPAC + ArchCertify + government OAuth2.",
      },
      image: "/images/logos/pnrr.svg",
      gif: null,
      categories: ["Government", "Web3", "Enterprise"],
      featured: true,
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
      image: "/images/kwenta.jpg",
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
        logo: "",
        url: "",
        textOnly: true,
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
    { name: "Google Cloud Platform", category: "cloud", url: "https://cloud.google.com/" },
    { name: "DigitalOcean", category: "cloud", url: "https://www.digitalocean.com/" },
    { name: "Vercel", category: "cloud", url: "https://vercel.com/" },
    { name: "Netlify", category: "cloud", url: "https://www.netlify.com/" },

    // AI
    { name: "Anthropic Claude", category: "ai", url: "https://www.anthropic.com/" },
    { name: "Claude Code", category: "ai", url: "https://www.anthropic.com/claude-code" },
    { name: "Cursor", category: "ai", url: "https://cursor.com/" },
    { name: "OMI", category: "ai", url: "https://www.omi.me/" },
    { name: "DeepInfra", category: "ai", url: "https://deepinfra.com/" },

    // Web3 protocols
    { name: "AAVE", category: "web3", url: "https://aave.com/" },
    { name: "Morpho", category: "web3", url: "https://morpho.org/" },
    { name: "Balancer", category: "web3", url: "https://balancer.fi/" },
    { name: "Factor SDK", category: "web3", url: "https://factor.fi/" },
    { name: "LiFi", category: "web3", url: "https://li.fi/" },
    { name: "Privy", category: "web3", url: "https://www.privy.io/" },

    // Database
    { name: "MongoDB", category: "database", url: "https://www.mongodb.com/" },
    { name: "Postgres", category: "database", url: "https://www.postgresql.org/" },
    { name: "Drizzle", category: "database", url: "https://orm.drizzle.team/" },

    // Frontend
    { name: "Next.js", category: "frontend", url: "https://nextjs.org/" },
    { name: "React", category: "frontend", url: "https://react.dev/" },
    { name: "TypeScript", category: "frontend", url: "https://www.typescriptlang.org/" },
    { name: "Tailwind CSS", category: "frontend", url: "https://tailwindcss.com/" },

    // Backend
    { name: "Node.js", category: "backend", url: "https://nodejs.org/" },
    { name: "Express", category: "backend", url: "https://expressjs.com/" },
    { name: "Rust", category: "backend", url: "https://www.rust-lang.org/" },

    // DevOps
    { name: "Docker", category: "devops", url: "https://www.docker.com/" },
    { name: "GitHub", category: "devops", url: "https://github.com/" },

    // Tools
    { name: "Linear", category: "tools", url: "https://linear.app/" },
    { name: "Resend", category: "tools", url: "https://resend.com/" },
    { name: "Stripe", category: "tools", url: "https://stripe.com/" },
    { name: "Coinbase CDP", category: "tools", url: "https://www.coinbase.com/developer-platform" },
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
        it: "Microservizi in 5 settimane",
        en: "Microservices in 5 weeks",
      },
      caption: {
        it: "Mandate.Finance · 1.500+ commit, ~140k LOC",
        en: "Mandate.Finance · 1,500+ commits, ~140k LOC",
      },
    },
    {
      value: "5+",
      label: {
        it: "Domini di lavoro paralleli",
        en: "Domains running in parallel",
      },
      caption: {
        it: "Pharma B2B · DeFi · Government · Web3 · AI",
        en: "Pharma B2B · DeFi · Government · Web3 · AI",
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
