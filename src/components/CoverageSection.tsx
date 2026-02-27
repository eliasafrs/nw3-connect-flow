import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Search, CheckCircle, XCircle, Loader2 } from "lucide-react";
import { isInCoverageArea, geocodeCep } from "@/lib/coverage-polygons";

function normalizeCep(cep: string) {
  return cep.replace(/\D/g, "");
}

type Result = {
  available: boolean;
  address: string;
  neighborhood: string;
  city: string;
} | null;

const CoverageSection = () => {
  const [cep, setCep] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<Result>(null);
  const [error, setError] = useState("");

  const formatCep = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 8);
    if (digits.length > 5) {
      return `${digits.slice(0, 5)}-${digits.slice(5)}`;
    }
    return digits;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanCep = normalizeCep(cep);

    if (cleanCep.length !== 8) {
      setError("Digite um CEP válido com 8 dígitos.");
      setResult(null);
      return;
    }

    setLoading(true);
    setError("");
    setResult(null);

    try {
      // 1. Get address info from ViaCEP
      const response = await fetch(`https://viacep.com.br/ws/${cleanCep}/json/`);
      const data = await response.json();

      if (data.erro) {
        setError("CEP não encontrado. Verifique e tente novamente.");
        return;
      }

      const bairro = data.bairro || "";
      const localidade = data.localidade || "";
      const logradouro = data.logradouro || "";

      // 2. Geocode the CEP to get coordinates
      const coords = await geocodeCep(cleanCep);

      let available = false;
      if (coords) {
        // 3. Check if coordinates fall inside any coverage polygon
        available = isInCoverageArea(coords.lat, coords.lng);
      }

      setResult({
        available,
        address: logradouro ? `${logradouro}, ${bairro}` : bairro,
        neighborhood: bairro,
        city: `${localidade} - ${data.uf}`,
      });
    } catch {
      setError("Erro ao consultar o CEP. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="cobertura" className="py-20 lg:py-28 bg-secondary/50">
      <div className="container mx-auto px-4 max-w-2xl">
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

        <form
          onSubmit={handleSubmit}
          className="bg-card rounded-2xl p-8 border border-border shadow-card mx-auto mb-8"
        >
          <label className="block text-sm font-medium text-foreground mb-2">
            Digite seu CEP
          </label>
          <div className="flex gap-3">
            <input
              type="text"
              value={cep}
              onChange={(e) => {
                setCep(formatCep(e.target.value));
                setResult(null);
                setError("");
              }}
              placeholder="00000-000"
              className="flex-1 rounded-lg border border-input bg-background px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring text-lg tracking-wider"
              maxLength={9}
              inputMode="numeric"
            />
            <Button variant="cta" type="submit" disabled={loading}>
              {loading ? (
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              ) : (
                <Search className="w-4 h-4 mr-2" />
              )}
              Consultar
            </Button>
          </div>

          {error && (
            <p className="text-destructive text-sm mt-3 flex items-center gap-1.5">
              <XCircle className="w-4 h-4" />
              {error}
            </p>
          )}

          {result && (
            <div
              className={`mt-6 rounded-xl p-5 border ${
                result.available
                  ? "bg-[hsl(142,70%,95%)] border-[hsl(142,70%,70%)]"
                  : "bg-[hsl(0,70%,97%)] border-[hsl(0,70%,80%)]"
              }`}
            >
              <div className="flex items-start gap-3">
                {result.available ? (
                  <CheckCircle className="w-6 h-6 text-[hsl(142,70%,40%)] flex-shrink-0 mt-0.5" />
                ) : (
                  <XCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-0.5" />
                )}
                <div>
                  <p className="font-semibold text-foreground text-lg">
                    {result.available
                      ? "Boa notícia! Atendemos sua região! 🎉"
                      : "Ainda não atendemos sua região"}
                  </p>
                  <p className="text-muted-foreground text-sm mt-1">
                    {result.address && `${result.address} — `}
                    {result.city}
                  </p>
                  {result.available ? (
                    <a
                      href="https://wa.me/5500000000000?text=Ol%C3%A1!%20Gostaria%20de%20contratar%20a%20NW3%20Internet."
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="cta" className="mt-4">
                        Contratar Agora
                      </Button>
                    </a>
                  ) : (
                    <p className="text-sm text-muted-foreground mt-2">
                      Estamos expandindo! Deixe seu contato pelo WhatsApp e
                      avisaremos quando chegarmos aí.
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}
        </form>

        <div className="text-center">
          <h3 className="font-heading font-semibold text-foreground mb-4">
            Principais Regiões Atendidas
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {["Itaim Paulista", "Jardim Helena", "Ermelino Matarazzo", "Vila Formosa", "Tatuapé", "Cangaíba", "Vila Califórnia", "Jabaquara"].map((city) => (
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
