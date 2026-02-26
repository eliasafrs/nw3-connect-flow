import { Facebook, Instagram, Youtube, Phone, Mail, MapPin, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-hero py-16">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <a href="#" className="font-heading text-2xl font-bold text-primary-foreground">
              NW3 <span className="font-normal text-primary-foreground/60">Internet</span>
            </a>
            <p className="text-primary-foreground/50 text-sm mt-3 mb-4">
              Conectando você ao que importa com fibra óptica de alta velocidade.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Youtube, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary/30 transition-colors"
                >
                  <Icon className="w-4 h-4 text-primary-foreground/70" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-primary-foreground mb-4">Serviços</h4>
            <ul className="space-y-2">
              {["Internet", "Câmera", "TV & Streaming", "Telefone Fixo"].map((l) => (
                <li key={l}>
                  <a href="#" className="text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-heading font-semibold text-primary-foreground mb-4">Suporte</h4>
            <ul className="space-y-2">
              {["Área do Cliente", "2ª Via de Boleto", "Teste de Velocidade", "Manual do Cliente", "Ouvidoria", "Documentos Legais"].map((l) => (
                <li key={l}>
                  <a href="#" className="text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-primary-foreground mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-primary-foreground/50">
                <Phone className="w-4 h-4 text-primary" />
                (00) 0000-0000
              </li>
              <li className="flex items-center gap-2 text-sm text-primary-foreground/50">
                <Mail className="w-4 h-4 text-primary" />
                contato@nw3internet.com.br
              </li>
              <li className="flex items-start gap-2 text-sm text-primary-foreground/50">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                Endereço da empresa
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-foreground/40">
            © 2025 NW3 Internet. Todos os direitos reservados. CNPJ: 00.000.000/0001-00
          </p>
          <a href="#" className="text-xs text-primary-foreground/40 hover:text-primary-foreground transition-colors">
            Política de Privacidade
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
