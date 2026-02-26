import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-hero opacity-80" />

      <div className="relative container mx-auto px-4 py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left - text */}
          <div className="text-center lg:text-left">
            <p className="text-primary-glow font-semibold text-sm uppercase tracking-wider mb-3 animate-fade-in">
              Agora incluso no seu pacote.
            </p>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight mb-4 animate-fade-in-up">
              Um combo que só a{" "}
              <span className="text-gradient">NW3</span> tem
            </h1>
            <p className="text-primary-foreground/60 text-lg mb-8 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
              Internet + Streaming + TV + Câmera + Fixo
            </p>
            <Button variant="cta" size="lg" className="text-base px-8 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              Quero Assinar
              <ChevronRight className="w-5 h-5 ml-1" />
            </Button>
          </div>

          {/* Right - promo card */}
          <div className="flex justify-center lg:justify-end animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="bg-primary-foreground/10 backdrop-blur-md border border-primary-foreground/20 rounded-3xl p-8 text-center max-w-xs w-full">
              <div className="font-heading text-7xl sm:text-8xl font-bold text-primary-foreground leading-none">
                600
              </div>
              <div className="inline-block bg-primary text-primary-foreground text-sm font-bold px-3 py-1 rounded-full -mt-2 mb-4">
                mega
              </div>
              <div className="flex items-baseline justify-center gap-1 mb-2">
                <span className="text-primary-foreground/60 text-lg">R$</span>
                <span className="font-heading text-6xl font-bold text-primary-foreground">109</span>
                <span className="text-primary-foreground/60 text-xl">,90</span>
              </div>
              <p className="text-primary-foreground/40 text-xs mb-6">
                *Consulte condições. Valores vigentes por 12 meses.
              </p>
              <Button variant="cta" className="w-full">
                Eu quero!
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
