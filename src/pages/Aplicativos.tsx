import { Play, Music, Film, Gamepad2, Baby, Satellite, Tv, AppWindow } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageBanner from "@/components/PageBanner";

const apps = [
  {
    icon: Film,
    title: "Disney+",
    desc: "Os melhores filmes e séries da Disney, Pixar, Marvel, Star Wars e National Geographic. Inclui Star e esportes com ESPN.",
    plans: "Planos a partir de 700 Mega",
  },
  {
    icon: Play,
    title: "HBO Max",
    desc: "As melhores séries como House of the Dragon, The Last of Us, e filmes premiados da Warner Bros.",
    plans: "Plano 1 Giga",
  },
  {
    icon: Tv,
    title: "Globoplay",
    desc: "Novelas, séries originais, jornalismo, reality shows e transmissões ao vivo da TV Globo.",
    plans: "Planos a partir de 600 Mega",
  },
  {
    icon: Music,
    title: "Deezer",
    desc: "Mais de 90 milhões de músicas, podcasts e playlists personalizadas sem anúncios.",
    plans: "Todos os planos",
  },
  {
    icon: Baby,
    title: "PlayKids",
    desc: "Conteúdo educativo e divertido para crianças. Jogos, vídeos e livros em um ambiente seguro.",
    plans: "Planos a partir de 500 Mega",
  },
  {
    icon: Gamepad2,
    title: "Exitlag",
    desc: "Otimize sua conexão para jogos online. Reduza lag e melhore sua experiência gamer.",
    plans: "Planos a partir de 600 Mega",
  },
  {
    icon: Satellite,
    title: "Sky+",
    desc: "Acesso a canais ao vivo, filmes, séries e conteúdo esportivo sob demanda.",
    plans: "Planos a partir de 700 Mega",
  },
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
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                  <app.icon className="w-8 h-8 text-primary" />
                </div>
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
