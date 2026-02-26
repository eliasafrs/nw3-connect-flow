import { FileText, Gauge, BookOpen, User, Scale, Headset, HelpCircle, MessageCircle, Phone, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageBanner from "@/components/PageBanner";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const selfServiceItems = [
  { icon: FileText, title: "2ª via do boleto", desc: "Acesse sua fatura e imprima a 2ª via", href: "#" },
  { icon: Gauge, title: "Teste de velocidade", desc: "Verifique a velocidade da sua internet", href: "#" },
  { icon: BookOpen, title: "Manual do cliente", desc: "Guias e tutoriais para seu plano", href: "#" },
  { icon: User, title: "Área do cliente", desc: "Gerencie seu plano e dados", href: "#" },
  { icon: Scale, title: "Documentos Legais", desc: "Contratos e termos de uso", href: "#" },
  { icon: Headset, title: "Ouvidoria NW3", desc: "Canal oficial de reclamações", href: "#" },
];

const faqs = [
  {
    q: "Como faço para contratar os planos NW3?",
    a: "Você pode contratar pelo nosso WhatsApp, telefone ou diretamente pelo site. Basta escolher o plano e entrar em contato.",
  },
  {
    q: "Qual a velocidade real da internet?",
    a: "Garantimos a velocidade contratada. Nossa rede é 100% fibra óptica, entregando velocidade real sem compartilhamento.",
  },
  {
    q: "Os canais de TV já estão inclusos no plano?",
    a: "Sim! Todos os planos de internet incluem mais de 90 canais de TV digital sem custo adicional.",
  },
  {
    q: "Como funciona o serviço de câmeras?",
    a: "Instalamos câmeras profissionais na sua casa ou empresa com acesso remoto pelo celular. Você pode monitorar 24h de qualquer lugar.",
  },
  {
    q: "Posso adicionar telefone fixo ao meu plano?",
    a: "Sim! O telefone fixo custa a partir de R$ 19,90/mês com ligações ilimitadas para fixos locais e nacionais.",
  },
  {
    q: "Qual o prazo de instalação?",
    a: "Após aprovação, a instalação é realizada em até 48h úteis na área de cobertura.",
  },
  {
    q: "Quais streamings estão disponíveis?",
    a: "Dependendo do plano: Disney+, HBO Max, Globoplay, Deezer, PlayKids, Exitlag e Sky+.",
  },
];

const Ajuda = () => {
  return (
    <>
      <PageBanner
        icon={HelpCircle}
        title="Central de"
        highlight="Ajuda"
        description="Tire suas dúvidas, acesse serviços e entre em contato com nossa equipe."
      />

      {/* Self-service */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-2">
              Autoatendimento <span className="text-gradient">Cliente NW3</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Resolva o que precisa de forma rápida e prática.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-20">
            {selfServiceItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="bg-card rounded-xl p-6 border border-border shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 text-center group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground text-sm mb-1">{item.title}</h3>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </a>
            ))}
          </div>

          {/* FAQ */}
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="font-heading text-3xl font-bold text-foreground mb-2">
                Perguntas <span className="text-gradient">Frequentes</span>
              </h2>
            </div>

            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-xl border border-border px-6">
                  <AccordionTrigger className="text-foreground font-medium text-left">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 lg:py-28 bg-hero">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="font-heading text-3xl font-bold text-primary-foreground mb-4">
            Não encontrou o que procura?
          </h2>
          <p className="text-primary-foreground/60 text-lg mb-8">
            Fale com nossa equipe pelo WhatsApp ou telefone. Estamos prontos para ajudar!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/5500000000000" target="_blank" rel="noopener noreferrer">
              <Button variant="cta" size="lg">
                <MessageCircle className="w-5 h-5 mr-2" />
                Falar no WhatsApp
              </Button>
            </a>
            <a href="tel:0000000000">
              <Button variant="hero-outline" size="lg">
                <Phone className="w-5 h-5 mr-2" />
                Ligar Agora
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Ajuda;
