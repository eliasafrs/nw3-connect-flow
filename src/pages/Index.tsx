import { useState } from "react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ResidentialPlans from "@/components/ResidentialPlans";
import BusinessPlans from "@/components/BusinessPlans";
import StreamingSection from "@/components/StreamingSection";
import ServicesGrid from "@/components/ServicesGrid";
import SecuritySection from "@/components/SecuritySection";
import TVSection from "@/components/TVSection";
import PhoneSection from "@/components/PhoneSection";
import SelfServiceSection from "@/components/SelfServiceSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import CoverageSection from "@/components/CoverageSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FooterSection from "@/components/FooterSection";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  const [segment, setSegment] = useState<"voce" | "empresa">("voce");

  return (
    <>
      <TopBar segment={segment} onSegmentChange={setSegment} />
      <Navbar />
      <main>
        <HeroSection />
        {segment === "voce" ? <ResidentialPlans /> : <BusinessPlans />}
        <StreamingSection />
        <ServicesGrid />
        <SecuritySection />
        <TVSection />
        <PhoneSection />
        <SelfServiceSection />
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
