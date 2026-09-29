import React from 'react';
import { 
  DollarSign, 
  Target, 
  Bot, 
  BarChart2, 
  GitMerge, 
  Share2, 
  Palette, 
  Eye, 
  TrendingUp 
} from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

export const WhyUsSection: React.FC = () => {
  const pillars = [
    {
      title: 'Revenue-Focused',
      desc: 'We look beyond superficial advertising vanity metrics and focus on outcomes connected to bottom-line business growth.',
      icon: DollarSign,
    },
    {
      title: 'Performance-First',
      desc: 'Every single campaign has an explicit, mathematically sound, and measurable commercial objective.',
      icon: Target,
    },
    {
      title: 'AI-Powered',
      desc: 'AI accelerates research, audience intent analysis, content variation development, and continuous bid optimisation.',
      icon: Bot,
    },
    {
      title: 'Data-Driven',
      desc: 'Decisions are grounded in empirical evidence and server-side telemetry rather than subjective assumptions.',
      icon: BarChart2,
    },
    {
      title: 'Full-Funnel',
      desc: 'We architect and nurture the entire buyer journey from the initial impression through to retention and repeat LTV.',
      icon: GitMerge,
    },
    {
      title: 'Multi-Channel',
      desc: 'We build cohesive, connected strategies across the exact channels where your ideal buyers spend their attention.',
      icon: Share2,
    },
    {
      title: 'Creative + Performance',
      desc: 'Creative isn’t separate from performance. High-converting creative is the single biggest multiplier of media efficiency.',
      icon: Palette,
    },
    {
      title: 'Transparent',
      desc: 'Zero black boxes. Clients always know what is running, why decisions were made, and what comes next.',
      icon: Eye,
    },
    {
      title: 'Growth-Minded',
      desc: 'We relentlessly search for untapped opportunities to optimize customer acquisition cost and scale profitably.',
      icon: TrendingUp,
    },
  ];

  return (
    <section id="why-us" className="py-24 bg-[#141414] text-white border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll direction="up" duration={800}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FECF05]/10 border border-[#FECF05]/20 text-[#FECF05] text-xs font-bold uppercase tracking-widest mb-4">
              <span>WHY REVENUE CRAFT DIGITAL?</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-syne tracking-tight mb-4">
              Because Marketing Should{' '}
              <span className="text-[#FECF05]">Create Business Growth</span>.
            </h2>
            <p className="text-base sm:text-lg text-[#C1C1C1] leading-relaxed font-light">
              We partner with founders and marketing leaders who demand clarity, financial accountability, and relentless execution.
            </p>
          </div>
        </RevealOnScroll>

        {/* 9 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <RevealOnScroll
                key={pillar.title}
                direction="up"
                duration={650}
                delay={idx * 60}
              >
                <div className="p-7 rounded-2xl bg-[#1C1C1C] border border-white/10 hover:border-[#FECF05] transition-all duration-300 h-full flex flex-col justify-between group shadow-lg">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#FECF05]/15 border border-[#FECF05]/30 flex items-center justify-center text-[#FECF05] mb-5 group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold font-syne text-white mb-2 group-hover:text-[#FECF05] transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#A0A0A0] leading-relaxed font-light">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
};
