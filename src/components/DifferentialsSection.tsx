import { Headset, Signal, Wrench, MapPin, Heart } from "lucide-react";

const items = [
  { icon: Signal, title: "Alta Estabilidade", desc: "Conexão que não cai, mesmo nos horários de pico" },
  { icon: Headset, title: "Suporte Humanizado", desc: "Atendimento real, sem robôs, 24 horas" },
  { icon: Wrench, title: "Técnicos Especializados", desc: "Equipe qualificada na sua porta" },
  { icon: MapPin, title: "Atendimento Local", desc: "Estamos perto de você" },
  { icon: Heart, title: "100% Regional", desc: "Empresa da sua região, feita para você" },
];

const DifferentialsSection = () => {
  return (
    <section id="diferenciais" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-accent" />
            <span className="text-accent text-xs font-medium tracking-[0.2em] uppercase">Diferenciais</span>
            <div className="w-8 h-px bg-accent" />
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-3">
            Por que escolher a NW3?
          </h2>
          <p className="text-muted-foreground text-base max-w-xl mx-auto">
            Mais do que um provedor — somos seu parceiro em conectividade.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
          {items.map((item) => (
            <div
              key={item.title}
              className="group bg-card border border-border rounded p-6 hover:shadow-card-hover transition-all duration-300"
            >
              <div className="w-10 h-10 rounded bg-primary/5 flex items-center justify-center mb-4">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-foreground text-sm mb-1.5">
                {item.title}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
