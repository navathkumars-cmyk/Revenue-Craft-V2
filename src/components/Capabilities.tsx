import React, { useState } from 'react';
import { EXPERTISE_PILLARS } from '../data/mockData';
import { TrendingUp, Network, GitPullRequest, ArrowRight, CheckCircle2 } from 'lucide-react';
import { NavSection } from '../types';

interface CapabilitiesProps {
  onNavigate: (section: NavSection) => void;
  onSelectExpertise?: (id: string) => void;
}

export const Capabilities: React.FC<CapabilitiesProps> = ({ onNavigate }) => {
  const [activeModalId, setActiveModalId] = useState<string | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'trending_up':
        return <TrendingUp className="w-6 h-6 text-orange-500" />;
      case 'hub':
        return <Network className="w-6 h-6 text-orange-500" />;
      case 'account_tree':
        return <GitPullRequest className="w-6 h-6 text-orange-500" />;
      default:
        return <TrendingUp className="w-6 h-6 text-orange-500" />;
    }
  };

  const selectedPillar = EXPERTISE_PILLARS.find((p) => p.id === activeModalId);

  return (
    <section className="max-w-[1440px] mx-auto px-6 lg:px-12 py-24 border-t border-white/10">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
        <div>
          <span className="block font-mono-custom text-xs uppercase tracking-[0.4em] text-orange-500 font-bold mb-3">
            01 // CORE CAPABILITIES
          </span>
          <h2 className="font-syne text-4xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tight">
            OUR SERVICES<span className="text-orange-500">.</span>
          </h2>
        </div>
        <p className="font-geist text-base text-white/60 max-w-md leading-relaxed">
          Disciplined, high-velocity execution across three core pillars of enterprise revenue optimization.
        </p>
      </div>

      {/* 3 Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {EXPERTISE_PILLARS.map((pillar) => (
          <div
            key={pillar.id}
            onClick={() => setActiveModalId(pillar.id)}
            className="group relative bg-[#111111] border border-white/10 p-8 rounded-none transition-all duration-300 hover:border-orange-500 cursor-pointer flex flex-col justify-between hover:-translate-y-1 shadow-xl"
          >
            <div>
              {/* Top Row: Icon */}
              <div className="flex justify-between items-start mb-8">
                <div className="p-3 bg-[#0A0A0A] border border-white/10 group-hover:border-orange-500/50 transition-colors">
                  {getIcon(pillar.icon)}
                </div>
                <span className="font-mono-custom text-sm font-black text-orange-500">
                  {pillar.code}
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="font-syne text-2xl font-bold text-white uppercase tracking-tight mb-4 group-hover:text-orange-500 transition-colors">
                {pillar.title}
              </h3>
              <p className="font-geist text-sm text-white/60 leading-relaxed mb-6">
                {pillar.description}
              </p>

              {/* Pill Tags (Matching Design Spec) */}
              <div className="flex flex-wrap gap-2 mb-6">
                {pillar.subItems.slice(0, 2).map((item, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 border border-white/20 rounded-full text-[11px] font-mono-custom text-white/80 font-medium"
                  >
                    {item.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Link Action */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono-custom text-white/70 group-hover:text-orange-500">
              <span className="uppercase tracking-widest font-bold">Explore Architecture</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        ))}
      </div>

      {/* Detail Expansion Modal */}
      {selectedPillar && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
          <div className="bg-[#111111] border border-orange-500 max-w-2xl w-full p-8 sm:p-10 relative shadow-2xl space-y-6">
            <button
              onClick={() => setActiveModalId(null)}
              className="absolute top-6 right-6 font-mono-custom text-xs text-white/40 hover:text-white uppercase tracking-widest p-2 border border-white/10 cursor-pointer"
            >
              [CLOSE ESC]
            </button>

            <div className="flex items-center space-x-3 text-orange-500">
              {getIcon(selectedPillar.icon)}
              <span className="font-mono-custom text-xs uppercase tracking-widest font-bold">
                CAPABILITY {selectedPillar.code}
              </span>
            </div>

            <h3 className="font-syne text-3xl font-black text-white uppercase tracking-tight">
              {selectedPillar.title}
            </h3>
            <p className="font-geist text-base text-white/70">
              {selectedPillar.description}
            </p>

            <div className="border-t border-white/10 pt-6 space-y-4">
              <h4 className="font-mono-custom text-xs uppercase tracking-widest text-orange-500 font-bold">
                SPECIFIC ARCHITECTURAL COMPETENCIES
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {selectedPillar.subItems.map((item, idx) => (
                  <div key={idx} className="bg-[#0A0A0A] p-4 border border-white/10 space-y-1">
                    <div className="flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                      <span className="font-geist text-sm text-white font-bold">
                        {item.name}
                      </span>
                    </div>
                    <p className="font-geist text-xs text-white/50 pl-6">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 flex justify-between items-center">
              <button
                onClick={() => {
                  setActiveModalId(null);
                  onNavigate('expertise');
                }}
                className="bg-white text-black font-mono-custom text-xs uppercase tracking-widest font-black px-6 py-3 hover:bg-orange-500 hover:text-white transition-colors cursor-pointer"
              >
                VIEW DETAILED DISCIPLINES
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
