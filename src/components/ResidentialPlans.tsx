import { Button } from "@/components/ui/button";
import { Check, ChevronRight, Tv, Wifi } from "lucide-react";

import disneyLogo from "@/assets/logos/8164e6be-f6e5-4d93-b6a2-56fa5171a793.png";
import hboLogo from "@/assets/logos/hbo-max.png";
import deezerLogo from "@/assets/logos/deezer.png";

const logoMap: Record<string, string> = {
  "Deezer": deezerLogo,
  "Deezer + Apple TV": deezerLogo,
  "Disney+": disneyLogo,
  "Disney+ & HBO Max": disneyLogo,
  "Disney+ ou HBO Max": disneyLogo,
};

const secondLogoMap: Record<string, string | undefined> = {
  "Disney+ & HBO Max": hboLogo,
  "Disney+ ou HBO Max": hboLogo,
};

const plans = [
  {
    speed: "600",
    price: "99",
    cents: ",90",
    streaming: "",
    popular: false,
  },
  {
    speed: "600",
    price: "109",
    cents: ",90",
    streaming: "Deezer",
    popular: false,
  },
  {
    speed: "600",
    price: "129",
    cents: ",90",
    streaming: "Disney+ ou HBO Max",
    popular: false,
  },
];

const ResidentialPlans = () => {
  return (
    <section id="planos" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-1.5 mb-4">
            <Wifi className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-semibold">Planos Residenciais</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-foreground mb-2">
            O plano perfeito para <span className="text-gradient">sua casa</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Aplicativo de canais de TV incluso em todos os planos 📺
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-5xl mx-auto mb-14">
          {plans.map((plan) => (
            <div
              key={plan.speed}
              className={`relative group rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
                plan.popular
                  ? "ring-2 ring-accent shadow-glow"
                  : "border border-border shadow-card hover:shadow-card-hover"
              }`}
              style={{ background: "linear-gradient(135deg, hsl(220 72% 48%), hsl(225 90% 28%))" }}
            >
              {/* Top accent bar */}
              <div className={`h-1 ${plan.popular ? "bg-accent" : "bg-white/20 group-hover:bg-white/40"} transition-colors`} />

              {plan.popular && (
                <div className="absolute top-3 right-3 bg-accent text-accent-foreground text-[10px] font-bold px-2.5 py-0.5 rounded-md uppercase tracking-wider">
                  Popular
                </div>
              )}

              <div className="p-6 text-center">
                {/* Speed */}
                <div className="mb-4">
                  <div className="font-heading text-5xl font-black text-white leading-none">
                    {plan.speed}
                  </div>
                  <div className="text-xs text-white/70 font-medium mt-1">
                    {plan.speed === "1 Giga" ? "de velocidade" : "MEGA"}
                  </div>
                  <div className="bg-white/10 rounded-lg px-3 py-1.5 text-center mt-2">
                    <span className="text-xs font-semibold flex items-center justify-center gap-1 uppercase text-white/90">
                      <Tv className="w-3.5 h-3.5" /> + DE 90 CANAIS DE TV
                    </span>
                  </div>
                </div>

                {/* Streaming logos */}
                {plan.streaming && (
                  <div className="flex items-center justify-center gap-2 bg-white/10 rounded-lg px-3 py-2.5 mb-5">
                      {logoMap[plan.streaming] && (
                        <img
                          src={logoMap[plan.streaming]}
                          alt={plan.streaming}
                          className="h-7 w-auto object-contain"
                        />
                      )}
                      {secondLogoMap[plan.streaming] && (
                        <>
                          <span className="text-white/70 text-xs font-bold">OU</span>
                          <img
                            src={secondLogoMap[plan.streaming]}
                            alt=""
                            className="h-7 w-auto object-contain"
                          />
                        </>
                      )}
                  </div>
                )}
                {!plan.streaming && <div className="mb-5" />}

                {/* Price */}
                <div className="mb-5">
                  <div className="flex items-baseline justify-center gap-0.5">
                    <span className="text-sm text-white/60">R$</span>
                    <span className="font-heading text-4xl font-black text-[#ffae00]">{plan.price}</span>
                    <div className="flex flex-col">
                      <span className="text-sm leading-none text-[#ffae00]">{plan.cents}</span>
                      <span className="text-white/60 text-[10px]">/mês</span>
                    </div>
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
            </div>
          ))}
        </div>

        {/* Benefits strip */}
        <div className="bg-primary rounded-xl p-6 sm:p-8 max-w-4xl mx-auto">
          <h3 className="font-heading text-lg font-bold text-primary-foreground mb-4 text-center">
            Incluído em todos os planos
          </h3>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {["Roteador Wi-Fi incluso", "100% Fibra Óptica", "Suporte 24h", "Canais de TV no app"].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <Check className="w-4 h-4 text-accent" />
                <span className="font-medium text-primary-foreground text-sm">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-primary-foreground/40 mt-4 text-center">
            *Sujeito à análise e prazo de permanência de 12 meses.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ResidentialPlans;
