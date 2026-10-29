import Image from 'next/image';
import type { CaseStudy } from '@/data/types';

function hostOf(url?: string): string | undefined {
  if (!url) return undefined;
  try {
    return new URL(url).host.replace(/^www\./, '');
  } catch {
    return undefined;
  }
}

interface CaseStudyPreviewProps {
  caseStudy: CaseStudy;
  alt: string;
  priority?: boolean;
  sizes?: string;
}

/** Browser-window frame around a case-study screenshot (landing `.window`). */
export function CaseStudyPreview({ caseStudy, alt, priority, sizes }: CaseStudyPreviewProps) {
  const label = hostOf(caseStudy.link) ?? caseStudy.title.toLowerCase();
  return (
    <div className="window">
      <div className="window-bar" aria-hidden="true">
        <i />
        <i />
        <i />
        <span>{label}</span>
      </div>
      <div className="window-view">
        <Image
          src={caseStudy.image}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes ?? '(min-width: 1000px) 50vw, 100vw'}
        />
      </div>
    </div>
  );
}
