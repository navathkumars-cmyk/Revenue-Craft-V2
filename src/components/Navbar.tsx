import React, { useState } from 'react';
import { NavSection } from '../types';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  activeSection: NavSection;
  onNavigate: (section: NavSection) => void;
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  onOpenConsultation
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: NavSection; label: string }[] = [
    { id: 'expertise', label: 'SERVICES' },
    { id: 'case-studies', label: 'CASE STUDIES' },
    { id: 'philosophy', label: 'STRATEGY' },
    { id: 'journal', label: 'RESEARCH' }
  ];

  const handleNavClick = (id: NavSection) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0A0A0A]/90 backdrop-blur-md border-b border-white/10 z-50 transition-all duration-300">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex justify-between items-center h-22">
        {/* Brand Logo with Eyebrow */}
        <button
          onClick={() => handleNavClick('overview')}
          className="group text-left flex flex-col justify-center focus:outline-none cursor-pointer"
        >
          <span className="text-[10px] uppercase tracking-[0.4em] text-white/40 font-mono-custom mb-0.5">
            DIGITAL GROWTH AGENCY
          </span>
          <span className="font-syne text-2xl md:text-3xl font-black tracking-tighter uppercase italic text-white group-hover:text-orange-500 transition-colors">
            REVENUE CRAFT DIGITAL<span className="text-orange-500 font-normal">.</span>
          </span>
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-9">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`font-mono-custom text-[11px] uppercase tracking-[0.2em] font-bold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'text-orange-500 border-b-2 border-orange-500 pb-1'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <button
            onClick={onOpenConsultation}
            className="bg-white text-black font-mono-custom text-xs uppercase tracking-[0.2em] font-black px-6 py-3 hover:bg-orange-500 hover:text-white active:scale-95 transition-all duration-200 flex items-center space-x-2 cursor-pointer shadow-lg shadow-orange-500/5"
          >
            <span>CONTACT</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white p-2 hover:bg-white/10 rounded"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0A0A0A] border-b border-white/10 px-6 py-8 space-y-4 animate-in slide-in-from-top-4 duration-200">
          <button
            onClick={() => handleNavClick('overview')}
            className="block w-full text-left font-mono-custom text-xs uppercase tracking-[0.3em] font-bold text-white/50 hover:text-orange-500 py-2"
          >
            OVERVIEW
          </button>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`block w-full text-left font-mono-custom text-xs uppercase tracking-[0.3em] font-bold py-2 ${
                activeSection === item.id ? 'text-orange-500 font-extrabold' : 'text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-6 border-t border-white/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full bg-white text-black hover:bg-orange-500 hover:text-white font-mono-custom text-xs uppercase tracking-[0.2em] font-black py-4 flex items-center justify-center space-x-2 transition-colors"
            >
              <span>CONTACT US</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
