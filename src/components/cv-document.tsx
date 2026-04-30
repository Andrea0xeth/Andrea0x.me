import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Link,
} from '@react-pdf/renderer';
import type { PortfolioData, LanguageProficiency } from '@/data/types';

type Lang = 'it' | 'en';

const ACCENT = '#3b82f6';
const TEXT = '#1f2937';
const MUTED = '#6b7280';
const RULE = '#e5e7eb';

const styles = StyleSheet.create({
  page: {
    paddingTop: 26,
    paddingBottom: 32,
    paddingHorizontal: 32,
    fontFamily: 'Helvetica',
    fontSize: 9,
    color: TEXT,
    lineHeight: 1.32,
  },
  // Header
  name: {
    fontSize: 18,
    fontFamily: 'Helvetica-Bold',
    color: TEXT,
  },
  tagline: {
    fontSize: 10,
    color: MUTED,
    marginTop: 1,
    marginBottom: 4,
  },
  contactRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    fontSize: 8.5,
    color: MUTED,
    marginBottom: 1,
  },
  contactItem: {
    marginRight: 5,
  },
  contactSep: {
    marginRight: 5,
    color: MUTED,
  },
  link: {
    color: ACCENT,
    textDecoration: 'none',
  },
  workMode: {
    fontSize: 8.5,
    color: MUTED,
  },
  // Sections
  section: {
    marginTop: 7,
  },
  sectionHeader: {
    fontSize: 10.5,
    fontFamily: 'Helvetica-Bold',
    color: ACCENT,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 2,
  },
  rule: {
    borderBottomWidth: 0.5,
    borderBottomColor: RULE,
    marginBottom: 4,
  },
  body: {
    fontSize: 9,
    color: TEXT,
  },
  bullet: {
    flexDirection: 'row',
    marginBottom: 1.5,
  },
  bulletDot: {
    width: 7,
    fontSize: 9,
    color: ACCENT,
  },
  bulletText: {
    flex: 1,
    fontSize: 9,
    color: TEXT,
  },
  bold: {
    fontFamily: 'Helvetica-Bold',
  },
  muted: {
    color: MUTED,
  },
  // Experience entry
  expEntry: {
    marginBottom: 4,
  },
  expTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 0.5,
  },
  expTitle: {
    fontSize: 9.5,
    fontFamily: 'Helvetica-Bold',
    color: TEXT,
    flex: 1,
    paddingRight: 6,
  },
  expPeriod: {
    fontSize: 8.5,
    color: MUTED,
  },
  expCompany: {
    fontSize: 9,
    fontFamily: 'Helvetica-Oblique',
    color: ACCENT,
    marginBottom: 0.5,
  },
  expDesc: {
    fontSize: 9,
    color: TEXT,
  },
  // Project entry
  projEntry: {
    marginBottom: 3.5,
  },
  projTitle: {
    fontSize: 9.5,
    fontFamily: 'Helvetica-Bold',
    color: TEXT,
  },
  projMeta: {
    fontSize: 8.5,
    color: MUTED,
    marginBottom: 0.5,
  },
  projArch: {
    fontSize: 9,
    color: TEXT,
  },
  projMetrics: {
    fontSize: 8.5,
    color: MUTED,
  },
  // Education compact (one line)
  eduLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 1.5,
    fontSize: 9,
  },
  eduTitle: {
    fontSize: 9,
    color: TEXT,
    flex: 1,
    paddingRight: 6,
  },
  // Footer
  footer: {
    position: 'absolute',
    bottom: 14,
    left: 32,
    right: 32,
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontSize: 7.5,
    color: MUTED,
    borderTopWidth: 0.5,
    borderTopColor: RULE,
    paddingTop: 4,
  },
});

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

const T = {
  summary: { it: 'Profilo', en: 'Summary' },
  pillars: { it: 'Competenze chiave', en: 'Core competencies' },
  experience: { it: 'Esperienza', en: 'Experience' },
  projects: { it: 'Progetti selezionati', en: 'Selected projects' },
  education: { it: 'Formazione', en: 'Education' },
  languages: { it: 'Lingue', en: 'Languages' },
  tags: { it: 'Tag', en: 'Tags' },
  arch: { it: 'Architettura', en: 'Architecture' },
  generated: { it: 'Generato', en: 'Generated' },
} satisfies Record<string, Record<Lang, string>>;

function levelToProficiency(level: number, lang: Lang): string {
  if (level >= 95) return lang === 'it' ? 'Madrelingua' : 'Native';
  if (level >= 75) return lang === 'it' ? 'Fluente (C1/C2)' : 'Fluent (C1/C2)';
  if (level >= 55) return lang === 'it' ? 'Avanzato (B2)' : 'Advanced (B2)';
  if (level >= 35) return lang === 'it' ? 'Intermedio (B1)' : 'Intermediate (B1)';
  if (level >= 15) return lang === 'it' ? 'Base (A2)' : 'Basic (A2)';
  return lang === 'it' ? 'Elementare (A1)' : 'Elementary (A1)';
}

function languageName(name: string, lang: Lang): string {
  if (lang === 'it') {
    const map: Record<string, string> = {
      Italian: 'Italiano',
      English: 'Inglese',
      Spanish: 'Spagnolo',
      Chinese: 'Cinese',
      French: 'Francese',
      German: 'Tedesco',
    };
    return map[name] ?? name;
  }
  return name;
}

function shortHost(url: string): string {
  try {
    const u = new URL(url);
    return u.host.replace(/^www\./, '') + (u.pathname && u.pathname !== '/' ? u.pathname : '');
  } catch {
    return url;
  }
}

// Reduce a multi-sentence paragraph to its first sentence to keep CV tight.
function firstSentence(text: string): string {
  const trimmed = text.trim();
  // Match up to first sentence-ending punctuation followed by a space + capital, or end of string.
  const m = trimmed.match(/^(.+?[.!?])(\s+[A-ZÀ-Ý])/);
  if (m) return m[1];
  return trimmed;
}

function generatedDate(lang: Lang): string {
  const d = new Date();
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  const dd = String(d.getDate()).padStart(2, '0');
  return `${T.generated[lang]}: ${yyyy}-${mm}-${dd}`;
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

interface CVDocumentProps {
  lang: Lang;
  data: PortfolioData;
}

export function CVDocument({ lang, data }: CVDocumentProps) {
  const featured = data.caseStudies.filter((cs) => cs.featured).slice(0, 4);
  const tagline = data.taglines.primary[lang];
  const summary = data.personal.shortBio[lang];
  const fullName = `${data.personal.name} · ${data.personal.handle}`;

  return (
    <Document
      title={`${data.personal.name} — CV (${lang.toUpperCase()})`}
      author={data.personal.name}
      creator="andrea0x.me"
      producer="andrea0x.me"
    >
      <Page size="A4" style={styles.page}>
        {/* HEADER */}
        <View>
          <Text style={styles.name}>{fullName}</Text>
          <Text style={styles.tagline}>{tagline}</Text>
          <View style={styles.contactRow}>
            <Link style={[styles.link, styles.contactItem]} src={`mailto:${data.social.email}`}>
              {data.social.email}
            </Link>
            <Text style={styles.contactSep}>·</Text>
            <Text style={styles.contactItem}>{data.personal.nationality}</Text>
            <Text style={styles.contactSep}>·</Text>
            <Link style={[styles.link, styles.contactItem]} src={data.social.github}>
              github.com/Andrea0xeth
            </Link>
            <Text style={styles.contactSep}>·</Text>
            <Link style={[styles.link, styles.contactItem]} src={data.social.linkedin}>
              {shortHost(data.social.linkedin)}
            </Link>
            <Text style={styles.contactSep}>·</Text>
            <Link style={[styles.link, styles.contactItem]} src={data.social.twitter}>
              x.com/andrea0x_eth
            </Link>
          </View>
          <Text style={styles.workMode}>{data.personal.workMode[lang]}</Text>
        </View>

        {/* SUMMARY */}
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>{T.summary[lang]}</Text>
          <View style={styles.rule} />
          <Text style={styles.body}>{summary}</Text>
        </View>

        {/* PILLARS */}
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>{T.pillars[lang]}</Text>
          <View style={styles.rule} />
          {data.pillars.map((p) => (
            <View key={p.id} style={styles.bullet}>
              <Text style={styles.bulletDot}>•</Text>
              <Text style={styles.bulletText}>
                <Text style={styles.bold}>{p.title[lang]}: </Text>
                {p.summary[lang]}
                {p.tags.length > 0 && (
                  <Text style={styles.muted}>
                    {' '}
                    {T.tags[lang]}: {p.tags.slice(0, 5).join(', ')}
                  </Text>
                )}
              </Text>
            </View>
          ))}
        </View>

        {/* EXPERIENCE */}
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>{T.experience[lang]}</Text>
          <View style={styles.rule} />
          {data.experience.map((exp, idx) => (
            <View key={`${exp.company}-${idx}`} style={styles.expEntry} wrap={false}>
              <View style={styles.expTopRow}>
                <Text style={styles.expTitle}>{exp.position[lang]}</Text>
                <Text style={styles.expPeriod}>{exp.period}</Text>
              </View>
              <Text style={styles.expCompany}>
                {exp.company} · {exp.type[lang]}
              </Text>
              <Text style={styles.expDesc}>{firstSentence(exp.description[lang])}</Text>
            </View>
          ))}
        </View>

        {/* PROJECTS */}
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>{T.projects[lang]}</Text>
          <View style={styles.rule} />
          {featured.map((cs) => {
            const topMetrics = cs.results.slice(0, 2);
            return (
              <View key={cs.slug} style={styles.projEntry} wrap={false}>
                <View style={styles.expTopRow}>
                  <Text style={styles.projTitle}>
                    {cs.title}{' '}
                    <Text style={[styles.muted, { fontFamily: 'Helvetica' }]}>/{cs.slug}</Text>
                  </Text>
                  <Text style={styles.expPeriod}>{cs.period}</Text>
                </View>
                <Text style={styles.projMeta}>
                  {cs.domain[lang]} · {cs.role[lang]}
                </Text>
                <Text style={styles.projArch}>
                  <Text style={styles.bold}>{T.arch[lang]}: </Text>
                  {firstSentence(cs.architecture[lang])}
                </Text>
                {topMetrics.length > 0 && (
                  <Text style={styles.projMetrics}>
                    {topMetrics
                      .map((m) => `${m.label[lang]}: ${m.value}`)
                      .join('  ·  ')}
                  </Text>
                )}
              </View>
            );
          })}
        </View>

        {/* EDUCATION (compact one-line each) */}
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>{T.education[lang]}</Text>
          <View style={styles.rule} />
          {data.education.map((ed, idx) => (
            <View key={idx} style={styles.eduLine} wrap={false}>
              <Text style={styles.eduTitle}>
                <Text style={styles.bold}>{ed.title[lang]}</Text>
                <Text style={styles.muted}> — {firstSentence(ed.description[lang])}</Text>
              </Text>
              <Text style={styles.expPeriod}>{ed.period}</Text>
            </View>
          ))}
        </View>

        {/* LANGUAGES */}
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>{T.languages[lang]}</Text>
          <View style={styles.rule} />
          <Text style={styles.body}>
            {data.languages
              .map(
                (l: LanguageProficiency) =>
                  `${languageName(l.name, lang)}: ${levelToProficiency(l.level, lang)}`,
              )
              .join('   ·   ')}
          </Text>
        </View>

        {/* FOOTER */}
        <View style={styles.footer} fixed>
          <Text>{generatedDate(lang)}</Text>
          <Text
            render={({ pageNumber, totalPages }) =>
              totalPages > 1 ? `${pageNumber} / ${totalPages}` : ''
            }
          />
          <Link style={styles.link} src="https://andrea0x.me">
            andrea0x.me
          </Link>
        </View>
      </Page>
    </Document>
  );
}

export default CVDocument;
