import React, { useState, useEffect } from 'react';
import { Palette, Check, Sparkles, X, ChevronUp, ChevronDown, Info, Sun, Moon } from 'lucide-react';

export interface ColorTheme {
  id: string;
  name: string;
  subtitle: string;
  accent: string;
  accentHover: string;
  bgDark: string;
  contrastText: string;
  glow: string;
  borderGlow: string;
  badge: string;
  psychology: string;
  bestFor: string;
}

export const COLOR_THEMES: ColorTheme[] = [
  {
    id: 'canary',
    name: 'Aviation Signal Yellow',
    subtitle: 'Current Signature',
    accent: '#FECF05',
    accentHover: '#FDD835',
    bgDark: '#141414',
    contrastText: '#141414',
    glow: 'rgba(254, 207, 5, 0.35)',
    borderGlow: 'rgba(254, 207, 5, 0.45)',
    badge: 'High Energy & Contrast',
    psychology: 'High-contrast aviation cockpit aesthetic. Commands instant visual attention and signals proactive co-pilot partnership.',
    bestFor: 'Performance scaling, bold direct-response brands, and category disruptors.',
  },
  {
    id: 'emerald',
    name: 'Quant Terminal Mint',
    subtitle: 'Fintech & Capital',
    accent: '#00F59B',
    accentHover: '#00D885',
    bgDark: '#0B0F12',
    contrastText: '#0B0F12',
    glow: 'rgba(0, 245, 155, 0.35)',
    borderGlow: 'rgba(0, 245, 155, 0.45)',
    badge: 'Revenue & Profit Growth',
    psychology: 'Green is universally synonymous with positive cash flow, compounding ROAS, data accuracy, and quantitative precision.',
    bestFor: 'Attribution engineering, server-side data analytics, B2B SaaS, and finance/investor clients.',
  },
  {
    id: 'violet',
    name: 'Hyper-Violet & Indigo',
    subtitle: 'AI & AdTech Infrastructure',
    accent: '#6366F1',
    accentHover: '#4F46E5',
    bgDark: '#090A10',
    contrastText: '#FFFFFF',
    glow: 'rgba(99, 102, 241, 0.35)',
    borderGlow: 'rgba(99, 102, 241, 0.45)',
    badge: 'Deep Tech & AI Caliber',
    psychology: 'Linear/Stripe-grade Silicon Valley aesthetic. Communicates algorithmic sophistication, smart bidding machine learning, and modern SaaS architecture.',
    bestFor: 'AI-powered marketing platforms, enterprise tech companies, and tech-forward founders.',
  },
  {
    id: 'amber',
    name: 'Solar Blaze Orange',
    subtitle: 'High-Velocity Conversion',
    accent: '#FF5500',
    accentHover: '#E04B00',
    bgDark: '#0D0D0D',
    contrastText: '#FFFFFF',
    glow: 'rgba(255, 85, 0, 0.35)',
    borderGlow: 'rgba(255, 85, 0, 0.45)',
    badge: 'Urgency & Direct Response',
    psychology: 'Blaze amber radiates urgency, relentless speed, and aggressive growth drive. Highly stimulating for action-oriented direct response.',
    bestFor: 'Fast-scaling D2C e-commerce, high-volume consumer apps, and competitive paid social.',
  },
  {
    id: 'champagne',
    name: 'Titanium Champagne Gold',
    subtitle: 'Enterprise Private Advisory',
    accent: '#E2C37A',
    accentHover: '#D4AF37',
    bgDark: '#0A0A0A',
    contrastText: '#0A0A0A',
    glow: 'rgba(226, 195, 122, 0.35)',
    borderGlow: 'rgba(226, 195, 122, 0.45)',
    badge: 'Quiet Luxury & Institutional',
    psychology: 'Restrained, warm champagne gold inspired by private wealth offices and luxury real estate syndicates. Exudes proven maturity and discreet excellence.',
    bestFor: 'Luxury real estate developers, enterprise healthcare, family offices, and 8-figure legacy brands.',
  },
];

interface ThemeSwitcherProps {
  isDarkMode?: boolean;
  onToggleDarkMode?: () => void;
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({
  isDarkMode = true,
  onToggleDarkMode,
}) => {
  const [activeThemeId, setActiveThemeId] = useState<string>('canary');
  const [isOpen, setIsOpen] = useState(false);

  // Apply theme to document
  const applyTheme = (theme: ColorTheme) => {
    setActiveThemeId(theme.id);
    localStorage.setItem('rcd_theme_id', theme.id);

    const root = document.documentElement;
    root.style.setProperty('--theme-color', theme.accent);
    root.style.setProperty('--theme-color-hover', theme.accentHover);
    root.style.setProperty('--theme-contrast', theme.contrastText);
    root.style.setProperty('--theme-glow', theme.glow);
    root.style.setProperty('--theme-border-glow', theme.borderGlow);
    root.style.setProperty('--bg-black-color', theme.bgDark);

    const lightTextAccent =
      theme.id === 'canary'
        ? '#D97706'
        : theme.id === 'emerald'
        ? '#059669'
        : theme.id === 'champagne'
        ? '#B45309'
        : theme.accent;

    // Update dynamic style element for instant Tailwind override
    let styleTag = document.getElementById('rcd-dynamic-theme-style');
    if (!styleTag) {
      styleTag = document.createElement('style');
      styleTag.id = 'rcd-dynamic-theme-style';
      document.head.appendChild(styleTag);
    }

    styleTag.innerHTML = `
      :root {
        --theme-color: ${theme.accent} !important;
        --theme-contrast: ${theme.contrastText} !important;
        --theme-glow: ${theme.glow} !important;
        --bg-black-color: ${theme.bgDark} !important;
      }
      ::selection {
        background-color: ${theme.accent} !important;
        color: ${theme.contrastText} !important;
      }
      html:not(.light) .text-\\[\\#FECF05\\] {
        color: ${theme.accent} !important;
      }
      html.light :not(.dark-surface) .text-\\[\\#FECF05\\] {
        color: ${lightTextAccent} !important;
      }
      html.light .dark-surface .text-\\[\\#FECF05\\] {
        color: ${theme.accent} !important;
      }
      .bg-\\[\\#FECF05\\] {
        background-color: ${theme.accent} !important;
        color: ${theme.contrastText} !important;
      }
      .bg-\\[\\#FECF05\\]\\/10 {
        background-color: ${theme.accent}1A !important;
      }
      .bg-\\[\\#FECF05\\]\\/15 {
        background-color: ${theme.accent}26 !important;
      }
      .bg-\\[\\#FECF05\\]\\/20 {
        background-color: ${theme.accent}33 !important;
      }
      .border-\\[\\#FECF05\\] {
        border-color: ${theme.accent} !important;
      }
      .border-\\[\\#FECF05\\]\\/20 {
        border-color: ${theme.accent}33 !important;
      }
      .border-\\[\\#FECF05\\]\\/25 {
        border-color: ${theme.accent}40 !important;
      }
      .border-\\[\\#FECF05\\]\\/30 {
        border-color: ${theme.accent}4D !important;
      }
      .border-\\[\\#FECF05\\]\\/40 {
        border-color: ${theme.accent}66 !important;
      }
      .border-\\[\\#FECF05\\]\\/50 {
        border-color: ${theme.accent}80 !important;
      }
      .shadow-\\[\\#FECF05\\]\\/20, .shadow-\\[\\#FECF05\\]\\/25, .shadow-\\[\\#FECF05\\]\\/30, .shadow-\\[\\#FECF05\\]\\/40 {
        box-shadow: 0 10px 30px ${theme.glow} !important;
      }
      .hover\\:border-\\[\\#FECF05\\]:hover {
        border-color: ${theme.accent} !important;
      }
      .hover\\:border-\\[\\#FECF05\\]\\/50:hover {
        border-color: ${theme.accent}80 !important;
      }
      .hover\\:text-\\[\\#FECF05\\]:hover {
        color: ${theme.accent} !important;
      }
      .group:hover .group-hover\\:text-\\[\\#FECF05\\] {
        color: ${theme.accent} !important;
      }
      .wm-floating-btn, .wm-back-to-top {
        background-color: ${theme.accent} !important;
        color: ${theme.contrastText} !important;
        box-shadow: -4px 0 20px ${theme.glow} !important;
      }
      .custom-cursor-dot {
        background-color: ${theme.accent} !important;
      }
      .custom-cursor-ring {
        border-color: ${theme.accent} !important;
      }
    `;
  };

  // Restore on mount
  useEffect(() => {
    const saved = localStorage.getItem('rcd_theme_id');
    const matched = COLOR_THEMES.find((t) => t.id === saved) || COLOR_THEMES[0];
    applyTheme(matched);
  }, []);

  const currentTheme = COLOR_THEMES.find((t) => t.id === activeThemeId) || COLOR_THEMES[0];

  return (
    <>
      {/* Floating Theme Launcher at Bottom-Left */}
      <div className="fixed bottom-7 left-7 z-45 flex items-center gap-2">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#1A1A1A]/95 backdrop-blur-md border border-white/20 hover:border-white/40 shadow-2xl text-white text-xs font-bold transition-all duration-300 hover:scale-105 cursor-pointer group"
          aria-label="Toggle Color Theme Suggestions"
        >
          <div
            className="w-3.5 h-3.5 rounded-full border border-black/40 shadow-sm"
            style={{ backgroundColor: currentTheme.accent }}
          />
          <Palette className="w-4 h-4 text-white/80 group-hover:text-white" />
          <span className="hidden sm:inline">Theme Palette:</span>
          <span style={{ color: currentTheme.accent }}>{currentTheme.name.split(' ')[0]}</span>
          {isOpen ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronUp className="w-3.5 h-3.5" />}
        </button>

        {/* Quick Light / Dark Mode Toggle button next to launcher */}
        {onToggleDarkMode && (
          <button
            onClick={onToggleDarkMode}
            className="p-2.5 rounded-full bg-[#1A1A1A]/95 backdrop-blur-md border border-white/20 hover:border-white/40 shadow-2xl text-white text-xs transition-all duration-300 hover:scale-105 cursor-pointer flex items-center justify-center"
            title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            aria-label={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {isDarkMode ? (
              <Sun className="w-4 h-4 text-[#FECF05]" />
            ) : (
              <Moon className="w-4 h-4 text-slate-800" />
            )}
          </button>
        )}
      </div>

      {/* Slide-Up Theme Explorer Drawer Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-2xl bg-[#181818] border border-white/20 rounded-3xl p-6 sm:p-8 text-white shadow-2xl max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="flex items-start justify-between pb-4 border-b border-white/10 mb-6">
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/10 text-xs font-bold uppercase tracking-wider text-white mb-2">
                  <Sparkles className="w-3 h-3 text-[#FECF05]" />
                  <span>Curated Agency Color Theming</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black font-syne text-white">
                  Appearance & Color Themes
                </h3>
                <p className="text-xs sm:text-sm text-[#A0A0A0] mt-1 font-light">
                  Switch between Light and Dark mode, or choose any curated accent palette.
                </p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 flex items-center justify-center text-white/80 hover:text-white transition-colors cursor-pointer"
                aria-label="Close Theme Panel"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Light / Dark Mode Segmented Switcher */}
            {onToggleDarkMode && (
              <div className="mb-6 p-3 rounded-2xl bg-[#222222] border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-white">
                    {isDarkMode ? <Moon className="w-4 h-4 text-[#FECF05]" /> : <Sun className="w-4 h-4 text-amber-500" />}
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-white">
                      Display Mode: {isDarkMode ? 'Dark Theme' : 'Light Theme'}
                    </h5>
                    <p className="text-xs text-[#8E8E8E]">
                      {isDarkMode
                        ? 'High-contrast obsidian black canvas'
                        : 'Clean, architectural off-white canvas'}
                    </p>
                  </div>
                </div>

                <button
                  onClick={onToggleDarkMode}
                  className="px-4 py-2 rounded-xl bg-[#FECF05] text-[#141414] font-black text-xs uppercase tracking-wider hover:bg-white transition-all shadow-md cursor-pointer flex items-center gap-2"
                >
                  {isDarkMode ? <Sun className="w-3.5 h-3.5 stroke-[3]" /> : <Moon className="w-3.5 h-3.5 stroke-[3]" />}
                  <span>Switch to {isDarkMode ? 'Light' : 'Dark'}</span>
                </button>
              </div>
            )}

            {/* Theme Cards List */}
            <div className="space-y-3.5">
              {COLOR_THEMES.map((theme) => {
                const isSelected = theme.id === activeThemeId;
                return (
                  <div
                    key={theme.id}
                    onClick={() => applyTheme(theme)}
                    className={`p-4 sm:p-5 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${
                      isSelected
                        ? 'bg-[#222222] border-2 shadow-xl'
                        : 'bg-[#1C1C1C] border-white/10 hover:border-white/30 hover:bg-[#202020]'
                    }`}
                    style={{
                      borderColor: isSelected ? theme.accent : undefined,
                    }}
                  >
                    {/* Left: Swatch & Identity */}
                    <div className="flex items-start gap-4">
                      {/* Color Disc Indicator */}
                      <div
                        className="w-12 h-12 rounded-2xl shrink-0 flex items-center justify-center shadow-lg border border-black/30"
                        style={{ backgroundColor: theme.accent }}
                      >
                        {isSelected ? (
                          <Check className="w-6 h-6 stroke-[3]" style={{ color: theme.contrastText }} />
                        ) : (
                          <span
                            className="w-3 h-3 rounded-full border border-black/40"
                            style={{ backgroundColor: theme.contrastText }}
                          />
                        )}
                      </div>

                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <h4 className="text-base font-bold font-syne text-white">
                            {theme.name}
                          </h4>
                          <span
                            className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full"
                            style={{
                              backgroundColor: `${theme.accent}20`,
                              color: theme.accent,
                              border: `1px solid ${theme.accent}40`,
                            }}
                          >
                            {theme.badge}
                          </span>
                        </div>
                        <p className="text-xs text-[#8E8E8E] mt-0.5">{theme.subtitle}</p>
                        <p className="text-xs text-[#C1C1C1] mt-2 font-light leading-relaxed">
                          {theme.psychology}
                        </p>
                      </div>
                    </div>

                    {/* Right: Apply Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        applyTheme(theme);
                      }}
                      className="shrink-0 w-full sm:w-auto px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-transform active:scale-95 cursor-pointer shadow-md"
                      style={{
                        backgroundColor: isSelected ? theme.accent : 'rgba(255, 255, 255, 0.1)',
                        color: isSelected ? theme.contrastText : '#FFFFFF',
                      }}
                    >
                      {isSelected ? 'Active Palette' : 'Preview Palette'}
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Strategic Recommendation Callout */}
            <div className="mt-6 pt-5 border-t border-white/10 flex items-start gap-3 bg-white/5 p-4 rounded-2xl">
              <Info className="w-5 h-5 text-[#FECF05] shrink-0 mt-0.5" />
              <div className="text-xs text-[#C1C1C1] leading-relaxed">
                <strong className="text-white font-semibold">Strategic Agency Advice:</strong> If your core differentiator is <span className="text-[#FECF05] font-bold">Measurement & Attribution Engineering</span>, <strong className="text-white">Quant Terminal Mint (#00F59B)</strong> provides exceptional Wall St / fintech credibility. In Light Mode, all 5 palettes maintain crisp accessibility against the clean off-white canvas.
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
