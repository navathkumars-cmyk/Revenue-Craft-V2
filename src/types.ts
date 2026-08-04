export type NavSection = 
  | 'overview' 
  | 'services' 
  | 'industries' 
  | 'case-studies' 
  | 'about' 
  | 'insights' 
  | 'contact';

export interface ServiceItem {
  id: string;
  category: 'Paid Media' | 'Tracking & Analytics' | 'Conversion & CRO' | 'Automation & AI' | 'Video & Brand Production';
  title: string;
  url: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  shortDesc: string;
  fullDesc: string;
  whatYouGet: string[];
  ourApproach: string[];
  faq: { q: string; a: string }[];
  ctaText: string;
}

export interface IndustryItem {
  id: string;
  title: string;
  url: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  shortDesc: string;
  challenges: string[];
  relevantServices: string[];
  ctaText: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image?: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  sector: 'SaaS' | 'D2C / E-commerce' | 'Healthcare' | 'Local / Franchise' | 'Real Estate' | 'B2B';
  summary: string;
  description: string;
  keyMetricLabel: string;
  keyMetricValue: string;
  keyMetricSubtext: string;
  bgImage: string;
  isFeatured?: boolean;
  challenge: string;
  solution: string;
  results: {
    label: string;
    value: string;
    change: string;
  }[];
  quote?: {
    text: string;
    author: string;
    title: string;
  };
}

export interface JournalArticle {
  id: string;
  category: string;
  date: string;
  readTime: string;
  title: string;
  excerpt: string;
  content: string[];
  author: {
    name: string;
    role: string;
  };
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ComparisonPoint {
  withoutPartner: string;
  withRevenueCraft: string;
}

export interface ConsultationFormData {
  fullName: string;
  workEmail: string;
  companyName: string;
  monthlyBudget: string;
  goals: string;
  preferredDate?: string;
  notes?: string;
}
