

## Plano: Alterar cores dos valores dos cards para amarelo

Alterar a cor dos preços (valores monetários) nos cards de planos para amarelo (#facc15), consistente com a identidade visual do site.

### Arquivos a editar:

1. **`src/components/ResidentialPlans.tsx`** — Alterar a cor do `plan.price` de `text-foreground` para `text-yellow-400`

2. **`src/components/BusinessPlans.tsx`** — Alterar a cor do `plan.price` de `text-foreground` para `text-yellow-400`

3. **`src/components/HeroSection.tsx`** — Se houver preços exibidos no hero, aplicar a mesma mudança

4. **`src/pages/Internet.tsx`** — Se houver cards de planos com preços, aplicar amarelo

5. **`src/pages/Fixo.tsx`** — Alterar o preço "19,90" para amarelo

### Detalhes técnicos:
- Usar `text-yellow-400` (equivalente a #facc15) nos elementos de preço (`font-heading text-4xl/5xl/6xl`)
- Manter o "R$", centavos e "/mês" em `text-muted-foreground`

