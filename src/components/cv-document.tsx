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
// Fonts
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

Font.registerHyphenationCallback((word) => [word]);

// ---------------------------------------------------------------------------
// Tokens
// ---------------------------------------------------------------------------

const ACCENT = '#3b82f6';
const TEXT = '#0f172a';
const TEXT_2 = '#334155';
const TEXT_3 = '#64748b';
const RULE = '#e2e8f0';

// Page geometry — A4 in pt = 595×842; we use safe margins.
const PAGE_PADDING_X = 30;
const SIDEBAR_W = 165;
const COL_GAP = 18;

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------

const styles = StyleSheet.create({
  page: {
    paddingTop: 28,
    paddingBottom: 40,
    paddingHorizontal: PAGE_PADDING_X,
    fontFamily: 'Inter',
    fontSize: 9,
    color: TEXT,
    lineHeight: 1.4,
  },

  // ── Header ────────────────────────────────────────────────────────────────
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  photo: {
    width: 54,
    height: 54,
    borderRadius: 27,
    marginRight: 14,
    objectFit: 'cover',
  },
  headerText: { flex: 1 },
  name: {
    fontSize: 22,
    fontWeight: 700,
    color: TEXT,
    letterSpacing: -0.4,
    lineHeight: 1.1,
  },
  handle: {
    fontFamily: 'JetBrainsMono',
    fontSize: 10,
    color: TEXT_3,
    marginTop: 2,
  },
  tagline: {
    fontSize: 10,
    color: TEXT_2,
    marginTop: 3,
    fontWeight: 500,
  },

  // ── Body ──────────────────────────────────────────────────────────────────
  body: {
    flexDirection: 'row',
  },
  sidebar: {
    width: SIDEBAR_W,
    marginRight: COL_GAP,
  },
  main: {
    flex: 1,
  },

  // ── Section ───────────────────────────────────────────────────────────────
  section: {
    marginBottom: 14,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  accentBar: {
    width: 3,
    height: 11,
    backgroundColor: ACCENT,
    borderRadius: 1,
    marginRight: 6,
  },
  sectionTitle: {
    fontSize: 9,
    fontFamily: 'JetBrainsMono',
    fontWeight: 500,
    color: TEXT_2,
    textTransform: 'uppercase',
    letterSpacing: 0.6,
  },

  // ── Sidebar ───────────────────────────────────────────────────────────────
  contactItem: {
    flexDirection: 'row',
    marginBottom: 3,
  },
  contactKey: {
    fontFamily: 'JetBrainsMono',
    color: TEXT_3,
    fontSize: 8,
    width: 42,
  },
  contactVal: {
    flex: 1,
    fontSize: 8.5,
    color: TEXT_2,
  },
  linkAccent: {
    color: ACCENT,
    textDecoration: 'none',
  },
  langRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 2.5,
  },
  langName: {
    fontSize: 8.5,
    color: TEXT,
    fontWeight: 500,
  },
  langLevel: {
    fontSize: 8,
    color: TEXT_3,
    fontFamily: 'JetBrainsMono',
  },
  eduRow: {
    marginBottom: 5,
  },
  eduTitle: {
    fontSize: 8.5,
    color: TEXT,
    fontWeight: 500,
    lineHeight: 1.3,
  },
  eduMeta: {
    fontSize: 8,
    color: TEXT_3,
    fontFamily: 'JetBrainsMono',
    marginTop: 1,
  },
  serviceItem: {
    fontSize: 8.5,
    color: TEXT_2,
    marginBottom: 2,
  },
  serviceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginBottom: 3,
  },
  serviceName: {
    fontSize: 8,
    color: TEXT,
    flex: 1,
    paddingRight: 4,
    lineHeight: 1.25,
  },
  serviceRate: {
    fontFamily: 'JetBrainsMono',
    fontSize: 7.5,
    color: ACCENT,
    fontWeight: 500,
  },
  rateNote: {
    fontSize: 7,
    color: TEXT_3,
    fontFamily: 'JetBrainsMono',
    marginTop: 5,
    lineHeight: 1.3,
  },
  rate: {
    fontFamily: 'JetBrainsMono',
    fontSize: 9,
    color: ACCENT,
    fontWeight: 700,
    marginTop: 4,
  },

  // ── Main ──────────────────────────────────────────────────────────────────
  summary: {
    fontSize: 9.5,
    color: TEXT_2,
    lineHeight: 1.5,
  },

  pillarItem: {
    marginBottom: 6,
  },
  pillarTitle: {
    fontSize: 9.5,
    fontWeight: 600,
    color: TEXT,
    marginBottom: 1,
  },
  pillarSummary: {
    fontSize: 9,
    color: TEXT_2,
    marginBottom: 2,
  },
  pillarTags: {
    fontSize: 7.5,
    fontFamily: 'JetBrainsMono',
    color: TEXT_3,
  },

  expEntry: {
    marginBottom: 8,
  },
  expHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 1,
  },
  expRole: {
    fontSize: 9.5,
    fontWeight: 600,
    color: TEXT,
    flex: 1,
    paddingRight: 8,
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
    marginBottom: 2,
  },
  expDesc: {
    fontSize: 9,
    color: TEXT_2,
    lineHeight: 1.4,
  },

  projEntry: {
    marginBottom: 9,
  },
  projTitleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 1,
  },
  projTitle: {
    fontSize: 10,
    fontWeight: 600,
    color: TEXT,
    flex: 1,
    paddingRight: 8,
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
    marginBottom: 2,
  },
  projDesc: {
    fontSize: 9,
    color: TEXT_2,
    marginBottom: 4,
    lineHeight: 1.4,
  },
  metricsRow: {
    flexDirection: 'row',
    marginTop: 2,
  },
  metricCell: {
    flex: 1,
    paddingRight: 10,
  },
  metricValue: {
    fontFamily: 'JetBrainsMono',
    fontSize: 11,
    fontWeight: 700,
    color: ACCENT,
    letterSpacing: -0.3,
    marginBottom: 1,
  },
  metricLabel: {
    fontSize: 6.5,
    fontFamily: 'JetBrainsMono',
    color: TEXT_3,
    textTransform: 'uppercase',
    letterSpacing: 0.4,
    lineHeight: 1.3,
  },

  // ── Footer ────────────────────────────────────────────────────────────────
  footer: {
    position: 'absolute',
    bottom: 16,
    left: PAGE_PADDING_X,
    right: PAGE_PADDING_X,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 0.5,
    borderTopColor: RULE,
    paddingTop: 6,
  },
  footerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  footerQr: {
    width: 26,
    height: 26,
    marginRight: 8,
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
  generated: { it: 'Generato', en: 'Generated' },
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

function firstSentence(text: string): string {
  const trimmed = text.trim();
  const m = trimmed.match(/^(.+?[.!?])(\s+[A-ZÀ-Ý])/);
  return m ? m[1] : trimmed;
}

function generatedDate(lang: Lang): string {
  const d = new Date();
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  const dd = String(d.getDate()).padStart(2, '0');
  return `${T.generated[lang]} ${yyyy}-${mm}-${dd}`;
}

// ---------------------------------------------------------------------------
// Sub-components
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
  qrDataUrl?: string;
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
        <View style={styles.header}>
          {photoSrc && <Image src={photoSrc} style={styles.photo} />}
          <View style={styles.headerText}>
            <Text style={styles.name}>{data.personal.name}</Text>
            <Text style={styles.handle}>· {data.personal.handle}</Text>
            <Text style={styles.tagline}>{tagline}</Text>
          </View>
        </View>

        {/* BODY */}
        <View style={styles.body}>
          {/* SIDEBAR */}
          <View style={styles.sidebar}>
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
                  Andrea0xeth
                </Link>
              </View>
              <View style={styles.contactItem}>
                <Text style={styles.contactKey}>linkedin</Text>
                <Link style={[styles.contactVal, styles.linkAccent]} src={data.social.linkedin}>
                  andrea-ritondale
                </Link>
              </View>
              <View style={styles.contactItem}>
                <Text style={styles.contactKey}>x</Text>
                <Link style={[styles.contactVal, styles.linkAccent]} src={data.social.twitter}>
                  @andrea0x_eth
                </Link>
              </View>
              <View style={styles.contactItem}>
                <Text style={styles.contactKey}>loc</Text>
                <Text style={styles.contactVal}>
                  {data.personal.nationality}
                </Text>
              </View>
            </View>

            <View style={styles.section}>
              <SectionHeader title={T.languages[lang]} />
              {data.languages.map((l: LanguageProficiency) => (
                <View key={l.name} style={styles.langRow}>
                  <Text style={styles.langName}>{languageName(l.name, lang)}</Text>
                  <Text style={styles.langLevel}>{levelToProficiency(l.level, lang)}</Text>
                </View>
              ))}
            </View>

            <View style={styles.section}>
              <SectionHeader title={T.education[lang]} />
              {data.education.map((ed, idx) => (
                <View key={idx} style={styles.eduRow} wrap={false}>
                  <Text style={styles.eduTitle}>{ed.title[lang]}</Text>
                  <Text style={styles.eduMeta}>{ed.period}</Text>
                </View>
              ))}
            </View>

            <View style={styles.section}>
              <SectionHeader title={T.available[lang]} />
              {data.services.map((svc) => (
                <View key={svc.id} style={styles.serviceRow}>
                  <Text style={styles.serviceName}>{svc.title[lang]}</Text>
                  {svc.rateRange && (
                    <Text style={styles.serviceRate}>{svc.rateRange}</Text>
                  )}
                </View>
              ))}
              <Text style={styles.rateNote}>
                {lang === 'it'
                  ? '* Tariffe indicative · aperto a contrattazione'
                  : '* Indicative rates · open to negotiation'}
              </Text>
            </View>
          </View>

          {/* MAIN */}
          <View style={styles.main}>
            <View style={styles.section}>
              <SectionHeader title={T.summary[lang]} />
              <Text style={styles.summary}>{summary}</Text>
            </View>

            <View style={styles.section}>
              <SectionHeader title={T.pillars[lang]} />
              {data.pillars.map((p) => (
                <View key={p.id} style={styles.pillarItem} wrap={false}>
                  <Text style={styles.pillarTitle}>{p.title[lang]}</Text>
                  <Text style={styles.pillarSummary}>{p.summary[lang]}</Text>
                  {p.tags.length > 0 && (
                    <Text style={styles.pillarTags}>
                      {p.tags.slice(0, 5).join(' · ')}
                    </Text>
                  )}
                </View>
              ))}
            </View>

            <View style={styles.section}>
              <SectionHeader title={T.experience[lang]} />
              {data.experience.slice(0, 6).map((exp, idx) => (
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

            <View style={styles.section} break>
              <SectionHeader title={T.projects[lang]} />
              {featured.map((cs) => {
                const topMetrics = cs.results.slice(0, 3);
                return (
                  <View key={cs.slug} style={styles.projEntry} wrap={false}>
                    <View style={styles.projTitleRow}>
                      <Text style={styles.projTitle}>{cs.title}</Text>
                      <Text style={styles.expPeriod}>{cs.period}</Text>
                    </View>
                    <Text style={styles.projMeta}>
                      <Text style={styles.projSlug}>/{cs.slug}</Text> · {cs.domain[lang]} · {cs.role[lang]}
                    </Text>
                    <Text style={styles.projDesc}>{firstSentence(cs.architecture[lang])}</Text>
                    {topMetrics.length > 0 && (
                      <View style={styles.metricsRow}>
                        {topMetrics.map((m, idx) => (
                          <View key={idx} style={styles.metricCell}>
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

        {/* FOOTER */}
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
// Surface unused export removed.
export { shortHost as _shortHost };
