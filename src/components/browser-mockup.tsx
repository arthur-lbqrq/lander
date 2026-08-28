/**
 * Elemento de assinatura visual do hero: um mockup de janela de navegador
 * com uma landing page abstrata dentro — cursor "pousado" perto do botão
 * principal, reforçando o motivo de marca (janela + cursor = "landing").
 * Puramente ilustrativo, por isso fica oculto de leitores de tela.
 */
export function BrowserMockup() {
  return (
    <div
      aria-hidden="true"
      className="w-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] shadow-2xl shadow-black/40"
    >
      <div className="flex items-center gap-4 border-b border-white/10 px-4 py-3 sm:px-5">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-paper/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-paper/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-paper/20" />
        </div>
        <div className="flex flex-1 justify-center">
          <div className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 font-mono text-xs text-paper/60">
            <span>lander.co</span>
            <span className="h-3 w-px animate-blink bg-accent" />
          </div>
        </div>
      </div>

      <div className="bg-paper px-6 py-10 sm:px-10 sm:py-14">
        <span className="inline-block rounded-full bg-accent/10 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-ink">
          Landing Page
        </span>

        <div className="mt-6 space-y-3">
          <div className="h-4 w-3/4 rounded bg-ink sm:h-5" />
          <div className="h-4 w-1/2 rounded bg-ink sm:h-5" />
        </div>

        <div className="mt-5 space-y-2">
          <div className="h-2.5 w-5/6 rounded bg-muted/50" />
          <div className="h-2.5 w-2/3 rounded bg-muted/50" />
        </div>

        <div className="relative mt-8 inline-flex">
          <span className="inline-flex items-center rounded-lg bg-accent px-5 py-2.5 font-mono text-xs text-paper sm:text-sm">
            Começar agora
          </span>
          <svg
            viewBox="0 0 24 24"
            className="absolute -top-5 -left-3 h-8 w-8 text-accent drop-shadow-[0_1px_1px_rgba(10,10,10,0.25)]"
          >
            <path
              d="M13 10L19 13.2L15.7 14.35L17.6 18.2L16 19L14.1 15.15L11.9 17Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
