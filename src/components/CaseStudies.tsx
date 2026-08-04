import React, { useState } from 'react';
import { CASE_STUDIES } from '../data/mockData';
import { CaseStudy } from '../types';

interface CaseStudiesProps {
  onSelectCaseStudy: (study: CaseStudy) => void;
  showTitle?: boolean;
}

export const CaseStudies: React.FC<CaseStudiesProps> = ({ onSelectCaseStudy, showTitle = true }) => {
  const [selectedSector, setSelectedSector] = useState<string>('All Sectors');

  const sectors = ['All Sectors', 'E-Commerce Scale', 'SaaS Growth', 'FinTech', 'Global Rebrand'];

  const filteredStudies = selectedSector === 'All Sectors'
    ? CASE_STUDIES
    : CASE_STUDIES.filter((s) => s.sector === selectedSector);

  const auraStudy = CASE_STUDIES.find((s) => s.id === 'aura-jewelry');
  const nexusStudy = CASE_STUDIES.find((s) => s.id === 'nexus-analytics');
  const quantumStudy = CASE_STUDIES.find((s) => s.id === 'quantum-capital');
  const vanguardStudy = CASE_STUDIES.find((s) => s.id === 'vanguard-logistics');

  return (
    <section className="max-w-[1440px] mx-auto px-6 lg:px-12 py-24 border-t border-white/10">
      {/* Header */}
      {showTitle && (
        <div className="max-w-3xl mb-12">
          <span className="block font-mono-custom text-xs uppercase tracking-[0.4em] text-orange-500 font-bold mb-3">
            PROVEN PERFORMANCE
          </span>
          <h2 className="font-syne text-4xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tight mb-6">
            CASE STUDIES<span className="text-orange-500">.</span>
          </h2>
          <p className="font-geist text-base sm:text-lg text-white/60 leading-relaxed">
            A curated selection of our most transformative growth engagements. We engineer the high-yield media and conversion systems that scale DTC and B2B leaders.
          </p>
        </div>
      )}

      {/* Sector Filter Chips */}
      <div className="flex flex-wrap gap-3 mb-12 border-b border-white/10 pb-6">
        {sectors.map((sector) => (
          <button
            key={sector}
            onClick={() => setSelectedSector(sector)}
            className={`font-mono-custom text-xs uppercase tracking-widest px-5 py-2.5 transition-all cursor-pointer ${
              selectedSector === sector
                ? 'bg-orange-500 text-black border-orange-500 font-black'
                : 'bg-[#111111] text-white/70 border border-white/20 hover:border-orange-500 hover:text-white'
            }`}
          >
            {sector}
          </button>
        ))}
      </div>

      {/* Grid Layout */}
      {selectedSector === 'All Sectors' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: Aura Fine Jewelry */}
          {auraStudy && (
            <div
              onClick={() => onSelectCaseStudy(auraStudy)}
              className="col-span-1 md:col-span-2 relative group overflow-hidden border border-white/10 bg-[#111111] card-hover min-h-[500px] flex items-end p-8 sm:p-12 cursor-pointer"
            >
              <div
                className="absolute inset-0 z-0 card-blur-bg bg-cover bg-center opacity-40 group-hover:opacity-60 transition-opacity"
                style={{ backgroundImage: `url('${auraStudy.bgImage}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/70 to-transparent z-10" />

              <div className="relative z-20 w-full flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                <div className="max-w-2xl">
                  <span className="inline-block px-3 py-1 bg-[#0A0A0A]/90 border border-white/20 font-mono-custom text-xs uppercase text-orange-500 font-bold mb-4 backdrop-blur-md">
                    {auraStudy.sector}
                  </span>
                  <h3 className="font-syne text-3xl sm:text-4xl md:text-5xl font-black uppercase text-white mb-3 group-hover:text-orange-500 transition-colors">
                    {auraStudy.title}
                  </h3>
                  <p className="font-geist text-sm sm:text-base text-white/60 leading-relaxed">
                    {auraStudy.summary}
                  </p>
                </div>

                <div className="flex flex-col items-start md:items-end shrink-0 border-l md:border-l-0 md:border-r border-white/20 pl-4 md:pl-0 md:pr-6">
                  <span className="font-mono-custom text-xs text-white/40 mb-1 uppercase tracking-widest font-bold">
                    PRIMARY METRIC LIFT
                  </span>
                  <span className="font-syne text-4xl sm:text-5xl font-black text-orange-500">
                    {auraStudy.keyMetricValue}
                  </span>
                  <span className="font-geist text-xs text-white/60">
                    {auraStudy.keyMetricSubtext}
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Card 2: Nexus Analytics */}
          {nexusStudy && (
            <div
              onClick={() => onSelectCaseStudy(nexusStudy)}
              className="relative group overflow-hidden border border-white/10 bg-[#111111] card-hover min-h-[420px] flex items-end p-8 cursor-pointer"
            >
              <div
                className="absolute inset-0 z-0 card-blur-bg bg-cover bg-center opacity-30 group-hover:opacity-50 transition-opacity"
                style={{ backgroundImage: `url('${nexusStudy.bgImage}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/70 to-transparent z-10" />

              <div className="relative z-20 w-full">
                <span className="inline-block px-3 py-1 bg-[#0A0A0A]/90 border border-white/20 font-mono-custom text-xs uppercase text-orange-500 font-bold mb-4 backdrop-blur-md">
                  {nexusStudy.sector}
                </span>
                <h3 className="font-syne text-2xl sm:text-3xl font-black text-white uppercase mb-2 group-hover:text-orange-500 transition-colors">
                  {nexusStudy.title}
                </h3>
                <p className="font-geist text-sm text-white/60 mb-6">
                  {nexusStudy.summary}
                </p>
                <div className="flex items-baseline space-x-3 border-l border-white/20 pl-4">
                  <span className="font-syne text-3xl font-black text-orange-500">
                    {nexusStudy.keyMetricValue}
                  </span>
                  <span className="font-mono-custom text-xs text-white/40 uppercase font-bold">
                    {nexusStudy.keyMetricSubtext}
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Card 3: Quantum Capital */}
          {quantumStudy && (
            <div
              onClick={() => onSelectCaseStudy(quantumStudy)}
              className="relative group overflow-hidden border border-white/10 bg-[#111111] card-hover min-h-[420px] flex items-end p-8 cursor-pointer"
            >
              <div
                className="absolute inset-0 z-0 card-blur-bg bg-cover bg-center opacity-30 group-hover:opacity-50 transition-opacity"
                style={{ backgroundImage: `url('${quantumStudy.bgImage}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/70 to-transparent z-10" />

              <div className="relative z-20 w-full">
                <span className="inline-block px-3 py-1 bg-[#0A0A0A]/90 border border-white/20 font-mono-custom text-xs uppercase text-orange-500 font-bold mb-4 backdrop-blur-md">
                  {quantumStudy.sector}
                </span>
                <h3 className="font-syne text-2xl sm:text-3xl font-black text-white uppercase mb-2 group-hover:text-orange-500 transition-colors">
                  {quantumStudy.title}
                </h3>
                <p className="font-geist text-sm text-white/60 mb-6">
                  {quantumStudy.summary}
                </p>
                <div className="flex items-baseline space-x-3 border-l border-white/20 pl-4">
                  <span className="font-syne text-3xl font-black text-orange-500">
                    {quantumStudy.keyMetricValue}
                  </span>
                  <span className="font-mono-custom text-xs text-white/40 uppercase font-bold">
                    {quantumStudy.keyMetricSubtext}
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Card 4: Vanguard Logistics */}
          {vanguardStudy && (
            <div
              onClick={() => onSelectCaseStudy(vanguardStudy)}
              className="col-span-1 md:col-span-2 relative group overflow-hidden border border-white/10 bg-[#111111] card-hover min-h-[500px] flex items-end p-8 sm:p-12 cursor-pointer"
            >
              <div
                className="absolute inset-0 z-0 card-blur-bg bg-cover bg-center opacity-40 group-hover:opacity-60 transition-opacity"
                style={{ backgroundImage: `url('${vanguardStudy.bgImage}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/70 to-transparent z-10" />

              <div className="relative z-20 w-full flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                <div className="max-w-2xl">
                  <span className="inline-block px-3 py-1 bg-[#0A0A0A]/90 border border-white/20 font-mono-custom text-xs uppercase text-orange-500 font-bold mb-4 backdrop-blur-md">
                    {vanguardStudy.sector}
                  </span>
                  <h3 className="font-syne text-3xl sm:text-4xl md:text-5xl font-black uppercase text-white mb-3 group-hover:text-orange-500 transition-colors">
                    {vanguardStudy.title}
                  </h3>
                  <p className="font-geist text-sm sm:text-base text-white/60 leading-relaxed">
                    {vanguardStudy.summary}
                  </p>
                </div>

                <div className="flex flex-col items-start md:items-end shrink-0 border-l md:border-l-0 md:border-r border-white/20 pl-4 md:pl-0 md:pr-6">
                  <span className="font-mono-custom text-xs text-white/40 mb-1 uppercase tracking-widest font-bold">
                    PRIMARY METRIC LIFT
                  </span>
                  <span className="font-syne text-4xl sm:text-5xl font-black text-orange-500">
                    {vanguardStudy.keyMetricValue}
                  </span>
                  <span className="font-geist text-xs text-white/60">
                    {vanguardStudy.keyMetricSubtext}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        /* Filtered Grid View */
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredStudies.map((study) => (
            <div
              key={study.id}
              onClick={() => onSelectCaseStudy(study)}
              className="relative group overflow-hidden border border-white/10 bg-[#111111] card-hover min-h-[450px] flex items-end p-8 cursor-pointer"
            >
              <div
                className="absolute inset-0 z-0 card-blur-bg bg-cover bg-center opacity-30 group-hover:opacity-50 transition-opacity"
                style={{ backgroundImage: `url('${study.bgImage}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/70 to-transparent z-10" />

              <div className="relative z-20 w-full">
                <span className="inline-block px-3 py-1 bg-[#0A0A0A]/90 border border-white/20 font-mono-custom text-xs uppercase text-orange-500 font-bold mb-4 backdrop-blur-md">
                  {study.sector}
                </span>
                <h3 className="font-syne text-3xl font-black text-white uppercase mb-2 group-hover:text-orange-500 transition-colors">
                  {study.title}
                </h3>
                <p className="font-geist text-sm text-white/60 mb-6">
                  {study.summary}
                </p>
                <div className="flex items-baseline space-x-3 border-l border-white/20 pl-4">
                  <span className="font-syne text-3xl font-black text-orange-500">
                    {study.keyMetricValue}
                  </span>
                  <span className="font-mono-custom text-xs text-white/40 uppercase font-bold">
                    {study.keyMetricSubtext}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};
