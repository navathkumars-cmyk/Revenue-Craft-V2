import React, { useState } from 'react';
import { INDUSTRIES_LIST } from '../data/mockData';
import { IndustryItem, NavSection } from '../types';
import { Building2, ArrowUpRight, CheckCircle2, X, ShieldAlert } from 'lucide-react';

interface IndustriesHubProps {
  onNavigate: (section: NavSection) => void;
  onOpenConsultation: () => void;
  theme?: 'dark' | 'light';
}

export const IndustriesHub: React.FC<IndustriesHubProps> = ({
  onNavigate,
  onOpenConsultation,
  theme = 'dark'
}) => {
  const isLight = theme === 'light';
  const [selectedIndustry, setSelectedIndustry] = useState<IndustryItem | null>(null);

  return (
    <section id="industries" className={`max-w-[1440px] mx-auto px-6 lg:px-12 py-24 border-t ${
      isLight ? 'border-neutral-200' : 'border-white/10'
    }`}>
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
        <div>
          <span className="block font-mono-custom text-xs uppercase tracking-[0.4em] text-orange-500 font-bold mb-3">
            02 // INDUSTRY EXPERTISE
          </span>
          <h2 className={`font-syne text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight ${
            isLight ? 'text-black' : 'text-white'
          }`}>
            CATEGORY PLAYBOOKS<span className="text-orange-500">.</span>
          </h2>
        </div>
        <p className={`font-geist text-base max-w-lg leading-relaxed ${
          isLight ? 'text-neutral-600' : 'text-white/60'
        }`}>
          Category-Specific Playbooks, Not Generic Templates. Every industry has a different sales cycle, margin structure, and buyer journey. We adapt our measurement and campaign frameworks to fit yours.
        </p>
      </div>

      {/* Industries Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {INDUSTRIES_LIST.map((ind) => (
          <div
            key={ind.id}
            onClick={() => setSelectedIndustry(ind)}
            className={`group border p-7 transition-all duration-300 hover:border-orange-500 cursor-pointer flex flex-col justify-between hover:-translate-y-1 shadow-xl ${
              isLight
                ? 'bg-white border-neutral-200 text-neutral-900'
                : 'bg-[#111111] border-white/10 text-white'
            }`}
          >
            <div>
              <div className="flex justify-between items-center mb-6">
                <div className={`p-3 border ${
                  isLight ? 'bg-neutral-50 border-neutral-200' : 'bg-[#0A0A0A] border-white/10'
                }`}>
                  <Building2 className="w-5 h-5 text-orange-500" />
                </div>
                <span className="font-mono-custom text-xs text-orange-500 font-bold uppercase tracking-widest">
                  PLAYBOOK &rarr;
                </span>
              </div>

              <h3 className={`font-syne text-2xl font-bold uppercase tracking-tight mb-3 group-hover:text-orange-500 transition-colors ${
                isLight ? 'text-black' : 'text-white'
              }`}>
                {ind.title}
              </h3>

              <p className={`font-geist text-sm leading-relaxed mb-6 ${
                isLight ? 'text-neutral-600' : 'text-white/60'
              }`}>
                {ind.shortDesc}
              </p>
            </div>

            {/* Relevant Services Tags */}
            <div className={`pt-4 border-t space-y-2 ${isLight ? 'border-neutral-200' : 'border-white/10'}`}>
              <span className="text-[10px] uppercase font-mono-custom font-bold text-orange-500 block">
                CORE STACK:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {ind.relevantServices.map((srv, idx) => (
                  <span
                    key={idx}
                    className={`text-[10px] font-mono-custom font-medium px-2.5 py-1 border rounded-full ${
                      isLight
                        ? 'bg-neutral-100 border-neutral-300 text-neutral-800'
                        : 'bg-white/5 border-white/20 text-white/80'
                    }`}
                  >
                    {srv}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Selected Industry Modal */}
      {selectedIndustry && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div className={`border border-orange-500 max-w-3xl w-full p-6 sm:p-10 relative shadow-2xl my-8 overflow-hidden animate-in fade-in zoom-in-95 duration-200 ${
            isLight ? 'bg-white text-neutral-900' : 'bg-[#111111] text-white'
          }`}>
            <button
              onClick={() => setSelectedIndustry(null)}
              className={`absolute top-6 right-6 font-mono-custom text-xs uppercase tracking-widest px-3 py-1.5 border font-bold flex items-center space-x-1 cursor-pointer ${
                isLight
                  ? 'border-neutral-300 text-neutral-700 hover:bg-neutral-100 hover:text-black'
                  : 'border-white/20 text-white/60 hover:bg-white/10 hover:text-white'
              }`}
            >
              <X className="w-4 h-4" />
              <span>CLOSE</span>
            </button>

            <div className="space-y-6">
              <div>
                <span className="font-mono-custom text-xs text-orange-500 uppercase tracking-widest font-bold block mb-2">
                  INDUSTRY // {selectedIndustry.title}
                </span>
                <h2 className={`font-syne text-3xl sm:text-4xl font-black uppercase ${
                  isLight ? 'text-black' : 'text-white'
                }`}>
                  {selectedIndustry.h1}
                </h2>
              </div>

              <p className={`font-geist text-base leading-relaxed ${
                isLight ? 'text-neutral-700' : 'text-white/80'
              }`}>
                {selectedIndustry.shortDesc}
              </p>

              {/* Challenges solved */}
              <div className={`p-5 border space-y-3 ${
                isLight ? 'bg-neutral-50 border-neutral-200' : 'bg-[#0A0A0A] border-white/10'
              }`}>
                <h4 className="font-mono-custom text-xs uppercase tracking-widest text-orange-500 font-black flex items-center space-x-2">
                  <ShieldAlert className="w-4 h-4" />
                  <span>KEY CHALLENGES WE SOLVE FOR</span>
                </h4>
                <div className="space-y-2">
                  {selectedIndustry.challenges.map((challenge, idx) => (
                    <div key={idx} className="flex items-start space-x-2.5">
                      <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                      <span className={`font-geist text-xs font-medium ${isLight ? 'text-neutral-800' : 'text-white/90'}`}>
                        {challenge}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Relevant Services */}
              <div className="space-y-2">
                <h4 className="font-mono-custom text-xs uppercase tracking-widest text-orange-500 font-black">
                  RELEVANT SERVICE MODULES
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedIndustry.relevantServices.map((srv, idx) => (
                    <span
                      key={idx}
                      className={`text-xs font-mono-custom font-bold px-3.5 py-1.5 border ${
                        isLight
                          ? 'bg-neutral-100 border-neutral-300 text-black'
                          : 'bg-[#181818] border-white/20 text-white'
                      }`}
                    >
                      {srv}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal CTA */}
              <div className="pt-4 flex justify-between items-center border-t border-white/10">
                <button
                  onClick={() => {
                    setSelectedIndustry(null);
                    onNavigate('contact');
                  }}
                  className={`font-mono-custom text-xs uppercase tracking-widest font-black px-8 py-4 transition-colors flex items-center space-x-2 cursor-pointer ${
                    isLight ? 'bg-black text-white hover:bg-orange-500' : 'bg-white text-black hover:bg-orange-500 hover:text-white'
                  }`}
                >
                  <span>{selectedIndustry.ctaText}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
