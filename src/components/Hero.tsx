import React, { useState } from 'react';
import { ArrowUpRight, Activity } from 'lucide-react';
import { NavSection } from '../types';

interface HeroProps {
  onNavigate: (section: NavSection) => void;
  onOpenConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate, onOpenConsultation }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'analytics' | 'strategies' | 'portfolio'>('overview');
  const [selectedNode, setSelectedNode] = useState<number | null>(1);

  const nodes = [
    { id: 1, label: '$45.2M', metric: '+382% ROAS Lift', desc: 'Enterprise Media Engine' },
    { id: 2, label: '$14.2K', metric: '14,200 Conversions', desc: 'DTC Scale Machine' },
    { id: 3, label: '$98.4%', metric: '98.4% Retention Rate', desc: 'LTV Algorithmic Routing' },
    { id: 4, label: '$12.8M', metric: '85% Efficiency', desc: 'Cross-Channel Arbitrage' },
  ];

  return (
    <section className="relative max-w-[1440px] mx-auto px-6 lg:px-12 pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Watermark Decorative Element */}
      <div className="absolute top-12 right-[-40px] opacity-[0.03] select-none pointer-events-none">
        <span className="font-syne font-black text-[320px] lg:text-[420px] leading-none text-white">
          RC
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        {/* Left Column: Massive Bold Typographic Hero & Stats */}
        <div className="lg:col-span-7 space-y-10">
          {/* Eyebrow */}
          <div className="flex items-center space-x-3">
            <span className="w-2 h-2 bg-orange-500 animate-pulse" />
            <span className="font-mono-custom text-xs uppercase tracking-[0.4em] text-white/40 font-bold">
              DIGITAL GROWTH AGENCY
            </span>
          </div>

          {/* Massive Typographic Headline */}
          <div className="relative">
            <h1 className="text-[52px] sm:text-[76px] md:text-[92px] lg:text-[104px] leading-[0.88] font-syne font-black tracking-tighter uppercase text-white">
              PRECISION <br />
              <span className="stroke-text-[#fff]">REVENUE</span> <br />
              OPTIMIZATION
            </h1>
            <p className="mt-6 font-geist text-base sm:text-lg text-white/60 leading-relaxed max-w-xl">
              We combine advanced algorithmic bidding with creative psychological triggers to turn cold traffic into recurring revenue streams for high-growth enterprise & DTC brands.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 pt-2">
            <button
              onClick={onOpenConsultation}
              className="bg-white text-black font-mono-custom text-xs uppercase tracking-[0.2em] font-black px-8 py-4.5 hover:bg-orange-500 hover:text-white active:scale-95 transition-all duration-200 flex items-center justify-center space-x-2 cursor-pointer shadow-xl shadow-orange-500/10"
            >
              <span>GET IN TOUCH</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onNavigate('case-studies')}
              className="border border-white/20 bg-transparent text-white hover:border-orange-500 hover:text-orange-500 font-mono-custom text-xs uppercase tracking-[0.2em] font-bold px-8 py-4.5 transition-all duration-200 text-center cursor-pointer"
            >
              EXPLORE CASE STUDIES
            </button>
          </div>

          {/* Statistics Grid with Vertical Divider Lines (Matches Theme HTML) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10">
            <div className="border-l border-white/20 pl-4 sm:pl-6">
              <div className="text-2xl sm:text-3xl font-syne font-black text-orange-500">$45M+</div>
              <div className="text-[10px] uppercase tracking-widest text-white/40 mt-1 font-mono-custom">
                Ad Spend Managed
              </div>
            </div>

            <div className="border-l border-white/20 pl-4 sm:pl-6">
              <div className="text-2xl sm:text-3xl font-syne font-black text-white">382%</div>
              <div className="text-[10px] uppercase tracking-widest text-white/40 mt-1 font-mono-custom">
                Avg ROAS Lift
              </div>
            </div>

            <div className="border-l border-white/20 pl-4 sm:pl-6">
              <div className="text-2xl sm:text-3xl font-syne font-black text-orange-500">14.2k</div>
              <div className="text-[10px] uppercase tracking-widest text-white/40 mt-1 font-mono-custom">
                Conversions
              </div>
            </div>

            <div className="border-l border-white/20 pl-4 sm:pl-6">
              <div className="text-2xl sm:text-3xl font-syne font-black text-white">98.4%</div>
              <div className="text-[10px] uppercase tracking-widest text-white/40 mt-1 font-mono-custom">
                Retention Rate
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Live Telemetry Board */}
        <div className="lg:col-span-5 relative">
          <div className="relative bg-[#111111] border border-white/10 p-6 shadow-2xl rounded-none overflow-hidden">
            {/* Top Bar Tabs */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6 overflow-x-auto no-scrollbar">
              <div className="flex space-x-4">
                {(['overview', 'analytics', 'strategies', 'portfolio'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`font-mono-custom text-[11px] uppercase tracking-wider pb-1 transition-colors cursor-pointer ${
                      activeTab === tab
                        ? 'text-orange-500 border-b-2 border-orange-500 font-bold'
                        : 'text-white/40 hover:text-white'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              <span className="flex items-center space-x-1.5 text-orange-500 font-mono-custom text-[10px] uppercase tracking-widest pl-2">
                <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                <span>Live Feed</span>
              </span>
            </div>

            {/* Dynamic Graph Area */}
            <div className="relative h-64 bg-[#0A0A0A] border border-white/10 p-4 flex flex-col justify-between overflow-hidden">
              {/* Grid Lines */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:24px_24px] opacity-40" />

              {/* Glowing SVG Curves */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none" viewBox="0 0 400 200">
                <defs>
                  <linearGradient id="orangeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#f97316" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#ffffff" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#f97316" stopOpacity="1" />
                  </linearGradient>
                </defs>
                <path
                  d="M 10,140 Q 100,20 200,90 T 390,40"
                  fill="none"
                  stroke="url(#orangeGradient)"
                  strokeWidth="3"
                  className="drop-shadow-[0_0_10px_rgba(249,115,22,0.6)]"
                />
              </svg>

              {/* Nodes */}
              <div className="relative z-10 flex justify-between items-center h-full px-2">
                {nodes.map((node, index) => {
                  const isSelected = selectedNode === node.id;
                  return (
                    <button
                      key={node.id}
                      onClick={() => setSelectedNode(node.id)}
                      className={`group relative flex flex-col items-center transition-transform cursor-pointer ${
                        index % 2 === 0 ? '-translate-y-6' : 'translate-y-4'
                      }`}
                    >
                      <span
                        className={`w-3.5 h-3.5 rounded-none transition-all duration-300 ${
                          isSelected
                            ? 'bg-orange-500 border-2 border-white scale-125 shadow-[0_0_12px_#f97316]'
                            : 'bg-[#111111] border-2 border-orange-500 group-hover:scale-110'
                        }`}
                      />
                      <span
                        className={`mt-1 font-mono-custom text-[10px] px-2 py-0.5 border ${
                          isSelected
                            ? 'bg-orange-500 text-black border-orange-500 font-extrabold'
                            : 'bg-[#0A0A0A]/90 text-white/70 border-white/10'
                        }`}
                      >
                        {node.label}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Selected Node Details */}
              {selectedNode && (
                <div className="relative z-10 bg-[#111111] border border-white/20 p-3 flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <Activity className="w-4 h-4 text-orange-500" />
                    <span className="font-geist text-xs text-white font-medium">
                      {nodes.find((n) => n.id === selectedNode)?.desc}
                    </span>
                  </div>
                  <span className="font-mono-custom text-xs font-bold text-orange-500">
                    {nodes.find((n) => n.id === selectedNode)?.metric}
                  </span>
                </div>
              )}
            </div>

            {/* Campaign Intensity Bar (Matches Theme HTML Footer) */}
            <div className="mt-6 pt-4 border-t border-white/10 space-y-2">
              <div className="flex justify-between items-center font-mono-custom text-xs">
                <span className="text-white/40 uppercase tracking-widest text-[10px]">
                  Current Campaign Intensity
                </span>
                <span className="text-orange-500 font-bold uppercase tracking-widest">
                  High Performance
                </span>
              </div>
              <div className="w-full h-1 bg-white/10">
                <div className="w-[88%] h-full bg-orange-500 animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
