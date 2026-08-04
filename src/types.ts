export type NavSection = 'overview' | 'expertise' | 'case-studies' | 'philosophy' | 'journal';

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  sector: 'E-Commerce Scale' | 'SaaS Growth' | 'FinTech' | 'Global Rebrand';
  summary: string;
  description: string;
  keyMetricLabel: string;
  keyMetricValue: string;
  keyMetricSubtext: string;
  bgImage: string;
  isFeatured?: boolean;
  isOffset?: boolean;
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

export interface ExpertisePillar {
  id: string;
  code: string;
  title: string;
  description: string;
  icon: string;
  subItems: {
    name: string;
    detail: string;
  }[];
  caseStudyRefId?: string;
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

export interface ConsultationFormData {
  fullName: string;
  workEmail: string;
  companyName: string;
  annualRevenue: string;
  focusArea: string;
  growthObjective: string;
  notes: string;
  preferredDate: string;
}
