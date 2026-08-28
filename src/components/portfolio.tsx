import { projects } from "@/content/projects";
import { Container } from "./container";
import { SectionHeading } from "./section-heading";
import { PortfolioCard } from "./portfolio-card";

export function Portfolio() {
  return (
    <section id="trabalhos" className="scroll-mt-20 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Trabalhos"
          title="Projetos selecionados"
          description="Uma seleção de landing pages entregues — e o que vem a seguir."
        />
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <PortfolioCard key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
