import { testimonials } from "@/content/testimonials";
import { Container } from "./container";
import { SectionHeading } from "./section-heading";

/**
 * A seção fica oculta enquanto não houver depoimentos reais — ver
 * priority issue P1 da critique de 2026-08-29 (uma seção "em breve"
 * bem antes do CTA final prejudica o momento de maior conversão da
 * página). Ela volta a aparecer sozinha assim que testimonials.ts
 * deixar de estar vazio.
 */
export function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <section id="depoimentos" className="scroll-mt-20 py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Depoimentos"
          title="O que dizem os clientes"
          align="center"
        />
        <div className="mx-auto mt-16 max-w-2xl">
          <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {testimonials.map((testimonial) => (
              <li
                key={testimonial.author}
                className="rounded-3xl border border-white/15 bg-white/[0.03] p-7 backdrop-blur-xl backdrop-brightness-125"
              >
                <p className="text-paper/90">&ldquo;{testimonial.quote}&rdquo;</p>
                <p className="mt-4 font-mono text-xs uppercase tracking-wider text-paper/50">
                  {testimonial.author} — {testimonial.role}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
