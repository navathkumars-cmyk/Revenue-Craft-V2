import React from 'react';
import { MapPin, Globe, Users, CheckCircle2 } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

export const TeamLocationSection: React.FC = () => {
  const teamRoles = [
    { title: 'Performance Marketers', desc: 'Campaign architecture & cross-channel orchestration.' },
    { title: 'Media Buyers', desc: 'Algorithmic bid calibration & auction dominance.' },
    { title: 'Growth Strategists', desc: 'Market positioning, economics & unit margins.' },
    { title: 'Graphic Designers', desc: 'Conversion-centered hooks, static & motion assets.' },
    { title: 'Content Specialists', desc: 'High-intent copywriting & video storytelling scripts.' },
    { title: 'SEO Specialists', desc: 'Search intent mapping & technical rank dominance.' },
    { title: 'Web Developers', desc: 'Fast, responsive, friction-free conversion funnels.' },
    { title: 'Automation Specialists', desc: 'CRM workflows & instant WhatsApp lead routing.' },
    { title: 'Analytics Specialists', desc: 'Server-side CAPI tagging & deduplicated attribution.' },
  ];

  return (
    <section id="team-location" className="py-24 bg-[#141414] text-white border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* TEAM SUB-SECTION */}
        <RevealOnScroll direction="up" duration={800}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FECF05]/10 border border-[#FECF05]/20 text-[#FECF05] text-xs font-bold uppercase tracking-widest mb-4">
              <Users className="w-3.5 h-3.5" />
              <span>THE PERFORMANCE ECOSYSTEM</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black font-syne tracking-tight mb-4">
              The People Behind the <span className="text-[#FECF05]">Performance</span>.
            </h2>
            <p className="text-base sm:text-lg text-[#C1C1C1] leading-relaxed font-light">
              Growth requires different skills working together in lockstep synchronization.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
          {teamRoles.map((role, idx) => (
            <RevealOnScroll
              key={role.title}
              direction="up"
              duration={650}
              delay={idx * 50}
            >
              <div className="p-6 rounded-2xl bg-[#1C1C1C] border border-white/10 hover:border-[#FECF05] transition-all h-full group shadow-md">
                <span className="text-[10px] font-mono-custom text-[#FECF05] font-black uppercase tracking-wider block mb-1">
                  ROLE // 0{idx + 1}
                </span>
                <h4 className="text-base font-bold font-syne text-white mb-1.5 group-hover:text-[#FECF05] transition-colors">
                  {role.title}
                </h4>
                <p className="text-xs text-[#A0A0A0] leading-relaxed font-light">
                  {role.desc}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Banner: One Team. One Objective */}
        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center max-w-2xl mx-auto mb-24">
          <span className="text-xs font-black uppercase tracking-[0.2em] text-[#FECF05] block mb-1">
            UNIFIED FOCUS
          </span>
          <h3 className="text-xl sm:text-2xl font-black font-syne text-white">
            One Team. One Objective. Better Business Outcomes.
          </h3>
        </div>

        {/* LOCATION SUB-SECTION */}
        <div className="pt-8 border-t border-white/10">
          <RevealOnScroll direction="up" duration={800}>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FECF05]/10 border border-[#FECF05]/20 text-[#FECF05] text-xs font-bold uppercase tracking-widest mb-4">
                <MapPin className="w-3.5 h-3.5" />
                <span>LOCATION & REACH</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black font-syne tracking-tight mb-4">
                Where Strategy Meets <span className="text-[#FECF05]">Growth</span>.
              </h2>
              <p className="text-base text-[#C1C1C1] leading-relaxed font-light">
                Revenue Craft Digital works with businesses digitally across markets and locations.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Hub 1: Hyderabad */}
            <div className="p-8 rounded-3xl bg-[#1C1C1C] border border-white/10 shadow-lg">
              <div className="w-10 h-10 rounded-xl bg-[#FECF05]/15 border border-[#FECF05]/30 flex items-center justify-center text-[#FECF05] mb-4">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold font-syne text-white mb-2">
                Hyderabad Hub
              </h3>
              <p className="text-xs sm:text-sm text-[#A0A0A0] leading-relaxed mb-4">
                Command center for digital operations, creative strategy, and advanced performance media architecture.
              </p>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#FECF05]">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Active Strategic Hub
              </span>
            </div>

            {/* Hub 2: Pan-India & Global Reach */}
            <div className="p-8 rounded-3xl bg-[#1C1C1C] border border-white/10 shadow-lg">
              <div className="w-10 h-10 rounded-xl bg-[#FECF05]/15 border border-[#FECF05]/30 flex items-center justify-center text-[#FECF05] mb-4">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold font-syne text-white mb-2">
                Working With Brands Across India
              </h3>
              <p className="text-xs sm:text-sm text-[#A0A0A0] leading-relaxed mb-4">
                Performance marketing doesn't stop at city boundaries. We work with businesses looking to grow locally, nationally and across relevant international markets.
              </p>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-white">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FECF05]" />
                Digital-First Delivery
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
