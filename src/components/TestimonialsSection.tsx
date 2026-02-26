import { Star, MapPin } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Eduardo M.",
    location: "Vila Itaim, SP",
    stars: 5,
    text: "Uso a NW3 há mais de 2 anos e posso dizer que é a melhor internet da região. Estável mesmo nos horários de pico, nunca fico sem conexão. Suporte atende rápido e resolve na hora.",
    source: "Google",
    date: "há 2 semanas",
  },
  {
    name: "Fernanda Costa",
    location: "Vila Itaim, SP",
    stars: 5,
    text: "Migrei de uma operadora grande pra NW3 e foi a melhor decisão. A instalação foi no dia seguinte, técnico super educado. Internet voando! Meus filhos jogam online e eu assisto streaming sem travar nada.",
    source: "Google",
    date: "há 1 mês",
  },
  {
    name: "Roberto Almeida",
    location: "Vila Itaim, SP",
    stars: 5,
    text: "Tenho uma loja e precisava de internet estável para maquininhas e sistema. A NW3 resolveu meu problema. Atendimento humanizado e preço justo. Recomendo para empresas!",
    source: "Google",
    date: "há 3 semanas",
  },
  {
    name: "Juliana Pereira",
    location: "Vila Itaim, SP",
    stars: 5,
    text: "O que mais gosto da NW3 é o atendimento. Quando precisei de suporte, me atenderam em minutos. Coisa rara hoje em dia! Internet nunca cai e o preço é muito bom.",
    source: "Google",
    date: "há 2 meses",
  },
  {
    name: "Marcos Vinícius S.",
    location: "Vila Itaim, SP",
    stars: 4,
    text: "Internet muito boa, uso o plano de 600 mega e a velocidade é real. Faço home office e videoconferência o dia todo sem problemas. Suporte local faz toda a diferença.",
    source: "Google",
    date: "há 1 mês",
  },
  {
    name: "Patrícia Oliveira",
    location: "Vila Itaim, SP",
    stars: 5,
    text: "Já passei por vários provedores e a NW3 é disparada a melhor. Fibra óptica de verdade, sem aquelas quedas que a gente tinha antes. E o preço cabe no bolso!",
    source: "Google",
    date: "há 3 meses",
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
              <div className="flex items-center justify-between mb-3">
                <div className="flex gap-0.5">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                  {Array.from({ length: 5 - t.stars }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-muted" />
                  ))}
                </div>
                <span className="text-xs text-muted-foreground font-medium bg-muted px-2 py-0.5 rounded-full">
                  {t.source}
                </span>
              </div>
              <p className="text-foreground mb-4 text-sm leading-relaxed">"{t.text}"</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-foreground text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {t.location}
                  </p>
                </div>
                <span className="text-xs text-muted-foreground">{t.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
