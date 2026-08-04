import React, { useState } from 'react';
import { SERVICES_LIST } from '../data/mockData';
import { ServiceItem, NavSection } from '../types';
import {
  TrendingUp,
  BarChart3,
  Sliders,
  Bot,
  Video,
  ArrowRight,
  CheckCircle2,
  X,
  ArrowUpRight,
  HelpCircle
} from 'lucide-react';

interface CapabilitiesProps {
  onNavigate: (section: NavSection) => void;
  onOpenConsultation: () => void;
  theme?: 'dark' | 'light';
}

export const Capabilities: React.FC<CapabilitiesProps> = ({
  onNavigate,
  onOpenConsultation,
  theme = 'dark'
}) => {
  const isLight = theme === 'light';
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>('All');

  const categories = [
    'All',
    'Paid Media',
    'Tracking & Analytics',
    'Conversion & CRO',
    'Automation & AI',
    'Video & Brand Production'
  ];

  const filteredServices = activeCategoryFilter === 'All'
    ? SERVICES_LIST
    : SERVICES_LIST.filter((s) => s.category === activeCategoryFilter);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Paid Media':
        return <TrendingUp className="w-5 h-5 text-orange-500" />;
      case 'Tracking & Analytics':
        return <BarChart3 className="w-5 h-5 text-orange-500" />;
      case 'Conversion & CRO':
        return <Sliders className="w-5 h-5 text-orange-500" />;
      case 'Automation & AI':
        return <Bot className="w-5 h-5 text-orange-500" />;
      case 'Video & Brand Production':
        return <Video className="w-5 h-5 text-orange-500" />;
      default:
        return <TrendingUp className="w-5 h-5 text-orange-500" />;
    }
  };

  return (
    <section id="services" className={`max-w-[1440px] mx-auto px-6 lg:px-12 py-24 border-t ${
      isLight ? 'border-neutral-200' : 'border-white/10'
    }`}>
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
        <div>
          <span className="block font-mono-custom text-xs uppercase tracking-[0.4em] text-orange-500 font-bold mb-3">
            01 // SERVICES HUB
          </span>
          <h2 className={`font-syne text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight ${
            isLight ? 'text-black' : 'text-white'
          }`}>
            PERFORMANCE SERVICES<span className="text-orange-500">.</span>
          </h2>
        </div>
        <p className={`font-geist text-base max-w-lg leading-relaxed ${
          isLight ? 'text-neutral-600' : 'text-white/60'
        }`}>
          We don't sell isolated tactics. Each service plugs into the same measurement layer, so paid media, tracking, and conversion work compound instead of competing.
        </p>
      </div>

      {/* Category Filter Tabs */}
      <div className={`flex flex-wrap gap-2.5 mb-12 border-b pb-6 overflow-x-auto ${
        isLight ? 'border-neutral-200' : 'border-white/10'
      }`}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategoryFilter(cat)}
            className={`font-mono-custom text-xs uppercase tracking-widest px-4 py-2.5 transition-all cursor-pointer ${
              activeCategoryFilter === cat
                ? 'bg-orange-500 text-black border-orange-500 font-black'
                : isLight
                ? 'bg-neutral-100 text-neutral-700 border border-neutral-300 hover:border-orange-500 hover:text-black'
                : 'bg-[#111111] text-white/70 border border-white/20 hover:border-orange-500 hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 16 Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredServices.map((service) => (
          <div
            key={service.id}
            onClick={() => setSelectedService(service)}
            className={`group border p-7 transition-all duration-300 hover:border-orange-500 cursor-pointer flex flex-col justify-between hover:-translate-y-1 shadow-xl relative ${
              isLight
                ? 'bg-white border-neutral-200 text-neutral-900'
                : 'bg-[#111111] border-white/10 text-white'
            }`}
          >
            <div>
              {/* Category Pill */}
              <div className="flex items-center justify-between mb-5">
                <span className={`text-[10px] font-mono-custom font-bold uppercase tracking-wider px-2.5 py-1 border flex items-center space-x-1.5 ${
                  isLight
                    ? 'border-neutral-200 bg-neutral-50 text-neutral-700'
                    : 'border-white/10 bg-white/5 text-white/60'
                }`}>
                  {getCategoryIcon(service.category)}
                  <span className="ml-1">{service.category}</span>
                </span>
                <span className="font-mono-custom text-xs text-orange-500 font-bold">
                  EXPLORE &rarr;
                </span>
              </div>

              {/* Title & Short Description */}
              <h3 className={`font-syne text-xl sm:text-2xl font-bold uppercase tracking-tight mb-3 group-hover:text-orange-500 transition-colors ${
                isLight ? 'text-black' : 'text-white'
              }`}>
                {service.title}
              </h3>
              <p className={`font-geist text-sm leading-relaxed mb-6 ${
                isLight ? 'text-neutral-600' : 'text-white/60'
              }`}>
                {service.shortDesc}
              </p>
            </div>

            {/* What you get preview */}
            <div className={`pt-4 border-t space-y-1.5 ${
              isLight ? 'border-neutral-200' : 'border-white/10'
            }`}>
              <span className="text-[10px] uppercase font-mono-custom font-bold text-orange-500 block mb-1">
                KEY OUTCOME:
              </span>
              <p className={`font-geist text-xs flex items-start space-x-1.5 ${
                isLight ? 'text-neutral-700' : 'text-white/80'
              }`}>
                <CheckCircle2 className="w-3.5 h-3.5 text-orange-500 shrink-0 mt-0.5" />
                <span>{service.whatYouGet[0]}</span>
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Deep-Dive Modal for Selected Service */}
      {selectedService && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div className={`border border-orange-500 max-w-3xl w-full p-6 sm:p-10 relative shadow-2xl my-8 overflow-hidden animate-in fade-in zoom-in-95 duration-200 ${
            isLight ? 'bg-white text-neutral-900' : 'bg-[#111111] text-white'
          }`}>
            <button
              onClick={() => setSelectedService(null)}
              className={`absolute top-6 right-6 font-mono-custom text-xs uppercase tracking-widest px-3 py-1.5 border font-bold flex items-center space-x-1 cursor-pointer ${
                isLight
                  ? 'border-neutral-300 text-neutral-700 hover:bg-neutral-100 hover:text-black'
                  : 'border-white/20 text-white/60 hover:bg-white/10 hover:text-white'
              }`}
            >
              <X className="w-4 h-4" />
              <span>CLOSE</span>
            </button>

            {/* Modal Content */}
            <div className="space-y-6">
              <div>
                <span className="font-mono-custom text-xs text-orange-500 uppercase tracking-widest font-bold block mb-2">
                  SERVICE // {selectedService.category}
                </span>
                <h2 className={`font-syne text-3xl sm:text-4xl font-black uppercase ${
                  isLight ? 'text-black' : 'text-white'
                }`}>
                  {selectedService.h1}
                </h2>
              </div>

              <p className={`font-geist text-base leading-relaxed ${
                isLight ? 'text-neutral-700' : 'text-white/80'
              }`}>
                {selectedService.fullDesc}
              </p>

              {/* What You Get */}
              <div className={`p-5 border space-y-3 ${
                isLight ? 'bg-neutral-50 border-neutral-200' : 'bg-[#0A0A0A] border-white/10'
              }`}>
                <h4 className="font-mono-custom text-xs uppercase tracking-widest text-orange-500 font-black">
                  WHAT YOU GET
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedService.whatYouGet.map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                      <span className={`font-geist text-xs ${isLight ? 'text-neutral-800' : 'text-white/90'}`}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Our Approach */}
              <div className="space-y-3">
                <h4 className="font-mono-custom text-xs uppercase tracking-widest text-orange-500 font-black">
                  OUR 3-STEP APPROACH
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {selectedService.ourApproach.map((step, idx) => (
                    <div key={idx} className={`p-3.5 border ${
                      isLight ? 'bg-neutral-100 border-neutral-300' : 'bg-[#181818] border-white/10'
                    }`}>
                      <span className="font-mono-custom text-xs font-black text-orange-500 block mb-1">
                        STEP 0{idx + 1}
                      </span>
                      <p className={`font-geist text-xs font-medium ${isLight ? 'text-neutral-900' : 'text-white'}`}>
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQs */}
              {selectedService.faq && selectedService.faq.length > 0 && (
                <div className="space-y-3 pt-2">
                  <h4 className="font-mono-custom text-xs uppercase tracking-widest text-orange-500 font-black flex items-center space-x-1.5">
                    <HelpCircle className="w-3.5 h-3.5" />
                    <span>SERVICE FREQUENTLY ASKED QUESTIONS</span>
                  </h4>
                  <div className="space-y-3">
                    {selectedService.faq.map((f, idx) => (
                      <div key={idx} className={`p-4 border ${
                        isLight ? 'bg-neutral-50 border-neutral-200' : 'bg-[#0A0A0A] border-white/10'
                      }`}>
                        <p className={`font-syne text-sm font-bold mb-1 ${isLight ? 'text-black' : 'text-white'}`}>
                          Q: {f.q}
                        </p>
                        <p className={`font-geist text-xs leading-relaxed ${isLight ? 'text-neutral-600' : 'text-white/70'}`}>
                          A: {f.a}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Modal CTA */}
              <div className="pt-4 flex flex-col sm:flex-row justify-between items-center gap-4 border-t border-white/10">
                <button
                  onClick={() => {
                    setSelectedService(null);
                    onNavigate('contact');
                  }}
                  className={`w-full sm:w-auto font-mono-custom text-xs uppercase tracking-widest font-black px-8 py-4 transition-colors flex items-center justify-center space-x-2 cursor-pointer ${
                    isLight ? 'bg-black text-white hover:bg-orange-500' : 'bg-white text-black hover:bg-orange-500 hover:text-white'
                  }`}
                >
                  <span>{selectedService.ctaText}</span>
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
