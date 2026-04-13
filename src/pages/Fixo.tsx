import { Phone, PhoneCall, Shield, Clock, Check, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import CoverageSection from "@/components/CoverageSection";
import fixoBanner from "@/assets/banners/fixo-banner.jpg";

const Fixo = () => {
  return (
    <>
      {/* Banner com imagem */}
      <section className="relative min-h-[380px] lg:min-h-[440px] flex items-center overflow-hidden">
        <img src={fixoBanner} alt="Telefone Fixo" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative container mx-auto px-4 text-center">
          <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mx-auto mb-6">
            <Phone className="w-8 h-8 text-accent" />
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-4">
            Telefone <span className="text-gradient">Fixo</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Ligações ilimitadas para fixos locais e nacionais com a qualidade da fibra óptica.
          </p>
        </div>
      </section>

      {/* Main section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Telefone fixo com <span className="text-gradient">qualidade digital</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Mantenha seu número fixo com a qualidade e estabilidade da nossa rede de fibra óptica. Ideal para residências e empresas.
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
            </div>

            {/* Price card */}
            <div className="bg-card rounded-3xl p-8 border border-primary shadow-glow text-center">
              <div className="w-20 h-20 rounded-3xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Phone className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-2">NW3 Fixo</h3>
              <p className="text-muted-foreground text-sm mb-6">Ligações ilimitadas para fixos</p>

              <div className="bg-accent/10 rounded-2xl p-6 mb-6">
                <span className="text-sm text-muted-foreground">A partir de</span>
                <div className="flex items-baseline justify-center gap-0.5 mt-1">
                  <span className="text-lg text-muted-foreground">R$</span>
                  <span className="font-heading text-6xl font-bold text-primary">19</span>
                  <div className="text-left">
                    <span className="text-xl block leading-none text-primary">,90</span>
                    <span className="text-sm text-muted-foreground">/mês</span>
                  </div>
                </div>
              </div>

              <ul className="space-y-2 mb-6 text-left max-w-xs mx-auto">
                {[
                  "Ligações ilimitadas fixo-fixo local",
                  "Ligações nacionais para fixo",
                  "Qualidade digital HD",
                  "Combo com internet disponível",
                  "Sem taxas de instalação",
                ].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-foreground">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <Button variant="cta" className="w-full" size="lg">
                Contratar Fixo
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CoverageSection />
    </>
  );
};

export default Fixo;
