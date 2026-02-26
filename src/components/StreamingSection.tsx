import { Play, Music, Film } from "lucide-react";
import { Button } from "@/components/ui/button";

const apps = [
  {
    icon: Film,
    title: "Disney+",
    desc: "Os melhores filmes e séries do Star e esportes com a ESPN",
  },
  {
    icon: Play,
    title: "HBO Max",
    desc: "Drama, comédia, realities e muito mais",
  },
  {
    icon: Music,
    title: "Deezer",
    desc: "Suas playlists favoritas sem parar",
  },
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
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <app.icon className="w-8 h-8 text-primary" />
              </div>
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
