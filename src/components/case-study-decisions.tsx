'use client';

import { motion } from 'framer-motion';
import type { CaseStudyDecision, Locale } from '@/data/types';
import { Surface } from '@/components/ui/surface';
import { motionPresets } from '@/lib/motion-presets';
import { useReducedMotion, getMotionProps } from '@/lib/use-reduced-motion';

interface CaseStudyDecisionsProps {
  decisions: CaseStudyDecision[];
  locale: Locale;
}

export function CaseStudyDecisions({
  decisions,
  locale,
}: CaseStudyDecisionsProps) {
  const prefersReducedMotion = useReducedMotion();
  const baseMotion = getMotionProps(motionPresets.fadeInUpSlow, prefersReducedMotion);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {decisions.map((decision, idx) => (
        <motion.div
          key={`${decision.title.en}-${idx}`}
          {...baseMotion}
          transition={
            prefersReducedMotion
              ? undefined
              : {
                  ...motionPresets.fadeInUpSlow.transition,
                  delay: idx * 0.08,
                }
          }
        >
          <Surface
            variant="bordered"
            padding="md"
            className="h-full"
          >
            <h3 className="text-h3 text-[color:var(--text-primary)] mb-2">
              {decision.title[locale]}
            </h3>
            <p className="text-body text-[color:var(--text-secondary)]">
              {decision.body[locale]}
            </p>
          </Surface>
        </motion.div>
      ))}
    </div>
  );
}
