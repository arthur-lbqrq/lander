import Image from "next/image";
import type { LiveProject } from "@/content/projects";
import { ArrowUpRightIcon } from "./icons";

export function PortfolioCard({ project }: { project: LiveProject }) {
  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-colors hover:border-paper/20">
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <Image
          src={project.image}
          alt={`Prévia visual da landing page — ${project.client}`}
          fill
          sizes="(min-width: 640px) 50vw, 100vw"
          className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.04]"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-paper/60">
          <span
            className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent transition-transform duration-300 group-hover:scale-125"
            aria-hidden="true"
          />
          {project.tag}
        </p>
        <h3 className="mt-2 flex items-center gap-1.5 font-display text-xl font-medium text-paper">
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
          {project.url ? (
            <ArrowUpRightIcon className="h-4 w-4 text-paper/40 transition-colors group-hover:text-accent" />
          ) : null}
        </h3>
        <p className="mt-2 line-clamp-3 text-base text-paper/70">
          {project.description}
        </p>
      </div>
    </div>
  );
}
