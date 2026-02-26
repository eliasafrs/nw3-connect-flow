import { Button } from "@/components/ui/button";
import { Wifi, Check, Gamepad2, Tv } from "lucide-react";

const plans = [
  { speed: "300", price: "89,90", popular: false },
  { speed: "500", price: "109,90", popular: true },
  { speed: "700", price: "139,90", popular: false },
  { speed: "1 Giga", price: "179,90", popular: false },
];

const features = ["100% Fibra Óptica", "Wi-Fi incluso", "Instalação rápida", "Ideal para streaming e jogos"];

const ResidentialPlans = () => {
  return (
    <section id="planos" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-wider mb-3">
            <Wifi className="w-4 h-4" /> Internet Residencial
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Planos para sua <span className="text-gradient">Casa</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Navegue, jogue e assista com a melhor fibra óptica da região.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.speed}
              className={`relative bg-card rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1 ${
                plan.popular
                  ? "border-primary shadow-glow scale-[1.03]"
                  : "border-border shadow-card hover:shadow-card-hover"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full">
                  Mais Popular
                </div>
              )}

              <div className="text-center mb-6">
                <div className="font-heading text-5xl font-bold text-foreground mb-1">
                  {plan.speed}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {plan.speed === "1 Giga" ? "" : "Mega"}
                </div>
              </div>

              <div className="text-center mb-6">
                <span className="text-sm text-muted-foreground">R$</span>
                <span className="font-heading text-3xl font-bold text-foreground ml-1">{plan.price}</span>
                <span className="text-sm text-muted-foreground">/mês</span>
              </div>

              <ul className="space-y-3 mb-8">
                {features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.popular ? "cta" : "outline"}
                className="w-full"
              >
                Contratar Agora
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResidentialPlans;
