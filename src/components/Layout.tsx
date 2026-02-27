import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import WhatsAppButton from "@/components/WhatsAppButton";

const Layout = () => {
  const [segment, setSegment] = useState<"voce" | "empresa">("voce");

  return (
    <>
      <Navbar />
      <main>
        <Outlet context={{ segment, setSegment }} />
      </main>
      <FooterSection />
      <WhatsAppButton />
    </>
  );
};

export default Layout;
