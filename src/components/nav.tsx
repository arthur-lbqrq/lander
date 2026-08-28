"use client";

import { useEffect, useState } from "react";
import { BrandMark } from "./brand-mark";
import { Container } from "./container";
import { MenuIcon, CloseIcon } from "./icons";
import { getWhatsappUrl } from "@/content/site";

const navLinks = [
  { href: "#trabalhos", label: "Trabalhos" },
  { href: "#processo", label: "Processo" },
  { href: "#depoimentos", label: "Depoimentos" },
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
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/80 backdrop-blur-sm">
      <Container>
        <div className="flex h-16 items-center justify-between sm:h-20">
          <a
            href="#"
            className="flex items-center gap-2 font-display text-lg font-medium text-paper"
            onClick={() => setOpen(false)}
          >
            <BrandMark className="h-6 w-6 text-paper" />
            lander.co
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
              className="rounded-full bg-accent px-5 py-2.5 font-mono text-sm text-paper transition-opacity hover:opacity-90"
            >
              Orçamento
            </a>
          </nav>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center text-paper md:hidden"
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
          className="border-t border-white/10 bg-ink md:hidden"
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
              className="mt-2 rounded-full bg-accent px-5 py-3 text-center font-mono text-sm text-paper"
              onClick={() => setOpen(false)}
            >
              Orçamento
            </a>
          </Container>
        </nav>
      ) : null}
    </header>
  );
}
