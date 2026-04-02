import { Wifi, Cctv, Phone, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  { icon: Wifi, label: "Internet", href: "/internet" },
  { icon: Cctv, label: "Câmera", href: "/camera" },
  { icon: Phone, label: "Fixo", href: "/fixo" },
];

const ServicesGrid = () => {
  return (
    <section className="py-20 lg:py-28 bg-background relative overflow-hidden">
      <div className="relative container mx-auto px-4 text-center">
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-3">
          Quem tem <span className="text-primary">NW3</span>, tem tudo!
        </h2>
        <p className="text-muted-foreground text-lg mb-14 max-w-xl mx-auto">
          Todos os serviços que você precisa em um só lugar.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {services.map((s) => (
            <Link
              key={s.label}
              to={s.href}
              className="group bg-card border border-border rounded-2xl p-8 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-16 h-16 rounded-2xl bg-[hsl(48,96%,53%)] flex items-center justify-center mx-auto mb-5">
                <s.icon className="w-8 h-8 text-foreground" />
              </div>
              <h3 className="font-heading font-bold text-foreground text-lg mb-2">{s.label}</h3>
              <span className="inline-flex items-center gap-1 text-xs text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
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
