import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, User } from "lucide-react";
import nw3Logo from "@/assets/nw3-logo.png";

const navLinks = [
  { label: "Internet", href: "/internet" },
  { label: "Câmera", href: "/camera" },
  { label: "TV & Streaming", href: "/tv-streaming" },
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
          ? "bg-card/95 backdrop-blur-md shadow-card border-b border-border"
          : "bg-card border-b border-border"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center">
          <img src={nw3Logo} alt="NW3 Internet" className="h-9" />
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              className={`text-[13px] font-medium transition-colors hover:text-primary tracking-wide ${
                location.pathname === l.href ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="#"
            className="inline-flex items-center gap-1.5 text-[13px] font-medium text-primary border border-primary/20 rounded px-4 py-1.5 hover:bg-primary/5 transition-colors tracking-wide"
          >
            <User className="w-3.5 h-3.5" />
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
        <div className="lg:hidden bg-card/95 backdrop-blur-md border-b border-border animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                to={l.href}
                className={`text-sm font-medium hover:text-primary py-2 tracking-wide ${
                  location.pathname === l.href ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <a
              href="#"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-primary border border-primary/20 rounded px-4 py-2 hover:bg-primary/5 transition-colors w-fit tracking-wide"
            >
              <User className="w-3.5 h-3.5" />
              Área do Cliente
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
