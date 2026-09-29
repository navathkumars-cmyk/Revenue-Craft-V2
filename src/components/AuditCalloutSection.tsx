import React from 'react';
import { ArrowRight, CheckCircle2, Search, BarChart3, AlertCircle, TrendingUp } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

interface AuditCalloutSectionProps {
  onOpenAudit: () => void;
}

export const AuditCalloutSection: React.FC<AuditCalloutSectionProps> = ({ onOpenAudit }) => {
  const auditPoints = [
    'Campaign Structure & Settings',
    'Advertising Spend & Capital Waste',
    'High-Intent Keywords & Search Terms',
    'Audience Cohorts & Overlap',
    'Ad Creative Fatigue & Hook Velocity',
    'Conversion Tracking & CAPI Signals',
    'Landing Page Conversion Leaks',
    'Lead Quality & CRM Attribution',
    'Remarketing Funnel Gaps',
    'Cross-Channel Budget Allocation',
  ];

  return (
    <section id="audit" className="py-24 bg-[#111111] text-white border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll direction="up" duration={800}>
          <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-br from-[#1C1C1C] via-[#222222] to-[#1C1C1C] border border-[#FECF05]/30 shadow-2xl relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#FECF05]/15 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FECF05]/15 border border-[#FECF05]/30 text-[#FECF05] text-xs font-bold uppercase tracking-widest mb-4">
                <Search className="w-3.5 h-3.5" />
                <span>COMPLIMENTARY AUDIT</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black font-syne text-white tracking-tight mb-4">
                Your Marketing Could Be{' '}
                <span className="text-[#FECF05]">Working Harder</span>.
              </h2>

              <p className="text-base sm:text-lg text-[#C1C1C1] max-w-2xl mx-auto mb-8 font-light leading-relaxed">
                Already running digital campaigns? We'll help you identify where opportunities and revenue leaks may be hiding.
              </p>

              {/* Scope Checklist */}
              <div className="mb-10 text-left">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#A0A0A0] text-center mb-4">
                  Our comprehensive performance audit can review:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {auditPoints.map((point) => (
                    <div
                      key={point}
                      className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2.5 text-xs font-medium text-white"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#FECF05] shrink-0" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* The Goal Callout */}
              <div className="p-5 rounded-2xl bg-[#141414] border border-white/10 max-w-2xl mx-auto mb-8">
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#FECF05] block mb-2">
                  THE OBJECTIVE
                </span>
                <p className="text-sm sm:text-base font-bold text-white flex flex-wrap items-center justify-center gap-3">
                  <span className="text-emerald-400">✓ What's working.</span>
                  <span className="text-rose-400">✗ What's not.</span>
                  <span className="text-amber-400">⚠ What's being wasted.</span>
                  <span className="text-[#FECF05]">⚡ What can scale.</span>
                </p>
              </div>

              {/* CTA Button */}
              <button
                onClick={onOpenAudit}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#FECF05] text-[#141414] font-black text-xs sm:text-sm uppercase tracking-wider hover:bg-white hover:scale-105 transition-all shadow-xl shadow-[#FECF05]/25 cursor-pointer"
              >
                <span>Get My Free Growth Audit</span>
                <ArrowRight className="w-4 h-4 stroke-[3]" />
              </button>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
