import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

const Layout = () => {
  const [segment, setSegment] = useState<"voce" | "empresa">("voce");

  return (
    <>
      <Navbar />
      <main>
        <Outlet context={{ segment, setSegment }} />
      </main>
      <FooterSection />
    </>
  );
};

export default Layout;
