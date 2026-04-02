import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, User } from "lucide-react";
import nw3Logo from "@/assets/nw3-logo.png";

const navLinks = [
  { label: "Internet", href: "/internet" },
  { label: "Câmera", href: "/camera" },
  { label: "Fixo", href: "/fixo" },
  { label: "Aplicativos", href: "/aplicativos" },
  { label: "Ajuda", href: "/ajuda" },
  { label: "Sobre", href: "/sobre" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 90);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <nav
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-card/95 backdrop-blur-lg shadow-card border-b border-border"
          : "bg-card border-b border-border"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center">
          <img src={nw3Logo} alt="NW3 Internet" className="h-10" />
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === l.href ? "text-primary" : "text-foreground"
              }`}
            >
              {l.label}
            </Link>
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
              <Link
                key={l.href}
                to={l.href}
                className={`text-sm font-medium hover:text-primary py-2 ${
                  location.pathname === l.href ? "text-primary" : "text-foreground"
                }`}
              >
                {l.label}
              </Link>
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
