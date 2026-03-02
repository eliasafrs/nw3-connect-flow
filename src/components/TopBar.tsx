import { Phone, MessageCircle, FileText } from "lucide-react";

interface TopBarProps {
  segment: "voce" | "empresa";
  onSegmentChange: (segment: "voce" | "empresa") => void;
}

const TopBar = ({ segment, onSegmentChange }: TopBarProps) => {
  return (
    <div className="bg-primary text-primary-foreground text-xs">
      <div className="container mx-auto px-4 flex items-center justify-between h-9">
        {/* Segment toggle */}
        <div className="flex items-center gap-px bg-primary-foreground/10 rounded-sm p-0.5">
          <button
            onClick={() => onSegmentChange("voce")}
            className={`px-3 py-1 rounded-sm text-[11px] font-medium transition-all tracking-wide ${
              segment === "voce"
                ? "bg-primary-foreground text-primary"
                : "text-primary-foreground/50 hover:text-primary-foreground/80"
            }`}
          >
            Para Você
          </button>
          <button
            onClick={() => onSegmentChange("empresa")}
            className={`px-3 py-1 rounded-sm text-[11px] font-medium transition-all tracking-wide ${
              segment === "empresa"
                ? "bg-primary-foreground text-primary"
                : "text-primary-foreground/50 hover:text-primary-foreground/80"
            }`}
          >
            Empresa
          </button>
        </div>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-5 text-[11px]">
          <span className="flex items-center gap-1.5 text-primary-foreground/50">
            <Phone className="w-3 h-3" />
            (11) 2586-2995
          </span>
          <a
            href="https://wa.me/551125862995"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-primary-foreground/50 hover:text-primary-foreground transition-colors"
          >
            <MessageCircle className="w-3 h-3" />
            WhatsApp
          </a>
          <a
            href="#"
            className="flex items-center gap-1.5 text-primary-foreground/50 hover:text-primary-foreground transition-colors"
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
