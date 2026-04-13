import { useState } from "react";
import { Wifi, Check, ChevronRight, Tv, Headset } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PageBanner from "@/components/PageBanner";
import CoverageSection from "@/components/CoverageSection";
import BusinessPlans from "@/components/BusinessPlans";

import disneyLogo from "@/assets/logos/disney-plus.png";
import hboLogo from "@/assets/logos/hbo-max.png";
import globoplayLogo from "@/assets/logos/globoplay.png";
import deezerLogo from "@/assets/logos/deezer.png";

const internetPlans = [
  { speed: "400", price: "79", cents: ",90", popular: false },
  { speed: "600", price: "99", cents: ",90", popular: true },
  { speed: "700", price: "109", cents: ",90", popular: false },
  { speed: "1 Giga", price: "149", cents: ",90", popular: false },
];

const comboPlans = [
  {
    speed: "500",
    price: "99",
    cents: ",90",
    streaming: "Deezer",
    logos: [deezerLogo],
    popular: false,
  },
  {
    speed: "600",
    price: "129",
    cents: ",90",
    streaming: "HBO Max ou Disney+",
    logos: [hboLogo, disneyLogo],
    separator: "ou",
    popular: true,
  },
  {
    speed: "700",
    price: "149",
    cents: ",90",
    streaming: "Globoplay",
    logos: [globoplayLogo],
    popular: false,
  },
];

const Internet = () => {
  const [segment, setSegment] = useState<"voce" | "empresa">("voce");

  return (
    <>
      <PageBanner
        icon={Wifi}
        title="Internet Fibra Óptica"
        highlight="de Verdade"
        description="Conexão 100% fibra com velocidade real, Wi-Fi incluso e mais de 90 canais de TV em todos os planos."
      />

      {/* Segment toggle */}
      <div className="bg-background py-6">
        <div className="container mx-auto px-4 flex justify-center">
          <div className="flex items-center gap-1 bg-secondary rounded-full p-1">
            <button
              onClick={() => setSegment("voce")}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                segment === "voce"
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Para Você
            </button>
            <button
              onClick={() => setSegment("empresa")}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                segment === "empresa"
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Para sua Empresa
            </button>
          </div>
        </div>
      </div>

      {segment === "voce" ? (
        <>
          {/* Plans */}
          <section className="py-20 lg:py-28 bg-background">
            <div className="container mx-auto px-4">
              <div className="text-center mb-10">
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-2">
                  Escolha o <span className="text-gradient">plano ideal</span> para você
                </h2>
                <p className="text-muted-foreground text-lg">
                  Todos os planos incluem mais de 90 canais de TV! 📺
                </p>
              </div>

              <Tabs defaultValue="combos" className="max-w-6xl mx-auto">
                <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-10 h-12">
                  <TabsTrigger value="combos" className="text-sm font-bold">
                    🎬 Combos Internet + Streaming
                  </TabsTrigger>
                  <TabsTrigger value="internet" className="text-sm font-bold">
                    🌐 Planos Internet
                  </TabsTrigger>
                </TabsList>

                {/* COMBOS TAB */}
                <TabsContent value="combos">
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {comboPlans.map((plan) => (
                      <div
                        key={plan.speed}
                        className={`relative rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 ${
                          plan.popular
                            ? "ring-2 ring-accent shadow-glow scale-[1.03]"
                            : "border border-white/10 shadow-card hover:shadow-card-hover"
                        }`}
                        style={{ background: "linear-gradient(135deg, hsl(220 72% 48%), hsl(225 90% 28%))" }}
                      >
                        {plan.popular && (
                          <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-accent-foreground text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap bg-primary">
                            Mais Popular
                          </div>
                        )}
                        <div className="text-center mb-3">
                          <div className="font-heading text-5xl font-bold text-[#e4d101]">{plan.speed}</div>
                          <div className="text-xs font-medium text-primary-foreground">
                            {plan.speed === "1 Giga" ? "" : "MEGA"}
                          </div>
                        </div>
                        <div className="bg-white/10 rounded-lg px-3 py-2 text-center mb-3 space-y-1">
                          <div className="text-xs font-bold text-white/80"></div>
                          <div className="text-sm font-semibold flex items-center justify-center gap-1 uppercase text-white/90">
                            <Tv className="w-3.5 h-3.5" /> + DE 90 CANAIS DE TV
                          </div>
                        </div>
                        <div className="flex items-center justify-center gap-3 bg-white/10 rounded-xl px-4 py-4 mb-5">
                          {plan.logos.map((logo, i) => (
                            <div key={i} className="flex items-center gap-3">
                              {i > 0 && (
                                <span className="text-white/70 text-xs font-bold">
                                  {plan.separator || "+"}
                                </span>
                              )}
                              <img src={logo} alt={plan.streaming} className="h-12 w-auto object-contain" />
                            </div>
                          ))}
                        </div>
                        <div className="text-center mb-6">
                          <div className="flex items-baseline justify-center gap-0.5">
                            <span className="text-sm text-white/60">R$</span>
                            <span className="font-heading text-5xl font-bold text-[#e4d101]">{plan.price}</span>
                            <span className="text-sm text-[#e4d101]">{plan.cents}/mês</span>
                          </div>
                        </div>
                        <Button variant={plan.popular ? "cta" : "outline"} className="w-full" size="lg">
                          Eu quero!
                          <ChevronRight className="w-4 h-4 ml-1" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                {/* INTERNET TAB */}
                <TabsContent value="internet">
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {internetPlans.map((plan) => (
                      <div
                        key={plan.speed}
                        className={`relative rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 ${
                          plan.popular
                            ? "ring-2 ring-accent shadow-glow scale-[1.03]"
                            : "border border-white/10 shadow-card hover:shadow-card-hover"
                        }`}
                        style={{ background: "linear-gradient(135deg, hsl(220 72% 48%), hsl(225 90% 28%))" }}
                      >
                        {plan.popular && (
                          <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-accent-foreground text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap bg-primary">
                            Mais Popular
                          </div>
                        )}
                        <div className="text-center mb-3">
                          <div className="font-heading text-5xl font-bold text-[#e4d101]">{plan.speed}</div>
                          <div className="text-xs font-medium text-primary-foreground">
                            {plan.speed === "1 Giga" ? "" : "MEGA"}
                          </div>
                        </div>
                        <div className="bg-white/10 rounded-lg px-3 py-1.5 text-center mb-3">
                          <span className="text-xs font-semibold text-white/90 flex items-center justify-center gap-1">
                            <Tv className="w-3.5 h-3.5" /> + DE 90 CANAIS DE TV
                          </span>
                        </div>
                        <div className="flex items-center justify-center gap-2 bg-white/10 rounded-xl px-4 py-4 mb-5">
                          <Wifi className="w-5 h-5 text-[#e4d101]" />
                          <span className="text-sm font-semibold text-white/90">Internet + TV</span>
                        </div>
                        <div className="text-center mb-6">
                          <div className="flex items-baseline justify-center gap-0.5">
                            <span className="text-sm text-white/60">R$</span>
                            <span className="font-heading text-5xl font-bold text-[#e4d101]">{plan.price}</span>
                            <span className="text-sm text-[#e4d101]">{plan.cents}/mês</span>
                          </div>
                        </div>
                        <Button variant={plan.popular ? "cta" : "outline"} className="w-full" size="lg">
                          Eu quero!
                          <ChevronRight className="w-4 h-4 ml-1" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>

              {/* Included features */}
              <div className="bg-secondary/70 rounded-2xl p-8 max-w-4xl mx-auto text-center">
                <h3 className="font-heading text-xl font-bold text-foreground mb-4">
                  Todos os planos NW3 incluem
                </h3>
                <div className="flex flex-wrap justify-center gap-6">
                  {[
                    "Instalação gratuita",
                    "Roteador Wi-Fi incluso",
                    "100% Fibra Óptica",
                    "Suporte 24h",
                    "90+ canais de TV",
                    "Wi-Fi de alta performance",
                  ].map((item) => (
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
        </>
      ) : (
        <BusinessPlans />
      )}

      <CoverageSection />
    </>
  );
};

export default Internet;
