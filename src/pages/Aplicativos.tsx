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
import queimaDiariaLogo from "@/assets/logos/queima-diaria.png";

const apps = [
  { logo: disneyLogo, desc: "Os melhores filmes e séries da Disney, Pixar, Marvel, Star Wars e National Geographic. Inclui Star e esportes com ESPN.", plans: "Planos a partir de 700 Mega" },
  { logo: hboLogo, desc: "As melhores séries como House of the Dragon, The Last of Us, e filmes premiados da Warner Bros.", plans: "Plano 1 Giga" },
  { logo: globoplayLogo, desc: "Novelas, séries originais, jornalismo, reality shows e transmissões ao vivo da TV Globo.", plans: "Planos a partir de 600 Mega" },
  { logo: deezerLogo, desc: "Mais de 90 milhões de músicas, podcasts e playlists personalizadas sem anúncios.", plans: "Todos os planos" },
  { logo: playkidsLogo, desc: "Conteúdo educativo e divertido para crianças. Jogos, vídeos e livros em um ambiente seguro.", plans: "Planos a partir de 500 Mega" },
  { logo: exitlagLogo, desc: "Otimize sua conexão para jogos online. Reduza lag e melhore sua experiência gamer.", plans: "Planos a partir de 600 Mega", shadow: true },
  { logo: skyPlusLogo, desc: "Acesso a canais ao vivo, filmes, séries e conteúdo esportivo sob demanda.", plans: "Planos a partir de 700 Mega" },
  { logo: lookeLogo, desc: "Filmes, séries, documentários e conteúdo infantil sob demanda. Catálogo nacional e internacional.", plans: "Planos a partir de 500 Mega" },
  { logo: appleTvLogo, desc: "Séries e filmes originais premiados da Apple. Produções exclusivas com grandes estrelas de Hollywood.", plans: "Planos a partir de 700 Mega" },
  { logo: queimaDiariaLogo, desc: "Treinos, exercícios e programas fitness para fazer em casa. Cuide da saúde com praticidade.", plans: "Planos a partir de 500 Mega" },
];

const Aplicativos = () => {
  return (
    <>
      <PageBanner
        icon={AppWindow}
        title="Aplicativos"
        highlight="Streaming"
        description="Adicione o melhor do streaming em seu plano"
      />

      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-2">
              O melhor do Streaming no seu <span className="text-gradient">plano</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Confira os aplicativos disponíveis de acordo com cada plano.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {apps.map((app, i) => (
              <div
                key={i}
                className="bg-card rounded-2xl p-8 border border-border shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
              >
                <img
                  src={app.logo}
                  alt="Logo do aplicativo"
                  className={`h-16 w-16 object-contain rounded-2xl mb-5 ${app.shadow ? 'bg-stone-950 p-1.5 drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]' : ''}`}
                  loading="lazy"
                />
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
