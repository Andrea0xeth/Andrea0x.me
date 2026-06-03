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
export interface CVProfile {
  id: string;
  /** Replaces taglines.primary in the header. */
  headline: { it: string; en: string };
  /** Replaces personal.shortBio in the Profile section. */
  summary: { it: string; en: string };
  /** Ordered subset of pillar ids to show (others are hidden). */
  pillarOrder: PillarId[];
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
    // Lead with AI engineering + traditional dev (the hands-on coding signal),
    // then Web3 (P2P/decentralized cred) and Cloud. Drop IT-mgmt / business —
    // less relevant for an IC technical-PM / dev-tools role.
    pillarOrder: ['ai-eng', 'traditional-dev', 'web3', 'cloud-devops'],
    // Factor first (SDK + MCP + VaaS story), then Mandate (AI agents),
    // then Haelias (production scale), then DPass (institutional breadth).
    featuredSlugs: ['factor', 'mandate', 'haelias', 'dpass'],
    focus: {
      it: [
        'Developer tools & SDK',
        'MCP · LLM integration',
        'AI agent infrastructure',
        'API design & DevX',
        'Multi-chain & P2P',
      ],
      en: [
        'Developer tools & SDKs',
        'MCP · LLM integration',
        'AI agent infrastructure',
        'API design & DevX',
        'Multi-chain & P2P',
      ],
    },
  },
};

export function getCVProfile(id?: string | null): CVProfile | undefined {
  if (!id) return undefined;
  return cvProfiles[id];
}
