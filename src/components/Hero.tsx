import React, { useState } from 'react';
import { ArrowUpRight, Activity, CheckCircle2 } from 'lucide-react';
import { NavSection } from '../types';
import { HERO_CONTENT } from '../data/mockData';

interface HeroProps {
  onNavigate: (section: NavSection) => void;
  onOpenConsultation: () => void;
  theme?: 'dark' | 'light';
}

export const Hero: React.FC<HeroProps> = ({ onNavigate, onOpenConsultation, theme = 'dark' }) => {
  const isLight = theme === 'light';
  const [activeTab, setActiveTab] = useState<'overview' | 'analytics' | 'strategies' | 'portfolio'>('overview');
  const [selectedNode, setSelectedNode] = useState<number | null>(1);

  const nodes = [
    { id: 1, label: '382%', metric: '+382% ROAS Lift', desc: 'Enterprise Media Engine' },
    { id: 2, label: '14.2K', metric: '14,200 Conversions', desc: 'DTC & Lead Machine' },
    { id: 3, label: '98.4%', metric: '98.4% Retention Rate', desc: 'Measurement First Setup' },
    { id: 4, label: '-33%', metric: '33% CPL Savings', desc: 'Cross-Channel Arbitrage' },
  ];

  return (
    <section className="relative max-w-[1440px] mx-auto px-6 lg:px-12 pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Watermark Decorative Element */}
      <div className="absolute top-12 right-[-40px] opacity-[0.03] select-none pointer-events-none">
        <span className={`font-syne font-black text-[320px] lg:text-[420px] leading-none ${
          isLight ? 'text-black' : 'text-white'
        }`}>
          RC
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        {/* Left Column: Hero Text & Badges */}
        <div className="lg:col-span-7 space-y-8">
          {/* Eyebrow */}
          <div className="flex items-center space-x-3">
            <span className="w-2.5 h-2.5 bg-orange-500 animate-pulse" />
            <span className={`font-mono-custom text-xs uppercase tracking-[0.4em] font-bold ${
              isLight ? 'text-neutral-500' : 'text-white/40'
            }`}>
              PERFORMANCE MARKETING AGENCY
            </span>
          </div>

          {/* Main Headline */}
          <div className="relative">
            <h1 className={`text-[46px] sm:text-[68px] md:text-[80px] lg:text-[88px] leading-[0.92] font-syne font-black tracking-tighter uppercase ${
              isLight ? 'text-neutral-900' : 'text-white'
            }`}>
              TURN AD SPEND <br />
              INTO <span className="text-orange-500">PREDICTABLE</span> <br />
              REVENUE<span className="text-orange-500">.</span>
            </h1>
            <p className={`mt-6 font-geist text-base sm:text-lg leading-relaxed max-w-2xl ${
              isLight ? 'text-neutral-600' : 'text-white/70'
            }`}>
              {HERO_CONTENT.subheading}
            </p>
          </div>

          {/* Value Badges */}
          <div className="flex flex-wrap gap-2 pt-1">
            {HERO_CONTENT.badges.map((badge, idx) => (
              <span
                key={idx}
                className={`inline-flex items-center space-x-1.5 px-3.5 py-1.5 border rounded-full text-xs font-mono-custom font-bold ${
                  isLight
                    ? 'border-neutral-300 bg-neutral-100 text-neutral-800'
                    : 'border-white/20 bg-white/5 text-white/90'
                }`}
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-orange-500" />
                <span>{badge}</span>
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
            <button
              onClick={() => onNavigate('contact')}
              className={`font-mono-custom text-xs uppercase tracking-[0.2em] font-black px-8 py-4.5 transition-all duration-200 flex items-center justify-center space-x-2 cursor-pointer shadow-xl ${
                isLight
                  ? 'bg-black text-white hover:bg-orange-500'
                  : 'bg-white text-black hover:bg-orange-500 hover:text-white shadow-orange-500/10'
              }`}
            >
              <span>{HERO_CONTENT.cta}</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onNavigate('services')}
              className={`border font-mono-custom text-xs uppercase tracking-[0.2em] font-bold px-8 py-4.5 transition-all duration-200 text-center cursor-pointer ${
                isLight
                  ? 'border-neutral-300 bg-white text-black hover:border-orange-500 hover:text-orange-500'
                  : 'border-white/20 bg-transparent text-white hover:border-orange-500 hover:text-orange-500'
              }`}
            >
              EXPLORE OUR SERVICES
            </button>
          </div>

          {/* High-level metrics */}
          <div className={`grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t ${
            isLight ? 'border-neutral-200' : 'border-white/10'
          }`}>
            <div className={`border-l pl-4 sm:pl-6 ${isLight ? 'border-neutral-300' : 'border-white/20'}`}>
              <div className="text-2xl sm:text-3xl font-syne font-black text-orange-500">100%</div>
              <div className={`text-[10px] uppercase tracking-widest mt-1 font-mono-custom ${
                isLight ? 'text-neutral-500' : 'text-white/40'
              }`}>
                Performance Tracked
              </div>
            </div>

            <div className={`border-l pl-4 sm:pl-6 ${isLight ? 'border-neutral-300' : 'border-white/20'}`}>
              <div className={`text-2xl sm:text-3xl font-syne font-black ${isLight ? 'text-black' : 'text-white'}`}>
                90-Day
              </div>
              <div className={`text-[10px] uppercase tracking-widest mt-1 font-mono-custom ${
                isLight ? 'text-neutral-500' : 'text-white/40'
              }`}>
                Growth Cycles
              </div>
            </div>

            <div className={`border-l pl-4 sm:pl-6 ${isLight ? 'border-neutral-300' : 'border-white/20'}`}>
              <div className="text-2xl sm:text-3xl font-syne font-black text-orange-500">&lt; 24h</div>
              <div className={`text-[10px] uppercase tracking-widest mt-1 font-mono-custom ${
                isLight ? 'text-neutral-500' : 'text-white/40'
              }`}>
                Response Time
              </div>
            </div>

            <div className={`border-l pl-4 sm:pl-6 ${isLight ? 'border-neutral-300' : 'border-white/20'}`}>
              <div className={`text-2xl sm:text-3xl font-syne font-black ${isLight ? 'text-black' : 'text-white'}`}>
                0 Lock-In
              </div>
              <div className={`text-[10px] uppercase tracking-widest mt-1 font-mono-custom ${
                isLight ? 'text-neutral-500' : 'text-white/40'
              }`}>
                Long-Term Contracts
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Live Telemetry Board */}
        <div className="lg:col-span-5 relative">
          <div className={`relative border p-6 shadow-2xl rounded-none overflow-hidden ${
            isLight
              ? 'bg-white border-neutral-200 text-neutral-900'
              : 'bg-[#111111] border-white/10 text-white'
          }`}>
            {/* Top Bar Tabs */}
            <div className={`flex items-center justify-between border-b pb-4 mb-6 overflow-x-auto no-scrollbar ${
              isLight ? 'border-neutral-200' : 'border-white/10'
            }`}>
              <div className="flex space-x-4">
                {(['overview', 'analytics', 'strategies', 'portfolio'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`font-mono-custom text-[11px] uppercase tracking-wider pb-1 transition-colors cursor-pointer ${
                      activeTab === tab
                        ? 'text-orange-500 border-b-2 border-orange-500 font-bold'
                        : isLight
                        ? 'text-neutral-400 hover:text-black'
                        : 'text-white/40 hover:text-white'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              <span className="flex items-center space-x-1.5 text-orange-500 font-mono-custom text-[10px] uppercase tracking-widest pl-2">
                <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                <span>Live Signal</span>
              </span>
            </div>

            {/* Dynamic Graph Area */}
            <div className={`relative h-64 border p-4 flex flex-col justify-between overflow-hidden ${
              isLight
                ? 'bg-neutral-50 border-neutral-200'
                : 'bg-[#0A0A0A] border-white/10'
            }`}>
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:24px_24px] opacity-40" />

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

              {selectedNode && (
                <div className={`relative z-10 border p-3 flex justify-between items-center ${
                  isLight ? 'bg-white border-neutral-300' : 'bg-[#111111] border-white/20'
                }`}>
                  <div className="flex items-center space-x-2">
                    <Activity className="w-4 h-4 text-orange-500" />
                    <span className={`font-geist text-xs font-medium ${isLight ? 'text-black' : 'text-white'}`}>
                      {nodes.find((n) => n.id === selectedNode)?.desc}
                    </span>
                  </div>
                  <span className="font-mono-custom text-xs font-bold text-orange-500">
                    {nodes.find((n) => n.id === selectedNode)?.metric}
                  </span>
                </div>
              )}
            </div>

            <div className={`mt-6 pt-4 border-t space-y-2 ${isLight ? 'border-neutral-200' : 'border-white/10'}`}>
              <div className="flex justify-between items-center font-mono-custom text-xs">
                <span className={`uppercase tracking-widest text-[10px] ${isLight ? 'text-neutral-500' : 'text-white/40'}`}>
                  Measurement Layer Signal
                </span>
                <span className="text-orange-500 font-bold uppercase tracking-widest">
                  100% Tracked
                </span>
              </div>
              <div className={`w-full h-1 ${isLight ? 'bg-neutral-200' : 'bg-white/10'}`}>
                <div className="w-[100%] h-full bg-orange-500 animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
