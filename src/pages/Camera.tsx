import { Cctv as CameraIcon, Smartphone, Cloud, ShieldCheck, ChevronRight, Check, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";
import CoverageSection from "@/components/CoverageSection";
import cameraAppBanner from "@/assets/banners/camera-app-banner.jpg";

const cameraPlans = [
  {
    name: "Básico",
    cameras: "2 câmeras",
    price: "79",
    cents: ",90",
    features: ["2 Câmeras Full HD", "Acesso pelo celular", "Gravação em nuvem (3 dias)"],
    popular: false,
  },
  {
    name: "Intermediário",
    cameras: "4 câmeras",
    price: "159",
    cents: ",90",
    features: ["4 Câmeras Full HD", "Acesso pelo celular", "Gravação em nuvem (3 dias)"],
    popular: true,
  },
  {
    name: "Avançado",
    cameras: "6 câmeras",
    price: "239",
    cents: ",90",
    features: ["6 Câmeras Full HD", "Acesso pelo celular", "Gravação em nuvem (3 dias)"],
    popular: false,
  },
];

const Camera = () => {
  return (
    <>
      {/* Banner estilo split-screen */}
      <section className="relative min-h-[480px] lg:min-h-[540px] overflow-hidden">
        <div className="grid lg:grid-cols-2 min-h-[480px] lg:min-h-[540px]">
          {/* Lado esquerdo - Texto */}
          <div className="bg-hero flex items-center px-8 lg:px-16 py-16">
            <div>
              <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm border border-accent/30 px-4 py-1.5 rounded-full text-sm font-medium mb-6 text-primary-foreground">
                <CameraIcon className="w-4 h-4" />
                NW3 Câmera
              </div>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4 leading-tight">
                Sua casa na<br />
                <span className="text-gradient">palma da mão</span>
              </h1>
              <p className="text-primary-foreground/70 text-lg max-w-md mb-8">
                Visualize sua casa ou negócio de qualquer lugar, de forma prática e rápida pelo celular.
              </p>
              <div className="flex items-baseline gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/15 rounded-2xl px-6 py-4 inline-flex mb-6">
                <span className="text-primary-foreground/50 text-sm">Planos a partir de</span>
                <span className="text-primary-foreground/60 text-lg">R$</span>
                <span className="font-heading text-4xl font-bold text-accent">39</span>
                <span className="text-accent text-xl">,90</span>
                <span className="text-primary-foreground/50 text-sm">/mês</span>
              </div>
              <div className="block">
                <Button
                  variant="cta"
                  size="lg"
                  className="rounded-full"
                  onClick={() => window.open("https://wa.me/551125862995?text=Olá, gostaria de saber mais sobre câmera de segurança NW3", "_blank")}
                >
                  Quero NW3 Câmera
                  <ChevronRight className="w-5 h-5 ml-1" />
                </Button>
              </div>
            </div>
          </div>

          {/* Lado direito - Imagem */}
          <div className="relative hidden lg:block">
            <img
              src={cameraAppBanner}
              alt="Pessoa visualizando câmeras pelo aplicativo"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[hsl(225,90%,12%)] via-transparent to-transparent" />
          </div>
        </div>
      </section>
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
