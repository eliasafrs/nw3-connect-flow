import { FileText, Gauge, BookOpen, User, Scale, Headset } from "lucide-react";

const items = [
  { icon: FileText, title: "2ª via do boleto", href: "#" },
  { icon: Gauge, title: "Teste de velocidade", href: "#" },
  { icon: BookOpen, title: "Manual do cliente", href: "/manual-do-cliente" },
  { icon: User, title: "Área do cliente", href: "http://sgp.nw3internet.com.br:8000/accounts/central/login" },
  { icon: Scale, title: "Documentos Legais", href: "#" },
  { icon: Headset, title: "Ouvidoria NW3", href: "https://wa.me/551125862995" },
];

const SelfServiceSection = () => {
  return (
    <section id="autoatendimento" className="py-20 lg:py-28 bg-secondary/50">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-2">
            Autoatendimento <span className="text-gradient">Cliente NW3</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Resolva o que precisa de forma rápida e prática.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {items.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="bg-card rounded-xl p-6 border border-border shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 text-center group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-foreground text-sm">{item.title}</h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SelfServiceSection;
