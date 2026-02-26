import { Button } from "@/components/ui/button";
import { Wifi, Check, ChevronRight } from "lucide-react";

const plans = [
  {
    speed: "500",
    price: "99",
    cents: ",90",
    streaming: "Deezer",
    popular: false,
  },
  {
    speed: "600",
    price: "109",
    cents: ",90",
    streaming: "Deezer + Apple TV",
    popular: true,
  },
  {
    speed: "700",
    price: "129",
    cents: ",90",
    streaming: "Disney+",
    popular: false,
  },
  {
    speed: "1 Giga",
    price: "179",
    cents: ",90",
    streaming: "Disney+ & HBO Max",
    popular: false,
  },
];

const ResidentialPlans = () => {
  return (
    <section id="planos" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-2">
            Nós temos o <span className="text-gradient">plano perfeito</span> para você!
          </h2>
          <p className="text-muted-foreground text-lg">
            Combos com serviços incríveis 🤩
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
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
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap">
                  Mais Popular
                </div>
              )}

              <div className="text-center mb-2">
                <div className="font-heading text-4xl font-bold text-foreground">
                  {plan.speed}
                </div>
                <div className="text-xs text-muted-foreground font-medium">
                  {plan.speed === "1 Giga" ? "" : "Mega"}
                </div>
              </div>

              {/* Streaming badge */}
              <div className="bg-primary/10 rounded-lg px-3 py-2 text-center mb-4">
                <span className="text-xs font-semibold text-primary">{plan.streaming}</span>
              </div>

              <div className="text-center mb-6">
                <div className="flex items-baseline justify-center gap-0.5">
                  <span className="text-sm text-muted-foreground">R$</span>
                  <span className="font-heading text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-sm text-muted-foreground">{plan.cents} /mês</span>
                </div>
              </div>

              <Button
                variant={plan.popular ? "cta" : "outline"}
                className="w-full"
              >
                Eu quero!
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          ))}
        </div>

        {/* "Todos os planos têm" */}
        <div className="bg-secondary/70 rounded-2xl p-8 max-w-4xl mx-auto text-center">
          <h3 className="font-heading text-xl font-bold text-foreground mb-4">
            Todos os planos NW3 têm
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {["Instalação gratuita", "Roteador Wi-Fi incluso", "100% Fibra Óptica", "Suporte 24h"].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <Check className="w-5 h-5 text-primary" />
                <span className="font-semibold text-foreground text-sm">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-4">
            *Sujeito à análise e prazo de permanência de 12 meses.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ResidentialPlans;
