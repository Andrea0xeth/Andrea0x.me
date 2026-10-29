import Link from 'next/link';
import { portfolioData } from '@/data/portfolio';
import type { Locale } from '@/data/types';

/** Case studies × skill pillars, server-rendered (replaces DomainsProjectsMatrix). */
export function PillarMatrix({ locale, projectLabel }: { locale: Locale; projectLabel: string }) {
  const { caseStudies, pillars } = portfolioData;

  return (
    <>
      <div className="hidden overflow-hidden rounded-[22px] border border-[color:var(--line)] md:block">
        <table className="w-full border-collapse text-left text-[0.92rem]">
          <thead>
            <tr className="border-b border-[color:var(--line)] bg-[rgba(242,239,232,0.02)]">
              <th scope="col" className="px-5 py-4 font-mono text-[0.72rem] font-normal uppercase tracking-[0.08em] text-[color:var(--paper-3)]">
                {projectLabel}
              </th>
              {pillars.map((p) => (
                <th
                  key={p.id}
                  scope="col"
                  className="px-3 py-4 text-center font-mono text-[0.72rem] font-normal uppercase tracking-[0.06em] text-[color:var(--paper-3)]"
                >
                  {p.title[locale]}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {caseStudies.map((cs, i) => (
              <tr
                key={cs.slug}
                className={i < caseStudies.length - 1 ? 'border-b border-[color:var(--line)]' : undefined}
              >
                <th scope="row" className="px-5 py-3 font-medium">
                  <Link href={`/${locale}/work/${cs.slug}`} className="inline-flex min-h-[44px] items-center hover:text-[color:var(--signal)]">
                    {cs.title}
                  </Link>
                </th>
                {pillars.map((p) => {
                  const on = cs.pillarsTouched.includes(p.id);
                  return (
                    <td key={p.id} className="px-3 py-3 text-center">
                      <span className={on ? 'dot warm' : 'dot muted'} aria-hidden="true" />
                      <span className="sr-only">{on ? '✓' : '—'}</span>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ul className="grid gap-3 md:hidden">
        {caseStudies.map((cs) => (
          <li key={cs.slug} className="card !p-5">
            <Link href={`/${locale}/work/${cs.slug}`} className="inline-flex min-h-[44px] items-center font-medium">
              {cs.title}
            </Link>
            <ul className="pills warm mt-2">
              {pillars
                .filter((p) => cs.pillarsTouched.includes(p.id))
                .map((p) => (
                  <li key={p.id}>{p.title[locale]}</li>
                ))}
            </ul>
          </li>
        ))}
      </ul>
    </>
  );
}
