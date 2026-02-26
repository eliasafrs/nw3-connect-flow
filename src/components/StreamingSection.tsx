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
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-2">
            Acesse os <span className="text-gradient">aplicativos</span> do seu plano
          </h2>
          <p className="text-muted-foreground text-lg">
            *Os aplicativos estão disponíveis de acordo com o plano escolhido.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {apps.map((app) => (
            <div
              key={app.title}
              className="bg-card rounded-2xl p-8 border border-border shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 text-center"
            >
              <img
                src={app.logo}
                alt={`Logo ${app.title}`}
                className="w-16 h-16 object-contain rounded-2xl mx-auto mb-5"
              />
              <h3 className="font-heading text-lg font-bold text-foreground mb-2">{app.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{app.desc}</p>
              <Button variant="outline" size="sm">
                Ver mais
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StreamingSection;
