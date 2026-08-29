import { getWhatsappUrl, siteConfig } from "@/content/site";
import { Container } from "./container";
import { ArrowUpRightIcon, SwitchIcon } from "./icons";

export function CtaSection() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="rounded-3xl border border-line bg-surface px-8 py-16 text-center sm:px-16">
          <h2 className="text-balance font-display text-3xl leading-[1.1] font-medium tracking-[-0.03em] text-paper sm:text-4xl">
            Vamos tirar sua landing page do papel?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-paper/70 sm:text-lg">
            Fale agora pelo WhatsApp e receba um orçamento sem compromisso.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={getWhatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 rounded-md border border-accent px-6 py-3 font-mono text-sm text-paper transition hover:bg-accent/10 active:scale-[0.97]"
            >
              <SwitchIcon className="h-3 w-6" />
              Falar no WhatsApp
              <ArrowUpRightIcon className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="font-mono text-sm text-paper/70 underline decoration-white/30 underline-offset-4 transition-colors hover:text-paper"
            >
              {siteConfig.email}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
