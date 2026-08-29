import Link from "next/link";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Container } from "@/components/container";
import { Eyebrow } from "@/components/eyebrow";
import { Gauge } from "@/components/gauge";
import { ArrowRightIcon, ArrowUpRightIcon, SwitchIcon } from "@/components/icons";
import { getWhatsappUrl } from "@/content/site";

/**
 * The one error/recovery moment on the site — Next.js's bare default 404
 * otherwise breaks the whole Midnight Console identity. The gauge reads
 * "no signal" quite literally: fraction 0 means its needle never moves off
 * rest even once scrolled into view, so the instrument itself communicates
 * the problem before the copy does.
 */
export default function NotFound() {
  return (
    <>
      <Nav />

      <main className="flex-1">
        <section className="pt-28 pb-20 sm:pt-36 sm:pb-28">
          <Container>
            <div className="mx-auto flex max-w-lg flex-col items-center text-center">
              <Eyebrow>Erro 404</Eyebrow>

              <div className="mt-8">
                <Gauge value="—" label="Sem sinal" fraction={0} goodFrom={1} />
              </div>

              <h1 className="mt-8 text-balance font-display text-3xl font-medium tracking-[-0.03em] text-paper sm:text-4xl">
                Essa página não está no ar.
              </h1>
              <p className="mt-4 text-base text-paper/70 sm:text-lg">
                O endereço mudou ou nunca existiu. O resto do painel continua
                funcionando normalmente.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/"
                  className="group inline-flex items-center gap-2.5 rounded-md border border-accent px-6 py-3 font-mono text-sm text-paper transition hover:bg-accent/10 active:scale-[0.97]"
                >
                  <SwitchIcon className="h-3 w-6" />
                  Voltar para o início
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
                <a
                  href={getWhatsappUrl(
                    "Olá! Cheguei numa página do site que não encontrei."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-sm text-paper/60 transition-colors hover:text-paper"
                >
                  Falar com a gente
                  <ArrowUpRightIcon className="h-4 w-4" />
                </a>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
