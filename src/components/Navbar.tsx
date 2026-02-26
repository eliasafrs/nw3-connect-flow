import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Planos", href: "#planos" },
  { label: "Empresarial", href: "#empresarial" },
  { label: "Streaming", href: "#streaming" },
  { label: "TV", href: "#tv" },
  { label: "Segurança", href: "#seguranca" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Cobertura", href: "#cobertura" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-card/95 backdrop-blur-lg shadow-card border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#" className="font-heading text-2xl font-bold">
          <span className={scrolled ? "text-primary" : "text-primary-foreground"}>NW3</span>
          <span className={`${scrolled ? "text-foreground" : "text-primary-foreground/70"} font-normal`}>
            {" "}Internet
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                scrolled ? "text-foreground" : "text-primary-foreground/80"
              }`}
            >
              {l.label}
            </a>
          ))}
          <Button variant="cta" size="sm">
            Assine Já
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? (
            <X className={scrolled ? "text-foreground" : "text-primary-foreground"} />
          ) : (
            <Menu className={scrolled ? "text-foreground" : "text-primary-foreground"} />
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
            <Button variant="cta" size="sm" className="w-full mt-2">
              Assine Já
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
