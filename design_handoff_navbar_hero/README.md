# Handoff: Navbar + Hero — lander.co

## Overview
Barra de navegação flutuante (pill translúcida com blur) sobre um hero escuro com feixes de luz azul, para o site do lander.co — estúdio de landing pages de alta conversão. É o topo da home: navegação, badge de status, headline, subheadline e dois CTAs.

## About the Design Files
Os arquivos deste pacote são **referências de design criadas em HTML** — protótipos que mostram aparência e comportamento pretendidos, **não código de produção para copiar direto**. A tarefa é **recriar esses designs no ambiente já existente do codebase** (React, Vue, Next, SwiftUI, etc.), usando seus padrões, componentes e bibliotecas estabelecidos. Se ainda não houver ambiente, escolha o framework mais adequado (sugestão: Next.js + Tailwind) e implemente lá.

`Navbar lander.co.dc.html` é um "Design Component": HTML com tags próprias de runtime (`<helmet>`, `style-hover`). Ignore o wrapper e o runtime — o que importa é a estrutura, os estilos inline e os valores documentados abaixo. `style-hover="…"` = estado `:hover` daquele elemento.

## Fidelity
**High-fidelity.** Cores, tipografia, espaçamentos e estados são finais. Recriar pixel-perfect com as libs do codebase.

## Screens / Views

### 1. Navbar (pill flutuante)
- **Purpose**: navegação primária + CTA de conversão sempre visível.
- **Layout**: container full-width, `padding: 28px 32px`, conteúdo centralizado (`display:flex; justify-content:center`). A pill em si: `width:100%; max-width:880px`, flex row, `align-items:center`, `justify-content:space-between`, `gap:24px`, `padding: 12px 14px 12px 22px`.
- **Superfície da pill**:
  - `border-radius: 999px`
  - `border: 1px solid rgba(250,250,250,.10)`
  - `background: rgba(16,16,18,.55)`
  - `backdrop-filter: blur(18px) saturate(1.2)`
  - `box-shadow: inset 0 1px 0 rgba(250,250,250,.06), 0 20px 50px rgba(0,0,0,.55)`
- **Componentes**:
  - **Marca** (link): flex row, `gap:12px`. Símbolo SVG 26×26 (janela de browser + cursor/seta descendo, traço `stroke-width:6`, viewBox `-3 -3 66 66`; retângulo externo `rx:14` em `#FAFAFA`, barra de título preenchida em `#FAFAFA`, seta em `#2D5CFF`). Wordmark: Space Grotesk 500, `19px`, `letter-spacing:-.02em`, `#FAFAFA`, com `.co` em `#2D5CFF`.
  - **Links** (`Serviços`, `Trabalhos`, `Processo`): Inter 500, `15px`, `#A8A8A8`, `padding: 9px 14px`, `border-radius:999px`, `transition: color .18s ease, background .18s ease`. Hover: `color:#FAFAFA`, `background: rgba(250,250,250,.06)`.
  - **CTA `Orçamento`**: `margin-left:8px`, `padding: 11px 22px`, `border-radius:999px`, `background:#FAFAFA`, `color:#0A0A0A`, Space Grotesk 500 `15px`, `letter-spacing:-.01em`, `transition: background/color/transform .18s ease`. Hover: `background:#2D5CFF`, `color:#FAFAFA`, `transform: translateY(-1px)`.
  - Grupo de links + CTA: flex row, `gap:8px`.

### 2. Hero
- **Layout**: `position:relative`, coluna centralizada, `text-align:center`, `padding: 96px 32px 140px`. Seção pai: `min-height:720px`, `background:#0A0A0A`, `overflow:hidden`.
- **Fundo (4 camadas, `position:absolute; inset:0; pointer-events:none`)**:
  1. Feixe A: `560×900px`, topo `-20%`, centralizado (`left:50%; margin-left:-280px`), `background: linear-gradient(to bottom, rgba(45,92,255,.55), rgba(45,92,255,0) 72%)`, `filter: blur(80px)`, `rotate:-18deg`, `transform-origin: top center`, animação `beam-drift 14s ease-in-out infinite`.
  2. Feixe B: `420×880px`, topo `-25%`, `left:50%; margin-left:-60px`, gradiente igual com alpha `.42`, `blur(96px)`, `rotate:20deg`, `beam-drift 18s ease-in-out infinite reverse`.
  3. Glow: `900×520px`, `top:-180px`, `margin-left:-450px`, `radial-gradient(ellipse at center, rgba(45,92,255,.30), transparent 65%)`, `blur(60px)`.
  4. Vinheta: `radial-gradient(ellipse 90% 60% at 50% 0%, transparent 20%, rgba(10,10,10,.72) 78%)`.
  - `@keyframes beam-drift { 0%,100% { transform: translateX(-4%) scaleY(1) } 50% { transform: translateX(4%) scaleY(1.06) } }`
- **Componentes**:
  - **Badge**: inline-flex, `gap:10px`, `padding: 5px 14px 5px 6px`, `border-radius:999px`, `border:1px solid rgba(250,250,250,.12)`, `background: rgba(16,16,18,.6)`, `backdrop-filter: blur(10px)`, `margin-bottom:40px`. Dentro: tag `NOVO` — `padding:4px 11px`, `border-radius:999px`, `background:#2D5CFF`, JetBrains Mono 500 `11px`, `letter-spacing:.12em`, `#FAFAFA`; texto `Agenda aberta para setembro` — Inter `14px`, `#A8A8A8`.
  - **H1**: `max-width:860px`, Space Grotesk 500, `76px`, `line-height:1.02`, `letter-spacing:-.04em`, `#FAFAFA`, `text-wrap: pretty`. Copy: “Landing pages que convertem em **dias**, não semanas” — a palavra `dias` em `#2D5CFF`.
  - **Subheadline**: `margin-top:32px`, `max-width:560px`, Inter `19px`, `line-height:1.6`, `#8A8A8A`. Copy: “Copy, design e performance numa página só — feita para uma única ação.”
  - **CTAs** (`margin-top:48px`, flex row, `gap:14px`, `flex-wrap:wrap`, centralizados):
    - Primário `Pedir orçamento`: `padding:15px 30px`, `border-radius:12px`, `background:#FAFAFA`, `color:#0A0A0A`, Space Grotesk 500 `17px`, `letter-spacing:-.01em`. Hover: `background:#2D5CFF`, `color:#FAFAFA`.
    - Secundário `Ver trabalhos`: mesmo padding/radius, `border:1px solid rgba(250,250,250,.14)`, `color:#A8A8A8`, transparente. Hover: `color:#FAFAFA`, `border-color: rgba(250,250,250,.32)`.

## Interactions & Behavior
- Todos os hovers: `transition` de `.18s ease` nas propriedades citadas. Sem hover em touch (`@media (hover: hover)`).
- Links da nav apontam para âncoras da própria home (`#servicos`, `#trabalhos`, `#processo`, `#orcamento`) — scroll suave.
- Feixes de luz: animação CSS infinita, decorativa. Respeitar `@media (prefers-reduced-motion: reduce)` desligando `animation`.
- **Sugerido (não presente no protótipo)**: sticky navbar. Manter `position: sticky; top: 16px; z-index: 50`; ao rolar >24px, aumentar opacidade do fundo (`rgba(16,16,18,.55)` → `.78`) e a borda (`.10` → `.16`), transição `.24s ease`.
- **Responsivo (a definir na implementação)**: abaixo de ~860px, esconder os links e usar botão de menu (hambúrguer) abrindo painel full-screen escuro com os mesmos links em Space Grotesk 500 `32px`; manter o CTA visível na pill. H1 escala para `clamp(40px, 9vw, 76px)`; padding do hero cai para `64px 20px 96px`. Alvos de toque ≥44px.
- `:focus-visible`: `outline: 2px solid #2D5CFF; outline-offset: 2px` em todos os interativos.

## State Management
- `isScrolled: boolean` — listener de scroll (passivo, throttle via `requestAnimationFrame`) para o estado sticky da navbar.
- `isMenuOpen: boolean` — menu mobile; travar scroll do body quando aberto, fechar em `Escape`, em clique fora e ao navegar.
- Sem data fetching.

## Design Tokens
**Cores**
| Token | Valor | Uso |
| --- | --- | --- |
| `--bg` | `#0A0A0A` | fundo da página |
| `--surface` | `rgba(16,16,18,.55)` | pill da navbar / badge (`.6`) |
| `--text` | `#FAFAFA` | texto primário, botão primário |
| `--text-muted` | `#A8A8A8` | links da nav, texto do badge |
| `--text-dim` | `#8A8A8A` | subheadline |
| `--accent` | `#2D5CFF` | seta do símbolo, `.co`, tag NOVO, hovers |
| `--border` | `rgba(250,250,250,.10)` | borda da pill |
| `--border-strong` | `rgba(250,250,250,.32)` | borda hover do CTA secundário |
| `--hover-fill` | `rgba(250,250,250,.06)` | fundo hover dos links |

**Espaçamento** (px): 8, 10, 12, 14, 22, 24, 28, 32, 40, 48, 96, 140.

**Tipografia**
- Display/UI de marca: **Space Grotesk** 500 — 76px/1.02/-.04em (h1), 19px/-.02em (wordmark), 17px e 15px (botões).
- Corpo: **Inter** 400/500 — 19px/1.6 (sub), 15px (links), 14px (badge).
- Técnica: **JetBrains Mono** 500 — 11px/.12em (tag NOVO).
- Google Fonts: `Space+Grotesk:wght@400;500;700`, `Inter:wght@400;500;600`, `JetBrains+Mono:wght@400;500`.

**Radius**: 12px (botões do hero), 999px (pill, links, badge), 14 (rx do símbolo no viewBox 60).

**Shadows**: `inset 0 1px 0 rgba(250,250,250,.06)`, `0 20px 50px rgba(0,0,0,.55)`.

**Blur**: `blur(18px) saturate(1.2)` (navbar), `blur(10px)` (badge), `blur(60–96px)` (feixes).

## Assets
- **Símbolo lander.co**: SVG inline no HTML (sem arquivo binário separado) — o markup completo está na seção Navbar acima. Sem imagens raster, sem biblioteca de ícones.
- Fontes: Google Fonts (autohospedar em produção para performance).

## Files
- `Navbar lander.co.dc.html` — navbar + hero (fonte deste handoff).
- `Kit de Identidade lander.co.dc.html` — kit de identidade completo: sistema de logo, paleta estendida, escala tipográfica, aplicações.
