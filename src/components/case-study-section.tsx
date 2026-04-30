import { ReactNode } from 'react';
import { Surface } from '@/components/ui/surface';
import { SectionHeader } from '@/components/ui/section-header';

interface CaseStudySectionProps {
  title: string;
  children: ReactNode;
  index?: string;
}

/**
 * CaseStudySection — reusable text section with title + body for case studies.
 */
export function CaseStudySection({
  title,
  children,
  index,
}: CaseStudySectionProps) {
  return (
    <section className="py-12 md:py-16">
      <SectionHeader number={index} title={title} align="left" className="mb-6" />
      <Surface variant="flat" padding="none">
        <div className="text-body text-[color:var(--text-secondary)] max-w-3xl">
          {children}
        </div>
      </Surface>
    </section>
  );
}
