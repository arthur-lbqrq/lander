import { PowerTraceFrame } from "./power-trace-frame";

/**
 * Elemento de assinatura visual do hero: um mockup de janela de navegador
 * com uma landing page abstrata dentro. Usa a "rota de descida" oficial do
 * kit de identidade — traço pontilhado que desce até a seta pousando sobre
 * uma linha, junto ao CTA — em vez de um cursor de mouse solto. Puramente
 * ilustrativo, por isso fica oculto de leitores de tela.
 */
export function BrowserMockup() {
  return (
    <div
      aria-hidden="true"
      className="relative w-full overflow-hidden rounded-2xl border border-line bg-ink shadow-2xl shadow-black/40"
    >
      <div className="flex items-center gap-4 border-b border-line px-4 py-3 sm:px-5">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
        </div>
        <div className="flex flex-1 justify-center">
          <div className="flex items-center gap-1.5 rounded-full bg-surface px-4 py-1.5 font-mono text-xs text-paper/60">
            <span>lander.co</span>
            <span className="h-3 w-px animate-blink bg-accent" />
          </div>
        </div>
      </div>

      <div className="px-6 py-10 sm:px-10 sm:py-14">
        <span className="inline-block rounded-full border border-accent/30 bg-accent/10 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-paper">
          Landing Page
        </span>

        <div className="mt-6 space-y-3">
          <div className="h-4 w-3/4 rounded bg-paper sm:h-5" />
          <div className="h-4 w-1/2 rounded bg-paper sm:h-5" />
        </div>

        <div className="mt-5 space-y-2">
          <div className="h-2.5 w-5/6 rounded bg-paper/30" />
          <div className="h-2.5 w-2/3 rounded bg-paper/30" />
        </div>

        <div className="relative mt-14 inline-flex">
          <span className="inline-flex items-center rounded-md border border-accent px-5 py-2.5 font-mono text-xs text-paper sm:text-sm">
            Começar agora
          </span>
          <svg
            viewBox="0 0 60 70"
            className="pointer-events-none absolute -top-14 left-2 h-14 w-12"
            fill="none"
          >
            <path
              d="M2 2C30 2 40 30 40 46"
              stroke="#2D5CFF"
              strokeWidth="1.5"
              strokeDasharray="4 6"
            />
            <circle cx="2" cy="2" r="2.5" fill="#68686C" />
            <path
              d="M40 34L40 54M40 54L32 46M40 54L48 46"
              stroke="#2D5CFF"
              strokeWidth="2.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path d="M26 60H54" stroke="#68686C" strokeWidth="1.5" />
          </svg>
        </div>
      </div>

      <PowerTraceFrame />
    </div>
  );
}
