import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Maria Silva",
    location: "Residencial",
    stars: 5,
    text: "Melhor internet que já tive! Estável, rápida e o suporte é excelente. Recomendo demais.",
  },
  {
    name: "João Santos",
    location: "Empresarial",
    stars: 5,
    text: "Desde que migrei para a NW3, nunca mais tive problemas com queda de conexão. Essencial para meu negócio.",
  },
  {
    name: "Ana Oliveira",
    location: "Residencial",
    stars: 5,
    text: "Instalação rápida e equipe muito profissional. A internet funciona perfeitamente para streaming e jogos.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
            O que nossos clientes <span className="text-gradient">dizem</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A satisfação dos nossos clientes é nossa maior conquista.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-card rounded-xl p-6 border border-border shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground mb-4 text-sm leading-relaxed">"{t.text}"</p>
              <div>
                <p className="font-semibold text-foreground text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
