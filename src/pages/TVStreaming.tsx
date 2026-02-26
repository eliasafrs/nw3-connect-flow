import { Tv, MonitorSmartphone, Radio } from "lucide-react";
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

const streamingApps = [
  { logo: disneyLogo, banner: disneyBanner, title: "Disney+", desc: "Os melhores filmes e séries da Disney, Pixar, Marvel, Star Wars e National Geographic. Inclui Star e esportes com ESPN." },
  { logo: hboLogo, banner: hboBanner, title: "HBO Max", desc: "As melhores séries como House of the Dragon, The Last of Us, e filmes premiados da Warner Bros." },
  { logo: globoplayLogo, banner: globoplayBanner, title: "Globoplay", desc: "Novelas, séries originais, jornalismo, reality shows e transmissões ao vivo da TV Globo." },
  { logo: deezerLogo, banner: deezerBanner, title: "Deezer", desc: "Mais de 90 milhões de músicas, podcasts e playlists personalizadas sem anúncios." },
  { logo: playkidsLogo, banner: playkidsBanner, title: "PlayKids", desc: "Conteúdo educativo e divertido para crianças. Jogos, vídeos e livros em um ambiente seguro." },
  { logo: exitlagLogo, banner: exitlagBanner, title: "Exitlag", desc: "Otimize sua conexão para jogos online. Reduza lag e melhore sua experiência gamer." },
  { logo: skyPlusLogo, banner: skyPlusBanner, title: "Sky+", desc: "Acesso a canais ao vivo, filmes, séries e conteúdo esportivo sob demanda." },
];

const tvFeatures = [
  { icon: Tv, label: "90+ Canais HD" },
  { icon: Radio, label: "Abertos e Fechados" },
  { icon: MonitorSmartphone, label: "App no Celular" },
  { icon: Tv, label: "Pacotes Flexíveis" },
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

      {/* TV Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-wider mb-3">
                <Tv className="w-4 h-4" /> TV por Assinatura
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Mais de 90 canais em <span className="text-gradient">qualidade HD</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Todos os planos de internet NW3 já incluem mais de 90 canais de TV digital. Canais abertos e fechados, opções de pacotes e aplicativo para assistir no celular.
              </p>
              <Button variant="cta" size="lg">
                Conhecer Pacotes
              </Button>
            </div>

            <div className="bg-card rounded-2xl p-8 border border-border shadow-card">
              <div className="grid grid-cols-2 gap-4">
                {tvFeatures.map((item) => (
                  <div key={item.label} className="flex items-center gap-3 p-4 rounded-lg bg-secondary/50">
                    <item.icon className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm font-medium text-foreground">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Streaming apps with banners */}
      <section className="py-20 lg:py-28 bg-secondary/50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-2">
              Aplicativos de <span className="text-gradient">Streaming</span> disponíveis
            </h2>
            <p className="text-muted-foreground text-lg">
              *Os aplicativos estão disponíveis de acordo com o plano escolhido.
            </p>
          </div>

          <div className="space-y-8">
            {streamingApps.map((app, index) => (
              <div
                key={app.title}
                className={`bg-card rounded-2xl overflow-hidden border border-border shadow-card hover:shadow-card-hover transition-all duration-300 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={`flex flex-col lg:flex-row ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                  {/* Banner */}
                  <div className="lg:w-1/2 h-48 lg:h-auto relative overflow-hidden">
                    <img
                      src={app.banner}
                      alt={`Banner ${app.title}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="lg:w-1/2 p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-4">
                      <img
                        src={app.logo}
                        alt={`Logo ${app.title}`}
                        className="h-12 w-12 object-contain rounded-xl"
                      />
                      <h3 className="font-heading text-2xl font-bold text-foreground">{app.title}</h3>
                    </div>
                    <p className="text-muted-foreground mb-6">{app.desc}</p>
                    <div>
                      <Button variant="outline" size="sm">
                        Ver planos com {app.title}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TVStreaming;
