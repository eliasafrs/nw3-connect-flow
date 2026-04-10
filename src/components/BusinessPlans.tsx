import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Building2, Server, Shield, Headset, Globe, Wifi, Phone, Cctv,
  Clock, ChevronRight, Check, Zap, Award, Users, ArrowUpDown, Link as LinkIcon
} from "lucide-react";
import businessHero from "@/assets/banners/business-hero.jpg";

const segments = [
  { id: "simetrica", label: "Banda Simétrica", icon: ArrowUpDown },
  { id: "dedicado", label: "Link Dedicado", icon: LinkIcon },
] as const;

type Segment = typeof segments[number]["id"];

const plans: Record<Segment, {
  headline: string;
  subtitle: string;
  options: {
    speed: string;
    sla: string;
    price: string;
    cents: string;
    features: string[];
  }[];
}> = {
  simetrica: {
    headline: "Upload igual ao Download",
    subtitle: "Banda simétrica ideal para empresas que enviam arquivos pesados, fazem videoconferências e usam sistemas em nuvem.",
    options: [
      {
        speed: "300 Mega",
        sla: "SLA de atendimento: 12 horas",
        price: "349",
        cents: ",00",
        features: ["300 Mbps Download + 300 Mbps Upload", "Wi-Fi 6 + 1 IP Fixo", "1 linha telefônica fixa", "Suporte prioritário"],
      },
      {
        speed: "500 Mega",
        sla: "SLA de atendimento: 8 horas",
        price: "499",
        cents: ",00",
        features: ["500 Mbps Download + 500 Mbps Upload", "Wi-Fi 6 + 1 IP Fixo", "1 linha telefônica fixa", "Suporte VIP 24h"],
      },
    ],
  },
  dedicado: {
    headline: "Internet 100% dedicada ao seu negócio",
    subtitle: "Link dedicado com banda garantida, IP fixo e SLA agressivo para operações críticas.",
    options: [
      {
        speed: "1 Giga",
        sla: "SLA de atendimento: 4 horas",
        price: "1.499",
        cents: ",90",
        features: ["1 Gbps dedicado e simétrico", "1 IP Fixo", "SLA 99,5% de disponibilidade", "Gerente de conta dedicado"],
      },
      {
        speed: "2 Gigas",
        sla: "SLA de atendimento: 4 horas",
        price: "2.999",
        cents: ",90",
        features: ["2 Gbps dedicados e simétricos", "1 IP Fixo", "SLA 99,7% de disponibilidade", "Gerente de conta dedicado"],
      },
    ],
  },
};

const highlights = [
  { icon: Clock, label: "Suporte", desc: "Prioritário" },
  { icon: Wifi, label: "Garantia", desc: "de Banda" },
  { icon: Server, label: "Recursos", desc: "Extras" },
  { icon: Shield, label: "Segurança", desc: "Avançada" },
];

const BusinessPlans = () => {
  const [activeSegment, setActiveSegment] = useState<Segment>("simetrica");
  const currentPlan = plans[activeSegment];

  return (
    <>
      {/* Hero Banner Empresarial */}
      <section className="relative min-h-[480px] lg:min-h-[540px] flex items-center overflow-hidden">
        <img src={businessHero} alt="NW3 Negócios" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-hero opacity-80" />
        <div className="relative container mx-auto px-4 text-center py-16">
          <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm border border-accent/30 px-4 py-1.5 rounded-full text-sm font-medium mb-6 text-primary-foreground">
            <Building2 className="w-4 h-4" />
            NW3 Negócios
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4 max-w-4xl mx-auto leading-tight">
            Acelere seu negócio com{" "}
            <span className="text-gradient">conectividade e tecnologia</span>
          </h1>
          <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto mb-8">
            O NW3 Negócios foi criado para micro, pequenas e grandes empresas. Garantia de banda,
            atendimento prioritário e recursos como telefonia fixa, câmeras e Wi-Fi avançado.
          </p>

          {/* Highlights bar */}
          <div className="inline-flex flex-wrap justify-center gap-6 bg-primary-foreground/10 backdrop-blur-md border border-primary-foreground/15 rounded-2xl px-8 py-5">
            {highlights.map((h) => (
              <div key={h.label} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
                  <h.icon className="w-5 h-5 text-accent" />
                </div>
                <div className="text-left">
                  <p className="text-primary-foreground/50 text-xs uppercase tracking-wider">{h.label}</p>
                  <p className="text-primary-foreground font-semibold text-sm">{h.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Contratar */}
      <section className="bg-accent py-8">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-center gap-6">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-accent-foreground">
            Quero <span className="text-primary">NW3</span> para o meu <span className="text-primary">Negócio</span>
          </h2>
          <Button
            variant="default"
            size="lg"
            className="rounded-full text-base"
            onClick={() => window.open("https://wa.me/551125862995?text=Olá, gostaria de saber mais sobre os planos empresariais da NW3", "_blank")}
          >
            <Headset className="w-5 h-5 mr-2" />
            Contratar agora
          </Button>
        </div>
      </section>

      {/* Segment Tabs + Plans */}
      <section className="py-20 lg:py-28 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-2">
              Conheça os segmentos do <span className="text-gradient">NW3 Negócios</span>
            </h2>
            <p className="text-muted-foreground">Escolha o plano ideal para a sua empresa</p>
          </div>

          {/* Tabs */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-card border border-border rounded-2xl p-1.5 shadow-card gap-1">
              {segments.map((seg) => (
                <button
                  key={seg.id}
                  onClick={() => setActiveSegment(seg.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                    activeSegment === seg.id
                      ? "bg-primary text-primary-foreground shadow-lg"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                >
                  <seg.icon className="w-4 h-4" />
                  {seg.label}
                </button>
              ))}
            </div>
          </div>

          {/* Plan details */}
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-2">
                {currentPlan.headline}
              </h3>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto">{currentPlan.subtitle}</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {currentPlan.options.map((opt, i) => (
                <div
                  key={i}
                  className={`relative bg-card rounded-2xl border-2 p-8 transition-all duration-300 hover:-translate-y-1 ${
                    i === 1
                      ? "border-accent shadow-glow"
                      : "border-border shadow-card hover:shadow-card-hover"
                  }`}
                >
                  {i === 1 && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-bold px-4 py-1 rounded-full uppercase">
                      Mais popular
                    </div>
                  )}

                  {/* Speed */}
                  <div className="bg-primary/10 rounded-xl p-4 text-center mb-6">
                    <span className="font-heading text-4xl font-bold text-primary">{opt.speed.split(" ")[0]}</span>
                    <span className="font-heading text-lg font-bold text-primary ml-2">{opt.speed.split(" ")[1]}</span>
                  </div>

                  {/* SLA */}
                  <p className="text-sm text-muted-foreground text-center mb-4 flex items-center justify-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    {opt.sla}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2.5 mb-6">
                    {opt.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-foreground">
                        <Check className="w-4 h-4 text-accent flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* Price */}
                  <div className="text-center mb-6">
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-muted-foreground text-lg">R$</span>
                      <span className="font-heading text-5xl font-bold text-yellow-400">{opt.price}</span>
                      <div className="text-left">
                        <span className="text-muted-foreground text-xl block leading-none">{opt.cents}</span>
                        <span className="text-muted-foreground text-sm">/mês</span>
                      </div>
                    </div>
                  </div>

                  <Button
                    variant={i === 1 ? "cta" : "outline"}
                    className="w-full rounded-xl"
                    onClick={() => window.open("https://wa.me/551125862995?text=Olá, tenho interesse no plano empresarial " + activeSegment + " " + opt.speed, "_blank")}
                  >
                    Eu quero!
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>

                  <p className="text-xs text-muted-foreground/60 text-center mt-3">*mediante análise de crédito</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Camera Add-on */}
      <section className="py-20 lg:py-28 bg-hero">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <span className="inline-flex items-center gap-2 text-accent font-semibold text-sm uppercase tracking-wider mb-3">
                <Cctv className="w-4 h-4" /> CAMERA DE SEGURANÇA
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
                Adicione <span className="text-gradient">câmera de segurança</span> ao seu plano
              </h2>
              <p className="text-primary-foreground/70 text-lg mb-4">
                Transforme seu espaço em um ambiente seguro e conectado com as câmeras da NW3.
              </p>
              <p className="text-primary-foreground/60 mb-8">
                A partir de <span className="text-accent font-bold text-xl">R$ 39,90/mês</span>*, escolha o número de câmeras
                internas ou externas, com gravação em nuvem por até 3 dias. Ativação rápida e acompanhe tudo pelo celular.
              </p>
              <Button
                variant="cta"
                size="lg"
                className="rounded-full"
                onClick={() => window.open("https://wa.me/551125862995?text=Olá, gostaria de saber mais sobre câmeras para minha empresa", "_blank")}
              >
                Contratar agora
                <ChevronRight className="w-5 h-5 ml-1" />
              </Button>
              <p className="text-xs text-primary-foreground/40 mt-3">*Consulte taxa de ativação</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Cctv, title: "Full HD", desc: "Câmeras de alta definição" },
                { icon: Globe, title: "Acesso Remoto", desc: "Monitore de qualquer lugar" },
                { icon: Shield, title: "Nuvem Segura", desc: "Até 3 dias de gravação" },
                { icon: Phone, title: "App Exclusivo", desc: "Controle pelo celular" },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-xl p-6 text-center hover:bg-primary-foreground/10 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mx-auto mb-3">
                    <item.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h4 className="font-heading font-semibold text-primary-foreground mb-1">{item.title}</h4>
                  <p className="text-sm text-primary-foreground/50">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BusinessPlans;
