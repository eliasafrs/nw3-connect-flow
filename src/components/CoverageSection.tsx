import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Search } from "lucide-react";

const cities = [
  "Vila Itaim",
  "Itaquera",
  "São Mateus",
  "Guaianases",
  "Cidade Tiradentes",
  "Ferraz de Vasconcelos",
];

const CoverageSection = () => {
  const [cep, setCep] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section id="cobertura" className="py-20 lg:py-28 bg-secondary/50">
      <div className="container mx-auto px-4">
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

        <div className="grid lg:grid-cols-2 gap-8 items-start max-w-6xl mx-auto">
          {/* Left - Map */}
          <div className="rounded-2xl overflow-hidden border border-border shadow-card aspect-[4/3]">
            <iframe
              src="https://www.google.com/maps/d/embed?mid=1IE0qc7pGi3Cj3jZ_7wHCuSLcHSzRhCQ&ehbc=2E312F"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 400 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de Cobertura NW3 Internet"
            />
          </div>

          {/* Right - CEP search + cities */}
          <div>
            <form
              onSubmit={handleSubmit}
              className="bg-card rounded-2xl p-8 border border-border shadow-card mb-8"
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

            <div>
              <h3 className="font-heading font-semibold text-foreground mb-4">Cidades Atendidas</h3>
              <div className="flex flex-wrap gap-3">
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
        </div>
      </div>
    </section>
  );
};

export default CoverageSection;
