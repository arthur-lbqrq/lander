import type { CSSProperties } from "react";
import { getWhatsappUrl } from "@/content/site";
import { Container } from "./container";
import { HeroMockupStage } from "./hero-mockup-stage";
import { Eyebrow } from "./eyebrow";
import { ArrowUpRightIcon, ArrowRightIcon, SwitchIcon } from "./icons";

/**
 * Hero power-on sequence: eyebrow → headline → paragraph → CTA row → mockup
 * arrive as one authored beat (hero-rise, globals.css), each step ~80ms
 * after the last. The one focal entrance on the page — nothing else on the
 * site replays this pattern. Pure CSS: content is already in the markup,
 * this only staggers its rise, so a blocked script never hides it.
 */
function riseStyle(delayMs: number): CSSProperties {
  return {
    animation: `hero-rise 600ms cubic-bezier(0.16, 1, 0.3, 1) ${delayMs}ms both`,
  };
}

export function Hero() {
  return (
    <section className="pt-28 pb-20 sm:pt-36 sm:pb-28">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-12">
          <div>
            <div style={riseStyle(0)}>
              <Eyebrow>Estúdio de landing pages</Eyebrow>
            </div>
            <h1
              style={riseStyle(80)}
              className="mt-6 text-balance font-display text-4xl leading-[1.05] font-medium tracking-[-0.03em] text-paper sm:text-5xl lg:text-6xl lg:tracking-[-0.035em]"
            >
              Landing pages rápidas.
              <br />
              Feitas para <span className="text-accent">converter</span>.
            </h1>
            <p
              style={riseStyle(160)}
              className="mt-6 max-w-lg text-lg text-paper/70"
            >
              Estúdio freelance especializado em landing pages de alta
              conversão para pequenos negócios — do briefing à entrega, com
              precisão técnica em cada detalhe.
            </p>
            <div style={riseStyle(240)} className="mt-10 flex flex-wrap items-center gap-6">
              <a
                href={getWhatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 rounded-md border border-accent px-6 py-3 font-mono text-sm text-paper transition hover:bg-accent/10 active:scale-[0.97]"
              >
                <SwitchIcon animated className="h-3 w-6" />
                Falar no WhatsApp
                <ArrowUpRightIcon className="h-4 w-4" />
              </a>
              <a
                href="#trabalhos"
                className="inline-flex items-center gap-1.5 font-mono text-sm text-paper/60 transition-colors hover:text-paper"
              >
                Ver portfólio
                <ArrowRightIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div style={riseStyle(320)}>
            <HeroMockupStage />
          </div>
        </div>
      </Container>
    </section>
  );
}
