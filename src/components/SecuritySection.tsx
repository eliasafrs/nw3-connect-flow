import { Button } from "@/components/ui/button";
import { Cctv, Smartphone, Cloud, ShieldCheck, ChevronRight } from "lucide-react";

const SecuritySection = () => {
  return (
    <section id="seguranca" className="py-20 lg:py-28 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left - visual card */}
          <div className="bg-card rounded-3xl p-8 border border-border shadow-card relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
            <div className="relative text-center py-8">
              <div className="w-24 h-24 rounded-3xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Cctv className="w-12 h-12 text-primary" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-2">NW3 Câmera</h3>
              <p className="text-muted-foreground text-sm max-w-xs mx-auto">
                Veja o que acontece na sua casa em tempo real, de forma prática e rápida.
              </p>
            </div>
          </div>

          {/* Right - text */}
          <div>
            <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-wider mb-3">
              <Cctv className="w-4 h-4" /> Segurança
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Monitoramento e Segurança <span className="text-gradient">24h</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Instalação de câmeras com acesso remoto pelo celular. Ideal para residências e empresas.
            </p>

            <ul className="space-y-4 mb-8">
              {[
                { icon: Cctv, text: "Instalação profissional de câmeras" },
                { icon: Smartphone, text: "Acesso remoto pelo celular" },
                { icon: ShieldCheck, text: "Ideal para residências e empresas" },
                { icon: Cloud, text: "Gravação em nuvem (opcional)" },
              ].map((item) => (
                <li key={item.text} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">{item.text}</span>
                </li>
              ))}
            </ul>

            <Button variant="cta" size="lg">
              Quero praticidade
              <ChevronRight className="w-5 h-5 ml-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
