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
 * Color/motion: a specific preset the user dialed in and asked to apply
 * verbatim (`hueShift={20}`, `speed={1}`, `resolutionScale={1.25}`, the rest
 * off) — the shader's own hue, not locked to a single accent this time.
 *
 * `resolutionScale > 1` (supersampling for a crisper render) hits a real
 * ogl bug: `Renderer.setSize()` writes the canvas's CSS width/height as
 * inline pixel styles derived from that same scaled value (see
 * node_modules/ogl/src/core/Renderer.js), which would overflow the
 * fixed viewport-filling container instead of just rendering at a higher
 * internal resolution. Fixed by forcing the canvas's CSS box back to
 * 100%/100% with an `!important` utility scoped to this instance
 * (`[&_canvas]:w-full! [&_canvas]:h-full!`) — this beats the inline style
 * without touching the vendored DarkVeil.css, so the canvas.width/height
 * attributes (the actual framebuffer, still scaled by resolutionScale *
 * devicePixelRatio) stay decoupled from its on-screen size.
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
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 opacity-[0.3] [&_canvas]:w-full! [&_canvas]:h-full!"
    >
      {mounted ? (
        <DarkVeil
          hueShift={20}
          noiseIntensity={0}
          scanlineIntensity={0}
          speed={1}
          scanlineFrequency={0}
          warpAmount={0}
          resolutionScale={1.25}
        />
      ) : null}
    </div>
  );
}
