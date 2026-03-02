import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronLeft } from "lucide-react";
import heroSlide1 from "@/assets/hero-slide-1.jpg";
import heroSlide2 from "@/assets/hero-slide-2.jpg";
import heroSlide3 from "@/assets/hero-slide-3.jpg";

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
    tagline: "Segurança garantida",
    subtitle: "Monitore sua casa ou empresa em tempo real, de onde estiver.",
    speed: "",
    label: "PLANO CÂMERAS",
    extraInfo: "2 a 4 câmeras Full HD",
    price: "129",
    cents: ",90",
    note: "*Consulte condições",
    cta: "Solicitar Orçamento",
  },
  {
    image: heroSlide3,
    tagline: "Diversão garantida",
    subtitle: "TV Digital + Streaming no melhor combo da região.",
    speed: "600",
    label: "MEGA",
    price: "109",
    cents: ",90",
    note: "*Consulte condições",
    cta: "Conhecer Pacotes",
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <section className="relative overflow-hidden min-h-[520px] lg:min-h-[600px]">
      {/* Background images */}
      {slides.map((s, i) => (
        <div
          key={i}
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
          style={{
            backgroundImage: `url(${s.image})`,
            opacity: i === current ? 1 : 0,
          }}
        />
      ))}
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[hsl(220,40%,8%)/0.95] via-[hsl(220,40%,8%)/0.80] to-[hsl(220,40%,8%)/0.40]" />

      <div className="relative container mx-auto px-4 py-20 lg:py-28 flex items-center min-h-[520px] lg:min-h-[600px]">
        <div className="max-w-xl">
          {/* Subtle label */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-accent" />
            <span className="text-accent text-xs font-medium tracking-[0.2em] uppercase">
              100% Fibra Óptica
            </span>
          </div>

          {/* Main heading */}
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-[1.15] mb-4 tracking-tight">
            {slide.tagline}
          </h1>
          <p className="text-primary-foreground/60 text-base sm:text-lg mb-10 max-w-md font-light leading-relaxed">
            {slide.subtitle}
          </p>

          {/* Speed + Price */}
          <div className="flex flex-wrap items-end gap-8 mb-10">
            {slide.speed && (
              <div>
                <div className="flex items-baseline gap-1.5">
                  <span className="font-heading text-5xl lg:text-6xl font-bold text-primary-foreground leading-none">
                    {slide.speed}
                  </span>
                  <span className="text-sm font-medium text-primary-foreground/50 uppercase tracking-wider">
                    {slide.label}
                  </span>
                </div>
              </div>
            )}
            {!slide.speed && slide.extraInfo && (
              <div>
                <div className="text-lg font-semibold text-primary-foreground">{slide.label}</div>
                <div className="text-primary-foreground/40 text-sm">{slide.extraInfo}</div>
              </div>
            )}
            <div className="border-l border-primary-foreground/15 pl-8">
              <div className="flex items-baseline gap-0.5">
                <span className="text-primary-foreground/40 text-sm font-light">R$</span>
                <span className="font-heading text-4xl font-bold text-primary-foreground leading-none">
                  {slide.price}
                </span>
                <div className="flex flex-col">
                  <span className="text-primary-foreground/60 text-base leading-none">
                    {slide.cents}
                  </span>
                  <span className="text-primary-foreground/30 text-[10px] tracking-wider">/mês</span>
                </div>
              </div>
              <p className="text-primary-foreground/25 text-[11px] mt-1.5 tracking-wide">{slide.note}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button variant="cta" size="lg" className="text-sm px-8 tracking-wide">
              {slide.cta}
              <ChevronRight className="w-4 h-4 ml-1.5" />
            </Button>
            <a
              href="https://wa.me/551125862995"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="lg" className="text-sm border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/5 hover:text-primary-foreground px-8 tracking-wide">
                💬 WhatsApp
              </Button>
            </a>
          </div>
        </div>

        {/* Side links - desktop */}
        <div className="hidden lg:flex flex-col gap-2.5 absolute right-8 top-1/2 -translate-y-1/2">
          <a
            href="#"
            className="flex items-center gap-2 bg-primary-foreground/5 hover:bg-primary-foreground/10 border border-primary-foreground/10 text-primary-foreground/70 hover:text-primary-foreground px-4 py-2.5 rounded text-xs font-medium transition-all tracking-wide"
          >
            📄 2ª Via do Boleto
          </a>
          <a
            href="#"
            className="flex items-center gap-2 bg-accent/80 hover:bg-accent text-accent-foreground px-4 py-2.5 rounded text-xs font-medium transition-all tracking-wide"
          >
            📸 Instagram
          </a>
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded bg-primary-foreground/5 hover:bg-primary-foreground/15 backdrop-blur-sm flex items-center justify-center transition-all z-10 border border-primary-foreground/10"
        aria-label="Anterior"
      >
        <ChevronLeft className="w-4 h-4 text-primary-foreground/70" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 lg:right-56 top-1/2 -translate-y-1/2 w-10 h-10 rounded bg-primary-foreground/5 hover:bg-primary-foreground/15 backdrop-blur-sm flex items-center justify-center transition-all z-10 border border-primary-foreground/10"
        aria-label="Próximo"
      >
        <ChevronRight className="w-4 h-4 text-primary-foreground/70" />
      </button>

      {/* Progress */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`rounded-full transition-all duration-500 ${
              i === current
                ? "bg-accent w-8 h-1.5"
                : "bg-primary-foreground/20 w-5 h-1.5 hover:bg-primary-foreground/40"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
