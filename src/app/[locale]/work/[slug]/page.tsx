import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { hasLocale } from 'next-intl';
import { routing } from '@/i18n/routing';
import { portfolioData } from '@/data/portfolio';
import type { Locale } from '@/data/types';
import { PillLink } from '@/components/site/buttons';
import { ClosingCta } from '@/components/site/closing-cta';
import { ArrowLeftIcon, ArrowRightIcon } from '@/components/site/icons';
import { CaseStudyPreview } from '@/components/work/case-study-preview';

interface CaseStudyPageParams {
  locale: string;
  slug: string;
}

export function generateStaticParams() {
  const params: CaseStudyPageParams[] = [];
  for (const locale of routing.locales) {
    for (const cs of portfolioData.caseStudies) {
      params.push({ locale, slug: cs.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<CaseStudyPageParams>;
}): Promise<Metadata> {
  const { locale, slug } = await params;

  if (!hasLocale(routing.locales, locale)) {
    return {};
  }

  const caseStudy = portfolioData.caseStudies.find((cs) => cs.slug === slug);
  if (!caseStudy) {
    return {};
  }

  const typedLocale = locale as Locale;
  const description = caseStudy.problem[typedLocale];
  const title = `${caseStudy.title} — ${caseStudy.domain[typedLocale]}`;

  return {
    title,
    description,
    alternates: {
      canonical: `/${typedLocale}/work/${slug}`,
      languages: { it: `/it/work/${slug}`, en: `/en/work/${slug}` },
    },
    openGraph: {
      title,
      description,
      type: 'article',
      images: caseStudy.image ? [{ url: caseStudy.image }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

function paragraphs(text: string): string[] {
  return text
    .split(/\n\n+/)
    .map((p) => p.trim())
    .filter(Boolean);
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<CaseStudyPageParams>;
}) {
  const { locale, slug } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const caseStudy = portfolioData.caseStudies.find((cs) => cs.slug === slug);
  if (!caseStudy) {
    notFound();
  }

  const l = locale as Locale;
  const t = await getTranslations({ locale, namespace: 'caseStudy' });
  const tPage = await getTranslations({ locale, namespace: 'caseStudyPage' });
  const tShell = await getTranslations({ locale, namespace: 'shell' });
  const pillarTitle = new Map(portfolioData.pillars.map((p) => [p.id, p.title[l]]));

  // prev/next navigation across all case studies (in array order).
  const all = portfolioData.caseStudies;
  const idx = all.findIndex((cs) => cs.slug === slug);
  const prev = idx > 0 ? all[idx - 1] : undefined;
  const next = idx >= 0 && idx < all.length - 1 ? all[idx + 1] : undefined;

  const meta = [
    { label: t('role'), value: caseStudy.role[l] },
    { label: t('period'), value: caseStudy.period },
    ...(caseStudy.clients?.length
      ? [{ label: t('clients'), value: caseStudy.clients.join(' · ') }]
      : []),
  ];

  return (
    <article aria-labelledby="page-title">
      <header className="page-hero wrap">
        <Link href={`/${l}/work`} className="read back mb-6 flex w-fit text-[0.9rem] text-[color:var(--paper-3)] hover:text-[color:var(--paper)]">
          <ArrowLeftIcon />
          {t('allCaseStudies')}
        </Link>
        <p className="kicker">
          <span className={caseStudy.status === 'completed' ? 'dot muted' : 'dot'} aria-hidden="true" />
          {tPage(`status.${caseStudy.status}`)} · {caseStudy.domain[l]}
        </p>
        <h1 id="page-title" className="page-title">
          {caseStudy.title}
        </h1>
        <dl className="mt-10 grid gap-x-10 gap-y-5 border-t border-[color:var(--line)] pt-6 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.6fr_1.2fr]">
          {meta.map((m) => (
            <div key={m.label}>
              <dt className="card-label">{m.label}</dt>
              <dd className="mt-1.5 text-[color:var(--paper-2)]">{m.value}</dd>
            </div>
          ))}
        </dl>
        <div className="cta-row">
          {caseStudy.link ? (
            <PillLink href={caseStudy.link} external icon="arrow">
              {tPage('visit')}
            </PillLink>
          ) : null}
          <PillLink href={`/${l}/book`} variant={caseStudy.link ? 'glass' : 'primary'}>
            {tShell('closing.book')}
          </PillLink>
        </div>
      </header>

      <div className="wrap" data-reveal>
        <CaseStudyPreview
          caseStudy={caseStudy}
          alt={`${tPage('preview')} ${caseStudy.title}`}
          priority
          sizes="(min-width: 1280px) 1216px, 100vw"
        />
      </div>

      <section className="proof mt-[clamp(4rem,9vw,6rem)]" aria-label={tPage('atGlance')}>
        <div className="wrap">
          <p className="kicker">{tPage('atGlance')}</p>
          <ul className="stats">
            {caseStudy.results.slice(0, 4).map((r) => (
              <li key={r.label.en} data-reveal>
                <b className="!text-[clamp(1.6rem,1.1rem+1.4vw,2.4rem)]">{r.value}</b>
                <span>{r.label[l]}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section wrap" aria-labelledby="problem-title">
        <div className="split">
          <div className="split-aside" data-reveal>
            <p className="kicker"><span className="num">01</span> · {caseStudy.title}</p>
            <h2 id="problem-title">{t('section.problem')}</h2>
          </div>
          <div className="prose-body text-[1.08rem]" data-reveal>
            {paragraphs(caseStudy.problem[l]).map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="section wrap" aria-labelledby="architecture-title">
        <div className="split">
          <div className="split-aside" data-reveal>
            <p className="kicker"><span className="num">02</span> · {caseStudy.title}</p>
            <h2 id="architecture-title">{t('section.architecture')}</h2>
          </div>
          <div className="prose-body text-[1.08rem]" data-reveal>
            {paragraphs(caseStudy.architecture[l]).map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="section wrap" aria-labelledby="decisions-title">
        <div className="section-head" data-reveal>
          <p className="kicker"><span className="num">03</span> · {caseStudy.title}</p>
          <h2 id="decisions-title">{t('section.decisions')}</h2>
        </div>
        <ul className="grid-cards cols-2" data-spot>
          {caseStudy.decisions.map((d, i) => (
            <li key={d.title.en} className="spot" data-reveal>
              <span className="font-mono text-[0.78rem] text-[color:var(--signal)]">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="card-title">{d.title[l]}</h3>
              <p>{d.body[l]}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="section wrap" aria-labelledby="results-title">
        <div className="section-head" data-reveal>
          <p className="kicker"><span className="num">04</span> · {caseStudy.title}</p>
          <h2 id="results-title">{t('section.results')}</h2>
        </div>
        <ul className="grid-cards cols-3" data-spot>
          {caseStudy.results.map((r) => (
            <li key={r.label.en} className="spot" data-reveal>
              <span className="metric !mb-1 break-words">{r.value}</span>
              <p>{r.label[l]}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="section wrap" aria-labelledby="tech-title">
        <div className="split">
          <div className="split-aside" data-reveal>
            <p className="kicker"><span className="num">05</span> · {caseStudy.title}</p>
            <h2 id="tech-title">{t('section.tech')}</h2>
          </div>
          <div className="grid gap-8" data-reveal>
            <div>
              <h3 className="card-label !text-[0.74rem] !tracking-[0.08em]">{tPage('techStack')}</h3>
              <ul className="pills mt-3">
                {caseStudy.techStack.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="card-label !text-[0.74rem] !tracking-[0.08em]">{tPage('pillars')}</h3>
              <ul className="pills warm mt-3">
                {caseStudy.pillarsTouched.map((p) => (
                  <li key={p}>{pillarTitle.get(p) ?? p}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <nav className="wrap pb-[clamp(4rem,9vw,6rem)]" aria-label={t('allCaseStudies')}>
        <ul className="grid-cards cols-2" data-spot>
          {prev ? (
            <li>
              <Link href={`/${l}/work/${prev.slug}`} className="spot h-full">
                <span className="card-label inline-flex items-center gap-2">
                  <ArrowLeftIcon className="icon !h-4 !w-4" />
                  {t('previous')}
                </span>
                <span className="card-title mt-2 !text-[1.6rem] !tracking-[-0.035em]">{prev.title}</span>
                <p>{prev.domain[l]}</p>
              </Link>
            </li>
          ) : (
            <li aria-hidden="true" className="hidden sm:block" />
          )}
          {next ? (
            <li>
              <Link href={`/${l}/work/${next.slug}`} className="spot h-full sm:text-right">
                <span className="card-label inline-flex items-center gap-2 sm:justify-self-end">
                  {t('next')}
                  <ArrowRightIcon className="icon !h-4 !w-4" />
                </span>
                <span className="card-title mt-2 !text-[1.6rem] !tracking-[-0.035em]">{next.title}</span>
                <p>{next.domain[l]}</p>
              </Link>
            </li>
          ) : null}
        </ul>
      </nav>

      <ClosingCta locale={l} title={tPage('ctaTitle')} body={tPage('ctaBody')} />
    </article>
  );
}
