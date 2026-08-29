"use client";

import { useEffect, useRef, useState } from "react";

type GaugeProps = {
  value: string;
  label: string;
  /** Needle position within the dial's arc, 0 (min) to 1 (max). */
  fraction: number;
  /** Fraction past which the arc reads as the "good" zone, drawn in Signal Blue. */
  goodFrom?: number;
};

const ARC_START = -120;
const ARC_END = 120;
const TICKS = [0, 0.25, 0.5, 0.75, 1];

function pointOnArc(fraction: number, radius: number) {
  const angle = (ARC_START + (ARC_END - ARC_START) * fraction - 90) * (Math.PI / 180);
  return { x: 50 + radius * Math.cos(angle), y: 50 + radius * Math.sin(angle) };
}

function describeArc(fromFraction: number, toFraction: number, radius: number) {
  const start = pointOnArc(fromFraction, radius);
  const end = pointOnArc(toFraction, radius);
  const sweepDegrees = (ARC_END - ARC_START) * (toFraction - fromFraction);
  const largeArcFlag = sweepDegrees > 180 ? 1 : 0;
  return `M ${start.x} ${start.y} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${end.x} ${end.y}`;
}

/**
 * Instrument bezel (globals.css doesn't own this — it's scoped to gauge/dial
 * faces only, per the "Painel de instrumentos" direction's approved amendment
 * to the Flat-by-Default rule). No other component in the system uses it.
 */
export const GAUGE_BEZEL_SHADOW =
  "inset 0 1px 2px rgba(0,0,0,0.5), inset 0 -1px 0 rgba(250,250,250,0.04)";

export function Gauge({ value, label, fraction, goodFrom = 0.7 }: GaugeProps) {
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

  const needleAngle = ARC_START + (ARC_END - ARC_START) * (swept ? fraction : 0);

  return (
    <div ref={ref} className="flex flex-col items-center gap-3 text-center">
      <div
        className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-line bg-ink sm:h-20 sm:w-20"
        style={{ boxShadow: GAUGE_BEZEL_SHADOW }}
      >
        <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" aria-hidden="true">
          <path
            d={describeArc(0, 1, 42)}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className="text-line"
          />
          <path
            d={describeArc(goodFrom, 1, 42)}
            fill="none"
            stroke="#2D5CFF"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.5"
          />
          {TICKS.map((t) => {
            const inner = pointOnArc(t, 34);
            const outer = pointOnArc(t, 38);
            return (
              <line
                key={t}
                x1={inner.x}
                y1={inner.y}
                x2={outer.x}
                y2={outer.y}
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-line"
              />
            );
          })}
          <line
            x1="50"
            y1="50"
            x2="50"
            y2="20"
            stroke="#2D5CFF"
            strokeWidth="2.5"
            strokeLinecap="round"
            style={{
              transformOrigin: "50px 50px",
              transform: `rotate(${needleAngle}deg)`,
              // Back-ease-out: the needle overshoots slightly past its real
              // value, then settles — a calibrated instrument, not a UI tween.
              transition: "transform 900ms cubic-bezier(0.34, 1.56, 0.64, 1)",
            }}
          />
          <circle cx="50" cy="50" r="3.5" fill="#2D5CFF" />
        </svg>
      </div>
      <div>
        <p className="font-display text-xl font-medium tracking-[-0.03em] text-paper sm:text-2xl">
          {value}
        </p>
        <p className="mt-1 font-mono text-[11px] leading-snug text-paper/60 uppercase tracking-[0.16em]">
          {label}
        </p>
      </div>
    </div>
  );
}
