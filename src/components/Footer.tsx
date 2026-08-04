import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onOpenConsultation: () => void;
  onNavigateTab: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenConsultation, onNavigateTab }) => {
  return (
    <footer className="bg-[#0A0A0A] border-t border-white/10 pt-20 pb-12 text-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 space-y-16">
        {/* Top Banner CTA */}
        <div className="bg-[#111111] border border-orange-500 p-8 sm:p-14 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 shadow-2xl">
          <div className="space-y-3 max-w-2xl">
            <span className="font-mono-custom text-xs uppercase tracking-[0.4em] text-orange-500 font-bold block">
              ENTERPRISE ENGAGEMENT
            </span>
            <h2 className="font-syne text-3xl sm:text-5xl font-black uppercase text-white tracking-tight">
              READY TO SCALE YOUR REVENUE ENGINE<span className="text-orange-500">?</span>
            </h2>
            <p className="font-geist text-sm sm:text-base text-white/60">
              Deploy our quantitative growth architecture to unlock predictable ARR expansion and lower CAC.
            </p>
          </div>
          <button
            onClick={onOpenConsultation}
            className="bg-white text-black font-mono-custom text-xs uppercase tracking-widest font-black px-8 py-4 hover:bg-orange-500 hover:text-white transition-colors shrink-0 flex items-center space-x-2 cursor-pointer"
          >
            <span>BOOK ARCHITECTURE AUDIT</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pt-8">
          <div className="space-y-4">
            <div className="font-syne text-2xl font-black tracking-wider uppercase text-white">
              REVENUE CRAFT <span className="text-orange-500">DIGITAL</span>
            </div>
            <p className="font-geist text-xs text-white/50 leading-relaxed max-w-xs">
              Algorithmic performance marketing, conversion engineering, and enterprise RevOps architecture for high-growth DTC and B2B leaders.
            </p>
          </div>

          <div className="space-y-3">
            <span className="font-mono-custom text-xs text-orange-500 uppercase font-bold block">
              DISCIPLINE NAVIGATION
            </span>
            <ul className="space-y-2 font-geist text-xs text-white/70">
              <li>
                <button onClick={() => onNavigateTab('overview')} className="hover:text-orange-500 transition-colors uppercase cursor-pointer">
                  Overview
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTab('capabilities')} className="hover:text-orange-500 transition-colors uppercase cursor-pointer">
                  Capabilities & Services
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTab('cases')} className="hover:text-orange-500 transition-colors uppercase cursor-pointer">
                  Case Studies & Metrics
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTab('philosophy')} className="hover:text-orange-500 transition-colors uppercase cursor-pointer">
                  Revenue Simulator
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTab('expertise')} className="hover:text-orange-500 transition-colors uppercase cursor-pointer">
                  Architectural Pillars
                </button>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <span className="font-mono-custom text-xs text-orange-500 uppercase font-bold block">
              RESEARCH & INSIGHTS
            </span>
            <ul className="space-y-2 font-geist text-xs text-white/70">
              <li>
                <button onClick={() => onNavigateTab('journal')} className="hover:text-orange-500 transition-colors uppercase cursor-pointer">
                  Algorithmic Bidding Teardown
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTab('journal')} className="hover:text-orange-500 transition-colors uppercase cursor-pointer">
                  RevOps Data Architecture Whitepaper
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTab('journal')} className="hover:text-orange-500 transition-colors uppercase cursor-pointer">
                  Predictive LTV Optimization Framework
                </button>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <span className="font-mono-custom text-xs text-orange-500 uppercase font-bold block">
              HEADQUARTERS & CONTACT
            </span>
            <div className="font-geist text-xs text-white/60 space-y-1">
              <p className="text-white font-bold">RevenueCraft Digital Architecture LLC</p>
              <p>Austin, TX • New York, NY • San Francisco, CA</p>
              <p className="pt-2 text-orange-500 font-mono-custom font-bold">growth@revenuecraftdigital.com</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center text-xs font-mono-custom text-white/40 gap-4">
          <div>
            © {new Date().getFullYear()} REVENUE CRAFT DIGITAL. ALL RIGHTS RESERVED.
          </div>
          <div className="flex space-x-6">
            <span className="hover:text-white cursor-pointer">PRIVACY POLICY</span>
            <span>•</span>
            <span className="hover:text-white cursor-pointer font-bold">TERMS OF ENGAGEMENT</span>
            <span>•</span>
            <span className="hover:text-white cursor-pointer">SECURITY DISCLOSURES</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
