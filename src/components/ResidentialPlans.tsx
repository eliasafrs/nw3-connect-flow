import { Button } from "@/components/ui/button";
import { Check, ChevronRight, Wifi } from "lucide-react";

import disneyLogo from "@/assets/logos/disney-plus.png";
import hboLogo from "@/assets/logos/hbo-max.png";
import deezerLogo from "@/assets/logos/deezer.png";

const logoMap: Record<string, string> = {
  "Deezer": deezerLogo,
  "Deezer + Apple TV": deezerLogo,
  "Disney+": disneyLogo,
  "Disney+ & HBO Max": disneyLogo,
};

const secondLogoMap: Record<string, string | undefined> = {
  "Disney+ & HBO Max": hboLogo,
};

const plans = [
  { speed: "500", price: "99", cents: ",90", streaming: "Deezer", popular: false },
  { speed: "600", price: "109", cents: ",90", streaming: "Deezer + Apple TV", popular: true },
  { speed: "700", price: "129", cents: ",90", streaming: "Disney+", popular: false },
  { speed: "1 Giga", price: "179", cents: ",90", streaming: "Disney+ & HBO Max", popular: false },
];

const ResidentialPlans = () => {
  return (
    <section id="planos" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-accent" />
            <span className="text-accent text-xs font-medium tracking-[0.2em] uppercase">Planos Residenciais</span>
            <div className="w-8 h-px bg-accent" />
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-3">
            O plano ideal para sua casa
          </h2>
          <p className="text-muted-foreground text-base max-w-lg mx-auto">
            Todos com streaming incluso e instalação gratuita.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto mb-16">
          {plans.map((plan) => (
            <div
              key={plan.speed}
              className={`relative group bg-card overflow-hidden transition-all duration-300 hover:-translate-y-0.5 ${
                plan.popular
                  ? "ring-1 ring-accent shadow-glow"
                  : "border border-border shadow-card hover:shadow-card-hover"
              }`}
              style={{ borderRadius: "var(--radius)" }}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-accent" />
              )}
              {plan.popular && (
                <div className="absolute top-3 right-3 bg-accent text-accent-foreground text-[10px] font-semibold px-2 py-0.5 rounded-sm uppercase tracking-wider">
                  Popular
                </div>
              )}

              <div className="p-6">
                {/* Speed */}
                <div className="mb-5">
                  <div className="font-heading text-4xl font-bold text-foreground leading-none">
                    {plan.speed}
                  </div>
                  <div className="text-[11px] text-muted-foreground font-medium mt-1 tracking-wider uppercase">
                    {plan.speed === "1 Giga" ? "de velocidade" : "Mega"}
                  </div>
                </div>

                {/* Streaming */}
                <div className="flex items-center gap-2 bg-secondary/70 rounded px-3 py-2.5 mb-5">
                  {logoMap[plan.streaming] && (
                    <img src={logoMap[plan.streaming]} alt={plan.streaming} className="h-6 w-auto object-contain" />
                  )}
                  {secondLogoMap[plan.streaming] && (
                    <>
                      <span className="text-muted-foreground text-xs">+</span>
                      <img src={secondLogoMap[plan.streaming]} alt="" className="h-6 w-auto object-contain" />
                    </>
                  )}
                  {!logoMap[plan.streaming] && (
                    <span className="text-xs font-medium text-foreground">{plan.streaming}</span>
                  )}
                </div>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-0.5">
                    <span className="text-xs text-muted-foreground">R$</span>
                    <span className="font-heading text-3xl font-bold text-foreground">{plan.price}</span>
                    <div className="flex flex-col">
                      <span className="text-muted-foreground text-sm leading-none">{plan.cents}</span>
                      <span className="text-muted-foreground text-[10px]">/mês</span>
                    </div>
                  </div>
                </div>

                <Button
                  variant={plan.popular ? "cta" : "outline"}
                  className="w-full text-sm"
                  size="sm"
                >
                  Eu quero
                  <ChevronRight className="w-3.5 h-3.5 ml-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits */}
        <div className="bg-primary rounded p-6 sm:p-8 max-w-4xl mx-auto">
          <h3 className="font-heading text-base font-semibold text-primary-foreground mb-4 text-center tracking-wide">
            Incluído em todos os planos
          </h3>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {["Instalação gratuita", "Roteador Wi-Fi incluso", "100% Fibra Óptica", "Suporte 24h"].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-accent" />
                <span className="font-medium text-primary-foreground/80 text-sm">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-[11px] text-primary-foreground/30 mt-4 text-center tracking-wide">
            *Sujeito à análise e prazo de permanência de 12 meses.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ResidentialPlans;
