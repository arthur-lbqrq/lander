import type { StaticImageData } from "next/image";
import tinoScreenshot from "./images/tino.png";
import concrepisosScreenshot from "./images/concrepisos.png";
import jlsportsScreenshot from "./images/jlsports.png";
import xodokidsScreenshot from "./images/xodokids.png";

export type LiveProject = {
  status: "live";
  id: string;
  client: string;
  description: string;
  tag: string;
  image: StaticImageData;
  url?: string;
};

type UpcomingProject = {
  status: "soon";
  id: string;
};

export type Project = LiveProject | UpcomingProject;

/**
 * Os dois primeiros projetos estão prontos para receber conteúdo real:
 * troque `client`, `description`, `tag` e `image` pelos dados do case.
 * Os demais itens (status "soon") são contados num indicador único
 * abaixo do grid ("+N em breve") em vez de aparecerem como cards
 * individuais — basta trocar o status para "live" e preencher os campos
 * quando o próximo case estiver pronto.
 */
export const projects: Project[] = [
  {
    status: "live",
    id: "projeto-01",
    client: "Tino",
    description:
      "SaaS de gestão financeira para pequenos negócios: antecipa problemas de caixa com alertas inteligentes, antes que virem prejuízo.",
    tag: "SaaS Financeiro",
    image: tinoScreenshot,
    url: "https://tino-gfin-beta.vercel.app/",
  },
  {
    status: "live",
    id: "projeto-02",
    client: "CONCREPISOS",
    description:
      "Site institucional para empresa de pisos e acabamentos em Recife-PE, com portfólio de obras e captação direta via WhatsApp.",
    tag: "Pisos & Acabamentos",
    image: concrepisosScreenshot,
    url: "https://concrepisos.vercel.app/",
  },
  {
    status: "live",
    id: "projeto-03",
    client: "JL Sports",
    description:
      "Landing page para escola de futebol em Recife-PE, com catálogo de treinos por categoria, horários da semana e matrícula direta.",
    tag: "Escola de Futebol",
    image: jlsportsScreenshot,
    url: "https://jlsports.vercel.app/",
  },
  {
    status: "live",
    id: "projeto-04",
    client: "Xodó Kids",
    description:
      "Landing page para salão de beleza infantil em Camaragibe-PE, com agendamento direto pelo WhatsApp e certificado de primeiro corte.",
    tag: "Salão Infantil",
    image: xodokidsScreenshot,
    url: "https://xodokids.vercel.app/",
  },
  { status: "soon", id: "projeto-05" },
  { status: "soon", id: "projeto-06" },
];
