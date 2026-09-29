import React from 'react';
import { 
  ShoppingBag, 
  Cpu, 
  HeartPulse, 
  GraduationCap, 
  Building2, 
  Network, 
  UtensilsCrossed, 
  Briefcase, 
  MapPin, 
  Factory, 
  Sparkles, 
  Rocket 
} from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

export const IndustriesSection: React.FC = () => {
  const industries = [
    {
      title: 'eCommerce & D2C',
      desc: 'Customer acquisition and scalable online sales.',
      icon: ShoppingBag,
    },
    {
      title: 'SaaS & Technology',
      desc: 'Demo generation, sign-ups and B2B acquisition.',
      icon: Cpu,
    },
    {
      title: 'Healthcare',
      desc: 'Appointment and enquiry generation.',
      icon: HeartPulse,
    },
    {
      title: 'Education',
      desc: 'Admissions, course enquiries and lead generation.',
      icon: GraduationCap,
    },
    {
      title: 'Real Estate',
      desc: 'Project enquiries and qualified property leads.',
      icon: Building2,
    },
    {
      title: 'Franchise Businesses',
      desc: 'Investor and franchise partner acquisition.',
      icon: Network,
    },
    {
      title: 'Hospitality',
      desc: 'Bookings, enquiries and customer acquisition.',
      icon: UtensilsCrossed,
    },
    {
      title: 'Professional Services',
      desc: 'Qualified consultation and service enquiries.',
      icon: Briefcase,
    },
    {
      title: 'Local Businesses',
      desc: 'Calls, appointments, enquiries and local customer acquisition.',
      icon: MapPin,
    },
    {
      title: 'B2B & Manufacturing',
      desc: 'Distributor, dealer and business opportunity generation.',
      icon: Factory,
    },
    {
      title: 'Consumer Brands',
      desc: 'Awareness, acquisition and eCommerce growth.',
      icon: Sparkles,
    },
    {
      title: 'Startups',
      desc: 'Build and validate scalable customer acquisition channels.',
      icon: Rocket,
    },
  ];

  return (
    <section id="industries" className="py-24 bg-[#111111] text-white border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll direction="up" duration={800}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FECF05]/10 border border-[#FECF05]/20 text-[#FECF05] text-xs font-bold uppercase tracking-widest mb-4">
              <span>INDUSTRIES WE WORK WITH</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-syne tracking-tight mb-4">
              Different Industries. Different Strategies.{' '}
              <span className="text-[#FECF05]">One Goal — Growth</span>.
            </h2>
            <p className="text-base sm:text-lg text-[#C1C1C1] leading-relaxed font-light">
              Every vertical demands its own acquisition playbook, unit economics calibration, and conversion friction removal.
            </p>
          </div>
        </RevealOnScroll>

        {/* 12 Industry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {industries.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <RevealOnScroll
                key={ind.title}
                direction="up"
                duration={650}
                delay={idx * 50}
              >
                <div className="p-6 rounded-2xl bg-[#181818] border border-white/10 hover:border-[#FECF05] transition-all duration-300 h-full flex flex-col justify-between group shadow-md hover:-translate-y-1">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#FECF05]/15 border border-[#FECF05]/30 flex items-center justify-center text-[#FECF05] mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold font-syne text-white mb-2 group-hover:text-[#FECF05] transition-colors">
                      {ind.title}
                    </h3>
                    <p className="text-xs text-[#A0A0A0] leading-relaxed font-light">
                      {ind.desc}
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
