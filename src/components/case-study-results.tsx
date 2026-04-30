import type { CaseStudyResult, Locale } from '@/data/types';
import { Surface } from '@/components/ui/surface';
import { MetricNumber } from '@/components/ui/metric-number';

interface CaseStudyResultsProps {
  results: CaseStudyResult[];
  locale: Locale;
}

export function CaseStudyResults({ results, locale }: CaseStudyResultsProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {results.map((result, idx) => (
        <Surface
          key={`${result.label.en}-${idx}`}
          variant="flat"
          padding="md"
          className="h-full"
        >
          <MetricNumber
            value={result.value}
            label={result.label[locale]}
            size="lg"
          />
        </Surface>
      ))}
    </div>
  );
}
