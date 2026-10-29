import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { hasLocale } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { portfolioData } from '@/data/portfolio';
import type { Locale } from '@/data/types';
import { PageHero } from '@/components/site/page-hero';
import { PillLink } from '@/components/site/buttons';
import { ClosingCta } from '@/components/site/closing-cta';
import { ArrowUpRightIcon, CalendarIcon } from '@/components/site/icons';
import { SOCIAL_LINKS } from '@/components/site/socials';

interface AboutPageProps {
  params: Promise<{ locale: string }>;
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: AboutPageProps): Promise<Metadata> {
  const { locale } = await params;
  const title = locale === 'it' ? 'Chi sono' : 'About — Andrea Ritondale';
  const description =
    locale === 'it'
      ? 'Andrea Ritondale (Andrea0x.eth) — Principal Engineer, IT Architect e AI Builder. Profilo, formazione e lingue.'
      : 'Andrea Ritondale (Andrea0x.eth) — Principal Engineer, IT Architect and AI Builder. Bio, education and languages.';

  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}/about`,
      languages: {
        it: '/it/about',
        en: '/en/about',
      },
    },
  };
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const l = locale as Locale;
  const t = await getTranslations({ locale, namespace: 'about' });
  const tSkills = await getTranslations({ locale, namespace: 'skills' });
  const tPage = await getTranslations({ locale, namespace: 'caseStudyPage' });
  const { personal, social, taglines, languages, education, caseStudies, pillars, stats } =
    portfolioData;

  const story = personal.longBio[l]
    .split(/\n\n+/)
    .map((p) => p.trim())
    .filter(Boolean);

  const active = caseStudies.filter(
    (cs) => cs.status === 'active' || cs.status === 'production' || cs.status === 'pre-launch',
  );

  const proficiency = (level: number): string => {
    if (level >= 100) return tSkills('proficiency.native');
    if (level >= 80) return tSkills('proficiency.fluent');
    if (level >= 50) return tSkills('proficiency.professional');
    if (level >= 25) return tSkills('proficiency.basic');
    return tSkills('proficiency.beginner');
  };

  // First relevant role in 2020.
  const years = new Date().getFullYear() - 2019;
  const quickStats = [
    { value: `${years}+`, label: t('years') },
    { value: `${pillars.length}`, label: t('pillars') },
    { value: stats[3]?.value ?? '5+', label: t('domains') },
  ];

  const facts = [
    { label: t('nationality'), value: personal.nationality },
    { label: t('workMode'), value: personal.workMode[l] },
    { label: t('birthYear'), value: String(personal.birthYear) },
  ];

  const contacts = [
    ...SOCIAL_LINKS.map((s) => ({ ...s, Icon: s.Icon as typeof CalendarIcon })),
    { href: social.booking, label: t('bookLabel'), handle: 'call.andrea0x.me/book', Icon: CalendarIcon },
  ];

  return (
    <>
      <PageHero
        kicker={
          <>
            <span className="dot" aria-hidden="true" />
            {t('kicker')}
          </>
        }
        title={personal.name}
        lead={taglines.primary[l]}
        aside={
          <figure className="card mx-auto w-full max-w-[340px] !p-3 lg:max-w-[420px]" data-reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[18px] border border-[color:var(--line)]">
              <Image
                src={personal.avatarReal}
                alt={personal.name}
                fill
                priority
                sizes="(min-width: 1024px) 420px, 90vw"
                className="object-cover"
              />
            </div>
            <figcaption className="flex items-center justify-between gap-3 px-2 pb-1 pt-3">
              <span>
                <b className="block font-medium tracking-[-0.02em]">{personal.name}</b>
                <span className="font-mono text-[0.74rem] text-[color:var(--paper-3)]">{personal.handle}</span>
              </span>
              <span className="tag">
                <span className="dot" aria-hidden="true" />
                Remote · CET
              </span>
            </figcaption>
          </figure>
        }
      >
        <p className="mt-4 font-mono text-[0.85rem] text-[color:var(--paper-3)]">· {personal.handle}</p>
        <div className="cta-row">
          <PillLink href={`/${l}/book`}>{t('cta.schedule')}</PillLink>
          <PillLink href={`/api/cv?lang=${l}`} variant="glass" icon="download" download>
            {t('cta.cv')}
          </PillLink>
          <PillLink href={`mailto:${social.email}`} variant="glass" native>
            {t('cta.email')}
          </PillLink>
        </div>
      </PageHero>

      <section className="proof" aria-label={t('glance')}>
        <div className="wrap">
          <ul className="stats">
            {quickStats.map((s) => (
              <li key={s.label} data-reveal>
                <b>{s.value}</b>
                <span>{s.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section wrap" aria-labelledby="story-title">
        <div className="split">
          <div className="split-aside" data-reveal>
            <p className="kicker"><span className="num">01</span> · {t('story')}</p>
            <h2 id="story-title">{t('storyTitle')}</h2>
          </div>
          <div className="prose-body max-w-[42rem] text-[1.05rem]">
            {story.map((p, i) => (
              <p key={i} data-reveal className={i === 0 ? '!text-[1.25rem] !text-[color:var(--paper)] tracking-[-0.01em]' : undefined}>
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {active.length > 0 ? (
        <section className="section wrap" aria-labelledby="now-title">
          <div className="section-head" data-reveal>
            <p className="kicker"><span className="num">02</span> · {t('now')}</p>
            <h2 id="now-title">{t('nowTitle')}</h2>
            <p className="lead">{t('nowSummary')}</p>
          </div>
          <ul className="grid-cards cols-2" data-spot>
            {active.map((cs) => (
              <li key={cs.slug} data-reveal>
                <Link href={`/${l}/work/${cs.slug}`} className="spot h-full">
                  <span className="flex items-center justify-between gap-3">
                    <span className="card-label inline-flex items-center gap-2">
                      <span className="dot" aria-hidden="true" />
                      {tPage(`status.${cs.status}`)}
                    </span>
                    <ArrowUpRightIcon className="icon text-[color:var(--paper-3)]" />
                  </span>
                  <span className="card-title mt-3 !text-[1.6rem] !tracking-[-0.035em]">{cs.title}</span>
                  <p>
                    {cs.role[l]} · {cs.domain[l]}
                  </p>
                  <span className="font-mono text-[0.78rem] text-[color:var(--paper-3)]">{cs.period}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <section className="section wrap" aria-labelledby="facts-title">
        <div className="section-head" data-reveal>
          <p className="kicker"><span className="num">03</span> · {t('quickFacts')}</p>
          <h2 id="facts-title">{t('quickFacts')}</h2>
        </div>
        <div className="grid gap-4 lg:grid-cols-[1.3fr_1fr]">
          <dl className="card grid gap-6 sm:grid-cols-3" data-reveal>
            {facts.map((f) => (
              <div key={f.label}>
                <dt className="card-label">{f.label}</dt>
                <dd className="mt-2 text-[color:var(--paper)]">{f.value}</dd>
              </div>
            ))}
          </dl>
          <div className="card" data-reveal>
            <h3 className="card-label !text-[0.74rem] !tracking-[0.08em]">{t('languages')}</h3>
            <ul className="mt-4 grid gap-3">
              {languages.map((lang) => (
                <li key={lang.name} className="grid gap-1.5">
                  <span className="flex items-baseline justify-between gap-3">
                    <span>{lang.name}</span>
                    <span className="font-mono text-[0.74rem] text-[color:var(--paper-3)]">
                      {proficiency(lang.level)}
                    </span>
                  </span>
                  <span className="h-[3px] overflow-hidden rounded-full bg-[color:var(--line)]" aria-hidden="true">
                    <span
                      className="block h-full rounded-full bg-gradient-to-r from-[color:var(--signal-2)] to-[color:var(--signal)]"
                      style={{ width: `${Math.min(100, lang.level)}%` }}
                    />
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section wrap" aria-labelledby="education-title">
        <div className="split">
          <div className="split-aside" data-reveal>
            <p className="kicker"><span className="num">04</span> · {t('education')}</p>
            <h2 id="education-title">{t('education')}</h2>
          </div>
          <ol className="border-t border-[color:var(--line)]">
            {education.map((edu) => (
              <li
                key={`${edu.title.en}-${edu.period}`}
                className="grid gap-2 border-b border-[color:var(--line)] py-6 md:grid-cols-[9rem_1fr] md:gap-6"
                data-reveal
              >
                <span className="font-mono text-[0.8rem] text-[color:var(--paper-3)] md:pt-1">{edu.period}</span>
                <div>
                  <h3 className="!text-[1.25rem] !leading-tight !tracking-[-0.025em]">
                    {edu.link ? (
                      <a
                        href={edu.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-start gap-1.5 hover:text-[color:var(--signal)]"
                      >
                        {edu.title[l]}
                        <ArrowUpRightIcon className="icon mt-1 !h-4 !w-4 shrink-0 opacity-60" />
                      </a>
                    ) : (
                      edu.title[l]
                    )}
                  </h3>
                  <p className="mt-2 text-[0.95rem] text-[color:var(--paper-2)]">{edu.description[l]}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section wrap" aria-labelledby="elsewhere-title">
        <div className="section-head" data-reveal>
          <p className="kicker"><span className="num">05</span> · {t('elsewhere')}</p>
          <h2 id="elsewhere-title">{t('elsewhereTitle')}</h2>
        </div>
        <ul className="grid-cards cols-3" data-spot>
          {contacts.map(({ href, label, handle, Icon }) => {
            const external = href.startsWith('http');
            return (
              <li key={label} data-reveal>
                <a
                  href={href}
                  className="spot h-full !gap-2"
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  <span className="flex items-center justify-between text-[color:var(--paper-2)]">
                    <span className="inline-flex items-center gap-2.5">
                      <Icon className="icon" />
                      <span className="card-label">{label}</span>
                    </span>
                    <ArrowUpRightIcon className="icon !h-4 !w-4 text-[color:var(--paper-3)]" />
                  </span>
                  <span className="truncate font-mono text-[0.85rem] text-[color:var(--paper)]">{handle}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </section>

      <ClosingCta locale={l} />
    </>
  );
}
