import Link from "next/link";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Container } from "@/components/container";
import { Eyebrow } from "@/components/eyebrow";
import { Gauge } from "@/components/gauge";
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
        <section className="pt-32 pb-24 sm:pt-40 sm:pb-32">
          <Container>
            <div className="mx-auto flex max-w-lg flex-col items-center text-center">
              <Eyebrow>Erro 404</Eyebrow>

              <div className="mt-10">
                <Gauge value="—" label="Sem sinal" fraction={0} goodFrom={1} />
              </div>

              <h1 className="mt-10 text-balance font-display text-3xl font-medium tracking-[-0.03em] text-paper sm:text-4xl">
                Essa página não está no ar.
              </h1>
              <p className="mt-5 text-base text-paper/70 sm:text-lg">
                O endereço mudou ou nunca existiu. O resto do painel continua
                funcionando normalmente.
              </p>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/"
                  className="rounded-xl bg-paper px-[30px] py-[15px] font-display text-[17px] font-medium tracking-[-0.01em] text-ink transition-colors duration-[180ms] ease-out hover:bg-accent hover:text-paper"
                >
                  Voltar para o início
                </Link>
                <a
                  href={getWhatsappUrl(
                    "Olá! Cheguei numa página do site que não encontrei."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-white/[0.14] px-[30px] py-[15px] font-display text-[17px] font-medium tracking-[-0.01em] text-[#A8A8A8] transition-colors duration-[180ms] ease-out hover:border-white/[0.32] hover:text-paper"
                >
                  Falar com a gente
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
