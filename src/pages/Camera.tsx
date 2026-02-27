import { Camera as CameraIcon, Smartphone, Cloud, ShieldCheck, ChevronRight, Check, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";
import CoverageSection from "@/components/CoverageSection";
import cameraBanner from "@/assets/banners/camera-banner.jpg";

const cameraPlans = [
  {
    name: "Básico",
    cameras: "2 câmeras",
    price: "129",
    cents: ",90",
    features: ["2 Câmeras Full HD", "Acesso pelo celular", "Gravação local", "Instalação inclusa"],
    popular: false,
  },
  {
    name: "Intermediário",
    cameras: "4 câmeras",
    price: "199",
    cents: ",90",
    features: ["4 Câmeras Full HD", "Acesso pelo celular", "Gravação em nuvem", "Instalação inclusa", "Visão noturna"],
    popular: true,
  },
  {
    name: "Avançado",
    cameras: "6+ câmeras",
    price: "Sob consulta",
    cents: "",
    features: ["6+ Câmeras Full HD", "Acesso pelo celular", "Gravação em nuvem", "Instalação inclusa", "Visão noturna", "Detecção de movimento"],
    popular: false,
  },
];

const Camera = () => {
  return (
    <>
      {/* Banner com imagem */}
      <section className="relative min-h-[380px] lg:min-h-[440px] flex items-center overflow-hidden">
        <img src={cameraBanner} alt="NW3 Câmera" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative container mx-auto px-4 text-center">
          <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mx-auto mb-6">
            <CameraIcon className="w-8 h-8 text-accent" />
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-4">
            NW3 <span className="text-gradient">Câmera</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Visualize sua casa ou negócio de qualquer lugar, de forma prática e rápida pelo celular.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Visualize sua casa ou negócio <span className="text-gradient">de qualquer lugar</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Câmeras de alta definição com instalação profissional. Acesse de forma prática e rápida pelo celular, onde você estiver.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  { icon: CameraIcon, text: "Câmeras Full HD com visão noturna" },
                  { icon: Smartphone, text: "Acesso remoto pelo celular 24h" },
                  { icon: Cloud, text: "Gravação em nuvem disponível" },
                  { icon: ShieldCheck, text: "Ideal para residências e empresas" },
                  { icon: Monitor, text: "Visualização em tempo real" },
                ].map((item) => (
                  <li key={item.text} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-card rounded-3xl p-8 border border-border shadow-card text-center">
              <div className="w-24 h-24 rounded-3xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <CameraIcon className="w-12 h-12 text-primary" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-2">NW3 Câmera</h3>
              <p className="text-muted-foreground text-sm max-w-xs mx-auto">
                Veja o que acontece na sua casa ou empresa em tempo real, de forma prática e segura.
              </p>
            </div>
          </div>

          {/* Plans */}
          <div className="text-center mb-10">
            <h2 className="font-heading text-3xl font-bold text-foreground mb-2">
              Planos de <span className="text-gradient">Câmera</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {cameraPlans.map((plan) => (
              <div
                key={plan.name}
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
                <h3 className="font-heading text-xl font-bold text-foreground text-center mb-1">{plan.name}</h3>
                <p className="text-primary text-sm font-semibold text-center mb-4">{plan.cameras}</p>

                {plan.price !== "Sob consulta" ? (
                  <div className="text-center mb-6">
                    <div className="flex items-baseline justify-center gap-0.5">
                      <span className="text-sm text-muted-foreground">R$</span>
                      <span className="font-heading text-4xl font-bold text-foreground">{plan.price}</span>
                      <span className="text-sm text-muted-foreground">{plan.cents} /mês</span>
                    </div>
                  </div>
                ) : (
                  <div className="text-center mb-6">
                    <span className="font-heading text-2xl font-bold text-foreground">Sob consulta</span>
                  </div>
                )}

                <ul className="space-y-2 mb-6">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-foreground">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <Button variant={plan.popular ? "cta" : "outline"} className="w-full">
                  Solicitar Orçamento
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CoverageSection />
    </>
  );
};

export default Camera;
