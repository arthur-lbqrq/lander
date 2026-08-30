import { projects } from "@/content/projects";
import { Container } from "./container";
import { SectionHeading } from "./section-heading";
import { PortfolioCard } from "./portfolio-card";
import { BrandMark } from "./brand-mark";
import { Reveal } from "./reveal";

const MAX_STAGGER_MS = 60;

export function Portfolio() {
  const liveProjects = projects.filter((project) => project.status === "live");
  const soonCount = projects.length - liveProjects.length;

  return (
    <section id="trabalhos" className="scroll-mt-20 py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow="Trabalhos" title="Projetos selecionados" />
        <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:gap-12">
          {liveProjects.map((project, index) => (
            <Reveal key={project.id} delay={index * MAX_STAGGER_MS} className="h-full">
              <PortfolioCard project={project} />
            </Reveal>
          ))}
        </div>
        {soonCount > 0 ? (
          <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-dashed border-white/20 px-5 py-2.5">
            <BrandMark className="h-4 w-4 shrink-0 text-paper/25" />
            <p className="font-mono text-xs uppercase tracking-wider text-paper/50">
              +{soonCount} {soonCount === 1 ? "projeto" : "projetos"} em breve
            </p>
          </div>
        ) : null}
      </Container>
    </section>
  );
}
