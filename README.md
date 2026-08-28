# lander.co

Site institucional/portfólio da lander.co — estúdio freelance de landing pages de alta conversão.

## Stack

- [Next.js 16](https://nextjs.org) (App Router) + TypeScript
- Tailwind CSS v4
- Sem CMS: todo o conteúdo vive em `src/content/*.ts`
- Sem dependências de UI externas — ícones e o símbolo da marca são SVGs próprios

## Rodando localmente

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # build de produção
npm run start   # roda o build de produção localmente
npm run lint    # ESLint
```

## Editando o conteúdo

Todo o texto e dados do site ficam em `src/content/`. Não é necessário mexer nos componentes para atualizar conteúdo.

| Arquivo | O que controla |
| --- | --- |
| `src/content/site.ts` | Nome, descrição, número de WhatsApp, e-mail, Instagram |
| `src/content/projects.ts` | Os 2 cases reais do portfólio + os cards "Em breve" |
| `src/content/testimonials.ts` | Depoimentos (vazio até o primeiro depoimento real) |
| `src/content/process.ts` | As 4 etapas do processo e seus prazos |
| `src/content/metrics.ts` | Os 3 números da faixa de métricas |

Procure por `TODO` nesses arquivos — são os pontos que ainda precisam do dado real:

```bash
grep -rn "TODO" src/content/
```

### Trocar o número de WhatsApp e e-mail

Edite `src/content/site.ts`:

```ts
whatsappNumber: "55SEUNUMEROAQUI", // apenas dígitos: código do país + DDD + número
email: "ola@lander.co",
```

### Trocar os 2 projetos do portfólio

Edite os dois primeiros itens (`status: "live"`) em `src/content/projects.ts` — troque `client`, `description`, `tag` e a imagem:

```ts
import minhaImagem from "./images/meu-projeto.png"; // adicione o arquivo em src/content/images/

{
  status: "live",
  id: "projeto-01",
  client: "Nome do Cliente",
  description: "O que foi feito e qual resultado a página busca entregar.",
  tag: "Landing Page",
  image: minhaImagem,
}
```

Qualquer item com `status: "soon"` aparece como "Em breve" no grid. Para publicar um novo case, troque o status para `"live"` e preencha os campos.

### Adicionar um depoimento real

`src/content/testimonials.ts` começa vazio de propósito — enquanto estiver vazio, a seção mostra um placeholder explícito em vez de inventar um depoimento falso. Para publicar o primeiro:

```ts
export const testimonials: Testimonial[] = [
  { quote: "...", author: "Nome", role: "Cargo, Empresa" },
];
```

## Identidade visual

As cores e fontes da marca estão centralizadas em `src/app/globals.css` (bloco `@theme`) — não devem ser alteradas sem alinhar com a identidade visual definida no briefing. O símbolo da marca (janela de navegador + cursor) está em `src/components/brand-mark.tsx`, com uma cópia estática equivalente em `src/app/icon.svg` (favicon).

## Deploy na Vercel

1. Suba o projeto para um repositório Git (GitHub, GitLab ou Bitbucket).
2. Em [vercel.com/new](https://vercel.com/new), importe o repositório — a Vercel detecta Next.js automaticamente, nenhuma configuração adicional é necessária.
3. Depois do primeiro deploy, atualize `url` em `src/content/site.ts` para o domínio final e publique de novo (esse valor alimenta o link canônico, o sitemap e as tags Open Graph).
