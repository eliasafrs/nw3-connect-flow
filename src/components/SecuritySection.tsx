import { Button } from "@/components/ui/button";
import { Camera, Smartphone, Cloud, ShieldCheck } from "lucide-react";

const SecuritySection = () => {
  return (
    <section id="seguranca" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-wider mb-3">
              <Camera className="w-4 h-4" /> Segurança
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Monitoramento e Segurança <span className="text-gradient">24h</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Instalação de câmeras com acesso remoto pelo celular. Ideal para residências e empresas.
            </p>

            <ul className="space-y-4 mb-8">
              {[
                { icon: Camera, text: "Instalação profissional de câmeras" },
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
              Solicitar Orçamento
            </Button>
          </div>

          <div className="bg-card rounded-2xl p-8 border border-border shadow-card flex items-center justify-center min-h-[300px]">
            <div className="text-center">
              <Camera className="w-20 h-20 text-primary/20 mx-auto mb-4" />
              <p className="text-muted-foreground text-sm">Imagem ilustrativa</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
