import React from 'react';
import { CASE_STUDIES } from '../data/mockData';
import { CaseStudy } from '../types';
import { Quote, ArrowUpRight } from 'lucide-react';

interface CaseStudiesProps {
  onSelectCaseStudy: (study: CaseStudy) => void;
  showTitle?: boolean;
  theme?: 'dark' | 'light';
}

export const CaseStudies: React.FC<CaseStudiesProps> = ({
  onSelectCaseStudy,
  showTitle = true,
  theme = 'dark'
}) => {
  const isLight = theme === 'light';

  return (
    <section id="case-studies" className={`max-w-[1440px] mx-auto px-6 lg:px-12 py-24 border-t ${
      isLight ? 'border-neutral-200' : 'border-white/10'
    }`}>
      {/* Header */}
      {showTitle && (
        <div className="max-w-3xl mb-16">
          <span className="block font-mono-custom text-xs uppercase tracking-[0.4em] text-orange-500 font-bold mb-3">
            04 // PROVEN OUTCOMES
          </span>
          <h2 className={`font-syne text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight mb-6 ${
            isLight ? 'text-black' : 'text-white'
          }`}>
            CASE STUDIES<span className="text-orange-500">.</span>
          </h2>
          <p className={`font-geist text-base sm:text-lg leading-relaxed ${
            isLight ? 'text-neutral-600' : 'text-white/60'
          }`}>
            A sample of engagements across SaaS, D2C, and healthcare — each one starting with measurement, not media spend.
          </p>
        </div>
      )}

      {/* Case Studies Cards */}
      <div className="space-y-12 mb-20">
        {CASE_STUDIES.map((study, idx) => (
          <div
            key={study.id}
            onClick={() => onSelectCaseStudy(study)}
            className={`group border p-8 sm:p-12 relative transition-all duration-300 hover:border-orange-500 cursor-pointer shadow-2xl overflow-hidden ${
              isLight ? 'bg-white border-neutral-200' : 'bg-[#111111] border-white/10'
            }`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="font-mono-custom text-xs uppercase tracking-widest text-orange-500 font-black px-3 py-1 border border-orange-500/30 bg-orange-500/10">
                    {study.sector}
                  </span>
                  <span className={`font-mono-custom text-xs uppercase ${isLight ? 'text-neutral-500' : 'text-white/40'}`}>
                    ENGAGEMENT 0{idx + 1}
                  </span>
                </div>

                <h3 className={`font-syne text-3xl sm:text-4xl font-black uppercase group-hover:text-orange-500 transition-colors ${
                  isLight ? 'text-black' : 'text-white'
                }`}>
                  {study.client} — {study.summary}
                </h3>

                <p className={`font-geist text-sm sm:text-base leading-relaxed ${
                  isLight ? 'text-neutral-600' : 'text-white/70'
                }`}>
                  {study.description}
                </p>

                {/* Key Metrics row */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
                  {study.results.map((res, rIdx) => (
                    <div key={rIdx}>
                      <span className="font-syne text-2xl sm:text-3xl font-black text-orange-500 block">
                        {res.value}
                      </span>
                      <span className={`font-mono-custom text-[10px] uppercase font-bold block ${
                        isLight ? 'text-neutral-500' : 'text-white/50'
                      }`}>
                        {res.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Metric Callout Card */}
              <div className="lg:col-span-4 flex flex-col justify-center items-start lg:items-end border-l lg:border-l-2 border-orange-500 pl-6 lg:pl-8 space-y-2">
                <span className={`font-mono-custom text-xs font-bold uppercase tracking-widest ${
                  isLight ? 'text-neutral-500' : 'text-white/40'
                }`}>
                  PRIMARY LIFT
                </span>
                <span className="font-syne text-5xl sm:text-6xl font-black text-orange-500">
                  {study.keyMetricValue}
                </span>
                <span className={`font-geist text-xs font-medium ${isLight ? 'text-neutral-700' : 'text-white/80'}`}>
                  {study.keyMetricSubtext}
                </span>

                <button className="mt-4 font-mono-custom text-xs uppercase font-black tracking-widest text-orange-500 flex items-center space-x-1 group-hover:underline">
                  <span>VIEW CASE STUDY</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Client Quotes Section */}
      <div className="space-y-8 pt-6">
        <div className="border-b pb-4 border-orange-500/30">
          <span className="font-mono-custom text-xs uppercase tracking-[0.3em] text-orange-500 font-bold block mb-1">
            CLIENT TESTIMONIALS
          </span>
          <h2 className={`font-syne text-3xl font-black uppercase ${isLight ? 'text-black' : 'text-white'}`}>
            WHAT LEADERSHIP SAYS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CASE_STUDIES.map((cs) => (
            cs.quote && (
              <div
                key={cs.id}
                className={`p-8 border flex flex-col justify-between space-y-6 shadow-xl ${
                  isLight ? 'bg-neutral-50 border-neutral-200' : 'bg-[#0E0E0E] border-white/10'
                }`}
              >
                <div className="space-y-4">
                  <Quote className="w-8 h-8 text-orange-500 opacity-60" />
                  <p className={`font-geist text-sm leading-relaxed italic ${
                    isLight ? 'text-neutral-800' : 'text-white/90'
                  }`}>
                    "{cs.quote.text}"
                  </p>
                </div>

                <div className="pt-4 border-t border-orange-500/20">
                  <span className={`font-syne text-sm font-bold block uppercase ${isLight ? 'text-black' : 'text-white'}`}>
                    {cs.quote.author}
                  </span>
                  <span className={`font-mono-custom text-xs block ${isLight ? 'text-neutral-500' : 'text-white/50'}`}>
                    {cs.quote.title}
                  </span>
                </div>
              </div>
            )
          ))}
        </div>
      </div>
    </section>
  );
};
