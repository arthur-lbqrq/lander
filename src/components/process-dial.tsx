"use client";

import { useEffect, useRef, useState } from "react";
import { GAUGE_BEZEL_SHADOW } from "./gauge";

const DETENTS = [-90, -30, 30, 90];

export function ProcessDial({ labels }: { labels: string[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [swept, setSwept] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSwept(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="mx-auto flex flex-col items-center gap-4" aria-hidden="true">
      <div
        className="relative flex h-28 w-28 items-center justify-center rounded-full border border-line bg-ink sm:h-32 sm:w-32"
        style={{ boxShadow: GAUGE_BEZEL_SHADOW }}
      >
        <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
          {DETENTS.map((angle, index) => {
            const rad = ((angle - 90) * Math.PI) / 180;
            const inner = { x: 50 + 34 * Math.cos(rad), y: 50 + 34 * Math.sin(rad) };
            const outer = { x: 50 + 40 * Math.cos(rad), y: 50 + 40 * Math.sin(rad) };
            const labelPoint = { x: 50 + 30 * Math.cos(rad), y: 50 + 30 * Math.sin(rad) };
            return (
              <g key={angle}>
                <line
                  x1={inner.x}
                  y1={inner.y}
                  x2={outer.x}
                  y2={outer.y}
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-line"
                />
                <text
                  x={labelPoint.x}
                  y={labelPoint.y}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="fill-paper/50 font-mono"
                  style={{ fontSize: "7px" }}
                >
                  {String(index + 1).padStart(2, "0")}
                </text>
              </g>
            );
          })}
          <line
            x1="50"
            y1="50"
            x2="50"
            y2="16"
            stroke="#2D5CFF"
            strokeWidth="3"
            strokeLinecap="round"
            style={{
              transformOrigin: "50px 50px",
              transform: `rotate(${DETENTS[0]}deg)`,
              animation: swept ? "dial-sweep 2.4s cubic-bezier(0.16, 1, 0.3, 1) forwards" : "none",
            }}
          />
          <circle cx="50" cy="50" r="4" fill="#2D5CFF" />
        </svg>
      </div>
      <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-paper/50">
        {labels.join(" · ")}
      </p>
    </div>
  );
}
