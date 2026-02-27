import { Button } from "@/components/ui/button";

import disneyLogo from "@/assets/logos/disney-plus.png";
import hboLogo from "@/assets/logos/hbo-max.png";
import deezerLogo from "@/assets/logos/deezer.png";

const apps = [
  { logo: disneyLogo, title: "Disney+", desc: "Os melhores filmes e séries do Star e esportes com a ESPN" },
  { logo: hboLogo, title: "HBO Max", desc: "Drama, comédia, realities e muito mais" },
  { logo: deezerLogo, title: "Deezer", desc: "Suas playlists favoritas sem parar" },
];

const StreamingSection = () => {
  return (
    <section id="streaming" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-foreground mb-2">
            Streaming <span className="text-gradient">incluso</span> no seu plano
          </h2>
          <p className="text-muted-foreground text-lg">
            *Disponível de acordo com o plano escolhido.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-5">
          {apps.map((app) => (
            <div
              key={app.title}
              className="group bg-card rounded-xl overflow-hidden border border-border shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
            >
              <div className="h-1 bg-primary/15 group-hover:bg-accent transition-colors" />
              <div className="p-7 text-center">
                <img
                  src={app.logo}
                  alt={`Logo ${app.title}`}
                  className="w-14 h-14 object-contain rounded-xl mx-auto mb-4"
                />
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">{app.title}</h3>
                <p className="text-sm text-muted-foreground mb-5">{app.desc}</p>
                <Button variant="outline" size="sm">
                  Ver mais
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StreamingSection;
