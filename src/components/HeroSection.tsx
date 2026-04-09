import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronLeft, Zap } from "lucide-react";
import heroSlide1 from "@/assets/hero-slide-disney-v4.jpg";
import heroSlide2 from "@/assets/hero-slide-gaming-v4.jpg";
import heroSlideBusiness from "@/assets/hero-slide-business-opt9.jpg";
import disneyPlusLogo from "@/assets/logos/disney-plus.png";
import exitlagLogo from "@/assets/logos/exitlag.png";

const slides = [
  {
    image: heroSlide1,
    tagline: "Emoção garantida",
    subtitle: "Assista ao vivo com qualidade máxima",
    logo: disneyPlusLogo,
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
    subtitle: "Jogue sem travar com internet + Exitlag no seu plano.",
    logo: exitlagLogo,
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
    speed: "",
    label: "",
    price: "",
    cents: "",
    note: "",
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
          className="absolute inset-0 w-full h-full object-cover object-bottom sm:object-center transition-opacity duration-700"
          style={{ opacity: i === current ? 1 : 0 }}
        />
      ))}
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[hsl(240,97%,10%)/0.92] via-[hsl(240,97%,10%)/0.75] to-[hsl(240,97%,10%)/0.3]" />

      <div className="relative container mx-auto px-4 py-16 sm:py-20 lg:py-24 flex items-center min-h-[480px] sm:min-h-[560px] lg:min-h-[620px]">
        <div className="max-w-2xl mx-[50px]">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 bg-white/15 border border-white/30 rounded-full px-4 py-1.5 mb-6 backdrop-blur-sm">
            <Zap className="w-4 h-4 text-white" />
            <span className="text-white text-sm font-semibold tracking-wide uppercase">
              100% Fibra Óptica
            </span>
          </div>

          {/* Main heading */}
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            {slide.tagline}
          </h1>
          <p className="text-lg sm:text-xl mb-8 max-w-lg text-yellow-400 drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
            {slide.subtitle}
          </p>



          {/* Speed + Price row */}
          {(slide.speed || slide.price) && (
          <div className="flex flex-wrap items-end gap-6 mb-8">
            {slide.speed && (
              <div className="flex items-center gap-3">
                <div className="flex flex-col items-center">
                  <span className="font-heading text-6xl lg:text-7xl font-black text-white leading-none">
                    {slide.speed}
                  </span>
                  <span className="font-heading text-xl font-bold text-white/80 uppercase">
                    {slide.label}
                  </span>
                </div>
                {slide.logo && (
                  <div className="flex items-center gap-2">
                    <span className="font-heading text-3xl font-black text-white leading-none">+</span>
                    <img src={slide.logo} alt="Logo parceiro" className={`object-contain ${slide.logo === disneyPlusLogo ? 'h-11' : 'h-14'}`} />
                  </div>
                )}
              </div>
            )}
            {slide.price && (
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
            )}
          </div>
          )}

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
              <Button variant="outline" size="lg" className="text-base bg-yellow-400 hover:bg-yellow-500 border-yellow-400 text-black font-bold px-8">
                <svg viewBox="0 0 24 24" className="w-5 h-5 mr-1 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WhatsApp
              </Button>
            </a>
          </div>
        </div>

      </div>

      {/* Navigation arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-lg bg-white/10 hover:bg-white/25 backdrop-blur-sm flex items-center justify-center transition-all z-10 border border-white/10"
        aria-label="Anterior"
      >
        <ChevronLeft className="w-5 h-5 text-white" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 lg:right-56 top-1/2 -translate-y-1/2 w-11 h-11 rounded-lg bg-white/10 hover:bg-white/25 backdrop-blur-sm flex items-center justify-center transition-all z-10 border border-white/10"
        aria-label="Próximo"
      >
        <ChevronRight className="w-5 h-5 text-white" />
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
                : "bg-white/30 w-6 hover:bg-white/50"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
