/**
 * Configuração central do site. Troque os valores de placeholder abaixo
 * (marcados com TODO) pelos dados reais antes do lançamento.
 */
export const siteConfig = {
  name: "lander.co",
  title: "lander.co — Landing pages de alta conversão",
  description:
    "Estúdio freelance especializado em landing pages de alta conversão para pequenos negócios. Do briefing à entrega, com precisão técnica.",
  // TODO: trocar pelo domínio real ao configurar o projeto na Vercel.
  url: "https://lander.co",
  locale: "pt_BR",

  whatsappNumber: "5581993552338",
  whatsappMessage: "Olá! Vim pelo site e quero um orçamento para minha landing page.",

  // TODO: trocar pelo e-mail de contato real.
  email: "ola@lander.co",

  instagramHandle: "@lander.co",
  instagramUrl: "https://instagram.com/lander.co",
} as const;

// Typed as `string`, not narrowed to its literal — `siteConfig` is `as const`,
// so a bare literal here would make this comparison a compile-time-provable
// "always false" (TS2367) the moment whatsappNumber is a real, different
// number, which is exactly the state this guard needs to detect correctly.
const WHATSAPP_PLACEHOLDER: string = "55SEUNUMEROAQUI";

export function getWhatsappUrl(message: string = siteConfig.whatsappMessage) {
  if (siteConfig.whatsappNumber === WHATSAPP_PLACEHOLDER) {
    const warning =
      `whatsappNumber em src/content/site.ts ainda é o placeholder "${WHATSAPP_PLACEHOLDER}" — ` +
      "todo CTA do site aponta para um número que não existe. Troque pelo número real antes de publicar.";
    if (process.env.NODE_ENV === "production") {
      throw new Error(warning);
    }
    console.warn(`[lander.co] ${warning}`);
  }

  const query = new URLSearchParams({ text: message });
  return `https://wa.me/${siteConfig.whatsappNumber}?${query.toString()}`;
}
