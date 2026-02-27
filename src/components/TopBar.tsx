import { Phone, MessageCircle, FileText } from "lucide-react";

interface TopBarProps {
  segment: "voce" | "empresa";
  onSegmentChange: (segment: "voce" | "empresa") => void;
}

const TopBar = ({ segment, onSegmentChange }: TopBarProps) => {
  return (
    <div className="bg-foreground text-primary-foreground text-sm">
      <div className="container mx-auto px-4 flex items-center justify-between h-9">
        {/* Segment toggle */}
        <div className="flex items-center gap-0.5 bg-primary-foreground/10 rounded-md p-0.5">
          <button
            onClick={() => onSegmentChange("voce")}
            className={`px-3.5 py-1 rounded text-xs font-medium transition-all ${
              segment === "voce"
                ? "bg-accent text-accent-foreground"
                : "text-primary-foreground/60 hover:text-primary-foreground"
            }`}
          >
            Para Você
          </button>
          <button
            onClick={() => onSegmentChange("empresa")}
            className={`px-3.5 py-1 rounded text-xs font-medium transition-all ${
              segment === "empresa"
                ? "bg-accent text-accent-foreground"
                : "text-primary-foreground/60 hover:text-primary-foreground"
            }`}
          >
            Empresa
          </button>
        </div>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-5 text-xs">
          <span className="flex items-center gap-1.5 text-primary-foreground/70">
            <Phone className="w-3 h-3" />
            (11) 2586-2995
          </span>
          <a
            href="https://wa.me/551125862995"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
          >
            <MessageCircle className="w-3 h-3" />
            WhatsApp
          </a>
          <a
            href="#"
            className="flex items-center gap-1.5 bg-primary-foreground/10 hover:bg-primary-foreground/20 px-3 py-1 rounded transition-colors"
          >
            <FileText className="w-3 h-3" />
            2ª via Boleto
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
