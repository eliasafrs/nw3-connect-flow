import { Headset, Signal, Wrench, MapPin, Heart } from "lucide-react";

const items = [
  { icon: Headset, title: "Suporte Rápido e Humanizado", desc: "Atendimento real, sem robôs" },
  { icon: Signal, title: "Alta Estabilidade", desc: "Conexão que não cai" },
  { icon: Wrench, title: "Técnicos Especializados", desc: "Equipe qualificada e ágil" },
  { icon: MapPin, title: "Atendimento Local", desc: "Estamos perto de você" },
  { icon: Heart, title: "100% Regional", desc: "Empresa da sua região" },
];

const DifferentialsSection = () => {
  return (
    <section id="diferenciais" className="py-20 lg:py-28 bg-hero">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
          Por que escolher a <span className="text-gradient">NW3 Internet</span>?
        </h2>
        <p className="text-primary-foreground/60 text-lg mb-14 max-w-2xl mx-auto">
          Mais do que um provedor, somos seu parceiro em conectividade.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {items.map((item) => (
            <div
              key={item.title}
              className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-xl p-6 hover:bg-primary-foreground/10 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/30 flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-6 h-6 text-primary-glow" />
              </div>
              <h3 className="font-heading font-semibold text-primary-foreground text-sm mb-1">{item.title}</h3>
              <p className="text-xs text-primary-foreground/50">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
