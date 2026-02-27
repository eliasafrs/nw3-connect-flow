import { useOutletContext } from "react-router-dom";
import HeroSection from "@/components/HeroSection";
import ResidentialPlans from "@/components/ResidentialPlans";
import BusinessPlans from "@/components/BusinessPlans";
import ServicesGrid from "@/components/ServicesGrid";
import DifferentialsSection from "@/components/DifferentialsSection";
import CoverageSection from "@/components/CoverageSection";
import TestimonialsSection from "@/components/TestimonialsSection";

const Index = () => {
  const { segment, setSegment } = useOutletContext<{
    segment: "voce" | "empresa";
    setSegment: (s: "voce" | "empresa") => void;
  }>();

  return (
    <>
      <HeroSection />

      {/* Segment toggle */}
      <div className="bg-background py-6">
        <div className="container mx-auto px-4 flex justify-center">
          <div className="flex items-center gap-1 bg-secondary rounded-full p-1">
            <button
              onClick={() => setSegment("voce")}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                segment === "voce"
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Para Você
            </button>
            <button
              onClick={() => setSegment("empresa")}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                segment === "empresa"
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Para sua Empresa
            </button>
          </div>
        </div>
      </div>

      {segment === "voce" ? <ResidentialPlans /> : <BusinessPlans />}
      <ServicesGrid />
      <DifferentialsSection />
      <CoverageSection />
      <TestimonialsSection />
    </>
  );
};

export default Index;
