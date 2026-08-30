"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import type { LiveProject } from "@/content/projects";

/**
 * A cursor-tracked light spotlight (radial-gradient positioned via CSS
 * custom properties) plus a lift/scale on the whole card — the portfolio
 * grid's signature interactive moment. Desktop/fine-pointer only
 * (`hover: hover` + `pointer: fine`, same gate as `hero-mockup-stage.tsx`):
 * touch devices keep the plain hover state, since there's no cursor to
 * track. The spotlight itself is `pointer-events-none` and sits behind the
 * card's real content, so it never interferes with the click-through link.
 */
export function PortfolioCard({ project }: { project: LiveProject }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    const node = ref.current;
    if (!node) return;

    function onPointerMove(event: PointerEvent) {
      const rect = node!.getBoundingClientRect();
      node!.style.setProperty("--spot-x", `${event.clientX - rect.left}px`);
      node!.style.setProperty("--spot-y", `${event.clientY - rect.top}px`);
    }

    node.addEventListener("pointermove", onPointerMove);
    return () => node.removeEventListener("pointermove", onPointerMove);
  }, []);

  return (
    <div
      ref={ref}
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/15 bg-white/[0.03] backdrop-blur-xl backdrop-brightness-125 transition-[transform,border-color] duration-300 ease-out hover:-translate-y-1.5 hover:border-white/25"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(280px circle at var(--spot-x, 50%) var(--spot-y, 50%), rgba(250,250,250,0.08), transparent 70%)",
        }}
      />
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <Image
          src={project.image}
          alt={`Prévia visual da landing page — ${project.client}`}
          fill
          sizes="(min-width: 640px) 50vw, 100vw"
          className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.06]"
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
        <p className="mt-3 line-clamp-3 text-base text-paper/70 transition-colors duration-300 group-hover:text-paper/85">
          {project.description}
        </p>
      </div>
    </div>
  );
}
