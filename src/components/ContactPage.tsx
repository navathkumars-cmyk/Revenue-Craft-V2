import React, { useState } from 'react';
import { Mail, MessageSquare, Clock, Send, CheckCircle2 } from 'lucide-react';

interface ContactPageProps {
  theme?: 'dark' | 'light';
}

export const ContactPage: React.FC<ContactPageProps> = ({ theme = 'dark' }) => {
  const isLight = theme === 'light';
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    company: '',
    monthlyBudget: '₹2 Lakhs - ₹10 Lakhs',
    goals: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className={`max-w-[1440px] mx-auto px-6 lg:px-12 py-24 border-t ${
      isLight ? 'border-neutral-200' : 'border-white/10'
    }`}>
      {/* Header */}
      <div className="max-w-3xl mb-16 space-y-4">
        <span className="block font-mono-custom text-xs uppercase tracking-[0.4em] text-orange-500 font-bold">
          06 // CONTACT & GROWTH AUDIT
        </span>
        <h1 className={`font-syne text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight ${
          isLight ? 'text-black' : 'text-white'
        }`}>
          LET'S FIND OUT WHERE PERFORMANCE MARKETING MOVES YOUR NUMBERS<span className="text-orange-500">.</span>
        </h1>
        <p className={`font-geist text-base sm:text-lg leading-relaxed ${
          isLight ? 'text-neutral-700' : 'text-white/80'
        }`}>
          Tell us about your business and current channels. We'll follow up within one business day to schedule a strategy call — no pressure, no generic pitch decks.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Direct Contact Info */}
        <div className="lg:col-span-5 space-y-8">
          <div className={`p-8 border space-y-6 shadow-xl ${
            isLight ? 'bg-white border-neutral-200' : 'bg-[#111111] border-white/10'
          }`}>
            <h3 className={`font-syne text-2xl font-black uppercase ${isLight ? 'text-black' : 'text-white'}`}>
              PREFER TO TALK IT THROUGH FIRST?
            </h3>
            <p className={`font-geist text-sm leading-relaxed ${isLight ? 'text-neutral-600' : 'text-white/60'}`}>
              Email us directly, or fill out a two-minute form and we'll follow up within one business day — no automated sequences, no sales scripts.
            </p>

            <div className="space-y-4 pt-2">
              <a
                href="mailto:hello@revenuecraftdigital.com"
                className={`flex items-center space-x-3.5 p-4 border transition-colors hover:border-orange-500 ${
                  isLight ? 'bg-neutral-50 border-neutral-200 text-black' : 'bg-[#0A0A0A] border-white/10 text-white'
                }`}
              >
                <Mail className="w-5 h-5 text-orange-500 shrink-0" />
                <span className="font-mono-custom text-sm font-bold">hello@revenuecraftdigital.com</span>
              </a>

              <div className={`flex items-center space-x-3.5 p-4 border ${
                isLight ? 'bg-neutral-50 border-neutral-200 text-black' : 'bg-[#0A0A0A] border-white/10 text-white'
              }`}>
                <MessageSquare className="w-5 h-5 text-orange-500 shrink-0" />
                <span className="font-geist text-xs font-medium">WhatsApp available for qualified leads</span>
              </div>

              <div className={`flex items-center space-x-3.5 p-4 border ${
                isLight ? 'bg-neutral-50 border-neutral-200 text-black' : 'bg-[#0A0A0A] border-white/10 text-white'
              }`}>
                <Clock className="w-5 h-5 text-orange-500 shrink-0" />
                <span className="font-geist text-xs font-medium">Typical response time: under 24 hours</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Form */}
        <div className="lg:col-span-7">
          <div className={`p-8 sm:p-12 border border-orange-500 shadow-2xl relative ${
            isLight ? 'bg-white' : 'bg-[#111111]'
          }`}>
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className={`font-syne text-2xl font-black uppercase ${isLight ? 'text-black' : 'text-white'}`}>
                    REQUEST A FREE GROWTH AUDIT
                  </h3>
                  <p className={`font-geist text-xs mt-1 ${isLight ? 'text-neutral-500' : 'text-white/50'}`}>
                    Direct response within 24 hours. No obligation.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={`block font-mono-custom text-xs uppercase font-bold mb-1.5 ${
                      isLight ? 'text-neutral-700' : 'text-white/70'
                    }`}>
                      FULL NAME *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="Jane Doe"
                      className={`w-full border px-4 py-3.5 font-geist text-sm outline-none focus:border-orange-500 transition-colors ${
                        isLight
                          ? 'bg-neutral-50 border-neutral-300 text-black placeholder-neutral-400'
                          : 'bg-[#0A0A0A] border-white/20 text-white placeholder-white/30'
                      }`}
                    />
                  </div>

                  <div>
                    <label className={`block font-mono-custom text-xs uppercase font-bold mb-1.5 ${
                      isLight ? 'text-neutral-700' : 'text-white/70'
                    }`}>
                      WORK EMAIL *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.workEmail}
                      onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                      placeholder="jane@company.com"
                      className={`w-full border px-4 py-3.5 font-geist text-sm outline-none focus:border-orange-500 transition-colors ${
                        isLight
                          ? 'bg-neutral-50 border-neutral-300 text-black placeholder-neutral-400'
                          : 'bg-[#0A0A0A] border-white/20 text-white placeholder-white/30'
                      }`}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={`block font-mono-custom text-xs uppercase font-bold mb-1.5 ${
                      isLight ? 'text-neutral-700' : 'text-white/70'
                    }`}>
                      COMPANY *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Company Name"
                      className={`w-full border px-4 py-3.5 font-geist text-sm outline-none focus:border-orange-500 transition-colors ${
                        isLight
                          ? 'bg-neutral-50 border-neutral-300 text-black placeholder-neutral-400'
                          : 'bg-[#0A0A0A] border-white/20 text-white placeholder-white/30'
                      }`}
                    />
                  </div>

                  <div>
                    <label className={`block font-mono-custom text-xs uppercase font-bold mb-1.5 ${
                      isLight ? 'text-neutral-700' : 'text-white/70'
                    }`}>
                      APPROXIMATE MONTHLY AD BUDGET (INR / ₹) *
                    </label>
                    <select
                      value={formData.monthlyBudget}
                      onChange={(e) => setFormData({ ...formData, monthlyBudget: e.target.value })}
                      className={`w-full border px-4 py-3.5 font-geist text-sm outline-none focus:border-orange-500 transition-colors cursor-pointer ${
                        isLight
                          ? 'bg-neutral-50 border-neutral-300 text-black'
                          : 'bg-[#0A0A0A] border-white/20 text-white'
                      }`}
                    >
                      <option value="Under ₹2 Lakhs">Under ₹2 Lakhs / mo</option>
                      <option value="₹2 Lakhs - ₹10 Lakhs">₹2 Lakhs - ₹10 Lakhs / mo</option>
                      <option value="₹10 Lakhs - ₹25 Lakhs">₹10 Lakhs - ₹25 Lakhs / mo</option>
                      <option value="₹25 Lakhs - ₹50 Lakhs">₹25 Lakhs - ₹50 Lakhs / mo</option>
                      <option value="₹50 Lakhs+">₹50 Lakhs+ / mo</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className={`block font-mono-custom text-xs uppercase font-bold mb-1.5 ${
                    isLight ? 'text-neutral-700' : 'text-white/70'
                  }`}>
                    WHAT ARE YOU LOOKING TO ACHIEVE?
                  </label>
                  <textarea
                    rows={4}
                    value={formData.goals}
                    onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
                    placeholder="Tell us about your current channels, tracking setup, or specific revenue goals..."
                    className={`w-full border px-4 py-3.5 font-geist text-sm outline-none focus:border-orange-500 transition-colors resize-none ${
                      isLight
                        ? 'bg-neutral-50 border-neutral-300 text-black placeholder-neutral-400'
                        : 'bg-[#0A0A0A] border-white/20 text-white placeholder-white/30'
                    }`}
                  />
                </div>

                <button
                  type="submit"
                  className={`w-full font-mono-custom text-xs uppercase tracking-widest font-black py-4 transition-colors flex items-center justify-center space-x-2 cursor-pointer ${
                    isLight ? 'bg-black text-white hover:bg-orange-500' : 'bg-white text-black hover:bg-orange-500 hover:text-white'
                  }`}
                >
                  <span>BOOK A STRATEGY CALL</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            ) : (
              <div className="text-center py-12 space-y-6">
                <div className="w-16 h-16 bg-orange-500/20 border border-orange-500 text-orange-500 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className={`font-syne text-3xl font-black uppercase ${isLight ? 'text-black' : 'text-white'}`}>
                  STRATEGY REQUEST RECEIVED
                </h3>
                <p className={`font-geist text-sm max-w-md mx-auto leading-relaxed ${isLight ? 'text-neutral-600' : 'text-white/60'}`}>
                  Thank you, <span className="text-orange-500 font-bold">{formData.fullName}</span>. We will follow up within one business day at <span className="font-bold">{formData.workEmail}</span>.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className={`font-mono-custom text-xs uppercase tracking-widest font-black px-8 py-3.5 cursor-pointer ${
                    isLight ? 'bg-black text-white hover:bg-orange-500' : 'bg-white text-black hover:bg-orange-500 hover:text-white'
                  }`}
                >
                  SEND ANOTHER MESSAGE
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
