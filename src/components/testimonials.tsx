import { testimonials } from "@/content/testimonials";
import { Container } from "./container";
import { SectionHeading } from "./section-heading";

export function Testimonials() {
  return (
    <section id="depoimentos" className="scroll-mt-20 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Depoimentos"
          title="O que dizem os clientes"
          align="center"
        />
        <div className="mx-auto mt-12 max-w-2xl">
          {testimonials.length > 0 ? (
            <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {testimonials.map((testimonial) => (
                <li
                  key={testimonial.author}
                  className="rounded-2xl border border-white/10 bg-white/[0.02] p-6"
                >
                  <p className="text-paper/90">&ldquo;{testimonial.quote}&rdquo;</p>
                  <p className="mt-4 font-mono text-xs uppercase tracking-wider text-paper/50">
                    {testimonial.author} — {testimonial.role}
                  </p>
                </li>
              ))}
            </ul>
          ) : (
            <div className="rounded-2xl border border-dashed border-white/20 px-8 py-12 text-center">
              <p className="font-medium text-paper/80">
                Os primeiros depoimentos chegam em breve.
              </p>
              <p className="mt-2 text-sm text-paper/50">
                Este espaço está pronto para receber avaliações reais de
                clientes.
              </p>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
