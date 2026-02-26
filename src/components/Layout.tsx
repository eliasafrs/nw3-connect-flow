import { useState } from "react";
import { Outlet } from "react-router-dom";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import WhatsAppButton from "@/components/WhatsAppButton";

const Layout = () => {
  const [segment, setSegment] = useState<"voce" | "empresa">("voce");

  return (
    <>
      <TopBar segment={segment} onSegmentChange={setSegment} />
      <Navbar />
      <main>
        <Outlet context={{ segment }} />
      </main>
      <FooterSection />
      <WhatsAppButton />
    </>
  );
};

export default Layout;
