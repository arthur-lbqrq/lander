"use client";

import { useEffect, useState } from "react";
import { BrandMark } from "./brand-mark";
import { Container } from "./container";
import { MenuIcon, CloseIcon, ArrowUpRightIcon, SwitchIcon } from "./icons";
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

export function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/50 backdrop-blur-xl">
      <Container>
        <div className="flex h-16 items-center justify-between sm:h-20">
          <a
            href="#"
            className="flex items-center gap-2 font-display text-lg font-medium tracking-[-0.03em] text-paper"
            onClick={() => setOpen(false)}
          >
            <BrandMark className="h-6 w-6 text-paper" />
            {/* Wrapped in one span so the parent's flex `gap-2` (icon-to-
                wordmark spacing) doesn't also land between "lander" and
                ".co" — a bare text node next to the span would otherwise
                become its own flex item. .co stays blue per brand rule
                even below AA at this size — logotype text is exempt from
                WCAG 1.4.3. */}
            <span>
              lander<span className="text-accent">.co</span>
            </span>
          </a>

          <nav aria-label="Principal" className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-mono text-sm text-paper/70 transition-colors hover:text-paper"
              >
                {link.label}
              </a>
            ))}
            <a
              href={getWhatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-md border border-accent px-5 py-2.5 font-mono text-sm text-paper transition hover:bg-accent/10 active:scale-[0.97]"
            >
              <SwitchIcon className="h-2.5 w-5" />
              Orçamento
              <ArrowUpRightIcon className="h-3.5 w-3.5" />
            </a>
          </nav>

          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center text-paper md:hidden"
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
      </Container>

      {open ? (
        <nav
          id="mobile-menu"
          aria-label="Menu móvel"
          className="border-t border-white/10 bg-ink/70 backdrop-blur-xl md:hidden"
          style={{ animation: "drawer-in 200ms cubic-bezier(0.16, 1, 0.3, 1) both" }}
        >
          <Container className="flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-md px-2 py-3 font-mono text-sm text-paper/80 hover:bg-white/5 hover:text-paper"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={getWhatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-2 inline-flex items-center justify-center gap-2 rounded-md border border-accent px-5 py-3 font-mono text-sm text-paper transition active:scale-[0.97]"
              onClick={() => setOpen(false)}
            >
              <SwitchIcon className="h-2.5 w-5" />
              Orçamento
              <ArrowUpRightIcon className="h-3.5 w-3.5" />
            </a>
          </Container>
        </nav>
      ) : null}
    </header>
  );
}
