import { Button } from "@/components/ui/button";
import { Phone, PhoneCall, Shield, Clock } from "lucide-react";

const PhoneSection = () => {
  return (
    <section id="fixo" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-wider mb-3">
              <Phone className="w-4 h-4" /> Telefone Fixo
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Telefone Fixo com <span className="text-gradient">qualidade digital</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Ligações ilimitadas para fixos locais e nacionais com a qualidade da fibra óptica.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { icon: PhoneCall, label: "Ligações ilimitadas" },
                { icon: Shield, label: "Qualidade digital" },
                { icon: Clock, label: "Sem interrupções" },
                { icon: Phone, label: "Combo com internet" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50">
                  <item.icon className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium text-foreground">{item.label}</span>
                </div>
              ))}
            </div>

            <Button variant="cta" size="lg">
              Contratar Fixo
            </Button>
          </div>

          <div className="bg-card rounded-3xl p-8 border border-border shadow-card flex items-center justify-center min-h-[300px]">
            <div className="text-center">
              <div className="w-24 h-24 rounded-3xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Phone className="w-12 h-12 text-primary" />
              </div>
              <p className="text-muted-foreground text-sm">NW3 Fixo</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhoneSection;
