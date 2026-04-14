import { Building2, Target, Eye, Heart, Users, Award, Wifi, MapPin, Headset, Signal } from "lucide-react";
import PageBanner from "@/components/PageBanner";

const values = [
  { icon: Heart, title: "Compromisso", desc: "Cuidamos de cada cliente como se fosse o único. Compromisso genuíno com sua satisfação." },
  { icon: Users, title: "Proximidade", desc: "Somos uma empresa local, conhecemos nossa comunidade e estamos sempre por perto." },
  { icon: Award, title: "Qualidade", desc: "Investimos em tecnologia de ponta para entregar a melhor experiência em conectividade." },
  { icon: Signal, title: "Inovação", desc: "Buscamos constantemente novas soluções para conectar você ao que há de melhor." },
  { icon: Headset, title: "Transparência", desc: "Honestidade e clareza em todas as nossas relações com clientes e parceiros." },
  { icon: MapPin, title: "Responsabilidade Social", desc: "Contribuímos para o desenvolvimento da nossa região através da inclusão digital." },
];

const Sobre = () => {
  return (
    <>
      <PageBanner
        icon={Building2}
        title="Sobre a"
        highlight="NW3 Internet"
        description="Conheça nossa história, missão, visão e valores que nos guiam todos os dias."
      />

      {/* About */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Quem somos
              </h2>
              <p className="text-muted-foreground text-lg mb-4">
                A NW3 Internet é um provedor regional de internet fibra óptica comprometido em levar conexão de alta qualidade para residências e empresas da região.
              </p>
              <p className="text-muted-foreground text-lg mb-4">
                Com uma equipe dedicada e tecnologia de ponta, oferecemos planos de internet, TV com mais de 90 canais, telefone fixo, câmeras de segurança e os melhores aplicativos de streaming.
              </p>
              <p className="text-muted-foreground text-lg">
                Nosso diferencial é o atendimento humanizado e a presença local, garantindo suporte rápido e soluções personalizadas para cada cliente.
              </p>
            </div>

            <div className="bg-card rounded-3xl p-8 border border-border shadow-card">
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Wifi className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-foreground mb-1">100% Fibra Óptica</h4>
                    <p className="text-sm text-muted-foreground">Rede moderna e de alta performance</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-foreground mb-1">Equipe Local</h4>
                    <p className="text-sm text-muted-foreground">Técnicos da região, atendimento rápido</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Headset className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-foreground mb-1">Suporte todos os dias </h4>
                    <p className="text-sm text-muted-foreground">Atendimento real com IA e especialistas pronto para atende-lo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision */}
      <section className="py-20 lg:py-28 bg-hero">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid sm:grid-cols-2 gap-8 mb-20">
            <div className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-8">
              <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center mb-5">
                <Target className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-primary-foreground mb-4">Nossa Missão</h3>
              <p className="text-primary-foreground/70 text-lg leading-relaxed">
                Conectar pessoas e empresas com internet de alta qualidade, oferecendo serviços completos de telecomunicações com atendimento humanizado e preço justo, contribuindo para o desenvolvimento digital da nossa região.
              </p>
            </div>

            <div className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-8">
              <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center mb-5">
                <Eye className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-primary-foreground mb-4">Nossa Visão</h3>
              <p className="text-primary-foreground/70 text-lg leading-relaxed">
                Ser reconhecida como o melhor provedor de internet da região, referência em qualidade de conexão, inovação em serviços e excelência no atendimento ao cliente.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
              Nossos <span className="text-gradient">Valores</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-xl p-6 hover:bg-primary-foreground/10 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/30 flex items-center justify-center mb-4">
                  <v.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-heading font-bold text-primary-foreground text-lg mb-2">{v.title}</h3>
                <p className="text-sm text-primary-foreground/60">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Sobre;
