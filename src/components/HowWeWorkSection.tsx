import React from 'react';
import { RevealOnScroll } from './RevealOnScroll';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export const HowWeWorkSection: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Understand',
      desc: 'We understand your:',
      items: ['Business & Unit Economics', 'Product & Offer', 'Customer Intent', 'Revenue Goal', 'Sales Journey', 'Competition', 'Existing Marketing Data'],
    },
    {
      step: '02',
      title: 'Strategise',
      desc: 'We define:',
      items: ['Channel Mix & Platforms', 'Campaign Structure', 'Audience Cohorts', 'Keyword Clusters', 'Conversion Funnels', 'Budget Allocations', 'KPIs & Attribution'],
    },
    {
      step: '03',
      title: 'Build',
      desc: 'We develop:',
      items: ['Campaign Architecture', 'Ad Creatives & Copy', 'High-Converting Landing Pages', 'Server-Side Tracking', 'CRM & WhatsApp Automation'],
    },
    {
      step: '04',
      title: 'Launch',
      desc: 'Campaigns go live with measurement systems in place.',
      items: ['Quality Assurance Check', 'Tag Verification', 'Initial Traffic Injection', 'Bid Calibration'],
    },
    {
      step: '05',
      title: 'Learn',
      desc: 'We analyse actual customer behaviour and campaign data.',
      items: ['Click-Through Velocity', 'Conversion Leak Pinpointing', 'Lead Quality Feedback', 'CPA vs CAC Benchmarks'],
    },
    {
      step: '06',
      title: 'Optimise',
      desc: 'We improve:',
      items: ['Audience Targeting', 'Negative Keywords', 'Creative Variations', 'Algorithmic Bids', 'Budgets', 'Landing Pages & Funnels'],
    },
    {
      step: '07',
      title: 'Scale',
      desc: 'We increase investment behind opportunities that demonstrate sustainable performance.',
      items: ['Aggressive Horizontal Scaling', 'Lookalike & Broad Expansion', 'Budget Maximization', 'Compounding Revenue Growth'],
    },
  ];

  return (
    <section id="how-we-work" className="py-24 bg-[#141414] text-white border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll direction="up" duration={800}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FECF05]/10 border border-[#FECF05]/20 text-[#FECF05] text-xs font-bold uppercase tracking-widest mb-4">
              <span>HOW WE WORK</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-syne tracking-tight mb-4">
              Growth Doesn't Come From <span className="text-[#FECF05]">Guesswork</span>.
            </h2>
            <p className="text-base sm:text-lg text-[#C1C1C1] leading-relaxed font-light">
              Our 7-stage operational framework takes marketing accounts from chaotic experimentation to predictable, compounding revenue machines.
            </p>
          </div>
        </RevealOnScroll>

        {/* 7-Step Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {steps.map((item, idx) => (
            <RevealOnScroll
              key={item.step}
              direction="up"
              duration={650}
              delay={idx * 60}
            >
              <div className="p-6 sm:p-7 rounded-2xl bg-[#1C1C1C] border border-white/10 hover:border-[#FECF05] transition-all duration-300 h-full flex flex-col justify-between group shadow-lg">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black font-mono-custom text-[#FECF05]">
                      {item.step}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-[#FECF05] opacity-50 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h3 className="text-xl font-bold font-syne text-white mb-2 group-hover:text-[#FECF05] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#A0A0A0] mb-4 font-light leading-relaxed">
                    {item.desc}
                  </p>
                  <ul className="space-y-1.5 text-xs text-[#C1C1C1]">
                    {item.items.map((sub) => (
                      <li key={sub} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#FECF05] shrink-0 mt-0.5" />
                        <span>{sub}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};
