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
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <section className="relative overflow-hidden min-h-[520px] lg:min-h-[600px]">
      {/* Background images */}
      {slides.map((s, i) => (
        <div
          key={i}
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-700"
          style={{
            backgroundImage: `url(${s.image})`,
            opacity: i === current ? 1 : 0,
          }}
        />
      ))}
      <div className="absolute inset-0 bg-hero opacity-60" />

      <div className="relative container mx-auto px-4 py-16 lg:py-20 flex items-center min-h-[520px] lg:min-h-[600px]">
        <div className="grid lg:grid-cols-2 gap-8 items-center w-full">
          {/* Left - promo card */}
          <div className="flex justify-center lg:justify-start animate-fade-in-up">
            <div className="bg-primary-foreground/95 backdrop-blur-md border-2 border-accent rounded-3xl p-8 text-center max-w-sm w-full shadow-xl">
              <h2 className="font-heading text-2xl font-bold text-foreground mb-1">
                {slide.tagline}
              </h2>
              <p className="text-muted-foreground text-sm mb-4">
                {slide.subtitle}
              </p>

              <div className="bg-accent rounded-2xl p-4 mb-4">
                {slide.speed ? (
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="font-heading text-5xl font-bold text-accent-foreground">
                      {slide.speed}
                    </span>
                    <span className="font-heading text-xl font-bold text-accent-foreground">
                      {slide.label}
                    </span>
                  </div>
                ) : (
                  <div>
                    <div className="font-heading text-xl font-bold text-accent-foreground">
                      {slide.label}
                    </div>
                    {slide.extraInfo && (
                      <div className="text-accent-foreground/80 text-sm">
                        {slide.extraInfo}
                      </div>
                    )}
                  </div>
                )}
              </div>

              <div className="flex items-baseline justify-center gap-1 mb-1">
                <span className="text-muted-foreground text-lg">R$</span>
                <span className="font-heading text-6xl font-bold text-foreground">
                  {slide.price}
                </span>
                <div className="text-left">
                  <span className="text-muted-foreground text-xl block leading-none">
                    {slide.cents}
                  </span>
                  <span className="text-muted-foreground text-sm">/mês</span>
                </div>
              </div>
              <p className="text-muted-foreground/60 text-xs mb-5">
                {slide.note}
              </p>
              <Button variant="cta" className="w-full text-base">
                {slide.cta}
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </div>

          {/* Right - side buttons like Z6 */}
          <div className="hidden lg:flex flex-col items-end gap-3">
            <a
              href="#"
              className="flex items-center gap-2 bg-primary-foreground/15 hover:bg-primary-foreground/25 border border-accent text-primary-foreground px-5 py-2.5 rounded-full text-sm font-medium transition-colors backdrop-blur-sm"
            >
              📄 2ª Via do Boleto
            </a>
            <a
              href="#"
              className="flex items-center gap-2 bg-[hsl(330,70%,50%)] hover:bg-[hsl(330,70%,45%)] text-primary-foreground px-5 py-2.5 rounded-full text-sm font-medium transition-colors"
            >
              📸 Siga-nos no Instagram
            </a>
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[hsl(142,70%,45%)] hover:bg-[hsl(142,70%,40%)] text-primary-foreground px-5 py-2.5 rounded-full text-sm font-medium transition-colors"
            >
              💬 Fale no WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Carousel arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary-foreground/20 hover:bg-primary-foreground/40 backdrop-blur-sm flex items-center justify-center transition-colors z-10"
        aria-label="Anterior"
      >
        <ChevronLeft className="w-6 h-6 text-primary-foreground" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary-foreground/20 hover:bg-primary-foreground/40 backdrop-blur-sm flex items-center justify-center transition-colors z-10"
        aria-label="Próximo"
      >
        <ChevronRight className="w-6 h-6 text-primary-foreground" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === current
                ? "bg-accent w-8"
                : "bg-primary-foreground/40 hover:bg-primary-foreground/60"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Bottom bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-accent">
        <div className="container mx-auto px-4 py-3 flex items-center justify-center gap-4">
          <span className="font-heading text-lg font-bold text-accent-foreground uppercase">
            O futuro começa
          </span>
          <span className="font-heading text-lg font-bold text-accent-foreground uppercase">
            com nossa internet
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
