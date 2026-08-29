"use client";

import { useLayoutEffect, useRef, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Stagger offset in ms — keep the total spread capped (~300–400ms) for a sibling list. */
  delay?: number;
  className?: string;
};

const EASE = "cubic-bezier(0.16, 1, 0.3, 1)";

/**
 * Scroll-triggered sibling-stagger reveal, reserved for genuine lists
 * (Portfolio cards, Process steps) — not a blanket "everything fades up"
 * utility. The hidden state is applied imperatively, after mount, directly
 * to the DOM node — never through React state or a server-rendered style —
 * so the default markup (and a blocked/failed script) always renders fully
 * visible.
 */
export function Reveal({ children, delay = 0, className = "" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const node = ref.current;
    if (!node) return;

    node.style.transition = `opacity 500ms ${EASE} ${delay}ms, transform 500ms ${EASE} ${delay}ms`;
    node.style.opacity = "0";
    node.style.transform = "translateY(12px)";

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.style.opacity = "1";
          node.style.transform = "translateY(0)";
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
