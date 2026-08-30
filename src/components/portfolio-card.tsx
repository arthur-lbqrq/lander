import Image from "next/image";
import type { LiveProject } from "@/content/projects";

export function PortfolioCard({ project }: { project: LiveProject }) {
  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/15 bg-white/[0.03] backdrop-blur-xl backdrop-brightness-125 transition-colors hover:border-white/25">
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <Image
          src={project.image}
          alt={`Prévia visual da landing page — ${project.client}`}
          fill
          sizes="(min-width: 640px) 50vw, 100vw"
          className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.04]"
        />
      </div>
      <div className="flex flex-1 flex-col p-7">
        <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-paper/60">
          <span
            className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent transition-transform duration-300 group-hover:scale-125"
            aria-hidden="true"
          />
          {project.tag}
        </p>
        <h3 className="mt-3 font-display text-xl font-medium text-paper">
          {project.url ? (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="after:absolute after:inset-0"
            >
              {project.client}
            </a>
          ) : (
            project.client
          )}
        </h3>
        <p className="mt-3 line-clamp-3 text-base text-paper/70">
          {project.description}
        </p>
      </div>
    </div>
  );
}
