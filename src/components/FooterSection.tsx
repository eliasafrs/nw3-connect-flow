import { Facebook, Instagram, Youtube, Phone, Mail, MapPin, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import nw3Logo from "@/assets/nw3-logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary py-16">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <Link to="/">
              <img src={nw3Logo} alt="NW3 Internet" className="h-9 brightness-0 invert opacity-80" />
            </Link>
            <p className="text-primary-foreground/35 text-sm mt-3 mb-5 leading-relaxed">
              Conectando você ao que importa com fibra óptica de alta velocidade.
            </p>
            <div className="flex gap-2">
              {[Facebook, Instagram, Youtube, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-8 h-8 rounded bg-primary-foreground/5 flex items-center justify-center hover:bg-primary-foreground/10 transition-colors"
                >
                  <Icon className="w-3.5 h-3.5 text-primary-foreground/50" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-primary-foreground/80 text-sm mb-4 tracking-wide">Serviços</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Internet", href: "/internet" },
                { label: "Câmera", href: "/camera" },
                { label: "TV & Streaming", href: "/tv-streaming" },
                { label: "Telefone Fixo", href: "/fixo" },
                { label: "Aplicativos", href: "/aplicativos" },
              ].map((l) => (
                <li key={l.label}>
                  <Link to={l.href} className="text-[13px] text-primary-foreground/35 hover:text-primary-foreground/70 transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-heading font-semibold text-primary-foreground/80 text-sm mb-4 tracking-wide">Suporte</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Área do Cliente", href: "#" },
                { label: "2ª Via de Boleto", href: "#" },
                { label: "Central de Ajuda", href: "/ajuda" },
                { label: "Sobre a NW3", href: "/sobre" },
                { label: "Ouvidoria", href: "#" },
                { label: "Documentos Legais", href: "#" },
              ].map((l) => (
                <li key={l.label}>
                  {l.href.startsWith("/") ? (
                    <Link to={l.href} className="text-[13px] text-primary-foreground/35 hover:text-primary-foreground/70 transition-colors">
                      {l.label}
                    </Link>
                  ) : (
                    <a href={l.href} className="text-[13px] text-primary-foreground/35 hover:text-primary-foreground/70 transition-colors">
                      {l.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-primary-foreground/80 text-sm mb-4 tracking-wide">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-[13px] text-primary-foreground/35">
                <Phone className="w-3.5 h-3.5 text-accent/60" />
                (11) 2586-2995
              </li>
              <li className="flex items-center gap-2 text-[13px] text-primary-foreground/35">
                <Mail className="w-3.5 h-3.5 text-accent/60" />
                contato@nw3internet.com.br
              </li>
              <li className="flex items-start gap-2 text-[13px] text-primary-foreground/35">
                <MapPin className="w-3.5 h-3.5 text-accent/60 flex-shrink-0 mt-0.5" />
                Rua Domingos Fernandes Nobre, 385 - Vila Itaim - São Paulo
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-primary-foreground/25 tracking-wide">
            © 2025 NW3 Internet. Todos os direitos reservados. CNPJ: 33.578.123/0001-63
          </p>
          <a href="#" className="text-[11px] text-primary-foreground/25 hover:text-primary-foreground/50 transition-colors tracking-wide">
            Política de Privacidade
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
