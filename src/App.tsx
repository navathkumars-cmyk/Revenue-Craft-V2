import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Capabilities } from './components/Capabilities';
import { CaseStudies } from './components/CaseStudies';
import { PhilosophySection } from './components/PhilosophySection';
import { ExpertiseDetail } from './components/ExpertiseDetail';
import { JournalSection } from './components/JournalSection';
import { Footer } from './components/Footer';
import { CaseStudyModal } from './components/CaseStudyModal';
import { ConsultationModal } from './components/ConsultationModal';
import { NavSection, CaseStudy } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState<NavSection>('overview');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);
  const [consultationModalOpen, setConsultationModalOpen] = useState(false);
  const [simulatedData, setSimulatedData] = useState<{ revenue?: number; lift?: number }>({});

  const handleNavigate = (section: NavSection) => {
    setActiveSection(section);
    // Scroll to section element if on overview page or scroll smoothly
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
    <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-orange-500 selection:text-black font-geist">
      {/* Fixed Sticky Header Navigation */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenConsultation={() => {
          setSimulatedData({});
          setConsultationModalOpen(true);
        }}
      />

      {/* Main Page Layout */}
      <main className="pt-22">
        {/* Hero Section */}
        <div id="overview">
          <Hero
            onNavigateToCases={() => handleNavigate('case-studies')}
            onNavigateToExpertise={() => handleNavigate('expertise')}
            onOpenConsultation={() => setConsultationModalOpen(true)}
          />
        </div>

        {/* Core Capabilities & Services */}
        <div id="capabilities">
          <Capabilities
            onSelectCapability={(id) => handleNavigate('expertise')}
            onOpenConsultation={() => setConsultationModalOpen(true)}
          />
        </div>

        {/* Case Studies Showcase */}
        <div id="case-studies">
          <CaseStudies
            onSelectCaseStudy={(study) => setSelectedCaseStudy(study)}
            showTitle={true}
          />
        </div>

        {/* Strategic Philosophy & Interactive Growth Engine Simulator */}
        <div id="philosophy">
          <PhilosophySection
            onOpenConsultationWithData={handleOpenConsultationWithData}
          />
        </div>

        {/* Expertise Disciplines Deep Dive */}
        <div id="expertise">
          <ExpertiseDetail
            onOpenConsultation={() => setConsultationModalOpen(true)}
          />
        </div>

        {/* Research & Journal Papers */}
        <div id="journal">
          <JournalSection />
        </div>
      </main>

      {/* Enterprise Footer */}
      <Footer
        onOpenConsultation={() => setConsultationModalOpen(true)}
        onNavigateTab={(tab) => handleNavigate(tab as NavSection)}
      />

      {/* Case Study Detail Modal */}
      <CaseStudyModal
        study={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
        onOpenConsultation={() => setConsultationModalOpen(true)}
      />

      {/* Architecture Consultation / Audit Modal */}
      <ConsultationModal
        isOpen={consultationModalOpen}
        onClose={() => setConsultationModalOpen(false)}
        initialRevenue={simulatedData.revenue}
        initialLift={simulatedData.lift}
      />
    </div>
  );
}
