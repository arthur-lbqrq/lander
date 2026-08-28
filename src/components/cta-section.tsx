import { getWhatsappUrl, siteConfig } from "@/content/site";
import { Container } from "./container";
import { ArrowUpRightIcon } from "./icons";

export function CtaSection() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="rounded-3xl border border-line bg-surface px-8 py-16 text-center sm:px-16">
          <h2 className="text-balance font-display text-3xl font-medium tracking-[-0.03em] text-paper sm:text-4xl">
            Vamos tirar sua landing page do papel?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-paper/70">
            Fale agora pelo WhatsApp e receba um orçamento sem compromisso.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={getWhatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-accent px-6 py-3 font-mono text-sm text-paper transition-colors hover:bg-accent/10"
            >
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
