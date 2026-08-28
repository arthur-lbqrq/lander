import { getWhatsappUrl, siteConfig } from "@/content/site";
import { Container } from "./container";
import { BrandMark } from "./brand-mark";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 py-12">
      <Container>
        <div className="flex flex-col gap-10 sm:flex-row sm:justify-between">
          <div className="max-w-xs">
            <a
              href="#"
              className="flex items-center gap-2 font-display text-lg font-medium text-paper"
            >
              <BrandMark className="h-6 w-6 text-paper" />
              lander.co
            </a>
            <p className="mt-3 text-sm text-paper/60">
              Landing pages de alta conversão para pequenos negócios.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:flex sm:gap-16">
            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-paper/60">
                Navegação
              </p>
              <ul className="mt-4 space-y-2">
                <li>
                  <a
                    href="#trabalhos"
                    className="text-sm text-paper/70 hover:text-paper"
                  >
                    Trabalhos
                  </a>
                </li>
                <li>
                  <a
                    href="#processo"
                    className="text-sm text-paper/70 hover:text-paper"
                  >
                    Processo
                  </a>
                </li>
                <li>
                  <a
                    href="#depoimentos"
                    className="text-sm text-paper/70 hover:text-paper"
                  >
                    Depoimentos
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-paper/60">
                Contato
              </p>
              <ul className="mt-4 space-y-2">
                <li>
                  <a
                    href={getWhatsappUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-paper/70 hover:text-paper"
                  >
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a
                    href={siteConfig.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-paper/70 hover:text-paper"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-sm text-paper/70 hover:text-paper"
                  >
                    E-mail
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-paper/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} lander.co. Todos os direitos reservados.</p>
          <p className="font-mono">Construído com Next.js + Tailwind CSS.</p>
        </div>
      </Container>
    </footer>
  );
}
