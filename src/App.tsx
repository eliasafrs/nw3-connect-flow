import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/Layout";
import Index from "./pages/Index";
import Internet from "./pages/Internet";
import Camera from "./pages/Camera";
import TVStreaming from "./pages/TVStreaming";
import Fixo from "./pages/Fixo";
import Aplicativos from "./pages/Aplicativos";
import Ajuda from "./pages/Ajuda";
import Sobre from "./pages/Sobre";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Index />} />
            <Route path="/internet" element={<Internet />} />
            <Route path="/camera" element={<Camera />} />
            <Route path="/tv-streaming" element={<TVStreaming />} />
            <Route path="/fixo" element={<Fixo />} />
            <Route path="/aplicativos" element={<Aplicativos />} />
            <Route path="/ajuda" element={<Ajuda />} />
            <Route path="/sobre" element={<Sobre />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
