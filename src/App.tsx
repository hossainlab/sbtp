import React from 'react';
import Navbar from './components/Navbar';
import BioStreamAnimation from './components/BioStreamAnimation';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import TrackSection from './sections/TrackSection';
import Projects from './sections/Projects';
import Publications from './sections/Publications';
import InstructorSection from './sections/InstructorSection';
import ManagementSection from './sections/ManagementSection';
import Curriculum from './sections/Curriculum';
import Eligibility from './sections/Eligibility';
import Pricing from './sections/Pricing';
import Benefits from './sections/Benefits';
import ResearchAssistant from './sections/ResearchAssistant';
import FAQ from './sections/FAQ';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 selection:bg-blue-500/30 selection:text-blue-200">
      <Navbar />
      <Hero />
      <BioStreamAnimation />
      <TrackSection />
      <Projects />
      <Publications />
      <Benefits />
      <ResearchAssistant />
      <Curriculum />
      <InstructorSection />
      <ManagementSection />
      <Eligibility />
      <FAQ />
      <Pricing />
      <Footer />
    </div>
  );
};

export default App;
