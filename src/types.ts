export type NavSection = 
  | 'home' 
  | 'about' 
  | 'services' 
  | 'ecosystem'
  | 'industries' 
  | 'how-we-work' 
  | 'why-us' 
  | 'audit' 
  | 'team-location'
  | 'contact';

export interface ServiceDetail {
  id: string;
  category: string;
  headline: string;
  subheadline: string;
  description: string;
  subservices: {
    name: string;
    description?: string;
    items?: string[];
  }[];
  analysisChecklist?: string[];
  ctaText: string;
}

export interface IndustryItem {
  id: string;
  title?: string;
  name?: string;
  desc?: string;
  shortDesc?: string;
  url?: string;
  metaTitle?: string;
  metaDescription?: string;
  h1?: string;
  challenges?: string[];
  relevantServices?: string[];
  ctaText?: string;
  iconName?: string;
}

export interface HowWeWorkStep {
  step: string;
  title: string;
  desc: string[];
}

export interface ValuePillar {
  title: string;
  desc: string;
}

export interface ContactFormData {
  fullName: string;
  companyName: string;
  businessEmail: string;
  phone: string;
  website: string;
  businessType: string;
  serviceNeeded: string;
  monthlyBudget: string;
  growthGoal: string;
}

export interface ConsultationFormData {
  fullName: string;
  workEmail: string;
  companyName: string;
  phone: string;
  serviceCategory: string;
  monthlyBudget: string;
  goals: string;
}

export interface ServiceItem {
  id: string;
  category: string;
  title: string;
  shortDesc: string;
  tags?: string[];
  deliverables?: string[];
  image?: string;
  metrics?: string;
  url?: string;
  metaTitle?: string;
  metaDescription?: string;
  h1?: string;
  fullDesc?: string;
  whatYouGet?: string[];
  ourApproach?: string[];
  faq?: { q: string; a: string }[];
  ctaText?: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  sector: string;
  summary: string;
  description?: string;
  challenge: string;
  solution: string;
  keyMetricLabel: string;
  keyMetricValue: string;
  secondaryMetricLabel?: string;
  secondaryMetricValue?: string;
  image?: string;
  tags?: string[];
  url?: string;
  resultsBreakdown?: { label: string; value: string }[];
}

export interface JournalArticle {
  id: string;
  title: string;
  slug?: string;
  excerpt: string;
  date: string;
  category: string;
  readTime?: string;
  author?: string;
  authorRole?: string;
  image?: string;
  tags?: string[];
  content?: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image?: string;
  speciality?: string;
  linkedinUrl?: string;
}

export interface FAQItem {
  q: string;
  a: string;
}

export interface ComparisonPoint {
  metric: string;
  revenueCraft: string;
  traditional: string;
}
