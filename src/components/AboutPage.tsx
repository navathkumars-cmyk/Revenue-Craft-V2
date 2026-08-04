import React from 'react';
import { TEAM_MEMBERS, PROCESS_STEPS, ABOUT_HOME_CONTENT, COMPARISON_POINTS, HOME_FAQS } from '../data/mockData';
import { NavSection } from '../types';
import { UserCheck, ShieldCheck, ArrowUpRight, CheckCircle2, XCircle, HelpCircle } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (section: NavSection) => void;
  onOpenConsultation: () => void;
  theme?: 'dark' | 'light';
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onNavigate,
  onOpenConsultation,
  theme = 'dark'
}) => {
  const isLight = theme === 'light';

  return (
    <section id="about" className={`max-w-[1440px] mx-auto px-6 lg:px-12 py-24 border-t ${
      isLight ? 'border-neutral-200' : 'border-white/10'
    }`}>
      {/* Header */}
      <div className="max-w-4xl mb-16 space-y-4">
        <span className="block font-mono-custom text-xs uppercase tracking-[0.4em] text-orange-500 font-bold">
          03 // ABOUT REVENUE CRAFT DIGITAL
        </span>
        <h1 className={`font-syne text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight ${
          isLight ? 'text-black' : 'text-white'
        }`}>
          WE BUILD THE MEASUREMENT & MEDIA SYSTEMS THAT TURN AD SPEND INTO REVENUE<span className="text-orange-500">.</span>
        </h1>
        <p className={`font-geist text-base sm:text-lg leading-relaxed pt-2 ${
          isLight ? 'text-neutral-700' : 'text-white/80'
        }`}>
          {ABOUT_HOME_CONTENT.paragraph}
        </p>
      </div>

      {/* Leadership Team Section */}
      <div className="mb-24">
        <div className="mb-8 border-b pb-4 border-orange-500/30">
          <span className="font-mono-custom text-xs uppercase tracking-[0.3em] text-orange-500 font-bold block mb-1">
            LEADERSHIP & EXPERTISE
          </span>
          <h2 className={`font-syne text-3xl font-black uppercase ${isLight ? 'text-black' : 'text-white'}`}>
            WHO'S BEHIND IT
          </h2>
          <p className={`font-geist text-sm ${isLight ? 'text-neutral-600' : 'text-white/60'}`}>
            Founded on a simple idea: fix the data before you touch the spend.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TEAM_MEMBERS.map((member, idx) => (
            <div
              key={idx}
              className={`p-8 border shadow-xl relative flex flex-col justify-between ${
                isLight ? 'bg-white border-neutral-200' : 'bg-[#111111] border-white/10'
              }`}
            >
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div className={`p-3 border ${isLight ? 'bg-neutral-50 border-neutral-200' : 'bg-[#0A0A0A] border-white/10'}`}>
                    <UserCheck className="w-6 h-6 text-orange-500" />
                  </div>
                  <span className="font-mono-custom text-xs text-orange-500 font-bold uppercase tracking-widest">
                    CO-LEADERSHIP
                  </span>
                </div>

                <div>
                  <h3 className={`font-syne text-2xl font-black uppercase ${isLight ? 'text-black' : 'text-white'}`}>
                    {member.name}
                  </h3>
                  <span className="font-mono-custom text-xs text-orange-500 font-bold uppercase tracking-wider block mt-0.5">
                    {member.role}
                  </span>
                </div>

                <p className={`font-geist text-sm leading-relaxed ${isLight ? 'text-neutral-600' : 'text-white/70'}`}>
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Process: How We Operate */}
      <div className="mb-24">
        <div className="mb-12">
          <span className="font-mono-custom text-xs uppercase tracking-[0.3em] text-orange-500 font-bold block mb-1">
            THE 90-DAY GROWTH ENGINE
          </span>
          <h2 className={`font-syne text-3xl sm:text-4xl font-black uppercase ${isLight ? 'text-black' : 'text-white'}`}>
            HOW WE OPERATE
          </h2>
          <p className={`font-geist text-sm max-w-xl ${isLight ? 'text-neutral-600' : 'text-white/60'}`}>
            Consultative, data-first, and accountable to revenue. Every engagement runs through the same disciplined process.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.step}
              className={`p-6 border relative space-y-4 shadow-lg ${
                isLight ? 'bg-white border-neutral-200' : 'bg-[#111111] border-white/10'
              }`}
            >
              <span className="font-syne text-4xl font-black text-orange-500 block">
                {step.step}
              </span>
              <h3 className={`font-syne text-xl font-bold uppercase ${isLight ? 'text-black' : 'text-white'}`}>
                {step.title}
              </h3>
              <p className={`font-geist text-xs leading-relaxed ${isLight ? 'text-neutral-600' : 'text-white/60'}`}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Guiding Principles */}
      <div className="mb-24">
        <div className="mb-8">
          <span className="font-mono-custom text-xs uppercase tracking-[0.3em] text-orange-500 font-bold block mb-1">
            CORE TENETS
          </span>
          <h2 className={`font-syne text-3xl font-black uppercase ${isLight ? 'text-black' : 'text-white'}`}>
            WHAT GUIDES EVERY ENGAGEMENT
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ABOUT_HOME_CONTENT.guidingPrinciples.map((p, idx) => (
            <div
              key={idx}
              className={`p-6 border space-y-3 ${
                isLight ? 'bg-neutral-50 border-neutral-200' : 'bg-[#0A0A0A] border-white/10'
              }`}
            >
              <ShieldCheck className="w-5 h-5 text-orange-500" />
              <h4 className={`font-syne text-base font-bold uppercase ${isLight ? 'text-black' : 'text-white'}`}>
                {p.title}
              </h4>
              <p className={`font-geist text-xs ${isLight ? 'text-neutral-600' : 'text-white/60'}`}>
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Why Revenue Craft Digital - Comparison */}
      <div className="mb-24">
        <div className="mb-10 text-center max-w-2xl mx-auto">
          <span className="font-mono-custom text-xs uppercase tracking-[0.3em] text-orange-500 font-bold block mb-2">
            THE MEASUREMENT-FIRST DIFFERENCE
          </span>
          <h2 className={`font-syne text-3xl sm:text-4xl font-black uppercase ${isLight ? 'text-black' : 'text-white'}`}>
            WHY REVENUE CRAFT DIGITAL
          </h2>
          <p className={`font-geist text-sm mt-2 ${isLight ? 'text-neutral-600' : 'text-white/60'}`}>
            Most performance marketing problems aren't creative problems — they're measurement problems wearing a creative costume.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Without Partner */}
          <div className={`p-8 border space-y-6 ${
            isLight ? 'bg-neutral-100 border-neutral-300' : 'bg-[#0E0E0E] border-white/10'
          }`}>
            <h3 className="font-syne text-xl font-black text-red-500 uppercase flex items-center space-x-2">
              <XCircle className="w-5 h-5" />
              <span>WITHOUT A PERFORMANCE PARTNER</span>
            </h3>
            <div className="space-y-4">
              {COMPARISON_POINTS.map((pt, idx) => (
                <div key={idx} className="flex items-start space-x-3">
                  <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span className={`font-geist text-xs ${isLight ? 'text-neutral-700' : 'text-white/70'}`}>
                    {pt.withoutPartner}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* With Revenue Craft Digital */}
          <div className={`p-8 border border-orange-500 space-y-6 shadow-2xl ${
            isLight ? 'bg-white' : 'bg-[#111111]'
          }`}>
            <h3 className="font-syne text-xl font-black text-orange-500 uppercase flex items-center space-x-2">
              <CheckCircle2 className="w-5 h-5" />
              <span>WITH REVENUE CRAFT DIGITAL</span>
            </h3>
            <div className="space-y-4">
              {COMPARISON_POINTS.map((pt, idx) => (
                <div key={idx} className="flex items-start space-x-3">
                  <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                  <span className={`font-geist text-xs font-medium ${isLight ? 'text-black' : 'text-white'}`}>
                    {pt.withRevenueCraft}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-20">
        <div className="mb-10">
          <span className="font-mono-custom text-xs uppercase tracking-[0.3em] text-orange-500 font-bold block mb-1">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className={`font-syne text-3xl font-black uppercase ${isLight ? 'text-black' : 'text-white'}`}>
            EVERYTHING YOU NEED TO KNOW
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {HOME_FAQS.map((faq, idx) => (
            <div
              key={idx}
              className={`p-6 border space-y-2 ${
                isLight ? 'bg-white border-neutral-200' : 'bg-[#111111] border-white/10'
              }`}
            >
              <h4 className={`font-syne text-base font-bold uppercase flex items-start space-x-2 ${
                isLight ? 'text-black' : 'text-white'
              }`}>
                <HelpCircle className="w-4 h-4 text-orange-500 shrink-0 mt-1" />
                <span>{faq.question}</span>
              </h4>
              <p className={`font-geist text-xs leading-relaxed pl-6 ${
                isLight ? 'text-neutral-600' : 'text-white/60'
              }`}>
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Box */}
      <div className={`p-10 border border-orange-500 text-center space-y-6 ${
        isLight ? 'bg-white' : 'bg-[#111111]'
      }`}>
        <h2 className={`font-syne text-3xl sm:text-4xl font-black uppercase ${isLight ? 'text-black' : 'text-white'}`}>
          READY TO TURN AD SPEND INTO PREDICTABLE REVENUE?
        </h2>
        <p className={`font-geist text-sm max-w-xl mx-auto ${isLight ? 'text-neutral-600' : 'text-white/60'}`}>
          Book a strategy call and get a clear view of where performance marketing can move your numbers — before you commit to anything.
        </p>
        <button
          onClick={() => onNavigate('contact')}
          className={`font-mono-custom text-xs uppercase tracking-widest font-black px-8 py-4 transition-colors inline-flex items-center space-x-2 cursor-pointer ${
            isLight ? 'bg-black text-white hover:bg-orange-500' : 'bg-white text-black hover:bg-orange-500 hover:text-white'
          }`}
        >
          <span>BOOK A STRATEGY CALL</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};
