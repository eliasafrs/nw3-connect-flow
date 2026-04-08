import { Shield } from "lucide-react";
import PageBanner from "@/components/PageBanner";

const PoliticaPrivacidade = () => {
  return (
    <>
      <PageBanner
        icon={Shield}
        title="Política de"
        highlight="Privacidade"
        description="Saiba como tratamos seus dados pessoais"
      />
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none text-foreground/80 space-y-8">
            <p className="text-sm text-muted-foreground">Última atualização: 08 de abril de 2025</p>

            <div>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-3">1. Introdução</h2>
              <p>A NW3 Internet (CNPJ: 33.578.123/0001-63) valoriza a privacidade de seus clientes e usuários. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos suas informações pessoais, em conformidade com a Lei Geral de Proteção de Dados (LGPD – Lei nº 13.709/2018).</p>
            </div>

            <div>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-3">2. Dados Coletados</h2>
              <p>Podemos coletar os seguintes dados pessoais:</p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Nome completo, CPF/CNPJ e data de nascimento</li>
                <li>Endereço residencial ou comercial</li>
                <li>Telefone e e-mail de contato</li>
                <li>Dados de navegação e uso do serviço de internet</li>
                <li>Informações de pagamento e cobrança</li>
                <li>Registros de conexão, conforme Marco Civil da Internet</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-3">3. Finalidade do Tratamento</h2>
              <p>Seus dados são utilizados para:</p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Prestação e manutenção dos serviços contratados</li>
                <li>Faturamento e cobrança</li>
                <li>Atendimento e suporte ao cliente</li>
                <li>Cumprimento de obrigações legais e regulatórias</li>
                <li>Envio de comunicações sobre serviços e promoções (mediante consentimento)</li>
                <li>Melhoria contínua da qualidade dos serviços</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-3">4. Compartilhamento de Dados</h2>
              <p>Seus dados poderão ser compartilhados com:</p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Parceiros comerciais necessários à prestação do serviço</li>
                <li>Autoridades judiciais ou regulatórias, quando exigido por lei</li>
                <li>Empresas de cobrança, em caso de inadimplência</li>
              </ul>
              <p className="mt-2">Não vendemos ou comercializamos seus dados pessoais a terceiros.</p>
            </div>

            <div>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-3">5. Armazenamento e Segurança</h2>
              <p>Adotamos medidas técnicas e organizacionais para proteger seus dados contra acessos não autorizados, perda ou destruição. Os dados são armazenados em servidores seguros e mantidos pelo período necessário ao cumprimento das finalidades descritas ou conforme exigência legal.</p>
            </div>

            <div>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-3">6. Direitos do Titular</h2>
              <p>Conforme a LGPD, você tem direito a:</p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Confirmar a existência de tratamento de dados</li>
                <li>Acessar seus dados pessoais</li>
                <li>Solicitar correção de dados incompletos ou desatualizados</li>
                <li>Solicitar a eliminação de dados desnecessários</li>
                <li>Revogar consentimento a qualquer momento</li>
                <li>Solicitar portabilidade dos dados</li>
              </ul>
              <p className="mt-2">Para exercer seus direitos, entre em contato pelo e-mail <strong>contato@nw3internet.com.br</strong> ou pelo telefone <strong>(11) 2586-2995</strong>.</p>
            </div>

            <div>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-3">7. Cookies</h2>
              <p>Nosso site pode utilizar cookies para melhorar a experiência de navegação. Você pode gerenciar as preferências de cookies diretamente nas configurações do seu navegador.</p>
            </div>

            <div>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-3">8. Alterações nesta Política</h2>
              <p>Esta política pode ser atualizada periodicamente. Recomendamos que consulte esta página regularmente para se manter informado sobre como protegemos seus dados.</p>
            </div>

            <div>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-3">9. Contato</h2>
              <p>Em caso de dúvidas sobre esta Política de Privacidade, entre em contato:</p>
              <ul className="list-none space-y-1 mt-2">
                <li><strong>NW3 Internet</strong></li>
                <li>Rua Domingos Fernandes Nobre, 385 - Vila Itaim - São Paulo</li>
                <li>E-mail: contato@nw3internet.com.br</li>
                <li>Telefone: (11) 2586-2995</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PoliticaPrivacidade;
