import heroIllustration from "@/assets/hero-illustration.png";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import RegulatorySection from "@/components/RegulatorySection";
import BenefitsSection from "@/components/BenefitsSection";
import CompetitiveEdgeSection from "@/components/CompetitiveEdgeSection";
import PersonasSection from "@/components/PersonasSection";
import SocialProofSection from "@/components/SocialProofSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Fixed background illustration */}
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `url(${heroIllustration})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.1,
        }}
      />
      {/* White overlay for readability */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-background/60" />
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <ProblemSection />
        <HowItWorksSection />
        <RegulatorySection />
        <BenefitsSection />
        <CompetitiveEdgeSection />
        <PersonasSection />
        <SocialProofSection />
        <FinalCTASection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
