import { getWhatsappUrl, siteConfig } from "@/content/site";
import { Container } from "./container";

export function CtaSection() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="rounded-3xl border border-white/15 bg-white/[0.03] px-8 py-20 text-center backdrop-blur-xl backdrop-brightness-125 sm:px-16 sm:py-24">
          <h2 className="text-balance font-display text-3xl leading-[1.1] font-medium tracking-[-0.03em] text-paper sm:text-4xl">
            Vamos tirar sua landing page do papel?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-paper/70 sm:text-lg">
            Orçamento sem compromisso, direto no WhatsApp.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href={getWhatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-paper px-[30px] py-[15px] font-display text-[17px] font-medium tracking-[-0.01em] text-ink transition-colors duration-[180ms] ease-out hover:bg-accent hover:text-paper"
            >
              Falar no WhatsApp
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
