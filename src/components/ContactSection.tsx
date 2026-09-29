import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, MessageSquare, Send, Sparkles } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';
import { ContactFormData } from '../types';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    companyName: '',
    businessEmail: '',
    phone: '',
    website: '',
    businessType: 'B2B',
    serviceNeeded: 'Performance Marketing',
    monthlyBudget: '₹1 Lakh – ₹5 Lakhs',
    growthGoal: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-[#111111] text-white border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll direction="up" duration={800}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FECF05]/10 border border-[#FECF05]/20 text-[#FECF05] text-xs font-bold uppercase tracking-widest mb-4">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>START A CONVERSATION</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-syne tracking-tight mb-4">
              Let's Build Something <span className="text-[#FECF05]">That Grows</span>.
            </h2>
            <p className="text-base sm:text-lg text-[#C1C1C1] leading-relaxed font-light">
              Got a business? Got a growth target? Let's understand where you are today and where you want to go next.
            </p>
          </div>
        </RevealOnScroll>

        <div className="max-w-4xl mx-auto">
          {submitted ? (
            <div className="p-8 sm:p-14 rounded-3xl bg-[#181818] border border-white/15 text-center shadow-2xl animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-[#FECF05]/20 text-[#FECF05] flex items-center justify-center mx-auto mb-5">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-black font-syne text-white mb-2">
                Thank You! Let's Talk Growth.
              </h3>
              <p className="text-sm sm:text-base text-[#A0A0A0] max-w-lg mx-auto mb-8 font-light">
                We've received your business profile and growth targets. Our senior performance team will review your details and reach out within 24 hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-2.5 rounded-full bg-[#FECF05] text-[#141414] font-bold text-xs uppercase tracking-wider cursor-pointer"
              >
                Send Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-8 sm:p-12 rounded-3xl bg-[#181818] border border-white/10 shadow-2xl space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#C1C1C1] mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Vikram Malhotra"
                    className="w-full px-4 py-3 rounded-xl bg-[#222222] border border-white/10 text-white placeholder-[#8E8E8E] text-sm focus:outline-none focus:border-[#FECF05] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#C1C1C1] mb-2">
                    Company / Brand Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    placeholder="e.g. Apex HealthTech"
                    className="w-full px-4 py-3 rounded-xl bg-[#222222] border border-white/10 text-white placeholder-[#8E8E8E] text-sm focus:outline-none focus:border-[#FECF05] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#C1C1C1] mb-2">
                    Business Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.businessEmail}
                    onChange={(e) => setFormData({ ...formData, businessEmail: e.target.value })}
                    placeholder="vikram@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#222222] border border-white/10 text-white placeholder-[#8E8E8E] text-sm focus:outline-none focus:border-[#FECF05] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#C1C1C1] mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 rounded-xl bg-[#222222] border border-white/10 text-white placeholder-[#8E8E8E] text-sm focus:outline-none focus:border-[#FECF05] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#C1C1C1] mb-2">
                    Website URL
                  </label>
                  <input
                    type="text"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    placeholder="e.g. apexbrand.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#222222] border border-white/10 text-white placeholder-[#8E8E8E] text-sm focus:outline-none focus:border-[#FECF05] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#C1C1C1] mb-2">
                    Business Type
                  </label>
                  <select
                    value={formData.businessType}
                    onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#222222] border border-white/10 text-white text-sm focus:outline-none focus:border-[#FECF05] transition-colors"
                  >
                    <option value="B2B">B2B</option>
                    <option value="B2C">B2C</option>
                    <option value="D2C / eCommerce">D2C / eCommerce</option>
                    <option value="SaaS">SaaS</option>
                    <option value="Startup">Startup</option>
                    <option value="Local Business">Local Business</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#C1C1C1] mb-2">
                    What Do You Need Help With?
                  </label>
                  <select
                    value={formData.serviceNeeded}
                    onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#222222] border border-white/10 text-white text-sm focus:outline-none focus:border-[#FECF05] transition-colors"
                  >
                    <option value="Performance Marketing">Performance Marketing</option>
                    <option value="Google Ads">Google Ads</option>
                    <option value="Meta Ads">Meta Ads</option>
                    <option value="LinkedIn Ads">LinkedIn Ads</option>
                    <option value="SEO">SEO</option>
                    <option value="Branding">Branding</option>
                    <option value="Social Media">Social Media</option>
                    <option value="Creative">Creative</option>
                    <option value="Website">Website</option>
                    <option value="Marketing Automation">Marketing Automation</option>
                    <option value="Complete Growth Strategy">Complete Growth Strategy</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#C1C1C1] mb-2">
                    Current Monthly Advertising Budget
                  </label>
                  <select
                    value={formData.monthlyBudget}
                    onChange={(e) => setFormData({ ...formData, monthlyBudget: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#222222] border border-white/10 text-white text-sm focus:outline-none focus:border-[#FECF05] transition-colors"
                  >
                    <option value="Not Running Ads Yet">Not Running Ads Yet</option>
                    <option value="Below ₹50,000">Below ₹50,000</option>
                    <option value="₹50,000 – ₹1 Lakh">₹50,000 – ₹1 Lakh</option>
                    <option value="₹1 Lakh – ₹5 Lakhs">₹1 Lakh – ₹5 Lakhs</option>
                    <option value="₹5 Lakhs – ₹10 Lakhs">₹5 Lakhs – ₹10 Lakhs</option>
                    <option value="₹10 Lakhs+">₹10 Lakhs+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#C1C1C1] mb-2">
                  Tell Us About Your Growth Goal
                </label>
                <textarea
                  rows={4}
                  value={formData.growthGoal}
                  onChange={(e) => setFormData({ ...formData, growthGoal: e.target.value })}
                  placeholder="Share your current challenges, target CAC, monthly pipeline goals, or target revenue..."
                  className="w-full px-4 py-3 rounded-xl bg-[#222222] border border-white/10 text-white placeholder-[#8E8E8E] text-sm focus:outline-none focus:border-[#FECF05] transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-[#FECF05] text-[#141414] font-black text-sm uppercase tracking-wider hover:bg-white hover:scale-[1.01] transition-all shadow-xl shadow-[#FECF05]/20 cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Let's Talk Growth</span>
                <ArrowRight className="w-4 h-4 stroke-[3]" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
