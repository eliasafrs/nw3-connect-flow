import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronLeft, Zap } from "lucide-react";
import heroSlide1 from "@/assets/hero-slide-1.jpg";
import heroSlide2 from "@/assets/hero-slide-3.jpg";
import heroSlideBusiness from "@/assets/hero-slide-business.jpg";

const slides = [
  {
    image: heroSlide1,
    tagline: "Emoção garantida",
    subtitle: "Assista ao vivo com qualidade máxima",
    speed: "700",
    label: "MEGA",
    price: "129",
    cents: ",90",
    note: "*Consulte condições",
    cta: "Eu quero!",
  },
  {
    image: heroSlide2,
    tagline: "Diversão garantida",
    subtitle: "TV Digital + Streaming no melhor combo da região.",
    speed: "600",
    label: "MEGA",
    price: "109",
    cents: ",90",
    note: "*Consulte condições",
    cta: "Conhecer Pacotes",
  },
  {
    image: heroSlideBusiness,
    tagline: "Sua empresa conectada",
    subtitle: "Internet dedicada com alta velocidade e estabilidade para o seu negócio.",
    speed: "1",
    label: "GIGA",
    price: "149",
    cents: ",90",
    note: "*Consulte condições",
    cta: "Falar com consultor",
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <section className="relative overflow-hidden min-h-[480px] sm:min-h-[560px] lg:min-h-[620px]">
      {/* Background images */}
      {slides.map((s, i) => (
        <img
          key={i}
          src={s.image}
          alt={s.tagline}
          className="absolute inset-0 w-full h-full object-cover object-top sm:object-center transition-opacity duration-700"
          style={{ opacity: i === current ? 1 : 0 }}
        />
      ))}
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[hsl(240,97%,10%)/0.92] via-[hsl(240,97%,10%)/0.75] to-[hsl(240,97%,10%)/0.3]" />

      <div className="relative container mx-auto px-4 py-16 sm:py-20 lg:py-24 flex items-center min-h-[480px] sm:min-h-[560px] lg:min-h-[620px]">
        <div className="max-w-2xl">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 bg-white/15 border border-white/30 rounded-full px-4 py-1.5 mb-6 backdrop-blur-sm">
            <Zap className="w-4 h-4 text-white" />
            <span className="text-white text-sm font-semibold tracking-wide uppercase">
              100% Fibra Óptica
            </span>
          </div>

          {/* Main heading */}
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-4">
            {slide.tagline}
          </h1>
          <p className="text-white/70 text-lg sm:text-xl mb-8 max-w-lg">
            {slide.subtitle}
          </p>

          {/* Speed + Price row */}
          <div className="flex flex-wrap items-end gap-6 mb-8">
            {slide.speed && (
              <div className="flex items-baseline gap-1">
                <span className="font-heading text-6xl lg:text-7xl font-black text-white leading-none">
                  {slide.speed}
                </span>
                <span className="font-heading text-xl font-bold text-white/80 uppercase">
                  {slide.label}
                </span>
              </div>
            )}
            <div className="border-l-2 border-white/20 pl-6">
              <div className="flex items-baseline gap-0.5">
                <span className="text-white/60 text-sm">R$</span>
                <span className="font-heading text-5xl font-black text-white leading-none">
                  {slide.price}
                </span>
                <div className="flex flex-col">
                  <span className="text-white/80 text-lg leading-none">
                    {slide.cents}
                  </span>
                  <span className="text-white/50 text-xs">/mês</span>
                </div>
              </div>
              <p className="text-white/40 text-xs mt-1">{slide.note}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button variant="cta" size="lg" className="text-base px-8">
              {slide.cta}
              <ChevronRight className="w-5 h-5 ml-1" />
            </Button>
            <a
              href="https://wa.me/551125862995"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="lg" className="text-base border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground px-8">
                💬 WhatsApp
              </Button>
            </a>
          </div>
        </div>

        {/* Side quick links - desktop */}
        <div className="hidden lg:flex flex-col gap-3 absolute right-8 top-1/2 -translate-y-1/2">
          <a
            href="#"
            className="flex items-center gap-2 bg-primary-foreground/10 hover:bg-primary-foreground/20 border border-primary-foreground/20 text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium transition-all backdrop-blur-sm"
          >
            📄 2ª Via do Boleto
          </a>
          <a
            href="#"
            className="flex items-center gap-2 bg-accent/90 hover:bg-accent/100 text-accent-foreground px-4 py-2 rounded-lg text-sm font-medium transition-all"
          >
            📸 Instagram
          </a>
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/25 backdrop-blur-sm flex items-center justify-center transition-all z-10 border border-primary-foreground/10"
        aria-label="Anterior"
      >
        <ChevronLeft className="w-5 h-5 text-primary-foreground" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 lg:right-56 top-1/2 -translate-y-1/2 w-11 h-11 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/25 backdrop-blur-sm flex items-center justify-center transition-all z-10 border border-primary-foreground/10"
        aria-label="Próximo"
      >
        <ChevronRight className="w-5 h-5 text-primary-foreground" />
      </button>

      {/* Progress indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1 rounded-full transition-all duration-500 ${
              i === current
                ? "bg-accent w-10"
                : "bg-primary-foreground/30 w-6 hover:bg-primary-foreground/50"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
