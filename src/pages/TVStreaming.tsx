import { Tv, MonitorSmartphone, Radio, Wifi } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageBanner from "@/components/PageBanner";

import disneyLogo from "@/assets/logos/disney-plus.png";
import hboLogo from "@/assets/logos/hbo-max.png";
import globoplayLogo from "@/assets/logos/globoplay.png";
import deezerLogo from "@/assets/logos/deezer.png";
import playkidsLogo from "@/assets/logos/playkids.png";
import exitlagLogo from "@/assets/logos/exitlag.png";
import skyPlusLogo from "@/assets/logos/sky-plus.png";

import disneyBanner from "@/assets/banners/disney-plus-banner.jpg";
import hboBanner from "@/assets/banners/hbo-max-banner.jpg";
import globoplayBanner from "@/assets/banners/globoplay-banner.jpg";
import deezerBanner from "@/assets/banners/deezer-banner.jpg";
import playkidsBanner from "@/assets/banners/playkids-banner.jpg";
import exitlagBanner from "@/assets/banners/exitlag-banner.jpg";
import skyPlusBanner from "@/assets/banners/sky-plus-banner.jpg";

const streamingBanners = [
  {
    logo: disneyLogo,
    banner: disneyBanner,
    title: "Disney+",
    speed: "700",
    price: "149",
    cents: "90",
    headline: "Diversão sem limites com Disney+",
    subtitle: "Os melhores filmes e séries da Disney, Pixar, Marvel, Star Wars e National Geographic.",
    dark: true,
  },
  {
    logo: hboLogo,
    banner: hboBanner,
    title: "HBO Max",
    speed: "600",
    price: "129",
    cents: "90",
    headline: "O combo perfeito para qualquer maratoneiro",
    subtitle: "As melhores séries como House of the Dragon, The Last of Us, e filmes premiados.",
    dark: true,
  },
  {
    logo: globoplayLogo,
    banner: globoplayBanner,
    title: "Globoplay",
    speed: "700",
    price: "149",
    cents: "90",
    headline: "Tudo da Globo na palma da sua mão",
    subtitle: "Novelas, séries originais, jornalismo, reality shows e transmissões ao vivo.",
    dark: true,
  },
  {
    logo: deezerLogo,
    banner: deezerBanner,
    title: "Deezer",
    speed: "500",
    price: "99",
    cents: "90",
    headline: "Leve suas playlists com você!",
    subtitle: "Mais de 90 milhões de músicas, podcasts e playlists personalizadas sem anúncios.",
    dark: false,
  },
  {
    logo: skyPlusLogo,
    banner: skyPlusBanner,
    title: "Sky+",
    speed: "600",
    price: "129",
    cents: "90",
    headline: "Esportes, notícias, filmes e variedades",
    subtitle: "Acesso a canais ao vivo, filmes, séries e conteúdo esportivo sob demanda.",
    dark: true,
  },
];

const tvPackages = [
  { name: "LIGHT", channels: "13 Canais", screens: "1 tela", price: "14", cents: "90" },
  { name: "FULL", channels: "96 Canais", screens: "3 telas", price: "89", cents: "90" },
];

const TVStreaming = () => {
  return (
    <>
      <PageBanner
        icon={Tv}
        title="TV &"
        highlight="Streaming"
        description="Mais de 90 canais de TV digital inclusos nos planos de internet e os melhores aplicativos de streaming."
      />

      {/* Full-width streaming banners - estilo Amigo */}
      {streamingBanners.map((app, index) => (
        <section
          key={app.title}
          className="relative min-h-[480px] lg:min-h-[520px] overflow-hidden flex items-center"
        >
          {/* Background */}
          <img
            src={app.banner}
            alt={`Banner ${app.title}`}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className={`absolute inset-0 ${app.dark ? 'bg-black/50' : 'bg-white/40'}`} />

          <div className="relative container mx-auto px-4 max-w-6xl">
            <div className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              {/* Content side */}
              <div className="lg:w-1/2 text-center lg:text-left">
                <img
                  src={app.logo}
                  alt={app.title}
                  className="h-16 w-auto object-contain mx-auto lg:mx-0 mb-6 drop-shadow-lg"
                />
                <h2 className={`font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 ${app.dark ? 'text-white' : 'text-foreground'}`}>
                  {app.headline}
                </h2>
                <p className={`text-lg mb-6 ${app.dark ? 'text-white/80' : 'text-muted-foreground'}`}>
                  {app.subtitle}
                </p>
                <Button variant="cta" size="lg" className="text-base px-10">
                  Eu quero!
                </Button>
              </div>

              {/* Price side */}
              <div className="lg:w-1/2 flex justify-center lg:justify-end">
                <div className={`rounded-3xl p-8 lg:p-10 text-center backdrop-blur-md ${app.dark ? 'bg-white/10 border border-white/20' : 'bg-black/10 border border-black/10'}`}>
                  <div className="flex items-baseline justify-center gap-1 mb-1">
                    <span className={`text-7xl lg:text-8xl font-heading font-black leading-none ${app.dark ? 'text-white' : 'text-foreground'}`}>
                      {app.speed}
                    </span>
                    <span className={`text-xl font-bold ${app.dark ? 'text-accent' : 'text-primary'}`}>
                      mega
                    </span>
                  </div>
                  <div className="flex items-start justify-center gap-0.5 mt-4">
                    <span className={`text-lg font-medium mt-2 ${app.dark ? 'text-white/70' : 'text-muted-foreground'}`}>R$</span>
                    <span className={`text-6xl lg:text-7xl font-heading font-black leading-none ${app.dark ? 'text-white' : 'text-foreground'}`}>
                      {app.price}
                    </span>
                    <span className={`text-2xl font-bold mt-1 ${app.dark ? 'text-white' : 'text-foreground'}`}>,{app.cents}</span>
                  </div>
                  <span className={`text-sm block mt-2 ${app.dark ? 'text-white/50' : 'text-muted-foreground'}`}>/mês</span>
                  <div className={`flex items-center justify-center gap-2 mt-4 text-sm ${app.dark ? 'text-white/60' : 'text-muted-foreground'}`}>
                    <Wifi className="w-4 h-4" />
                    <span>Internet + {app.title}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* TV Packages Section */}
      <section className="py-20 lg:py-28 bg-hero relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="container mx-auto px-4 max-w-6xl relative">
          <div className="text-center mb-4">
            <Tv className="w-10 h-10 text-accent mx-auto mb-4" />
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary-foreground mb-2">
              TV e Streaming para maratonar <span className="text-gradient">sem limites!</span>
            </h2>
            <p className="text-primary-foreground/60 text-lg max-w-2xl mx-auto">
              São mais de 90 canais para você fazer da sua casa uma central de entretenimento.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto mt-12">
            {tvPackages.map((pkg) => (
              <div
                key={pkg.name}
                className="bg-primary-foreground/5 backdrop-blur-md border border-primary-foreground/10 rounded-3xl p-8 text-center hover:bg-primary-foreground/10 transition-all duration-300"
              >
                <span className="inline-block bg-accent/20 text-accent font-bold text-sm uppercase tracking-wider px-4 py-1 rounded-full mb-4">
                  {pkg.name}
                </span>
                <h3 className="font-heading text-xl font-bold text-primary-foreground mb-1">{pkg.channels}</h3>
                <p className="text-primary-foreground/50 text-sm mb-6">{pkg.screens}</p>
                <div className="flex items-start justify-center gap-0.5">
                  <span className="text-primary-foreground/60 text-lg mt-2">R$</span>
                  <span className="text-5xl font-heading font-black text-primary-foreground leading-none">{pkg.price}</span>
                  <span className="text-xl font-bold text-primary-foreground mt-1">,{pkg.cents}*</span>
                </div>
                <span className="text-primary-foreground/40 text-sm block mt-1">/mês</span>
                <Button variant="cta" size="lg" className="mt-6 w-full">
                  Eu quero!
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TVStreaming;
