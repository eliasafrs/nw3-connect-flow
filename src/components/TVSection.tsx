import { Button } from "@/components/ui/button";
import { Tv, MonitorSmartphone, Radio } from "lucide-react";

const TVSection = () => {
  return (
    <section id="tv" className="py-20 lg:py-28 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="order-2 lg:order-1">
            <div className="bg-card rounded-2xl p-8 border border-border shadow-card">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Tv, label: "Canais HD" },
                  { icon: Radio, label: "Abertos e Fechados" },
                  { icon: MonitorSmartphone, label: "App no Celular" },
                  { icon: Tv, label: "Pacotes Flexíveis" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50">
                    <item.icon className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm font-medium text-foreground">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-wider mb-3">
              <Tv className="w-4 h-4" /> TV por Assinatura
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
              TV Digital com Qualidade <span className="text-gradient">HD</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Canais abertos e fechados, opções de pacotes e aplicativo para assistir no celular.
            </p>
            <Button variant="cta" size="lg">
              Conhecer Pacotes
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TVSection;
