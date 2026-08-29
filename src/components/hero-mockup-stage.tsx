"use client";

import { useEffect, useRef } from "react";
import { BrowserMockup } from "./browser-mockup";

const MAX_TILT_DEG = 7;

/**
 * The instrument-cluster tilt stage for the hero's browser-mockup — see
 * DESIGN.md "Overdrive: Instrument Cluster Parallax". The whole mockup
 * tilts as one rigid plane toward the pointer, like a physical panel
 * viewed from a slightly different angle. Desktop/fine-pointer only: touch
 * devices keep the static mockup untouched (a tilt driven by the same
 * gesture used to scroll would fight the visitor, not delight them).
 * Fully skipped under prefers-reduced-motion — this is continuous spatial
 * motion, not a state-confirming transition, so it is removed outright
 * rather than just shortened.
 */
export function HeroMockupStage() {
  const stageRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const stage = stageRef.current;
    const card = cardRef.current;
    if (!stage || !card) return;

    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!canHover || reduced) return;

    function handleMove(event: PointerEvent) {
      if (frameRef.current !== null) return;
      frameRef.current = requestAnimationFrame(() => {
        frameRef.current = null;
        const rect = stage!.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        card!.style.transition = "transform 100ms linear";
        card!.style.transform =
          `rotateX(${(-y * MAX_TILT_DEG).toFixed(2)}deg) ` +
          `rotateY(${(x * MAX_TILT_DEG).toFixed(2)}deg)`;
      });
    }

    function handleLeave() {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
        frameRef.current = null;
      }
      card!.style.transition = "transform 600ms cubic-bezier(0.16, 1, 0.3, 1)";
      card!.style.transform = "rotateX(0deg) rotateY(0deg)";
    }

    stage.addEventListener("pointermove", handleMove);
    stage.addEventListener("pointerleave", handleLeave);
    return () => {
      stage.removeEventListener("pointermove", handleMove);
      stage.removeEventListener("pointerleave", handleLeave);
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <div ref={stageRef} className="[perspective:900px]">
      <div ref={cardRef} style={{ transform: "rotateX(0deg) rotateY(0deg)" }}>
        <BrowserMockup />
      </div>
    </div>
  );
}
