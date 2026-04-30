import path from 'path';
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Link,
  Image,
  Font,
} from '@react-pdf/renderer';
import type { PortfolioData, LanguageProficiency } from '@/data/types';

type Lang = 'it' | 'en';

// ---------------------------------------------------------------------------
// Fonts — Inter + JetBrains Mono, registered once at module load
// ---------------------------------------------------------------------------

const fontsDir = path.join(process.cwd(), 'public', 'fonts', 'cv');

Font.register({
  family: 'Inter',
  fonts: [
    { src: path.join(fontsDir, 'inter-400.ttf'), fontWeight: 400 },
    { src: path.join(fontsDir, 'inter-500.ttf'), fontWeight: 500 },
    { src: path.join(fontsDir, 'inter-600.ttf'), fontWeight: 600 },
    { src: path.join(fontsDir, 'inter-700.ttf'), fontWeight: 700 },
  ],
});

Font.register({
  family: 'JetBrainsMono',
  fonts: [
    { src: path.join(fontsDir, 'jbmono-400.ttf'), fontWeight: 400 },
    { src: path.join(fontsDir, 'jbmono-500.ttf'), fontWeight: 500 },
    { src: path.join(fontsDir, 'jbmono-700.ttf'), fontWeight: 700 },
  ],
});

// Disable hyphenation entirely — CV reads cleaner with full words.
Font.registerHyphenationCallback((word) => [word]);

// ---------------------------------------------------------------------------
// Tokens
// ---------------------------------------------------------------------------

const ACCENT = '#3b82f6';
const TEXT = '#0f172a';
const TEXT_2 = '#334155';
const TEXT_3 = '#64748b';
const RULE = '#e2e8f0';
const SOFT = '#f8fafc';

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------

const styles = StyleSheet.create({
  page: {
    paddingTop: 28,
    paddingBottom: 36,
    paddingHorizontal: 28,
    fontFamily: 'Inter',
    fontSize: 9,
    color: TEXT,
    lineHeight: 1.36,
  },

  // ── Header (full width, top) ──────────────────────────────────────────────
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    marginBottom: 6,
  },
  photo: {
    width: 56,
    height: 56,
    borderRadius: 28,
    objectFit: 'cover',
  },
  headerCol: { flex: 1 },
  name: {
    fontSize: 22,
    fontFamily: 'Inter',
    fontWeight: 700,
    color: TEXT,
    letterSpacing: -0.4,
    lineHeight: 1.1,
  },
  handle: {
    fontFamily: 'JetBrainsMono',
    fontSize: 11,
    color: TEXT_3,
    fontWeight: 400,
  },
  tagline: {
    fontSize: 10,
    color: TEXT_2,
    marginTop: 2,
    fontWeight: 500,
  },

  // ── Two-column body ───────────────────────────────────────────────────────
  body: {
    flexDirection: 'row',
    gap: 18,
    marginTop: 8,
  },
  sidebar: {
    width: '34%',
  },
  main: {
    flex: 1,
  },

  // ── Section header (vertical accent + label) ──────────────────────────────
  section: {
    marginBottom: 12,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 6,
  },
  accentBar: {
    width: 3,
    height: 11,
    backgroundColor: ACCENT,
    borderRadius: 1,
  },
  sectionTitle: {
    fontSize: 9,
    fontFamily: 'JetBrainsMono',
    fontWeight: 500,
    color: TEXT_2,
    textTransform: 'uppercase',
    letterSpacing: 0.6,
  },

  // ── Sidebar items ─────────────────────────────────────────────────────────
  contactItem: {
    flexDirection: 'row',
    marginBottom: 2.5,
    fontSize: 8.5,
    color: TEXT_2,
  },
  contactKey: {
    fontFamily: 'JetBrainsMono',
    color: TEXT_3,
    width: 44,
  },
  contactVal: {
    flex: 1,
    color: TEXT_2,
  },
  link: {
    color: TEXT_2,
    textDecoration: 'none',
  },
  linkAccent: {
    color: ACCENT,
    textDecoration: 'none',
  },
  langRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 2,
    fontSize: 8.5,
  },
  langName: {
    color: TEXT,
    fontWeight: 500,
  },
  langLevel: {
    color: TEXT_3,
    fontFamily: 'JetBrainsMono',
    fontSize: 8,
  },
  eduCompact: {
    marginBottom: 4,
  },
  eduTitle: {
    fontSize: 8.5,
    color: TEXT,
    fontWeight: 500,
  },
  eduMeta: {
    fontSize: 8,
    color: TEXT_3,
    fontFamily: 'JetBrainsMono',
    marginTop: 0.5,
  },
  serviceItem: {
    fontSize: 8.5,
    color: TEXT_2,
    marginBottom: 1.5,
  },
  rate: {
    fontFamily: 'JetBrainsMono',
    fontSize: 8.5,
    color: ACCENT,
    fontWeight: 500,
    marginTop: 2,
  },

  // ── Main column ───────────────────────────────────────────────────────────
  summary: {
    fontSize: 9,
    color: TEXT_2,
    lineHeight: 1.45,
  },

  // Pillars (compact)
  pillarItem: {
    marginBottom: 4,
  },
  pillarRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 4,
  },
  pillarTitle: {
    fontSize: 9,
    fontFamily: 'Inter',
    fontWeight: 600,
    color: TEXT,
  },
  pillarSummary: {
    fontSize: 9,
    color: TEXT_2,
    flex: 1,
  },
  pillarTags: {
    fontSize: 8,
    fontFamily: 'JetBrainsMono',
    color: TEXT_3,
    marginTop: 1,
  },

  // Experience
  expEntry: {
    marginBottom: 7,
  },
  expHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginBottom: 0.5,
  },
  expRole: {
    fontSize: 9.5,
    fontFamily: 'Inter',
    fontWeight: 600,
    color: TEXT,
    flex: 1,
    paddingRight: 6,
  },
  expPeriod: {
    fontSize: 8,
    fontFamily: 'JetBrainsMono',
    color: TEXT_3,
  },
  expCompany: {
    fontSize: 9,
    color: ACCENT,
    fontWeight: 500,
    marginBottom: 1,
  },
  expDesc: {
    fontSize: 9,
    color: TEXT_2,
  },

  // Projects
  projEntry: {
    marginBottom: 6,
  },
  projTitleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginBottom: 0.5,
  },
  projTitle: {
    fontSize: 9.5,
    fontFamily: 'Inter',
    fontWeight: 600,
    color: TEXT,
  },
  projSlug: {
    fontFamily: 'JetBrainsMono',
    fontSize: 8.5,
    color: TEXT_3,
    fontWeight: 400,
  },
  projMeta: {
    fontSize: 8.5,
    color: TEXT_3,
    marginBottom: 1,
  },
  projDesc: {
    fontSize: 9,
    color: TEXT_2,
    marginBottom: 1.5,
  },
  metricsRow: {
    flexDirection: 'row',
    gap: 14,
    marginTop: 2,
  },
  metric: {
    flexDirection: 'column',
  },
  metricValue: {
    fontFamily: 'JetBrainsMono',
    fontSize: 11,
    fontWeight: 700,
    color: ACCENT,
    letterSpacing: -0.3,
  },
  metricLabel: {
    fontSize: 7,
    fontFamily: 'JetBrainsMono',
    color: TEXT_3,
    textTransform: 'uppercase',
    letterSpacing: 0.4,
    marginTop: 0.5,
  },

  // ── Footer (fixed at bottom of every page) ────────────────────────────────
  footer: {
    position: 'absolute',
    bottom: 16,
    left: 28,
    right: 28,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: 7.5,
    color: TEXT_3,
    borderTopWidth: 0.5,
    borderTopColor: RULE,
    paddingTop: 6,
  },
  footerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  footerQr: {
    width: 28,
    height: 28,
  },
  footerText: {
    fontSize: 7.5,
    color: TEXT_3,
    fontFamily: 'JetBrainsMono',
  },
  footerLink: {
    fontSize: 8,
    color: ACCENT,
    fontFamily: 'JetBrainsMono',
    fontWeight: 500,
    textDecoration: 'none',
  },
});

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

const T = {
  summary: { it: 'Profilo', en: 'Profile' },
  pillars: { it: 'Competenze chiave', en: 'Core competencies' },
  experience: { it: 'Esperienza', en: 'Experience' },
  projects: { it: 'Progetti selezionati', en: 'Selected projects' },
  education: { it: 'Formazione', en: 'Education' },
  languages: { it: 'Lingue', en: 'Languages' },
  contact: { it: 'Contatti', en: 'Contact' },
  available: { it: 'Disponibilità', en: 'Available for' },
  generated: { it: 'Generato il', en: 'Generated' },
  scanCv: { it: 'Scansiona per il portfolio', en: 'Scan for portfolio' },
} satisfies Record<string, Record<Lang, string>>;

function levelToProficiency(level: number, lang: Lang): string {
  if (level >= 95) return lang === 'it' ? 'Madrelingua' : 'Native';
  if (level >= 75) return lang === 'it' ? 'Fluente · C1/C2' : 'Fluent · C1/C2';
  if (level >= 55) return lang === 'it' ? 'Avanzato · B2' : 'Advanced · B2';
  if (level >= 35) return lang === 'it' ? 'Intermedio · B1' : 'Intermediate · B1';
  if (level >= 15) return lang === 'it' ? 'Base · A2' : 'Basic · A2';
  return lang === 'it' ? 'Elementare · A1' : 'Elementary · A1';
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

// Reduce paragraph to its first sentence — keeps CV cards tight.
function firstSentence(text: string): string {
  const trimmed = text.trim();
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
// Section sub-components
// ---------------------------------------------------------------------------

function SectionHeader({ title }: { title: string }) {
  return (
    <View style={styles.sectionHeader}>
      <View style={styles.accentBar} />
      <Text style={styles.sectionTitle}>{title}</Text>
    </View>
  );
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

interface CVDocumentProps {
  lang: Lang;
  data: PortfolioData;
  /** Pre-rendered QR data URL (data:image/png;base64,...) */
  qrDataUrl?: string;
  /** File system path to a profile photo readable by react-pdf <Image>. */
  photoSrc?: string;
}

export function CVDocument({ lang, data, qrDataUrl, photoSrc }: CVDocumentProps) {
  const featured = data.caseStudies.filter((cs) => cs.featured).slice(0, 4);
  const tagline = data.taglines.primary[lang];
  const summary = data.personal.shortBio[lang];

  return (
    <Document
      title={`${data.personal.name} — CV (${lang.toUpperCase()})`}
      author={data.personal.name}
      creator="andrea0x.me"
      producer="andrea0x.me"
    >
      <Page size="A4" style={styles.page}>
        {/* HEADER */}
        <View style={styles.headerRow}>
          {photoSrc && <Image src={photoSrc} style={styles.photo} />}
          <View style={styles.headerCol}>
            <Text style={styles.name}>{data.personal.name}</Text>
            <Text style={styles.handle}>· {data.personal.handle}</Text>
            <Text style={styles.tagline}>{tagline}</Text>
          </View>
        </View>

        {/* TWO-COLUMN BODY */}
        <View style={styles.body}>
          {/* SIDEBAR */}
          <View style={styles.sidebar}>
            {/* Contact */}
            <View style={styles.section}>
              <SectionHeader title={T.contact[lang]} />
              <View style={styles.contactItem}>
                <Text style={styles.contactKey}>email</Text>
                <Link style={[styles.contactVal, styles.linkAccent]} src={`mailto:${data.social.email}`}>
                  {data.social.email}
                </Link>
              </View>
              <View style={styles.contactItem}>
                <Text style={styles.contactKey}>web</Text>
                <Link style={[styles.contactVal, styles.linkAccent]} src="https://andrea0x.me">
                  andrea0x.me
                </Link>
              </View>
              <View style={styles.contactItem}>
                <Text style={styles.contactKey}>github</Text>
                <Link style={[styles.contactVal, styles.linkAccent]} src={data.social.github}>
                  {shortHost(data.social.github)}
                </Link>
              </View>
              <View style={styles.contactItem}>
                <Text style={styles.contactKey}>linkedin</Text>
                <Link style={[styles.contactVal, styles.linkAccent]} src={data.social.linkedin}>
                  {shortHost(data.social.linkedin)}
                </Link>
              </View>
              <View style={styles.contactItem}>
                <Text style={styles.contactKey}>x</Text>
                <Link style={[styles.contactVal, styles.linkAccent]} src={data.social.twitter}>
                  {shortHost(data.social.twitter)}
                </Link>
              </View>
              <View style={styles.contactItem}>
                <Text style={styles.contactKey}>loc</Text>
                <Text style={styles.contactVal}>
                  {data.personal.nationality} · {data.personal.workMode[lang]}
                </Text>
              </View>
            </View>

            {/* Languages */}
            <View style={styles.section}>
              <SectionHeader title={T.languages[lang]} />
              {data.languages.map((l: LanguageProficiency) => (
                <View key={l.name} style={styles.langRow}>
                  <Text style={styles.langName}>{languageName(l.name, lang)}</Text>
                  <Text style={styles.langLevel}>{levelToProficiency(l.level, lang)}</Text>
                </View>
              ))}
            </View>

            {/* Education (compact) */}
            <View style={styles.section}>
              <SectionHeader title={T.education[lang]} />
              {data.education.map((ed, idx) => (
                <View key={idx} style={styles.eduCompact} wrap={false}>
                  <Text style={styles.eduTitle}>{ed.title[lang]}</Text>
                  <Text style={styles.eduMeta}>{ed.period}</Text>
                </View>
              ))}
            </View>

            {/* Available for */}
            <View style={styles.section}>
              <SectionHeader title={T.available[lang]} />
              {data.services.slice(0, 3).map((svc) => (
                <Text key={svc.id} style={styles.serviceItem}>
                  · {svc.title[lang]}
                </Text>
              ))}
              <Text style={styles.rate}>€120–200/h</Text>
            </View>
          </View>

          {/* MAIN */}
          <View style={styles.main}>
            {/* Summary */}
            <View style={styles.section}>
              <SectionHeader title={T.summary[lang]} />
              <Text style={styles.summary}>{summary}</Text>
            </View>

            {/* Pillars */}
            <View style={styles.section}>
              <SectionHeader title={T.pillars[lang]} />
              {data.pillars.map((p) => (
                <View key={p.id} style={styles.pillarItem} wrap={false}>
                  <Text style={styles.pillarSummary}>
                    <Text style={styles.pillarTitle}>{p.title[lang]} </Text>
                    <Text>· {p.summary[lang]}</Text>
                  </Text>
                  {p.tags.length > 0 && (
                    <Text style={styles.pillarTags}>
                      {p.tags.slice(0, 5).join(' · ')}
                    </Text>
                  )}
                </View>
              ))}
            </View>

            {/* Experience */}
            <View style={styles.section}>
              <SectionHeader title={T.experience[lang]} />
              {data.experience.map((exp, idx) => (
                <View key={`${exp.company}-${idx}`} style={styles.expEntry} wrap={false}>
                  <View style={styles.expHeader}>
                    <Text style={styles.expRole}>{exp.position[lang]}</Text>
                    <Text style={styles.expPeriod}>{exp.period}</Text>
                  </View>
                  <Text style={styles.expCompany}>
                    {exp.company} · {exp.type[lang]}
                  </Text>
                  <Text style={styles.expDesc}>{firstSentence(exp.description[lang])}</Text>
                </View>
              ))}
            </View>

            {/* Projects */}
            <View style={styles.section}>
              <SectionHeader title={T.projects[lang]} />
              {featured.map((cs) => {
                const topMetrics = cs.results.slice(0, 3);
                return (
                  <View key={cs.slug} style={styles.projEntry} wrap={false}>
                    <View style={styles.projTitleRow}>
                      <Text style={styles.projTitle}>
                        {cs.title} <Text style={styles.projSlug}>/{cs.slug}</Text>
                      </Text>
                      <Text style={styles.expPeriod}>{cs.period}</Text>
                    </View>
                    <Text style={styles.projMeta}>
                      {cs.domain[lang]} · {cs.role[lang]}
                    </Text>
                    <Text style={styles.projDesc}>{firstSentence(cs.architecture[lang])}</Text>
                    {topMetrics.length > 0 && (
                      <View style={styles.metricsRow}>
                        {topMetrics.map((m, idx) => (
                          <View key={idx} style={styles.metric}>
                            <Text style={styles.metricValue}>{m.value}</Text>
                            <Text style={styles.metricLabel}>{m.label[lang]}</Text>
                          </View>
                        ))}
                      </View>
                    )}
                  </View>
                );
              })}
            </View>
          </View>
        </View>

        {/* FOOTER (fixed every page) */}
        <View style={styles.footer} fixed>
          <View style={styles.footerLeft}>
            {qrDataUrl && <Image src={qrDataUrl} style={styles.footerQr} />}
            <Text style={styles.footerText}>{generatedDate(lang)}</Text>
          </View>
          <Text
            style={styles.footerText}
            render={({ pageNumber, totalPages }) =>
              totalPages > 1 ? `${pageNumber} / ${totalPages}` : ''
            }
          />
          <Link style={styles.footerLink} src="https://andrea0x.me">
            andrea0x.me
          </Link>
        </View>
      </Page>
    </Document>
  );
}

export default CVDocument;
// Surface SOFT token for downstream usage (avoids unused warning).
export const _internalSoft = SOFT;
