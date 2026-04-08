import { Wifi, Cctv, Phone, MonitorPlay, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  { icon: Wifi, label: "Internet", href: "/internet", color: "from-primary to-primary-glow" },
  { icon: Cctv, label: "Câmera", href: "/camera", color: "from-primary to-accent" },
  { icon: Phone, label: "Fixo", href: "/fixo", color: "from-primary to-primary-glow" },
  { icon: AppWindow, label: "Streaming", href: "/aplicativos", color: "from-primary to-accent" },
];

const ServicesGrid = () => {
  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-accent/5 blur-3xl" />

      <div className="relative container mx-auto px-4 text-center">
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-3">
          Quem tem <span className="text-gradient">NW3</span>, tem tudo!
        </h2>
        <p className="text-muted-foreground text-lg mb-14 max-w-xl mx-auto">
          Todos os serviços que você precisa em um só lugar.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {services.map((s) => (
            <Link
              key={s.label}
              to={s.href}
              className="group backdrop-blur-sm border border-border rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 bg-primary"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center mx-auto mb-5 shadow-glow`}>
                <s.icon className="w-8 h-8 border-primary-foreground text-[#f7c602]" />
              </div>
              <h3 className="font-heading font-bold text-lg mb-2 text-primary-foreground">{s.label}</h3>
              <span className="inline-flex items-center gap-1 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity text-primary-foreground">
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
