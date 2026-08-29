"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Looping "power on" trace around the hero mockup's frame — see DESIGN.md
 * "Overdrive: Panel Power-Up". A real pixel viewBox (via ResizeObserver)
 * keeps the corners circular and the stroke width uniform across the
 * mockup's responsive aspect ratio; SVG `pathLength` keeps the dash math a
 * plain 0→1 draw regardless of actual perimeter length. Draws in, holds,
 * fades out, pauses, then draws again — the frame only ever reads as its
 * normal Hairline border between passes, this never becomes a permanent
 * new border treatment. Paused via IntersectionObserver/visibilitychange
 * whenever the mockup isn't actually visible, so an indefinite loop never
 * costs anything off-screen or in a background tab.
 */
export function PowerTraceFrame() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const rectRef = useRef<SVGRectElement>(null);
  const [size, setSize] = useState<{ w: number; h: number } | null>(null);

  useEffect(() => {
    const node = wrapperRef.current;
    if (!node) return;
    const observer = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      if (width > 0 && height > 0) setSize({ w: width, h: height });
    });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const node = wrapperRef.current;
    if (!node) return;

    let isIntersecting = false;

    function applyPlayState() {
      const rect = rectRef.current;
      if (!rect) return;
      rect.style.animationPlayState = isIntersecting && !document.hidden ? "running" : "paused";
    }

    const intersection = new IntersectionObserver(
      ([entry]) => {
        isIntersecting = entry.isIntersecting;
        applyPlayState();
      },
      { threshold: 0 }
    );
    intersection.observe(node);
    document.addEventListener("visibilitychange", applyPlayState);

    return () => {
      intersection.disconnect();
      document.removeEventListener("visibilitychange", applyPlayState);
    };
  }, [size]);

  return (
    <div ref={wrapperRef} className="pointer-events-none absolute inset-0" aria-hidden="true">
      {size ? (
        <svg
          viewBox={`0 0 ${size.w} ${size.h}`}
          width={size.w}
          height={size.h}
          className="absolute inset-0"
        >
          <rect
            ref={rectRef}
            x="1"
            y="1"
            width={Math.max(size.w - 2, 0)}
            height={Math.max(size.h - 2, 0)}
            rx="15"
            fill="none"
            stroke="#2D5CFF"
            strokeWidth="1.5"
            pathLength={1}
            strokeDasharray={1}
            style={{
              strokeDashoffset: 1,
              animation: "power-trace 3s cubic-bezier(0.65, 0, 0.35, 1) 950ms infinite",
            }}
          />
        </svg>
      ) : null}
    </div>
  );
}
