import { getWhatsappUrl } from "@/content/site";

/**
 * Hero — design_handoff_navbar_hero/README.md (H1, subheadline, dois CTAs
 * de texto puro — sem ícone, sem seta). O badge "NOVO / Agenda aberta..."
 * do protótipo foi removido a pedido — não era uma claim real do negócio.
 * CTAs mantêm o comportamento real do site (WhatsApp / âncora do
 * portfólio) em vez das âncoras literais do protótipo (`#orcamento`), que
 * não correspondem a nenhuma seção real da página.
 *
 * Sem fundo próprio (nem os feixes de luz do protótipo, ver hero-beams.tsx,
 * unused): o Dark Veil site-wide (dark-veil-background.tsx) mostra através
 * daqui como em qualquer outra seção, a pedido — um único fundo para a
 * página inteira em vez de um fundo dedicado só no hero.
 */
export function Hero() {
  return (
    <section className="relative min-h-[720px]">
      <div className="relative flex flex-col items-center px-5 pt-32 pb-24 text-center min-[860px]:px-8 min-[860px]:pt-48 min-[860px]:pb-[140px]">
        <h1 className="max-w-[860px] text-balance font-display text-[clamp(40px,9vw,76px)] leading-[1.02] font-medium tracking-[-0.04em] text-paper">
          Landing pages que convertem em <span className="text-accent">dias</span>, não semanas
        </h1>

        <p className="mt-8 max-w-[560px] text-lg leading-[1.6] text-[#8A8A8A]">
          Copy, design e performance numa página só — feita para uma única ação.
        </p>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-3.5">
          <a
            href={getWhatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-paper px-[30px] py-[15px] font-display text-[17px] font-medium tracking-[-0.01em] text-ink transition-colors duration-[180ms] ease-out hover:bg-accent hover:text-paper"
          >
            Pedir orçamento
          </a>
          <a
            href="#trabalhos"
            className="rounded-xl border border-white/[0.14] px-[30px] py-[15px] font-display text-[17px] font-medium tracking-[-0.01em] text-[#A8A8A8] transition-colors duration-[180ms] ease-out hover:border-white/[0.32] hover:text-paper"
          >
            Ver trabalhos
          </a>
        </div>
      </div>
    </section>
  );
}
