import React from 'react';
import { HelpCircle, BarChart3, TrendingUp, Layers, CheckCircle2 } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

export const PhilosophySection: React.FC = () => {
  const fourQuestions = [
    {
      q: 'Where is the money being spent?',
      a: 'Every single budget allocation should have a clear, documented commercial purpose and intent hypothesis.',
    },
    {
      q: 'What did we generate?',
      a: 'Tracking leads, sales, pipeline, or verified actions connected directly to customer acquisition.',
    },
    {
      q: 'What was the quality?',
      a: 'Cheap vanity conversions do not create profitable businesses. We trace lead quality through to closed revenue.',
    },
    {
      q: 'What should we do next?',
      a: 'Marketing telemetry should never gather dust in reports; it must drive aggressive, intelligent capital reallocation.',
    },
  ];

  const metricCategories = [
    {
      title: 'Performance Metrics',
      items: ['Spend', 'Impressions', 'Clicks', 'CTR', 'CPC', 'Conversions'],
    },
    {
      title: 'Acquisition Metrics',
      items: ['CPL', 'CPA', 'CAC', 'Conversion Rate', 'Cost Per Purchase'],
    },
    {
      title: 'Quality Metrics',
      items: ['Qualified Leads', 'Sales Meetings', 'Opportunities', 'Closed Deals'],
    },
    {
      title: 'Business Metrics',
      items: ['Revenue', 'ROAS', 'Pipeline Value', 'Customer Acquisition Cost'],
    },
  ];

  return (
    <section className="py-24 bg-[#111111] text-white border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll direction="up" duration={800}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FECF05]/10 border border-[#FECF05]/20 text-[#FECF05] text-xs font-bold uppercase tracking-widest mb-4">
              <span>OUR PERFORMANCE PHILOSOPHY</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-syne tracking-tight mb-4">
              Revenue First. <span className="text-[#FECF05]">Data Always</span>.
            </h2>
            <p className="text-base sm:text-lg text-[#C1C1C1] leading-relaxed font-light">
              Performance marketing should answer four foundational questions before any scale is unlocked.
            </p>
          </div>
        </RevealOnScroll>

        {/* 4 Questions Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {fourQuestions.map((item, idx) => (
            <RevealOnScroll
              key={item.q}
              direction="up"
              duration={700}
              delay={idx * 80}
            >
              <div className="p-6 sm:p-8 rounded-2xl bg-[#181818] border border-white/10 hover:border-[#FECF05] transition-all h-full shadow-lg">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 rounded-lg bg-[#FECF05]/20 text-[#FECF05] flex items-center justify-center font-bold text-xs font-mono-custom">
                    0{idx + 1}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold font-syne text-white">
                    {item.q}
                  </h3>
                </div>
                <p className="text-sm text-[#A0A0A0] leading-relaxed font-light pl-11">
                  {item.a}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Metrics That Matter Grid */}
        <RevealOnScroll direction="up" duration={800}>
          <div className="p-8 sm:p-12 rounded-3xl bg-[#181818] border border-white/10">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-black uppercase tracking-widest text-[#FECF05] block mb-2">
                MEASUREMENT FRAMEWORK
              </span>
              <h3 className="text-2xl sm:text-3xl font-black font-syne text-white">
                Metrics That Matter
              </h3>
              <p className="text-xs sm:text-sm text-[#A0A0A0] mt-1 font-light">
                We focus on the metrics relevant to each business model.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {metricCategories.map((cat) => (
                <div key={cat.title} className="p-5 rounded-2xl bg-[#202020] border border-white/5">
                  <h4 className="text-sm font-bold text-[#FECF05] font-syne uppercase tracking-wider mb-4 border-b border-white/10 pb-2">
                    {cat.title}
                  </h4>
                  <ul className="space-y-2 text-xs text-[#E2E2E2]">
                    {cat.items.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FECF05]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
