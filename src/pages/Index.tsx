import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import BenefitsSection from "@/components/BenefitsSection";
import PersonasSection from "@/components/PersonasSection";
import SocialProofSection from "@/components/SocialProofSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <HowItWorksSection />
      <BenefitsSection />
      <PersonasSection />
      <SocialProofSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
};

export default Index;
