import { getWhatsappUrl, siteConfig } from "@/content/site";
import { testimonials } from "@/content/testimonials";
import { Container } from "./container";
import { BrandMark } from "./brand-mark";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line py-16">
      <Container>
        <div className="flex flex-col gap-12 sm:flex-row sm:justify-between">
          <div className="max-w-xs">
            <a
              href="#"
              className="flex items-center gap-2 font-display text-lg font-medium tracking-[-0.03em] text-paper"
            >
              <BrandMark className="h-6 w-6 text-paper" />
              {/* Wrapped in one span so the parent's flex `gap-2` (icon-to-
                  wordmark spacing) doesn't also land between "lander" and
                  ".co". .co stays blue per brand rule — logotype text is
                  exempt from WCAG 1.4.3 contrast. */}
              <span>
                lander<span className="text-accent">.co</span>
              </span>
            </a>
          </div>

          <div className="grid grid-cols-2 gap-12 sm:flex sm:gap-20">
            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-paper/60">
                Navegação
              </p>
              <ul className="mt-5 space-y-3">
                <li>
                  <a
                    href="#trabalhos"
                    className="font-mono text-sm text-paper/70 hover:text-paper"
                  >
                    Trabalhos
                  </a>
                </li>
                <li>
                  <a
                    href="#processo"
                    className="font-mono text-sm text-paper/70 hover:text-paper"
                  >
                    Processo
                  </a>
                </li>
                {testimonials.length > 0 ? (
                  <li>
                    <a
                      href="#depoimentos"
                      className="font-mono text-sm text-paper/70 hover:text-paper"
                    >
                      Depoimentos
                    </a>
                  </li>
                ) : null}
              </ul>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-paper/60">
                Contato
              </p>
              <ul className="mt-5 space-y-3">
                <li>
                  <a
                    href={getWhatsappUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-sm text-paper/70 hover:text-paper"
                  >
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a
                    href={siteConfig.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-sm text-paper/70 hover:text-paper"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="font-mono text-sm text-paper/70 hover:text-paper"
                  >
                    E-mail
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-line pt-8 text-xs text-paper/60">
          <p>© {year} lander.co. Todos os direitos reservados.</p>
        </div>
      </Container>
    </footer>
  );
}
