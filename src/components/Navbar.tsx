import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sun, Moon } from 'lucide-react';
import { NavSection } from '../types';

interface NavbarProps {
  activeSection: NavSection;
  onNavigate: (section: NavSection) => void;
  onOpenAudit: () => void;
  isDarkMode?: boolean;
  onToggleDarkMode?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  onOpenAudit,
  isDarkMode = true,
  onToggleDarkMode,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { label: string; section: NavSection }[] = [
    { label: 'Home', section: 'home' },
    { label: 'About', section: 'about' },
    { label: 'Services', section: 'services' },
    { label: 'Ecosystem', section: 'ecosystem' },
    { label: 'Industries', section: 'industries' },
    { label: 'How We Work', section: 'how-we-work' },
    { label: 'Why Us', section: 'why-us' },
    { label: 'Contact', section: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? isDarkMode
            ? 'bg-[#141414]/92 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl'
            : 'bg-white/92 backdrop-blur-md border-b border-slate-200/80 py-3 shadow-xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Revenue Craft Digital Brandmark Logo */}
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-3 group cursor-pointer text-left focus:outline-none"
          >
            {/* Geometric RC Logo Icon */}
            <div className="w-10 h-10 rounded-xl bg-[#FECF05] flex items-center justify-center text-[#141414] font-black shadow-lg shadow-[#FECF05]/20 group-hover:scale-105 transition-transform shrink-0">
              <svg
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 stroke-[#141414]"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {/* Stylized R & Ascending Growth Arrow */}
                <path d="M7 6v16M7 6h8a4 4 0 0 1 0 8H7M15 14l6 8" />
                <path d="M19 6l5 0m0 0l0 5m0-5l-7 7" stroke="#141414" strokeWidth="2.2" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span
                className={`text-lg sm:text-xl font-black tracking-tight font-syne leading-none flex items-center gap-1 ${
                  isDarkMode ? 'text-white' : 'text-slate-900'
                }`}
              >
                REVENUE CRAFT
                <span className="text-[#FECF05] text-xl leading-none">.</span>
              </span>
              <span className="text-[9px] font-bold tracking-[0.28em] text-[#FECF05] uppercase mt-0.5">
                DIGITAL
              </span>
            </div>
          </button>

          {/* Signature Glassmorphic Pill Navbar (Desktop) */}
          <nav
            className={`hidden xl:flex items-center backdrop-blur-lg rounded-full px-2 py-1 shadow-xl transition-colors ${
              isDarkMode
                ? 'bg-[#222222]/85 border border-white/10'
                : 'bg-white/90 border border-slate-200/90 shadow-md'
            }`}
          >
            {navLinks.map((item) => {
              const isActive = activeSection === item.section;
              return (
                <button
                  key={item.section}
                  onClick={() => onNavigate(item.section)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'bg-[#FECF05] text-[#141414] shadow-md font-bold'
                      : isDarkMode
                      ? 'text-[#C1C1C1] hover:text-white hover:bg-white/5'
                      : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Primary Growth Audit CTA, Theme Mode Switcher & Mobile Toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Light / Dark Mode Toggle Switch */}
            {onToggleDarkMode && (
              <button
                onClick={onToggleDarkMode}
                className={`p-2.5 rounded-full border transition-all cursor-pointer flex items-center justify-center shadow-md hover:scale-105 ${
                  isDarkMode
                    ? 'bg-white/10 hover:bg-white/20 border-white/15 text-white'
                    : 'bg-slate-100 hover:bg-slate-200 border-slate-200 text-slate-800'
                }`}
                title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                aria-label={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              >
                {isDarkMode ? (
                  <Sun className="w-4 h-4 text-[#FECF05]" />
                ) : (
                  <Moon className="w-4 h-4 text-slate-700" />
                )}
              </button>
            )}

            <button
              onClick={onOpenAudit}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#FECF05] text-[#141414] text-xs font-extrabold uppercase tracking-wider hover:bg-white hover:text-[#141414] transition-all shadow-lg shadow-[#FECF05]/20 hover:scale-105 cursor-pointer whitespace-nowrap"
            >
              <span>Get a Free Growth Audit</span>
              <ArrowUpRight className="w-4 h-4 stroke-[3]" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`xl:hidden p-2 rounded-lg transition-colors focus:outline-none cursor-pointer ${
                isDarkMode
                  ? 'text-white hover:bg-white/10'
                  : 'text-slate-800 hover:bg-slate-100'
              }`}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className={`xl:hidden border-b px-4 pt-3 pb-6 space-y-2 animate-fade-in shadow-2xl max-h-[85vh] overflow-y-auto ${
            isDarkMode
              ? 'bg-[#141414] border-white/10'
              : 'bg-white border-slate-200 text-slate-800'
          }`}
        >
          {navLinks.map((item) => (
            <button
              key={item.section}
              onClick={() => {
                onNavigate(item.section);
                setMobileMenuOpen(false);
              }}
              className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors flex items-center justify-between ${
                activeSection === item.section
                  ? 'bg-[#FECF05] text-[#141414] font-bold'
                  : isDarkMode
                  ? 'text-white/80 hover:bg-white/5'
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              <span>{item.label}</span>
              {activeSection === item.section && (
                <span className="w-2 h-2 rounded-full bg-[#141414]"></span>
              )}
            </button>
          ))}
          <div className="pt-2 flex items-center gap-2">
            {onToggleDarkMode && (
              <button
                onClick={() => {
                  onToggleDarkMode();
                }}
                className={`py-2.5 px-4 rounded-lg font-bold text-xs flex items-center justify-center gap-2 ${
                  isDarkMode
                    ? 'bg-white/10 text-white'
                    : 'bg-slate-100 text-slate-800 border border-slate-200'
                }`}
              >
                {isDarkMode ? <Sun className="w-4 h-4 text-[#FECF05]" /> : <Moon className="w-4 h-4 text-slate-800" />}
                <span>{isDarkMode ? 'Light' : 'Dark'}</span>
              </button>
            )}
            <button
              onClick={() => {
                onOpenAudit();
                setMobileMenuOpen(false);
              }}
              className="flex-1 py-2.5 rounded-lg bg-[#FECF05] text-[#141414] font-black text-xs uppercase tracking-wider text-center"
            >
              Get Free Growth Audit
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
