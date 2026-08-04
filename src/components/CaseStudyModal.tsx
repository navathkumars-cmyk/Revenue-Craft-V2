import React from 'react';
import { CaseStudy } from '../types';
import { X, Quote, ArrowRight } from 'lucide-react';

interface CaseStudyModalProps {
  study: CaseStudy | null;
  onClose: () => void;
  onOpenConsultation: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  study,
  onClose,
  onOpenConsultation
}) => {
  if (!study) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div className="bg-[#111111] border border-orange-500 max-w-4xl w-full relative shadow-2xl my-8 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Top Hero Banner in Modal */}
        <div className="relative h-64 sm:h-80 overflow-hidden flex items-end p-8">
          <div
            className="absolute inset-0 bg-cover bg-center filter brightness-50"
            style={{ backgroundImage: `url('${study.bgImage}')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/70 to-transparent" />

          <button
            onClick={onClose}
            className="absolute top-6 right-6 font-mono-custom text-xs text-white/60 hover:text-white uppercase tracking-widest p-2 bg-[#0A0A0A]/80 border border-white/20 backdrop-blur-md flex items-center space-x-1 cursor-pointer font-bold"
          >
            <X className="w-4 h-4" />
            <span>CLOSE</span>
          </button>

          <div className="relative z-10 space-y-2">
            <span className="inline-block px-3 py-1 bg-orange-500 text-black font-mono-custom text-xs font-black tracking-widest uppercase">
              {study.sector}
            </span>
            <h2 className="font-syne text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
              {study.title}
            </h2>
          </div>
        </div>

        {/* Modal Content Body */}
        <div className="p-8 sm:p-10 space-y-8">
          {/* Key Metric Spotlight Bar */}
          <div className="bg-[#0A0A0A] border border-white/20 p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <span className="font-mono-custom text-xs text-orange-500 uppercase font-bold block mb-1">
                PRIMARY ENGAGEMENT IMPACT
              </span>
              <span className="font-geist text-sm text-white/70">
                {study.description}
              </span>
            </div>
            <div className="text-left sm:text-right shrink-0 border-l sm:border-l-0 sm:border-r border-white/20 pl-4 sm:pl-0 sm:pr-6">
              <span className="font-syne text-4xl font-black text-orange-500">
                {study.keyMetricValue}
              </span>
              <span className="font-mono-custom text-xs text-white/40 font-bold block uppercase">
                {study.keyMetricLabel}
              </span>
            </div>
          </div>

          {/* Challenge & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#161618] p-6 border border-white/10 space-y-3">
              <h3 className="font-mono-custom text-xs text-orange-500 uppercase tracking-widest font-bold">
                01 // THE CHALLENGE
              </h3>
              <p className="font-geist text-sm text-white/70 leading-relaxed">
                {study.challenge}
              </p>
            </div>

            <div className="bg-[#161618] p-6 border border-white/10 space-y-3">
              <h3 className="font-mono-custom text-xs text-orange-500 uppercase tracking-widest font-bold">
                02 // ARCHITECTURAL SOLUTION
              </h3>
              <p className="font-geist text-sm text-white/70 leading-relaxed">
                {study.solution}
              </p>
            </div>
          </div>

          {/* Quantitative Results Table */}
          <div className="space-y-4">
            <h3 className="font-mono-custom text-xs text-orange-500 uppercase tracking-widest font-bold">
              03 // MEASURED ENTERPRISE OUTCOMES
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {study.results.map((res, idx) => (
                <div key={idx} className="bg-[#0A0A0A] border border-white/10 p-5">
                  <span className="font-geist text-xs text-white/50 block mb-1">
                    {res.label}
                  </span>
                  <span className="font-syne text-2xl font-black text-white block">
                    {res.value}
                  </span>
                  <span className="font-mono-custom text-xs text-orange-500 font-bold mt-1 block">
                    {res.change}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Quote */}
          {study.quote && (
            <div className="bg-[#0A0A0A] border-l-4 border-orange-500 p-6 space-y-3">
              <Quote className="w-6 h-6 text-orange-500/50" />
              <p className="font-syne text-lg font-bold uppercase text-white tracking-tight">
                "{study.quote.text}"
              </p>
              <div>
                <span className="font-geist text-sm font-bold text-white block">
                  {study.quote.author}
                </span>
                <span className="font-geist text-xs text-white/50">
                  {study.quote.title}
                </span>
              </div>
            </div>
          )}

          {/* Footer CTAs */}
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
            <span className="font-mono-custom text-xs text-white/40 uppercase font-bold">
              REVENUE CRAFT DIGITAL CASE REFERENCE ID: {study.id.toUpperCase()}
            </span>

            <div className="flex space-x-4 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="flex-1 sm:flex-initial border border-white/20 text-white/70 hover:text-white font-mono-custom text-xs uppercase font-bold px-6 py-3 cursor-pointer"
              >
                CLOSE
              </button>
              <button
                onClick={() => {
                  onClose();
                  onOpenConsultation();
                }}
                className="flex-1 sm:flex-initial bg-white text-black font-mono-custom text-xs uppercase tracking-widest font-black px-6 py-3 hover:bg-orange-500 hover:text-white transition-colors flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>REQUEST SIMILAR MODEL</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
