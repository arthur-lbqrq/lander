import { getWhatsappUrl } from "@/content/site";
import { Container } from "./container";
import { BrowserMockup } from "./browser-mockup";
import { Eyebrow } from "./eyebrow";
import { ArrowUpRightIcon } from "./icons";

export function Hero() {
  return (
    <section className="pt-28 pb-20 sm:pt-36 sm:pb-28">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-12">
          <div>
            <Eyebrow>Estúdio de landing pages</Eyebrow>
            <h1 className="mt-6 text-balance font-display text-4xl leading-[1.05] font-medium tracking-[-0.03em] text-paper sm:text-5xl lg:text-6xl lg:tracking-[-0.035em]">
              Landing pages rápidas.
              <br />
              Feitas para <span className="text-accent">converter</span>.
            </h1>
            <p className="mt-6 max-w-lg text-lg text-paper/70">
              Estúdio freelance especializado em landing pages de alta
              conversão para pequenos negócios — do briefing à entrega, com
              precisão técnica em cada detalhe.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-6">
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
                href="#trabalhos"
                className="inline-flex items-center gap-1.5 font-mono text-sm text-paper/60 transition-colors hover:text-paper"
              >
                Ver portfólio →
              </a>
            </div>
          </div>

          <BrowserMockup />
        </div>
      </Container>
    </section>
  );
}
