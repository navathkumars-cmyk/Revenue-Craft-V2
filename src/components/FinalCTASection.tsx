import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';
import { NavSection } from '../types';

interface FinalCTASectionProps {
  onNavigate: (section: NavSection) => void;
  onOpenAudit: () => void;
}

export const FinalCTASection: React.FC<FinalCTASectionProps> = ({ onNavigate, onOpenAudit }) => {
  return (
    <section className="py-24 bg-[#141414] text-white border-t border-white/5 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#FECF05]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <RevealOnScroll direction="up" duration={800}>
          <span className="text-xs font-black uppercase tracking-[0.25em] text-[#FECF05] block mb-4">
            NEXT STEPS
          </span>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-syne text-white tracking-tight mb-4">
            Ready to Turn Marketing Into{' '}
            <span className="text-[#FECF05]">Revenue</span>?
          </h2>

          <p className="text-xl sm:text-2xl font-bold font-syne text-white/90 mb-4">
            Don't just spend on marketing. Build a growth engine.
          </p>

          <p className="text-sm sm:text-base text-[#C1C1C1] max-w-2xl mx-auto mb-6 leading-relaxed font-light">
            Revenue Craft Digital combines performance marketing, branding, creative, technology, AI and analytics to help businesses acquire customers and scale intelligently.
          </p>

          <div className="inline-block py-2 px-6 rounded-full bg-white/5 border border-white/10 text-base sm:text-lg font-black font-syne text-[#FECF05] mb-10">
            Scale Your Brand. Grow Your Revenue.
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#FECF05] text-[#141414] font-black text-xs sm:text-sm tracking-wider uppercase hover:bg-white hover:scale-105 transition-all shadow-xl shadow-[#FECF05]/25 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Start Your Growth Journey</span>
              <ArrowRight className="w-4 h-4 stroke-[3]" />
            </button>
            <button
              onClick={onOpenAudit}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 text-white font-bold text-xs sm:text-sm tracking-wider uppercase border border-white/15 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Get a Free Growth Audit</span>
            </button>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
