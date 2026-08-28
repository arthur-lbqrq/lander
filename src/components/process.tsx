import { processSteps } from "@/content/process";
import { Container } from "./container";
import { SectionHeading } from "./section-heading";

export function Process() {
  return (
    <section id="processo" className="scroll-mt-20 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Processo"
          title="Como funciona"
          description="Um processo enxuto, do briefing à entrega — sem enrolação."
        />
        <ol className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {processSteps.map((step) => (
            <li key={step.number} className="border-t border-white/10 pt-6">
              <span className="font-display text-3xl font-medium text-accent sm:text-4xl">
                {step.number}
              </span>
              <h3 className="mt-3 font-display text-lg font-medium text-paper">
                {step.title}
              </h3>
              <p className="mt-1 font-mono text-xs uppercase tracking-wider text-paper/50">
                {step.duration}
              </p>
              <p className="mt-3 text-sm text-paper/70">{step.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
