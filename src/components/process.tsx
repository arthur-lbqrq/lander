import { processSteps } from "@/content/process";
import { Container } from "./container";
import { SectionHeading } from "./section-heading";
import { ProcessDial } from "./process-dial";
import { Reveal } from "./reveal";

const STAGGER_MS = 60;

export function Process() {
  return (
    <section id="processo" className="scroll-mt-20 py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow="Processo" title="Como funciona" />
        <div className="mt-16 rounded-3xl border border-white/15 bg-white/[0.03] p-10 backdrop-blur-xl backdrop-brightness-125 sm:p-14">
          <ProcessDial labels={processSteps.map((step) => step.title)} />
          <ol className="mt-14 grid grid-cols-1 gap-10 border-t border-white/10 pt-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {processSteps.map((step, index) => (
              <li key={step.number}>
                <Reveal delay={index * STAGGER_MS}>
                  <span className="font-display text-3xl font-medium tracking-[-0.03em] text-accent sm:text-4xl">
                    {step.number}
                  </span>
                  <h3 className="mt-4 font-display text-lg font-medium text-paper">
                    {step.title}
                  </h3>
                  <p className="mt-1 font-mono text-xs uppercase tracking-wider text-paper/50">
                    {step.duration}
                  </p>
                  <p className="mt-3 text-base text-paper/70">{step.description}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
