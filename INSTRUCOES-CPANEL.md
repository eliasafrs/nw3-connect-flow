# Instruções para Deploy no cPanel

## 📦 Arquivos Preparados

O build de produção foi gerado com sucesso na pasta `dist/` e compactado no arquivo `nw3-website.zip`.

## 🚀 Passo a Passo para Upload no cPanel

### 1. Fazer Upload dos Arquivos

1. Acesse o **cPanel** do seu provedor de hospedagem
2. Vá em **Gerenciador de Arquivos** (File Manager)
3. Navegue até a pasta `public_html` (ou a pasta raiz do seu domínio)
4. Faça upload do arquivo `nw3-website.zip`
5. Clique com o botão direito no arquivo ZIP → **Extrair** (Extract)
6. Após a extração, você pode deletar o arquivo `.zip`

### 2. Configurar Redirecionamento SPA (IMPORTANTE!)

Para que as rotas do React Router funcionem corretamente, você precisa configurar o redirecionamento:

#### Opção A: Usando .htaccess (Recomendado)

O arquivo `.htaccess` já está incluído em `public/.htaccess` e foi copiado para o build.

Verifique se o arquivo `public_html/.htaccess` contém:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

#### Opção B: Configuração manual no cPanel

Se o `.htaccess` não funcionar, configure manualmente:

1. No cPanel, vá em **Gerenciador de Arquivos**
2. Clique em **Configurações** (Settings) no topo
3. Marque a opção **Mostrar Arquivos Ocultos** (Show Hidden Files)
4. Na pasta `public_html`, crie ou edite o arquivo `.htaccess`
5. Cole o conteúdo acima

### 3. Verificar Permissões

Certifique-se de que as permissões estão corretas:
- Pastas: 755
- Arquivos: 644

### 4. Testar o Site

1. Acesse seu domínio no navegador
2. Teste a navegação entre páginas
3. Teste atualizar a página (F5) em rotas como `/manual-do-cliente`, `/internet`, etc.
4. Verifique se todas as imagens e recursos carregam corretamente

## 🔧 Estrutura dos Arquivos

```
public_html/
├── index.html          # Arquivo principal
├── .htaccess          # Configuração de redirecionamento
├── assets/            # CSS, JS e imagens
│   ├── *.css
│   ├── *.js
│   └── *.png, *.jpg, *.webp
├── robots.txt         # Configuração para SEO
└── placeholder.svg
```

## ⚠️ Problemas Comuns

### Erro 404 ao navegar entre páginas
- **Causa**: `.htaccess` não está configurado corretamente
- **Solução**: Verifique se o arquivo `.htaccess` existe e está na raiz do site

### Imagens não carregam
- **Causa**: Caminhos incorretos ou permissões
- **Solução**: Verifique permissões (arquivos 644) e limpe o cache do navegador

### Site não aparece
- **Causa**: Arquivos não estão na pasta correta
- **Solução**: Certifique-se de que o conteúdo da pasta `dist` está em `public_html`, não a pasta `dist` em si

## 📱 Funcionalidades que Requerem Backend

**IMPORTANTE**: Este é apenas o frontend. As seguintes funcionalidades requerem backend (Lovable Cloud ou Supabase):

- Verificação de disponibilidade por CEP (atualmente usando dados estáticos)
- Formulários de contato
- Autenticação de usuários
- Área do cliente

Se você precisar dessas funcionalidades, mantenha o projeto publicado no Lovable Cloud ou configure o Supabase separadamente.

## 🌐 Widget WTS Chat

O widget de chat WTS continuará funcionando, pois é carregado de um servidor externo via JavaScript.

## ✅ Checklist Final

- [ ] Arquivos extraídos em `public_html`
- [ ] `.htaccess` configurado corretamente
- [ ] Permissões verificadas
- [ ] Site acessível pelo domínio
- [ ] Navegação entre páginas funciona
- [ ] Atualização de página (F5) funciona
- [ ] Imagens carregam corretamente
- [ ] Links externos abrem em nova aba
- [ ] Widget de chat WTS funciona

## 📞 Suporte

Se tiver problemas, entre em contato com o suporte do seu provedor de hospedagem para:
- Verificar se o módulo `mod_rewrite` está ativado
- Confirmar permissões de arquivo
- Verificar logs de erro do servidor
