import React, { useState } from 'react';
import { 
  TrendingUp, 
  Palette, 
  Sparkles, 
  Globe, 
  Bot, 
  Workflow, 
  BarChart4, 
  Maximize2, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  Zap,
  Target,
  FileCheck
} from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

interface ServicesSectionProps {
  onOpenAudit: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenAudit }) => {
  const [activeTab, setActiveTab] = useState<string>('performance');

  const serviceCategories = [
    { id: 'performance', label: 'Performance Marketing', icon: TrendingUp },
    { id: 'branding', label: 'Branding & Identity', icon: Palette },
    { id: 'creative', label: 'Design & Creative', icon: Sparkles },
    { id: 'digital', label: 'Digital Marketing & SEO', icon: Globe },
    { id: 'ai', label: 'AI-Powered Marketing', icon: Bot },
    { id: 'automation', label: 'Automation & Analytics', icon: Workflow },
    { id: 'cro', label: 'CRO & Media Strategy', icon: Target },
  ];

  return (
    <section id="services" className="py-24 bg-[#141414] text-white border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <RevealOnScroll direction="up" duration={800}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FECF05]/10 border border-[#FECF05]/20 text-[#FECF05] text-xs font-bold uppercase tracking-widest mb-4">
              <span>OUR SERVICES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-syne tracking-tight mb-4">
              Everything Your Brand <span className="text-[#FECF05]">Needs to Grow</span>.
            </h2>
            <p className="text-base sm:text-lg text-[#C1C1C1] leading-relaxed font-light">
              From building your brand identity to generating customers and measuring revenue, we bring strategy, media, creative and technology together under one connected growth ecosystem.
            </p>
          </div>
        </RevealOnScroll>

        {/* Tab Navigation Pill Bar */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-12 select-none scrollbar-none">
          {serviceCategories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'bg-[#FECF05] text-[#141414] shadow-lg shadow-[#FECF05]/20 font-extrabold'
                    : 'category-chip-inactive bg-white/5 text-[#A0A0A0] hover:bg-white/10 hover:text-white border border-white/10'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Service Content Panels */}
        <div className="max-w-5xl mx-auto">
          {/* TAB 1: PERFORMANCE MARKETING */}
          {activeTab === 'performance' && (
            <div className="space-y-8 animate-fade-in">
              <div className="p-8 sm:p-10 rounded-3xl bg-[#1C1C1C] border border-white/10 shadow-xl">
                <span className="text-xs font-black uppercase tracking-widest text-[#FECF05] block mb-2">
                  CORE GROWTH DISCIPLINE
                </span>
                <h3 className="text-2xl sm:text-4xl font-black font-syne text-white mb-3">
                  Turn Advertising Spend Into Business Growth.
                </h3>
                <p className="text-base text-[#C1C1C1] mb-6 font-light leading-relaxed">
                  Performance marketing is at the heart of Revenue Craft Digital. We plan, launch, manage and optimise advertising campaigns around measurable business outcomes.
                </p>

                {/* Optimisation Targets */}
                <div className="mb-8 p-4 rounded-2xl bg-white/5 border border-white/10">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#A0A0A0] block mb-2">
                    Our focus goes beyond impressions and clicks. We optimise towards:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {['Qualified Leads', 'Sales', 'Revenue', 'ROAS', 'CAC', 'CPA', 'CPL', 'Pipeline Growth'].map((metric) => (
                      <span key={metric} className="px-3 py-1 rounded-full bg-[#FECF05]/15 text-[#FECF05] font-extrabold text-xs">
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="p-5 rounded-xl bg-[#222222] border border-white/5">
                    <h4 className="text-base font-bold text-white font-syne mb-2 text-[#FECF05]">Google Ads</h4>
                    <p className="text-xs text-[#A0A0A0] leading-relaxed">
                      Search · Performance Max · Shopping · Display · YouTube · Remarketing · Call Campaigns
                    </p>
                  </div>
                  <div className="p-5 rounded-xl bg-[#222222] border border-white/5">
                    <h4 className="text-base font-bold text-white font-syne mb-2 text-[#FECF05]">Meta Ads</h4>
                    <p className="text-xs text-[#A0A0A0] leading-relaxed">
                      Facebook Ads · Instagram Ads · Lead Generation · Sales Campaigns · WhatsApp Ads · Retargeting · Reels Ads
                    </p>
                  </div>
                  <div className="p-5 rounded-xl bg-[#222222] border border-white/5">
                    <h4 className="text-base font-bold text-white font-syne mb-2 text-[#FECF05]">LinkedIn Ads</h4>
                    <p className="text-xs text-[#A0A0A0] leading-relaxed">
                      B2B Lead Generation · Decision-Maker Targeting · Account-Based Campaigns · Demo Campaigns
                    </p>
                  </div>
                  <div className="p-5 rounded-xl bg-[#222222] border border-white/5">
                    <h4 className="text-base font-bold text-white font-syne mb-2 text-[#FECF05]">YouTube Advertising</h4>
                    <p className="text-xs text-[#A0A0A0] leading-relaxed">
                      Awareness · Demand Generation · Remarketing · Video Performance Campaigns
                    </p>
                  </div>
                  <div className="p-5 rounded-xl bg-[#222222] border border-white/5">
                    <h4 className="text-base font-bold text-white font-syne mb-2 text-[#FECF05]">Lead Generation & eCommerce</h4>
                    <p className="text-xs text-[#A0A0A0] leading-relaxed">
                      Website Leads · Instant Forms · WhatsApp · Calls · Dynamic Remarketing · Catalog Product Ads
                    </p>
                  </div>
                  <div className="p-5 rounded-xl bg-[#222222] border border-white/5">
                    <h4 className="text-base font-bold text-white font-syne mb-2 text-[#FECF05]">B2B & B2C Specializations</h4>
                    <p className="text-xs text-[#A0A0A0] leading-relaxed">
                      CRM Attribution · High-Intent Search · Purchases · Bookings · Store Visits · Offline Conversions
                    </p>
                  </div>
                </div>

                {/* Analysis Checklist */}
                <div className="p-6 rounded-2xl bg-[#181818] border border-white/10 mb-8">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-3">
                    We Don't Just Run Ads — We Continuously Analyse:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#C1C1C1]">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FECF05] shrink-0" /> What is driving conversions?</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FECF05] shrink-0" /> Which audience is generating better customers?</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FECF05] shrink-0" /> Which keyword is generating stronger intent?</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FECF05] shrink-0" /> Which creative is driving better engagement?</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FECF05] shrink-0" /> Which campaign deserves more budget?</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FECF05] shrink-0" /> Which source produces qualified opportunities?</li>
                  </ul>
                </div>

                <button
                  onClick={onOpenAudit}
                  className="px-6 py-3 rounded-full bg-[#FECF05] text-[#141414] font-black text-xs uppercase tracking-wider hover:bg-white transition-all cursor-pointer shadow-lg"
                >
                  Explore Performance Marketing
                </button>
              </div>
            </div>
          )}

          {/* TAB 2: BRANDING */}
          {activeTab === 'branding' && (
            <div className="space-y-8 animate-fade-in">
              <div className="p-8 sm:p-10 rounded-3xl bg-[#1C1C1C] border border-white/10 shadow-xl">
                <span className="text-xs font-black uppercase tracking-widest text-[#FECF05] block mb-2">
                  STRATEGIC RECOGNITION
                </span>
                <h3 className="text-2xl sm:text-4xl font-black font-syne text-white mb-3">
                  Build a Brand People Recognise, Remember and Trust.
                </h3>
                <p className="text-base text-[#C1C1C1] mb-6 font-light leading-relaxed">
                  Performance can bring customers to your business. Branding gives them a reason to remember you. We help businesses build clear and consistent brand identities that communicate what they stand for and why customers should choose them.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                  {[
                    { title: 'Brand Strategy', desc: 'Define your brand’s position, purpose, audience and competitive advantage.' },
                    { title: 'Brand Positioning', desc: 'Create a distinct position in the customer’s mind.' },
                    { title: 'Brand Naming', desc: 'Develop memorable brand and product names aligned with your positioning.' },
                    { title: 'Logo Design', desc: 'Create visual identities that are simple, recognisable and scalable.' },
                    { title: 'Brand Identity', desc: 'Colours, typography, visual style, and design language.' },
                    { title: 'Brand Kits', desc: 'Build a consistent visual system for marketing and communication.' },
                    { title: 'Tone of Voice', desc: 'Define how your brand should sound across advertising, websites and social media.' },
                    { title: 'Brand Messaging', desc: 'Clearly communicates: Who you help. What you solve. Why you are different.' },
                    { title: 'Brand Guidelines', desc: 'Develop clear standards for maintaining consistency across platforms.' },
                  ].map((item) => (
                    <div key={item.title} className="p-4 rounded-xl bg-[#222222] border border-white/5">
                      <h4 className="text-sm font-bold text-white font-syne mb-1 text-[#FECF05]">{item.title}</h4>
                      <p className="text-xs text-[#A0A0A0] leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>

                <button
                  onClick={onOpenAudit}
                  className="px-6 py-3 rounded-full bg-[#FECF05] text-[#141414] font-black text-xs uppercase tracking-wider hover:bg-white transition-all cursor-pointer shadow-lg"
                >
                  Explore Branding Services
                </button>
              </div>
            </div>
          )}

          {/* TAB 3: DESIGN & CREATIVE */}
          {activeTab === 'creative' && (
            <div className="space-y-8 animate-fade-in">
              <div className="p-8 sm:p-10 rounded-3xl bg-[#1C1C1C] border border-white/10 shadow-xl">
                <span className="text-xs font-black uppercase tracking-widest text-[#FECF05] block mb-2">
                  CONVERSION ARTISTRY
                </span>
                <h3 className="text-2xl sm:text-4xl font-black font-syne text-white mb-3">
                  Creative That Doesn’t Just Look Good. It Performs.
                </h3>
                <p className="text-base text-[#C1C1C1] mb-6 font-light leading-relaxed">
                  Strong creative earns attention. Performance-focused creative turns that attention into action. We design marketing assets that support both your brand and your advertising objectives.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-8">
                  {[
                    'Advertising Creatives',
                    'Social Media Design',
                    'Performance Creatives',
                    'UGC Creative Strategy',
                    'Video Ads',
                    'Reels & Short Video',
                    'Graphic Design',
                    'Brochures & Collateral',
                    'Corporate Pitch Decks',
                    'Infographics',
                    'Print Design',
                    'Packaging Design',
                  ].map((service) => (
                    <div key={service} className="p-3.5 rounded-xl bg-[#222222] border border-white/5 text-center flex items-center justify-center">
                      <span className="text-xs font-bold text-white">{service}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={onOpenAudit}
                  className="px-6 py-3 rounded-full bg-[#FECF05] text-[#141414] font-black text-xs uppercase tracking-wider hover:bg-white transition-all cursor-pointer shadow-lg"
                >
                  Explore Creative Services
                </button>
              </div>
            </div>
          )}

          {/* TAB 4: DIGITAL MARKETING & SEO */}
          {activeTab === 'digital' && (
            <div className="space-y-8 animate-fade-in">
              <div className="p-8 sm:p-10 rounded-3xl bg-[#1C1C1C] border border-white/10 shadow-xl">
                <span className="text-xs font-black uppercase tracking-widest text-[#FECF05] block mb-2">
                  MULTI-CHANNEL ACQUISITION
                </span>
                <h3 className="text-2xl sm:text-4xl font-black font-syne text-white mb-3">
                  Build Visibility. Generate Demand. Create Growth.
                </h3>
                <p className="text-base text-[#C1C1C1] mb-6 font-light leading-relaxed">
                  Digital marketing works best when channels don't operate independently. We connect paid media, SEO, content, social media, automation and conversion strategy into a unified customer acquisition system.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="p-5 rounded-2xl bg-[#222222] border border-white/5">
                    <h4 className="text-sm font-bold text-[#FECF05] font-syne mb-2">Search Engine Optimisation (SEO)</h4>
                    <p className="text-xs text-[#A0A0A0] leading-relaxed">
                      Keyword & competitor research, on-page SEO, technical SEO, local SEO, content SEO, internal linking, and Google Business Profile optimization.
                    </p>
                  </div>
                  <div className="p-5 rounded-2xl bg-[#222222] border border-white/5">
                    <h4 className="text-sm font-bold text-[#FECF05] font-syne mb-2">Social Media Marketing</h4>
                    <p className="text-xs text-[#A0A0A0] leading-relaxed">
                      Instagram, Facebook & LinkedIn management, content calendars, Reels strategy, post creation, community engagement, and performance reporting.
                    </p>
                  </div>
                  <div className="p-5 rounded-2xl bg-[#222222] border border-white/5">
                    <h4 className="text-sm font-bold text-[#FECF05] font-syne mb-2">Content & Influencer Marketing</h4>
                    <p className="text-xs text-[#A0A0A0] leading-relaxed">
                      Customer intent content, thought leadership, ad copywriting, micro-influencer campaigns, UGC creator briefs, and paid amplification.
                    </p>
                  </div>
                  <div className="p-5 rounded-2xl bg-[#222222] border border-white/5">
                    <h4 className="text-sm font-bold text-[#FECF05] font-syne mb-2">WhatsApp & Email Marketing</h4>
                    <p className="text-xs text-[#A0A0A0] leading-relaxed">
                      Click-to-WhatsApp funnels, automated lead qualification, welcome journeys, abandoned cart recovery, retention, and segmented newsletters.
                    </p>
                  </div>
                  <div className="p-5 rounded-2xl bg-[#222222] border border-white/5">
                    <h4 className="text-sm font-bold text-[#FECF05] font-syne mb-2">Websites & Landing Pages</h4>
                    <p className="text-xs text-[#A0A0A0] leading-relaxed">
                      Corporate & eCommerce websites, high-converting campaign landing pages, mobile-first UX, form optimization, and analytics integration.
                    </p>
                  </div>
                  <div className="p-5 rounded-2xl bg-[#222222] border border-white/5">
                    <h4 className="text-sm font-bold text-[#FECF05] font-syne mb-2">Quick Commerce & Marketplaces</h4>
                    <p className="text-xs text-[#A0A0A0] leading-relaxed">
                      Blinkit, Zepto, Swiggy Instamart product visibility, Amazon & Flipkart sponsored advertising, and marketplace listing optimization.
                    </p>
                  </div>
                </div>

                <button
                  onClick={onOpenAudit}
                  className="px-6 py-3 rounded-full bg-[#FECF05] text-[#141414] font-black text-xs uppercase tracking-wider hover:bg-white transition-all cursor-pointer shadow-lg"
                >
                  Explore Digital Marketing
                </button>
              </div>
            </div>
          )}

          {/* TAB 5: AI-POWERED MARKETING */}
          {activeTab === 'ai' && (
            <div className="space-y-8 animate-fade-in">
              <div className="p-8 sm:p-10 rounded-3xl bg-[#1C1C1C] border border-white/10 shadow-xl">
                <span className="text-xs font-black uppercase tracking-widest text-[#FECF05] block mb-2">
                  MACHINE INTELLIGENCE
                </span>
                <h3 className="text-2xl sm:text-4xl font-black font-syne text-white mb-3">
                  Human Strategy. AI Intelligence. Better Decisions.
                </h3>
                <p className="text-base text-[#C1C1C1] mb-6 font-light leading-relaxed">
                  Artificial intelligence is changing how marketing teams research, analyse, create and optimise campaigns. At Revenue Craft Digital, AI supports decision-making — it doesn't replace strategy.
                </p>

                {/* AI Equation Card */}
                <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 mb-8 flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm font-bold text-white text-center">
                  <span>Human Expertise</span>
                  <span className="text-[#FECF05]">+</span>
                  <span>Advertising Data</span>
                  <span className="text-[#FECF05]">+</span>
                  <span>AI Intelligence</span>
                  <span className="text-[#FECF05]">+</span>
                  <span>Continuous Testing</span>
                  <span className="text-[#FECF05]">=</span>
                  <span className="text-[#FECF05] font-extrabold uppercase">Smarter Growth Systems</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                  {[
                    { title: 'Audience Intelligence', desc: 'Analyse customer behaviours, pain points, interests and buying motivations.' },
                    { title: 'Search Intelligence', desc: 'Identify keyword themes and customer search intent patterns.' },
                    { title: 'Campaign Analysis', desc: 'Analyse massive campaign telemetry to identify anomalies and opportunities.' },
                    { title: 'Creative Intelligence', desc: 'Generate and evaluate campaign hooks, messaging angles and content variations.' },
                    { title: 'Competitive Research', desc: 'Understand competitor messaging, positioning, and market gaps.' },
                    { title: 'Lead Intelligence', desc: 'Identify correlations between acquisition sources and closed-won lead quality.' },
                  ].map((aiItem) => (
                    <div key={aiItem.title} className="p-4 rounded-xl bg-[#222222] border border-white/5">
                      <h4 className="text-sm font-bold text-white font-syne mb-1 text-[#FECF05]">{aiItem.title}</h4>
                      <p className="text-xs text-[#A0A0A0] leading-relaxed">{aiItem.desc}</p>
                    </div>
                  ))}
                </div>

                <button
                  onClick={onOpenAudit}
                  className="px-6 py-3 rounded-full bg-[#FECF05] text-[#141414] font-black text-xs uppercase tracking-wider hover:bg-white transition-all cursor-pointer shadow-lg"
                >
                  Explore AI-Powered Marketing
                </button>
              </div>
            </div>
          )}

          {/* TAB 6: AUTOMATION & ANALYTICS */}
          {activeTab === 'automation' && (
            <div className="space-y-8 animate-fade-in">
              <div className="p-8 sm:p-10 rounded-3xl bg-[#1C1C1C] border border-white/10 shadow-xl">
                <span className="text-xs font-black uppercase tracking-widest text-[#FECF05] block mb-2">
                  DATA & CONVERSION INFRASTRUCTURE
                </span>
                <h3 className="text-2xl sm:text-4xl font-black font-syne text-white mb-3">
                  If You Can't Measure It, You Can't Optimise It.
                </h3>
                <p className="text-base text-[#C1C1C1] mb-6 font-light leading-relaxed">
                  Generating leads is only the beginning. What happens after the lead is generated can have just as much impact on revenue as the advertisement itself. We connect marketing systems with CRM and telemetry.
                </p>

                {/* The Funnel Flow */}
                <div className="p-4 sm:p-5 rounded-2xl bg-[#222222] border border-white/10 mb-8">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#A0A0A0] block mb-3 text-center">
                    The Connected Sales Funnel
                  </span>
                  <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-bold">
                    {['Ad', 'Landing Page', 'Lead', 'CRM', 'Qualification', 'Sales Follow-Up', 'Meeting', 'Customer', 'Revenue'].map((step, idx) => (
                      <React.Fragment key={step}>
                        <span className={`px-2.5 py-1 rounded-lg ${step === 'Revenue' ? 'bg-[#FECF05] text-[#141414] font-black' : 'bg-white/10 text-white'}`}>
                          {step}
                        </span>
                        {idx < 8 && <span className="text-[#FECF05]">→</span>}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="p-5 rounded-xl bg-[#222222] border border-white/5">
                    <h4 className="text-sm font-bold text-white font-syne mb-2 text-[#FECF05]">Automation Services</h4>
                    <p className="text-xs text-[#A0A0A0] leading-relaxed">
                      Lead routing, CRM workflows (HubSpot/Salesforce), WhatsApp automation, email automation, lead scoring, sales notifications, automated follow-ups, and marketing-to-sales handoffs.
                    </p>
                  </div>
                  <div className="p-5 rounded-xl bg-[#222222] border border-white/5">
                    <h4 className="text-sm font-bold text-white font-syne mb-2 text-[#FECF05]">Analytics & Tracking</h4>
                    <p className="text-xs text-[#A0A0A0] leading-relaxed">
                      Google Analytics 4, Google Tag Manager, Meta Pixel & Conversions API (CAPI), Enhanced Conversions, LinkedIn Insight Tag, UTM architecture, CRM attribution, and offline conversion tracking.
                    </p>
                  </div>
                </div>

                <button
                  onClick={onOpenAudit}
                  className="px-6 py-3 rounded-full bg-[#FECF05] text-[#141414] font-black text-xs uppercase tracking-wider hover:bg-white transition-all cursor-pointer shadow-lg"
                >
                  Explore Automation & Analytics
                </button>
              </div>
            </div>
          )}

          {/* TAB 7: CRO & MEDIA STRATEGY */}
          {activeTab === 'cro' && (
            <div className="space-y-8 animate-fade-in">
              <div className="p-8 sm:p-10 rounded-3xl bg-[#1C1C1C] border border-white/10 shadow-xl">
                <span className="text-xs font-black uppercase tracking-widest text-[#FECF05] block mb-2">
                  EFFICIENCY & CAPITAL ALLOCATION
                </span>
                <h3 className="text-2xl sm:text-4xl font-black font-syne text-white mb-3">
                  Don't Just Buy More Traffic. Convert What You Already Have.
                </h3>
                <p className="text-base text-[#C1C1C1] mb-6 font-light leading-relaxed">
                  Increasing advertising spend isn't always the best way to increase results. Sometimes the biggest growth opportunity is improving your conversion experience.
                </p>

                {/* CRO Formula */}
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 mb-8 text-center text-sm sm:text-base font-black text-white">
                  <span className="text-[#C1C1C1]">Traffic</span> <span className="text-[#FECF05]">×</span> <span className="text-white">Better Conversion Rate</span> <span className="text-[#FECF05]">=</span> <span className="text-[#FECF05] uppercase">More Growth</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <div className="p-5 rounded-xl bg-[#222222] border border-white/5">
                    <h4 className="text-sm font-bold text-white font-syne mb-2 text-[#FECF05]">CRO Optimization</h4>
                    <p className="text-xs text-[#A0A0A0] leading-relaxed">
                      Evaluating landing pages, forms, CTAs, messaging, mobile experience, user journey friction, offers, and social proof.
                    </p>
                  </div>
                  <div className="p-5 rounded-xl bg-[#222222] border border-white/5">
                    <h4 className="text-sm font-bold text-white font-syne mb-2 text-[#FECF05]">Market Strategy</h4>
                    <p className="text-xs text-[#A0A0A0] leading-relaxed">
                      Strategy before spend. Understanding your business model, customer economics, market positioning, and revenue benchmarks.
                    </p>
                  </div>
                  <div className="p-5 rounded-xl bg-[#222222] border border-white/5">
                    <h4 className="text-sm font-bold text-white font-syne mb-2 text-[#FECF05]">Media Planning & Buying</h4>
                    <p className="text-xs text-[#A0A0A0] leading-relaxed">
                      Putting budget where the opportunity is. Balancing scale, CPA efficiency, geographic expansion, and bid optimization.
                    </p>
                  </div>
                </div>

                <button
                  onClick={onOpenAudit}
                  className="px-6 py-3 rounded-full bg-[#FECF05] text-[#141414] font-black text-xs uppercase tracking-wider hover:bg-white transition-all cursor-pointer shadow-lg"
                >
                  Build Your Media Strategy
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
