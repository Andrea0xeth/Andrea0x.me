import type { PillarId } from '@/data/types';
import { TagPill } from '@/components/ui/tag-pill';

interface CaseStudyTechProps {
  techStack: string[];
  pillars: PillarId[];
}

const pillarLabels: Record<PillarId, string> = {
  'traditional-dev': 'Traditional Dev',
  'ai-eng': 'AI Engineering',
  'cloud-devops': 'Cloud / DevOps',
  web3: 'Web3 / Blockchain',
  'it-mgmt': 'IT Management',
  business: 'Business Strategy',
};

export function CaseStudyTech({ techStack, pillars }: CaseStudyTechProps) {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h4 className="text-tag text-[color:var(--text-tertiary)] mb-3">
          Tech Stack
        </h4>
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <TagPill key={tech} variant="default" size="md">
              {tech}
            </TagPill>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-tag text-[color:var(--text-tertiary)] mb-3">
          Pillars touched
        </h4>
        <div className="flex flex-wrap gap-2">
          {pillars.map((pillar) => (
            <TagPill key={pillar} variant="accent" size="sm">
              {pillarLabels[pillar]}
            </TagPill>
          ))}
        </div>
      </div>
    </div>
  );
}
