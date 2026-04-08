import { AppWindow } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageBanner from "@/components/PageBanner";

import disneyLogo from "@/assets/logos/disney-plus.png";
import hboLogo from "@/assets/logos/hbo-max.png";
import globoplayLogo from "@/assets/logos/globoplay.png";
import deezerLogo from "@/assets/logos/deezer.png";
import playkidsLogo from "@/assets/logos/playkids.png";
import exitlagLogo from "@/assets/logos/exitlag.png";
import skyPlusLogo from "@/assets/logos/sky-plus.png";
import lookeLogo from "@/assets/logos/looke.png";
import appleTvLogo from "@/assets/logos/apple-tv.png";

const apps = [
  { logo: disneyLogo, title: "Disney+", desc: "Os melhores filmes e séries da Disney, Pixar, Marvel, Star Wars e National Geographic. Inclui Star e esportes com ESPN.", plans: "Planos a partir de 700 Mega" },
  { logo: hboLogo, title: "HBO Max", desc: "As melhores séries como House of the Dragon, The Last of Us, e filmes premiados da Warner Bros.", plans: "Plano 1 Giga" },
  { logo: globoplayLogo, title: "Globoplay", desc: "Novelas, séries originais, jornalismo, reality shows e transmissões ao vivo da TV Globo.", plans: "Planos a partir de 600 Mega" },
  { logo: deezerLogo, title: "Deezer", desc: "Mais de 90 milhões de músicas, podcasts e playlists personalizadas sem anúncios.", plans: "Todos os planos" },
  { logo: playkidsLogo, title: "PlayKids", desc: "Conteúdo educativo e divertido para crianças. Jogos, vídeos e livros em um ambiente seguro.", plans: "Planos a partir de 500 Mega" },
  { logo: exitlagLogo, title: "Exitlag", desc: "Otimize sua conexão para jogos online. Reduza lag e melhore sua experiência gamer.", plans: "Planos a partir de 600 Mega" },
  { logo: skyPlusLogo, title: "Sky+", desc: "Acesso a canais ao vivo, filmes, séries e conteúdo esportivo sob demanda.", plans: "Planos a partir de 700 Mega" },
  { logo: lookeLogo, title: "Looke", desc: "Filmes, séries, documentários e conteúdo infantil sob demanda. Catálogo nacional e internacional.", plans: "Planos a partir de 500 Mega" },
  { logo: appleTvLogo, title: "Apple TV+", desc: "Séries e filmes originais premiados da Apple. Produções exclusivas com grandes estrelas de Hollywood.", plans: "Planos a partir de 700 Mega" },
];

const Aplicativos = () => {
  return (
    <>
      <PageBanner
        icon={AppWindow}
        title="Aplicativos"
        highlight="Inclusos"
        description="Aproveite os melhores aplicativos de streaming inclusos no seu plano NW3 Internet."
      />

      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-2">
              Tudo incluído no seu <span className="text-gradient">plano</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Confira os aplicativos disponíveis de acordo com cada plano.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {apps.map((app) => (
              <div
                key={app.title}
                className="bg-card rounded-2xl p-8 border border-border shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
              >
                <img
                  src={app.logo}
                  alt={`Logo ${app.title}`}
                  className="h-16 w-16 object-contain rounded-2xl mb-5"
                />
                <h3 className="font-heading text-xl font-bold text-foreground mb-2">{app.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{app.desc}</p>
                <span className="inline-block bg-accent/10 text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full">
                  {app.plans}
                </span>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="cta" size="lg">
              Ver Planos com Aplicativos
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Aplicativos;
