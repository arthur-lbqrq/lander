"use client";

import { useEffect, useState } from "react";
import DarkVeil from "./DarkVeil";

/**
 * Site-wide ambient backdrop, fixed behind every section (negative z-index,
 * painted before the page's normal in-flow content — see CSS 2.1 stacking
 * order Appendix E). Opaque panels sit on top of it untouched; it shows
 * through the glass cards, the translucent nav, and the hero.
 *
 * DarkVeil.jsx/.css are vendored verbatim from react-bits (@react-bits
 * registry) — do not hand-edit them; all integration and identity concerns
 * live here instead. Two additions the vendor component doesn't make on its
 * own, matching this project's motion discipline (see DESIGN.md Motion):
 * skip it entirely under `prefers-reduced-motion`, and unmount the canvas
 * (stopping its uncapped requestAnimationFrame loop) while the tab is
 * hidden.
 *
 * Color: the shader's own generative pattern (a CPPN neural net) spans many
 * hues on its own. Locked to this project's exact Signal Blue instead: the
 * canvas is desaturated to pure luminance (`grayscale`) and recolored with
 * an isolated `mix-blend-mode: color` overlay painted in `--color-accent` —
 * the exact brand blue, hue-for-hue, with the shader supplying only
 * luminance and motion. `isolate` on the wrapper scopes that blend to just
 * this layer's own canvas, not the page content further behind it.
 *
 * No `resolutionScale` override: ogl's `Renderer.setSize()` writes the
 * canvas's CSS width/height as inline pixel styles derived from that same
 * value (see node_modules/ogl/src/core/Renderer.js), which overrides
 * DarkVeil.css's `width:100%;height:100%` — any value below 1 visibly
 * shrinks the canvas to a smaller box anchored at the container's
 * top-left instead of filling it. Left at the component's default of 1;
 * device-pixel-ratio capping inside DarkVeil.jsx already keeps the actual
 * framebuffer cost sane.
 */
export function DarkVeilBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const syncToVisibility = () => setMounted(document.visibilityState === "visible");
    syncToVisibility();
    document.addEventListener("visibilitychange", syncToVisibility);
    return () => document.removeEventListener("visibilitychange", syncToVisibility);
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 isolate opacity-[0.22]">
      {mounted ? (
        <>
          <div className="absolute inset-0 grayscale contrast-125 brightness-90">
            <DarkVeil />
          </div>
          <div className="absolute inset-0 mix-blend-color bg-accent" />
        </>
      ) : null}
    </div>
  );
}
