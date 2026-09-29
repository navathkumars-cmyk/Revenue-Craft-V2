import React from 'react';
import { ArrowUp, ArrowUpRight, ShieldCheck, Mail, Phone, MapPin } from 'lucide-react';
import { NavSection } from '../types';

interface FooterProps {
  onNavigate: (section: NavSection) => void;
  onOpenAudit: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenAudit }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0E0E0E] text-white border-t border-white/10 pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Brand Banner */}
        <div className="pb-12 border-b border-white/10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#FECF05] flex items-center justify-center text-[#141414] font-black shrink-0">
              <svg
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 stroke-[#141414]"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 6v16M7 6h8a4 4 0 0 1 0 8H7M15 14l6 8" />
                <path d="M19 6l5 0m0 0l0 5m0-5l-7 7" stroke="#141414" strokeWidth="2.2" />
              </svg>
            </div>
            <div>
              <span className="text-xl font-black font-syne text-white tracking-tight flex items-center gap-1">
                REVENUE CRAFT DIGITAL
              </span>
              <span className="text-xs font-bold text-[#FECF05] uppercase tracking-wider block mt-0.5">
                Scale Your Brand. Grow Your Revenue.
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <p className="text-xs text-[#A0A0A0] max-w-md font-light">
              AI-powered performance marketing for ambitious B2B, B2C, D2C and eCommerce businesses.
            </p>
            <button
              onClick={onOpenAudit}
              className="px-5 py-2.5 rounded-full bg-[#FECF05] text-[#141414] text-xs font-extrabold uppercase tracking-wider hover:bg-white transition-all shadow-md shrink-0 cursor-pointer"
            >
              Get Free Growth Audit
            </button>
          </div>
        </div>

        {/* 6-Column Category Navigation */}
        <div className="py-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-xs">
          {/* Col 1: Performance */}
          <div>
            <h4 className="font-black uppercase tracking-widest text-[#FECF05] mb-4 font-syne">
              Performance
            </h4>
            <ul className="space-y-2 text-[#A0A0A0]">
              <li>Performance Marketing</li>
              <li>Google Ads</li>
              <li>Meta Ads</li>
              <li>LinkedIn Ads</li>
              <li>YouTube Ads</li>
              <li>B2B Marketing</li>
              <li>B2C Marketing</li>
              <li>eCommerce Marketing</li>
              <li>Lead Generation</li>
            </ul>
          </div>

          {/* Col 2: Digital */}
          <div>
            <h4 className="font-black uppercase tracking-widest text-[#FECF05] mb-4 font-syne">
              Digital
            </h4>
            <ul className="space-y-2 text-[#A0A0A0]">
              <li>SEO</li>
              <li>Social Media Marketing</li>
              <li>Content Marketing</li>
              <li>Influencer Marketing</li>
              <li>Email Marketing</li>
              <li>WhatsApp Marketing</li>
              <li>Quick Commerce</li>
              <li>Marketplace Marketing</li>
            </ul>
          </div>

          {/* Col 3: Creative */}
          <div>
            <h4 className="font-black uppercase tracking-widest text-[#FECF05] mb-4 font-syne">
              Creative
            </h4>
            <ul className="space-y-2 text-[#A0A0A0]">
              <li>Brand Strategy</li>
              <li>Brand Identity</li>
              <li>Logo Design</li>
              <li>Graphic Design</li>
              <li>Advertising Creative</li>
              <li>Social Media Design</li>
              <li>Video Marketing</li>
              <li>Reels & Short-Form</li>
            </ul>
          </div>

          {/* Col 4: Technology */}
          <div>
            <h4 className="font-black uppercase tracking-widest text-[#FECF05] mb-4 font-syne">
              Technology
            </h4>
            <ul className="space-y-2 text-[#A0A0A0]">
              <li>Web Design & Dev</li>
              <li>Landing Pages</li>
              <li>Analytics Setup</li>
              <li>Conversion Tracking</li>
              <li>CRM Integration</li>
              <li>Marketing Automation</li>
              <li>AI-Powered Marketing</li>
              <li>CRO Optimization</li>
            </ul>
          </div>

          {/* Col 5: Strategy */}
          <div>
            <h4 className="font-black uppercase tracking-widest text-[#FECF05] mb-4 font-syne">
              Strategy
            </h4>
            <ul className="space-y-2 text-[#A0A0A0]">
              <li>Marketing Strategy</li>
              <li>Media Planning</li>
              <li>Media Buying</li>
              <li>Campaign Audits</li>
              <li>Competitor Analysis</li>
              <li>Growth Consulting</li>
            </ul>
          </div>

          {/* Col 6: Company & Legal */}
          <div>
            <h4 className="font-black uppercase tracking-widest text-[#FECF05] mb-4 font-syne">
              Company
            </h4>
            <ul className="space-y-2 text-[#A0A0A0] mb-6">
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-[#FECF05] cursor-pointer">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-[#FECF05] cursor-pointer">
                  Our Work
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('industries')} className="hover:text-[#FECF05] cursor-pointer">
                  Industries
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-[#FECF05] cursor-pointer">
                  Contact Us
                </button>
              </li>
            </ul>

            <h4 className="font-black uppercase tracking-widest text-[#FECF05] mb-2 font-syne">
              Legal
            </h4>
            <ul className="space-y-1.5 text-[#8E8E8E]">
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Cookie Policy</li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8E8E8E]">
          <div>
            © {new Date().getFullYear()} Revenue Craft Digital. All rights reserved. Hyderabad, India.
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-white hover:text-[#FECF05] transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#FECF05]" />
          </button>
        </div>
      </div>
    </footer>
  );
};
