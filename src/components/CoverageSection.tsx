import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Search } from "lucide-react";

const cities = [
  "Cidade Exemplo 1",
  "Cidade Exemplo 2",
  "Cidade Exemplo 3",
  "Cidade Exemplo 4",
  "Cidade Exemplo 5",
  "Cidade Exemplo 6",
];

const CoverageSection = () => {
  const [cep, setCep] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // placeholder
  };

  return (
    <section id="cobertura" className="py-20 lg:py-28 bg-secondary/50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-wider mb-3">
            <MapPin className="w-4 h-4" /> Área de Atendimento
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Consulte a <span className="text-gradient">Disponibilidade</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Verifique se a NW3 Internet já atende sua região.
          </p>
        </div>

        {/* CEP search */}
        <form
          onSubmit={handleSubmit}
          className="bg-card rounded-2xl p-8 border border-border shadow-card max-w-lg mx-auto mb-12"
        >
          <label className="block text-sm font-medium text-foreground mb-2">
            Digite seu CEP
          </label>
          <div className="flex gap-3">
            <input
              type="text"
              value={cep}
              onChange={(e) => setCep(e.target.value)}
              placeholder="00000-000"
              className="flex-1 rounded-lg border border-input bg-background px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              maxLength={9}
            />
            <Button variant="cta" type="submit">
              <Search className="w-4 h-4 mr-2" />
              Consultar
            </Button>
          </div>
        </form>

        {/* Cities */}
        <div className="text-center">
          <h3 className="font-heading font-semibold text-foreground mb-4">Cidades Atendidas</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {cities.map((city) => (
              <span
                key={city}
                className="bg-card border border-border rounded-full px-4 py-2 text-sm text-muted-foreground"
              >
                <MapPin className="w-3 h-3 inline mr-1 text-primary" />
                {city}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoverageSection;
