import React, { useState } from 'react';
import { NavSection } from '../types';
import { Menu, X, ArrowUpRight, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  activeSection: NavSection;
  onNavigate: (section: NavSection) => void;
  onOpenConsultation: () => void;
  theme?: 'dark' | 'light';
  onToggleTheme?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  onOpenConsultation,
  theme = 'dark',
  onToggleTheme
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isLight = theme === 'light';

  const navItems: { id: NavSection; label: string }[] = [
    { id: 'services', label: 'SERVICES' },
    { id: 'industries', label: 'INDUSTRIES' },
    { id: 'case-studies', label: 'CASE STUDIES' },
    { id: 'about', label: 'ABOUT' },
    { id: 'insights', label: 'INSIGHTS' }
  ];

  const handleNavClick = (id: NavSection) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full backdrop-blur-md border-b z-50 transition-all duration-300 ${
      isLight
        ? 'bg-white/90 border-neutral-200 shadow-sm text-neutral-900'
        : 'bg-[#0A0A0A]/90 border-white/10 text-white'
    }`}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex justify-between items-center h-22">
        {/* Brand Logo */}
        <button
          onClick={() => handleNavClick('overview')}
          className="group text-left flex flex-col justify-center focus:outline-none cursor-pointer"
        >
          <span className={`text-[10px] uppercase tracking-[0.4em] font-mono-custom mb-0.5 ${
            isLight ? 'text-neutral-500' : 'text-white/40'
          }`}>
            PERFORMANCE MARKETING
          </span>
          <span className={`font-syne text-2xl md:text-3xl font-black tracking-tighter uppercase italic group-hover:text-orange-500 transition-colors ${
            isLight ? 'text-neutral-900' : 'text-white'
          }`}>
            REVENUE CRAFT DIGITAL<span className="text-orange-500 font-normal">.</span>
          </span>
        </button>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center space-x-7">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`font-mono-custom text-[11px] uppercase tracking-[0.2em] font-bold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'text-orange-500 border-b-2 border-orange-500 pb-1'
                    : isLight
                    ? 'text-neutral-600 hover:text-black'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        {/* Right Action Bar */}
        <div className="hidden md:flex items-center space-x-4">
          {onToggleTheme && (
            <button
              onClick={onToggleTheme}
              title={isLight ? 'Switch to Dark Mode' : 'Switch to White Theme'}
              className={`px-3 py-2 border transition-all duration-200 flex items-center space-x-2 cursor-pointer font-mono-custom text-xs uppercase font-bold ${
                isLight
                  ? 'bg-neutral-100 border-neutral-300 text-neutral-800 hover:border-orange-500 hover:bg-orange-500 hover:text-white'
                  : 'bg-[#111111] border-white/20 text-orange-500 hover:border-orange-500 hover:bg-white/10'
              }`}
              aria-label="Toggle Theme"
            >
              {isLight ? (
                <>
                  <Moon className="w-4 h-4 text-neutral-800" />
                  <span className="text-[10px] tracking-wider font-mono-custom font-extrabold">DARK</span>
                </>
              ) : (
                <>
                  <Sun className="w-4 h-4 text-orange-500" />
                  <span className="text-[10px] tracking-wider font-mono-custom font-extrabold">LIGHT</span>
                </>
              )}
            </button>
          )}

          <button
            onClick={() => handleNavClick('contact')}
            className={`font-mono-custom text-xs uppercase tracking-[0.2em] font-black px-6 py-3 transition-all duration-200 flex items-center space-x-2 cursor-pointer shadow-lg ${
              isLight
                ? 'bg-black text-white hover:bg-orange-500 hover:text-white'
                : 'bg-white text-black hover:bg-orange-500 hover:text-white shadow-orange-500/5'
            }`}
          >
            <span>FREE GROWTH AUDIT</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="flex lg:hidden items-center space-x-3">
          {onToggleTheme && (
            <button
              onClick={onToggleTheme}
              className={`p-2 border cursor-pointer ${
                isLight ? 'bg-neutral-100 border-neutral-300 text-black' : 'bg-[#111111] border-white/20 text-orange-500'
              }`}
              aria-label="Toggle theme"
            >
              {isLight ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>
          )}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded ${isLight ? 'text-black hover:bg-neutral-100' : 'text-white hover:bg-white/10'}`}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className={`lg:hidden border-b px-6 py-8 space-y-4 animate-in slide-in-from-top-4 duration-200 ${
          isLight ? 'bg-white border-neutral-200 text-neutral-900' : 'bg-[#0A0A0A] border-white/10 text-white'
        }`}>
          <button
            onClick={() => handleNavClick('overview')}
            className={`block w-full text-left font-mono-custom text-xs uppercase tracking-[0.3em] font-bold py-2 ${
              isLight ? 'text-neutral-500 hover:text-orange-500' : 'text-white/50 hover:text-orange-500'
            }`}
          >
            HOME / OVERVIEW
          </button>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`block w-full text-left font-mono-custom text-xs uppercase tracking-[0.3em] font-bold py-2 ${
                activeSection === item.id
                  ? 'text-orange-500 font-extrabold'
                  : isLight
                  ? 'text-neutral-900'
                  : 'text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-6 border-t border-neutral-200 space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigate('contact');
              }}
              className={`w-full font-mono-custom text-xs uppercase tracking-[0.2em] font-black py-4 flex items-center justify-center space-x-2 transition-colors ${
                isLight
                  ? 'bg-black text-white hover:bg-orange-500'
                  : 'bg-white text-black hover:bg-orange-500 hover:text-white'
              }`}
            >
              <span>GET FREE GROWTH AUDIT</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
