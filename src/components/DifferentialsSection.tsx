import { Headset, Signal, Wrench, Heart, Handshake } from "lucide-react";

const items = [
  { icon: Signal, title: "Alta Estabilidade", desc: "Conexão que não cai, mesmo nos horários de pico" },
  { icon: Headset, title: "Suporte híbrido", desc: "Experiência de atendimento com IA + especialistas" },
  { icon: Wrench, title: "Técnicos Especializados", desc: "Instalação e manutenção com profissionais qualificados" },
  
  { icon: Heart, title: "100% Regional", desc: "Empresa da sua região, próxima de você" },
  { icon: Handshake, title: "Sem Fidelidade", desc: "Liberdade para ficar porque confia, não porque deve" },
];

const DifferentialsSection = () => {
  return (
    <section id="diferenciais" className="py-20 lg:py-28 bg-primary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-primary-foreground mb-3">
            Por que escolher a <span className="text-gradient">NW3</span>?
          </h2>
          <p className="text-primary-foreground/50 text-lg max-w-xl mx-auto">
            Mais do que um provedor — somos seu parceiro em conectividade.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
          {items.map((item) => (
              <div key={item.title} className="group relative bg-primary-foreground/[0.04] border border-primary-foreground/[0.08] rounded-xl p-6 hover:bg-primary-foreground/[0.08] transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-accent/15 flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <h3 className="font-heading font-bold text-primary-foreground text-sm mb-1.5">
                  {item.title}
                </h3>
                <p className="text-xs text-primary-foreground/40 leading-relaxed">{item.desc}</p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
