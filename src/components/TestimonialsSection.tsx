import { Star, MapPin, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Eduardo M.",
    location: "Vila Itaim, SP",
    stars: 5,
    text: "Uso a NW3 há mais de 2 anos e posso dizer que é a melhor internet da região. Estável mesmo nos horários de pico, nunca fico sem conexão.",
    source: "Google",
    date: "há 2 semanas",
  },
  {
    name: "Fernanda Costa",
    location: "Vila Itaim, SP",
    stars: 5,
    text: "Migrei de uma operadora grande pra NW3 e foi a melhor decisão. A instalação foi no dia seguinte, técnico super educado. Internet voando!",
    source: "Google",
    date: "há 1 mês",
  },
  {
    name: "Roberto Almeida",
    location: "Vila Itaim, SP",
    stars: 5,
    text: "Tenho uma loja e precisava de internet estável para maquininhas e sistema. A NW3 resolveu meu problema. Atendimento humanizado e preço justo.",
    source: "Google",
    date: "há 3 semanas",
  },
  {
    name: "Juliana Pereira",
    location: "Vila Itaim, SP",
    stars: 5,
    text: "O que mais gosto da NW3 é o atendimento. Quando precisei de suporte, me atenderam em minutos. Coisa rara hoje em dia!",
    source: "Google",
    date: "há 2 meses",
  },
  {
    name: "Marcos Vinícius S.",
    location: "Vila Itaim, SP",
    stars: 4,
    text: "Internet muito boa, uso o plano de 600 mega e a velocidade é real. Faço home office e videoconferência o dia todo sem problemas.",
    source: "Google",
    date: "há 1 mês",
  },
  {
    name: "Patrícia Oliveira",
    location: "Vila Itaim, SP",
    stars: 5,
    text: "Já passei por vários provedores e a NW3 é disparada a melhor. Fibra óptica de verdade, sem aquelas quedas que a gente tinha antes.",
    source: "Google",
    date: "há 3 meses",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-secondary/40">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-accent" />
            <span className="text-accent text-xs font-medium tracking-[0.2em] uppercase">Depoimentos</span>
            <div className="w-8 h-px bg-accent" />
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-3">
            Quem usa, recomenda
          </h2>
          <p className="text-muted-foreground text-base">
            Veja o que nossos clientes dizem sobre a NW3.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-card rounded p-6 border border-border shadow-card hover:shadow-card-hover transition-all duration-300 relative"
            >
              <Quote className="w-7 h-7 text-accent/10 absolute top-5 right-5" />
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-accent text-accent" />
                ))}
                {Array.from({ length: 5 - t.stars }).map((_, i) => (
                  <Star key={i} className="w-3 h-3 text-muted" />
                ))}
              </div>
              <p className="text-foreground/80 mb-5 text-sm leading-relaxed">"{t.text}"</p>
              <div className="flex items-center justify-between border-t border-border pt-4">
                <div>
                  <p className="font-heading font-semibold text-foreground text-sm">{t.name}</p>
                  <p className="text-[11px] text-muted-foreground flex items-center gap-1">
                    <MapPin className="w-2.5 h-2.5" />
                    {t.location}
                  </p>
                </div>
                <span className="text-[10px] text-muted-foreground font-medium bg-secondary px-2 py-0.5 rounded-sm">
                  {t.source} · {t.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
