import React from 'react';
import { ArrowDown, Sparkles, Layers, CheckCircle2 } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

export const GrowthEcosystem: React.FC = () => {
  const ecosystemSteps = [
    {
      stage: '01. BRAND',
      title: 'Foundation',
      items: ['Positioning', 'Identity', 'Messaging'],
      desc: 'Clarifying who you help, what you solve, and why you are different.',
    },
    {
      stage: '02. CREATIVE',
      title: 'Attention',
      items: ['Content', 'Design', 'Video'],
      desc: 'Performance-focused visual assets and hooks that capture high intent.',
    },
    {
      stage: '03. DEMAND',
      title: 'Visibility',
      items: ['SEO', 'Social', 'Paid Media'],
      desc: 'Building multi-channel reach where your customers naturally spend time.',
    },
    {
      stage: '04. ACQUISITION',
      title: 'Traffic',
      items: ['Google', 'Meta', 'LinkedIn', 'YouTube'],
      desc: 'Precision paid media buying optimized for scalable customer acquisition.',
    },
    {
      stage: '05. CONVERSION',
      title: 'Action',
      items: ['Landing Pages', 'CRO', 'Lead Generation'],
      desc: 'Turning clicks into qualified leads, purchases, and booked pipeline.',
    },
    {
      stage: '06. TECHNOLOGY',
      title: 'Efficiency',
      items: ['CRM', 'Automation', 'AI Workflows'],
      desc: 'Instant lead routing, automated follow-ups, and sales team sync.',
    },
    {
      stage: '07. INTELLIGENCE',
      title: 'Attribution',
      items: ['Analytics', 'Server-Side CAPI', 'Attribution'],
      desc: 'Audited, deduplicated conversion data that feeds machine-learning bids.',
    },
  ];

  return (
    <section id="ecosystem" className="py-24 bg-[#111111] text-white border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll direction="up" duration={800}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FECF05]/10 border border-[#FECF05]/20 text-[#FECF05] text-xs font-bold uppercase tracking-widest mb-4">
              <span>OUR GROWTH ECOSYSTEM</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-syne tracking-tight mb-4">
              One Connected <span className="text-[#FECF05]">Marketing System</span>.
            </h2>
            <p className="text-base sm:text-lg text-[#C1C1C1] leading-relaxed font-light">
              Marketing works best when channels don't operate in silos. We architect a complete, continuous growth loop from first brand impression to bankable revenue.
            </p>
          </div>
        </RevealOnScroll>

        {/* Step-by-Step Flow Grid */}
        <div className="max-w-4xl mx-auto space-y-4 mb-16">
          {ecosystemSteps.map((step, idx) => (
            <React.Fragment key={step.stage}>
              <RevealOnScroll direction="up" duration={600} delay={idx * 60}>
                <div className="p-5 sm:p-6 rounded-2xl bg-[#181818] border border-white/10 hover:border-[#FECF05] transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 group shadow-md">
                  <div className="flex items-start sm:items-center gap-4">
                    <span className="w-10 h-10 rounded-xl bg-[#FECF05]/15 border border-[#FECF05]/30 flex items-center justify-center text-xs font-mono-custom font-black text-[#FECF05] shrink-0">
                      0{idx + 1}
                    </span>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h4 className="text-base sm:text-lg font-bold font-syne text-white group-hover:text-[#FECF05] transition-colors">
                          {step.stage}
                        </h4>
                        <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-white/5 text-[#8E8E8E]">
                          {step.title}
                        </span>
                      </div>
                      <p className="text-xs text-[#A0A0A0] mt-1 font-light">
                        {step.desc}
                      </p>
                    </div>
                  </div>

                  {/* Pills */}
                  <div className="flex flex-wrap items-center gap-1.5 shrink-0 sm:justify-end">
                    {step.items.map((item) => (
                      <span
                        key={item}
                        className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-semibold text-[#E2E2E2]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </RevealOnScroll>

              {idx < ecosystemSteps.length - 1 && (
                <div className="flex justify-center -my-1 py-1">
                  <ArrowDown className="w-4 h-4 text-[#FECF05] animate-bounce opacity-80" />
                </div>
              )}
            </React.Fragment>
          ))}

          {/* Final Crown Step: REVENUE */}
          <div className="flex justify-center -my-1 py-1">
            <ArrowDown className="w-5 h-5 text-[#FECF05] animate-bounce" />
          </div>

          <RevealOnScroll direction="up" duration={700}>
            <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#FECF05] to-[#F59E0B] text-[#141414] text-center shadow-2xl shadow-[#FECF05]/30">
              <span className="text-xs font-black uppercase tracking-[0.25em] block mb-1 opacity-80">
                THE FINAL BUSINESS OUTCOME
              </span>
              <h3 className="text-4xl sm:text-6xl font-black font-syne tracking-tight">
                REVENUE
              </h3>
              <p className="text-sm sm:text-base font-bold mt-3 max-w-xl mx-auto opacity-95">
                That's why we're called <strong className="underline">REVENUE CRAFT DIGITAL</strong>. We craft every stage of the customer acquisition journey around measurable business growth.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};
