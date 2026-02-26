import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, User } from "lucide-react";

const navLinks = [
  { label: "Internet", href: "#planos" },
  { label: "Câmera", href: "#seguranca" },
  { label: "TV & Streaming", href: "#tv" },
  { label: "Fixo", href: "#fixo" },
  { label: "Aplicativos", href: "#streaming" },
  { label: "Ajuda", href: "#autoatendimento" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 90);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-card/95 backdrop-blur-lg shadow-card border-b border-border"
          : "bg-card border-b border-border"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#" className="font-heading text-2xl font-bold">
          <span className="text-primary">NW3</span>
          <span className="text-foreground font-normal"> Internet</span>
        </a>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-foreground transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary border border-primary/30 rounded-full px-4 py-1.5 hover:bg-primary/5 transition-colors"
          >
            <User className="w-4 h-4" />
            Área do Cliente
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? (
            <X className="text-foreground" />
          ) : (
            <Menu className="text-foreground" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-card/95 backdrop-blur-lg border-b border-border animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-foreground hover:text-primary py-2"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-primary border border-primary/30 rounded-full px-4 py-2 hover:bg-primary/5 transition-colors w-fit"
            >
              <User className="w-4 h-4" />
              Área do Cliente
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
