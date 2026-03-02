import { Wifi, Camera, Tv, Phone, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  { icon: Wifi, label: "Internet", href: "/internet", desc: "Planos de 500 a 1 Giga" },
  { icon: Camera, label: "Câmera", href: "/camera", desc: "Monitoramento inteligente" },
  { icon: Tv, label: "TV & Streaming", href: "/tv-streaming", desc: "Seus canais favoritos" },
  { icon: Phone, label: "Fixo", href: "/fixo", desc: "Ligações ilimitadas" },
];

const ServicesGrid = () => {
  return (
    <section className="py-20 lg:py-28 bg-primary relative overflow-hidden">
      <div className="relative container mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-8 h-px bg-accent" />
          <span className="text-accent text-xs font-medium tracking-[0.2em] uppercase">Nossos Serviços</span>
          <div className="w-8 h-px bg-accent" />
        </div>
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary-foreground mb-3">
          Tudo que você precisa
        </h2>
        <p className="text-primary-foreground/40 text-base mb-14 max-w-lg mx-auto">
          Soluções completas de conectividade em um só lugar.
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {services.map((s) => (
            <Link
              key={s.label}
              to={s.href}
              className="group bg-primary-foreground/[0.03] border border-primary-foreground/[0.08] rounded p-8 hover:bg-primary-foreground/[0.06] transition-all duration-300"
            >
              <div className="w-14 h-14 rounded bg-accent/10 flex items-center justify-center mx-auto mb-5">
                <s.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-heading font-semibold text-primary-foreground text-lg mb-1">{s.label}</h3>
              <p className="text-primary-foreground/30 text-xs mb-3">{s.desc}</p>
              <span className="inline-flex items-center gap-1 text-[11px] text-accent font-medium opacity-0 group-hover:opacity-100 transition-opacity tracking-wide">
                Ver mais <ChevronRight className="w-3 h-3" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
