import { Wifi, Camera, Tv, Phone, ChevronRight } from "lucide-react";

const services = [
  { icon: Wifi, label: "Internet", href: "#planos", color: "from-primary to-primary-glow" },
  { icon: Camera, label: "Câmera", href: "#seguranca", color: "from-primary to-accent" },
  { icon: Tv, label: "TV & Streaming", href: "#tv", color: "from-primary-dark to-primary" },
  { icon: Phone, label: "Fixo", href: "#fixo", color: "from-accent to-primary-glow" },
];

const ServicesGrid = () => {
  return (
    <section className="py-20 lg:py-28 bg-hero relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-accent/5 blur-3xl" />

      <div className="relative container mx-auto px-4 text-center">
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary-foreground mb-3">
          Quem tem <span className="text-gradient">NW3</span>, tem tudo!
        </h2>
        <p className="text-primary-foreground/50 text-lg mb-14 max-w-xl mx-auto">
          Todos os serviços que você precisa em um só lugar.
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {services.map((s) => (
            <a
              key={s.label}
              href={s.href}
              className="group bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-8 hover:bg-primary-foreground/10 transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center mx-auto mb-5 shadow-glow`}>
                <s.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-heading font-bold text-primary-foreground text-lg mb-2">{s.label}</h3>
              <span className="inline-flex items-center gap-1 text-xs text-primary-glow font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                Ver mais <ChevronRight className="w-3 h-3" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
