import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import WhatYouCanSaveSection from "@/components/WhatYouCanSaveSection";
import ComparisonSection from "@/components/ComparisonSection";
import PrivacySection from "@/components/PrivacySection";
import BuiltForSection from "@/components/BuiltForSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <HowItWorksSection />
        <WhatYouCanSaveSection />
        <ComparisonSection />
        <PrivacySection />
        <BuiltForSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
