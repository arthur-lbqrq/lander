"use client";

import { useEffect, useRef, useState } from "react";
import { BrandMark } from "./brand-mark";
import { MenuIcon, CloseIcon } from "./icons";
import { getWhatsappUrl } from "@/content/site";
import { testimonials } from "@/content/testimonials";

const navLinks = [
  { href: "#trabalhos", label: "Trabalhos" },
  { href: "#processo", label: "Processo" },
  // A seção de depoimentos fica oculta enquanto testimonials.ts está
  // vazio (ver testimonials.tsx); sem isso o link levaria a lugar nenhum.
  ...(testimonials.length > 0
    ? [{ href: "#depoimentos", label: "Depoimentos" }]
    : []),
];

/**
 * Pill flutuante — design_handoff_navbar_hero/README.md. `isScrolled`
 * escurece/reforça a pill ao rolar (>24px, per handoff); `open` controla o
 * painel mobile full-screen, com trava de scroll do body, fechamento em
 * Escape e em clique fora, conforme a seção State Management do handoff.
 *
 * Abre com `navbar-open` (globals.css) ao carregar a página: uma janela de
 * revelação arredondada começa como um círculo no centro da pill (do
 * tamanho da sua própria altura) e se abre na horizontal até revelar a
 * pill inteira. É `clip-path`, não `transform`/`scale` — a marca, os links
 * e o CTA nunca são redimensionados ou distorcidos, só progressivamente
 * descobertos, permanecendo estáticos o tempo todo. 1.5s, ease-in-out
 * (`cubic-bezier(0.65, 0, 0.35, 1)`, já usada em power-trace) em vez da
 * curva ease-out mais rápida do resto do site, pra ler como fluida nessa
 * duração em vez de uma partida brusca.
 */
export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let ticking = false;
    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 24);
        ticking = false;
      });
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    function onPointerDown(event: PointerEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-6 pt-4 sm:px-8 sm:pt-5">
      <nav
        ref={navRef}
        aria-label="Principal"
        className="flex w-full max-w-[880px] items-center justify-between gap-5 rounded-full py-2 pr-3 pl-4 shadow-[inset_0_1px_0_rgba(250,250,250,.06),0_20px_50px_rgba(0,0,0,.55)] transition-[background,border-color] duration-[240ms] ease-out"
        style={{
          border: `1px solid rgba(250,250,250,${scrolled ? 0.16 : 0.1})`,
          background: `rgba(16,16,18,${scrolled ? 0.78 : 0.55})`,
          backdropFilter: "blur(18px) saturate(1.2)",
          animation: "navbar-open 1500ms cubic-bezier(0.65, 0, 0.35, 1) both",
        }}
      >
        <a
          href="#"
          className="flex items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <BrandMark className="h-[22px] w-[22px] shrink-0 text-paper" />
          {/* Wrapped in one span so the parent's flex gap doesn't also land
              between "lander" and ".co". .co stays blue per brand rule even
              below AA at this size — logotype text is exempt from WCAG 1.4.3. */}
          <span className="font-display text-[17px] font-medium tracking-[-0.02em] text-paper">
            lander<span className="text-accent">.co</span>
          </span>
        </a>

        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-1.5 min-[860px]:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-3 py-2 text-[15px] font-medium text-[#A8A8A8] transition-colors duration-[180ms] ease-out hover:bg-white/[0.06] hover:text-paper"
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            href={getWhatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 rounded-full bg-paper px-[18px] py-[9px] font-display text-[15px] font-medium tracking-[-0.01em] text-ink transition-[background,color,transform] duration-[180ms] ease-out hover:-translate-y-px hover:bg-accent hover:text-paper"
          >
            Orçamento
          </a>

          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center text-paper min-[860px]:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? (
              <CloseIcon className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      {open ? (
        <div
          id="mobile-menu"
          aria-label="Menu móvel"
          className="fixed inset-0 top-0 z-40 flex flex-col items-center justify-center gap-8 bg-ink min-[860px]:hidden"
          style={{ animation: "drawer-in 220ms cubic-bezier(0.16, 1, 0.3, 1) both" }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-display text-[32px] font-medium tracking-[-0.02em] text-paper"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      ) : null}
    </header>
  );
}
