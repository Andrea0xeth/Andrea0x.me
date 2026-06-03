import type { PillarId } from './types';

/**
 * Role-tailored CV profiles.
 *
 * Each profile overrides the headline, summary, pillar order, featured-project
 * order, and the sidebar "focus" list — so the same `portfolioData` can render
 * a CV tuned to a specific job application without duplicating content.
 *
 * Consumed by `/api/cv?profile=<id>` and `<CVDocument profile={...} />`.
 */
export interface CVCustomPillar {
  title: { it: string; en: string };
  summary: { it: string; en: string };
  tags: string[];
}

export interface CVProfile {
  id: string;
  /** Replaces taglines.primary in the header. */
  headline: { it: string; en: string };
  /** Replaces personal.shortBio in the Profile section. */
  summary: { it: string; en: string };
  /** Ordered subset of pillar ids to show (others are hidden). Ignored if customPillars is set. */
  pillarOrder: PillarId[];
  /** Fully custom pillar list — overrides portfolio pillars for role-specific framing. */
  customPillars?: CVCustomPillar[];
  /** Ordered case-study slugs to feature (others hidden). */
  featuredSlugs: string[];
  /** Sidebar "Focus" list — replaces the consulting "Available for" + rate block. */
  focus: { it: string[]; en: string[] };
  /** Short suffix appended to the download filename, e.g. "Tether_TPM". */
  filenameTag: string;
}

export const cvProfiles: Record<string, CVProfile> = {
  'tether-tpm': {
    id: 'tether-tpm',
    filenameTag: 'Tether_TPM',
    headline: {
      it: 'Technical Product Manager · AI Dev Tools, SDK & MCP · Founding Engineer',
      en: 'Technical Product Manager · AI Dev Tools, SDKs & MCP · Founding Engineer',
    },
    summary: {
      it: "Technical Product Manager e Founding Engineer che costruisce gli strumenti per developer, non solo la roadmap. Ho costruito Factor-MCP — un server Model Context Protocol che espone 68 operazioni di vault DeFi agli LLM, una delle prime integrazioni MCP tra modelli di linguaggio e un protocollo live — e l'SDK tipizzato che lo alimenta. Scrivo codice in produzione su smart contract, backend e agent AI, lavoro AI-native (Cursor, Claude Code) ogni giorno, e traduco infrastruttura AI complessa in developer experience pulita e documentata. DeFi multi-chain, privacy-preserving e self-custodial by default.",
      en: 'Technical Product Manager and Founding Engineer who builds the developer tools, not just the roadmap. I built Factor-MCP — a Model Context Protocol server exposing 68 DeFi vault operations to LLMs, one of the earliest MCP integrations bridging language models and a live protocol — and the typed SDK that powers it. I ship production code across smart contracts, backends and AI agent layers, work AI-native (Cursor, Claude Code) daily, and turn complex AI infrastructure into clean, documented developer experience. Multi-chain DeFi, privacy-preserving and self-custodial by default.',
    },
    // pillarOrder unused here — customPillars takes over (more honest framing
    // for a technical-PM role: builder-with-AI, not a senior software engineer).
    pillarOrder: ['ai-eng', 'web3', 'cloud-devops'],
    customPillars: [
      {
        title: {
          it: 'AI engineering & integration',
          en: 'AI engineering & integration',
        },
        summary: {
          it: 'Costruisco sistemi AI in produzione: server MCP, orchestrazione multi-agent, integrazione LLM, guardrail a livello di codice. Non ML research — infrastruttura applicata e shippata.',
          en: 'I build AI systems in production: MCP servers, multi-agent orchestration, LLM integration, code-level guardrails. Not ML research — applied, shipped infrastructure.',
        },
        tags: ['MCP', 'Multi-agent', 'LLM integration', 'DeepInfra / Anthropic', 'Agent guardrails'],
      },
      {
        title: {
          it: 'Developer tools & SDK',
          en: 'Developer tools & SDKs',
        },
        summary: {
          it: 'Ho costruito Factor-MCP (68 operazioni vault esposte agli LLM) e l\'SDK tipizzato che lo alimenta. Disegno API surface, workflow per developer, doc ed esempi — e li uso in prima persona.',
          en: 'Built Factor-MCP (68 vault operations exposed to LLMs) and the typed Factor SDK that powers it. I design API surfaces, developer workflows, docs and examples — and dogfood them.',
        },
        tags: ['SDK design', 'API ergonomics', 'MCP', 'TypeScript', 'Semantic versioning'],
      },
      {
        title: {
          it: 'Technical product management',
          en: 'Technical product management',
        },
        summary: {
          it: 'Abbastanza hands-on da prototipare, leggere codice, testare flussi SDK e discutere trade-off ingegneristici — e tradurli in roadmap, requisiti e decisioni di developer experience.',
          en: 'Hands-on enough to prototype, read code, test SDK flows and debate engineering trade-offs — then translate them into roadmap, requirements and developer-experience decisions.',
        },
        tags: ['Prototyping', 'Requirements', 'DevX', 'Roadmap', 'Engineering partnership'],
      },
      {
        title: {
          it: 'Web3 & multi-chain',
          en: 'Web3 & multi-chain',
        },
        summary: {
          it: 'Integrazione smart-contract multi-chain (Ethereum, Base, Arbitrum, Algorand), self-custody, account abstraction, pattern P2P e decentralizzati.',
          en: 'Multi-chain smart-contract integration (Ethereum, Base, Arbitrum, Algorand), self-custody, account abstraction, P2P and decentralized patterns.',
        },
        tags: ['Multi-chain', 'Account abstraction', 'Self-custody', 'P2P', 'Privacy-preserving'],
      },
    ],
    // Factor first (SDK + MCP + VaaS story), then Mandate (AI agents),
    // then Haelias (production scale), then DPass (institutional breadth).
    featuredSlugs: ['factor', 'mandate', 'haelias', 'dpass'],
    focus: {
      it: [
        'Developer experience & SDK design',
        'MCP & LLM tool integration',
        'AI agent infrastructure',
        'API design · versioning · docs',
        'Multi-chain · P2P · self-custody',
        'AI-native workflow (Claude Code, Cursor)',
      ],
      en: [
        'Developer experience & SDK design',
        'MCP & LLM tool integration',
        'AI agent infrastructure',
        'API design · versioning · docs',
        'Multi-chain · P2P · self-custody',
        'AI-native workflow (Claude Code, Cursor)',
      ],
    },
  },
};

export function getCVProfile(id?: string | null): CVProfile | undefined {
  if (!id) return undefined;
  return cvProfiles[id];
}
