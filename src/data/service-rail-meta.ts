import type { BilingualString } from '@/data/types';

/**
 * Short rail labels for the /services ServicesRail (condensed from portfolio titles).
 */
export interface ServiceRailMeta {
  railName: BilingualString;
  /** One-line hint under the name (from role / rate framing, not new claims). */
  railHint: BilingualString;
}

export const serviceRailMeta: Record<string, ServiceRailMeta> = {
  'fractional-cto': {
    railName: { en: 'Fractional CTO', it: 'Fractional CTO' },
    railHint: {
      en: 'Part-time leadership · architecture · cost discipline',
      it: 'Leadership part-time · architettura · cost discipline',
    },
  },
  'technical-architect': {
    railName: { en: 'Technical Architect', it: 'Technical Architect' },
    railHint: {
      en: 'Boundaries · schema · deploy pipelines',
      it: 'Boundary · schema · pipeline di deploy',
    },
  },
  'ai-engineering': {
    railName: { en: 'AI Engineering', it: 'AI Engineering' },
    railHint: {
      en: 'Agent loops · MCP · production guardrails',
      it: 'Agent loop · MCP · guardrail in produzione',
    },
  },
  'database-performance': {
    railName: { en: 'Database Performance', it: 'Database Performance' },
    railHint: {
      en: 'MongoDB · Postgres · zero-downtime',
      it: 'MongoDB · Postgres · zero-downtime',
    },
  },
  'process-digitalization': {
    railName: { en: 'Process Digitalization', it: 'Digitalizzazione' },
    railHint: {
      en: 'Friction mapping · workflows · audit trails',
      it: 'Attriti · workflow · audit trail',
    },
  },
  'web3-integration': {
    railName: { en: 'Web3 Integration', it: 'Web3 Integration' },
    railHint: {
      en: 'EVM · Algorand · gasless UX',
      it: 'EVM · Algorand · UX gasless',
    },
  },
};

export function metaForService(id: string): ServiceRailMeta | undefined {
  return serviceRailMeta[id];
}
