import { useOutletContext } from "react-router-dom";
import HeroSection from "@/components/HeroSection";
import ResidentialPlans from "@/components/ResidentialPlans";
import BusinessPlans from "@/components/BusinessPlans";
import ServicesGrid from "@/components/ServicesGrid";
import DifferentialsSection from "@/components/DifferentialsSection";
import CoverageSection from "@/components/CoverageSection";
import TestimonialsSection from "@/components/TestimonialsSection";

const Index = () => {
  const { segment } = useOutletContext<{ segment: "voce" | "empresa" }>();

  return (
    <>
      {segment === "voce" ? (
        <>
          <HeroSection />
          <ResidentialPlans />
        </>
      ) : (
        <BusinessPlans />
      )}
      <ServicesGrid />
      <DifferentialsSection />
      <CoverageSection />
      <TestimonialsSection />
    </>
  );
};

export default Index;
