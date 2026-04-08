import { BookOpen, Smartphone, FileText, Wifi, Gauge, MonitorPlay, ChevronRight } from "lucide-react";
import appClienteImg from "@/assets/app-cliente.jpg";
import googlePlayBadge from "@/assets/google-play-badge.png";
import appStoreBadge from "@/assets/app-store-badge.png";
import { Button } from "@/components/ui/button";
import PageBanner from "@/components/PageBanner";

const steps = {
  portal: [
    { num: "1", text: "Acesse a Área do Cliente ou baixe o app NW3." },
    { num: "2", text: "Digite o seu CPF ou CNPJ." },
    { num: "3", text: "Informe sua senha e faça login." },
  ],
  boleto: [
    { num: "1", text: "Acesse a Área do Cliente pelo app ou portal." },
    { num: "2", text: "Vá na seção Faturas." },
    { num: "3", text: "Selecione o boleto desejado e copie o código de barras ou gere o PDF." },
    { num: "4", text: "Faça o pagamento pelo app do seu banco ou em uma lotérica." },
  ],
  semInternet: [
    { num: "1", text: "Verifique se as fontes dos equipamentos estão conectadas e se há energia elétrica." },
    { num: "2", text: "Desligue da fonte de energia, aguarde 15 segundos e religue." },
    { num: "3", text: "Se o LED \"LOS\" (vermelho) estiver aceso ou piscando, entre em contato com o Suporte Técnico." },
  ],
  testeVelocidade: [
    { num: "1", text: "Certifique-se que não há outros dispositivos conectados à rede." },
    { num: "2", text: "Conecte o notebook ou PC via cabo de rede ao roteador." },
    { num: "3", text: "Acesse o teste de velocidade e clique em Iniciar." },
  ],
};

const navItems = [
  { label: "App e Portal", icon: Smartphone, anchor: "#portal" },
  { label: "2ª Via", icon: FileText, anchor: "#boleto" },
  { label: "Internet", icon: Wifi, anchor: "#internet" },
  { label: "Teste de Velocidade", icon: Gauge, anchor: "#teste" },
  { label: "Wi-Fi", icon: Wifi, anchor: "#wifi" },
];

const StepList = ({ items }: { items: { num: string; text: string }[] }) => (
  <div className="space-y-4">
    {items.map((step) => (
      <div key={step.num} className="flex items-start gap-4">
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg">
          {step.num}
        </div>
        <p className="text-muted-foreground text-base pt-2">{step.text}</p>
      </div>
    ))}
  </div>
);

const ManualCliente = () => {
  return (
    <>
      <PageBanner
        icon={BookOpen}
        title="Manual do"
        highlight="Cliente"
        description="Tudo o que você precisa saber para aproveitar ao máximo os serviços NW3."
      />

      {/* Navigation tabs */}
      <div className="bg-card border-b border-border sticky top-16 z-30">
        <div className="container mx-auto px-4 max-w-5xl">
          <nav className="flex overflow-x-auto gap-1 py-2 scrollbar-hide">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.anchor}
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-primary/5 transition-colors whitespace-nowrap"
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* App e Portal do Cliente */}
      <section id="portal" className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <Smartphone className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground">
                App e Portal do <span className="text-gradient">Cliente</span>
              </h2>
              <p className="text-muted-foreground text-sm">Como acessar sua conta NW3</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-start">
            <StepList items={steps.portal} />
            <div className="bg-card rounded-2xl border border-border overflow-hidden">
              <img
                src={appClienteImg}
                alt="Pessoa usando o app NW3 no celular"
                className="w-full h-56 object-cover object-top"
                loading="lazy"
                width={800}
                height={800}
              />
              <div className="p-8 text-center">
                <p className="text-muted-foreground text-sm mb-4">
                  Acesse pelo navegador ou baixe o app no seu smartphone.
                </p>
                <a
                  href="http://sgp.nw3internet.com.br:8000/accounts/central/login"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="cta" size="lg" className="w-full mb-4">
                    <ChevronRight className="w-5 h-5 mr-2" />
                    Acessar Portal do Cliente
                  </Button>
                </a>
                <p className="text-muted-foreground text-xs mb-3">Baixe o app:</p>
                <div className="flex items-center justify-center gap-3">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.provedor.nw3internet"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={googlePlayBadge} alt="Disponível no Google Play" className="h-14" loading="lazy" />
                  </a>
                  <a
                    href="https://apps.apple.com/us/app/nw3-internet/id6741180251"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={appStoreBadge} alt="Disponível na App Store" className="h-14" loading="lazy" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2ª Via do Boleto */}
      <section id="boleto" className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <FileText className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground">
                2ª Via do <span className="text-gradient">Boleto</span>
              </h2>
              <p className="text-muted-foreground text-sm">Como acessar sua fatura</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-start">
            <StepList items={steps.boleto} />
            <div className="bg-card rounded-2xl border border-border p-8">
              <h3 className="font-heading font-bold text-foreground text-lg mb-3">Importante</h3>
              <ul className="space-y-3 text-muted-foreground text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  Mantenha seus dados de contato atualizados para receber notificações de vencimento.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  O pagamento pode levar até 48h para ser compensado.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  Em caso de dúvidas, entre em contato pelo WhatsApp.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Internet - Sem Sinal */}
      <section id="internet" className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <Wifi className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground">
                Sem sinal de <span className="text-gradient">Internet?</span>
              </h2>
              <p className="text-muted-foreground text-sm">O que fazer antes de chamar o Suporte</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-start">
            <StepList items={steps.semInternet} />
            <div className="bg-card rounded-2xl border border-border p-8">
              <h3 className="font-heading font-bold text-foreground text-lg mb-3">Conheça seus equipamentos</h3>
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-accent font-bold text-xs">ONU</span>
                  </div>
                  <p className="text-muted-foreground">Recebe o sinal de fibra óptica e autentica a conexão do usuário.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Wifi className="w-4 h-4 text-accent" />
                  </div>
                  <p className="text-muted-foreground">O roteador distribui o sinal por cabo e rede Wi-Fi para seus dispositivos.</p>
                </div>
              </div>
              <div className="mt-6 p-4 bg-primary/5 rounded-xl">
                <p className="text-xs text-muted-foreground">
                  <strong className="text-foreground">Dica:</strong> Para smart TVs, desktops e videogames, prefira conexão via cabo de rede para melhor desempenho.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teste de Velocidade */}
      <section id="teste" className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <Gauge className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground">
                Teste de <span className="text-gradient">Velocidade</span>
              </h2>
              <p className="text-muted-foreground text-sm">Como testar sua conexão corretamente</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-start">
            <StepList items={steps.testeVelocidade} />
            <div className="bg-card rounded-2xl border border-border p-8 text-center">
              <Gauge className="w-16 h-16 text-primary mx-auto mb-4 opacity-30" />
              <p className="text-muted-foreground text-sm mb-2">
                Testes via cabo de rede são mais precisos.
              </p>
              <p className="text-muted-foreground text-xs mb-6">
                Em planos superiores a 100 Mega, use equipamento com porta Gigabit Ethernet.
              </p>
              <Button variant="cta" size="lg" className="w-full">
                Iniciar Teste de Velocidade
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Cobertura Wi-Fi */}
      <section id="wifi" className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <Wifi className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground">
                Cobertura <span className="text-gradient">Wi-Fi</span>
              </h2>
              <p className="text-muted-foreground text-sm">Entenda as frequências 2.4 GHz e 5 GHz</p>
            </div>
          </div>

          <p className="text-muted-foreground mb-8 max-w-2xl">
            Os equipamentos disponibilizados pela NW3 são <strong className="text-foreground">dual band</strong>, permitindo escolher a frequência ideal para cada situação.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            <div className="bg-card rounded-2xl border border-border p-8">
              <h3 className="font-heading text-xl font-bold text-foreground mb-4">2.4 GHz</h3>
              <ul className="space-y-3 text-muted-foreground text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span>
                  Maior área de cobertura
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span>
                  Melhor para atravessar paredes e objetos sólidos
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-muted-foreground/50 font-bold">✗</span>
                  Velocidade de transferência limitada
                </li>
              </ul>
            </div>
            <div className="bg-card rounded-2xl border border-border p-8">
              <h3 className="font-heading text-xl font-bold text-foreground mb-4">5 GHz</h3>
              <ul className="space-y-3 text-muted-foreground text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span>
                  Maiores velocidades de transferência
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-muted-foreground/50 font-bold">✗</span>
                  Menor área de cobertura
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-muted-foreground/50 font-bold">✗</span>
                  Maior dificuldade para atravessar paredes
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-primary/5 rounded-2xl p-8 text-center">
            <h3 className="font-heading text-lg font-bold text-foreground mb-2">
              Quer ampliar a cobertura do Wi-Fi?
            </h3>
            <p className="text-muted-foreground text-sm mb-6 max-w-xl mx-auto">
              Para melhorar a performance da conexão na sua residência ou empresa, entre em contato e conheça nossas opções de Wi-Fi e cabo extra.
            </p>
            <a href="https://wa.me/551125862995" target="_blank" rel="noopener noreferrer">
              <Button variant="cta" size="lg">
                Fale Conosco
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ManualCliente;
