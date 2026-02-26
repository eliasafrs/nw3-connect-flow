import { Button } from "@/components/ui/button";
import { Building2, Server, Shield, Headset, Globe } from "lucide-react";

const features = [
  { icon: Server, title: "Link Dedicado", desc: "Banda garantida para sua operação" },
  { icon: Globe, title: "IP Fixo", desc: "Conexão estável para servidores" },
  { icon: Shield, title: "SLA Diferenciado", desc: "Garantia de disponibilidade" },
  { icon: Headset, title: "Atendimento Prioritário", desc: "Suporte exclusivo empresarial" },
];

const BusinessPlans = () => {
  return (
    <section id="empresarial" className="py-20 lg:py-28 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-wider mb-3">
              <Building2 className="w-4 h-4" /> Internet Empresarial
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Soluções para sua <span className="text-gradient">Empresa</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Estabilidade para sistemas, câmeras e servidores. Internet de verdade para quem não pode parar.
            </p>
            <Button variant="cta" size="lg">
              <Headset className="w-5 h-5 mr-2" />
              Falar com Consultor
            </Button>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-card rounded-xl p-6 border border-border shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <f.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-1">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessPlans;
