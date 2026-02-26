import { Play, Gift, Smartphone } from "lucide-react";

const StreamingSection = () => {
  return (
    <section id="streaming" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 text-center max-w-4xl">
        <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-wider mb-3">
          <Play className="w-4 h-4" /> Streaming Incluso
        </span>
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
          Muito mais que <span className="text-gradient">Internet</span>
        </h2>
        <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
          Alguns planos incluem acesso a plataformas de streaming, aplicativos parceiros e benefícios exclusivos.
        </p>

        <div className="grid sm:grid-cols-3 gap-6">
          {[
            { icon: Play, title: "Plataformas de Streaming", desc: "Acesso a conteúdo premium incluso no plano" },
            { icon: Smartphone, title: "Apps Parceiros", desc: "Aplicativos exclusivos para clientes NW3" },
            { icon: Gift, title: "Benefícios Exclusivos", desc: "Vantagens especiais para assinantes" },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-card rounded-xl p-8 border border-border shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Placeholder for logos */}
        <div className="mt-12 flex items-center justify-center gap-8 opacity-30">
          <div className="w-24 h-8 bg-muted rounded" />
          <div className="w-24 h-8 bg-muted rounded" />
          <div className="w-24 h-8 bg-muted rounded" />
          <div className="w-24 h-8 bg-muted rounded" />
        </div>
        <p className="text-xs text-muted-foreground mt-3">Logotipos dos parceiros em breve</p>
      </div>
    </section>
  );
};

export default StreamingSection;
