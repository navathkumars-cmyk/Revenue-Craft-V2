import React, { useState } from 'react';
import { SERVICES_LIST } from '../data/mockData';
import { ArrowRight } from 'lucide-react';

interface ExpertiseDetailProps {
  onOpenConsultation: () => void;
  theme?: 'dark' | 'light';
}

export const ExpertiseDetail: React.FC<ExpertiseDetailProps> = ({ onOpenConsultation, theme = 'dark' }) => {
  const isLight = theme === 'light';
  const [selectedServiceId, setSelectedServiceId] = useState<string>(SERVICES_LIST[0]?.id || 'google-ads');

  const selectedService = SERVICES_LIST.find((s) => s.id === selectedServiceId) || SERVICES_LIST[0];

  return (
    <section className={`max-w-[1440px] mx-auto px-6 lg:px-12 py-24 pt-32 border-t ${
      isLight ? 'border-neutral-200' : 'border-white/10'
    }`}>
      {/* Top Discipline Header & Visual */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
        <div className="lg:col-span-7 space-y-6">
          <span className="font-mono-custom text-xs uppercase tracking-[0.4em] text-orange-500 font-bold">
            OUR DISCIPLINES
          </span>
          <h1 className={`font-syne text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight ${
            isLight ? 'text-black' : 'text-white'
          }`}>
            GROWTH ARCHITECTURE<span className="text-orange-500">.</span>
          </h1>
          <p className={`font-geist text-base sm:text-lg leading-relaxed max-w-xl ${
            isLight ? 'text-neutral-600' : 'text-white/60'
          }`}>
            We engineer high-yield revenue systems for ambitious enterprise and DTC brands. Our discipline bridges quantitative media buying with conversion psychology.
          </p>

          <div className="pt-4 flex items-center space-x-4">
            <button
              onClick={onOpenConsultation}
              className={`font-mono-custom text-xs uppercase tracking-widest font-black px-8 py-4 transition-colors cursor-pointer ${
                isLight ? 'bg-black text-white hover:bg-orange-500' : 'bg-white text-black hover:bg-orange-500 hover:text-white'
              }`}
            >
              AUDIT YOUR ARCHITECTURE
            </button>
          </div>
        </div>

        {/* Right Visual Card */}
        <div className="lg:col-span-5 relative group">
          <div className="relative border border-white/10 bg-[#111111] overflow-hidden p-2">
            <img
              src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=1200"
              alt="Precision RevOps Engineering Mechanics"
              className="w-full h-80 sm:h-96 object-cover filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#111111]/90 border border-white/20 backdrop-blur-md">
              <span className="font-mono-custom text-[10px] text-orange-500 uppercase tracking-widest font-bold block mb-1">
                SYSTEM SYNCHRONIZATION
              </span>
              <span className="font-syne text-lg font-bold text-white uppercase">
                ALGORITHMIC MEDIA & CONVERSION PRECISION
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Discipline Selector Tabs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
        {SERVICES_LIST.slice(0, 6).map((service) => {
          const isSelected = service.id === selectedServiceId;
          return (
            <button
              key={service.id}
              onClick={() => setSelectedServiceId(service.id)}
              className={`p-6 text-left border transition-all duration-300 cursor-pointer ${
                isSelected
                  ? 'bg-[#111111] border-orange-500 shadow-xl'
                  : 'bg-[#0A0A0A] border-white/10 hover:border-orange-500/50'
              }`}
            >
              <span className="font-mono-custom text-xs font-black text-orange-500 block mb-2">
                {service.category.toUpperCase()}
              </span>
              <h3 className="font-syne text-xl font-bold text-white uppercase mb-2">
                {service.title}
              </h3>
              <p className="font-geist text-xs text-white/50 line-clamp-2">
                {service.shortDesc}
              </p>
            </button>
          );
        })}
      </div>

      {/* Selected Discipline Deep Dive */}
      <div className="bg-[#111111] border border-white/10 p-8 sm:p-12 relative overflow-hidden shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="font-mono-custom text-xs uppercase tracking-[0.3em] text-orange-500 font-bold">
              {selectedService.category.toUpperCase()} // {selectedService.title.toUpperCase()}
            </span>

            <h3 className="font-syne text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
              {selectedService.h1}
            </h3>

            <p className="font-geist text-base text-white/60 leading-relaxed">
              {selectedService.fullDesc}
            </p>

            <div className="space-y-3 pt-4 border-t border-white/10">
              <span className="font-mono-custom text-xs text-orange-500 uppercase font-bold block">
                DELIVERABLE HIGHLIGHTS:
              </span>
              {selectedService.whatYouGet.map((item, idx) => (
                <div key={idx} className="flex items-start space-x-3">
                  <span className="w-2 h-2 rounded-none bg-orange-500 mt-2 shrink-0" />
                  <span className="font-geist text-xs text-white/80">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 bg-[#0A0A0A] border border-white/20 p-8 space-y-6">
            <h4 className="font-mono-custom text-xs uppercase tracking-widest text-orange-500 font-bold">
              3-STEP IMPLEMENTATION METHODOLOGY
            </h4>

            <div className="space-y-4">
              {selectedService.ourApproach.map((step, idx) => (
                <div key={idx} className="p-4 bg-[#111111] border border-white/10 space-y-1">
                  <span className="font-mono-custom text-xs text-orange-500 font-bold">PHASE 0{idx + 1}</span>
                  <p className="font-geist text-xs text-white font-medium">{step}</p>
                </div>
              ))}
            </div>

            <button
              onClick={onOpenConsultation}
              className="w-full bg-white text-black font-mono-custom text-xs uppercase tracking-widest font-black py-4 hover:bg-orange-500 hover:text-white transition-colors flex items-center justify-center space-x-2 cursor-pointer"
            >
              <span>{selectedService.ctaText}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
