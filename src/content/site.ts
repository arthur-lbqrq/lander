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

  // TODO: trocar pelo número real, apenas dígitos (código do país + DDD + número).
  whatsappNumber: "55SEUNUMEROAQUI",
  whatsappMessage: "Olá! Vim pelo site e quero um orçamento para minha landing page.",

  // TODO: trocar pelo e-mail de contato real.
  email: "ola@lander.co",

  instagramHandle: "@lander.co",
  instagramUrl: "https://instagram.com/lander.co",
} as const;

export function getWhatsappUrl(message: string = siteConfig.whatsappMessage) {
  const query = new URLSearchParams({ text: message });
  return `https://wa.me/${siteConfig.whatsappNumber}?${query.toString()}`;
}
