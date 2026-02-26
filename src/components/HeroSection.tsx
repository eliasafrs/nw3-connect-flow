import { Button } from "@/components/ui/button";
import { Zap, MapPin } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-hero opacity-70" />

      <div className="relative container mx-auto px-4 py-32 text-center lg:text-left">
        <div className="max-w-3xl mx-auto lg:mx-0">
          <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-1.5 mb-6 animate-fade-in">
            <Zap className="w-4 h-4 text-primary-glow" />
            <span className="text-sm font-medium text-primary-foreground/90">
              100% Fibra Óptica
            </span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-in-up">
            Internet Fibra Óptica de{" "}
            <span className="text-gradient">Alta Velocidade</span>{" "}
            para sua Casa e Empresa
          </h1>

          <p className="text-lg sm:text-xl text-primary-foreground/70 mb-10 max-w-2xl animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
            Conexão estável, suporte rápido e planos que cabem no seu bolso.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="cta" size="lg" className="text-base px-8">
              <Zap className="w-5 h-5 mr-2" />
              Ver Planos
            </Button>
            <Button variant="hero-outline" size="lg" className="text-base px-8">
              <MapPin className="w-5 h-5 mr-2" />
              Consultar Disponibilidade
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
