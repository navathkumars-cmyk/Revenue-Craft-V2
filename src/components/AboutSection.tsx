import React from 'react';
import { ArrowRight, Compass, Eye, Zap, Cpu, BarChart2, DollarSign, CheckCircle2 } from 'lucide-react';
import { NavSection } from '../types';
import { RevealOnScroll } from './RevealOnScroll';

interface AboutSectionProps {
  onNavigate: (section: NavSection) => void;
  onOpenAudit: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onNavigate, onOpenAudit }) => {
  const targetSegments = [
    'B2B',
    'B2C',
    'D2C',
    'eCommerce',
    'SaaS',
    'Startups',
    'Local Businesses',
    'Franchise Brands',
    'Service Businesses',
  ];

  const sixPillars = [
    {
      icon: Compass,
      title: 'Strategy gives us direction.',
      desc: 'Defining where to compete, who to target, and how to position your brand for sustainable market advantage.',
    },
    {
      icon: Eye,
      title: 'Creative earns attention.',
      desc: 'Designing hooks, messaging, and high-impact visual assets that turn passive scrollers into engaged buyers.',
    },
    {
      icon: Zap,
      title: 'Performance marketing generates demand.',
      desc: 'Executing precision campaigns across Google, Meta, LinkedIn, and YouTube that capture and create qualified intent.',
    },
    {
      icon: Cpu,
      title: 'Technology improves efficiency.',
      desc: 'Deploying AI intelligence, CRM routing, and automated workflows that eliminate friction between marketing and sales.',
    },
    {
      icon: BarChart2,
      title: 'Data tells us what works.',
      desc: 'Audited server-side measurement, conversion attribution, and deduplicated reporting that guide profitable budget scaling.',
    },
    {
      icon: DollarSign,
      title: 'Revenue measures the result.',
      desc: 'The ultimate bottom-line benchmark. Every campaign is judged strictly by bankable business outcomes.',
    },
  ];

  return (
    <section id="about" className="py-24 bg-[#141414] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <RevealOnScroll direction="up" duration={800}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FECF05]/10 border border-[#FECF05]/20 text-[#FECF05] text-xs font-bold uppercase tracking-widest mb-4">
              <span>ABOUT US</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white font-syne tracking-tight mb-6">
              We Craft Performance.{' '}
              <span className="text-[#FECF05]">You Grow Revenue</span>.
            </h2>
            <p className="text-base sm:text-lg text-[#C1C1C1] leading-relaxed font-light">
              Revenue Craft Digital is an <strong className="text-white font-semibold">AI-powered performance marketing company</strong> helping businesses acquire customers, generate qualified leads and scale revenue through measurable digital marketing.
            </p>
          </div>
        </RevealOnScroll>

        {/* Segments Pill Track */}
        <RevealOnScroll direction="up" duration={750} delay={100}>
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#A0A0A0] block mb-3">
              We partner with ambitious teams across:
            </span>
            <div className="flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto">
              {targetSegments.map((segment) => (
                <span
                  key={segment}
                  className="px-3.5 py-1.5 rounded-full bg-[#1C1C1C] border border-white/10 text-xs font-bold text-white hover:border-[#FECF05] transition-colors shadow-sm"
                >
                  {segment}
                </span>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        {/* The Central Question Feature Card */}
        <RevealOnScroll direction="up" duration={800} delay={150}>
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#1C1C1C] via-[#222222] to-[#1C1C1C] border border-white/15 max-w-4xl mx-auto mb-20 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#FECF05]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 text-center">
              <span className="text-xs font-black uppercase tracking-widest text-[#FECF05] block mb-3">
                THE FOUNDATIONAL QUESTION
              </span>
              <h3 className="text-2xl sm:text-4xl font-black font-syne text-white mb-4">
                "What business result are we trying to create?"
              </h3>
              <p className="text-base sm:text-lg text-[#C1C1C1] max-w-2xl mx-auto mb-4 font-light leading-relaxed">
                Because marketing shouldn't exist just to fill dashboards. It should contribute directly to business growth.
              </p>
              <p className="text-sm text-[#A0A0A0] max-w-2xl mx-auto leading-relaxed">
                Our approach brings together performance marketing, creative strategy, branding, SEO, websites, analytics, CRM and automation. Our team combines human strategy, advertising expertise, data and AI-powered technology to identify opportunities, improve efficiency and scale what works.
              </p>
            </div>
          </div>
        </RevealOnScroll>

        {/* The 6 Pillars Grid */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <span className="text-xs font-black uppercase tracking-widest text-[#FECF05]">
              OUR OPERATING PRINCIPLES
            </span>
            <h3 className="text-2xl sm:text-3xl font-black font-syne text-white mt-1">
              Six Fundamentals That Drive Every Campaign
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sixPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <RevealOnScroll
                  key={pillar.title}
                  direction="up"
                  duration={700}
                  delay={idx * 80}
                >
                  <div className="p-6 sm:p-7 rounded-2xl bg-[#1C1C1C] border border-white/10 hover:border-[#FECF05] transition-all duration-300 h-full flex flex-col justify-between group shadow-lg">
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-[#FECF05]/15 border border-[#FECF05]/30 flex items-center justify-center text-[#FECF05] mb-5 group-hover:scale-105 transition-transform">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h4 className="text-base sm:text-lg font-bold font-syne text-white mb-2 group-hover:text-[#FECF05] transition-colors">
                        {pillar.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#A0A0A0] leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={() => onNavigate('services')}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#FECF05] text-[#141414] font-black text-xs sm:text-sm uppercase tracking-wider hover:bg-white hover:scale-105 transition-all shadow-xl shadow-[#FECF05]/20 cursor-pointer"
          >
            <span>Discover Revenue Craft Digital</span>
            <ArrowRight className="w-4 h-4 stroke-[3]" />
          </button>
        </div>
      </div>
    </section>
  );
};
