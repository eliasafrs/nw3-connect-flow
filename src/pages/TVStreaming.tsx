import { Tv, Play, Music, Film, MonitorSmartphone, Radio, Gamepad2, Baby, Satellite } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageBanner from "@/components/PageBanner";

const streamingApps = [
  { icon: Film, title: "Disney+", desc: "Filmes, séries, Star e esportes com ESPN" },
  { icon: Play, title: "HBO Max", desc: "Séries premiadas, filmes e documentários" },
  { icon: Tv, title: "Globoplay", desc: "Novelas, séries, jornalismo e esportes" },
  { icon: Music, title: "Deezer", desc: "Suas playlists favoritas sem parar" },
  { icon: Baby, title: "PlayKids", desc: "Conteúdo educativo e divertido para crianças" },
  { icon: Gamepad2, title: "Exitlag", desc: "Otimize sua conexão para jogos online" },
  { icon: Satellite, title: "Sky+", desc: "Canais ao vivo e conteúdo sob demanda" },
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

      {/* Streaming apps */}
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

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {streamingApps.map((app) => (
              <div
                key={app.title}
                className="bg-card rounded-2xl p-8 border border-border shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                  <app.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">{app.title}</h3>
                <p className="text-sm text-muted-foreground">{app.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TVStreaming;
