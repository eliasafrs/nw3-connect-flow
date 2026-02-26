import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ResidentialPlans from "@/components/ResidentialPlans";
import BusinessPlans from "@/components/BusinessPlans";
import StreamingSection from "@/components/StreamingSection";
import TVSection from "@/components/TVSection";
import SecuritySection from "@/components/SecuritySection";
import DifferentialsSection from "@/components/DifferentialsSection";
import CoverageSection from "@/components/CoverageSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FooterSection from "@/components/FooterSection";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ResidentialPlans />
        <BusinessPlans />
        <StreamingSection />
        <TVSection />
        <SecuritySection />
        <DifferentialsSection />
        <CoverageSection />
        <TestimonialsSection />
      </main>
      <FooterSection />
      <WhatsAppButton />
    </>
  );
};

export default Index;
