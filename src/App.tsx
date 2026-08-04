import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Capabilities } from './components/Capabilities';
import { IndustriesHub } from './components/IndustriesHub';
import { AboutPage } from './components/AboutPage';
import { CaseStudies } from './components/CaseStudies';
import { PhilosophySection } from './components/PhilosophySection';
import { JournalSection } from './components/JournalSection';
import { ContactPage } from './components/ContactPage';
import { Footer } from './components/Footer';
import { CaseStudyModal } from './components/CaseStudyModal';
import { ConsultationModal } from './components/ConsultationModal';
import { NavSection, CaseStudy } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState<NavSection>('overview');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);
  const [consultationModalOpen, setConsultationModalOpen] = useState(false);
  const [simulatedData, setSimulatedData] = useState<{ revenue?: number; lift?: number }>({});
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  const handleToggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleNavigate = (section: NavSection) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleOpenConsultationWithData = (revenue: number, lift: number) => {
    setSimulatedData({ revenue, lift });
    setConsultationModalOpen(true);
  };

  return (
    <div className={`min-h-screen font-geist transition-colors duration-300 ${
      theme === 'light'
        ? 'bg-[#F8F9FA] text-neutral-900 selection:bg-orange-500 selection:text-white'
        : 'bg-[#0A0A0A] text-white selection:bg-orange-500 selection:text-black'
    }`}>
      {/* Sticky Top Navigation Bar with Dark/Light Theme Toggle */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenConsultation={() => {
          setSimulatedData({});
          setConsultationModalOpen(true);
        }}
        theme={theme}
        onToggleTheme={handleToggleTheme}
      />

      {/* Main Page Layout */}
      <main className="pt-20">
        {/* Hero Section */}
        <div id="overview">
          <Hero
            onNavigate={handleNavigate}
            onOpenConsultation={() => setConsultationModalOpen(true)}
            theme={theme}
          />
        </div>

        {/* 1. Services Hub (16 Performance Services across 5 categories) */}
        <div id="services">
          <Capabilities
            onNavigate={handleNavigate}
            onOpenConsultation={() => setConsultationModalOpen(true)}
            theme={theme}
          />
        </div>

        {/* 2. Industries Hub (10 Category Playbooks) */}
        <div id="industries">
          <IndustriesHub
            onNavigate={handleNavigate}
            onOpenConsultation={() => setConsultationModalOpen(true)}
            theme={theme}
          />
        </div>

        {/* 3. About Section (Leadership, Process, Principles, Comparison) */}
        <div id="about">
          <AboutPage
            onNavigate={handleNavigate}
            onOpenConsultation={() => setConsultationModalOpen(true)}
            theme={theme}
          />
        </div>

        {/* 4. Case Studies Showcase */}
        <div id="case-studies">
          <CaseStudies
            onSelectCaseStudy={(study) => setSelectedCaseStudy(study)}
            showTitle={true}
            theme={theme}
          />
        </div>

        {/* Interactive Growth Engine & Revenue Lift Simulator (INR / ₹) */}
        <div id="simulator">
          <PhilosophySection
            onOpenConsultationWithData={handleOpenConsultationWithData}
            theme={theme}
          />
        </div>

        {/* 5. Insights & Research Papers */}
        <div id="insights">
          <JournalSection
            onNavigate={handleNavigate}
            theme={theme}
          />
        </div>

        {/* 6. Contact & Growth Audit Form */}
        <div id="contact">
          <ContactPage theme={theme} />
        </div>
      </main>

      {/* Enterprise Footer */}
      <Footer
        onOpenConsultation={() => setConsultationModalOpen(true)}
        onNavigateTab={(tab) => handleNavigate(tab as NavSection)}
        theme={theme}
      />

      {/* Case Study Detail Modal */}
      <CaseStudyModal
        study={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
        onOpenConsultation={() => setConsultationModalOpen(true)}
        theme={theme}
      />

      {/* Strategy Session / Audit Modal */}
      <ConsultationModal
        isOpen={consultationModalOpen}
        onClose={() => setConsultationModalOpen(false)}
        initialRevenue={simulatedData.revenue}
        initialLift={simulatedData.lift}
        theme={theme}
      />
    </div>
  );
}
