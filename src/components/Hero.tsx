import React from 'react';
import { ArrowRight, BarChart3, TrendingUp, Sparkles, CheckCircle2, ChevronRight } from 'lucide-react';
import { NavSection } from '../types';

interface HeroProps {
  onNavigate: (section: NavSection) => void;
  onOpenAudit: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate, onOpenAudit }) => {
  const coreTenets = [
    'Revenue-Focused',
    'Data-Driven',
    'AI-Powered',
    'Performance-Led',
    'Conversion-Oriented',
  ];

  const growthStages = [
    { label: 'Attention', icon: '01' },
    { label: 'Leads', icon: '02' },
    { label: 'Customers', icon: '03' },
    { label: 'Revenue', icon: '04' },
  ];

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#141414]">
      {/* Background Graphic Grid with Ambient Glow */}
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#FECF05_1px,transparent_1px)] [background-size:32px_32px]" />
      
      {/* Background Studio Visual with Scrim */}
      <div className="absolute inset-0 opacity-15 pointer-events-none mix-blend-luminosity overflow-hidden">
        <img
          src="/src/assets/images/hero_branding_cockpit_1790666731451.jpg"
          alt="Revenue Craft Digital Performance Engine"
          className="w-full h-full object-cover scale-105 filter blur-xs"
          referrerPolicy="no-referrer"
        />
        <div className="hero-scrim-gradient absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/80 to-transparent" />
      </div>

      {/* Floating Ambient Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#FECF05]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        {/* Master Brand Kicker */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest mb-6">
          <span className="w-2 h-2 rounded-full bg-[#FECF05] animate-ping" />
          <span className="text-[#FECF05] font-black">REVENUE CRAFT DIGITAL</span>
          <span className="text-white/40">·</span>
          <span className="text-white/80">PERFORMANCE MARKETING</span>
        </div>

        {/* Main H1 Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white font-syne leading-[1.08] mb-4">
          Scale Your Brand.{' '}
          <span className="text-[#FECF05] relative inline-block">
            Grow Your Revenue
            <span className="absolute -bottom-1.5 left-0 right-0 h-1.5 bg-[#FECF05] rounded-full hidden sm:block" />
          </span>
          .
        </h1>

        {/* Subtitle */}
        <h2 className="text-xl sm:text-2xl lg:text-3xl text-white/90 font-bold mb-6 font-syne">
          AI-Powered Performance Marketing Built for Measurable Growth.
        </h2>

        {/* Tenets Pill Row */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          <span className="text-xs uppercase font-bold text-white/70 mr-1 hidden sm:inline">
            At Revenue Craft Digital, our work is always:
          </span>
          {coreTenets.map((tenet) => (
            <span
              key={tenet}
              className="px-3 py-1 rounded-full bg-white/5 border border-white/15 text-xs font-extrabold text-[#FECF05]"
            >
              {tenet}
            </span>
          ))}
        </div>

        {/* Narrative Description */}
        <p className="text-base sm:text-lg text-[#C1C1C1] max-w-3xl mx-auto mb-8 leading-relaxed font-normal">
          We help ambitious brands turn marketing investment into measurable business growth. From Google Ads and Meta Ads to branding, creative, SEO, websites, automation and analytics, we build connected marketing systems designed to generate:
        </p>

        {/* Growth Loop Flow: Attention → Leads → Customers → Revenue */}
        <div className="p-4 sm:p-5 rounded-2xl bg-[#1C1C1C] border border-white/15 max-w-2xl mx-auto mb-10 shadow-xl">
          <div className="flex items-center justify-between gap-1 sm:gap-2">
            {growthStages.map((stage, idx) => (
              <React.Fragment key={stage.label}>
                <div className="flex flex-col items-center flex-1">
                  <div className="w-8 h-8 rounded-full bg-[#FECF05]/15 border border-[#FECF05]/40 flex items-center justify-center text-xs font-black text-[#FECF05] mb-1 font-mono-custom">
                    {stage.icon}
                  </div>
                  <span className="text-xs sm:text-sm font-extrabold font-syne text-white">
                    {stage.label}
                  </span>
                </div>
                {idx < growthStages.length - 1 && (
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#FECF05] shrink-0 opacity-70" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Target Segments & The Punchline */}
        <div className="max-w-3xl mx-auto mb-10 text-sm sm:text-base text-[#A0A0A0] leading-relaxed">
          <p className="mb-3">
            Whether you're a <strong className="text-white">B2B business</strong> looking for qualified opportunities, a <strong className="text-white">B2C brand</strong> looking for customers, or a <strong className="text-white">D2C/eCommerce business</strong> looking to scale sales, we focus on the metrics that actually matter.
          </p>
          <div className="inline-flex items-center gap-2 sm:gap-4 flex-wrap justify-center py-2 px-4 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm font-bold text-white/90">
            <span className="text-[#8E8E8E] line-through">Not just impressions.</span>
            <span className="text-[#8E8E8E] line-through">Not just clicks.</span>
            <span className="text-[#8E8E8E] line-through">Not just leads.</span>
            <span className="text-[#FECF05] font-black uppercase tracking-wider">Growth that can be measured.</span>
          </div>
        </div>

        {/* Dual CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <button
            onClick={() => onNavigate('contact')}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#FECF05] text-[#141414] font-black text-xs sm:text-sm tracking-wider uppercase hover:bg-white hover:scale-105 transition-all duration-200 shadow-xl shadow-[#FECF05]/25 flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Start Your Growth Journey</span>
            <ArrowRight className="w-4 h-4 stroke-[3]" />
          </button>
          <button
            onClick={onOpenAudit}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 text-white font-bold text-xs sm:text-sm tracking-wider uppercase border border-white/15 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Get a Free Growth Audit</span>
          </button>
        </div>
      </div>
    </section>
  );
};
