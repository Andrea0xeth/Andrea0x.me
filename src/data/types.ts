// Type definitions for the canonical portfolio dataset.
// This file is the single source of truth for the schema consumed by the site.
// All BilingualString fields MUST contain both `it` and `en` values.

export type Locale = "it" | "en";

export type BilingualString = { it: string; en: string };

export type BilingualStringArray = { it: string[]; en: string[] };

// ----- Personal & social ------------------------------------------------------

export interface Personal {
  name: string;
  handle: string;
  nationality: string;
  birthYear: number;
  workMode: BilingualString;
  shortBio: BilingualString;
  longBio: BilingualString;
  avatarReal: string;
  avatarAnon: string;
}

export interface Social {
  email: string;
  telegram: string;
  linkedin: string;
  twitter: string;
  github: string;
  discord: string;
  mirror: string;
  calendly: string;
}

// ----- Hero / tagline ---------------------------------------------------------

export interface Tagline {
  primary: BilingualString;
  typewriter: { it: string[]; en: string[] };
}

// ----- Pillars ----------------------------------------------------------------

export type PillarId =
  | "traditional-dev"
  | "ai-eng"
  | "cloud-devops"
  | "web3"
  | "it-mgmt"
  | "business";

export interface PillarMetric {
  label: BilingualString;
  value: string;
}

export interface Pillar {
  id: PillarId;
  title: BilingualString;
  summary: BilingualString;
  metrics: PillarMetric[];
  tags: string[];
}

// ----- Case studies -----------------------------------------------------------

export type CaseStudyStatus = "production" | "pre-launch" | "completed" | "active";

export interface CaseStudyDecision {
  title: BilingualString;
  body: BilingualString;
}

export interface CaseStudyResult {
  label: BilingualString;
  value: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  domain: BilingualString;
  role: BilingualString;
  period: string;
  status: CaseStudyStatus;
  clients?: string[];
  problem: BilingualString;
  architecture: BilingualString;
  decisions: CaseStudyDecision[];
  results: CaseStudyResult[];
  techStack: string[];
  pillarsTouched: PillarId[];
  image: string;
  link?: string;
  featured: boolean;
}

// ----- Experience & education ------------------------------------------------

export interface Experience {
  company: string;
  position: BilingualString;
  period: string;
  type: BilingualString;
  description: BilingualString;
  link?: string;
  logo: string;
}

export interface Education {
  title: BilingualString;
  period: string;
  description: BilingualString;
  link?: string;
}

// ----- Skills & services -----------------------------------------------------

export interface Skill {
  category: BilingualString;
  items: string[];
}

export interface Service {
  id: string;
  title: BilingualString;
  description: BilingualString;
  bulletPoints: BilingualStringArray;
  rateRange?: string;
}

// ----- Collaborations & projects ---------------------------------------------

export interface Collaboration {
  name: string;
  role: BilingualString;
  period: string;
  description: BilingualString;
  logo: string;
  link?: string;
}

export interface Project {
  title: string;
  description: BilingualString;
  image: string;
  gif?: string | null;
  link?: string;
  categories: string[];
  featured: boolean;
}

// ----- Tech stack tier --------------------------------------------------------

export type TechStackCategory =
  | "cloud"
  | "ai"
  | "web3"
  | "database"
  | "frontend"
  | "backend"
  | "devops"
  | "tools";

export interface TechStackItem {
  name: string;
  category: TechStackCategory;
  url?: string;
  /** Optional path to brand SVG/PNG, e.g. '/images/logos/tech/vercel.svg'. */
  logo?: string;
  /** Optional alternate logo for light theme (when default logo is dark-mode optimized). */
  logoLight?: string;
}

// ----- Stats & trustedBy ------------------------------------------------------

export interface Stat {
  label: BilingualString;
  value: string;
  caption?: BilingualString;
}

export interface TrustedByItem {
  name: string;
  logo: string;
  url: string;
  textOnly?: boolean;
}

export interface TrustedBy {
  enterprise: TrustedByItem[];
  institutions: TrustedByItem[];
  tools: TrustedByItem[];
}

// ----- Languages --------------------------------------------------------------

export interface LanguageProficiency {
  name: string;
  level: number;
}

// ----- Top-level dataset ------------------------------------------------------

export interface PortfolioData {
  personal: Personal;
  social: Social;
  taglines: Tagline;
  pillars: Pillar[];
  caseStudies: CaseStudy[];
  experience: Experience[];
  education: Education[];
  skills: Skill[];
  services: Service[];
  collaborations: Collaboration[];
  projects: Project[];
  trustedBy: TrustedBy;
  techStack: TechStackItem[];
  stats: Stat[];
  languages: LanguageProficiency[];
}
