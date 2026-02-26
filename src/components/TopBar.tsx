import { Phone, MessageCircle, FileText } from "lucide-react";
import { useState } from "react";

interface TopBarProps {
  segment: "voce" | "empresa";
  onSegmentChange: (segment: "voce" | "empresa") => void;
}

const TopBar = ({ segment, onSegmentChange }: TopBarProps) => {
  return (
    <div className="bg-primary-dark text-primary-foreground text-sm">
      <div className="container mx-auto px-4 flex items-center justify-between h-10">
        {/* Segment toggle */}
        <div className="flex items-center gap-1 bg-primary-foreground/10 rounded-full p-0.5">
          <button
            onClick={() => onSegmentChange("voce")}
            className={`px-4 py-1 rounded-full text-xs font-medium transition-all ${
              segment === "voce"
                ? "bg-primary-foreground text-primary-dark"
                : "text-primary-foreground/70 hover:text-primary-foreground"
            }`}
          >
            Para Você
          </button>
          <button
            onClick={() => onSegmentChange("empresa")}
            className={`px-4 py-1 rounded-full text-xs font-medium transition-all ${
              segment === "empresa"
                ? "bg-primary-foreground text-primary-dark"
                : "text-primary-foreground/70 hover:text-primary-foreground"
            }`}
          >
            Para sua Empresa
          </button>
        </div>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-5">
          <span className="flex items-center gap-1.5 text-primary-foreground/80">
            <Phone className="w-3.5 h-3.5" />
            Suporte 24h | (11) 2586-2995
          </span>
          <a
            href="https://wa.me/551125862995"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            Fale Conosco
          </a>
          <a
            href="#"
            className="flex items-center gap-1.5 bg-primary-foreground/15 hover:bg-primary-foreground/25 px-3 py-1 rounded-full transition-colors"
          >
            <FileText className="w-3.5 h-3.5" />
            2ª via do Boleto
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
